import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit, isSameOrigin, readJsonBody } from "@/lib/request-security";

const NewsletterSubscribeSchema = z.object({
  email: z.string().trim().email("Invalid email address").max(255),
  source_page: z.string().max(255).optional(),
});

export async function POST(req: Request) {
  try {
    if (!isSameOrigin(req)) return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
    const rate = await checkRateLimit(req, "newsletter", 10, 60 * 60);
    if (!rate.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Try again later." },
        { status: 429, headers: { "Retry-After": String(rate.retryAfter) } }
      );
    }
    const body = await readJsonBody(req, 8_192);
    const result = NewsletterSubscribeSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    console.log("[Newsletter Subscribed]:", result.data);

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully",
    });
  } catch (error: any) {
    if (error?.message === "BODY_TOO_LARGE") return NextResponse.json({ error: "Request body too large" }, { status: 413 });
    if (error?.message === "INVALID_JSON") return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    console.error("Error subscribing newsletter:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
