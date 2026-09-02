import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getAuditLogs } from "@/lib/db";
import { boundedQueryInt } from "@/lib/request-security";

export async function GET(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (session.role !== "super_admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || undefined;
  const action = searchParams.get("action") || undefined;
  const limit = boundedQueryInt(searchParams, "limit", 30, 1, 100);
  const offset = boundedQueryInt(searchParams, "offset", 0, 0, 1_000_000);

  try {
    const data = await getAuditLogs({ search, action, limit, offset });
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Failed to fetch audit logs:", error);
    return NextResponse.json({ error: "Failed to fetch audit logs" }, { status: 500 });
  }
}
