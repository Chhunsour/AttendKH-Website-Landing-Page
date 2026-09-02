import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { randomUUID } from "node:crypto";
import { getAdminByEmail, getAdminById, updateAdminLastLogin } from "./db";
import type { AdminUser } from "./db/schema";

// Resolved per call rather than at module load: a missing secret should fail
// the request, not the build. There is deliberately no fallback value - a
// committed default secret means anyone with the source can mint admin
// sessions. Generate one with: openssl rand -base64 48
function getJwtSecret(): Uint8Array {
  const secret = process.env.ADMIN_JWT_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error(
      "ADMIN_JWT_SECRET is not set (or is shorter than 32 characters). " +
        "Admin authentication is disabled until it is configured."
    );
  }
  return new TextEncoder().encode(secret);
}
const COOKIE_NAME = process.env.NODE_ENV === "production"
  ? "__Host-attendkh_admin_session"
  : "attendkh_admin_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 24 * 7; // 7 days
const TOKEN_ISSUER = "https://dashboard.attendkh.com";
const TOKEN_AUDIENCE = "attendkh-admin";

export interface AdminSession {
  id: string;
  name: string;
  email: string;
  role: "super_admin" | "editor";
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function createAdminSession(admin: AdminUser): Promise<string> {
  const token = await new SignJWT({
    id: admin.id,
    name: admin.name,
    email: admin.email,
    role: admin.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuer(TOKEN_ISSUER)
    .setAudience(TOKEN_AUDIENCE)
    .setJti(randomUUID())
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION_SECONDS}s`)
    .sign(getJwtSecret());

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  });

  await updateAdminLastLogin(admin.id);
  return token;
}

export async function getAdminSession(): Promise<AdminSession | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token) return null;

    const { payload } = await jwtVerify(token, getJwtSecret(), {
      algorithms: ["HS256"],
      issuer: TOKEN_ISSUER,
      audience: TOKEN_AUDIENCE,
    });
    if (!payload || !payload.id) return null;

    // Verify active status in DB
    const admin = await getAdminById(payload.id as string);
    if (!admin || admin.is_active !== 1) return null;

    return {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
    };
  } catch {
    return null;
  }
}

export async function requireAdminSession(requiredRole?: "super_admin"): Promise<AdminSession> {
  const session = await getAdminSession();
  if (!session) {
    throw new Error("UNAUTHORIZED");
  }
  if (requiredRole && session.role !== requiredRole) {
    throw new Error("FORBIDDEN");
  }
  return session;
}

export async function destroyAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
