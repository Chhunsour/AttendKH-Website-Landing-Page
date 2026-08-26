import { NextResponse } from "next/server";
import { recordAnalyticsEvent } from "@/lib/db";
import { AnalyticsEventSchema } from "@/lib/db/schema";
import { parseUserAgent, parseTrafficSource } from "@/lib/analytics";

export async function POST(req: Request) {
  try {
    let body;
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      body = await req.json();
    } else {
      const text = await req.text();
      body = JSON.parse(text);
    }

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
      data.country ||
      "Cambodia";
    const city =
      req.headers.get("x-vercel-ip-city") ||
      data.city ||
      "Phnom Penh";

    const trafficSource = parseTrafficSource(data.referrer);

    await recordAnalyticsEvent({
      event_name: data.event_name,
      visitor_id: data.visitor_id,
      session_id: data.session_id,
      page_path: data.page_path,
      referrer: data.referrer || null,
      traffic_source: data.traffic_source || trafficSource,
      device_type: data.device_type || parsedUa.deviceType,
      browser: data.browser || parsedUa.browser,
      os: data.os || parsedUa.os,
      country,
      city,
      payload: data.payload || null,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: "Failed to record event" }, { status: 500 });
  }
}
