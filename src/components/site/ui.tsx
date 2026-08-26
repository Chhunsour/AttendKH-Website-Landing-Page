"use client";

import Link from "next/link";
import Image from "next/image";
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
} from "lucide-react";
import { useSite } from "@/lib/i18n";
import { siteCopy, type SiteCopy } from "@/lib/site-copy";

export function useCopy(): SiteCopy {
  const { lang } = useSite();
  return siteCopy[lang];
}

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
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
      <h3 className="font-display mt-3 text-lg font-bold text-ink sm:text-xl">
        {question}
      </h3>
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
            <span>Employee: Sreymom Sok (ID: #AKH-084)</span>
            <span className="text-emerald-400">✓ Digital Signature Valid</span>
          </div>
        </div>
      ) : isBranch ? (
        /* Multi-Branch Console Visualizer */
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Building size={16} className="text-brand" />
              <span className="font-display text-xs font-bold text-white">Central Operations Console</span>
            </div>
            <span className="font-mono text-[10px] text-emerald-400">4 Branches Synced</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-auto py-2 text-xs">
            <div className="rounded-xl bg-white/5 border border-white/10 p-2.5">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-white">Tuol Kork HQ</span>
                <span className="font-mono text-[11px] text-emerald-400">18/18 In</span>
              </div>
              <span className="text-[10px] text-slate-400">Morning Shift • 50m Radius</span>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10 p-2.5">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-white">BKK1 Flagship</span>
                <span className="font-mono text-[11px] text-emerald-400">12/12 In</span>
              </div>
              <span className="text-[10px] text-slate-400">Split Shift • 85m Radius</span>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10 p-2.5">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-white">Siem Reap Outlet</span>
                <span className="font-mono text-[11px] text-amber-400">14/15 In</span>
              </div>
              <span className="text-[10px] text-slate-400">Pub Street • 100m Radius</span>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10 p-2.5">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-white">Sihanoukville Port</span>
                <span className="font-mono text-[11px] text-emerald-400">8/8 In</span>
              </div>
              <span className="text-[10px] text-slate-400">Yard Logistics • 200m Radius</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-slate-400">
            <span>Overall Attendance: 98.1%</span>
            <span>Overnight Shifts: Supported</span>
          </div>
        </div>
      ) : (
        /* Geofenced Clock-in Radar Mockup */
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-brand" />
              <span className="font-display text-xs font-bold text-white">GPS Geofence & Biometric Verification</span>
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
              <span className="block font-mono text-xs font-bold text-white">Anti-Mock Shield</span>
              <span className="text-[10px] text-slate-400">Blocks GPS Spoofers</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-slate-400">
            <span>Offline Resilient: Caches punches if network drops</span>
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

/** Blue page header used at the top of every page. */
export function PageHero({
  title,
  sub,
  children,
}: {
  title: string;
  sub: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand">
      <svg
        aria-hidden="true"
        className="signal-orbit pointer-events-none absolute left-1/2 top-1/2 h-[180%] w-[200%] -translate-x-1/2 -translate-y-1/2 text-white"
        viewBox="0 0 1200 600"
        fill="none"
      >
        <ellipse cx="600" cy="300" rx="540" ry="260" stroke="currentColor" strokeOpacity="0.07" />
        <ellipse cx="600" cy="300" rx="380" ry="180" stroke="currentColor" strokeOpacity="0.06" />
      </svg>
      <div className="relative mx-auto max-w-6xl px-5 pt-28 pb-14 sm:px-8 sm:pt-32 sm:pb-20">
        <Reveal>
          <h1 className="font-display max-w-3xl text-[2.1rem] font-bold leading-[1.12] tracking-[-0.025em] text-white sm:text-[2.9rem]">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-blue-100">{sub}</p>
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
    <section className="bg-brand">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-lg">
          <h2 className="font-display text-[1.7rem] font-bold leading-tight text-white sm:text-[2.1rem]">
            {title}
          </h2>
          {sub ? <p className="mt-2.5 text-[16px] leading-relaxed text-blue-100">{sub}</p> : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={href} variant="white">
            {cta || c.common.trial}
          </Button>
          <Button href="/contact" variant="ghost-white">
            {c.common.demo}
          </Button>
        </div>
      </div>
    </section>
  );
}
