import { NextResponse } from "next/server";
import { recordAnalyticsEvent } from "@/lib/db";
import { AnalyticsEventSchema } from "@/lib/db/schema";
import { parseUserAgent, parseTrafficSource } from "@/lib/analytics";
import { checkRateLimit, isSameOrigin, readJsonBody } from "@/lib/request-security";

export async function POST(req: Request) {
  try {
    if (!isSameOrigin(req)) return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
    const rate = await checkRateLimit(req, "analytics", 120, 60);
    if (!rate.allowed) return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429, headers: { "Retry-After": String(rate.retryAfter) } });
    const body = await readJsonBody(req, 32_768);

    const result = AnalyticsEventSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: "Invalid event format" }, { status: 400 });
    }

    const data = result.data;
    const ua = req.headers.get("user-agent") || "";
    const parsedUa = parseUserAgent(ua);

    // Country/City estimation from deployment edge headers
    const country =
      req.headers.get("x-vercel-ip-country") ||
      req.headers.get("cf-ipcountry") ||
      "Unknown";
    const city =
      req.headers.get("x-vercel-ip-city") ||
      "Unknown";

    const trafficSource = parseTrafficSource(data.referrer);

    await recordAnalyticsEvent({
      event_name: data.event_name,
      visitor_id: data.visitor_id,
      session_id: data.session_id,
      page_path: data.page_path,
      referrer: data.referrer || null,
      traffic_source: trafficSource,
      device_type: parsedUa.deviceType,
      browser: parsedUa.browser,
      os: parsedUa.os,
      country,
      city,
      payload: data.payload || null,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error?.message === "BODY_TOO_LARGE") return NextResponse.json({ error: "Request body too large" }, { status: 413 });
    if (error?.message === "INVALID_JSON") return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    return NextResponse.json({ error: "Failed to record event" }, { status: 500 });
  }
}
