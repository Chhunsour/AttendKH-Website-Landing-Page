import { NextResponse } from "next/server";
import { recordCookieConsent } from "@/lib/db";
import { CookieConsentSchema } from "@/lib/db/schema";
import { parseUserAgent } from "@/lib/analytics";

export async function POST(req: Request) {
  try {
    const body = await req.json();
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
      data.country ||
      "Cambodia";

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
    return NextResponse.json({ error: "Failed to record consent" }, { status: 500 });
  }
}
