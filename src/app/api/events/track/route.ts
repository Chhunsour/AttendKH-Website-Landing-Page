import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit, isSameOrigin, readJsonBody } from "@/lib/request-security";

const AnalyticsEventSchema = z.object({
  event_name: z.string().min(1).max(64),
  visitor_id: z.string().min(1).max(64),
  session_id: z.string().min(1).max(64),
  page_path: z.string().min(1).max(255),
  referrer: z.string().max(500).optional().nullable(),
  payload: z.record(z.string(), z.any()).optional().nullable(),
});

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

    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error?.message === "BODY_TOO_LARGE") return NextResponse.json({ error: "Request body too large" }, { status: 413 });
    if (error?.message === "INVALID_JSON") return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    return NextResponse.json({ error: "Failed to record event" }, { status: 500 });
  }
}
