import "server-only";
import mysql from "mysql2/promise";

// Thin MySQL layer that mimics the slice of the better-sqlite3 API this app
// used (`prepare().get()/.all()/.run()`), so the repository in ./index.ts
// could move over without rewriting all 44 query functions. The only
// difference is that the terminal call is now awaited.

let pool: mysql.Pool | null = null;

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export function getPool(): mysql.Pool {
  if (pool) return pool;

  pool = mysql.createPool({
    host: required("MYSQL_HOST"),
    port: Number(process.env.MYSQL_PORT || 3306),
    user: required("MYSQL_USER"),
    password: required("MYSQL_PASSWORD"),
    database: required("MYSQL_DATABASE"),
    // Named placeholders let the ported `@name` params keep working.
    namedPlaceholders: true,
    // Serverless invocations are short-lived and concurrent; a small pool
    // per instance avoids exhausting the server's max_connections.
    connectionLimit: Number(process.env.MYSQL_POOL_SIZE || 4),
    waitForConnections: true,
    enableKeepAlive: true,
    // MySQL DECIMAL/BIGINT come back as strings by default; the app expects
    // numbers for counts and prices.
    decimalNumbers: true,
    ssl:
      process.env.MYSQL_SSL === "true"
        ? {
            rejectUnauthorized: true,
            ...(process.env.MYSQL_SSL_CA
              ? { ca: process.env.MYSQL_SSL_CA.replace(/\\n/g, "\n") }
              : {}),
          }
        : undefined,
  });

  return pool;
}

/**
 * Rewrite better-sqlite3 `@name` placeholders to mysql2 `:name`, leaving
 * anything inside a quoted literal alone (an email in a string literal must
 * not be mangled).
 */
export function toNamedPlaceholders(sql: string): string {
  let out = "";
  let quote: string | null = null;

  for (let i = 0; i < sql.length; i++) {
    const ch = sql[i];

    if (quote) {
      out += ch;
      if (ch === "\\") {
        // Copy the escaped character verbatim.
        if (i + 1 < sql.length) out += sql[++i];
      } else if (ch === quote) {
        quote = null;
      }
      continue;
    }

    if (ch === "'" || ch === '"' || ch === "`") {
      quote = ch;
      out += ch;
      continue;
    }

    if (ch === "@" && /[a-zA-Z_]/.test(sql[i + 1] || "")) {
      out += ":";
      continue;
    }

    out += ch;
  }

  return out;
}

export interface RunResult {
  changes: number;
  lastInsertRowid: number;
}

export interface Statement {
  get<T = any>(...params: any[]): Promise<T | undefined>;
  all<T = any>(...params: any[]): Promise<T[]>;
  run(...params: any[]): Promise<RunResult>;
}

const isNamedParams = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value) && !(value instanceof Date);

/**
 * better-sqlite3 accepts either a single object of named params or a variadic
 * list of positional ones; mirror both. mysql2 rejects `undefined`, so any
 * undefined value becomes NULL.
 */
function normalise(params: any[]): any {
  if (params.length === 0) return [];

  if (params.length === 1 && isNamedParams(params[0])) {
    return Object.fromEntries(
      Object.entries(params[0]).map(([k, v]) => [k, v === undefined ? null : v])
    );
  }

  return params.map((p) => (p === undefined ? null : p));
}

export function prepare(sql: string): Statement {
  const text = toNamedPlaceholders(sql);

  return {
    async get<T>(...params: any[]) {
      const [rows] = await getPool().query(text, normalise(params));
      return (rows as T[])[0];
    },
    async all<T>(...params: any[]) {
      const [rows] = await getPool().query(text, normalise(params));
      return rows as T[];
    },
    async run(...params: any[]) {
      const [result] = await getPool().query(text, normalise(params));
      const r = result as mysql.ResultSetHeader;
      return { changes: r.affectedRows ?? 0, lastInsertRowid: r.insertId ?? 0 };
    },
  };
}

/** Run a set of statements inside a single transaction. */
export async function transaction<T>(
  fn: (conn: mysql.PoolConnection) => Promise<T>
): Promise<T> {
  const conn = await getPool().getConnection();
  try {
    await conn.beginTransaction();
    const result = await fn(conn);
    await conn.commit();
    return result;
  } catch (error) {
    await conn.rollback();
    throw error;
  } finally {
    conn.release();
  }
}

export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
  }
}
