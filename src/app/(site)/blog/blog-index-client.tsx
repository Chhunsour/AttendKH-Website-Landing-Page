"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  FileText,
  Building2,
  Users,
  ShieldCheck,
  Home,
  ChevronRight,
  Layers,
  MapPin,
  Coins,
  Briefcase,
  X,
  Calculator,
} from "lucide-react";
import type { BlogPost } from "@/lib/site-content";
import { Section, CtaBand } from "@/components/site/ui";
import { useSite } from "@/lib/i18n";

interface BlogIndexClientProps {
  initialPosts: BlogPost[];
}

export function BlogIndexClient({ initialPosts }: BlogIndexClientProps) {
  const { lang } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      key: "All",
      label: isKm ? "ទាំងអស់" : isZh ? "全部指南" : "All Guides",
      icon: Layers,
    },
    {
      key: "Attendance",
      label: isKm ? "វត្តមាន" : isZh ? "考勤管理" : "Attendance",
      icon: MapPin,
    },
    {
      key: "Payroll",
      label: isKm ? "ប្រាក់ខែ" : isZh ? "薪酬核算" : "Payroll",
      icon: Coins,
    },
    {
      key: "Operations",
      label: isKm ? "ប្រតិបត្តិការ" : isZh ? "运营管理" : "Operations",
      icon: Building2,
    },
    {
      key: "Scheduling",
      label: isKm ? "កាលវិភាគ" : isZh ? "排班调度" : "Scheduling",
      icon: Calendar,
    },
    {
      key: "HR Technology",
      label: isKm ? "បច្ចេកវិទ្យា HR" : isZh ? "HR 科技系统" : "HR Technology",
      icon: Sparkles,
    },
    {
      key: "Labor Law",
      label: isKm ? "ច្បាប់ការងារ" : isZh ? "劳工法规" : "Labor Law",
      icon: ShieldCheck,
    },
  ];

  // Helper to get localized post fields
  const getPostTitle = (post: BlogPost) => {
    if (isKm && post.title_km) return post.title_km;
    if (isZh && post.title_zh) return post.title_zh;
    return post.title;
  };

  const getPostExcerpt = (post: BlogPost) => {
    if (isKm && post.excerpt_km) return post.excerpt_km;
    if (isZh && post.excerpt_zh) return post.excerpt_zh;
    return post.excerpt;
  };

  const getPostCategory = (post: BlogPost) => {
    if (isKm && post.category_km) return post.category_km;
    if (isZh && post.category_zh) return post.category_zh;
    return post.category;
  };

  const getPostAuthorRole = (post: BlogPost) => {
    if (isKm && post.author_role_km) return post.author_role_km;
    if (isZh && post.author_role_zh) return post.author_role_zh;
    return post.author_role;
  };

  // Count articles per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: initialPosts.length };
    initialPosts.forEach((p) => {
      const cat = p.category;
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [initialPosts]);

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const title = getPostTitle(post);
      const excerpt = getPostExcerpt(post);
      const category = post.category;

      const matchesCategory =
        selectedCategory === "All" ||
        category.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        title.toLowerCase().includes(q) ||
        excerpt.toLowerCase().includes(q) ||
        post.title.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        (post.tags_km && post.tags_km.some((tag) => tag.toLowerCase().includes(q))) ||
        (post.tags_zh && post.tags_zh.some((tag) => tag.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery, isKm, isZh]);

  // Designate the first post as featured if showing All and no search
  const featuredPost =
    selectedCategory === "All" && !searchQuery.trim() && filteredPosts.length > 0
      ? filteredPosts[0]
      : null;

  const standardPosts = featuredPost
    ? filteredPosts.slice(1)
    : filteredPosts;

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return isKm ? "ថ្មីៗ" : isZh ? "近期" : "Recent";
    try {
      const d = new Date(dateStr);
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
      return dateStr;
    }
  };

  const selectedCategoryObj = categories.find((c) => c.key === selectedCategory) || categories[0];

  return (
    <>
      {/* Hero Section with Breadcrumb Nav */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#011C6B] via-[#0042CF] to-[#0052FF] text-white border-b border-blue-400/20 shadow-xs">
        {/* Ambient Subtle Orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-[450px] w-[450px] rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-28 -left-28 h-[450px] w-[450px] rounded-full bg-indigo-600/30 blur-3xl" />

          {/* Dot Grid Pattern */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full opacity-[0.06]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="blog-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-grid)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pt-28 pb-14 sm:px-8 sm:pt-32 sm:pb-16">
          {/* Breadcrumb Navigation Trail */}
          <nav aria-label="Breadcrumb" className="mb-5 inline-flex items-center">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-blue-100/90">
              <li className="flex items-center gap-1.5">
                <Link
                  href="/"
                  className="flex items-center gap-1 text-blue-200/90 hover:text-white transition-colors"
                >
                  <Home size={13} className="shrink-0" />
                  <span>{isKm ? "ទំព័រដើម" : isZh ? "首页" : "Home"}</span>
                </Link>
              </li>

              <li className="text-white/40 font-normal">/</li>

              <li className="flex items-center gap-1.5">
                {selectedCategory === "All" ? (
                  <span className="font-semibold text-white">
                    {isKm ? "ប្លុក & មគ្គុទ្ទេសក៍" : isZh ? "知识库与博客" : "Blog & Guides"}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("All")}
                    className="text-blue-200/90 hover:text-white hover:underline transition-colors cursor-pointer"
                  >
                    <span>{isKm ? "ប្លុក & មគ្គុទ្ទេសក៍" : isZh ? "知识库与博客" : "Blog & Guides"}</span>
                  </button>
                )}
              </li>

              {selectedCategory !== "All" && (
                <>
                  <li className="text-white/40 font-normal">/</li>
                  <li className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 font-semibold text-cyan-200 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                      <selectedCategoryObj.icon size={11} className="shrink-0" />
                      <span>{selectedCategoryObj.label}</span>
                    </span>
                  </li>
                </>
              )}
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 border border-white/20 px-3.5 py-1 text-xs font-bold text-cyan-200 uppercase tracking-wider backdrop-blur-md mb-4 shadow-2xs">
              <Sparkles size={13} />
              {isKm
                ? "មជ្ឈមណ្ឌលចំណេះដឹងធនធានមនុស្ស និងប្រតិបត្តិការ"
                : isZh
                ? "AttendKH 运营与人力资源知识库"
                : "AttendKH Operations & HR Knowledge Hub"}
            </span>

            <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              {isKm
                ? "មគ្គុទ្ទេសក៍ជាក់ស្តែងសម្រាប់ប្រតិបត្តិការ និងការបើកប្រាក់ខែនៅកម្ពុជា"
                : isZh
                ? "柬埔寨企业本地化运营与薪酬管理实务指南"
                : "Practical Guides for Cambodian Operations & Payroll"}
            </h1>

            <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-blue-100/90 max-w-2xl">
              {isKm
                ? "អត្ថបទស៊ីជម្រៅ មគ្គុទ្ទេសក៍គណនាតាមច្បាប់ការងារ និងការអនុវត្តជាក់ស្តែងល្អបំផុត សម្រាប់អាជីវកម្មពហុសាខានៅកម្ពុជា។"
                : isZh
                ? "深度解析柬埔寨劳工法规、精准薪酬计算公式与多门店运营实战经验，专为在柬发展的多分支企业量身打造。"
                : "In-depth articles, statutory calculation guides, and operational best practices designed specifically for multi-branch businesses in Cambodia."}
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl">
            <div className="relative flex items-center">
              <Search className="absolute left-4 h-4 w-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isKm
                    ? "ស្វែងរកតាមប្រធានបទ ពាក្យគន្លឹះ ឬច្បាប់ការងារ..."
                    : isZh
                    ? "搜索主题、关键词或劳工法规..."
                    : "Search by topic, keyword, or law..."
                }
                className="w-full rounded-2xl border border-white/20 bg-white/95 py-3.5 pl-11 pr-10 text-xs sm:text-sm text-slate-900 placeholder-slate-400 shadow-lg focus:bg-white focus:border-cyan-300 focus:outline-hidden focus:ring-2 focus:ring-cyan-400/30 transition-all backdrop-blur-md"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 rounded-full bg-slate-200/80 p-1 text-xs text-slate-600 hover:bg-slate-300 transition-colors cursor-pointer"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb-Style Segmented Category Navigation Bar */}
      <div className="sticky top-16 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-2xs">
        <div className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Breadcrumb Categories Track */}
            <nav
              aria-label="Categories Breadcrumb Bar"
              className="flex items-center overflow-x-auto py-1 no-scrollbar"
            >
              <div className="inline-flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100/90 border border-slate-200/80 shadow-inner">
                {categories.map((cat, idx) => {
                  const isSelected = selectedCategory === cat.key;
                  const count = categoryCounts[cat.key] || 0;
                  const Icon = cat.icon;

                  return (
                    <div key={cat.key} className="flex items-center">
                      <button
                        type="button"
                        onClick={() => setSelectedCategory(cat.key)}
                        className={`group inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-white text-brand shadow-xs ring-1 ring-slate-200 font-bold"
                            : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                        }`}
                      >
                        <Icon
                          size={13}
                          className={`shrink-0 transition-colors ${
                            isSelected
                              ? "text-brand"
                              : "text-slate-400 group-hover:text-slate-600"
                          }`}
                        />
                        <span>{cat.label}</span>
                        <span
                          className={`rounded-full px-1.5 py-0.2 font-mono text-[10.5px] transition-colors ${
                            isSelected
                              ? "bg-brand/10 text-brand font-bold"
                              : "bg-slate-200 text-slate-500 group-hover:bg-slate-300"
                          }`}
                        >
                          {count}
                        </span>
                      </button>

                      {/* Breadcrumb Separator between items */}
                      {idx < categories.length - 1 && (
                        <ChevronRight
                          size={12}
                          className="mx-0.5 text-slate-300 shrink-0 select-none hidden sm:inline-block"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </nav>

            {/* Active Filter Pill & Count Indicator */}
            <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
              {selectedCategory !== "All" && (
                <button
                  type="button"
                  onClick={() => setSelectedCategory("All")}
                  className="inline-flex items-center gap-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer border border-slate-200"
                >
                  <span>{selectedCategoryObj.label}</span>
                  <X size={11} className="text-slate-400 hover:text-slate-700" />
                </button>
              )}
              <span className="text-slate-400 font-mono">
                {filteredPosts.length} {isKm ? "អត្ថបទ" : isZh ? "篇指南" : "articles"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <Section tone="white">
        {/* Featured Article Card */}
        {featuredPost && (
          <div className="mb-12">
            <article className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all hover:border-brand/40 hover:shadow-xl lg:grid lg:grid-cols-12 lg:gap-8 items-center">
              {/* Image Side */}
              <div className="lg:col-span-6 relative aspect-video lg:aspect-auto lg:h-full overflow-hidden bg-slate-100">
                {featuredPost.cover_image ? (
                  <img
                    src={featuredPost.cover_image}
                    alt={`${getPostTitle(featuredPost)} — AttendKH (Attend)`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-blue-50 to-indigo-50/50 flex items-center justify-center min-h-[260px]">
                    <FileText size={48} className="text-brand/30" />
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand shadow-xs backdrop-blur-xs border border-white/60">
                    {getPostCategory(featuredPost)}
                  </span>
                </div>
              </div>

              {/* Text Content Side */}
              <div className="p-6 sm:p-8 lg:col-span-6 lg:py-10">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span className="inline-flex items-center gap-1 font-semibold text-brand">
                    <Sparkles size={13} />
                    {isKm ? "មគ្គុទ្ទេសក៍ពិសេស" : isZh ? "本期精选" : "Featured Practical Guide"}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 text-slate-400">
                    <Calendar size={12} />
                    {formatDate(featuredPost.published_at)}
                  </span>
                </div>

                <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-brand transition-colors leading-snug">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {getPostTitle(featuredPost)}
                  </Link>
                </h2>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-3">
                  {getPostExcerpt(featuredPost)}
                </p>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
                  <Link
                    href="/profile/chhunsour-seng"
                    className="group/author flex items-center gap-2.5 hover:opacity-90 transition-opacity"
                    title="View author profile"
                  >
                    {featuredPost.author_avatar ? (
                      <img
                        src={featuredPost.author_avatar}
                        alt={`${featuredPost.author_name} — Author at AttendKH`}
                        className="h-7 w-7 rounded-full object-cover object-top border border-slate-200 group-hover/author:ring-2 group-hover/author:ring-brand/40 transition-all"
                      />
                    ) : (
                      <div className="h-7 w-7 rounded-full bg-brand-soft text-brand flex items-center justify-center font-bold text-xs">
                        {featuredPost.author_name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-bold text-slate-900 group-hover/author:text-brand transition-colors">
                        {featuredPost.author_name}
                      </p>
                      <p className="text-[10.5px] text-slate-400">{getPostAuthorRole(featuredPost)}</p>
                    </div>
                  </Link>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-brand-dark transition-colors"
                  >
                    <span>{isKm ? "អានមគ្គុទ្ទេសក៍ពេញលេញ" : isZh ? "阅读完整指南" : "Read Full Guide"}</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Standard Articles Grid */}
        {standardPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {standardPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xs transition-all hover:border-brand/40 hover:shadow-lg"
              >
                <div>
                  {/* Card Cover Image */}
                  <Link href={`/blog/${post.slug}`} className="block overflow-hidden aspect-video bg-slate-100 relative border-b border-slate-100">
                    {post.cover_image ? (
                      <img
                        src={post.cover_image}
                        alt={`${getPostTitle(post)} — AttendKH (Attend)`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-slate-50 to-blue-50/40 flex items-center justify-center">
                        <FileText size={28} className="text-slate-300" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-brand shadow-xs backdrop-blur-xs border border-white/60">
                        {getPostCategory(post)}
                      </span>
                    </div>
                  </Link>

                  <div className="p-5 sm:p-6 pb-2">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                      <Calendar size={12} className="text-slate-400" />
                      <span>{formatDate(post.published_at)}</span>
                    </div>

                    <h3 className="font-display text-[16.5px] font-bold text-slate-900 group-hover:text-brand transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{getPostTitle(post)}</Link>
                    </h3>

                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600">
                      {getPostExcerpt(post)}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-3 mt-2 flex items-center justify-between border-t border-slate-100 text-xs">
                  <Link
                    href="/profile/chhunsour-seng"
                    className="flex items-center gap-2 font-medium text-slate-600 hover:text-brand transition-colors"
                    title="View author profile"
                  >
                    {post.author_avatar ? (
                      <img
                        src={post.author_avatar}
                        alt={`${post.author_name} — Author at AttendKH`}
                        className="h-6 w-6 rounded-full object-cover object-top border border-slate-200 hover:ring-2 hover:ring-brand/40 transition-all"
                      />
                    ) : (
                      <div className="h-6 w-6 rounded-full bg-brand-soft text-brand flex items-center justify-center font-bold text-[9px]">
                        {post.author_name.charAt(0)}
                      </div>
                    )}
                    <span className="truncate max-w-[120px] font-semibold text-slate-800 hover:text-brand transition-colors">
                      {post.author_name}
                    </span>
                  </Link>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-brand hover:underline"
                  >
                    <span>{isKm ? "អានអត្ថបទ" : isZh ? "阅读指南" : "Read guide"}</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : !featuredPost ? (
          <div className="rounded-2xl border border-line bg-paper py-16 text-center">
            <FileText size={36} className="mx-auto text-slate-300 mb-2" />
            <h3 className="font-display font-bold text-ink">
              {isKm ? "រកមិនឃើញអត្ថបទដែលត្រូវគ្នាទេ" : isZh ? "未找到匹配的指南文章" : "No matching articles found"}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {isKm
                ? "សូមសាកល្បងផ្លាស់ប្តូរប្រភេទ ឬពាក្យគន្លឹះស្វែងរក។"
                : isZh
                ? "请尝试调整分类筛选或更换搜索关键词。"
                : "Try adjusting your category or search query."}
            </p>
          </div>
        ) : null}

        {/* ========================================================================= */}
        {/* CLEAN, ELEGANT HR & OPERATIONS TOOLKITS SECTION (NO AI SLOP) */}
        {/* ========================================================================= */}
        <div className="mt-20 border-t border-slate-200/80 pt-14 sm:pt-16">
          {/* Clean Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand">
                {isKm ? "ធនធាន & ឧបករណ៍ជំនួយ" : isZh ? "实用工具与资源" : "Resources & Toolkits"}
              </p>
              <h3 className="font-display mt-1.5 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                {isKm
                  ? "ឧបករណ៍ជំនួយការងារ HR និងប្រតិបត្តិការ"
                  : isZh
                  ? "柬埔寨人力资源与运营实战工具箱"
                  : "HR & Operational Toolkits for Cambodia"}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed">
              {isKm
                ? "ម៉ាស៊ីនគណនាប្រាក់ខែ មគ្គុទ្ទេសក៍ទប់ស្កាត់ការចុះវត្តមានជំនួស និងក្របខ័ណ្ឌរៀបចំវេនការងារសម្រាប់អាជីវកម្មនៅកម្ពុជា។"
                : isZh
                ? "专为在柬企业打造的实用薪资计算器、防代打卡落地方案与多门店排班管理架构。"
                : "Interactive calculators, attendance frameworks, and multi-branch roster blueprints built for local operations."}
            </p>
          </div>

          {/* 3 Clean, Polished Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Payroll Calculator */}
            <Link
              href="/payroll"
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand border border-blue-100 transition-colors group-hover:bg-brand group-hover:text-white">
                    <Calculator size={20} />
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                    {isKm ? "ឧបករណ៍គណនា" : isZh ? "交互工具" : "Calculator"}
                  </span>
                </div>

                <h4 className="font-display text-lg font-bold text-slate-900 group-hover:text-brand transition-colors">
                  {isKm
                    ? "កម្មវិធីគណនាប្រាក់បៀវត្សរ៍កម្ពុជា"
                    : isZh
                    ? "柬埔寨薪资与加班费计算器"
                    : "Cambodia Payroll Simulator"}
                </h4>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {isKm
                    ? "គណនាប្រាក់ឈ្នួលម៉ោងគោល ការកាត់ប្រាក់យឺត ប្រាក់ថែមម៉ោង ១.៥x និង ២.០x ព្រមទាំងការបង់វិភាគទាន ប.ស.ស. ជាដុល្លារ ($) និងប្រាក់រៀល (៛)។"
                    : isZh
                    ? "在线模拟基础时薪、迟到按分钟扣除、平日1.5倍及法定假日2.0倍加班费，支持美元与瑞尔双币及 NSSF 自动扣缴。"
                    : "Estimate base hourly rates, late penalties, 1.5× OT, and 2.0× holiday pay in USD and KHR with official NSSF statutory formulas."}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand">
                <span>{isKm ? "បើកកម្មវិធីគណនា" : isZh ? "打开计算器" : "Open Calculator"}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 2: Attendance & Anti-Buddy Punching */}
            <Link
              href="/attendance"
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                    <MapPin size={20} />
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                    {isKm ? "មគ្គុទ្ទេសក៍" : isZh ? "落地方案" : "Field Guide"}
                  </span>
                </div>

                <h4 className="font-display text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {isKm
                    ? "មគ្គុទ្ទេសក៍ទប់ស្កាត់ការចុះវត្តមានជំនួសគ្នា"
                    : isZh
                    ? "企业防代打卡与定位核验方案"
                    : "Anti-Buddy Punching Guide"}
                </h4>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {isKm
                    ? "ស្វែងយល់ពីរបៀបកំណត់កាំរង្វង់ GPS ៥០ម–៣០០ម ជុំវិញហាង ការស្កេនមុខ Selfie ផ្ទាល់ និងប្រព័ន្ធទប់ស្កាត់ Mock GPS លើទូរស័ព្ទដៃ។"
                    : isZh
                    ? "掌握 50m–300m 门市电子围栏校准技巧、自拍活体核验流程以及 Android / iOS 底层反虚拟定位防作弊规范。"
                    : "Best practices for setting 50m–300m branch geofences, requiring live selfie checks, and blocking fake GPS spoofing tools on frontline devices."}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-600">
                <span>{isKm ? "មើលមគ្គុទ្ទេសក៍" : isZh ? "查看实操指南" : "View Field Guide"}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 3: Multi-Branch Framework */}
            <Link
              href="/multi-branch"
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-100 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                    <Building2 size={20} />
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                    {isKm ? "ក្របខ័ណ្ឌ" : isZh ? "架构指南" : "Framework"}
                  </span>
                </div>

                <h4 className="font-display text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                  {isKm
                    ? "ក្របខ័ណ្ឌគ្រប់គ្រងវេនការងារពហុសាខា"
                    : isZh
                    ? "多门店排班与4级权限管理架构"
                    : "Multi-Branch Roster Framework"}
                </h4>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {isKm
                    ? "រៀបចំការបែងចែកសិទ្ធិ ៤ កម្រិត (Owner, HR Admin, Branch Manager, Staff) ការគ្រប់គ្រងវេនបំបែក និងការដោះដូរបុគ្គលិកឆ្លងសាខា។"
                    : isZh
                    ? "构建企业主、HR 管理员、分店店长与基层员工4级权限体系，实现餐饮零售分段倒班与跨门店无缝调度。"
                    : "Architect 4-tier access levels (Owner, HR Admin, Branch Manager, Staff), schedule split shifts, and manage cross-branch staff coverage."}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-purple-600">
                <span>{isKm ? "ស្វែងយល់បន្ថែម" : isZh ? "了解架构" : "Explore Framework"}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </Section>

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
