"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import {
  ImageIcon,
  MapPin,
  Camera,
  CheckCircle2,
  Building,
  DollarSign,
  Clock,
  ShieldCheck,
  TrendingUp,
  Users,
  Home,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useSite } from "@/lib/i18n";
import { siteCopy, type SiteCopy } from "@/lib/site-copy";

export function useCopy(): SiteCopy {
  const { lang } = useSite();
  return siteCopy[lang];
}

import { motion } from "framer-motion";

export function Reveal({
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
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Direct Answer Block for Search & AI Answer Engines (AEO / GEO).
 * Renders static, structured, quotable definitions and facts.
 */
export function DirectAnswerBlock({
  question,
  answer,
  facts,
  className = "",
}: {
  question: string;
  answer: string;
  facts?: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <section
      aria-label={`Quick Answer: ${question}`}
      className={`overflow-hidden rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xs ${className}`}
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
        <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
        <span>Quick answer</span>
      </div>
      <h2 className="font-display mt-3 text-lg font-bold text-ink sm:text-xl">
        {question}
      </h2>
      <p className="mt-2.5 text-[15px] leading-relaxed text-body sm:text-[15.5px]">
        {answer}
      </p>

      {facts && facts.length > 0 && (
        <dl className="mt-6 grid gap-4 border-t border-line pt-5 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((f) => (
            <div key={f.label} className="rounded-xl bg-mist/60 p-3.5 border border-line/60">
              <dt className="text-xs font-semibold text-slate-500">{f.label}</dt>
              <dd className="mt-1 font-display text-sm font-bold text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}

/**
 * High-fidelity styled artwork and product mockup slot.
 */
export function ImageSlot({
  label,
  src,
  ratio = "16 / 10",
  className = "",
  priority,
}: {
  label: string;
  src?: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <div
        className={`signal-frame group relative w-full overflow-hidden rounded-2xl border border-line bg-mist ${className}`}
        style={{ aspectRatio: ratio }}
      >
        <Image src={src} alt={label} fill sizes="(max-width: 1024px) 100vw, 50vw" priority={priority} className="object-cover" />
        <span aria-hidden="true" className="signal-sweep pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-white/60" />
      </div>
    );
  }

  const l = label.toLowerCase();
  const isPayslip = l.includes("payslip") || l.includes("payroll");
  const isBranch = l.includes("branch") || l.includes("console") || l.includes("shift");
  const isCustomer = l.includes("customer") || l.includes("team") || l.includes("about");

  return (
    <div
      role="img"
      aria-label={label}
      className={`signal-frame group relative w-full overflow-hidden rounded-2xl border border-line bg-slate-950 p-6 text-white shadow-xl ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {/* Background ambient grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />
      <span aria-hidden="true" className="signal-sweep pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-brand/70" />

      {isPayslip ? (
        /* Bilingual Cambodian Payslip Visualizer */
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-white font-bold text-xs">
                KH
              </span>
              <div>
                <p className="font-display text-xs font-bold text-white">AttendKH Bilingual Payslip</p>
                <p className="text-[10px] text-slate-400">August 2026 • Example payroll format</p>
              </div>
            </div>
            <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-400">
              USD + KHR
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 my-auto py-2 text-xs">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <span className="text-[10px] text-slate-400 block">Base Salary (22 days)</span>
              <span className="font-mono text-sm font-bold text-white">$450.00</span>
              <span className="text-[10px] font-mono text-blue-300 block">៛ 1,845,000</span>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <span className="text-[10px] text-slate-400 block">Overtime (6h @ 1.5×)</span>
              <span className="font-mono text-sm font-bold text-emerald-400">+$46.02</span>
              <span className="text-[10px] font-mono text-emerald-300 block">៛ 188,682</span>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <span className="text-[10px] text-slate-400 block">NSSF / ប.ស.ស. (Occupational)</span>
              <span className="font-mono text-sm font-bold text-slate-300">-$3.60</span>
              <span className="text-[10px] font-mono text-slate-400 block">៛ 14,760</span>
            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3">
              <span className="text-[10px] text-emerald-300 font-semibold block">Net Take-Home Pay</span>
              <span className="font-mono text-base font-extrabold text-emerald-400">$482.65</span>
              <span className="text-[10px] font-mono text-emerald-200 block">៛ 1,978,865 KHR</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-slate-400">
            <span>Employee: Sample record</span>
            <span className="text-emerald-400">Illustrative format</span>
          </div>
        </div>
      ) : isBranch ? (
        /* Illustrative multi-branch console */
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand/20 text-brand">
                <Building size={14} />
              </span>
              <div>
                <span className="font-display text-xs font-bold text-white block">Central Operations Console</span>
                <span className="text-[9.5px] font-mono text-slate-400 block">Example branch data</span>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Branch Overview
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-auto py-2.5 text-xs">
            <div className="group/item rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-all hover:border-brand/40 hover:bg-white/[0.08]">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-white truncate">Tuol Kork Branch</span>
                <span className="font-mono text-[11px] font-bold text-emerald-400 shrink-0 ml-1.5">On shift</span>
              </div>
              <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
                <span>Morning Shift • 50m Geofence</span>
                <span className="text-emerald-400 font-mono">Configured</span>
              </div>
            </div>

            <div className="group/item rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-all hover:border-brand/40 hover:bg-white/[0.08]">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-white truncate">BKK1 Branch</span>
                <span className="font-mono text-[11px] font-bold text-emerald-400 shrink-0 ml-1.5">Split shift</span>
              </div>
              <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
                <span>Split Shift • 65m Geofence</span>
                <span className="text-emerald-400 font-mono">Configured</span>
              </div>
            </div>

            <div className="group/item rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-all hover:border-brand/40 hover:bg-white/[0.08]">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-white truncate">Toul Tompoung Branch</span>
                <span className="font-mono text-[11px] font-bold text-emerald-400 shrink-0 ml-1.5">Flexible shift</span>
              </div>
              <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
                <span>Flexi Shift • 75m Geofence</span>
                <span className="text-emerald-400 font-mono">Configured</span>
              </div>
            </div>

            <div className="group/item rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-all hover:border-brand/40 hover:bg-white/[0.08]">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-white truncate">Siem Reap Branch</span>
                <span className="font-mono text-[11px] font-bold text-emerald-400 shrink-0 ml-1.5">Regional shift</span>
              </div>
              <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
                <span>Regional Lab • 100m Geofence</span>
                <span className="text-emerald-400 font-mono">Configured</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-slate-400">
            <span>Illustrative workflow • No live customer data</span>
            <span className="text-emerald-400 font-semibold">Review status</span>
          </div>
        </div>
      ) : (
        /* Geofenced Clock-in Radar Mockup */
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-brand" />
              <span className="font-display text-xs font-bold text-white">Example Punch Verification Controls</span>
            </div>
            <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-400">
              Verified Pin
            </span>
          </div>

          <div className="flex items-center justify-around my-auto py-3">
            <div className="text-center space-y-1">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/30">
                <MapPin size={22} />
              </div>
              <span className="block font-mono text-xs font-bold text-white">50–200m Geofence</span>
              <span className="text-[10px] text-slate-400">GPS Radius Check</span>
            </div>

            <div className="text-center space-y-1">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/30">
                <Camera size={22} />
              </div>
              <span className="block font-mono text-xs font-bold text-white">Live Selfie Check</span>
              <span className="text-[10px] text-slate-400">Recorded at punch</span>
            </div>

            <div className="text-center space-y-1">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                <ShieldCheck size={22} />
              </div>
              <span className="block font-mono text-xs font-bold text-white">Location Integrity Checks</span>
              <span className="text-[10px] text-slate-400">Flags suspected spoofing</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-slate-400">
            <span>Real-Time Sync: Instant live attendance stream</span>
            <span className="text-emerald-400">Selfie Review</span>
          </div>
        </div>
      )}
    </div>
  );
}

export function Section({
  children,
  tone = "white",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "white" | "mist";
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`${tone === "mist" ? "bg-mist" : "bg-paper"} border-t border-line ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">{children}</div>
    </section>
  );
}

export function SectionHead({
  title,
  sub,
  align = "left",
}: {
  title: string;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <h2 className="font-display text-[1.75rem] font-bold leading-tight tracking-[-0.02em] text-ink sm:text-[2.15rem]">
          {title}
        </h2>
      </Reveal>
      {sub ? (
        <Reveal delay={0.05}>
          <p className="mt-3 text-[16px] leading-relaxed text-body">{sub}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "white" | "ghost-white";
  className?: string;
  external?: boolean;
};

export function Button({ href, children, variant = "primary", className = "", external }: ButtonProps) {
  const styles = {
    primary: "bg-brand text-white hover:bg-brand-dark",
    outline: "border border-line bg-paper text-ink hover:border-slate-400",
    white: "bg-white text-brand hover:bg-brand-soft",
    "ghost-white": "border border-white/40 text-white hover:bg-white/10",
  }[variant];
  const cls = `motion-button inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-[15px] font-semibold transition-colors ${styles} ${className}`;

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/** Rich, modern PageHero with interactive SEO Breadcrumbs, Aurora Depth, and Micro-Geometry */
export function PageHero({
  title,
  sub,
  badge,
  breadcrumbs,
  children,
}: {
  title: string;
  sub: string;
  badge?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
}) {
  const pathname = usePathname();
  const { lang } = useSite();
  const isKm = lang === "km";

  // Auto-generate intelligent SEO breadcrumbs based on active route
  const activeBreadcrumbs: BreadcrumbItem[] =
    breadcrumbs ||
    (() => {
      if (!pathname || pathname === "/") return [];
      const segments = pathname.split("/").filter(Boolean);
      const items: BreadcrumbItem[] = [
        { label: isKm ? "ទំព័រដើម" : "Home", href: "/" },
      ];

      let currentPath = "";
      segments.forEach((seg, idx) => {
        currentPath += `/${seg}`;
        const isLast = idx === segments.length - 1;

        const labelMap: Record<string, { en: string; km: string }> = {
          about: { en: "About Us", km: "អំពីយើង" },
          attendance: { en: "Attendance", km: "វត្តមានការងារ" },
          payroll: { en: "Payroll", km: "ប្រាក់បៀវត្សរ៍" },
          "multi-branch": { en: "Multi-Branch", km: "ពហុសាខា" },
          pricing: { en: "Pricing", km: "តម្លៃសេវា" },
          customers: { en: "Customers", km: "អតិថិជន" },
          blog: { en: "Blog & Guides", km: "អត្ថបទ & មគ្គុទ្ទេសក៍" },
          support: { en: "Support Center", km: "មជ្ឈមណ្ឌលគាំទ្រ" },
          contact: { en: "Book a Demo", km: "ណាត់ជួបបង្ហាញប្រព័ន្ធ" },
          downloads: { en: "Downloads", km: "ទាញយកកម្មវិធី" },
          faq: { en: "FAQ", km: "សំណួរញឹកញាប់" },
          trust: { en: "Trust & Security", km: "សុវត្ថិភាព & ទំនុកចិត្ត" },
          solutions: { en: "Solutions", km: "ដំណោះស្រាយ" },
          retail: { en: "Retail", km: "លក់រាយ" },
          "restaurants-cafes": {
            en: "Restaurants & Cafes",
            km: "ភោជនីយដ្ឋាន & ហាងកាហ្វេ",
          },
          hospitality: {
            en: "Hospitality & Hotels",
            km: "បដិសណ្ឋារកិច្ច & សណ្ឋាគារ",
          },
          "construction-logistics": {
            en: "Construction & Logistics",
            km: "សំណង់ & ភស្តុភារកម្ម",
          },
          terms: { en: "Terms of Service", km: "លក្ខខណ្ឌប្រើប្រាស់" },
          "privacy-policy": {
            en: "Privacy Policy",
            km: "គោលការណ៍ឯកជនភាព",
          },
          upcoming: { en: "Upcoming Releases", km: "មុខងារនឹងមកដល់" },
        };

        const mapped = labelMap[seg];
        const label = mapped
          ? isKm
            ? mapped.km
            : mapped.en
          : seg
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase());

        items.push({
          label,
          href: isLast ? undefined : currentPath,
        });
      });

      return items;
    })();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#011C6B] via-[#0042CF] to-[#0052FF] text-white border-b border-blue-400/20 shadow-xs">
      {/* Dynamic Ambient Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
              id="pagehero-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pagehero-grid)" />
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

      <div className="relative mx-auto max-w-6xl px-5 pt-28 pb-14 sm:px-8 sm:pt-32 sm:pb-20">
        {/* Clean, Minimalist SEO Breadcrumbs */}
        {activeBreadcrumbs.length > 0 && (
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-4 inline-flex items-center">
              <ol
                className="flex flex-wrap items-center gap-2 text-[13px] font-medium text-blue-100/90"
                itemScope
                itemType="https://schema.org/BreadcrumbList"
              >
                {activeBreadcrumbs.map((b, i) => {
                  const isLast = i === activeBreadcrumbs.length - 1;
                  return (
                    <li
                      key={b.label}
                      className="flex items-center gap-2"
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/ListItem"
                    >
                      {i === 0 && (
                        <Home size={13} className="text-blue-200/80 shrink-0" />
                      )}
                      {b.href && !isLast ? (
                        <Link
                          href={b.href}
                          itemProp="item"
                          className="text-blue-100/80 hover:text-white hover:underline transition-colors"
                        >
                          <span itemProp="name">{b.label}</span>
                        </Link>
                      ) : (
                        <span
                          itemProp="name"
                          className="font-semibold text-white"
                        >
                          {b.label}
                        </span>
                      )}
                      <meta
                        itemProp="position"
                        content={String(i + 1)}
                      />
                      {!isLast && (
                        <ChevronRight
                          size={13}
                          className="text-blue-300/50 shrink-0"
                        />
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </Reveal>
        )}

        {/* Optional Clean Page Badge */}
        {badge && (
          <Reveal>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-200">
              <Sparkles size={14} className="text-cyan-300" />
              <span>{badge}</span>
            </div>
          </Reveal>
        )}

        <Reveal delay={0.04}>
          <h1 className="font-display max-w-3xl text-[2.2rem] font-bold leading-[1.14] tracking-[-0.03em] text-white sm:text-[3rem] drop-shadow-xs">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-xl text-[16.5px] sm:text-[17.5px] leading-relaxed text-blue-100/90 font-normal">
            {sub}
          </p>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function FeatureList({
  items,
  columns = 3,
}: {
  items: { title: string; desc: string }[];
  columns?: 2 | 3;
}) {
  return (
    <ul className={`mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}>
      {items.map((f, i) => (
        <Reveal key={f.title} delay={Math.min(i, 3) * 0.05}>
          <li>
            <h3 className="text-[16px] font-semibold text-ink">{f.title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-body">{f.desc}</p>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}

export function CtaBand({
  title,
  sub,
  cta,
  href = "/contact",
}: {
  title: string;
  sub?: string;
  cta?: string;
  href?: string;
}) {
  const c = useCopy();
  return (
    <section className="bg-brand relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between relative z-10">
        <div className="max-w-xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-xs font-bold text-white shadow-xs backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00C853] animate-pulse" />
            <span>$1.00 / employee / month • No setup fee • Cancel anytime</span>
          </div>
          <h2 className="font-display text-[1.7rem] font-bold leading-tight text-white sm:text-[2.1rem]">
            {title}
          </h2>
          {sub ? <p className="mt-2.5 text-[15.5px] leading-relaxed text-blue-100">{sub}</p> : null}
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <Button href={href} variant="white">
            {cta || c.common.trial}
          </Button>
          <Button href="/pricing" variant="ghost-white">
            {c.nav.pricing}
          </Button>
        </div>
      </div>
    </section>
  );
}
