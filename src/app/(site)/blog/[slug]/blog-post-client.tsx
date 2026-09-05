"use client";

import { useMemo, useState } from "react";
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
  Tag,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import type { BlogPost } from "@/lib/site-content";
import { Section, CtaBand, PageHero, type BreadcrumbItem } from "@/components/site/ui";
import { ShareButtons } from "./share-buttons";
import { BlogSidebar } from "./blog-sidebar";
import { useSite } from "@/lib/i18n";

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const { lang } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  // Localized post content resolution
  const postTitle = useMemo(() => {
    if (isKm && post.title_km) return post.title_km;
    if (isZh && post.title_zh) return post.title_zh;
    return post.title;
  }, [isKm, isZh, post]);

  const postExcerpt = useMemo(() => {
    if (isKm && post.excerpt_km) return post.excerpt_km;
    if (isZh && post.excerpt_zh) return post.excerpt_zh;
    return post.excerpt;
  }, [isKm, isZh, post]);

  const rawMarkdown = useMemo(() => {
    let md = post.content || "";
    if (isKm && post.content_km) md = post.content_km;
    if (isZh && post.content_zh) md = post.content_zh;
    if (!md) return "";

    // Automatically strip any markdown or HTML image referencing the post's featured cover_image (and its caption)
    // so the featured image is never displayed twice on the page.
    if (post.cover_image) {
      const filename = post.cover_image.split("/").pop();
      if (filename) {
        const escaped = filename.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const mdImgRegex = new RegExp(
          `!\\s*\\[[^\\]]*\\]\\([^)]*${escaped}[^)]*\\)\\s*(?:\\*(?:Figure|រូបភាព|图)[^\\n]*\\*)?\\s*`,
          "gi"
        );
        const htmlImgRegex = new RegExp(
          `<img[^>]*${escaped}[^>]*>\\s*(?:<figcaption[^>]*>.*?</figcaption>)?\\s*`,
          "gi"
        );
        md = md.replace(mdImgRegex, "").replace(htmlImgRegex, "").trimStart();
      }
    }
    return md;
  }, [isKm, isZh, post]);

  const postCategory = useMemo(() => {
    if (isKm && post.category_km) return post.category_km;
    if (isZh && post.category_zh) return post.category_zh;
    return post.category;
  }, [isKm, isZh, post]);

  const postTags = useMemo(() => {
    if (isKm && post.tags_km) return post.tags_km;
    if (isZh && post.tags_zh) return post.tags_zh;
    return post.tags;
  }, [isKm, isZh, post]);

  const postAuthorRole = useMemo(() => {
    if (isKm && post.author_role_km) return post.author_role_km;
    if (isZh && post.author_role_zh) return post.author_role_zh;
    return post.author_role;
  }, [isKm, isZh, post]);

  const postKeyTakeaways = useMemo(() => {
    if (isKm && post.key_takeaways_km) return post.key_takeaways_km;
    if (isZh && post.key_takeaways_zh) return post.key_takeaways_zh;
    return post.key_takeaways;
  }, [isKm, isZh, post]);

  // Process markdown into HTML with IDs and extract TOC items
  const { safeHtml, toc, readTime, wordCount } = useMemo(() => {
    if (!rawMarkdown) {
      return { safeHtml: "", toc: [], readTime: 1, wordCount: 0 };
    }

    const extractedToc: { id: string; title: string; number?: string }[] = [];
    const lines = rawMarkdown.split("\n");

    for (const line of lines) {
      const match = line.match(/^##\s+(?:(\d+[\.\)]?\s+)?)(.+)$/);
      if (match) {
        const fullTitle = line.replace(/^##\s+/, "").trim();
        const numberMatch = fullTitle.match(/^(\d+[\.\)]?)\s*(.+)$/);
        const number = numberMatch ? numberMatch[1] : undefined;
        const cleanTitle = numberMatch ? numberMatch[2] : fullTitle;
        const id = fullTitle
          .toLowerCase()
          .replace(/[^a-z0-9\u1780-\u17ff\u4e00-\u9fa5]+/g, "-")
          .replace(/(^-|-$)/g, "") || `heading-${extractedToc.length + 1}`;
        extractedToc.push({ id, title: cleanTitle, number });
      }
    }

    let parsedHtml = marked.parse(rawMarkdown) as string;

    // Inject matching ID and scroll offset to all h2 headings
    let h2Idx = 0;
    parsedHtml = parsedHtml.replace(/<h2>(.*?)<\/h2>/g, (match, innerTitle) => {
      const plainText = innerTitle.replace(/<[^>]*>?/gm, "").trim();
      const id = plainText
        .toLowerCase()
        .replace(/[^a-z0-9\u1780-\u17ff\u4e00-\u9fa5]+/g, "-")
        .replace(/(^-|-$)/g, "") || `heading-${++h2Idx}`;
      return `<h2 id="${id}" class="scroll-mt-28">${innerTitle}</h2>`;
    });

    const sanitized = sanitizeHtml(parsedHtml, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "img",
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
        "pre",
        "code",
        "blockquote",
        "span",
        "div",
        "del",
        "hr",
      ]),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        h2: ["id", "class"],
        h3: ["id", "class"],
        code: ["class"],
        span: ["class"],
        div: ["class"],
        a: ["href", "name", "target", "rel", "class"],
        img: ["src", "alt", "title", "width", "height", "class", "loading"],
        table: ["class"],
        th: ["class"],
        td: ["class"],
      },
    });

    // Calculate word / reading metrics
    const textOnly = rawMarkdown.replace(/<[^>]*>/g, "").replace(/[#*`_\[\]()]/g, "");
    let count = 0;
    if (isZh) {
      count = textOnly.replace(/\s+/g, "").length;
    } else {
      count = textOnly.trim().split(/\s+/).filter(Boolean).length;
    }
    const speed = isZh ? 300 : 200;
    const time = Math.max(1, Math.ceil(count / speed));

    return {
      safeHtml: sanitized,
      toc: extractedToc,
      readTime: time,
      wordCount: count,
    };
  }, [rawMarkdown, isZh]);

  // Formatted date per locale
  const formattedDate = useMemo(() => {
    if (!post.published_at) return isKm ? "ថ្មីៗ" : isZh ? "近期" : "Recent";
    try {
      const d = new Date(post.published_at);
      if (isKm) {
        return d.toLocaleDateString("km-KH", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
      if (isZh) {
        return d.toLocaleDateString("zh-CN", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
      }
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return post.published_at;
    }
  }, [post.published_at, isKm, isZh]);

  const getRelTitle = (rel: BlogPost) => {
    if (isKm && rel.title_km) return rel.title_km;
    if (isZh && rel.title_zh) return rel.title_zh;
    return rel.title;
  };

  const getRelExcerpt = (rel: BlogPost) => {
    if (isKm && rel.excerpt_km) return rel.excerpt_km;
    if (isZh && rel.excerpt_zh) return rel.excerpt_zh;
    return rel.excerpt;
  };

  const getRelCategory = (rel: BlogPost) => {
    if (isKm && rel.category_km) return rel.category_km;
    if (isZh && rel.category_zh) return rel.category_zh;
    return rel.category;
  };

  const breadcrumbs: BreadcrumbItem[] = useMemo(
    () => [
      {
        label: isKm ? "ទំព័រដើម" : isZh ? "首页" : "Home",
        href: "/",
      },
      {
        label: isKm ? "ប្លុក & មគ្គុទ្ទេសក៍" : isZh ? "知识库与博客" : "Blog & Guides",
        href: "/blog",
      },
      {
        label: postCategory,
        href: `/blog?category=${encodeURIComponent(post.category)}`,
      },
      {
        label: postTitle,
      },
    ],
    [isKm, isZh, postCategory, post.category, postTitle]
  );

  return (
    <>
      {/* 1. Page Hero with Interactive SEO Breadcrumbs, Heading, Badge, Excerpt & Author Meta matching /pricing style */}
      <PageHero
        badge={postCategory}
        title={postTitle}
        sub={postExcerpt}
        breadcrumbs={breadcrumbs}
        titleClassName="max-w-4xl"
        subClassName="max-w-3xl blog-excerpt"
      >
        {/* Author & Publication Metadata Banner inside Hero */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-blue-400/20 pt-6">
          {/* Author Details */}
          <div className="flex items-center gap-3.5">
            {post.author_avatar ? (
              <img
                src={post.author_avatar}
                alt={`${post.author_name} — Author at AttendKH`}
                className="h-11 w-11 rounded-full object-cover object-top ring-2 ring-white/30 shadow-xs"
              />
            ) : (
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white font-bold text-base ring-2 ring-white/30 backdrop-blur-xs">
                {post.author_name.charAt(0)}
              </div>
            )}
            <div>
              <p className="font-display text-[15px] font-bold text-white leading-snug">
                {post.author_name}
              </p>
              <p className="text-xs text-blue-200/90 font-medium">
                {postAuthorRole}
              </p>
            </div>
          </div>

          {/* Metadata Chips: Date, Read Time, Word Count */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-blue-100 font-medium">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 border border-white/15 backdrop-blur-xs">
              <Calendar size={13} className="text-cyan-200" />
              <span>{formattedDate}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 border border-white/15 backdrop-blur-xs">
              <Clock size={13} className="text-cyan-200" />
              <span>
                {readTime} {isKm ? "នាទីអាន" : isZh ? "分钟阅读" : "min read"}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 border border-white/15 backdrop-blur-xs">
              <FileText size={13} className="text-cyan-200" />
              <span>
                {wordCount.toLocaleString()} {isKm ? "ពាក្យ" : isZh ? "字" : "words"}
              </span>
            </div>
          </div>
        </div>
      </PageHero>

      {/* 2. Main Article Section */}
      <Section tone="white" className="pt-8 sm:pt-12">
        <div className="mx-auto max-w-7xl">
          {/* Main 12-Column Grid Layout: 8 cols Article + 4 cols Sticky Sidebar */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left 8 Columns: Article Content */}
            <div className="lg:col-span-8 min-w-0">
              {/* AEO Direct Answer & Key Takeaways Card */}
              {postKeyTakeaways && postKeyTakeaways.length > 0 && (
                <div className="aeo-key-takeaways mb-8 rounded-2xl border border-teal-500/20 bg-teal-50/50 p-5 sm:p-6 shadow-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-white shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-slate-900">
                      {isKm
                        ? "ចំណុចគន្លឹះសំខាន់ៗ & សេចក្តីសង្ខេបប្រតិបត្តិ"
                        : isZh
                        ? "核心实操要点速览 (Key Takeaways)"
                        : "Key Takeaways & Executive Summary"}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {postKeyTakeaways.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-600 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Share Buttons bar */}
              <div className="mb-6">
                <ShareButtons title={postTitle} slug={post.slug} />
              </div>

              {/* Featured Cover Image Display */}
              {post.cover_image && (
                <div className="mb-8 overflow-hidden rounded-3xl border border-slate-200/90 shadow-md bg-slate-100 aspect-video md:aspect-[21/9] relative">
                  <img
                    src={post.cover_image}
                    alt={`${postTitle} — AttendKH (Attend) Article`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Rendered HTML */}
              <article
                className="blog-article prose prose-slate min-w-0 max-w-none text-[16px] leading-relaxed text-body prose-headings:font-display prose-headings:font-bold prose-headings:text-ink prose-h2:mt-10 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl prose-a:text-brand prose-a:font-semibold prose-a:underline prose-code:font-mono prose-code:text-brand prose-pre:max-w-full prose-pre:whitespace-pre-wrap prose-pre:break-words prose-pre:overflow-hidden prose-pre:rounded-xl prose-pre:border prose-pre:border-line prose-pre:bg-mist prose-pre:p-4 prose-blockquote:border-l-brand prose-blockquote:bg-brand-soft/40 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-xl prose-img:rounded-2xl prose-img:border prose-img:border-line [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto [&_table]:no-scrollbar [&_table]:[scrollbar-width:none] [&_table::-webkit-scrollbar]:hidden"
                dangerouslySetInnerHTML={{ __html: safeHtml }}
              />

              {/* Interactive FAQ & Statutory Citations Section (AEO) */}
              {post.faqs && post.faqs.length > 0 && (
                <section className="mt-12 rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-8 shadow-xs" aria-label="Frequently Asked Questions">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white shadow-xs shrink-0">
                      <HelpCircle size={20} />
                    </div>
                    <div>
                      <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                        {isKm
                          ? "សំណួរដែលសួរញឹកញាប់ & ការអនុលោមតាមច្បាប់"
                          : isZh
                          ? "常见热点问题与官方合规解答 (FAQ)"
                          : "Frequently Asked Questions & Legal Citations"}
                      </h2>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {isKm
                          ? "ចម្លើយផ្លូវការផ្អែកលើច្បាប់ការងារ និងបទប្បញ្ញត្តិកម្ពុជា"
                          : isZh
                          ? "基于柬埔寨现行劳工法与税务通令的权威释疑"
                          : "Authoritative answers backed by Cambodian labor and tax regulations"}
                      </p>
                    </div>
                  </div>

                  <div className="divide-y divide-slate-200/80">
                    {post.faqs.map((faq, idx) => (
                      <FaqAccordionItem key={idx} faq={faq} isKm={isKm} isZh={isZh} />
                    ))}
                  </div>
                </section>
              )}

              {/* Tags Footer */}
              {postTags && postTags.length > 0 && (
                <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-line pt-6">
                  <span className="text-xs font-semibold text-slate-500">
                    {isKm ? "ស្លាកពាក្យគន្លឹះ៖" : isZh ? "文章标签：" : "Tags:"}
                  </span>
                  {postTags.map((tag) => (
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
                    {isKm
                      ? "យល់ថាអត្ថបទនេះមានប្រយោជន៍មែនទេ?"
                      : isZh
                      ? "觉得本篇指南对您有帮助？"
                      : "Found this article helpful?"}
                  </p>
                  <p className="text-xs text-slate-500">
                    {isKm
                      ? "ចែករំលែកវាជាមួយក្រុមការងារ HR ឬអ្នកគ្រប់គ្រងរបស់អ្នក"
                      : isZh
                      ? "欢迎分享给您的 HR 同仁或管理团队"
                      : "Share it with your HR or management team"}
                  </p>
                </div>
                <ShareButtons title={postTitle} slug={post.slug} compact />
              </div>
            </div>

            {/* Right 4 Columns: Enhanced Blog Sidebar */}
            <div className="lg:col-span-4 w-full">
              <BlogSidebar
                post={post}
                relatedPosts={relatedPosts}
                readTime={readTime}
                wordCount={wordCount}
                initialToc={toc}
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
                <h2 className="font-display text-2xl font-bold text-slate-900">
                  {isKm ? "អត្ថបទដែលទាក់ទង" : isZh ? "相关精选推荐" : "Related Articles"}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  {isKm
                    ? "បន្តអានមគ្គុទ្ទេសក៍ប្រតិបត្តិការរបស់ AttendKH"
                    : isZh
                    ? "继续阅读 AttendKH 深度实务指南"
                    : "Continue reading AttendKH operational guides"}
                </p>
              </div>
              <Link href="/blog" className="text-xs font-semibold text-brand hover:underline">
                {isKm ? "មើលអត្ថបទទាំងអស់ →" : isZh ? "查看全部指南 →" : "View all articles →"}
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
                          alt={`${getRelTitle(rel)} — AttendKH (Attend)`}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-slate-50 to-blue-50/40 flex items-center justify-center">
                          <FileText size={28} className="text-slate-300" />
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-brand shadow-xs backdrop-blur-xs border border-white/60">
                          {getRelCategory(rel)}
                        </span>
                      </div>
                    </Link>

                    <div className="p-5 sm:p-6 pb-2">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                        <Calendar size={12} className="text-slate-400" />
                        <span>
                          {rel.published_at
                            ? new Date(rel.published_at).toLocaleDateString(
                                isKm ? "km-KH" : isZh ? "zh-CN" : "en-US",
                                { month: "short", day: "numeric", year: "numeric" }
                              )
                            : "Recent"}
                        </span>
                      </div>

                      <h3 className="font-display text-[16.5px] font-bold text-slate-900 group-hover:text-brand transition-colors leading-snug">
                        <Link href={`/blog/${rel.slug}`}>{getRelTitle(rel)}</Link>
                      </h3>

                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600">
                        {getRelExcerpt(rel)}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 pt-3 mt-2 flex items-center justify-between border-t border-slate-100 text-xs">
                    <div className="flex items-center gap-2 font-medium text-slate-600">
                      {rel.author_avatar ? (
                        <img
                          src={rel.author_avatar}
                          alt={`${rel.author_name} — Author at AttendKH`}
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
                      <span>{isKm ? "អានអត្ថបទ" : isZh ? "阅读指南" : "Read guide"}</span>
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
        title={
          isKm
            ? "ត្រៀមខ្លួនស្វ័យប្រវត្តិកម្មវត្តមាន និងការបើកប្រាក់ខែហើយឬនៅ?"
            : isZh
            ? "准备好开启智能考勤与自动算薪了吗？"
            : "Ready to automate attendance & payroll?"
        }
        sub={
          isKm
            ? "ចាប់ផ្តើមប្រើ AttendKH សម្រាប់ក្រុមការងាររបស់អ្នកត្រឹមតែ $1 ក្នុងមួយខែសម្រាប់បុគ្គលិកម្នាក់។"
            : isZh
            ? "每位员工仅需 1 美元/月，立即接入 AttendKH 全功能平台。"
            : "Get started with AttendKH for your entire team at just $1 per employee."
        }
        cta={isKm ? "ណាត់ជួបបង្ហាញប្រព័ន្ធ" : isZh ? "预约系统演示" : "Book a Demo"}
        href="/contact"
      />
    </>
  );
}

function FaqAccordionItem({
  faq,
  isKm,
  isZh,
}: {
  faq: {
    question: string;
    question_km?: string;
    question_zh?: string;
    answer: string;
    answer_km?: string;
    answer_zh?: string;
  };
  isKm: boolean;
  isZh: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const q = (isKm && faq.question_km) || (isZh && faq.question_zh) || faq.question;
  const a = (isKm && faq.answer_km) || (isZh && faq.answer_zh) || faq.answer;

  return (
    <div className="py-4.5 first:pt-0 last:pb-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between gap-4 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-display text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand transition-colors">
          {q}
        </span>
        <span
          className={`shrink-0 rounded-full p-1.5 transition-all duration-200 ${
            isOpen ? "rotate-180 text-brand bg-brand-soft" : "text-slate-400 bg-slate-100 group-hover:bg-slate-200"
          }`}
        >
          <ChevronDown size={16} />
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 bg-white rounded-2xl p-4.5 border border-slate-200/80 shadow-2xs">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
}
