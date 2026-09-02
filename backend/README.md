# AttendKH Backend & Admin Dashboard Suite

This directory contains the complete backend infrastructure, database schemas, migration scripts, authentication systems, and the full administrative dashboard for the AttendKH platform.

---

## Directory Structure

```
backend/
├── admin-app/
│   ├── pages/         # Next.js App Router admin pages (/admin, /admin/analytics, /admin/blog, etc.)
│   ├── components/    # Admin UI components (Rich editor, Data tables, Charts, Modals, etc.)
│   └── api/           # Backend API route handlers (/api/admin/*)
├── auth/              # JWT session management & audit logging (auth.ts, audit.ts)
├── database/          # MySQL database connection, repository queries, schemas, and migrations
├── scripts/           # CLI management scripts (migrate, seed, create admin users)
└── supabase/          # Supabase PostgreSQL schema and migration files
```

---

## 1. Database Overview

The backend supports two database targets:
1. **MySQL / TiDB / PlanetScale**: Managed via the connection layer in `database/mysql.ts` and migrations in `database/migrations/`.
2. **Supabase / PostgreSQL**: Schema and Row Level Security policies defined in `supabase/migrations/20260825000000_admin_landing_schema.sql`.

### Core Tables
- `website_admins` - Administrator accounts with bcrypt-hashed passwords and RBAC (`super_admin`, `editor`).
- `website_pricing_plans` - Dynamic pricing tiers, monthly/annual rates, and feature matrices.
- `website_blog_posts` - Blog articles, markdown content, SEO metadata, tags, and view counters.
- `website_legal_documents` - Versioned Terms of Service, Privacy Policy, and Cookie Policy documents.
- `website_settings` - Global site configurations, announcement bars, contact details, currency exchange rates.
- `website_leads` - Contact inquiries and demo request leads.
- `website_newsletter_subscribers` - Email subscriber list.
- `website_analytics_events` - First-party privacy-conscious page views and conversion events.
- `website_visitor_consents` - Cookie banner consent records.
- `website_media` - Image and asset metadata registry.
- `website_audit_logs` - Immutable audit trails tracking every administrative action.
- `website_rate_limits` - HMAC-keyed rate limiting buckets.

---

## 2. Environment Variables

When running the backend and admin services, configure the following variables in `.env.local`:

```env
# Database Credentials (MySQL)
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_USER=attendkh_user
MYSQL_PASSWORD=your_secure_password
MYSQL_DATABASE=attendkh_db
MYSQL_POOL_SIZE=10
MYSQL_SSL=false

# Admin Security & JWT
ADMIN_JWT_SECRET=your-secure-random-32-byte-hex-string
RATE_LIMIT_SECRET=your-secure-random-32-byte-hex-string
```

---

## 3. Database Migration & Seeding Scripts

CLI scripts are located in `scripts/`:

```bash
# Run database migrations
node backend/scripts/migrate.mjs

# Check migration status
node backend/scripts/migrate.mjs status

# Seed initial pricing plans, blog posts, legal documents, and site settings
node backend/scripts/seed.mjs

# Create an initial super admin account
node backend/scripts/create-admin-user.mjs
```

---

## 4. How to Reactivate the Admin Dashboard in Frontend

If you decide to re-enable the admin dashboard on the live website:

1. **Restore Admin Pages**:
   Copy `backend/admin-app/pages/*` back to `src/app/(admin)/admin/`.
2. **Restore Admin UI Components**:
   Copy `backend/admin-app/components/*` back to `src/components/admin/`.
3. **Restore Admin APIs**:
   Copy `backend/admin-app/api/*` back to `src/app/api/admin/`.
4. **Restore Database & Auth Modules**:
   Copy `backend/database/` into `src/lib/db/` and `backend/auth/*` into `src/lib/`.
5. **Configure Environment Variables**:
   Provide the MySQL credentials and `ADMIN_JWT_SECRET` in your hosting provider's dashboard (e.g. Vercel Environment Variables).
