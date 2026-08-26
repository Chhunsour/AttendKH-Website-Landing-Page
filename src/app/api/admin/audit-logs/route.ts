import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getAuditLogs } from "@/lib/db";

export async function GET(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || undefined;
  const action = searchParams.get("action") || undefined;
  const limit = parseInt(searchParams.get("limit") || "30", 10);
  const offset = parseInt(searchParams.get("offset") || "0", 10);

  try {
    const data = await getAuditLogs({ search, action, limit, offset });
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Failed to fetch audit logs:", error);
    return NextResponse.json({ error: "Failed to fetch audit logs" }, { status: 500 });
  }
}
