import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getVisitorsList, getVisitorDetails } from "@/lib/db";

export async function GET(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const visitorId = searchParams.get("visitor_id");

  try {
    if (visitorId) {
      const details = await getVisitorDetails(visitorId);
      return NextResponse.json(details);
    }

    const search = searchParams.get("search") || undefined;
    const limit = parseInt(searchParams.get("limit") || "25", 10);
    const offset = parseInt(searchParams.get("offset") || "0", 10);

    const data = await getVisitorsList({ search, limit, offset });
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Failed to fetch visitors:", error);
    return NextResponse.json({ error: "Failed to fetch visitors" }, { status: 500 });
  }
}
