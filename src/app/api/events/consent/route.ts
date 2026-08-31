import { NextResponse } from "next/server";
import { recordCookieConsent } from "@/lib/db";
import { CookieConsentSchema } from "@/lib/db/schema";
import { parseUserAgent } from "@/lib/analytics";
import { checkRateLimit, isSameOrigin, readJsonBody } from "@/lib/request-security";

export async function POST(req: Request) {
  try {
    if (!isSameOrigin(req)) return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
    const rate = await checkRateLimit(req, "consent", 20, 60 * 60);
    if (!rate.allowed) return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429, headers: { "Retry-After": String(rate.retryAfter) } });
    const body = await readJsonBody(req, 8_192);
    const result = CookieConsentSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: "Invalid consent format" }, { status: 400 });
    }

    const data = result.data;
    const ua = req.headers.get("user-agent") || "";
    const parsedUa = parseUserAgent(ua);
    const country =
      req.headers.get("x-vercel-ip-country") ||
      req.headers.get("cf-ipcountry") ||
      "Unknown";

    const consent = await recordCookieConsent({
      visitor_id: data.visitor_id,
      choice: data.choice,
      categories: data.categories,
      policy_version: data.policy_version,
      user_agent: `${parsedUa.browser} on ${parsedUa.os}`,
      country,
    });

    return NextResponse.json({ success: true, consent });
  } catch (error: any) {
    if (error?.message === "BODY_TOO_LARGE") return NextResponse.json({ error: "Request body too large" }, { status: 413 });
    if (error?.message === "INVALID_JSON") return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    return NextResponse.json({ error: "Failed to record consent" }, { status: 500 });
  }
}
