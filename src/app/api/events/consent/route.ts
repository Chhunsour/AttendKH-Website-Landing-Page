import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit, isSameOrigin, readJsonBody } from "@/lib/request-security";

const CookieConsentSchema = z.object({
  visitor_id: z.string().min(1).max(64),
  choice: z.enum(["accept_all", "reject_non_essential", "custom"]),
  categories: z.object({
    necessary: z.boolean().default(true),
    analytics: z.boolean().default(false),
    functional: z.boolean().default(false),
    marketing: z.boolean().default(false),
  }),
  policy_version: z.string().default("1.0"),
});

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

    return NextResponse.json({ success: true, consent: result.data });
  } catch (error: any) {
    if (error?.message === "BODY_TOO_LARGE") return NextResponse.json({ error: "Request body too large" }, { status: 413 });
    if (error?.message === "INVALID_JSON") return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    return NextResponse.json({ error: "Failed to record consent" }, { status: 500 });
  }
}
