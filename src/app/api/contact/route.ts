import { NextResponse } from "next/server";
import { createLead, recordAnalyticsEvent } from "@/lib/db";
import { LeadCreateSchema } from "@/lib/db/schema";
import { parseUserAgent } from "@/lib/analytics";
import { checkRateLimit, isSameOrigin, readJsonBody } from "@/lib/request-security";

export async function POST(req: Request) {
  try {
    if (!isSameOrigin(req)) return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
    const rate = await checkRateLimit(req, "contact", 5, 60 * 60);
    if (!rate.allowed) {
      return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429, headers: { "Retry-After": String(rate.retryAfter) } });
    }
    const body = await readJsonBody(req, 32_768);
    const result = LeadCreateSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;
    const lead = await createLead({
      name: data.name,
      company: data.company,
      industry: data.industry,
      employees_count: data.employees_count,
      branches_count: data.branches_count,
      email: data.email,
      phone_telegram: data.phone_telegram,
      preferred_language: data.preferred_language,
      message: data.message,
      source_page: data.source_page || "/contact",
    });

    // Record conversion event
    try {
      const ua = req.headers.get("user-agent") || "";
      const parsedUa = parseUserAgent(ua);
      await recordAnalyticsEvent({
        event_name: "lead_submitted",
        visitor_id: `lead_vis_${lead.id}`,
        session_id: `lead_sess_${Date.now()}`,
        page_path: data.source_page || "/contact",
        device_type: parsedUa.deviceType,
        browser: parsedUa.browser,
        os: parsedUa.os,
        country: req.headers.get("cf-ipcountry") || req.headers.get("x-vercel-ip-country") || "Unknown",
        city: req.headers.get("x-vercel-ip-city") || "Unknown",
        payload: {
          lead_id: lead.id,
          industry: lead.industry,
          employees_count: lead.employees_count,
          branches_count: lead.branches_count,
        },
      });
    } catch {}

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully. Our team will contact you shortly.",
      lead_id: lead.id,
    });
  } catch (error: any) {
    if (error?.message === "BODY_TOO_LARGE") return NextResponse.json({ error: "Request body too large" }, { status: 413 });
    if (error?.message === "INVALID_JSON") return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    console.error("Error creating lead:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
