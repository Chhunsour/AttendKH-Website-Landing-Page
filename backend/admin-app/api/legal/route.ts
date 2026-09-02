import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getLegalDocumentVersions, createLegalDocumentVersion, setActiveLegalDocumentVersion, getActiveLegalDocument } from "@/lib/db";
import { LegalDocumentSchema } from "@/lib/db/schema";
import { logAdminAction } from "@/lib/audit";
import { isSameOrigin, jsonBodyError, readJsonBody } from "@/lib/request-security";

export async function GET(req: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug") as "privacy" | "terms" | "cookies" | "support" | null;

  try {
    if (slug) {
      const versions = await getLegalDocumentVersions(slug);
      const active = await getActiveLegalDocument(slug);
      return NextResponse.json({ slug, active, versions });
    }

    const slugs: Array<"privacy" | "terms" | "cookies" | "support"> = ["privacy", "terms", "cookies", "support"];
    const documents = await Promise.all(
      slugs.map(async (s) => {
        const active = await getActiveLegalDocument(s);
        const versions = await getLegalDocumentVersions(s);
        return { slug: s, active, versionCount: versions.length };
      })
    );

    return NextResponse.json({ documents });
  } catch (error: any) {
    console.error("Failed to fetch legal documents:", error);
    return NextResponse.json({ error: "Failed to fetch legal documents" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!isSameOrigin(req)) return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await readJsonBody(req, 1_048_576) as Record<string, any>;

    // Check if activating existing version
    if (body.action === "set_active") {
      const { id, slug } = body;
      if (!id || !slug) {
        return NextResponse.json({ error: "ID and slug required" }, { status: 400 });
      }
      const activated = await setActiveLegalDocumentVersion(id, slug);
      if (!activated) return NextResponse.json({ error: "Legal document version not found" }, { status: 404 });
      await logAdminAction({
        session,
        action: "legal_document_version_activated",
        targetEntity: "website_legal_documents",
        targetId: id,
        afterState: { slug, id, is_active: 1 },
      });
      return NextResponse.json({ success: true });
    }

    const result = LegalDocumentSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;
    const id = `doc_${data.slug}_v${data.version.replace(/\./g, "_")}_${Date.now()}`;

    const doc = await createLegalDocumentVersion({
      id,
      slug: data.slug,
      title: data.title,
      version: data.version,
      content: data.content,
      is_active: data.is_active,
      changelog: data.changelog || null,
      created_by: session.name,
    });

    await logAdminAction({
      session,
      action: "legal_document_version_created",
      targetEntity: "website_legal_documents",
      targetId: doc.id,
      afterState: doc as any,
    });

    return NextResponse.json({ success: true, document: doc });
  } catch (error: any) {
    const bodyError = jsonBodyError(error);
    if (bodyError) return bodyError;
    console.error("Failed to create legal document version:", error);
    return NextResponse.json({ error: "Failed to create legal document version" }, { status: 500 });
  }
}
