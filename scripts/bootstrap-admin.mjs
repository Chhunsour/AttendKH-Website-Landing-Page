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
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2].trim().replace(/^["']|["']$/g, "");
  }
}

function required(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

const email = required("ADMIN_BOOTSTRAP_EMAIL").trim().toLowerCase();
const password = required("ADMIN_BOOTSTRAP_PASSWORD");
const name = process.env.ADMIN_BOOTSTRAP_NAME?.trim() || "AttendKH Administrator";
if (!/^\S+@\S+\.\S+$/.test(email)) throw new Error("ADMIN_BOOTSTRAP_EMAIL is invalid");
if (password.length < 12) throw new Error("ADMIN_BOOTSTRAP_PASSWORD must be at least 12 characters");

const connection = await mysql.createConnection({
  host: required("MYSQL_HOST"),
  port: Number(process.env.MYSQL_PORT || 3306),
  user: required("MYSQL_USER"),
  password: required("MYSQL_PASSWORD"),
  database: required("MYSQL_DATABASE"),
  ssl: process.env.MYSQL_SSL === "true"
    ? { rejectUnauthorized: true, ...(process.env.MYSQL_SSL_CA ? { ca: process.env.MYSQL_SSL_CA.replace(/\\n/g, "\n") } : {}) }
    : undefined,
});

const [countRows] = await connection.query("SELECT COUNT(*) AS count FROM website_admins");
if (Number(countRows[0].count) > 0) {
  await connection.end();
  throw new Error("Admin bootstrap refused: an administrator already exists");
}

const now = new Date().toISOString();
await connection.query(
  `INSERT INTO website_admins
    (id, name, email, password_hash, role, is_active, last_login_at, created_at, updated_at)
   VALUES (?, ?, ?, ?, 'super_admin', 1, NULL, ?, ?)`,
  [`admin_${crypto.randomUUID()}`, name, email, await bcrypt.hash(password, 12), now, now]
);
await connection.end();
console.log("Initial super administrator created. Bootstrap credentials were not printed.");
