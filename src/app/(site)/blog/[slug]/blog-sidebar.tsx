"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  ListTree,
  ArrowUp,
  Printer,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Zap,
  ArrowRight,
  MapPin,
  Camera,
  Send,
  Calendar,
  Clock,
  User,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import type { BlogPost } from "@/lib/site-content";
import { useSite } from "@/lib/i18n";

export interface TocItem {
  id: string;
  title?: string;
  text?: string;
  level?: number;
  number?: string;
}

interface BlogSidebarProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  readTime: number;
  wordCount: number;
  initialToc: TocItem[];
}

export function BlogSidebar({
  post,
  relatedPosts,
  readTime,
  wordCount,
  initialToc,
}: BlogSidebarProps) {
  const { lang } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  const [activeId, setActiveId] = useState<string>("");
  const [tocOpen, setTocOpen] = useState(true);

  // Smooth scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Trigger browser print for easy PDF conversion
  const handlePrint = () => {
    window.print();
  };

  // Localized date
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

  // Track active header during scroll
  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll("article.blog-article h2");
      const scrollPosition = window.scrollY + 140;

      let currentActive = "";
      headings.forEach((heading) => {
        const top = (heading as HTMLElement).offsetTop;
        if (scrollPosition >= top) {
          currentActive = heading.id;
        }
      });

      if (currentActive) {
        setActiveId(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialToc]);

  return (
    <aside className="space-y-4 lg:sticky lg:top-24">
      {/* 1. Article Navigation & Quick Actions Card */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-4.5 shadow-xs">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2 font-display text-sm font-bold text-slate-900">
            <ListTree size={15} className="text-brand" />
            <span>{isKm ? "មាតិកាអត្ថបទ" : isZh ? "目录导航" : "Table of Contents"}</span>
          </div>

          <button
            type="button"
            onClick={() => setTocOpen(!tocOpen)}
            className="lg:hidden text-slate-400 hover:text-slate-600 p-1"
          >
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${tocOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Dynamic Table of Contents List */}
        {tocOpen && (
          <nav className="mt-2 max-h-48 overflow-y-auto no-scrollbar space-y-0.5 text-xs" aria-label="Table of contents">
            {initialToc.length > 0 ? (
              initialToc.map((item, idx) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id || idx}
                    href={`#${item.id}`}
                    className={`group flex items-start gap-2 rounded-xl px-2.5 py-1 transition-all duration-150 ${
                      isActive
                        ? "bg-brand-soft/70 font-bold text-brand shadow-2xs"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span
                      className={`mt-0.5 font-mono text-[11px] shrink-0 ${
                        isActive ? "text-brand font-bold" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {item.number ? item.number : `${idx + 1}.`}
                    </span>
                    <span className="line-clamp-2 leading-relaxed">{item.title}</span>
                  </a>
                );
              })
            ) : (
              <p className="text-xs text-slate-400 italic py-2">
                {isKm ? "អត្ថបទខ្លី" : isZh ? "正文概览" : "Standard article overview"}
              </p>
            )}
          </nav>
        )}

        {/* Quick Meta Snapshot (Compact 2-column layout) */}
        <div className="mt-2.5 pt-2.5 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-slate-400 shrink-0" />
            <span className="font-semibold text-slate-700">
              {readTime} {isKm ? "នាទីអាន" : isZh ? "分钟" : "min read"}
            </span>
          </div>

          <div className="flex items-center gap-1.5 justify-end">
            <Calendar size={12} className="text-slate-400 shrink-0" />
            <span className="font-semibold text-slate-700 truncate">{formattedDate}</span>
          </div>
        </div>

        {/* Utilities Bar */}
        <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={handlePrint}
            title="Print or Save Article as PDF"
            className="inline-flex items-center gap-1.5 font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <Printer size={12} className="text-slate-400" />
            <span>{isKm ? "បោះពុម្ព / PDF" : isZh ? "打印 / PDF" : "Print / PDF"}</span>
          </button>

          <button
            type="button"
            onClick={scrollToTop}
            title="Jump to top of article"
            className="inline-flex items-center gap-1.5 font-medium text-slate-500 hover:text-brand transition-colors cursor-pointer"
          >
            <ArrowUp size={12} className="text-slate-400" />
            <span>{isKm ? "ត្រឡប់ទៅលើ" : isZh ? "返回顶部" : "Back to Top"}</span>
          </button>
        </div>
      </div>

      {/* 2. Ultra-Attractive AttendKH Attendance App Promotion Card */}
      <div className="relative overflow-hidden rounded-3xl border border-blue-400/30 bg-gradient-to-b from-[#060D27] via-[#091C5A] to-[#013DAF] p-4 sm:p-4.5 text-white shadow-2xl ring-1 ring-white/10 space-y-3">
        {/* Dynamic Background Lighting & Mesh */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/25 blur-3xl"
        />

        {/* Header Capsule: Logo + Live Pulse Badge */}
        <div className="flex items-center justify-between gap-2 relative z-10">
          <div className="flex items-center gap-1.5 bg-white rounded-xl px-2 py-1 shadow-md">
            <img
              src="/logo.png"
              alt="AttendKH (Attend) Logo — #1 Attendance App Cambodia"
              className="h-5 w-auto object-contain"
            />
            <span className="font-display text-xs font-bold text-slate-900">AttendKH</span>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300 border border-emerald-400/30 backdrop-blur-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{isKm ? "$១ / បុគ្គលិក" : isZh ? "$1 / 员工" : "$1 / Employee"}</span>
          </span>
        </div>

        {/* Catchy Value Headline & Subtitle */}
        <div className="relative z-10 space-y-1">
          <h4 className="font-display text-[15px] sm:text-base font-extrabold text-white leading-snug">
            {isKm
              ? "ទប់ស្កាត់ការចុះវត្តមានជំនួសគ្នាជាមួយ App លេខ ១"
              : isZh
              ? "彻底杜绝代打卡 — 柬埔寨首选智能考勤 App"
              : "Stop Buddy Punching with the #1 Attendance App"}
          </h4>
          <p className="text-[11.5px] text-blue-100/80 leading-relaxed">
            {isKm
              ? "ប្រព័ន្ធកំណត់ទីតាំង GPS Geofence និងការថតរូប Selfie ផ្ទាល់ សម្រាប់ហាងលក់រាយ ហាងកាហ្វេ និងអាជីវកម្មពហុសាខានៅកម្ពុជា។"
              : isZh
              ? "专为在柬零售、连锁餐饮及多分支企业打造的防作弊 GPS 地理围栏与自拍考勤系统。"
              : "Tamper-proof mobile GPS geofence & live selfie check-ins for Cambodian retail, cafes, and multi-branch teams."}
          </p>

          {/* Pricing Highlight Pill */}
          <div className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2 py-0.5 text-[10.5px] font-semibold text-cyan-200 border border-white/15 backdrop-blur-xs mt-0.5">
            <Zap size={11} className="text-cyan-300" />
            <span>
              {isKm
                ? "ត្រឹមតែ $1 / នាក់ / ខែ • មិនបាច់ទិញម៉ាស៊ីន"
                : isZh
                ? "仅需 $1 / 员工 / 月 • 零硬件投入"
                : "Only $1 / employee / month • No hardware"}
            </span>
          </div>
        </div>

        {/* App Showcase Frame */}
        <div className="relative z-10 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-2.5 backdrop-blur-md shadow-inner">
          <div className="flex items-center gap-3">
            {/* Phone Mock Thumbnail */}
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/30 bg-slate-900 shadow-md">
              <img
                src="/clockin-frame-3.webp"
                alt="AttendKH (Attend) Mobile GPS Geofence & Selfie Clock-In App"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Live Status Indicators */}
            <div className="min-w-0 space-y-0.5">
              <div className="flex items-center gap-1 text-[10.5px] font-bold text-emerald-300">
                <ShieldCheck size={12} className="text-emerald-400 shrink-0" />
                <span className="truncate">
                  {isKm ? "ផ្ទៀងផ្ទាត់ GPS & Selfie" : isZh ? "GPS & 自拍双重核验" : "GPS & Selfie Verified"}
                </span>
              </div>
              <p className="text-[11.5px] font-semibold text-white truncate">
                {isKm ? "ចុះវត្តមានភ្លាមៗ • លឿនបំផុត" : isZh ? "极速打卡 • 0 秒延迟" : "Instant Clock-in • 0s Delay"}
              </p>
              <p className="text-[10px] text-blue-200/90 truncate flex items-center gap-1">
                <Smartphone size={10} className="shrink-0" />
                <span>iOS • Android • Telegram</span>
              </p>
            </div>
          </div>
        </div>

        {/* 2x2 Feature Bento Micro-Grid */}
        <div className="grid grid-cols-2 gap-1.5 text-xs relative z-10">
          <div className="rounded-xl bg-white/5 border border-white/10 p-2 space-y-0.5">
            <div className="flex items-center gap-1 text-cyan-300 font-bold text-[10.5px]">
              <MapPin size={11} className="shrink-0" />
              <span>{isKm ? "GPS Geofence" : isZh ? "GPS 地理围栏" : "GPS Geofence"}</span>
            </div>
            <p className="text-[9.5px] text-blue-200/80 leading-tight">
              {isKm ? "កាំរង្វង់ ៥០ម–៣០០ម" : isZh ? "50米–300米精准围栏" : "50m–300m radius"}
            </p>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 p-2 space-y-0.5">
            <div className="flex items-center gap-1 text-cyan-300 font-bold text-[10.5px]">
              <Camera size={11} className="shrink-0" />
              <span>{isKm ? "Live Selfie" : isZh ? "实时活体自拍" : "Live Selfie"}</span>
            </div>
            <p className="text-[9.5px] text-blue-200/80 leading-tight">
              {isKm ? "ទប់ស្កាត់ចុះជំនួស ១០០%" : isZh ? "100% 杜绝代打卡" : "0% buddy punch"}
            </p>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 p-2 space-y-0.5">
            <div className="flex items-center gap-1 text-cyan-300 font-bold text-[10.5px]">
              <Send size={11} className="shrink-0" />
              <span>Telegram Bot</span>
            </div>
            <p className="text-[9.5px] text-blue-200/80 leading-tight">
              {isKm ? "ដំណឹងយឺតភ្លាមៗ" : isZh ? "迟到实时自动预警" : "Instant late alerts"}
            </p>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 p-2 space-y-0.5">
            <div className="flex items-center gap-1 text-cyan-300 font-bold text-[10.5px]">
              <CheckCircle2 size={11} className="shrink-0" />
              <span>{isKm ? "ស្របច្បាប់ការងារ" : isZh ? "柬埔寨劳工法" : "MoLVT Ready"}</span>
            </div>
            <p className="text-[9.5px] text-blue-200/80 leading-tight">
              {isKm ? "OT & ប.ស.ស. ត្រឹមត្រូវ" : isZh ? "OT加班与社保合规" : "OT & NSSF ready"}
            </p>
          </div>
        </div>

        {/* High-Converting Action Buttons */}
        <div className="space-y-1.5 pt-0.5 relative z-10">
          <Link
            href="/downloads"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-blue-50 py-2.5 text-xs sm:text-[13px] font-extrabold text-[#012586] shadow-lg transition-all active:scale-95 cursor-pointer hover:shadow-cyan-500/20"
          >
            <Smartphone size={14} />
            <span>
              {isKm
                ? "ទាញយក App វត្តមាន ($1/ខែ)"
                : isZh
                ? "获取考勤 App ($1/月)"
                : "Get Attendance App ($1/mo)"}
            </span>
            <ArrowRight size={13} />
          </Link>

          <Link
            href="/pricing"
            className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 py-2 text-[11.5px] font-semibold text-white border border-white/20 transition-all cursor-pointer"
          >
            <span>
              {isKm
                ? "គណនាតម្លៃសម្រាប់ក្រុមការងារ →"
                : isZh
                ? "测算企业团队报价 →"
                : "Calculate Team Pricing →"}
            </span>
          </Link>
        </div>

        {/* Social Proof Footer */}
        <div className="pt-1.5 border-t border-white/15 flex items-center justify-center gap-1.5 text-[10px] text-blue-200/90 relative z-10 text-center">
          <div className="flex text-amber-300 text-[11px]">
            {"★".repeat(5)}
          </div>
          <span>
            {isKm
              ? "ជឿទុកចិត្តដោយអាជីវកម្មជាង ២៥០+ នៅកម្ពុជា"
              : isZh
              ? "深受 250+ 柬埔寨企业信赖"
              : "Trusted by 250+ Cambodian Outlets"}
          </span>
        </div>
      </div>
    </aside>
  );
}
