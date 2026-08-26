import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getWebsiteSettings, updateWebsiteSettings } from "@/lib/db";
import { WebsiteSettingsSchema } from "@/lib/db/schema";
import { logAdminAction } from "@/lib/audit";

export async function GET() {
  try {
    const settings = await getWebsiteSettings();
    return NextResponse.json({ settings });
  } catch (error: any) {
    console.error("Failed to fetch settings:", error);
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
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
    console.error("Failed to update settings:", error);
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
