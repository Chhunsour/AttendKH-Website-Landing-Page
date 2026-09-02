import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit, isSameOrigin, readJsonBody } from "@/lib/request-security";

const LeadCreateSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company name is required").max(150),
  industry: z.string().trim().min(1, "Industry is required").max(100),
  employees_count: z.union([z.number().int().min(1), z.string().min(1)]),
  branches_count: z.union([z.number().int().min(1), z.string().min(1)]),
  email: z.string().trim().email("Invalid email address").max(255),
  phone_telegram: z.string().trim().min(5, "Valid phone or Telegram username is required").max(100),
  preferred_language: z.enum(["en", "km"]).default("km"),
  message: z.string().max(2000).optional(),
  source_page: z.string().max(255).optional(),
});

export async function POST(req: Request) {
  try {
    if (!isSameOrigin(req)) return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
    const rate = await checkRateLimit(req, "contact", 5, 60 * 60);
    if (!rate.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Try again later." },
        { status: 429, headers: { "Retry-After": String(rate.retryAfter) } }
      );
    }
    const body = await readJsonBody(req, 32_768);
    const result = LeadCreateSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const leadId = `lead_${Date.now()}`;
    console.log("[Lead Received]:", { id: leadId, ...result.data });

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully. Our team will contact you shortly.",
      lead_id: leadId,
    });
  } catch (error: any) {
    if (error?.message === "BODY_TOO_LARGE") return NextResponse.json({ error: "Request body too large" }, { status: 413 });
    if (error?.message === "INVALID_JSON") return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    console.error("Error creating lead:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
