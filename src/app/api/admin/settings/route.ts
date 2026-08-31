import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getWebsiteSettings, updateWebsiteSettings } from "@/lib/db";
import { WebsiteSettingsSchema } from "@/lib/db/schema";
import { logAdminAction } from "@/lib/audit";
import { isSameOrigin, jsonBodyError, readJsonBody } from "@/lib/request-security";

// Public presentation values only; operational flags remain admin-only.
const PUBLIC_SETTINGS_FIELDS = [
  "announcement_enabled",
  "announcement_text_en",
  "announcement_text_km",
  "announcement_link",
  "announcement_color",
  "contact_email",
  "support_phone",
  "telegram_url",
  "currency_rate_khr",
  "analytics_enabled",
  "maintenance_mode",
] as const;

export async function GET() {
  try {
    const settings = await getWebsiteSettings();
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json({
        settings: Object.fromEntries(
          PUBLIC_SETTINGS_FIELDS.map((key) => [key, settings[key]])
        ),
      });
    }

    return NextResponse.json({ settings });
  } catch (error: any) {
    console.error("Failed to fetch settings:", error);
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  if (!isSameOrigin(req)) return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (session.role !== "super_admin") {
    return NextResponse.json({ error: "Only Super Admins can update website settings" }, { status: 403 });
  }

  try {
    const body = await readJsonBody(req, 65_536);
    const existing = await getWebsiteSettings();

    const result = WebsiteSettingsSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const updated = await updateWebsiteSettings(result.data);

    await logAdminAction({
      session,
      action: "website_settings_updated",
      targetEntity: "website_settings",
      targetId: "default",
      beforeState: existing as any,
      afterState: updated as any,
    });

    return NextResponse.json({ success: true, settings: updated });
  } catch (error: any) {
    const bodyError = jsonBodyError(error);
    if (bodyError) return bodyError;
    console.error("Failed to update settings:", error);
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
