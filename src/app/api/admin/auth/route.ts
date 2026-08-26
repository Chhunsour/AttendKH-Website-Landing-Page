import { NextResponse } from "next/server";
import { getAdminByEmail } from "@/lib/db";
import { AdminLoginSchema } from "@/lib/db/schema";
import { verifyPassword, createAdminSession, getAdminSession, destroyAdminSession } from "@/lib/auth";
import { logAdminAction } from "@/lib/audit";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
  return NextResponse.json({ authenticated: true, user: session });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = AdminLoginSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid login credentials format", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { email, password } = result.data;
    const admin = await getAdminByEmail(email);

    if (!admin || admin.is_active !== 1) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isValid = await verifyPassword(password, admin.password_hash);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    await createAdminSession(admin);

    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip");
    await logAdminAction({
      session: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
      action: "admin_login",
      targetEntity: "website_admins",
      targetId: admin.id,
      ipAddress: ip,
    });

    return NextResponse.json({
      success: true,
      user: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error: any) {
    console.error("Admin login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE() {
  const session = await getAdminSession();
  if (session) {
    await logAdminAction({
      session,
      action: "admin_logout",
      targetEntity: "website_admins",
      targetId: session.id,
    });
  }
  await destroyAdminSession();
  return NextResponse.json({ success: true });
}
