import { NextResponse } from "next/server";
import path from "path";
import fs from "node:fs/promises";
import { getAdminSession } from "@/lib/auth";
import { listMedia, createMedia, deleteMedia, getMediaById } from "@/lib/db";
import { logAdminAction } from "@/lib/audit";
import { isSameOrigin } from "@/lib/request-security";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
function imageType(buffer: Buffer): { mime: string; ext: string } | null {
  if (buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return { mime: "image/png", ext: ".png" };
  if (buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) return { mime: "image/jpeg", ext: ".jpg" };
  if (buffer.subarray(0, 4).toString("ascii") === "RIFF" && buffer.subarray(8, 12).toString("ascii") === "WEBP") return { mime: "image/webp", ext: ".webp" };
  if (["GIF87a", "GIF89a"].includes(buffer.subarray(0, 6).toString("ascii"))) return { mime: "image/gif", ext: ".gif" };
  return null;
}

export async function GET() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const media = await listMedia();
    return NextResponse.json({ media });
  } catch (error: any) {
    console.error("Failed to list media:", error);
    return NextResponse.json({ error: "Failed to list media" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!isSameOrigin(req)) return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const altText = (formData.get("alt_text") as string) || "";

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File size exceeds 5MB limit." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const detected = imageType(buffer);
    if (!detected || detected.mime !== file.type) {
      return NextResponse.json(
        { error: "File content must be a valid JPEG, PNG, WebP, or GIF image." },
        { status: 400 }
      );
    }

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadsDir, { recursive: true });
    const sanitizedBase = path
      .basename(file.name, path.extname(file.name))
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, "-")
      .replace(/-+/g, "-")
      .slice(0, 80) || "image";
    const uniqueFilename = `${sanitizedBase}-${crypto.randomUUID()}${detected.ext}`;
    const filePath = path.join(uploadsDir, uniqueFilename);

    await fs.writeFile(filePath, buffer, { flag: "wx", mode: 0o640 });

    const publicUrl = `/uploads/${uniqueFilename}`;
    let mediaItem;
    try {
      mediaItem = await createMedia({
        filename: uniqueFilename,
        url: publicUrl,
        size_bytes: file.size,
        mime_type: detected.mime,
        alt_text: (altText || file.name).trim().slice(0, 512),
        uploaded_by: session.id,
      });
    } catch (error) {
      await fs.unlink(filePath).catch(() => {});
      throw error;
    }

    await logAdminAction({
      session,
      action: "media_uploaded",
      targetEntity: "website_media",
      targetId: mediaItem.id,
      afterState: mediaItem as any,
    });

    return NextResponse.json({ success: true, media: mediaItem });
  } catch (error: any) {
    console.error("Failed to upload file:", error);
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  if (!isSameOrigin(req)) return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Media ID required" }, { status: 400 });
  }

  try {
    const existing = await getMediaById(id);
    if (!existing) return NextResponse.json({ error: "Media not found" }, { status: 404 });
    await deleteMedia(id);
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    const filePath = path.join(uploadsDir, path.basename(existing.filename));
    await fs.unlink(filePath).catch((error: NodeJS.ErrnoException) => {
      if (error.code !== "ENOENT") console.error("Failed to remove media file:", error);
    });
    await logAdminAction({
      session,
      action: "media_deleted",
      targetEntity: "website_media",
      targetId: id,
      beforeState: existing as any,
    });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Failed to delete media:", error);
    return NextResponse.json({ error: "Failed to delete media" }, { status: 500 });
  }
}
