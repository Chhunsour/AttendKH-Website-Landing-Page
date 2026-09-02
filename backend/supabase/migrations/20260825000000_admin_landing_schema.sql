-- AttendKH Website Landing Page Database Schema
-- Migration: 20260825000000_admin_landing_schema.sql

-- 1. Admins Table
CREATE TABLE IF NOT EXISTS website_admins (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'editor', -- 'super_admin' or 'editor'
    is_active INTEGER NOT NULL DEFAULT 1,
    last_login_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Website Pricing Plans
CREATE TABLE IF NOT EXISTS website_pricing_plans (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    price_monthly NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    price_annual NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    annual_factor NUMERIC(5, 4) NOT NULL DEFAULT 0.8333,
    limits_text TEXT NOT NULL,
    features JSONB NOT NULL DEFAULT '[]'::jsonb,
    is_popular INTEGER NOT NULL DEFAULT 0,
    badge_text TEXT,
    cta_text TEXT NOT NULL DEFAULT 'Start free trial',
    cta_url TEXT NOT NULL DEFAULT '/contact',
    display_order INTEGER NOT NULL DEFAULT 0,
    is_active INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Website Blog Posts
CREATE TABLE IF NOT EXISTS website_blog_posts (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    cover_image TEXT,
    author_name TEXT NOT NULL DEFAULT 'AttendKH Team',
    author_role TEXT DEFAULT 'Product & Operations',
    author_avatar TEXT,
    category TEXT NOT NULL DEFAULT 'Product',
    tags JSONB NOT NULL DEFAULT '[]'::jsonb,
    status TEXT NOT NULL DEFAULT 'draft', -- 'draft', 'published', 'scheduled', 'archived'
    published_at TIMESTAMPTZ,
    scheduled_at TIMESTAMPTZ,
    seo_title TEXT,
    seo_description TEXT,
    og_image TEXT,
    view_count INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. Website Legal Documents (Versioned)
CREATE TABLE IF NOT EXISTS website_legal_documents (
    id TEXT PRIMARY KEY,
    slug TEXT NOT NULL, -- 'privacy', 'terms', 'cookies', 'support'
    title TEXT NOT NULL,
    version TEXT NOT NULL, -- e.g. '1.0', '1.1', '2.0'
    content TEXT NOT NULL,
    is_active INTEGER NOT NULL DEFAULT 0,
    changelog TEXT,
    created_by TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Legal Agreements Log
CREATE TABLE IF NOT EXISTS website_legal_agreements (
    id TEXT PRIMARY KEY,
    document_slug TEXT NOT NULL,
    document_version TEXT NOT NULL,
    visitor_id TEXT,
    user_id TEXT,
    ip_hash TEXT,
    agreed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    metadata JSONB DEFAULT '{}'::jsonb
);

-- 6. Cookie Consents Log
CREATE TABLE IF NOT EXISTS website_cookie_consents (
    id TEXT PRIMARY KEY,
    visitor_id TEXT NOT NULL,
    choice TEXT NOT NULL, -- 'accept_all', 'reject_non_essential', 'custom'
    categories JSONB NOT NULL DEFAULT '["necessary"]'::jsonb,
    policy_version TEXT NOT NULL DEFAULT '1.0',
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    user_agent TEXT,
    country TEXT
);

-- 7. Analytics Events Log
CREATE TABLE IF NOT EXISTS website_analytics_events (
    id TEXT PRIMARY KEY,
    event_name TEXT NOT NULL,
    visitor_id TEXT NOT NULL,
    session_id TEXT NOT NULL,
    page_path TEXT NOT NULL,
    referrer TEXT,
    traffic_source TEXT,
    device_type TEXT,
    browser TEXT,
    os TEXT,
    country TEXT,
    city TEXT,
    payload JSONB DEFAULT '{}'::jsonb,
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 8. Website Media Library
CREATE TABLE IF NOT EXISTS website_media (
    id TEXT PRIMARY KEY,
    filename TEXT NOT NULL,
    url TEXT NOT NULL,
    size_bytes INTEGER NOT NULL,
    mime_type TEXT NOT NULL,
    alt_text TEXT DEFAULT '',
    uploaded_by TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 9. Website Settings (Single Row Configuration)
CREATE TABLE IF NOT EXISTS website_settings (
    id TEXT PRIMARY KEY DEFAULT 'default',
    site_title TEXT NOT NULL DEFAULT 'AttendKH — Smart GPS attendance & automated payroll for Cambodia',
    site_description TEXT NOT NULL DEFAULT 'GPS-verified attendance and one-click payroll in USD and KHR.',
    announcement_enabled INTEGER NOT NULL DEFAULT 1,
    announcement_text_en TEXT NOT NULL DEFAULT '🚀 New Feature: Offline QR Kiosk mode is now live for all multi-branch stores!',
    announcement_text_km TEXT NOT NULL DEFAULT '🚀 មុខងារថ្មី៖ មុខងារ QR Kiosk ក្រៅបណ្តាញដំណើរការហើយ!',
    announcement_link TEXT DEFAULT '/attendance',
    announcement_color TEXT DEFAULT 'brand',
    contact_email TEXT NOT NULL DEFAULT 'hello@MPG_by_ongphaly.com',
    support_phone TEXT NOT NULL DEFAULT '+855 23 999 888',
    telegram_url TEXT NOT NULL DEFAULT 'https://t.me/MPG_by_ongphaly',
    maintenance_mode INTEGER NOT NULL DEFAULT 0,
    analytics_enabled INTEGER NOT NULL DEFAULT 1,
    currency_rate_khr INTEGER NOT NULL DEFAULT 4100,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 10. System Audit Logs
CREATE TABLE IF NOT EXISTS website_audit_logs (
    id TEXT PRIMARY KEY,
    actor_id TEXT NOT NULL,
    actor_name TEXT NOT NULL,
    actor_email TEXT NOT NULL,
    action TEXT NOT NULL,
    target_entity TEXT NOT NULL,
    target_id TEXT,
    before_state JSONB,
    after_state JSONB,
    ip_address TEXT,
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for high-performance querying
CREATE INDEX IF NOT EXISTS idx_website_blog_posts_status ON website_blog_posts(status, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_website_blog_posts_slug ON website_blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_website_pricing_plans_order ON website_pricing_plans(display_order ASC);
CREATE INDEX IF NOT EXISTS idx_website_legal_docs ON website_legal_documents(slug, is_active);
CREATE INDEX IF NOT EXISTS idx_website_analytics_events_name_time ON website_analytics_events(event_name, timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_website_analytics_events_visitor ON website_analytics_events(visitor_id, session_id);
CREATE INDEX IF NOT EXISTS idx_website_analytics_events_time ON website_analytics_events(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_website_cookie_consents_visitor ON website_cookie_consents(visitor_id);
CREATE INDEX IF NOT EXISTS idx_website_audit_logs_time ON website_audit_logs(timestamp DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE website_admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_pricing_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_legal_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_legal_agreements ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_cookie_consents ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_audit_logs ENABLE ROW LEVEL SECURITY;

-- Public Read Policies
CREATE POLICY "Public read active pricing plans" ON website_pricing_plans FOR SELECT USING (is_active = 1);
CREATE POLICY "Public read published blog posts" ON website_blog_posts FOR SELECT USING (status = 'published');
CREATE POLICY "Public read active legal docs" ON website_legal_documents FOR SELECT USING (is_active = 1);
CREATE POLICY "Public read website settings" ON website_settings FOR SELECT USING (true);
CREATE POLICY "Public insert analytics events" ON website_analytics_events FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert cookie consent" ON website_cookie_consents FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert legal agreement" ON website_legal_agreements FOR INSERT WITH CHECK (true);
