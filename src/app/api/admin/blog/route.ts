import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getBlogPosts, createBlogPost, getBlogPostBySlug } from "@/lib/db";
import { BlogPostSchema } from "@/lib/db/schema";
import { logAdminAction } from "@/lib/audit";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") || undefined;
  const category = searchParams.get("category") || undefined;
  const search = searchParams.get("search") || undefined;
  const limit = parseInt(searchParams.get("limit") || "20", 10);
  const offset = parseInt(searchParams.get("offset") || "0", 10);

  try {
    const data = await getBlogPosts({ status, category, search, limit, offset });
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Failed to fetch blog posts:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
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

    const id = `post_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
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
    console.error("Failed to create blog post:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
