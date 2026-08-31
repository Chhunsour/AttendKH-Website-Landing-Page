import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getBlogPosts, createBlogPost, getBlogPostBySlug } from "@/lib/db";
import { BlogPostSchema } from "@/lib/db/schema";
import { logAdminAction } from "@/lib/audit";
import { boundedQueryInt, isSameOrigin, jsonBodyError, readJsonBody } from "@/lib/request-security";

export async function GET(req: Request) {
  // This listing includes drafts and scheduled posts, so it is admin-only.
  // Public blog reads go through getBlogPosts({ status: "published" }) in the
  // page components, not this route.
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") || undefined;
  const category = searchParams.get("category") || undefined;
  const search = searchParams.get("search") || undefined;
  const limit = boundedQueryInt(searchParams, "limit", 20, 1, 100);
  const offset = boundedQueryInt(searchParams, "offset", 0, 0, 1_000_000);

  try {
    const data = await getBlogPosts({ status, category, search, limit, offset });
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Failed to fetch blog posts:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!isSameOrigin(req)) return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await readJsonBody(req, 1_048_576);
    const result = BlogPostSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const {
      slug,
      title,
      excerpt,
      content,
      cover_image,
      author_name,
      author_role,
      author_avatar,
      category,
      tags,
      status,
      published_at,
      scheduled_at,
      seo_title,
      seo_description,
      og_image,
    } = result.data;

    // Check slug uniqueness
    const existing = await getBlogPostBySlug(slug);
    if (existing) {
      return NextResponse.json({ error: "A post with this slug already exists" }, { status: 409 });
    }

    const id = `post_${crypto.randomUUID()}`;
    const post = await createBlogPost({
      id,
      slug,
      title,
      excerpt,
      content,
      cover_image: cover_image || null,
      author_name: author_name || session.name,
      author_role: author_role || "Author",
      author_avatar: author_avatar || null,
      category,
      tags,
      status,
      published_at: status === "published" && !published_at ? new Date().toISOString() : published_at || null,
      scheduled_at: status === "scheduled" ? scheduled_at || null : null,
      seo_title: seo_title || title,
      seo_description: seo_description || excerpt,
      og_image: og_image || cover_image || null,
    });

    await logAdminAction({
      session,
      action: "blog_post_created",
      targetEntity: "website_blog_posts",
      targetId: post.id,
      afterState: post as any,
    });

    return NextResponse.json({ success: true, post });
  } catch (error: any) {
    const bodyError = jsonBodyError(error);
    if (bodyError) return bodyError;
    console.error("Failed to create blog post:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
