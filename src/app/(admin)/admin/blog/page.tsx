"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FileText,
  Plus,
  Edit2,
  Trash2,
  ExternalLink,
  Eye,
  Calendar,
  Tag,
  CheckCircle,
  Clock,
  Archive,
} from "lucide-react";
import { useToast } from "@/components/admin/toast";
import { Modal } from "@/components/admin/modal";

export default function AdminBlogPage() {
  const { toast } = useToast();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<any | null>(null);

  useEffect(() => {
    fetchPosts();
  }, [statusFilter, search]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (statusFilter !== "all") params.set("status", statusFilter);
      if (search) params.set("search", search);

      const res = await fetch(`/api/admin/blog?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts || []);
      }
    } catch (err) {
      console.error("Failed to load blog posts", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      const res = await fetch(`/api/admin/blog/${deleteTarget.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Post deleted successfully");
        setDeleteTarget(null);
        fetchPosts();
      } else {
        toast.error("Failed to delete post");
      }
    } catch {
      toast.error("Error deleting post");
    }
  };

  const handleStatusToggle = async (post: any) => {
    const nextStatus = post.status === "published" ? "draft" : "published";
    try {
      const res = await fetch(`/api/admin/blog/${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...post,
          status: nextStatus,
          published_at: nextStatus === "published" ? new Date().toISOString() : post.published_at,
        }),
      });
      if (res.ok) {
        toast.success(`Post marked as ${nextStatus}`);
        fetchPosts();
      } else {
        toast.error("Failed to update status");
      }
    } catch {
      toast.error("Error updating status");
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-[22px] font-bold text-ink">
            Blog & Article CMS
          </h2>
          <p className="text-[13.5px] text-slate-500">
            Publish educational guides, feature updates, and labor law insights.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/blog"
            target="_blank"
            className="flex items-center gap-1.5 rounded-lg border border-line bg-paper px-3.5 py-2 text-[13px] font-medium text-slate-700 hover:bg-mist hover:text-ink transition-colors"
          >
            <ExternalLink size={14} />
            <span>View Public Blog</span>
          </Link>

          <Link
            href="/admin/blog/new"
            className="flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-[13.5px] font-semibold text-white shadow-xs hover:bg-brand-dark transition-colors"
          >
            <Plus size={16} />
            <span>New Post</span>
          </Link>
        </div>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-1 rounded-xl border border-line bg-paper p-1 shadow-xs overflow-x-auto">
          {[
            { label: "All Posts", val: "all" },
            { label: "Published", val: "published" },
            { label: "Drafts", val: "draft" },
            { label: "Scheduled", val: "scheduled" },
            { label: "Archived", val: "archived" },
          ].map((tab) => (
            <button
              key={tab.val}
              type="button"
              onClick={() => setStatusFilter(tab.val)}
              className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                statusFilter === tab.val
                  ? "bg-brand text-white shadow-xs"
                  : "text-slate-600 hover:bg-mist hover:text-ink"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title, tag, or excerpt..."
          className="w-full sm:max-w-xs rounded-lg border border-line bg-paper px-3.5 py-2 text-[13px] text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none"
        />
      </div>

      {/* Posts Cards Grid / Table */}
      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-28 animate-pulse rounded-xl border border-line bg-paper" />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="rounded-2xl border border-line bg-paper py-16 text-center">
          <FileText size={36} className="mx-auto text-slate-300 mb-2" />
          <h3 className="font-display font-bold text-ink">No blog posts found</h3>
          <p className="text-xs text-slate-500 mt-1">
            Get started by creating your first educational article.
          </p>
          <Link
            href="/admin/blog/new"
            className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-white hover:bg-brand-dark"
          >
            <Plus size={14} />
            <span>Create Article</span>
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col gap-4 rounded-xl border border-line bg-paper p-5 shadow-xs transition-all hover:border-slate-300 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <FileText size={22} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${
                        post.status === "published"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : post.status === "scheduled"
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : post.status === "draft"
                          ? "bg-amber-50 text-amber-700 border border-amber-200"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {post.status === "published" ? (
                        <CheckCircle size={11} />
                      ) : post.status === "scheduled" ? (
                        <Clock size={11} />
                      ) : (
                        <Archive size={11} />
                      )}
                      <span className="capitalize">{post.status}</span>
                    </span>

                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                      {post.category}
                    </span>

                    <span className="font-mono text-[11.5px] text-slate-400">
                      /blog/{post.slug}
                    </span>
                  </div>

                  <h3 className="font-display mt-1 text-[15.5px] font-bold text-ink hover:text-brand transition-colors">
                    <Link href={`/admin/blog/${post.id}/edit`}>{post.title}</Link>
                  </h3>

                  <p className="mt-1 line-clamp-1 text-[12.5px] text-slate-500 max-w-2xl">
                    {post.excerpt}
                  </p>

                  <div className="mt-2.5 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span>By {post.author_name}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Eye size={13} />
                      <span>{post.view_count.toLocaleString()} reads</span>
                    </span>
                    {post.published_at && (
                      <>
                        <span>•</span>
                        <span>
                          Published {new Date(post.published_at).toLocaleDateString()}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => handleStatusToggle(post)}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                    post.status === "published"
                      ? "border border-line bg-paper text-slate-600 hover:bg-mist"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }`}
                >
                  {post.status === "published" ? "Unpublish" : "Publish"}
                </button>

                <Link
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  title="View Public Post"
                  className="rounded-lg border border-line p-2 text-slate-500 hover:bg-mist hover:text-ink transition-colors"
                >
                  <ExternalLink size={15} />
                </Link>

                <Link
                  href={`/admin/blog/${post.id}/edit`}
                  title="Edit Post"
                  className="rounded-lg border border-line p-2 text-brand hover:bg-brand-soft transition-colors"
                >
                  <Edit2 size={15} />
                </Link>

                <button
                  type="button"
                  onClick={() => setDeleteTarget(post)}
                  title="Delete Post"
                  className="rounded-lg border border-line p-2 text-rose-500 hover:bg-rose-50 hover:text-rose-700 transition-colors"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        title="Delete Blog Post"
        maxWidth="max-w-md"
      >
        <p className="text-sm text-slate-600">
          Are you sure you want to permanently delete{" "}
          <strong className="text-ink">&ldquo;{deleteTarget?.title}&rdquo;</strong>? This action cannot
          be undone.
        </p>
        <div className="mt-6 flex justify-end gap-2.5">
          <button
            type="button"
            onClick={() => setDeleteTarget(null)}
            className="rounded-lg border border-line px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-mist"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="rounded-lg bg-rose-600 px-4 py-2 text-xs font-semibold text-white hover:bg-rose-700"
          >
            Delete Post
          </button>
        </div>
      </Modal>
    </div>
  );
}
