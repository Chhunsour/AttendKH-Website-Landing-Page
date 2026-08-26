import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getLeads, getLeadById, updateLead, deleteLead } from "@/lib/db";
import { logAdminAction } from "@/lib/audit";
import { LeadStatusUpdateSchema } from "@/lib/db/schema";

export async function GET(req: Request) {
  const admin = await getAdminSession();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get("limit") || "30", 10);
  const offset = parseInt(searchParams.get("offset") || "0", 10);
  const search = searchParams.get("search") || undefined;
  const rawStatus = searchParams.get("status");
  const status = rawStatus && rawStatus !== "all" && rawStatus !== "undefined" ? rawStatus.toLowerCase() : undefined;
  const rawIndustry = searchParams.get("industry");
  const industry = rawIndustry && rawIndustry !== "all" && rawIndustry !== "undefined" ? rawIndustry : undefined;

  const result = await getLeads({ limit, offset, search, status, industry });
  return NextResponse.json(result);
}

export async function PUT(req: Request) {
  const admin = await getAdminSession();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const result = LeadStatusUpdateSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const { id, status, admin_notes } = result.data;
    const before = await getLeadById(id);
    if (!before) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    const updated = await updateLead(id, { status, admin_notes });

    await logAdminAction({
      session: admin,
      action: "lead_status_updated",
      targetEntity: "website_leads",
      targetId: id,
      beforeState: before as any,
      afterState: updated as any,
    });

    return NextResponse.json({ success: true, lead: updated });
  } catch (error) {
    console.error("Error updating lead:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const admin = await getAdminSession();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing lead id" }, { status: 400 });
  }

  const before = await getLeadById(id);
  if (!before) {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }

  await deleteLead(id);

  await logAdminAction({
    session: admin,
    action: "lead_deleted",
    targetEntity: "website_leads",
    targetId: id,
    beforeState: before as any,
    afterState: null,
  });

  return NextResponse.json({ success: true });
}
