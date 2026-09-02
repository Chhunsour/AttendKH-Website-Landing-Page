import "server-only";

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

// In-memory rate limiting store for serverless/edge/node execution
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

export async function checkRateLimit(
  req: Request,
  scope: string,
  limit: number,
  windowSeconds: number
): Promise<{ allowed: boolean; retryAfter: number }> {
  const now = Date.now();
  const ip = getClientIp(req);
  const key = `${scope}:${ip}`;
  const entry = rateLimitMap.get(key);

  if (!entry || entry.expiresAt <= now) {
    rateLimitMap.set(key, { count: 1, expiresAt: now + windowSeconds * 1000 });
    return { allowed: true, retryAfter: windowSeconds };
  }

  if (entry.count >= limit) {
    return {
      allowed: false,
      retryAfter: Math.ceil((entry.expiresAt - now) / 1000),
    };
  }

  entry.count += 1;
  return { allowed: true, retryAfter: Math.ceil((entry.expiresAt - now) / 1000) };
}

