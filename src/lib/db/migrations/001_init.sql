-- AttendKH landing site: initial MySQL schema.
-- Ported from the original better-sqlite3 schema. Timestamps stay ISO-8601
-- strings (VARCHAR) so the existing repository code needs no date handling
-- changes. JSON-ish columns stay TEXT, not the JSON type, because the app
-- does its own JSON.parse and mysql2 auto-parses real JSON columns.

CREATE TABLE IF NOT EXISTS website_admins (
  id            VARCHAR(64) PRIMARY KEY,
  name          VARCHAR(191) NOT NULL,
  email         VARCHAR(191) NOT NULL UNIQUE,
  password_hash VARCHAR(191) NOT NULL,
  role          VARCHAR(32)  NOT NULL DEFAULT 'editor',
  is_active     TINYINT(1)   NOT NULL DEFAULT 1,
  last_login_at VARCHAR(32),
  created_at    VARCHAR(32)  NOT NULL,
  updated_at    VARCHAR(32)  NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS website_pricing_plans (
  id            VARCHAR(64) PRIMARY KEY,
  slug          VARCHAR(191) NOT NULL UNIQUE,
  name          VARCHAR(191) NOT NULL,
  description   TEXT,
  price_monthly DOUBLE       NOT NULL DEFAULT 0,
  price_annual  DOUBLE       NOT NULL DEFAULT 0,
  annual_factor DOUBLE       NOT NULL DEFAULT 0.8333,
  limits_text   TEXT         NOT NULL,
  features      TEXT         NOT NULL,
  is_popular    TINYINT(1)   NOT NULL DEFAULT 0,
  badge_text    VARCHAR(191),
  cta_text      VARCHAR(191) NOT NULL DEFAULT 'Start free trial',
  cta_url       VARCHAR(191) NOT NULL DEFAULT '/contact',
  display_order INT          NOT NULL DEFAULT 0,
  is_active     TINYINT(1)   NOT NULL DEFAULT 1,
  created_at    VARCHAR(32)  NOT NULL,
  updated_at    VARCHAR(32)  NOT NULL,
  INDEX idx_pricing_order (display_order ASC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS website_blog_posts (
  id              VARCHAR(64) PRIMARY KEY,
  slug            VARCHAR(191) NOT NULL UNIQUE,
  title           VARCHAR(255) NOT NULL,
  excerpt         TEXT         NOT NULL,
  content         LONGTEXT     NOT NULL,
  cover_image     VARCHAR(512),
  author_name     VARCHAR(191) NOT NULL DEFAULT 'AttendKH Team',
  author_role     VARCHAR(191) DEFAULT 'Product & Operations',
  author_avatar   VARCHAR(512),
  category        VARCHAR(96)  NOT NULL DEFAULT 'Product',
  tags            TEXT         NOT NULL,
  status          VARCHAR(32)  NOT NULL DEFAULT 'draft',
  published_at    VARCHAR(32),
  scheduled_at    VARCHAR(32),
  seo_title       VARCHAR(255),
  seo_description TEXT,
  og_image        VARCHAR(512),
  view_count      INT          NOT NULL DEFAULT 0,
  created_at      VARCHAR(32)  NOT NULL,
  updated_at      VARCHAR(32)  NOT NULL,
  INDEX idx_blog_status (status, published_at DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS website_legal_documents (
  id         VARCHAR(64) PRIMARY KEY,
  slug       VARCHAR(191) NOT NULL,
  title      VARCHAR(255) NOT NULL,
  version    VARCHAR(32)  NOT NULL,
  content    LONGTEXT     NOT NULL,
  is_active  TINYINT(1)   NOT NULL DEFAULT 0,
  changelog  TEXT,
  created_by VARCHAR(64),
  created_at VARCHAR(32)  NOT NULL,
  INDEX idx_legal_slug (slug, is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS website_legal_agreements (
  id               VARCHAR(64) PRIMARY KEY,
  document_slug    VARCHAR(191) NOT NULL,
  document_version VARCHAR(32)  NOT NULL,
  visitor_id       VARCHAR(96),
  user_id          VARCHAR(96),
  ip_hash          VARCHAR(128),
  agreed_at        VARCHAR(32)  NOT NULL,
  metadata         TEXT,
  INDEX idx_agreement_doc (document_slug, agreed_at DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS website_cookie_consents (
  id             VARCHAR(64) PRIMARY KEY,
  visitor_id     VARCHAR(96)  NOT NULL,
  choice         VARCHAR(48)  NOT NULL,
  categories     TEXT         NOT NULL,
  policy_version VARCHAR(32)  NOT NULL DEFAULT '1.0',
  timestamp      VARCHAR(32)  NOT NULL,
  user_agent     VARCHAR(512),
  country        VARCHAR(96),
  INDEX idx_consent_visitor (visitor_id),
  INDEX idx_consent_time (timestamp DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS website_analytics_events (
  id             VARCHAR(64) PRIMARY KEY,
  event_name     VARCHAR(96)  NOT NULL,
  visitor_id     VARCHAR(96)  NOT NULL,
  session_id     VARCHAR(96)  NOT NULL,
  page_path      VARCHAR(512) NOT NULL,
  referrer       VARCHAR(512),
  traffic_source VARCHAR(191),
  device_type    VARCHAR(48),
  browser        VARCHAR(48),
  os             VARCHAR(48),
  country        VARCHAR(96),
  city           VARCHAR(96),
  payload        TEXT,
  timestamp      VARCHAR(32)  NOT NULL,
  INDEX idx_events_time (timestamp DESC),
  INDEX idx_events_visitor (visitor_id),
  INDEX idx_events_session (session_id),
  INDEX idx_events_name_time (event_name, timestamp DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS website_media (
  id          VARCHAR(64) PRIMARY KEY,
  filename    VARCHAR(255) NOT NULL,
  url         VARCHAR(512) NOT NULL,
  size_bytes  BIGINT       NOT NULL,
  mime_type   VARCHAR(128) NOT NULL,
  alt_text    VARCHAR(512),
  uploaded_by VARCHAR(64),
  created_at  VARCHAR(32)  NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS website_settings (
  id                   VARCHAR(64) PRIMARY KEY,
  site_title           VARCHAR(255) NOT NULL,
  site_description     TEXT         NOT NULL,
  announcement_enabled TINYINT(1)   NOT NULL DEFAULT 1,
  announcement_text_en TEXT         NOT NULL,
  announcement_text_km TEXT         NOT NULL,
  announcement_link    VARCHAR(512),
  announcement_color   VARCHAR(48)  DEFAULT 'brand',
  contact_email        VARCHAR(191) NOT NULL,
  support_phone        VARCHAR(96)  NOT NULL,
  telegram_url         VARCHAR(512) NOT NULL,
  maintenance_mode     TINYINT(1)   NOT NULL DEFAULT 0,
  analytics_enabled    TINYINT(1)   NOT NULL DEFAULT 1,
  currency_rate_khr    INT          NOT NULL DEFAULT 4100,
  updated_at           VARCHAR(32)  NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS website_audit_logs (
  id            VARCHAR(64) PRIMARY KEY,
  actor_id      VARCHAR(64)  NOT NULL,
  actor_name    VARCHAR(191) NOT NULL,
  actor_email   VARCHAR(191) NOT NULL,
  action        VARCHAR(96)  NOT NULL,
  target_entity VARCHAR(96)  NOT NULL,
  target_id     VARCHAR(64),
  before_state  LONGTEXT,
  after_state   LONGTEXT,
  ip_address    VARCHAR(96),
  timestamp     VARCHAR(32)  NOT NULL,
  INDEX idx_audit_time (timestamp DESC),
  INDEX idx_audit_actor (actor_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS website_leads (
  id                 VARCHAR(64) PRIMARY KEY,
  name               VARCHAR(191) NOT NULL,
  company            VARCHAR(191) NOT NULL,
  industry           VARCHAR(191) NOT NULL,
  employees_count    VARCHAR(48)  NOT NULL,
  branches_count     VARCHAR(48)  NOT NULL DEFAULT '1',
  email              VARCHAR(191) NOT NULL,
  phone_telegram     VARCHAR(96)  NOT NULL,
  preferred_language VARCHAR(16)  NOT NULL DEFAULT 'km',
  message            TEXT,
  source_page        VARCHAR(512),
  status             VARCHAR(32)  NOT NULL DEFAULT 'new',
  admin_notes        TEXT,
  created_at         VARCHAR(32)  NOT NULL,
  updated_at         VARCHAR(32)  NOT NULL,
  INDEX idx_leads_status (status, created_at DESC),
  INDEX idx_leads_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS website_newsletter_subscribers (
  id          VARCHAR(64) PRIMARY KEY,
  email       VARCHAR(191) NOT NULL UNIQUE,
  source_page VARCHAR(512),
  created_at  VARCHAR(32)  NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
