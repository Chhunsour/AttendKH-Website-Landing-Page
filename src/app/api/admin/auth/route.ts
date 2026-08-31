import { NextResponse } from "next/server";
import { getAdminByEmail } from "@/lib/db";
import { AdminLoginSchema } from "@/lib/db/schema";
import { verifyPassword, createAdminSession, getAdminSession, destroyAdminSession } from "@/lib/auth";
import { logAdminAction } from "@/lib/audit";
import { checkRateLimit, getClientIp, isSameOrigin, readJsonBody } from "@/lib/request-security";

const DUMMY_PASSWORD_HASH = "$2b$12$JEB2bffagAzNNkWa2IbYEO9E/XUg8Jjf1MMdwu/bgQI1SFR.YQgpG";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
  return NextResponse.json({ authenticated: true, user: session });
}

export async function POST(req: Request) {
  try {
    if (!isSameOrigin(req)) {
      return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
    }
    const rate = await checkRateLimit(req, "admin-login", 10, 15 * 60);
    if (!rate.allowed) {
      return NextResponse.json(
        { error: "Too many login attempts. Try again later." },
        { status: 429, headers: { "Retry-After": String(rate.retryAfter) } }
      );
    }

    const body = await readJsonBody(req, 4_096);
    const result = AdminLoginSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid login credentials format", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { email, password } = result.data;
    const admin = await getAdminByEmail(email);

    const isValid = await verifyPassword(password, admin?.password_hash || DUMMY_PASSWORD_HASH);
    if (!admin || admin.is_active !== 1 || !isValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    await createAdminSession(admin);

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
      ipAddress: getClientIp(req),
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
    if (error?.message === "BODY_TOO_LARGE") {
      return NextResponse.json({ error: "Request body too large" }, { status: 413 });
    }
    if (error?.message === "INVALID_JSON") {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }
    console.error("Admin login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  if (!isSameOrigin(req)) {
    return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
  }
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
