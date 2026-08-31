import "server-only";
import { createHmac } from "node:crypto";
import { prepare } from "./db/mysql";

export function getClientIp(req: Request): string {
  return (
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  ).slice(0, 96);
}

export function isSameOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return false;

  try {
    const supplied = new URL(origin);
    const host = (req.headers.get("x-forwarded-host") || req.headers.get("host") || new URL(req.url).host)
      .split(",")[0]
      .trim()
      .toLowerCase();
    const protocol = (req.headers.get("x-forwarded-proto") || new URL(req.url).protocol.replace(":", ""))
      .split(",")[0]
      .trim()
      .toLowerCase();
    return supplied.host.toLowerCase() === host && supplied.protocol === `${protocol}:`;
  } catch {
    return false;
  }
}

export async function readJsonBody(req: Request, maxBytes = 32_768): Promise<unknown> {
  const declared = Number(req.headers.get("content-length") || 0);
  if (declared > maxBytes) throw new Error("BODY_TOO_LARGE");
  const text = await req.text();
  if (Buffer.byteLength(text, "utf8") > maxBytes) throw new Error("BODY_TOO_LARGE");
  try {
    return JSON.parse(text);
  } catch {
    throw new Error("INVALID_JSON");
  }
}

export function jsonBodyError(error: unknown): Response | null {
  if (!(error instanceof Error)) return null;
  if (error.message === "BODY_TOO_LARGE") return Response.json({ error: "Request body too large" }, { status: 413 });
  if (error.message === "INVALID_JSON") return Response.json({ error: "Invalid JSON" }, { status: 400 });
  return null;
}

export function boundedQueryInt(
  params: URLSearchParams,
  name: string,
  fallback: number,
  min: number,
  max: number
): number {
  const value = Number.parseInt(params.get(name) || "", 10);
  return Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
}

function rateLimitSecret(): string {
  const secret = process.env.RATE_LIMIT_SECRET || process.env.ADMIN_JWT_SECRET;
  if (!secret || secret.length < 32) throw new Error("RATE_LIMIT_SECRET or ADMIN_JWT_SECRET must be at least 32 characters");
  return secret;
}

export async function checkRateLimit(
  req: Request,
  scope: string,
  limit: number,
  windowSeconds: number
): Promise<{ allowed: boolean; retryAfter: number }> {
  const now = Math.floor(Date.now() / 1000);
  const windowStart = now - (now % windowSeconds);
  const bucketKey = createHmac("sha256", rateLimitSecret())
    .update(`${scope}:${getClientIp(req)}`)
    .digest("hex");

  await prepare(`
    INSERT INTO website_rate_limits (bucket_key, window_start, hits)
    VALUES (?, ?, 1)
    ON DUPLICATE KEY UPDATE
      hits = IF(window_start < ?, 1, hits + 1),
      window_start = IF(window_start < ?, ?, window_start)
  `).run(bucketKey, windowStart, windowStart, windowStart, windowStart);

  const row = await prepare("SELECT hits FROM website_rate_limits WHERE bucket_key = ?").get(bucketKey) as { hits: number };
  return {
    allowed: row.hits <= limit,
    retryAfter: Math.max(1, windowStart + windowSeconds - now),
  };
}
