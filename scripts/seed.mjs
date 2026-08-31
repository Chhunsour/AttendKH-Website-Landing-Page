#!/usr/bin/env node
// Seed missing baseline content into the database. Idempotent and non-destructive:
// re-running never overwrites edits made through the CMS.
//
//   node scripts/seed.mjs
//
// Run after `npm run migrate`. This seeds public baseline content only.
// Admin accounts require the explicit one-time `npm run bootstrap:admin` step;
// analytics and consent tables always start empty and contain real traffic only.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mysql from "mysql2/promise";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const envFile = path.join(root, ".env.local");
if (fs.existsSync(envFile)) {
  for (const line of fs.readFileSync(envFile, "utf8").split("\n")) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].trim().replace(/^["']|["']$/g, "");
    }
  }
}

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing required environment variable: ${name}`);
    process.exit(1);
  }
  return value;
}

const { getInitialSeedData } = await import(
  path.join(root, "src/lib/db/seed.ts")
);
const seed = await getInitialSeedData();

// table -> [seed key, columns, columns needing JSON.stringify]
const TABLES = [
  [
    "website_pricing_plans",
    "pricingPlans",
    ["id", "slug", "name", "description", "price_monthly", "price_annual", "annual_factor", "limits_text", "features", "is_popular", "badge_text", "cta_text", "cta_url", "display_order", "is_active", "created_at", "updated_at"],
    ["features"],
  ],
  [
    "website_blog_posts",
    "blogPosts",
    ["id", "slug", "title", "excerpt", "content", "cover_image", "author_name", "author_role", "author_avatar", "category", "tags", "status", "published_at", "scheduled_at", "seo_title", "seo_description", "og_image", "view_count", "created_at", "updated_at"],
    ["tags"],
  ],
  [
    "website_legal_documents",
    "legalDocuments",
    ["id", "slug", "title", "version", "content", "is_active", "changelog", "created_by", "created_at"],
    [],
  ],
  [
    "website_settings",
    "settings",
    ["id", "site_title", "site_description", "announcement_enabled", "announcement_text_en", "announcement_text_km", "announcement_link", "announcement_color", "contact_email", "support_phone", "telegram_url", "maintenance_mode", "analytics_enabled", "currency_rate_khr", "updated_at"],
    [],
  ],
];

const connection = await mysql.createConnection({
  host: requireEnv("MYSQL_HOST"),
  port: Number(process.env.MYSQL_PORT || 3306),
  user: requireEnv("MYSQL_USER"),
  password: requireEnv("MYSQL_PASSWORD"),
  database: requireEnv("MYSQL_DATABASE"),
  ssl: process.env.MYSQL_SSL === "true" ? { rejectUnauthorized: false } : undefined,
});

for (const [table, key, columns, jsonColumns] of TABLES) {
  const raw = seed[key];
  if (!raw) continue;
  const rows = Array.isArray(raw) ? raw : [raw];

  const sql = `INSERT IGNORE INTO ${table} (${columns.join(", ")}) VALUES (${columns.map(() => "?").join(", ")})`;

  for (const row of rows) {
    const values = columns.map((col) => {
      const value = row[col];
      if (value === undefined) return null;
      return jsonColumns.includes(col) ? JSON.stringify(value ?? (col === "payload" ? {} : [])) : value;
    });
    await connection.query(sql, values);
  }

  console.log(`${table}: ${rows.length} row(s)`);
}

await connection.end();
console.log("seed complete");
