"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { Camera, Image as ImageIcon } from "lucide-react";
import { useSite } from "@/lib/i18n";
import { homeCopy, type HomeCopy } from "@/lib/home-copy";

export function useHomeCopy(): HomeCopy {
  const { lang } = useSite();
  return homeCopy[lang];
}

import { motion } from "framer-motion";

export function Rise({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export interface ImageSlotProps {
  label: string;
  noteBadge?: string;
  subject?: string;
  instruction?: string;
  src?: string;
  alt?: string;
  aspectRatio?: string;
  tone?: "light" | "blue" | "dark";
  priority?: boolean;
  className?: string;
}

/**
 * Editorial "AttendKH field notes / evidence wall" media slot.
 *
 * - When `src` is passed, renders a high-res real image via `next/image` with accessible `alt`.
 * - When `src` is omitted, renders an intentional archival field-note placeholder frame
 *   with crop guides, subject recommendation, and replacement instruction.
 * - Contains NO fake UI, map, dashboard, chart, calculator, phone bezel, or fake metric data.
 */
export function ImageSlot({
  label,
  noteBadge = "FIELD NOTE",
  subject,
  instruction,
  src,
  alt,
  aspectRatio = "16 / 10",
  tone = "light",
  priority = false,
  className = "",
}: ImageSlotProps) {
  // Real image mode: Renders full photo seamlessly inside the editorial frame
  if (src) {
    return (
      <figure
        className={`motion-lift relative w-full overflow-hidden ${className}`}
        style={{ aspectRatio }}
      >
        <Image
          src={src}
          alt={alt || label}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
          className="object-contain"
        />
      </figure>
    );
  }

  // Placeholder Field Notes / Evidence Archive Frame
  const isBlue = tone === "blue";
  const isDark = tone === "dark";

  return (
    <div
      role="img"
      aria-label={`${noteBadge}: ${label}. ${subject || ""}`}
      className={`signal-frame motion-lift group relative flex w-full flex-col justify-between overflow-hidden rounded-2xl border-2 border-dashed transition-all duration-300 ${
        isBlue
          ? "border-white/30 bg-white/[0.08] text-white backdrop-blur-md shadow-2xl hover:border-white/50 hover:bg-white/[0.12]"
          : isDark
          ? "border-white/25 bg-white/[0.05] text-white shadow-xl backdrop-blur-xs hover:border-white/40 hover:bg-white/[0.08]"
          : "border-slate-300 bg-slate-50/80 text-slate-800 shadow-xs hover:border-[#0052FF]/60 hover:bg-[#EDF2FE]/40 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-100"
      } p-5 sm:p-6 ${className}`}
      style={{ aspectRatio }}
      >
      {/* Viewfinder corner crop frame */}
      <span aria-hidden="true" className={`signal-sweep pointer-events-none absolute inset-x-0 top-0 z-20 h-px ${isBlue || isDark ? "bg-white/60" : "bg-[#0052FF]/60"}`} />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-3 sm:inset-4 border border-dashed opacity-25 transition-opacity group-hover:opacity-40 ${
          isBlue || isDark ? "border-white" : "border-slate-900 dark:border-white"
        }`}
      />

      {/* Top Header Tag */}
      <div className="relative z-10 flex w-full items-center justify-between text-[11px] font-mono">
        <div className="inline-flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              isBlue ? "bg-white signal-pulse" : isDark ? "bg-sky-400" : "bg-[#0052FF]"
            }`}
          />
          <span
            className={`font-bold tracking-wider uppercase ${
              isBlue ? "text-white/90" : isDark ? "text-white/90" : "text-[#0052FF]"
            }`}
          >
            {noteBadge}
          </span>
        </div>
        <span
          className={`rounded px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase ${
            isBlue
              ? "bg-white/15 text-white/90"
              : isDark
              ? "bg-white/10 text-white/80"
              : "bg-slate-200/80 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          Ratio {aspectRatio.replace(/\s+/g, "")}
        </span>
      </div>

      {/* Center Framing Element */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-2 py-3 sm:py-4">
        <div
          className={`mb-3 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border shadow-sm transition-transform duration-300 group-hover:scale-105 ${
            isBlue
              ? "border-white/30 bg-white/15 text-white"
              : isDark
              ? "border-white/20 bg-white/10 text-white"
              : "border-[#0052FF]/25 bg-white text-[#0052FF] shadow-xs"
          }`}
        >
          <Camera size={24} strokeWidth={1.75} aria-hidden="true" />
        </div>

        <h3
          className={`text-[14px] sm:text-[15px] font-bold leading-tight max-w-[36ch] ${
            isBlue || isDark ? "text-white" : "text-[#0F172A]"
          }`}
        >
          {label}
        </h3>

        {subject && (
          <p
            className={`mt-1.5 text-[12px] sm:text-[12.5px] leading-relaxed max-w-[42ch] ${
              isBlue ? "text-white/75" : isDark ? "text-white/70" : "text-slate-600 dark:text-slate-400"
            }`}
          >
            {subject}
          </p>
        )}
      </div>

      {/* Bottom Footer Hint */}
      <div
        className={`relative z-10 flex w-full items-center justify-between border-t border-dashed pt-2.5 text-[10.5px] font-mono ${
          isBlue
            ? "border-white/20 text-white/60"
            : isDark
            ? "border-white/15 text-white/50"
            : "border-slate-200 text-slate-500 dark:border-slate-800 dark:text-slate-400"
        }`}
      >
        <span className="hidden sm:inline">AttendKH Evidence Archive</span>
        <span className="truncate sm:text-right">
          {instruction || 'Upload ready: pass src="..."'}
        </span>
      </div>
    </div>
  );
}

export function Stars() {
  return (
    <span className="mt-1 flex items-center gap-[2px]" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 20 20" fill="#F5B301">
          <path d="M10 1.5l2.47 5.26 5.53.79-4 4.03.94 5.72L10 14.6l-4.94 2.7.94-5.72-4-4.03 5.53-.79L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

export function StoreBadge({
  kind,
  top,
  name,
  tone = "dark",
}: {
  kind: "apple" | "play";
  top: string;
  name: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={`group inline-flex w-full min-w-0 items-center justify-center gap-2.5 rounded-[16px] px-3 py-2.5 select-none transition-all duration-200 hover:-translate-y-0.5 sm:w-auto sm:min-w-[168px] sm:justify-start sm:gap-3 sm:px-3.5 ${
        tone === "dark"
          ? "liquid-glass text-white"
          : "border border-line bg-white text-ink shadow-sm hover:border-[#0052FF]/40 hover:shadow-md"
      }`}
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[11px] transition-transform duration-200 group-hover:scale-105 sm:h-9 sm:w-9 ${
          tone === "dark" ? "bg-white/12" : "bg-[#EDF2FE]"
        }`}
      >
        {kind === "apple" ? (
          <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M16.36 12.72c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.83-.81-3-.79-1.54.02-2.96.9-3.75 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74s1.78.74 3 .72c1.24-.02 2.02-1.12 2.78-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.69zM14.1 5.9c.63-.77 1.06-1.83.94-2.9-.91.04-2.02.61-2.67 1.37-.58.68-1.09 1.77-.95 2.81 1.02.08 2.06-.52 2.68-1.28z" />
          </svg>
        ) : (
          <svg width="19" height="20" viewBox="0 0 24 26" aria-hidden="true">
            <path d="M3.3 1.2A1.7 1.7 0 0 0 2.7 2.5v21c0 .5.2 1 .6 1.3L14.7 13 3.3 1.2z" fill="#3B82F6" />
            <path d="M18.6 9.2 15 12.9l3.6 3.7 4.1-2.3c.9-.5.9-1.9 0-2.5l-4.1-2.6z" fill="#F5B301" />
            <path d="M3.3 24.8 15 13l3.6 3.6-13.2 7.6a1.7 1.7 0 0 1-2.1-.4z" fill="#10B981" />
            <path d="M3.3 1.2 18.6 9.2 15 12.9 3.3 1.2z" fill="#EF4444" />
          </svg>
        )}
      </span>
      <span className="text-left leading-tight">
        <span className="block whitespace-nowrap text-[8.5px] font-medium uppercase tracking-[0.06em] opacity-70 sm:text-[9px] sm:tracking-[0.08em]">{top}</span>
        <span className="mt-0.5 block whitespace-nowrap text-[13.5px] font-semibold tracking-[-0.02em] sm:text-[15px]">{name}</span>
      </span>
    </div>
  );
}
