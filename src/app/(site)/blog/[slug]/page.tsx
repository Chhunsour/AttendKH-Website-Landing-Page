import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { notFound } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import {
  Clock,
  ArrowRight,
  Home,
  ChevronRight,
  Calendar,
  FileText,
} from "lucide-react";
import { getBlogPostBySlug, getBlogPosts, incrementBlogPostViews, blogPosts } from "@/lib/site-content";
import { Section, CtaBand } from "@/components/site/ui";
import { ShareButtons } from "./share-buttons";
import { BlogSidebar } from "./blog-sidebar";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found — AttendKH", robots: { index: false, follow: false } };
  }

  const title = post.seo_title || post.title;
  const pageTitle = title.endsWith("AttendKH") ? title : `${title} — AttendKH`;
  const description = post.seo_description || post.excerpt;
  const url = absoluteUrl(`/blog/${post.slug}`);
  const ogImage = absoluteUrl(post.og_image || post.cover_image || "/opengraph-image");

  return {
    title: pageTitle,
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
  const publicContent = (post.content || "").replace(
    "**100% elimination** of ghost hours and buddy clock-ins.",
    "**Additional evidence** for reviewing ghost hours and buddy clock-ins."
  );

  // Pre-parse headings for Table of Contents
  const initialToc: { id: string; text: string; level: number }[] = [];
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  let match;
  while ((match = headingRegex.exec(publicContent)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    initialToc.push({ id, text, level });
  }

  const rawHtml = marked.parse(publicContent) as string;
  let safeHtml = sanitizeHtml(rawHtml, {
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
      h2: ["id", "class"],
      h3: ["id", "class"],
      h4: ["id", "class"],
    },
  });

  // Inject IDs into headings for smooth anchor jumping
  initialToc.forEach(({ id, text, level }) => {
    const tag = `h${level}`;
    safeHtml = safeHtml.replace(
      new RegExp(`<${tag}>\\s*${text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*<\/${tag}>`, "i"),
      `<${tag} id="${id}">${text}</${tag}>`
    );
  });

  const wordCount = post.content ? post.content.split(/\s+/).length : 0;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  // JSON-LD Structured Data
  const articleUrl = absoluteUrl(`/blog/${post.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.published_at || post.created_at,
        dateModified: post.updated_at || post.created_at,
        author: { "@type": "Person", name: post.author_name },
        publisher: {
          "@type": "Organization",
          name: "AttendKH",
          logo: { "@type": "ImageObject", url: absoluteUrl("/icon.png") },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
          { "@type": "ListItem", position: 3, name: post.category, item: articleUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Article Hero Banner with Signature Blue Style & Low-Opacity Cover Image */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#011C6B] via-[#0042CF] to-[#0052FF] text-white pt-28 pb-12 sm:pt-32 sm:pb-16 border-b border-blue-400/20 shadow-xs">
        {/* Blog Cover Image in Background with Enhanced Clarity & Smooth Gradient Blend */}
        {post.cover_image && (
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <img
              src={post.cover_image}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-center opacity-40 brightness-95 contrast-105"
            />
            {/* Directional gradient overlay: darker on left for text legibility, open on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#011C6B] via-[#011C6B]/85 to-[#0042CF]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0042CF]/90 via-transparent to-[#011C6B]/60" />
          </div>
        )}

        {/* Dynamic Ambient Background Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-1">
          {/* Soft glowing ambient light orbs */}
          <div className="absolute -top-24 -right-24 h-[450px] w-[450px] rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-28 -left-28 h-[450px] w-[450px] rounded-full bg-indigo-600/30 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-[260px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/10 blur-2xl" />

          {/* Subtle geometric dot-grid overlay */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full opacity-[0.06]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="bloghero-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bloghero-grid)" />
          </svg>

          {/* Curved signal orbits */}
          <svg
            aria-hidden="true"
            className="signal-orbit absolute left-1/2 top-1/2 h-[180%] w-[200%] -translate-x-1/2 -translate-y-1/2 text-white opacity-20"
            viewBox="0 0 1200 600"
            fill="none"
          >
            <ellipse
              cx="600"
              cy="300"
              rx="540"
              ry="260"
              stroke="currentColor"
              strokeDasharray="6 6"
              strokeOpacity="0.4"
            />
            <ellipse
              cx="600"
              cy="300"
              rx="380"
              ry="180"
              stroke="currentColor"
              strokeOpacity="0.3"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation - Exact PageHero Style */}
          <nav aria-label="Breadcrumb" className="mb-5 inline-flex items-center">
            <ol
              className="flex flex-wrap items-center gap-2 text-[13px] font-medium text-blue-100/90"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <li
                className="flex items-center gap-2"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <Home size={13} className="text-blue-200/80 shrink-0" />
                <Link
                  href="/"
                  itemProp="item"
                  className="text-blue-100/80 hover:text-white hover:underline transition-colors"
                >
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
                <ChevronRight size={13} className="text-blue-300/50 shrink-0" />
              </li>

              <li
                className="flex items-center gap-2"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <Link
                  href="/blog"
                  itemProp="item"
                  className="text-blue-100/80 hover:text-white hover:underline transition-colors"
                >
                  <span itemProp="name">Blog</span>
                </Link>
                <meta itemProp="position" content="2" />
                <ChevronRight size={13} className="text-blue-300/50 shrink-0" />
              </li>

              <li
                className="flex items-center gap-2"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <span
                  itemProp="name"
                  className="font-semibold text-white"
                >
                  {post.category}
                </span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          {/* Category Pill & Publication Date */}
          <div className="mb-4 flex flex-wrap items-center gap-2.5 text-xs">
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-xs border border-white/20 shadow-2xs">
              {post.category}
            </span>
            <span className="text-blue-300/60">•</span>
            <span className="font-num text-xs font-medium text-blue-100/80">
              {post.published_at
                ? new Date(post.published_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Recent"}
            </span>
            <span className="text-blue-300/60">•</span>
            <span className="font-num text-xs font-medium text-blue-100/80 flex items-center gap-1">
              <Clock size={12} className="text-blue-200" />
              <span>{readTime} min read</span>
            </span>
          </div>

          {/* Main Article Title */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white sm:leading-[1.15] max-w-4xl">
            {post.title}
          </h1>

          {/* Article Excerpt / Lead */}
          {post.excerpt && (
            <p className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-blue-100/90 max-w-3xl font-normal">
              {post.excerpt}
            </p>
          )}

          {/* Author info & Editorial Status Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs text-blue-100/80">
            <div className="flex items-center gap-3">
              {post.author_avatar ? (
                <img
                  src={post.author_avatar}
                  alt={post.author_name}
                  className="h-11 w-11 shrink-0 rounded-xl object-cover object-top border border-white/30 shadow-xs backdrop-blur-xs"
                />
              ) : (
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20 border border-white/25 font-display text-base font-bold text-white shadow-xs backdrop-blur-xs">
                  {post.author_name.charAt(0)}
                </div>
              )}
              <div>
                <p className="text-sm font-bold text-white leading-tight">{post.author_name}</p>
                <p className="text-xs text-blue-200/80 mt-0.5">{post.author_role || "Product Builder"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-blue-100/90">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-medium text-blue-100 border border-white/15 backdrop-blur-xs">
                <span>📍 Phnom Penh, Cambodia</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-emerald-500/20 px-2.5 py-1 rounded-md border border-emerald-400/30 backdrop-blur-xs">
                <span>✓ Verified Guide</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Body & Enhanced Right Sidebar */}
      <Section tone="white" className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 8 Columns: Article Content */}
            <div className="lg:col-span-8 min-w-0">
              {/* Share Buttons bar */}
              <ShareButtons title={post.title} slug={post.slug} />

              {/* Featured Cover Image Display */}
              {post.cover_image && (
                <div className="mb-8 overflow-hidden rounded-3xl border border-slate-200/90 shadow-md bg-slate-100 aspect-video md:aspect-[21/9] relative">
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Rendered HTML */}
              <article
                className="blog-article prose prose-slate min-w-0 max-w-none text-[16px] leading-relaxed text-body prose-headings:font-display prose-headings:font-bold prose-headings:text-ink prose-h2:mt-10 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl prose-a:text-brand prose-a:font-semibold prose-a:underline prose-code:font-mono prose-code:text-brand prose-pre:max-w-full prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:border prose-pre:border-line prose-pre:bg-mist prose-pre:p-4 prose-blockquote:border-l-brand prose-blockquote:bg-brand-soft/40 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-xl prose-img:rounded-2xl prose-img:border prose-img:border-line [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto"
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

            {/* Right 4 Columns: Enhanced Blog Sidebar */}
            <div className="lg:col-span-4 w-full">
              <BlogSidebar
                post={post}
                relatedPosts={relatedPosts}
                readTime={readTime}
                wordCount={wordCount}
                initialToc={initialToc}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section tone="mist">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-900">Related Articles</h2>
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
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xs transition-all hover:border-brand/40 hover:shadow-lg"
                >
                  <div>
                    {/* Card Cover Image */}
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="block overflow-hidden aspect-video bg-slate-100 relative border-b border-slate-100"
                    >
                      {rel.cover_image ? (
                        <img
                          src={rel.cover_image}
                          alt={rel.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-slate-50 to-blue-50/40 flex items-center justify-center">
                          <FileText size={28} className="text-slate-300" />
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-brand shadow-xs backdrop-blur-xs border border-white/60">
                          {rel.category}
                        </span>
                      </div>
                    </Link>

                    <div className="p-5 sm:p-6 pb-2">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                        <Calendar size={12} className="text-slate-400" />
                        <span>
                          {rel.published_at
                            ? new Date(rel.published_at).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })
                            : "Recent"}
                        </span>
                      </div>

                      <h3 className="font-display text-[16.5px] font-bold text-slate-900 group-hover:text-brand transition-colors leading-snug">
                        <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                      </h3>

                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600">
                        {rel.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 pt-3 mt-2 flex items-center justify-between border-t border-slate-100 text-xs">
                    <div className="flex items-center gap-2 font-medium text-slate-600">
                      {rel.author_avatar ? (
                        <img
                          src={rel.author_avatar}
                          alt={rel.author_name}
                          className="h-6 w-6 rounded-full object-cover object-top border border-slate-200"
                        />
                      ) : (
                        <div className="h-6 w-6 rounded-full bg-brand-soft text-brand flex items-center justify-center font-bold text-[9px]">
                          {rel.author_name.charAt(0)}
                        </div>
                      )}
                      <span className="truncate max-w-[120px] font-semibold text-slate-800">
                        {rel.author_name}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-brand hover:underline"
                    >
                      <span>Read guide</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>
      )}

      <CtaBand
        title="Ready to automate attendance & payroll?"
        sub="Get started with AttendKH for your entire team at just $1 per employee."
      />
    </>
  );
}
