"use client";

import Link from "next/link";
import {
  FileText,
  Sparkles,
  ArrowRight,
  Printer,
  TrendingUp,
  CheckCircle2,
  ArrowUp,
  Smartphone,
  Camera,
  ShieldCheck,
  Zap,
  MapPin,
  Send,
} from "lucide-react";
import type { BlogPost } from "@/lib/site-content";

export function BlogSidebar({
  post,
  relatedPosts,
  readTime,
  wordCount,
}: {
  post: BlogPost;
  relatedPosts: BlogPost[];
  readTime: number;
  wordCount: number;
  initialToc?: unknown;
}) {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside className="space-y-4 lg:sticky lg:top-24">
      {/* 1. Unified Connected Sidebar Card */}
      <div className="rounded-3xl border border-slate-200/90 bg-white shadow-xs divide-y divide-slate-100 overflow-hidden">
        {/* Section D: Recommended Guides */}
        {relatedPosts.length > 0 && (
          <div className="p-5 sm:p-6 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                <TrendingUp size={13} className="text-brand" />
                <span>Recommended Guides</span>
              </div>
              <Link href="/blog" className="text-[11px] font-semibold text-brand hover:underline">
                All guides →
              </Link>
            </div>

            <div className="space-y-2.5 pt-1">
              {relatedPosts.slice(0, 3).map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="group flex items-start gap-3 rounded-2xl p-2 transition-all hover:bg-slate-50 border border-transparent hover:border-slate-200/80"
                >
                  {/* Featured Thumbnail */}
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 shadow-2xs">
                    {rel.cover_image ? (
                      <img
                        src={rel.cover_image}
                        alt={rel.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-brand-soft text-brand font-bold text-xs">
                        <FileText size={16} />
                      </div>
                    )}
                  </div>

                  {/* Text Details */}
                  <div className="min-w-0 flex-1">
                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-brand block mb-0.5">
                      {rel.category}
                    </span>
                    <h5 className="font-display text-xs font-bold text-slate-800 group-hover:text-brand transition-colors line-clamp-2 leading-snug">
                      {rel.title}
                    </h5>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Section E: Utility Bar (Print & Back to Top) */}
        <div className="px-5 py-3.5 bg-slate-50/60 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={handlePrint}
            title="Print or Save Article as PDF"
            className="inline-flex items-center gap-1.5 font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <Printer size={13} className="text-slate-400" />
            <span>Print / PDF</span>
          </button>

          <button
            type="button"
            onClick={scrollToTop}
            title="Jump to top of article"
            className="inline-flex items-center gap-1.5 font-medium text-slate-500 hover:text-brand transition-colors cursor-pointer"
          >
            <ArrowUp size={13} className="text-slate-400" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>

      {/* 2. Ultra-Attractive AttendKH Attendance App Promotion Card */}
      <div className="relative overflow-hidden rounded-3xl border border-blue-400/30 bg-gradient-to-b from-[#060D27] via-[#091C5A] to-[#013DAF] p-5 sm:p-6 text-white shadow-2xl ring-1 ring-white/10 space-y-4">
        {/* Dynamic Background Lighting & Mesh */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/25 blur-3xl"
        />

        {/* Subtle dot-grid texture */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="card-dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#card-dots)" />
        </svg>

        {/* Header Capsule: Logo + Live Pulse Badge */}
        <div className="flex items-center justify-between gap-2 relative z-10">
          <div className="flex items-center gap-2 bg-white rounded-xl px-2.5 py-1.5 shadow-md">
            <img
              src="/logo.png"
              alt="AttendKH Logo"
              className="h-6 w-auto object-contain"
            />
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-emerald-300 border border-emerald-400/30 backdrop-blur-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>$1 / Employee</span>
          </span>
        </div>

        {/* Catchy Value Headline & Subtitle */}
        <div className="relative z-10 space-y-1.5">
          <h4 className="font-display text-base sm:text-lg font-extrabold text-white leading-snug">
            Stop Buddy Punching with the #1 Attendance App
          </h4>
          <p className="text-xs text-blue-100/80 leading-relaxed">
            Tamper-proof mobile GPS geofence & live selfie check-ins for Cambodian retail, cafes, and multi-branch teams.
          </p>

          {/* Pricing Highlight Pill */}
          <div className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-cyan-200 border border-white/15 backdrop-blur-xs mt-1">
            <Zap size={12} className="text-cyan-300" />
            <span>Only $1 / employee / month • No hardware</span>
          </div>
        </div>

        {/* App Showcase Frame */}
        <div className="relative z-10 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-3 backdrop-blur-md shadow-inner">
          <div className="flex items-center gap-3.5">
            {/* Phone Mock Thumbnail */}
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/30 bg-slate-900 shadow-md">
              <img
                src="/clockin-frame-3.webp"
                alt="Mobile Attendance Clock-in App"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Live Status Indicators */}
            <div className="min-w-0 space-y-1">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-300">
                <ShieldCheck size={13} className="text-emerald-400 shrink-0" />
                <span className="truncate">GPS & Selfie Verified</span>
              </div>
              <p className="text-xs font-semibold text-white truncate">
                Instant Clock-in • 0s Delay
              </p>
              <p className="text-[10.5px] text-blue-200/90 truncate flex items-center gap-1">
                <Smartphone size={10} className="shrink-0" />
                <span>iOS • Android • Telegram</span>
              </p>
            </div>
          </div>
        </div>

        {/* 2x2 Feature Bento Micro-Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs relative z-10">
          <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 space-y-1">
            <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-[11px]">
              <MapPin size={12} className="shrink-0" />
              <span>GPS Geofence</span>
            </div>
            <p className="text-[10px] text-blue-200/80 leading-tight">50m–300m radius lock</p>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 space-y-1">
            <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-[11px]">
              <Camera size={12} className="shrink-0" />
              <span>Live Selfie</span>
            </div>
            <p className="text-[10px] text-blue-200/80 leading-tight">0% buddy punching</p>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 space-y-1">
            <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-[11px]">
              <Send size={12} className="shrink-0" />
              <span>Telegram Bot</span>
            </div>
            <p className="text-[10px] text-blue-200/80 leading-tight">Instant late alerts</p>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 space-y-1">
            <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-[11px]">
              <CheckCircle2 size={12} className="shrink-0" />
              <span>MoLVT Ready</span>
            </div>
            <p className="text-[10px] text-blue-200/80 leading-tight">OT & NSSF compliant</p>
          </div>
        </div>

        {/* High-Converting Action Buttons */}
        <div className="space-y-2 pt-1 relative z-10">
          <Link
            href="/downloads"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-blue-50 py-3 text-xs sm:text-sm font-extrabold text-[#012586] shadow-lg transition-all active:scale-95 cursor-pointer hover:shadow-cyan-500/20"
          >
            <Smartphone size={15} />
            <span>Get Attendance App ($1/mo)</span>
            <ArrowRight size={14} />
          </Link>

          <Link
            href="/pricing"
            className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 py-2.5 text-xs font-semibold text-white border border-white/20 transition-all cursor-pointer"
          >
            <span>Calculate Team Pricing →</span>
          </Link>
        </div>

        {/* Social Proof Footer */}
        <div className="pt-2 border-t border-white/15 flex items-center justify-center gap-1.5 text-[10.5px] text-blue-200/90 relative z-10 text-center">
          <div className="flex text-amber-300">
            {"★".repeat(5)}
          </div>
          <span>Trusted by 250+ Cambodian Outlets</span>
        </div>
      </div>
    </aside>
  );
}
