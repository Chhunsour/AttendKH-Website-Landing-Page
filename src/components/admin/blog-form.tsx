"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Globe,
  Image as ImageIcon,
  Sparkles,
  Calendar,
  Tag,
  CheckCircle,
} from "lucide-react";
import { RichEditor } from "./rich-editor";
import { useToast } from "./toast";
import type { BlogPost } from "@/lib/db/schema";

interface BlogFormProps {
  initialData?: Partial<BlogPost>;
  isEdit?: boolean;
}

export function BlogForm({ initialData, isEdit = false }: BlogFormProps) {
  const router = useRouter();
  const { toast } = useToast();

  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [coverImage, setCoverImage] = useState(initialData?.cover_image || "");
  const [authorName, setAuthorName] = useState(initialData?.author_name || "AttendKH Team");
  const [authorRole, setAuthorRole] = useState(initialData?.author_role || "Product & Operations");
  const [category, setCategory] = useState(initialData?.category || "Attendance");
  const [tags, setTags] = useState<string[]>(initialData?.tags || ["GPS", "Cambodia"]);
  const [tagInput, setTagInput] = useState("");
  const [status, setStatus] = useState<"draft" | "published" | "scheduled" | "archived">(
    initialData?.status || "draft"
  );
  const [scheduledAt, setScheduledAt] = useState(initialData?.scheduled_at || "");
  const [seoTitle, setSeoTitle] = useState(initialData?.seo_title || "");
  const [seoDescription, setSeoDescription] = useState(initialData?.seo_description || "");
  const [loading, setLoading] = useState(false);

  // Auto-generate slug from title
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isEdit && (!slug || slug === generateSlug(title))) {
      setSlug(generateSlug(val));
    }
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const addTag = () => {
    if (!tagInput.trim()) return;
    if (!tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
    }
    setTagInput("");
  };

  const removeTag = (t: string) => {
    setTags(tags.filter((item) => item !== t));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      title,
      slug,
      excerpt,
      content,
      cover_image: coverImage || null,
      author_name: authorName,
      author_role: authorRole,
      category,
      tags,
      status,
      scheduled_at: status === "scheduled" ? scheduledAt : null,
      seo_title: seoTitle || title,
      seo_description: seoDescription || excerpt,
    };

    try {
      const url = isEdit ? `/api/admin/blog/${initialData?.id}` : "/api/admin/blog";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to save blog post");
        return;
      }

      toast.success(isEdit ? "Post updated successfully" : "Post created successfully");
      router.push("/admin/blog");
      router.refresh();
    } catch {
      toast.error("Network error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Header Actions */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-line pb-4">
        <Link
          href="/admin/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-ink transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to posts</span>
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-slate-500">Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as any)}
              className="rounded-lg border border-line bg-paper px-3 py-1.5 text-xs font-semibold text-ink focus:border-brand focus:outline-none"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="scheduled">Scheduled</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 rounded-lg bg-brand px-5 py-2 text-xs font-semibold text-white shadow-xs hover:bg-brand-dark transition-all disabled:opacity-50"
          >
            <Save size={14} />
            <span>{loading ? "Saving..." : isEdit ? "Save Changes" : "Create Post"}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Main Editor (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Post Title */}
          <div>
            <label className="block text-[13px] font-semibold text-ink mb-1.5">
              Article Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="e.g. How GPS Geofencing Eliminates Buddy Punching"
              className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-lg font-bold text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-[13px] font-semibold text-ink mb-1.5">
              Summary Excerpt (1-2 sentences)
            </label>
            <textarea
              required
              rows={2}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief summary displayed on blog listings and social cards..."
              className="w-full rounded-xl border border-line bg-paper p-3 text-[13.5px] text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none"
            />
          </div>

          {/* Rich Content Editor */}
          <div>
            <label className="block text-[13px] font-semibold text-ink mb-1.5">
              Full Article Content (Markdown)
            </label>
            <RichEditor
              value={content}
              onChange={setContent}
              minHeight="450px"
              placeholder="Write the complete article in markdown..."
            />
          </div>
        </div>

        {/* Sidebar Settings (1 col) */}
        <div className="space-y-6">
          {/* Publishing & URL */}
          <div className="rounded-2xl border border-line bg-paper p-5 shadow-xs space-y-4">
            <h3 className="font-display text-[14.5px] font-bold text-ink border-b border-line pb-2">
              URL & Hierarchy
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                URL Slug
              </label>
              <div className="flex items-center rounded-lg border border-line bg-mist/50 px-2.5 py-1.5 text-xs">
                <span className="text-slate-400 select-none">/blog/</span>
                <input
                  type="text"
                  required
                  value={slug}
                  onChange={(e) => setSlug(generateSlug(e.target.value))}
                  className="w-full bg-transparent font-mono font-medium text-ink outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs font-medium text-ink focus:border-brand focus:outline-none"
              >
                <option value="Attendance">Attendance</option>
                <option value="Payroll">Payroll</option>
                <option value="Operations">Operations</option>
                <option value="Labor Law">Labor Law</option>
                <option value="Product Updates">Product Updates</option>
              </select>
            </div>

            {status === "scheduled" && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Schedule Publish Date & Time
                </label>
                <input
                  type="datetime-local"
                  value={scheduledAt}
                  onChange={(e) => setScheduledAt(e.target.value)}
                  className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink"
                />
              </div>
            )}
          </div>

          {/* Author & Cover Image */}
          <div className="rounded-2xl border border-line bg-paper p-5 shadow-xs space-y-4">
            <h3 className="font-display text-[14.5px] font-bold text-ink border-b border-line pb-2">
              Author & Media
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Author Name
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink focus:border-brand focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Author Role / Title
              </label>
              <input
                type="text"
                value={authorRole}
                onChange={(e) => setAuthorRole(e.target.value)}
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink focus:border-brand focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Cover Image URL
              </label>
              <input
                type="text"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="/blog/geofence-banner.webp or /uploads/..."
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink focus:border-brand focus:outline-none"
              />
              <p className="mt-1 text-[11px] text-slate-400">
                Tip: Upload pictures in the Media Library first.
              </p>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Tags
              </label>
              <div className="flex gap-1.5">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addTag();
                    }
                  }}
                  placeholder="Add tag..."
                  className="flex-1 rounded-lg border border-line bg-paper p-2 text-xs text-ink"
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="rounded-lg border border-line bg-mist px-3 text-xs font-semibold text-slate-700 hover:bg-slate-200"
                >
                  Add
                </button>
              </div>

              <div className="mt-2 flex flex-wrap gap-1">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-700 font-medium"
                  >
                    <span>#{t}</span>
                    <button
                      type="button"
                      onClick={() => removeTag(t)}
                      className="text-slate-400 hover:text-slate-700"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* SEO & Social Metadata Preview */}
          <div className="rounded-2xl border border-line bg-paper p-5 shadow-xs space-y-4">
            <h3 className="font-display text-[14.5px] font-bold text-ink border-b border-line pb-2 flex items-center gap-1.5">
              <Globe size={15} className="text-brand" />
              <span>Search Engine Optimization (SEO)</span>
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                SEO Meta Title
              </label>
              <input
                type="text"
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
                placeholder={title || "Article SEO Title"}
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink focus:border-brand focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Meta Description
              </label>
              <textarea
                rows={2}
                value={seoDescription}
                onChange={(e) => setSeoDescription(e.target.value)}
                placeholder={excerpt || "Search snippet description..."}
                className="w-full rounded-lg border border-line bg-paper p-2 text-xs text-ink focus:border-brand focus:outline-none"
              />
            </div>

            {/* Google Search Result Preview */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-left">
              <span className="text-[10px] uppercase font-semibold text-slate-400">
                Google Search Result Preview
              </span>
              <p className="truncate text-xs text-[#1a0dab] font-semibold mt-1">
                {seoTitle || title || "Article Title"} — AttendKH
              </p>
              <p className="font-mono text-[10.5px] text-[#006621]">
                https://attendkh.com/blog/{slug || "article-slug"}
              </p>
              <p className="line-clamp-2 text-[11.5px] text-[#545454] mt-0.5">
                {seoDescription || excerpt || "Article snippet will appear here in Google search rankings."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
