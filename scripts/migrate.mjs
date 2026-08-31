#!/usr/bin/env node
// Version-controlled migration runner.
//
//   node scripts/migrate.mjs            apply pending migrations
//   node scripts/migrate.mjs status     list applied / pending
//
// Reads connection settings from the environment (see .env.example). Loads
// .env.local when present so it works the same locally and in CI.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import mysql from "mysql2/promise";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const migrationsDir = path.join(root, "src/lib/db/migrations");

// Minimal .env.local loader - avoids a dependency for three lines of parsing.
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

const connection = await mysql.createConnection({
  host: requireEnv("MYSQL_HOST"),
  port: Number(process.env.MYSQL_PORT || 3306),
  user: requireEnv("MYSQL_USER"),
  password: requireEnv("MYSQL_PASSWORD"),
  database: requireEnv("MYSQL_DATABASE"),
  multipleStatements: true,
  ssl: process.env.MYSQL_SSL === "true" ? { rejectUnauthorized: false } : undefined,
});

await connection.query(`
  CREATE TABLE IF NOT EXISTS _migrations (
    name       VARCHAR(191) PRIMARY KEY,
    checksum   CHAR(64)     NOT NULL,
    applied_at VARCHAR(32)  NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
`);

const [appliedRows] = await connection.query("SELECT name, checksum FROM _migrations");
const applied = new Map(appliedRows.map((r) => [r.name, r.checksum]));

const files = fs
  .readdirSync(migrationsDir)
  .filter((f) => f.endsWith(".sql"))
  .sort();

const command = process.argv[2] || "up";

if (command === "status") {
  for (const file of files) {
    console.log(`${applied.has(file) ? "applied" : "pending"}  ${file}`);
  }
  await connection.end();
  process.exit(0);
}

let count = 0;
for (const file of files) {
  const sql = fs.readFileSync(path.join(migrationsDir, file), "utf8");
  const checksum = crypto.createHash("sha256").update(sql).digest("hex");

  if (applied.has(file)) {
    if (applied.get(file) !== checksum) {
      console.error(
        `${file} has changed since it was applied. Migrations are immutable - ` +
          `add a new migration instead of editing this one.`
      );
      await connection.end();
      process.exit(1);
    }
    continue;
  }

  process.stdout.write(`applying ${file} ... `);
  await connection.query(sql);
  await connection.query(
    "INSERT INTO _migrations (name, checksum, applied_at) VALUES (?, ?, ?)",
    [file, checksum, new Date().toISOString()]
  );
  console.log("ok");
  count++;
}

console.log(count === 0 ? "already up to date" : `${count} migration(s) applied`);
await connection.end();
