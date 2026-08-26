import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getBlogPostById, updateBlogPost, deleteBlogPost, getBlogPostBySlug } from "@/lib/db";
import { BlogPostSchema } from "@/lib/db/schema";
import { logAdminAction } from "@/lib/audit";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const post = await getBlogPostById(id);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error: any) {
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const existing = await getBlogPostById(id);
    if (!existing) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const body = await req.json();
    const result = BlogPostSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    // Check slug uniqueness if changed
    if (data.slug !== existing.slug) {
      const duplicate = await getBlogPostBySlug(data.slug);
      if (duplicate && duplicate.id !== id) {
        return NextResponse.json({ error: "A post with this slug already exists" }, { status: 409 });
      }
    }

    let published_at = data.published_at;
    if (data.status === "published" && !existing.published_at && !published_at) {
      published_at = new Date().toISOString();
    }

    const updated = await updateBlogPost(id, {
      ...data,
      published_at: published_at || null,
      scheduled_at: data.status === "scheduled" ? data.scheduled_at || null : null,
    });

    await logAdminAction({
      session,
      action: "blog_post_updated",
      targetEntity: "website_blog_posts",
      targetId: id,
      beforeState: existing as any,
      afterState: updated as any,
    });

    return NextResponse.json({ success: true, post: updated });
  } catch (error: any) {
    console.error("Failed to update post:", error);
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const existing = await getBlogPostById(id);
    if (!existing) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    await deleteBlogPost(id);

    await logAdminAction({
      session,
      action: "blog_post_deleted",
      targetEntity: "website_blog_posts",
      targetId: id,
      beforeState: existing as any,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Failed to delete post:", error);
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
