#!/usr/bin/env node
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import bcrypt from "bcryptjs";
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

function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {};
  for (const arg of args) {
    if (arg.startsWith("--")) {
      const [key, ...vals] = arg.slice(2).split("=");
      parsed[key] = vals.join("=");
    }
  }
  return parsed;
}

const args = parseArgs();
const name = args.name || process.env.ADMIN_BOOTSTRAP_NAME || "M4 Administrator";
const email = (args.email || process.env.ADMIN_BOOTSTRAP_EMAIL || "admin@attendkh.com").trim().toLowerCase();
const password = args.password || process.env.ADMIN_BOOTSTRAP_PASSWORD || "AttendKH@2026!";
const role = args.role || "super_admin";

if (!/^\S+@\S+\.\S+$/.test(email)) {
  console.error("Error: Invalid email format");
  process.exit(1);
}
if (password.length < 8) {
  console.error("Error: Password must be at least 8 characters");
  process.exit(1);
}

const connection = await mysql.createConnection({
  host: process.env.MYSQL_HOST || "127.0.0.1",
  port: Number(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER || "akh",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "attendkh_test",
  ssl: process.env.MYSQL_SSL === "true" ? { rejectUnauthorized: false } : undefined,
});

const [existingRows] = await connection.query(
  "SELECT id, name, email, role FROM website_admins WHERE email = ?",
  [email]
);

const now = new Date().toISOString();
const passwordHash = await bcrypt.hash(password, 12);

if (existingRows.length > 0) {
  const existing = existingRows[0];
  await connection.query(
    "UPDATE website_admins SET name = ?, password_hash = ?, role = ?, is_active = 1, updated_at = ? WHERE id = ?",
    [name, passwordHash, role, now, existing.id]
  );
  console.log(`Updated existing administrator [${email}] (Role: ${role})`);
} else {
  const id = `admin_${crypto.randomUUID()}`;
  await connection.query(
    `INSERT INTO website_admins
      (id, name, email, password_hash, role, is_active, last_login_at, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, 1, NULL, ?, ?)`,
    [id, name, email, passwordHash, role, now, now]
  );
  console.log(`Created new administrator [${email}] (Role: ${role})`);
}

await connection.end();
console.log("Admin account is ready for login.");
