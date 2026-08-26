import { NextResponse } from "next/server";
import { getAdminSession, hashPassword } from "@/lib/auth";
import { listAdmins, createAdmin, updateAdmin, deleteAdmin, getAdminByEmail, getAdminById } from "@/lib/db";
import { AdminCreateSchema, AdminUpdateSchema } from "@/lib/db/schema";
import { logAdminAction } from "@/lib/audit";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const admins = await listAdmins();
    return NextResponse.json({ admins });
  } catch (error: any) {
    console.error("Failed to list admins:", error);
    return NextResponse.json({ error: "Failed to list admins" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (session.role !== "super_admin") {
    return NextResponse.json({ error: "Only Super Admins can add new administrators" }, { status: 403 });
  }

  try {
    const body = await req.json();
    const result = AdminCreateSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, password, role, is_active } = result.data;

    const existing = await getAdminByEmail(email);
    if (existing) {
      return NextResponse.json({ error: "An admin with this email already exists" }, { status: 409 });
    }

    const passwordHash = await hashPassword(password);
    const id = `admin_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    const admin = await createAdmin({
      id,
      name,
      email,
      password_hash: passwordHash,
      role,
      is_active: is_active ?? 1,
      last_login_at: null,
    });

    const { password_hash: _, ...safeAdmin } = admin;

    await logAdminAction({
      session,
      action: "admin_user_created",
      targetEntity: "website_admins",
      targetId: id,
      afterState: safeAdmin as any,
    });

    return NextResponse.json({ success: true, admin: safeAdmin });
  } catch (error: any) {
    console.error("Failed to create admin:", error);
    return NextResponse.json({ error: "Failed to create admin" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (session.role !== "super_admin") {
    return NextResponse.json({ error: "Only Super Admins can edit administrators" }, { status: 403 });
  }

  try {
    const body = await req.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: "Admin ID required" }, { status: 400 });
    }

    const existing = await getAdminById(id);
    if (!existing) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    const result = AdminUpdateSchema.safeParse(updates);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const payload: any = { ...result.data };
    if (payload.password) {
      payload.password_hash = await hashPassword(payload.password);
      delete payload.password;
    }

    const updated = await updateAdmin(id, payload);
    if (!updated) {
      return NextResponse.json({ error: "Failed to update admin" }, { status: 500 });
    }

    const { password_hash: _, ...safeUpdated } = updated;
    const { password_hash: __, ...safeExisting } = existing;

    await logAdminAction({
      session,
      action: "admin_user_updated",
      targetEntity: "website_admins",
      targetId: id,
      beforeState: safeExisting as any,
      afterState: safeUpdated as any,
    });

    return NextResponse.json({ success: true, admin: safeUpdated });
  } catch (error: any) {
    console.error("Failed to update admin:", error);
    return NextResponse.json({ error: "Failed to update admin" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (session.role !== "super_admin") {
    return NextResponse.json({ error: "Only Super Admins can delete administrators" }, { status: 403 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Admin ID required" }, { status: 400 });
  }

  if (id === session.id) {
    return NextResponse.json({ error: "You cannot delete your own admin account" }, { status: 400 });
  }

  try {
    const existing = await getAdminById(id);
    if (!existing) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    await deleteAdmin(id);

    const { password_hash: _, ...safeExisting } = existing;
    await logAdminAction({
      session,
      action: "admin_user_deleted",
      targetEntity: "website_admins",
      targetId: id,
      beforeState: safeExisting as any,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Failed to delete admin:", error);
    return NextResponse.json({ error: "Failed to delete admin" }, { status: 500 });
  }
}
