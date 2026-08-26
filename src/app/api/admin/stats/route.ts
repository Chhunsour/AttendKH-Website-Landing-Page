import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getAnalyticsDashboardStats } from "@/lib/db";

export async function GET(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const daysParam = searchParams.get("days");
  const days = daysParam ? parseInt(daysParam, 10) : 14;

  try {
    const stats = await getAnalyticsDashboardStats(days > 0 && days <= 365 ? days : 14);
    return NextResponse.json(stats);
  } catch (error: any) {
    console.error("Failed to load dashboard stats:", error);
    return NextResponse.json({ error: "Failed to load statistics" }, { status: 500 });
  }
}
