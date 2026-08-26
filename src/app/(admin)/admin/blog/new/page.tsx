import { BlogForm } from "@/components/admin/blog-form";

export default function NewBlogPostPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-[22px] font-bold text-ink">
          Create New Article
        </h2>
        <p className="text-[13.5px] text-slate-500">
          Draft educational content, guides, or release notes for AttendKH visitors.
        </p>
      </div>

      <BlogForm />
    </div>
  );
}
