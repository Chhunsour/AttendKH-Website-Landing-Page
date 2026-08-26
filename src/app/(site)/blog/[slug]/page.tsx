import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import {
  Clock,
  ArrowRight,
} from "lucide-react";
import { getBlogPostBySlug, getBlogPosts, incrementBlogPostViews } from "@/lib/db";
import { Section, CtaBand } from "@/components/site/ui";
import { ShareButtons } from "./share-buttons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found — AttendKH" };
  }

  const title = post.seo_title || post.title;
  const description = post.seo_description || post.excerpt;
  const url = `https://attendkh.com/blog/${post.slug}`;
  const ogImage = post.og_image || post.cover_image || "/blog/default-og.webp";

  return {
    title: `${title} — AttendKH`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: post.published_at || post.created_at,
      authors: [post.author_name],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  // Increment view count asynchronously
  incrementBlogPostViews(post.id).catch(() => {});

  const { posts: allPosts } = await getBlogPosts({ status: "published", limit: 4 });
  const relatedPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 3);

  // Render markdown to HTML safely
  const rawHtml = marked.parse(post.content || "") as string;
  const safeHtml = sanitizeHtml(rawHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "h1",
      "h2",
      "h3",
      "h4",
      "span",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "title", "width", "height"],
      span: ["class"],
      code: ["class"],
    },
  });

  const wordCount = post.content ? post.content.split(/\s+/).length : 0;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published_at || post.created_at,
    dateModified: post.updated_at || post.created_at,
    author: {
      "@type": "Person",
      name: post.author_name,
    },
    publisher: {
      "@type": "Organization",
      name: "AttendKH",
      logo: {
        "@type": "ImageObject",
        url: "https://attendkh.com/favicon.ico",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://attendkh.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article Hero Banner */}
      <section className="relative overflow-hidden bg-brand text-white">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[180%] w-[200%] -translate-x-1/2 -translate-y-1/2 text-white"
          viewBox="0 0 1200 600"
          fill="none"
        >
          <ellipse cx="600" cy="300" rx="540" ry="260" stroke="currentColor" strokeOpacity="0.07" />
          <ellipse cx="600" cy="300" rx="380" ry="180" stroke="currentColor" strokeOpacity="0.06" />
        </svg>
        <div className="relative mx-auto max-w-3xl px-5 pt-28 pb-12 sm:px-8 sm:pt-32 sm:pb-16">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-blue-200">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="transition-colors hover:text-white">
              Blog
            </Link>
            <span>/</span>
            <span className="truncate font-medium text-white">{post.category}</span>
          </nav>

          {/* Category Pill & Date */}
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-white/20 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              {post.category}
            </span>
            <span className="text-xs text-blue-300">•</span>
            <span className="font-mono text-xs text-blue-200">
              {post.published_at
                ? new Date(post.published_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Recent"}
            </span>
          </div>

          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-[1.2]">
            {post.title}
          </h1>

          <p className="mt-4 text-[16px] leading-relaxed text-blue-100 sm:text-[17px]">
            {post.excerpt}
          </p>

          {/* Author info & Read Time */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs text-blue-100">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-sm font-bold text-white backdrop-blur-sm">
                {post.author_name.charAt(0)}
              </div>
              <div>
                <p className="text-[13.5px] font-semibold text-white">{post.author_name}</p>
                <p className="text-[11.5px] text-blue-200">{post.author_role || "AttendKH Operations"}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 font-mono text-xs text-blue-200">
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                <span>{readTime} min read</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Body & Sidebar */}
      <Section tone="white" className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          {/* Share Buttons bar */}
          <ShareButtons title={post.title} slug={post.slug} />

          {/* Rendered HTML */}
          <article
            className="prose prose-slate max-w-none text-[16px] leading-relaxed text-body prose-headings:font-display prose-headings:font-bold prose-headings:text-ink prose-h2:mt-10 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl prose-a:text-brand prose-a:font-semibold prose-a:underline prose-code:font-mono prose-code:text-brand prose-pre:rounded-xl prose-pre:border prose-pre:border-line prose-pre:bg-mist prose-pre:p-4 prose-blockquote:border-l-brand prose-blockquote:bg-brand-soft/40 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-xl prose-img:rounded-2xl prose-img:border prose-img:border-line"
            dangerouslySetInnerHTML={{ __html: safeHtml }}
          />

          {/* Tags Footer */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-line pt-6">
              <span className="text-xs font-semibold text-slate-500">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-mist px-3 py-1 font-mono text-xs text-slate-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Bottom Share Bar */}
          <div className="mt-8 rounded-2xl border border-line bg-mist/50 p-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display font-bold text-ink text-sm">
                Found this article helpful?
              </p>
              <p className="text-xs text-slate-500">Share it with your HR or management team</p>
            </div>
            <ShareButtons title={post.title} slug={post.slug} compact />
          </div>
        </div>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section tone="mist">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-ink">Related Articles</h2>
                <p className="text-xs text-slate-500 mt-0.5">Continue reading AttendKH operational guides</p>
              </div>
              <Link href="/blog" className="text-xs font-semibold text-brand hover:underline">
                View all articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((rel) => (
                <article
                  key={rel.id}
                  className="flex flex-col justify-between rounded-2xl border border-line bg-paper p-6 shadow-xs hover:border-brand transition-colors"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h3 className="font-display mt-1.5 text-[16px] font-bold text-ink hover:text-brand transition-colors">
                      <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs text-body">{rel.excerpt}</p>
                  </div>

                  <Link
                    href={`/blog/${rel.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand"
                  >
                    <span>Read guide</span>
                    <ArrowRight size={13} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </Section>
      )}

      <CtaBand
        title="Ready to automate attendance & payroll?"
        sub="Try AttendKH free for 14 days with your own team. No card required."
      />
    </>
  );
}
