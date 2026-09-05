"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Send,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Code2,
  FileText,
  ListTree,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Briefcase,
  Layers,
  ChevronRight,
  Search,
} from "lucide-react";
import type { BlogPost } from "@/lib/site-content";
import { useSite } from "@/lib/i18n";
import { Section, Reveal } from "@/components/site/ui";
import { chhunsourProfile, type ProfileData } from "@/lib/profile-data";

interface ProfileViewProps {
  profile?: ProfileData;
  articles: BlogPost[];
}

export function ProfileView({
  profile = chhunsourProfile,
  articles = [],
}: ProfileViewProps) {
  const { lang } = useSite();
  const router = useRouter();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  // Category filter for articles
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Categories present in author's articles
  const categories = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => {
      if (a.category) set.add(a.category);
    });
    return ["All", ...Array.from(set)];
  }, [articles]);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return articles.filter((post) => {
      const matchCat =
        selectedCategory === "All" ||
        post.category?.toLowerCase() === selectedCategory.toLowerCase();
      const matchQuery =
        !searchQuery.trim() ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.title_km && post.title_km.includes(searchQuery)) ||
        (post.title_zh && post.title_zh.includes(searchQuery));
      return matchCat && matchQuery;
    });
  }, [articles, selectedCategory, searchQuery]);

  // Helper for localized post titles
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

  const formatPostDate = (dateStr: string | null) => {
    if (!dateStr) return isKm ? "ថ្មីៗ" : isZh ? "近期" : "Recent";
    try {
      const d = new Date(dateStr);
      if (isKm) {
        return d.toLocaleDateString("km-KH", {
          year: "numeric",
          month: "short",
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

  const calculateReadTime = (content?: string, excerpt?: string) => {
    const text = (content || "") + " " + (excerpt || "");
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(3, Math.ceil(words / 180));
  };

  const iconMap: Record<string, React.ReactNode> = {
    FileText: <FileText size={20} className="text-brand" />,
    ListTree: <ListTree size={20} className="text-brand" />,
    ShieldCheck: <ShieldCheck size={20} className="text-brand" />,
    Code2: <Code2 size={20} className="text-brand" />,
  };

  return (
    <div className="min-h-screen bg-paper">
      {/* -------------------------------------------------------------
          1. RICH PROFILE HERO (STRONG BLUE BRAND BACKGROUND)
      ------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#011C6B] via-[#0042CF] to-[#0052FF] text-white border-b border-blue-400/20 shadow-xs">
        {/* Dynamic Ambient Background Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-[480px] w-[480px] rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-28 -left-28 h-[480px] w-[480px] rounded-full bg-indigo-600/35 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/10 blur-2xl" />

          {/* Geometric dot-grid overlay */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full opacity-[0.07]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="profilehero-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#profilehero-grid)" />
          </svg>

          {/* Signal Orbits */}
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
              strokeDasharray="4 4"
              strokeOpacity="0.3"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pt-8 pb-16 sm:px-8 sm:pt-12 sm:pb-20">
          {/* Breadcrumb & Back Navigation */}
          <Reveal>
            <nav
              aria-label="Breadcrumbs"
              className="mb-8 flex items-center justify-between gap-4 text-xs font-medium"
            >
              <ol className="flex flex-wrap items-center gap-1.5 text-blue-100/80">
                <li>
                  <Link
                    href="/"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {isKm ? "ទំព័រដើម" : isZh ? "首页" : "Home"}
                  </Link>
                </li>
                <li>
                  <ChevronRight size={13} className="text-blue-300/50" />
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {isKm ? "ប្លុក & អត្ថបទ" : isZh ? "博客指南" : "Blog & Guides"}
                  </Link>
                </li>
                <li>
                  <ChevronRight size={13} className="text-blue-300/50" />
                </li>
                <li className="font-bold text-white" aria-current="page">
                  {profile.name}
                </li>
              </ol>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== "undefined" && window.history.length > 1) {
                      router.back();
                    } else {
                      router.push("/blog");
                    }
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 px-3.5 py-1.5 text-xs font-semibold text-white border border-white/20 backdrop-blur-xs transition-colors cursor-pointer"
                  title="Return to previous page"
                >
                  <ArrowLeft size={13} />
                  <span>
                    {isKm ? "ត្រឡប់ក្រោយ" : isZh ? "返回上一页" : "Return"}
                  </span>
                </button>
                <Link
                  href="/blog"
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/5 hover:bg-white/15 px-3 py-1.5 text-xs font-medium text-blue-100 border border-white/10 backdrop-blur-xs transition-colors"
                >
                  <span>
                    {isKm ? "ប្លុកទាំងអស់" : isZh ? "全部博客" : "All Guides"}
                  </span>
                </Link>
              </div>
            </nav>
          </Reveal>

          {/* Profile Identity Card / Hero Layout */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left: Framed Portrait Photo */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
              <Reveal delay={0.04}>
                <div className="relative group">
                  {/* Glowing ambient ring */}
                  <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-500" />

                  {/* Main framed photo container */}
                  <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-[28px] overflow-hidden border-4 border-white/90 shadow-2xl bg-slate-900 ring-1 ring-black/10">
                    <Image
                      src={profile.avatar}
                      alt={`Chhunsour (Chhunsour Seng) — ${profile.role[lang]} at AttendKH`}
                      fill
                      sizes="(max-width: 640px) 256px, 288px"
                      priority
                      className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient vignette at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Native name badge if Khmer */}
                    {isKm && profile.nativeName && (
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <p className="font-display font-bold text-sm tracking-wide text-cyan-200">
                          {profile.nativeName}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Live Status Badge */}
                  <div className="absolute -bottom-3 -right-2 flex items-center gap-1.5 rounded-full bg-slate-950/90 text-white px-3.5 py-1.5 text-[11px] font-semibold shadow-lg border border-white/20 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>
                      {isKm ? "កំពុងកសាង & សរសេរ" : isZh ? "持续开发与写作" : "Building & Writing"}
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Location Pill */}
              <Reveal delay={0.08}>
                <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-medium text-blue-100 border border-white/15 backdrop-blur-xs">
                  <MapPin size={13} className="text-cyan-300" />
                  <span>{profile.location[lang]}</span>
                </div>
              </Reveal>
            </div>

            {/* Right: Titles, Intro, Telegram CTA, & Meta Chips */}
            <div className="lg:col-span-8 space-y-5">
              <Reveal delay={0.06}>
                {/* Primary Title & Experience Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-200 border border-white/20 backdrop-blur-xs">
                    <Sparkles size={13} className="text-cyan-300" />
                    <span>{profile.role[lang]} • Chhunsour</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-100 border border-cyan-300/30 backdrop-blur-xs">
                    <FileText size={12} className="text-cyan-300" />
                    <span>
                      {isKm ? "បទពិសោធន៍សរសេរប្លុក ១ ឆ្នាំ" : isZh ? "1年博客写作经验" : "1 Year Blog Writing Experience"}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h1 className="font-display mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {profile.name}
                  {profile.nativeName && (
                    <span className="block sm:inline sm:ml-3 text-2xl sm:text-3xl font-semibold text-cyan-200">
                      ({profile.nativeName})
                    </span>
                  )}
                </h1>

                {/* Supporting Role */}
                <p className="mt-2 text-base sm:text-lg font-medium text-cyan-100/90 leading-relaxed max-w-2xl">
                  {profile.supportingRole[lang]}
                </p>
              </Reveal>

              {/* Hero Narrative Intro */}
              <Reveal delay={0.1}>
                <p className="text-sm sm:text-[15.5px] leading-relaxed text-blue-100/95 font-normal max-w-2xl bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/10 backdrop-blur-xs">
                  {profile.heroBio[lang]}
                </p>
              </Reveal>

              {/* Subtle Capability Chips */}
              <Reveal delay={0.12}>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {profile.tags[lang].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-white/10 px-3 py-1 text-xs font-medium text-white border border-white/15 backdrop-blur-xs transition-colors hover:bg-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={0.14}>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={profile.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white hover:bg-blue-50 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#0052FF] shadow-lg transition-all active:scale-95 cursor-pointer"
                  >
                    <Send size={15} />
                    <span>
                      {isKm
                        ? `ឆាតជាមួយ Tech Lead (${profile.telegramHandle})`
                        : isZh
                        ? `联系技术负责人 (${profile.telegramHandle})`
                        : `Message Tech Lead (${profile.telegramHandle})`}
                    </span>
                  </a>

                  <a
                    href="#selected-writing"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white border border-white/20 transition-all cursor-pointer"
                  >
                    <BookOpen size={14} />
                    <span>
                      {isKm
                        ? `អានអត្ថបទដែលបានសរសេរ (${articles.length})`
                        : isZh
                        ? `浏览撰写文章 (${articles.length})`
                        : `View Selected Writing (${articles.length})`}
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. ABOUT ME: BRIDGING PRODUCT BUILDING & CONTENT
      ------------------------------------------------------------- */}
      <Section tone="white">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <span>{isKm ? "អំពី Chhunsour Seng (ឈុនសួរ)" : isZh ? "关于 Chhunsour Seng" : "About Chhunsour Seng"}</span>
            </div>
            <h2 className="font-display mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {isKm
                ? "Chhunsour Seng ៖ ការកសាងផលិតផល និងការពន្យល់តាមមាតិកា"
                : isZh
                ? "Chhunsour Seng：全栈工程实现与深度内容诠释"
                : "Chhunsour Seng: Product Engineering & Editorial Content"}
            </h2>
          </Reveal>

          {/* Story Narrative Paragraphs */}
          <div className="mt-6 space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-slate-700 max-w-4xl">
            {profile.aboutStory[lang].map((para, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <p>{para}</p>
              </Reveal>
            ))}
          </div>

          {/* Dual Superpower Cards: Building vs Explaining */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Card 1: Building */}
            <Reveal delay={0.06}>
              <div className="group h-full rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-7 shadow-xs hover:border-brand/40 hover:shadow-md transition-all">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-cyan-400 font-mono shadow-xs mb-4">
                  <Code2 size={22} />
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
                  <span>Dimension 01</span>
                </div>
                <h3 className="font-display mt-1 text-lg sm:text-xl font-bold text-slate-900">
                  {profile.dualSuperpower.buildingTitle[lang]}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {profile.dualSuperpower.buildingDesc[lang]}
                </p>
              </div>
            </Reveal>

            {/* Card 2: Explaining */}
            <Reveal delay={0.1}>
              <div className="group h-full rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-7 shadow-xs hover:border-brand/40 hover:shadow-md transition-all">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white font-mono shadow-xs mb-4">
                  <FileText size={22} />
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
                  <span>Dimension 02</span>
                </div>
                <h3 className="font-display mt-1 text-lg sm:text-xl font-bold text-slate-900">
                  {profile.dualSuperpower.explainingTitle[lang]}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {profile.dualSuperpower.explainingDesc[lang]}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------
          3. CONTENT & BLOGGING BACKGROUND
      ------------------------------------------------------------- */}
      <Section tone="mist">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <span>
                {isKm
                  ? "បទពិសោធន៍តែងនិពន្ធ & ប្លុក"
                  : isZh
                  ? "专业写作与内容底蕴"
                  : "Content & Blogging Background"}
              </span>
            </div>
            <h2 className="font-display mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {isKm
                ? "ការតែងនិពន្ធជាវិស្វកម្មនៃព័ត៌មាន និងការស្វែងយល់ពីតម្រូវការ"
                : isZh
                ? "将内容创作视作严密的信息工程"
                : "Content Creation as Information Architecture"}
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 max-w-3xl">
              {profile.contentBackground.intro[lang]}
            </p>
          </Reveal>

          {/* The 4 Editorial & Content Pillars */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {profile.contentBackground.pillars.map((pillar, idx) => (
              <Reveal key={pillar.title.en} delay={idx * 0.05}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-brand/40 hover:shadow-sm transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft mb-3.5">
                      {iconMap[pillar.icon] || <FileText size={20} className="text-brand" />}
                    </div>
                    <h3 className="font-display text-base font-bold text-slate-900">
                      {pillar.title[lang]}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {pillar.desc[lang]}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------
          4. EXPERIENCE TIMELINE (FOCUSED ON SKILLS & PROGRESSION)
      ------------------------------------------------------------- */}
      <Section tone="white">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <span>
                {isKm
                  ? "ដំណើរការងារ & ការវិវត្តជំនាញ"
                  : isZh
                  ? "职业履历与能力演进"
                  : "Experience Timeline"}
              </span>
            </div>
            <h2 className="font-display mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {isKm
                ? "ការរីកចម្រើនពីអ្នកសរសេរមាតិកា ទៅជាអ្នកបង្កើតផលិតផល"
                : isZh
                ? "从深度内容创作者到全栈产品构建者"
                : "From Content Craft to Product Engineering"}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              {isKm
                ? "ផ្តោតលើជំនាញ និងការវិវត្តជាក់ស្តែង"
                : isZh
                ? "侧重核心技能沉淀与业务落地成果"
                : "Focusing on skills, craft, and architectural progression"}
            </p>
          </Reveal>

          {/* Timeline Stream */}
          <div className="mt-10 relative border-l-2 border-slate-200 pl-6 sm:pl-8 space-y-12 ml-2 sm:ml-4">
            {profile.timeline.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="relative">
                  {/* Timeline Node Dot */}
                  <span
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white shadow-xs ${
                      item.isCurrent
                        ? "bg-brand text-white ring-4 ring-blue-100"
                        : "bg-slate-400 text-white"
                    }`}
                  >
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </span>

                  {/* Header Capsule */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`rounded-md px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider ${
                        item.isCurrent
                          ? "bg-brand text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {item.period[lang]}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {item.context[lang]}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="font-display mt-2 text-lg sm:text-xl font-bold text-slate-900">
                    {item.role[lang]}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 max-w-3xl">
                    {item.description[lang]}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="mt-4 rounded-xl border border-slate-200/80 bg-slate-50/60 p-4 space-y-2 max-w-3xl">
                    {item.highlights[lang].map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2
                          size={14}
                          className="text-brand shrink-0 mt-0.5"
                        />
                        <span className="leading-normal">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------
          5. CONTENT & TECHNICAL SKILLS (GROUPED CARDS, NO FAKE % METERS)
      ------------------------------------------------------------- */}
      <Section tone="mist">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <span>
                {isKm ? "ជំនាញ & សមត្ថភាព" : isZh ? "专业技能矩阵" : "Core Capabilities"}
              </span>
            </div>
            <h2 className="font-display mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {isKm
                ? "ជំនាញតែងនិពន្ធ យុទ្ធសាស្ត្រ SEO និងការអភិវឌ្ឍផលិតផល"
                : isZh
                ? "兼备文字功底、SEO 战略与工程落地"
                : "Editorial Craft, SEO Strategy & Software Engineering"}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              {isKm
                ? "សមត្ថភាពពិតប្រាកដដែលប្រើប្រាស់ក្នុងផលិតកម្ម"
                : isZh
                ? "在生产环境中持续验证的真实能力体系"
                : "Verified in production without artificial percentage progress bars"}
            </p>
          </Reveal>

          {/* 3 Skill Category Bento Blocks */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {profile.skillCategories.map((cat, idx) => (
              <Reveal key={cat.title.en} delay={idx * 0.06}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-brand/40 hover:shadow-sm transition-all">
                  <div>
                    <div className="flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-wider mb-2">
                      <Layers size={14} />
                      <span>{`0${idx + 1}`}</span>
                    </div>

                    <h3 className="font-display text-base font-bold text-slate-900">
                      {cat.title[lang]}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {cat.description[lang]}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-slate-100/90 hover:bg-brand-soft hover:text-brand px-2.5 py-1 font-mono text-[11px] font-semibold text-slate-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------
          6. SELECTED WRITING (REAL ARTICLES AUTHORED BY CHHUNSOUR)
      ------------------------------------------------------------- */}
      <Section tone="white" id="selected-writing">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
                  <BookOpen size={14} />
                  <span>
                    {isKm
                      ? "អត្ថបទនិពន្ធដោយ Chhunsour Seng"
                      : isZh
                      ? "Chhunsour 署名文章库"
                      : "Articles by Chhunsour Seng"}
                  </span>
                </div>
                <h2 className="font-display mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {isKm
                    ? `មគ្គុទ្ទេសក៍ប្រតិបត្តិការតែងនិពន្ធដោយ Chhunsour (${articles.length})`
                    : isZh
                    ? `Chhunsour Seng 深度实操指南库 (${articles.length})`
                    : `Guides Authored by Chhunsour Seng (${articles.length})`}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-500">
                  {isKm
                    ? "អត្ថបទពិតប្រាកដដែលត្រូវបានតែងនិពន្ធដោយ Chhunsour សម្រាប់ AttendKH"
                    : isZh
                    ? "均为 Chhunsour 发表在 AttendKH 知识库中的第一手权威实战指南"
                    : "Real guides authored by Chhunsour for Cambodian business operators and HR leaders"}
                </p>
              </div>

              {/* View all in blog */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline"
              >
                <span>
                  {isKm ? "មើលប្លុកទាំងមូល" : isZh ? "进入完整博客知识库" : "View Entire Blog"}
                </span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>

          {/* Interactive Category Tabs & Quick Search Filter */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-3 py-1 font-semibold transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-brand text-white shadow-2xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Micro Search Input */}
            <div className="relative min-w-[200px] sm:w-56">
              <Search
                size={13}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isKm
                    ? "ស្វែងរកអត្ថបទ..."
                    : isZh
                    ? "搜索指南..."
                    : "Search articles..."
                }
                className="w-full rounded-xl border border-slate-200 bg-white py-1.5 pl-8 pr-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-hidden"
              />
            </div>
          </div>

          {/* Article Grid */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((post, idx) => {
                const readTime = calculateReadTime(post.content, post.excerpt);
                const postDate = formatPostDate(post.published_at);
                const postTitle = getPostTitle(post);
                const postExcerpt = getPostExcerpt(post);
                const postCat = getPostCategory(post);

                return (
                  <Reveal key={post.slug} delay={Math.min(idx, 4) * 0.05}>
                    <article className="group h-full flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs hover:border-brand/40 hover:shadow-md transition-all">
                      <div className="flex flex-col">
                        {/* Card Cover Image */}
                        <Link
                          href={`/blog/${post.slug}`}
                          className="relative block aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-slate-100"
                        >
                          {post.cover_image ? (
                            <Image
                              src={post.cover_image}
                              alt={`${postTitle} — AttendKH`}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-slate-50 text-slate-300">
                              <FileText size={28} />
                            </div>
                          )}
                          <div className="absolute top-3 left-3">
                            <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-brand shadow-xs backdrop-blur-xs border border-white/60">
                              {postCat}
                            </span>
                          </div>
                          <div className="absolute bottom-2.5 right-2.5">
                            <span className="rounded-md bg-slate-900/80 px-2 py-0.5 text-[10.5px] font-medium text-white shadow-xs backdrop-blur-xs flex items-center gap-1">
                              <Clock size={10} />
                              <span>
                                {readTime} {isKm ? "នាទី" : isZh ? "分钟" : "min"}
                              </span>
                            </span>
                          </div>
                        </Link>

                        {/* Card Content Body */}
                        <div className="p-5 sm:p-6 pb-2">
                          {/* Title */}
                          <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-brand transition-colors leading-snug">
                            <Link href={`/blog/${post.slug}`}>{postTitle}</Link>
                          </h3>

                          {/* Excerpt */}
                          <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-slate-600">
                            {postExcerpt}
                          </p>
                        </div>
                      </div>

                      {/* Footer bar */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs px-5 sm:px-6 pb-5">
                        <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-medium">
                          <span className="text-brand font-semibold">By Chhunsour</span>
                          <span className="text-slate-300">•</span>
                          <span className="flex items-center gap-1 text-slate-400">
                            <Calendar size={11} />
                            <span>{postDate}</span>
                          </span>
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 font-bold text-brand hover:underline"
                        >
                          <span>
                            {isKm ? "អានអត្ថបទ" : isZh ? "阅读指南" : "Read Article"}
                          </span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </article>
                  </Reveal>
                );
              })
            ) : (
              <div className="col-span-2 rounded-2xl border border-dashed border-slate-200 p-10 text-center text-slate-400 text-xs">
                {isKm
                  ? "រកមិនឃើញអត្ថបទដែលត្រូវគ្នានឹងការស្វែងរកឡើយ។"
                  : isZh
                  ? "未找到与搜索匹配的文章。"
                  : "No articles matched your filter criteria."}
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------
          7. "I STILL WRITE." PHILOSOPHY CALLOUT
      ------------------------------------------------------------- */}
      <Section tone="mist">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-blue-200/80 bg-gradient-to-br from-white via-white to-blue-50/70 p-7 sm:p-10 shadow-xs">
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-blue-400/10 blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft border border-blue-200 px-3.5 py-1 text-xs font-bold text-brand uppercase tracking-wider mb-4">
                  <Briefcase size={13} />
                  <span>{isKm ? "ទស្សនៈការងារ" : isZh ? "工作理念" : "Work Philosophy"}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {profile.stillWriting.headline[lang]}
                </h3>

                <div className="mt-4 space-y-3.5 text-xs sm:text-sm leading-relaxed text-slate-700">
                  {profile.stillWriting.paragraphs[lang].map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Author sign-off strip */}
                <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden border border-slate-200 shadow-2xs">
                      <Image
                        src={profile.avatar}
                        alt={`Chhunsour (Chhunsour Seng) — Product Builder at AttendKH`}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="font-display text-xs font-bold text-slate-900">
                        {profile.name} <span className="text-slate-500 font-normal">(Chhunsour)</span>
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {profile.role[lang]} • AttendKH
                      </p>
                    </div>
                  </div>

                  <a
                    href={profile.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 px-4 py-2 text-xs font-bold text-white transition-colors cursor-pointer"
                  >
                    <Send size={12} />
                    <span>
                      {isKm
                        ? `ជជែកផ្ទាល់តាម ${profile.telegramHandle}`
                        : isZh
                        ? `Telegram 快速直达 ${profile.telegramHandle}`
                        : `Direct on Telegram ${profile.telegramHandle}`}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
