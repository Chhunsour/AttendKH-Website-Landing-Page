"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useSite } from "@/lib/i18n";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import type { LegalDocument } from "@/lib/site-content";
import { OpenCookieSettingsButton } from "@/components/site/cookie-banner";
import {
  ReadingProgressBar,
  PrivacySearchInput,
  PrivacyNutritionCard,
  GpsTrackingComparison,
  MobilePermissionsExplorer,
  AccountDeletionGuide,
  EmployeePrivacyFaq,
  VisualPrivacyArchitectureShowcase,
} from "@/components/site/privacy-interactive";
import {
  ShieldCheck,
  MapPin,
  Camera,
  Trash2,
  Printer,
  Copy,
  Check,
  Mail,
  ListTree,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  Clock,
  Sparkles,
  Layers,
  Smartphone,
  Lock,
  FileText,
  Search,
  BookOpen,
  ArrowUp,
  Home,
} from "lucide-react";

type LegalKey = "privacy" | "terms" | "support" | "cookies";

export function LegalView({
  page,
  document: legalDoc,
}: {
  page: LegalKey;
  document?: LegalDocument | null;
}) {
  const { t, lang } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";
  const doc =
    (t.legal as Record<string, { title: string; updated: string; p1: string; p2: string; p3: string }>)[page] ||
    t.legal.privacy;

  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const legalNav = [
    { key: "privacy", label: isKm ? "គោលការណ៍ឯកជនភាព" : isZh ? "隐私政策" : "Privacy Policy", href: "/privacy-policy" },
    { key: "terms", label: isKm ? "លក្ខខណ្ឌប្រើប្រាស់" : isZh ? "服务条款" : "Terms of Service", href: "/terms" },
    { key: "cookies", label: isKm ? "គោលការណ៍ Cookie" : isZh ? "Cookie 政策" : "Cookie Policy", href: "/cookies" },
    { key: "trust", label: isKm ? "មជ្ឈមណ្ឌលសុវត្ថិភាព" : isZh ? "信任与安全" : "Trust & Security", href: "/trust" },
  ];

  // Determine localized title and raw markdown content based on current language
  const currentTitle = useMemo(() => {
    if (isKm && legalDoc?.title_km) return legalDoc.title_km;
    if (isZh && legalDoc?.title_zh) return legalDoc.title_zh;
    return legalDoc?.title || doc.title;
  }, [isKm, isZh, legalDoc, doc.title]);

  const rawMarkdown = useMemo(() => {
    if (isKm && legalDoc?.content_km) return legalDoc.content_km;
    if (isZh && legalDoc?.content_zh) return legalDoc.content_zh;
    return legalDoc?.content || "";
  }, [isKm, isZh, legalDoc]);

  // Process markdown into HTML with IDs and extract TOC items
  const { safeHtml, toc, fullText } = useMemo(() => {
    if (!rawMarkdown) {
      return { safeHtml: "", toc: [], fullText: "" };
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
          .replace(/(^-|-$)/g, "");
        extractedToc.push({ id, title: cleanTitle, number });
      }
    }

    let parsedHtml = marked.parse(rawMarkdown) as string;

    // Inject ID into each <h2> for anchor jump and smooth scroll
    parsedHtml = parsedHtml.replace(/<h2>(.*?)<\/h2>/g, (_, innerText) => {
      const plainText = innerText.replace(/<[^>]*>/g, "").trim();
      const id = plainText
        .toLowerCase()
        .replace(/[^a-z0-9\u1780-\u17ff\u4e00-\u9fa5]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return `<h2 id="${id}" class="scroll-mt-28 group relative flex items-baseline justify-between">${innerText}<a href="#${id}" class="opacity-0 group-hover:opacity-100 text-brand text-sm font-semibold ml-2 transition-opacity inline-flex items-center print:hidden" aria-label="Link to section">#</a></h2>`;
    });

    const sanitized = sanitizeHtml(parsedHtml, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([
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
        "hr",
      ]),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        h2: ["id", "class"],
        a: ["href", "class", "target", "rel", "aria-label"],
        span: ["class"],
        table: ["class"],
        th: ["class"],
        td: ["class"],
      },
    });

    return { safeHtml: sanitized, toc: extractedToc, fullText: rawMarkdown };
  }, [rawMarkdown]);

  // Filter TOC based on search query
  const filteredToc = useMemo(() => {
    if (!searchQuery.trim()) return toc;
    const q = searchQuery.toLowerCase().trim();
    return toc.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        (item.number && item.number.toLowerCase().includes(q))
    );
  }, [toc, searchQuery]);

  // Track active section on scroll and show/hide Back to Top
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      let currentActive = toc[0]?.id || "";

      for (const item of toc) {
        const element = typeof window !== "undefined" ? window.document.getElementById(item.id) : null;
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            currentActive = item.id;
          }
        }
      }
      setActiveSection(currentActive);
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const dateStr = legalDoc?.created_at
    ? new Date(legalDoc.created_at).toLocaleDateString(
        isKm ? "km-KH" : isZh ? "zh-CN" : "en-US",
        {
          month: "long",
          day: "numeric",
          year: "numeric",
        }
      )
    : "September 2026";

  // Estimated reading time (~200 words per minute)
  const readingTimeMinutes = useMemo(() => {
    const words = (fullText || "").trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  }, [fullText]);

  // Privacy Policy Pillars (Highlight Cards)
  const privacyPillars = [
    {
      icon: MapPin,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      title: isKm ? "ទីតាំង GPS នៅពេលចុះវត្តមាន" : isZh ? "打卡瞬时 GPS 核验" : "Point-in-Time GPS Only",
      description: isKm
        ? "គ្មានការតាមដាន ២៤ម៉ោង។ ទីតាំងត្រូវពិនិត្យតែពេលចុះវត្តមានដើម្បីផ្ទៀងផ្ទាត់រង្វង់សាខា។"
        : isZh
        ? "零全天候后台追踪。仅在员工打卡瞬间核验分支地理围栏，离开工作场所完全静默。"
        : "Zero 24/7 background tracking. GPS location is captured strictly at the instant of clocking in/out to verify geofence radius.",
    },
    {
      icon: Camera,
      color: "text-blue-600 bg-blue-50 border-blue-200",
      title: isKm ? "រូបថត Selfie អ៊ិនគ្រីប AES-256" : isZh ? "AES-256 加密自拍核验" : "Encrypted Live Selfies",
      description: isKm
        ? "ការពារការចុះវត្តមានជំនួស។ រូបថតត្រូវបានអ៊ិនគ្រីប និងមិនដែលលក់ទៅភាគីទីបីឡើយ។"
        : isZh
        ? "打卡实时人脸防代打卡，AES-256 高强度加密，严禁转售或提供给第三方广告商。"
        : "Live front-camera photo verifies physical presence and prevents buddy punching. Watermarked, encrypted, and never sold.",
    },
    {
      icon: ShieldCheck,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
      title: isKm ? "អនុលោម App Store & Play Store" : isZh ? "应用商店合规准则" : "App Store & Play Store Compliant",
      description: isKm
        ? "តម្លាភាពពេញលេញចំពោះការសុំសិទ្ធិប្រើ Camera, Location, Storage និង Push Notifications។"
        : isZh
        ? "完全符合苹果与谷歌敏感权限审核要求，提供透明的权限使用矩阵与隐私披露清单。"
        : "Complete transparency for Camera, Location, Storage, and Push Notification runtime permissions.",
    },
    {
      icon: Trash2,
      color: "text-rose-600 bg-rose-50 border-rose-200",
      title: isKm ? "សិទ្ធិលុបគណនី និងទិន្នន័យ" : isZh ? "个人数据与账户注销权" : "Account & Data Deletion Rights",
      description: isKm
        ? "បុគ្គលិក និងស្ថាប័នអាចស្នើសុំលុបទិន្នន័យបានងាយស្រួល ដំណើរការក្នុងរយៈពេល ៣០ថ្ងៃ។"
        : isZh
        ? "员工及企业均可通过应用内或邮件快捷申请永久注销账户，30日内核验完成硬删除。"
        : "Employees and employers can easily request permanent account and record erasure within 30 days.",
    },
  ];

  return (
    <>
      {/* Top Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/90 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-brand hover:scale-105 active:scale-95 cursor-pointer print:hidden"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-brand pt-28 pb-14 sm:pt-32 sm:pb-16 print:bg-white print:text-black print:pt-6 print:pb-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_60%)] pointer-events-none print:hidden" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          {/* Visual SEO Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4 inline-flex items-center print:hidden">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-blue-100/90">
              <li className="flex items-center gap-1.5">
                <Link href="/" className="flex items-center gap-1 text-blue-200/90 hover:text-white transition-colors">
                  <Home size={12} className="shrink-0" />
                  <span>{isKm ? "ទំព័រដើម" : isZh ? "首页" : "Home"}</span>
                </Link>
              </li>
              <li className="text-white/40 font-normal">/</li>
              <li className="flex items-center gap-1.5">
                <Link href="/trust" className="text-blue-200/90 hover:text-white transition-colors">
                  <span>{isKm ? "មជ្ឈមណ្ឌលសុវត្ថិភាព" : isZh ? "信任与安全" : "Trust Center"}</span>
                </Link>
              </li>
              <li className="text-white/40 font-normal">/</li>
              <li className="font-semibold text-white">
                {page === "privacy"
                  ? isKm ? "គោលការណ៍ឯកជនភាព" : isZh ? "隐私政策" : "Privacy Policy"
                  : page === "terms"
                  ? isKm ? "លក្ខខណ្ឌប្រើប្រាស់" : isZh ? "服务条款" : "Terms of Service"
                  : page === "cookies"
                  ? isKm ? "គោលការណ៍ Cookie" : isZh ? "Cookie 政策" : "Cookie Policy"
                  : currentTitle}
              </li>
            </ol>
          </nav>

          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Unified Sleek Meta Capsule */}
            <div className="inline-flex flex-wrap items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs text-white/90 backdrop-blur-md shadow-2xs print:border-slate-200 print:bg-slate-50 print:text-slate-800">
              <span className="flex items-center gap-1.5 font-medium text-white print:text-slate-900">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 print:bg-emerald-600" />
                <span>{isKm ? "ធ្វើបច្ចុប្បន្នភាព៖" : isZh ? "更新时间：" : "Last updated:"} {dateStr}</span>
              </span>

              {legalDoc?.version && (
                <>
                  <span className="h-3 w-px bg-white/25 print:bg-slate-300" />
                  <span className="font-mono text-[11px] font-bold text-blue-200 print:text-slate-700">
                    v{legalDoc.version}
                  </span>
                </>
              )}

              <span className="h-3 w-px bg-white/25 print:bg-slate-300" />
              <span className="text-blue-100/90 text-[11.5px] flex items-center gap-1 print:text-slate-600">
                <BookOpen size={12} className="text-blue-200 print:text-slate-500" />
                ~{readingTimeMinutes} {isKm ? "នាទីអាន" : isZh ? "分钟" : "min read"}
              </span>

              {page === "privacy" && (
                <>
                  <span className="hidden sm:inline-block h-3 w-px bg-white/25 print:hidden" />
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11.5px] font-medium text-emerald-300 print:hidden">
                    <ShieldCheck size={12} className="text-emerald-300" />
                    <span>{isKm ? "អនុលោម App Store & Play Store" : isZh ? "应用商店合规" : "App Store & Play Store Compliant"}</span>
                  </span>
                </>
              )}
            </div>

            {/* Quick Action Tools */}
            <div className="flex items-center gap-2 print:hidden">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-white/20 transition-all cursor-pointer shadow-2xs active:scale-95"
                title="Copy page link"
              >
                {copied ? <Check size={13} className="text-emerald-300" /> : <Copy size={13} />}
                <span>{copied ? (isKm ? "បានចម្លង!" : isZh ? "已复制!" : "Copied!") : (isKm ? "ចម្លងតំណ" : isZh ? "复制链接" : "Share Link")}</span>
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-white/20 transition-all cursor-pointer shadow-2xs active:scale-95"
                title="Print or Save as PDF"
              >
                <Printer size={13} />
                <span>{isKm ? "បោះពុម្ព / PDF" : isZh ? "打印/PDF" : "Print / PDF"}</span>
              </button>
            </div>
          </div>

          <h1 className="font-display mt-4 text-[2rem] font-bold leading-tight tracking-[-0.02em] text-white sm:text-[2.6rem] lg:text-[3rem] print:text-slate-950">
            {currentTitle}
          </h1>

          <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-blue-100 print:text-slate-700">
            {page === "privacy"
              ? isKm
                ? "ស្ដង់ដារភាពឯកជនទិន្នន័យសម្រាប់កម្មវិធីទូរស័ព្ទ AttendKH (iOS & Android) និងប្រព័ន្ធគ្រប់គ្រងវត្តមាន"
                : isZh
                ? "AttendKH 移动考勤应用（iOS 与 Android）及企业云端管理系统的官方隐私与数据治理规范"
                : "Official workforce privacy standards, location data policies, and permission guidelines for the AttendKH Mobile Attendance App & Cloud Suite."
              : isKm
              ? "ឯកសារច្បាប់ផ្លូវការ និងលក្ខខណ្ឌប្រើប្រាស់របស់ AttendKH"
              : isZh
              ? "AttendKH 官方合规政策与服务指引"
              : "Official terms, compliance benchmarks, and workforce agreements for AttendKH."}
          </p>

          {/* Legal Quick Nav Tabs */}
          <nav className="mt-8 flex flex-wrap gap-2 print:hidden" aria-label="Legal document navigation">
            {legalNav.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  page === item.key
                    ? "bg-white text-brand shadow-xs font-bold"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Body */}
      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Privacy Highlights Pillars Banner (Shown on Privacy Page) */}
        {page === "privacy" && (
          <div className="mb-14 print:hidden">
            {/* 1. App Privacy Nutrition Card (Apple / Google Data Safety) */}
            <div className="mb-10">
              <PrivacyNutritionCard />
            </div>

            {/* 2. Key Privacy Pillars Banner */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-brand" />
                <h2 className="font-display text-sm font-bold tracking-tight text-ink uppercase">
                  {isKm ? "ចំណុចសំខាន់ៗនៃគោលការណ៍ឯកជនភាព" : isZh ? "核心隐私与合规保障" : "Key Privacy & Compliance Pillars"}
                </h2>
              </div>
              <span className="font-mono text-[11px] text-slate-500">
                {isKm ? "ស្ដង់ដារកម្មវិធីទូរស័ព្ទ ២.០" : isZh ? "移动应用 2.0 规范" : "Mobile Suite 2.0 Standards"}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {privacyPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-shadow hover:shadow-md"
                  >
                    <div className={`mb-3.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border ${pillar.color}`}>
                      <IconComponent size={18} />
                    </div>
                    <h3 className="font-display text-sm font-bold text-ink">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Cookie Management Box (Cookies Page) */}
        {page === "cookies" && (
          <div className="mb-10 rounded-2xl border border-blue-200 bg-brand-soft/30 p-6 print:hidden">
            <h3 className="font-display text-base font-bold text-ink">
              {isKm ? "គ្រប់គ្រងការយល់ព្រម Cookie របស់អ្នក" : isZh ? "管理您的 Cookie 偏好设置" : "Manage Your Cookie Preferences"}
            </h3>
            <p className="mt-1 text-xs text-body">
              {isKm
                ? "អ្នកអាចបើក ឬបិទ Cookie វិភាគទិន្នន័យបានគ្រប់ពេលវេលា"
                : isZh
                ? "您可以随时修改可选性能与数据分析 Cookie 的授权设置。"
                : "You can modify your consent settings for optional performance and analytics cookies at any time."}
            </p>
            <div className="mt-4">
              <OpenCookieSettingsButton className="rounded-xl bg-brand px-5 py-2.5 text-xs font-semibold text-white hover:bg-brand-dark transition-colors cursor-pointer" />
            </div>
          </div>
        )}

        {/* 2-Column Desktop Grid with Sticky Table of Contents & Search */}
        {legalDoc ? (
          <div className="lg:grid lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Table of Contents (Desktop Sticky Sidebar) */}
            {toc.length > 0 && (
              <aside className="hidden lg:col-span-4 lg:block print:hidden">
                <div className="sticky top-28 space-y-4">
                  {/* Interactive Search Tool */}
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs">
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5 mb-2.5">
                      <Search size={14} className="text-brand" />
                      {isKm ? "ស្វែងរកក្នុងឯកសារ" : isZh ? "站内搜索" : "Search in Policy"}
                    </span>
                    <PrivacySearchInput
                      value={searchQuery}
                      onChange={setSearchQuery}
                      onClear={() => setSearchQuery("")}
                      resultsCount={filteredToc.length}
                    />
                  </div>

                  {/* TOC Box */}
                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5 backdrop-blur-xs shadow-xs">
                    <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                      <ListTree size={16} className="text-brand" />
                      <span className="font-display text-xs font-bold uppercase tracking-wider text-slate-800">
                        {isKm ? "មាតិកាឯកសារ" : isZh ? "目录导航" : "Table of Contents"}
                      </span>
                      <span className="ml-auto rounded bg-slate-200 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-600">
                        {filteredToc.length} {isKm ? "ផ្នែក" : isZh ? "节" : "sections"}
                      </span>
                    </div>

                    <nav className="mt-4 max-h-[calc(100vh-340px)] space-y-1 overflow-y-auto pr-1 text-xs custom-scrollbar" aria-label="Table of contents">
                      {filteredToc.length > 0 ? (
                        filteredToc.map((item) => {
                          const isActive = activeSection === item.id;
                          return (
                            <a
                              key={item.id}
                              href={`#${item.id}`}
                              className={`flex items-start gap-2 rounded-lg px-2.5 py-2 transition-colors ${
                                isActive
                                  ? "bg-brand text-white font-semibold shadow-xs"
                                  : "text-slate-600 hover:bg-slate-200/60 hover:text-ink"
                              }`}
                            >
                              {item.number && (
                                <span className={`font-mono text-[11px] shrink-0 ${isActive ? "text-blue-100" : "text-slate-400"}`}>
                                  {item.number}
                                </span>
                              )}
                              <span className="line-clamp-2 leading-tight">{item.title}</span>
                            </a>
                          );
                        })
                      ) : (
                        <div className="p-3 text-center text-xs text-slate-400">
                          {isKm ? "រកមិនឃើញផ្នែកដែលត្រូវគ្នា" : isZh ? "未找到匹配章节" : "No matching sections found"}
                        </div>
                      )}
                    </nav>

                    {/* Sidebar Help Box */}
                    <div className="mt-6 rounded-xl border border-blue-100 bg-white p-3.5 text-xs text-slate-600">
                      <p className="font-semibold text-ink flex items-center gap-1.5">
                        <Mail size={13} className="text-brand" />
                        {isKm ? "សំណួរអំពីឯកជនភាព?" : isZh ? "隐私咨询通道" : "Privacy Questions?"}
                      </p>
                      <p className="mt-1 text-[11.5px] leading-relaxed text-slate-500">
                        {isKm
                          ? "ទាក់ទងមន្ត្រីការពារទិន្នន័យតាមរយៈ privacy@attendkh.com"
                          : isZh
                          ? "直接发送邮件至 privacy@attendkh.com 联系数据合规团队。"
                          : "Reach our compliance team directly at privacy@attendkh.com."}
                      </p>
                      <a
                        href="mailto:privacy@attendkh.com"
                        className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-brand hover:underline"
                      >
                        Email Data Protection Officer <ArrowRight size={11} />
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            )}

            {/* Right Column: Article Content & Interactive Modules */}
            <div className={toc.length > 0 ? "lg:col-span-8" : "lg:col-span-12"}>
              {/* Mobile Collapsible TOC & Search */}
              {toc.length > 0 && (
                <div className="mb-8 block lg:hidden space-y-3 print:hidden">
                  <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-xs">
                    <PrivacySearchInput
                      value={searchQuery}
                      onChange={setSearchQuery}
                      onClear={() => setSearchQuery("")}
                      resultsCount={filteredToc.length}
                    />
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <button
                      onClick={() => setMobileTocOpen(!mobileTocOpen)}
                      className="flex w-full items-center justify-between text-xs font-bold text-ink cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <ListTree size={15} className="text-brand" />
                        {isKm ? "មើលមាតិកាឯកសារ (" : isZh ? "查看目录导航 (" : "Jump to Section ("}
                        {filteredToc.length} {isKm ? "ផ្នែក)" : isZh ? "节)" : "sections)"}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-slate-500 transition-transform ${mobileTocOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {mobileTocOpen && (
                      <nav className="mt-3 space-y-1 border-t border-slate-200 pt-3 text-xs" aria-label="Mobile table of contents">
                        {filteredToc.map((item) => (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setMobileTocOpen(false)}
                            className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-slate-700 hover:bg-slate-200"
                          >
                            {item.number && <span className="font-mono text-slate-400">{item.number}</span>}
                            <span>{item.title}</span>
                          </a>
                        ))}
                      </nav>
                    )}
                  </div>
                </div>
              )}

              {/* Visual Infographics Showcase for Privacy */}
              {page === "privacy" && (
                <div className="print:hidden">
                  <VisualPrivacyArchitectureShowcase />
                  <GpsTrackingComparison />
                  <MobilePermissionsExplorer />
                </div>
              )}

              {/* Legal Prose Content */}
              <article
                className="prose prose-slate max-w-none text-[15.5px] leading-relaxed text-body
                  prose-headings:font-display prose-headings:font-bold prose-headings:text-ink
                  prose-h2:mt-12 prose-h2:pt-4 prose-h2:pb-3 prose-h2:border-b prose-h2:border-slate-200 prose-h2:text-2xl
                  prose-h3:mt-8 prose-h3:text-lg prose-h3:text-slate-900
                  prose-a:text-brand prose-a:font-medium prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-brand-dark
                  prose-code:font-mono prose-code:text-xs prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-slate-800
                  prose-table:w-full prose-table:my-6 prose-table:border-collapse prose-table:text-xs
                  prose-thead:bg-slate-100/90
                  prose-th:p-3 prose-th:font-bold prose-th:text-slate-900 prose-th:border prose-th:border-slate-200
                  prose-td:p-3 prose-td:border prose-td:border-slate-200 prose-td:align-top
                  prose-blockquote:border-l-4 prose-blockquote:border-brand prose-blockquote:bg-brand-soft/40 prose-blockquote:py-2.5 prose-blockquote:px-4 prose-blockquote:rounded-r-xl prose-blockquote:text-slate-700
                  prose-hr:my-10 prose-hr:border-slate-200"
                dangerouslySetInnerHTML={{ __html: safeHtml }}
              />

              {/* Interactive Account & Data Deletion Guide */}
              {page === "privacy" && (
                <div className="print:hidden">
                  <AccountDeletionGuide />
                  <EmployeePrivacyFaq />
                </div>
              )}

              {/* Bottom Compliance Desk Card */}
              <div className="mt-16 rounded-3xl border border-slate-200 bg-linear-to-br from-slate-50 via-blue-50/20 to-white p-6 sm:p-8 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-0.5 text-xs font-semibold text-brand">
                      <ShieldCheck size={13} />
                      {isKm ? "មន្ត្រីការពារទិន្នន័យ (DPO)" : isZh ? "数据合规与隐私专员" : "Data Protection Officer (DPO)"}
                    </div>
                    <h3 className="font-display mt-2 text-lg font-bold text-ink">
                      {isKm ? "ត្រូវការជំនួយអំពីឯកជនភាព ឬសុំលុបទិន្នន័យ?" : isZh ? "需要咨询隐私问题或申请数据删除？" : "Need Privacy Assistance or Data Deletion?"}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 max-w-lg">
                      {isKm
                        ? "ក្រុមការងារអនុលោមភាពរបស់យើងត្រៀមខ្លួនជាស្រេចដើម្បីឆ្លើយតបសំណួររបស់អ្នក ដំណើរការសំណើលុបទិន្នន័យ និងធានាសុវត្ថិភាពអតិបរមា។"
                        : isZh
                        ? "我们的合规团队将竭诚协助您处理数据权利请求、删除申请并提供完整的技术合规支持。"
                        : "Our privacy compliance desk is available to assist with data subject access requests, deletion workflows, and App Store compliance questions."}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 shrink-0 print:hidden">
                    <a
                      href="mailto:privacy@attendkh.com"
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-brand-dark transition-colors"
                    >
                      <Mail size={14} />
                      Email Privacy Desk
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      {isKm ? "ទាក់ទងមកយើង" : isZh ? "联系客服" : "Contact Support"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Fallback static view */
          <article className="mx-auto max-w-4xl space-y-6 text-[15.5px] leading-relaxed text-body">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-semibold text-ink">{doc.p1}</p>
            </div>
            <p>{doc.p2}</p>
            <p>{doc.p3}</p>
          </article>
        )}
      </main>
    </>
  );
}
