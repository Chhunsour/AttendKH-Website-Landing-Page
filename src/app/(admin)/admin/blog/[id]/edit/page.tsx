import { notFound } from "next/navigation";
import { getBlogPostById } from "@/lib/db";
import { BlogForm } from "@/components/admin/blog-form";

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getBlogPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-[22px] font-bold text-ink">
          Edit Article
        </h2>
        <p className="text-[13.5px] text-slate-500">
          Modify content, publishing status, and search optimization parameters.
        </p>
      </div>

      <BlogForm initialData={post} isEdit={true} />
    </div>
  );
}
