import { z } from "zod";

// 1. Admin Model
export interface AdminUser {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  role: "super_admin" | "editor";
  is_active: number;
  last_login_at?: string | null;
  created_at: string;
  updated_at: string;
}

export const AdminLoginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Invalid email address").max(191),
  password: z.string().min(8, "Password must be at least 8 characters").max(128),
});

export const AdminCreateSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(191),
  email: z.string().trim().toLowerCase().email("Invalid email address").max(191),
  password: z.string().min(12, "Password must be at least 12 characters").max(128),
  role: z.enum(["super_admin", "editor"]),
  is_active: z.number().default(1),
});

export const AdminUpdateSchema = z.object({
  name: z.string().trim().min(2).max(191).optional(),
  email: z.string().trim().toLowerCase().email().max(191).optional(),
  password: z.string().min(12).max(128).optional(),
  role: z.enum(["super_admin", "editor"]).optional(),
  is_active: z.number().optional(),
});

// 2. Pricing Plan Model
export interface PricingPlan {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  price_monthly: number;
  price_annual: number;
  annual_factor: number;
  limits_text: string;
  features: string[];
  is_popular: number;
  badge_text?: string | null;
  cta_text: string;
  cta_url: string;
  display_order: number;
  is_active: number;
  created_at?: string;
  updated_at?: string;
}

export const PricingPlanSchema = z.object({
  id: z.string().optional(),
  slug: z.string().trim().min(2, "Slug is required").max(96).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: z.string().trim().min(2, "Name is required").max(191),
  description: z.string().max(5_000).optional().nullable(),
  price_monthly: z.number().min(0, "Monthly price must be non-negative"),
  price_annual: z.number().min(0, "Annual price must be non-negative"),
  annual_factor: z.number().min(0).max(1).default(0.8333),
  limits_text: z.string().min(1, "Limits description is required").max(2_000),
  features: z.array(z.string().trim().min(1).max(500)).min(1, "At least one feature required").max(100),
  is_popular: z.number().default(0),
  badge_text: z.string().max(191).optional().nullable(),
  cta_text: z.string().max(191).default("Start free trial"),
  cta_url: z.string().max(512).refine((value) => value.startsWith("/") || /^https:\/\//.test(value), "CTA URL must be a path or HTTPS URL").default("/contact"),
  display_order: z.number().default(0),
  is_active: z.number().default(1),
});

// 3. Blog Post Model
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image?: string | null;
  author_name: string;
  author_role?: string | null;
  author_avatar?: string | null;
  category: string;
  tags: string[];
  status: "draft" | "published" | "scheduled" | "archived";
  published_at?: string | null;
  scheduled_at?: string | null;
  seo_title?: string | null;
  seo_description?: string | null;
  og_image?: string | null;
  view_count: number;
  created_at: string;
  updated_at: string;
}

export const BlogPostSchema = z.object({
  id: z.string().optional(),
  slug: z.string().trim().min(2, "Slug is required").max(191).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().trim().min(3, "Title must be at least 3 characters").max(255),
  excerpt: z.string().trim().min(10, "Excerpt must be at least 10 characters").max(5_000),
  content: z.string().min(20, "Content must be at least 20 characters").max(750_000),
  cover_image: z.string().max(512).optional().nullable(),
  author_name: z.string().trim().max(191).default("AttendKH Team"),
  author_role: z.string().trim().max(191).default("Product & Operations"),
  author_avatar: z.string().max(512).optional().nullable(),
  category: z.string().trim().max(96).default("Product"),
  tags: z.array(z.string().trim().min(1).max(96)).max(30).default([]),
  status: z.enum(["draft", "published", "scheduled", "archived"]).default("draft"),
  published_at: z.string().optional().nullable(),
  scheduled_at: z.string().optional().nullable(),
  seo_title: z.string().max(255).optional().nullable(),
  seo_description: z.string().max(500).optional().nullable(),
  og_image: z.string().max(512).optional().nullable(),
});

// 4. Legal Documents Model
export interface LegalDocument {
  id: string;
  slug: "privacy" | "terms" | "cookies" | "support";
  title: string;
  version: string;
  content: string;
  is_active: number;
  changelog?: string | null;
  created_by?: string | null;
  created_at: string;
}

export const LegalDocumentSchema = z.object({
  slug: z.enum(["privacy", "terms", "cookies", "support"]),
  title: z.string().trim().min(3).max(255),
  version: z.string().trim().min(1).max(32).regex(/^[0-9]+(?:\.[0-9]+)*$/),
  content: z.string().min(20).max(750_000),
  is_active: z.number().default(1),
  changelog: z.string().max(5_000).optional().nullable(),
});

// 5. Legal Agreement Record
export interface LegalAgreementRecord {
  id: string;
  document_slug: string;
  document_version: string;
  visitor_id?: string | null;
  user_id?: string | null;
  ip_hash?: string | null;
  agreed_at: string;
  metadata?: Record<string, unknown> | null;
}

// 6. Cookie Consent Model
export interface CookieConsentRecord {
  id: string;
  visitor_id: string;
  choice: "accept_all" | "reject_non_essential" | "custom";
  categories: string[];
  policy_version: string;
  timestamp: string;
  user_agent?: string | null;
  country?: string | null;
}

export const CookieConsentSchema = z.object({
  visitor_id: z.string().min(1).max(96).regex(/^[A-Za-z0-9_-]+$/),
  choice: z.enum(["accept_all", "reject_non_essential", "custom"]),
  categories: z.array(z.enum(["necessary", "analytics", "functional", "marketing"])).min(1).max(4),
  policy_version: z.string().max(32).default("1.0"),
  user_agent: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
});

// 7. Analytics Event Model
export interface AnalyticsEvent {
  id: string;
  event_name: string;
  visitor_id: string;
  session_id: string;
  page_path: string;
  referrer?: string | null;
  traffic_source?: string | null;
  device_type?: string | null;
  browser?: string | null;
  os?: string | null;
  country?: string | null;
  city?: string | null;
  payload?: Record<string, unknown> | null;
  timestamp: string;
}

export const AnalyticsEventSchema = z.object({
  event_name: z.enum(["page_view", "signup_clicked", "pricing_view", "login_clicked", "contact_clicked"]),
  visitor_id: z.string().min(1).max(96).regex(/^[A-Za-z0-9_-]+$/),
  session_id: z.string().min(1).max(96).regex(/^[A-Za-z0-9_-]+$/),
  page_path: z.string().min(1).max(512).startsWith("/"),
  referrer: z.string().max(512).optional().nullable(),
  traffic_source: z.string().max(191).optional().nullable(),
  device_type: z.string().max(48).optional().nullable(),
  browser: z.string().max(48).optional().nullable(),
  os: z.string().max(48).optional().nullable(),
  country: z.string().max(96).optional().nullable(),
  city: z.string().max(96).optional().nullable(),
  payload: z.record(z.string(), z.any()).optional().nullable(),
});

// 8. Media Model
export interface MediaItem {
  id: string;
  filename: string;
  url: string;
  size_bytes: number;
  mime_type: string;
  alt_text?: string | null;
  uploaded_by?: string | null;
  created_at: string;
}

// 9. Website Settings Model
export interface WebsiteSettings {
  id: string;
  site_title: string;
  site_description: string;
  announcement_enabled: number;
  announcement_text_en: string;
  announcement_text_km: string;
  announcement_link?: string | null;
  announcement_color: string;
  contact_email: string;
  support_phone: string;
  telegram_url: string;
  maintenance_mode: number;
  analytics_enabled: number;
  currency_rate_khr: number;
  updated_at: string;
}

export const WebsiteSettingsSchema = z.object({
  site_title: z.string().min(3),
  site_description: z.string().min(10),
  announcement_enabled: z.number().min(0).max(1),
  announcement_text_en: z.string(),
  announcement_text_km: z.string(),
  announcement_link: z.string().max(512).refine((value) => !value || value.startsWith("/") || /^https:\/\//.test(value), "Announcement link must be a path or HTTPS URL").optional().nullable(),
  announcement_color: z.string().default("brand"),
  contact_email: z.string().email(),
  support_phone: z.string(),
  telegram_url: z.string().url().startsWith("https://"),
  maintenance_mode: z.number().min(0).max(1),
  analytics_enabled: z.number().min(0).max(1),
  currency_rate_khr: z.number().min(1000).max(10000).default(4100),
});

// 10. System Audit Log Model
export interface AuditLog {
  id: string;
  actor_id: string;
  actor_name: string;
  actor_email: string;
  action: string;
  target_entity: string;
  target_id?: string | null;
  before_state?: Record<string, unknown> | null;
  after_state?: Record<string, unknown> | null;
  ip_address?: string | null;
  timestamp: string;
}

// 11. Leads & Demo Requests Model
export interface Lead {
  id: string;
  name: string;
  company: string;
  industry: string;
  employees_count: string;
  branches_count: string;
  email: string;
  phone_telegram: string;
  preferred_language: "km" | "en";
  message?: string | null;
  source_page?: string | null;
  status: "new" | "contacted" | "qualified" | "won" | "lost";
  admin_notes?: string | null;
  created_at: string;
  updated_at: string;
}

export const LeadCreateSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(191),
  company: z.string().trim().min(2, "Please enter your company or business name").max(191),
  industry: z.string().trim().min(2, "Please select your industry").max(191),
  employees_count: z.string().trim().min(1, "Please select team size").max(48),
  branches_count: z.string().trim().max(48).default("1"),
  email: z.string().trim().toLowerCase().email("Please enter a valid email address").max(191),
  phone_telegram: z.string().trim().min(6, "Please enter your phone or Telegram contact").max(96),
  preferred_language: z.enum(["km", "en"]).default("km"),
  message: z.string().max(10_000).optional().nullable(),
  source_page: z.string().max(512).startsWith("/").optional().nullable(),
});

export const LeadStatusUpdateSchema = z.object({
  id: z.string().min(1),
  status: z.enum(["new", "contacted", "qualified", "won", "lost"]),
  admin_notes: z.string().max(20_000).optional().nullable(),
});

// 12. Newsletter Subscribers Model
export interface NewsletterSubscriber {
  id: string;
  email: string;
  source_page?: string | null;
  created_at: string;
}

export const NewsletterSubscribeSchema = z.object({
  email: z.string().trim().toLowerCase().email("Please enter a valid email address").max(191),
  source_page: z.string().max(512).startsWith("/").optional().nullable(),
});
