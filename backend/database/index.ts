import "server-only";
import { randomUUID } from "node:crypto";
import { prepare, transaction } from "./mysql";
import type {
  AdminUser,
  PricingPlan,
  BlogPost,
  LegalDocument,
  LegalAgreementRecord,
  CookieConsentRecord,
  AnalyticsEvent,
  MediaItem,
  WebsiteSettings,
  AuditLog,
  Lead,
  NewsletterSubscriber,
} from "./schema";

// Schema now lives in version-controlled migrations (src/lib/db/migrations),
// applied with `npm run migrate`. Seeding is done by scripts/seed.mjs.

// -------------------------------------------------------------
// REPOSITORY API METHODS
// -------------------------------------------------------------

// --- Admins ---
export async function getAdminByEmail(email: string): Promise<AdminUser | null> {
  const row = await prepare("SELECT * FROM website_admins WHERE email = ?").get(email) as AdminUser | undefined;
  return row || null;
}

export async function getAdminById(id: string): Promise<AdminUser | null> {
  const row = await prepare("SELECT * FROM website_admins WHERE id = ?").get(id) as AdminUser | undefined;
  return row || null;
}

export async function listAdmins(): Promise<Omit<AdminUser, "password_hash">[]> {
  const rows = await prepare("SELECT id, name, email, role, is_active, last_login_at, created_at, updated_at FROM website_admins ORDER BY created_at ASC").all() as Omit<AdminUser, "password_hash">[];
  return rows;
}

export async function countActiveSuperAdmins(): Promise<number> {
  const row = await prepare("SELECT COUNT(*) AS count FROM website_admins WHERE role = 'super_admin' AND is_active = 1").get() as { count: number };
  return row.count;
}

export async function createAdmin(data: Omit<AdminUser, "created_at" | "updated_at">): Promise<AdminUser> {
  const now = new Date().toISOString();
  const admin: AdminUser = {
    ...data,
    created_at: now,
    updated_at: now,
  };
  await prepare(`
    INSERT INTO website_admins (id, name, email, password_hash, role, is_active, last_login_at, created_at, updated_at)
    VALUES (@id, @name, @email, @password_hash, @role, @is_active, @last_login_at, @created_at, @updated_at)
  `).run(admin);
  return admin;
}

export async function updateAdmin(id: string, updates: Partial<AdminUser>): Promise<AdminUser | null> {
  const existing = await getAdminById(id);
  if (!existing) return null;

  const updated: AdminUser = {
    ...existing,
    ...updates,
    updated_at: new Date().toISOString(),
  };

  await prepare(`
    UPDATE website_admins
    SET name = @name, email = @email, password_hash = @password_hash, role = @role, is_active = @is_active, updated_at = @updated_at
    WHERE id = @id
  `).run(updated);

  return updated;
}

export async function deleteAdmin(id: string): Promise<boolean> {
  const res = await prepare("DELETE FROM website_admins WHERE id = ?").run(id);
  return res.changes > 0;
}

export async function updateAdminLastLogin(id: string): Promise<void> {
  const now = new Date().toISOString();
  await prepare("UPDATE website_admins SET last_login_at = ?, updated_at = ? WHERE id = ?").run(now, now, id);
}

// --- Pricing Plans ---
export async function getPricingPlans(onlyActive = false): Promise<PricingPlan[]> {
  const query = onlyActive
    ? "SELECT * FROM website_pricing_plans WHERE is_active = 1 ORDER BY display_order ASC"
    : "SELECT * FROM website_pricing_plans ORDER BY display_order ASC";
  const rows = await prepare(query).all() as any[];
  return rows.map((r) => ({
    ...r,
    features: JSON.parse(r.features || "[]"),
  }));
}

export async function getPricingPlanById(id: string): Promise<PricingPlan | null> {
  const row = await prepare("SELECT * FROM website_pricing_plans WHERE id = ?").get(id) as any;
  if (!row) return null;
  return {
    ...row,
    features: JSON.parse(row.features || "[]"),
  };
}

export async function createPricingPlan(data: Omit<PricingPlan, "created_at" | "updated_at">): Promise<PricingPlan> {
  const now = new Date().toISOString();
  const plan: PricingPlan = {
    ...data,
    created_at: now,
    updated_at: now,
  };
  await prepare(`
    INSERT INTO website_pricing_plans (id, slug, name, description, price_monthly, price_annual, annual_factor, limits_text, features, is_popular, badge_text, cta_text, cta_url, display_order, is_active, created_at, updated_at)
    VALUES (@id, @slug, @name, @description, @price_monthly, @price_annual, @annual_factor, @limits_text, @features, @is_popular, @badge_text, @cta_text, @cta_url, @display_order, @is_active, @created_at, @updated_at)
  `).run({
    ...plan,
    features: JSON.stringify(plan.features),
  });
  return plan;
}

export async function updatePricingPlan(id: string, updates: Partial<PricingPlan>): Promise<PricingPlan | null> {
  const existing = await getPricingPlanById(id);
  if (!existing) return null;

  const updated: PricingPlan = {
    ...existing,
    ...updates,
    updated_at: new Date().toISOString(),
  };

  await prepare(`
    UPDATE website_pricing_plans
    SET slug = @slug, name = @name, description = @description, price_monthly = @price_monthly, price_annual = @price_annual,
        annual_factor = @annual_factor, limits_text = @limits_text, features = @features, is_popular = @is_popular,
        badge_text = @badge_text, cta_text = @cta_text, cta_url = @cta_url, display_order = @display_order,
        is_active = @is_active, updated_at = @updated_at
    WHERE id = @id
  `).run({
    ...updated,
    features: JSON.stringify(updated.features),
  });

  return updated;
}

export async function deletePricingPlan(id: string): Promise<boolean> {
  const res = await prepare("DELETE FROM website_pricing_plans WHERE id = ?").run(id);
  return res.changes > 0;
}

// --- Blog Posts ---
export async function getBlogPosts(options?: {
  status?: string;
  category?: string;
  search?: string;
  limit?: number;
  offset?: number;
}): Promise<{ posts: BlogPost[]; total: number }> {
  const conditions: string[] = [];
  const params: any[] = [];

  if (options?.status) {
    conditions.push("status = ?");
    params.push(options.status);
  }
  if (options?.category && options.category !== "All") {
    conditions.push("category = ?");
    params.push(options.category);
  }
  if (options?.search) {
    conditions.push("(title LIKE ? OR excerpt LIKE ? OR content LIKE ?)");
    const s = `%${options.search}%`;
    params.push(s, s, s);
  }

  const whereClause = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
  const countRow = await prepare(`SELECT COUNT(*) as total FROM website_blog_posts ${whereClause}`).get(...params) as { total: number };

  const limit = options?.limit || 20;
  const offset = options?.offset || 0;

  const rows = await prepare(`
    SELECT * FROM website_blog_posts
    ${whereClause}
    ORDER BY CASE WHEN published_at IS NOT NULL THEN published_at ELSE created_at END DESC
    LIMIT ? OFFSET ?
  `).all(...params, limit, offset) as any[];

  return {
    posts: rows.map((r) => ({
      ...r,
      tags: JSON.parse(r.tags || "[]"),
    })),
    total: countRow.total,
  };
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const row = await prepare("SELECT * FROM website_blog_posts WHERE slug = ?").get(slug) as any;
  if (!row) return null;
  return {
    ...row,
    tags: JSON.parse(row.tags || "[]"),
  };
}

export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  const row = await prepare("SELECT * FROM website_blog_posts WHERE id = ?").get(id) as any;
  if (!row) return null;
  return {
    ...row,
    tags: JSON.parse(row.tags || "[]"),
  };
}

export async function createBlogPost(data: Omit<BlogPost, "created_at" | "updated_at" | "view_count">): Promise<BlogPost> {
  const now = new Date().toISOString();
  const post: BlogPost = {
    ...data,
    view_count: 0,
    created_at: now,
    updated_at: now,
  };
  await prepare(`
    INSERT INTO website_blog_posts (id, slug, title, excerpt, content, cover_image, author_name, author_role, author_avatar, category, tags, status, published_at, scheduled_at, seo_title, seo_description, og_image, view_count, created_at, updated_at)
    VALUES (@id, @slug, @title, @excerpt, @content, @cover_image, @author_name, @author_role, @author_avatar, @category, @tags, @status, @published_at, @scheduled_at, @seo_title, @seo_description, @og_image, @view_count, @created_at, @updated_at)
  `).run({
    ...post,
    tags: JSON.stringify(post.tags),
  });
  return post;
}

export async function updateBlogPost(id: string, updates: Partial<BlogPost>): Promise<BlogPost | null> {
  const existing = await getBlogPostById(id);
  if (!existing) return null;

  const updated: BlogPost = {
    ...existing,
    ...updates,
    updated_at: new Date().toISOString(),
  };

  await prepare(`
    UPDATE website_blog_posts
    SET slug = @slug, title = @title, excerpt = @excerpt, content = @content, cover_image = @cover_image,
        author_name = @author_name, author_role = @author_role, author_avatar = @author_avatar,
        category = @category, tags = @tags, status = @status, published_at = @published_at,
        scheduled_at = @scheduled_at, seo_title = @seo_title, seo_description = @seo_description,
        og_image = @og_image, updated_at = @updated_at
    WHERE id = @id
  `).run({
    ...updated,
    tags: JSON.stringify(updated.tags),
  });

  return updated;
}

export async function deleteBlogPost(id: string): Promise<boolean> {
  const res = await prepare("DELETE FROM website_blog_posts WHERE id = ?").run(id);
  return res.changes > 0;
}

export async function incrementBlogPostViews(id: string): Promise<void> {
  await prepare("UPDATE website_blog_posts SET view_count = view_count + 1 WHERE id = ? OR slug = ?").run(id, id);
}

// --- Legal Documents ---
export async function getActiveLegalDocument(slug: string): Promise<LegalDocument | null> {
  const row = await prepare("SELECT * FROM website_legal_documents WHERE slug = ? AND is_active = 1 ORDER BY created_at DESC LIMIT 1").get(slug) as LegalDocument | undefined;
  return row || null;
}

export async function getLegalDocumentVersions(slug: string): Promise<LegalDocument[]> {
  const rows = await prepare("SELECT * FROM website_legal_documents WHERE slug = ? ORDER BY created_at DESC").all(slug) as LegalDocument[];
  return rows;
}

export async function createLegalDocumentVersion(data: Omit<LegalDocument, "created_at">): Promise<LegalDocument> {
  const now = new Date().toISOString();
  const doc: LegalDocument = {
    ...data,
    created_at: now,
  };

  await transaction(async (conn) => {
    if (data.is_active === 1) {
      await conn.query("UPDATE website_legal_documents SET is_active = 0 WHERE slug = ?", [data.slug]);
    }
    await conn.query(
      `INSERT INTO website_legal_documents
        (id, slug, title, version, content, is_active, changelog, created_by, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [doc.id, doc.slug, doc.title, doc.version, doc.content, doc.is_active, doc.changelog, doc.created_by, doc.created_at]
    );
  });

  return doc;
}

export async function setActiveLegalDocumentVersion(id: string, slug: string): Promise<boolean> {
  return transaction(async (conn) => {
    const [existing] = await conn.query("SELECT id FROM website_legal_documents WHERE id = ? AND slug = ? FOR UPDATE", [id, slug]);
    if ((existing as unknown[]).length === 0) return false;
    await conn.query("UPDATE website_legal_documents SET is_active = 0 WHERE slug = ?", [slug]);
    await conn.query("UPDATE website_legal_documents SET is_active = 1 WHERE id = ? AND slug = ?", [id, slug]);
    return true;
  });
}

export async function recordLegalAgreement(data: Omit<LegalAgreementRecord, "id" | "agreed_at">): Promise<LegalAgreementRecord> {
  const id = `la_${randomUUID()}`;
  const now = new Date().toISOString();
  const record: LegalAgreementRecord = {
    id,
    ...data,
    agreed_at: now,
  };
  await prepare(`
    INSERT INTO website_legal_agreements (id, document_slug, document_version, visitor_id, user_id, ip_hash, agreed_at, metadata)
    VALUES (@id, @document_slug, @document_version, @visitor_id, @user_id, @ip_hash, @agreed_at, @metadata)
  `).run({
    ...record,
    metadata: JSON.stringify(record.metadata || {}),
  });
  return record;
}

// --- Cookie Consent ---
export async function recordCookieConsent(data: Omit<CookieConsentRecord, "id" | "timestamp">): Promise<CookieConsentRecord> {
  const id = `cc_${randomUUID()}`;
  const now = new Date().toISOString();
  const record: CookieConsentRecord = {
    id,
    ...data,
    timestamp: now,
  };
  await prepare(`
    INSERT INTO website_cookie_consents (id, visitor_id, choice, categories, policy_version, timestamp, user_agent, country)
    VALUES (@id, @visitor_id, @choice, @categories, @policy_version, @timestamp, @user_agent, @country)
  `).run({
    ...record,
    categories: JSON.stringify(record.categories),
  });
  return record;
}

export async function getCookieConsentStats() {
  const rows = await prepare(`
    SELECT choice, COUNT(*) as count
    FROM website_cookie_consents
    GROUP BY choice
  `).all() as { choice: string; count: number }[];

  let acceptAll = 0;
  let rejectNonEssential = 0;
  let custom = 0;
  let total = 0;

  for (const r of rows) {
    total += r.count;
    if (r.choice === "accept_all") acceptAll = r.count;
    if (r.choice === "reject_non_essential") rejectNonEssential = r.count;
    if (r.choice === "custom") custom = r.count;
  }

  return {
    total,
    acceptAll,
    rejectNonEssential,
    custom,
    acceptanceRate: total > 0 ? Math.round(((acceptAll + custom) / total) * 100) : 100,
  };
}

// --- Analytics & Events ---
export async function recordAnalyticsEvent(data: Omit<AnalyticsEvent, "id" | "timestamp">): Promise<AnalyticsEvent> {
  const id = `evt_${randomUUID()}`;
  const now = new Date().toISOString();
  const event: AnalyticsEvent = {
    id,
    ...data,
    timestamp: now,
  };
  await prepare(`
    INSERT INTO website_analytics_events (id, event_name, visitor_id, session_id, page_path, referrer, traffic_source, device_type, browser, os, country, city, payload, timestamp)
    VALUES (@id, @event_name, @visitor_id, @session_id, @page_path, @referrer, @traffic_source, @device_type, @browser, @os, @country, @city, @payload, @timestamp)
  `).run({
    ...event,
    payload: JSON.stringify(event.payload || {}),
  });
  return event;
}

export async function getAnalyticsDashboardStats(rangeDays = 14) {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - rangeDays);
  const startIso = startDate.toISOString();

  // Previous period for comparison
  const prevStartDate = new Date();
  prevStartDate.setDate(prevStartDate.getDate() - rangeDays * 2);
  const prevStartIso = prevStartDate.toISOString();

  // 1. Current Period KPIs
  const currentKpis = await prepare(`
    SELECT
      COUNT(DISTINCT visitor_id) as unique_visitors,
      COUNT(DISTINCT session_id) as total_sessions,
      COUNT(*) as total_events,
      SUM(CASE WHEN event_name = 'page_view' THEN 1 ELSE 0 END) as page_views,
      SUM(CASE WHEN event_name = 'pricing_view' THEN 1 ELSE 0 END) as pricing_views,
      SUM(CASE WHEN event_name = 'signup_clicked' THEN 1 ELSE 0 END) as signup_clicks,
      SUM(CASE WHEN event_name = 'lead_submitted' THEN 1 ELSE 0 END) as lead_submissions
    FROM website_analytics_events
    WHERE timestamp >= ?
  `).get(startIso) as any;

  // 2. Previous Period KPIs
  const prevKpis = await prepare(`
    SELECT
      COUNT(DISTINCT visitor_id) as unique_visitors,
      COUNT(DISTINCT session_id) as total_sessions,
      COUNT(*) as total_events,
      SUM(CASE WHEN event_name = 'page_view' THEN 1 ELSE 0 END) as page_views,
      SUM(CASE WHEN event_name = 'pricing_view' THEN 1 ELSE 0 END) as pricing_views,
      SUM(CASE WHEN event_name = 'signup_clicked' THEN 1 ELSE 0 END) as signup_clicks,
      SUM(CASE WHEN event_name = 'lead_submitted' THEN 1 ELSE 0 END) as lead_submissions
    FROM website_analytics_events
    WHERE timestamp >= ? AND timestamp < ?
  `).get(prevStartIso, startIso) as any;

  // 3. Time-Series Daily Traffic
  const timeSeries = await prepare(`
    SELECT
      DATE_FORMAT(timestamp, '%Y-%m-%d') as date,
      COUNT(DISTINCT visitor_id) as visitors,
      SUM(CASE WHEN event_name = 'page_view' THEN 1 ELSE 0 END) as page_views,
      SUM(CASE WHEN event_name IN ('signup_clicked', 'lead_submitted') THEN 1 ELSE 0 END) as conversions
    FROM website_analytics_events
    WHERE timestamp >= ?
    GROUP BY DATE_FORMAT(timestamp, '%Y-%m-%d')
    ORDER BY date ASC
  `).all(startIso) as any[];

  // 4. Traffic Sources / Referrers
  const trafficSources = await prepare(`
    SELECT
      COALESCE(traffic_source, 'Direct') as source,
      COUNT(DISTINCT visitor_id) as visitors,
      COUNT(*) as events
    FROM website_analytics_events
    WHERE timestamp >= ?
    GROUP BY source
    ORDER BY visitors DESC
    LIMIT 6
  `).all(startIso) as any[];

  // 5. Most Visited Pages
  const topPages = await prepare(`
    SELECT
      page_path,
      COUNT(*) as views,
      COUNT(DISTINCT visitor_id) as unique_visitors
    FROM website_analytics_events
    WHERE event_name = 'page_view' AND timestamp >= ?
    GROUP BY page_path
    ORDER BY views DESC
    LIMIT 8
  `).all(startIso) as any[];

  // 6. Device Breakdown
  const devices = await prepare(`
    SELECT
      COALESCE(device_type, 'Desktop') as device,
      COUNT(DISTINCT visitor_id) as count
    FROM website_analytics_events
    WHERE timestamp >= ?
    GROUP BY device
  `).all(startIso) as any[];

  // 7. Browsers & OS
  const browsers = await prepare(`
    SELECT
      COALESCE(browser, 'Other') as browser,
      COUNT(DISTINCT visitor_id) as count
    FROM website_analytics_events
    WHERE timestamp >= ?
    GROUP BY browser
    ORDER BY count DESC
    LIMIT 5
  `).all(startIso) as any[];

  const osList = await prepare(`
    SELECT
      COALESCE(os, 'Other') as os,
      COUNT(DISTINCT visitor_id) as count
    FROM website_analytics_events
    WHERE timestamp >= ?
    GROUP BY os
    ORDER BY count DESC
    LIMIT 5
  `).all(startIso) as any[];

  // 8. Locations
  const locations = await prepare(`
    SELECT
      COALESCE(city, 'Phnom Penh') as city,
      COALESCE(country, 'Cambodia') as country,
      COUNT(DISTINCT visitor_id) as visitors
    FROM website_analytics_events
    WHERE timestamp >= ?
    GROUP BY city, country
    ORDER BY visitors DESC
    LIMIT 6
  `).all(startIso) as any[];

  // 9. Recent Activity Feed
  const recentEvents = await prepare(`
    SELECT *
    FROM website_analytics_events
    ORDER BY timestamp DESC
    LIMIT 12
  `).all() as any[];

  const cookieStats = await getCookieConsentStats();

  return {
    kpis: {
      uniqueVisitors: currentKpis.unique_visitors || 0,
      prevUniqueVisitors: prevKpis.unique_visitors || 0,
      totalSessions: currentKpis.total_sessions || 0,
      prevTotalSessions: prevKpis.total_sessions || 0,
      pageViews: currentKpis.page_views || 0,
      prevPageViews: prevKpis.page_views || 0,
      pricingViews: currentKpis.pricing_views || 0,
      signupClicks: currentKpis.signup_clicks || 0,
      leadSubmissions: currentKpis.lead_submissions || 0,
      conversionRate:
        currentKpis.unique_visitors > 0
          ? ((currentKpis.signup_clicks / currentKpis.unique_visitors) * 100).toFixed(1)
          : "0.0",
    },
    timeSeries,
    trafficSources,
    topPages,
    devices,
    browsers,
    osList,
    locations,
    recentEvents: recentEvents.map((r) => ({
      ...r,
      payload: JSON.parse(r.payload || "{}"),
    })),
    cookieStats,
  };
}

// --- Visitors Explorer ---
export async function getVisitorsList(options?: {
  search?: string;
  limit?: number;
  offset?: number;
}) {
  const limit = options?.limit || 25;
  const offset = options?.offset || 0;
  let searchCondition = "";
  const params: any[] = [];

  if (options?.search) {
    searchCondition = "HAVING visitor_id LIKE ? OR traffic_source LIKE ? OR city LIKE ?";
    const s = `%${options.search}%`;
    params.push(s, s, s);
  }

  const query = `
    SELECT
      visitor_id,
      MIN(timestamp) as first_seen,
      MAX(timestamp) as last_seen,
      COUNT(DISTINCT session_id) as session_count,
      COUNT(*) as total_events,
      MAX(traffic_source) as traffic_source,
      MAX(device_type) as device_type,
      MAX(browser) as browser,
      MAX(os) as os,
      MAX(country) as country,
      MAX(city) as city
    FROM website_analytics_events
    GROUP BY visitor_id
    ${searchCondition}
    ORDER BY last_seen DESC
    LIMIT ? OFFSET ?
  `;

  const rows = await prepare(query).all(...params, limit, offset) as any[];

  // Latest consent per visitor, fetched in one round trip. Doing this per row
  // would be an N+1 against a remote database.
  const consentByVisitor = new Map<string, any>();
  if (rows.length > 0) {
    const ids = rows.map((r) => r.visitor_id);
    const consentRows = await prepare(`
      SELECT c.visitor_id, c.choice, c.categories
      FROM website_cookie_consents c
      JOIN (
        SELECT visitor_id, MAX(timestamp) AS latest
        FROM website_cookie_consents
        WHERE visitor_id IN (${ids.map(() => "?").join(",")})
        GROUP BY visitor_id
      ) newest ON newest.visitor_id = c.visitor_id AND newest.latest = c.timestamp
    `).all(...ids) as any[];

    for (const c of consentRows) consentByVisitor.set(c.visitor_id, c);
  }

  const result = rows.map((r) => {
    const consent = consentByVisitor.get(r.visitor_id);
    return {
      ...r,
      consent_choice: consent ? consent.choice : "not_specified",
      consent_categories: consent ? JSON.parse(consent.categories || "[]") : [],
    };
  });

  const countRow = await prepare(`
    SELECT COUNT(DISTINCT visitor_id) as total FROM website_analytics_events
  `).get() as { total: number };

  return {
    visitors: result,
    total: countRow.total,
  };
}

export async function getVisitorDetails(visitorId: string) {
  const events = await prepare(`
    SELECT * FROM website_analytics_events
    WHERE visitor_id = ?
    ORDER BY timestamp ASC
  `).all(visitorId) as any[];

  const consent = await prepare(`
    SELECT * FROM website_cookie_consents
    WHERE visitor_id = ?
    ORDER BY timestamp DESC
    LIMIT 1
  `).get(visitorId) as any;

  return {
    visitor_id: visitorId,
    events: events.map((e) => ({
      ...e,
      payload: JSON.parse(e.payload || "{}"),
    })),
    consent: consent
      ? {
          ...consent,
          categories: JSON.parse(consent.categories || "[]"),
        }
      : null,
  };
}

// --- Website Settings ---
export async function getWebsiteSettings(): Promise<WebsiteSettings> {
  const row = await prepare("SELECT * FROM website_settings WHERE id = 'default'").get() as WebsiteSettings | undefined;
  if (!row) throw new Error("Website settings are not initialized. Run npm run seed.");
  return row;
}

export async function updateWebsiteSettings(updates: Partial<WebsiteSettings>): Promise<WebsiteSettings> {
  const existing = await getWebsiteSettings();
  const updated: WebsiteSettings = {
    ...existing,
    ...updates,
    updated_at: new Date().toISOString(),
  };

  await prepare(`
    UPDATE website_settings
    SET site_title = @site_title, site_description = @site_description,
        announcement_enabled = @announcement_enabled, announcement_text_en = @announcement_text_en,
        announcement_text_km = @announcement_text_km, announcement_link = @announcement_link,
        announcement_color = @announcement_color, contact_email = @contact_email,
        support_phone = @support_phone, telegram_url = @telegram_url,
        maintenance_mode = @maintenance_mode, analytics_enabled = @analytics_enabled,
        currency_rate_khr = @currency_rate_khr, updated_at = @updated_at
    WHERE id = 'default'
  `).run(updated);

  return updated;
}

// --- Media Library ---
export async function listMedia(): Promise<MediaItem[]> {
  const rows = await prepare("SELECT * FROM website_media ORDER BY created_at DESC").all() as MediaItem[];
  return rows;
}

export async function getMediaById(id: string): Promise<MediaItem | null> {
  const row = await prepare("SELECT * FROM website_media WHERE id = ?").get(id) as MediaItem | undefined;
  return row || null;
}

export async function createMedia(data: Omit<MediaItem, "id" | "created_at">): Promise<MediaItem> {
  const id = `med_${randomUUID()}`;
  const now = new Date().toISOString();
  const item: MediaItem = {
    id,
    ...data,
    created_at: now,
  };
  await prepare(`
    INSERT INTO website_media (id, filename, url, size_bytes, mime_type, alt_text, uploaded_by, created_at)
    VALUES (@id, @filename, @url, @size_bytes, @mime_type, @alt_text, @uploaded_by, @created_at)
  `).run(item);
  return item;
}

export async function deleteMedia(id: string): Promise<boolean> {
  const res = await prepare("DELETE FROM website_media WHERE id = ?").run(id);
  return res.changes > 0;
}

// --- Audit Logs ---
export async function recordAuditLog(data: Omit<AuditLog, "id" | "timestamp">): Promise<AuditLog> {
  const id = `audit_${randomUUID()}`;
  const now = new Date().toISOString();
  const log: AuditLog = {
    id,
    ...data,
    timestamp: now,
  };
  await prepare(`
    INSERT INTO website_audit_logs (id, actor_id, actor_name, actor_email, action, target_entity, target_id, before_state, after_state, ip_address, timestamp)
    VALUES (@id, @actor_id, @actor_name, @actor_email, @action, @target_entity, @target_id, @before_state, @after_state, @ip_address, @timestamp)
  `).run({
    ...log,
    before_state: log.before_state ? JSON.stringify(log.before_state) : null,
    after_state: log.after_state ? JSON.stringify(log.after_state) : null,
  });
  return log;
}

export async function getAuditLogs(options?: {
  limit?: number;
  offset?: number;
  search?: string;
  action?: string;
}): Promise<{ logs: AuditLog[]; total: number }> {
  const conditions: string[] = [];
  const params: any[] = [];

  if (options?.action) {
    conditions.push("action = ?");
    params.push(options.action);
  }
  if (options?.search) {
    conditions.push("(actor_name LIKE ? OR actor_email LIKE ? OR action LIKE ? OR target_entity LIKE ?)");
    const s = `%${options.search}%`;
    params.push(s, s, s, s);
  }

  const whereClause = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
  const countRow = await prepare(`SELECT COUNT(*) as total FROM website_audit_logs ${whereClause}`).get(...params) as { total: number };

  const limit = options?.limit || 30;
  const offset = options?.offset || 0;

  const rows = await prepare(`
    SELECT * FROM website_audit_logs
    ${whereClause}
    ORDER BY timestamp DESC
    LIMIT ? OFFSET ?
  `).all(...params, limit, offset) as any[];

  return {
    logs: rows.map((r) => ({
      ...r,
      before_state: r.before_state ? JSON.parse(r.before_state) : null,
      after_state: r.after_state ? JSON.parse(r.after_state) : null,
    })),
    total: countRow.total,
  };
}

// ----------------------------------------------------
// Leads Repository
// ----------------------------------------------------

export async function createLead(data: {
  name: string;
  company: string;
  industry: string;
  employees_count: string;
  branches_count?: string;
  email: string;
  phone_telegram: string;
  preferred_language?: "km" | "en";
  message?: string | null;
  source_page?: string | null;
}): Promise<Lead> {
  const id = `lead_${randomUUID()}`;
  const now = new Date().toISOString();

  const lead: Lead = {
    id,
    name: data.name,
    company: data.company,
    industry: data.industry,
    employees_count: data.employees_count,
    branches_count: data.branches_count || "1",
    email: data.email,
    phone_telegram: data.phone_telegram,
    preferred_language: data.preferred_language || "km",
    message: data.message || null,
    source_page: data.source_page || null,
    status: "new",
    admin_notes: null,
    created_at: now,
    updated_at: now,
  };

  await prepare(`
    INSERT INTO website_leads (
      id, name, company, industry, employees_count, branches_count,
      email, phone_telegram, preferred_language, message, source_page,
      status, admin_notes, created_at, updated_at
    ) VALUES (
      @id, @name, @company, @industry, @employees_count, @branches_count,
      @email, @phone_telegram, @preferred_language, @message, @source_page,
      @status, @admin_notes, @created_at, @updated_at
    )
  `).run(lead);

  return lead;
}

export async function getLeads(options?: {
  limit?: number;
  offset?: number;
  search?: string;
  status?: string;
  industry?: string;
}): Promise<{ leads: Lead[]; total: number }> {
  const conditions: string[] = [];
  const params: any[] = [];

  if (options?.status && options.status !== "all") {
    conditions.push("status = ?");
    params.push(options.status);
  }
  if (options?.industry && options.industry !== "all") {
    conditions.push("industry = ?");
    params.push(options.industry);
  }
  if (options?.search) {
    conditions.push("(name LIKE ? OR company LIKE ? OR email LIKE ? OR phone_telegram LIKE ?)");
    const s = `%${options.search}%`;
    params.push(s, s, s, s);
  }

  const whereClause = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
  const countRow = await prepare(`SELECT COUNT(*) as total FROM website_leads ${whereClause}`).get(...params) as { total: number };

  const limit = options?.limit || 30;
  const offset = options?.offset || 0;

  const rows = await prepare(`
    SELECT * FROM website_leads
    ${whereClause}
    ORDER BY created_at DESC
    LIMIT ? OFFSET ?
  `).all(...params, limit, offset) as Lead[];

  return {
    leads: rows,
    total: countRow.total,
  };
}

export async function getLeadById(id: string): Promise<Lead | null> {
  const row = await prepare("SELECT * FROM website_leads WHERE id = ?").get(id) as Lead | undefined;
  return row || null;
}

export async function updateLead(
  id: string,
  updates: Partial<Pick<Lead, "status" | "admin_notes">>
): Promise<Lead | null> {
  const existing = await getLeadById(id);
  if (!existing) return null;

  const updated: Lead = {
    ...existing,
    ...updates,
    updated_at: new Date().toISOString(),
  };

  await prepare(`
    UPDATE website_leads
    SET status = @status, admin_notes = @admin_notes, updated_at = @updated_at
    WHERE id = @id
  `).run({
    id,
    status: updated.status,
    admin_notes: updated.admin_notes,
    updated_at: updated.updated_at,
  });

  return updated;
}

export async function deleteLead(id: string): Promise<boolean> {
  const res = await prepare("DELETE FROM website_leads WHERE id = ?").run(id);
  return res.changes > 0;
}

// ----------------------------------------------------
// Newsletter Subscribers Repository
// ----------------------------------------------------

export async function recordNewsletterSubscriber(
  email: string,
  source_page?: string
): Promise<{ success: boolean; is_new: boolean }> {
  const existing = await prepare("SELECT id FROM website_newsletter_subscribers WHERE email = ?").get(email);
  if (existing) {
    return { success: true, is_new: false };
  }

  const id = `sub_${randomUUID()}`;
  await prepare(`
    INSERT INTO website_newsletter_subscribers (id, email, source_page, created_at)
    VALUES (?, ?, ?, ?)
  `).run(id, email, source_page || "/", new Date().toISOString());

  return { success: true, is_new: true };
}

export async function getNewsletterSubscribers(options?: {
  limit?: number;
  offset?: number;
}): Promise<{ subscribers: NewsletterSubscriber[]; total: number }> {
  const countRow = await prepare("SELECT COUNT(*) as total FROM website_newsletter_subscribers").get() as { total: number };
  const limit = options?.limit || 50;
  const offset = options?.offset || 0;

  const rows = await prepare(`
    SELECT * FROM website_newsletter_subscribers
    ORDER BY created_at DESC
    LIMIT ? OFFSET ?
  `).all(limit, offset) as NewsletterSubscriber[];

  return {
    subscribers: rows,
    total: countRow.total,
  };
}
