"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Smartphone,
  CheckCircle2,
  MapPin,
  Camera,
  Building,
  Clock,
  ShieldCheck,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import { useSite } from "@/lib/i18n";
import { homeCopy, type HomeCopy } from "@/lib/home-copy";

export function useHomeCopy(): HomeCopy {
  const { lang } = useSite();
  return homeCopy[lang];
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function Rise({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * High-fidelity styled iPhone Mockup for feature previews.
 */
export function PhoneSlot({
  label,
  src,
  className = "",
  priority,
}: {
  label: string;
  src?: string;
  className?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <div className={`relative ${className}`} style={{ aspectRatio: "9 / 19.5" }}>
        <Image src={src} alt={label} fill sizes="320px" priority={priority} className="object-contain" />
      </div>
    );
  }

  const isPayroll = label.toLowerCase().includes("payroll");

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden rounded-[2.2rem] border-[5px] border-slate-900 bg-slate-900 shadow-2xl ${className}`}
      style={{ aspectRatio: "9 / 19" }}
    >
      {/* Dynamic Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 h-3.5 w-20 rounded-full bg-black flex items-center justify-between px-1.5">
        <div className="h-1.5 w-1.5 rounded-full bg-slate-800" />
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
      </div>

      {/* Screen Mockup Interior */}
      <div className="flex h-full flex-col justify-between bg-slate-950 px-3.5 pt-8 pb-4 text-white">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2.5">
            <span>AttendKH Mobile</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Online</span>
            </span>
          </div>

          {isPayroll ? (
            /* Payroll Summary UI */
            <div className="space-y-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-2.5">
                <span className="text-[10px] text-slate-400">August 2026 Payslip</span>
                <p className="font-mono text-lg font-bold text-white mt-0.5">$486.25</p>
                <span className="text-[9.5px] font-mono text-blue-300">៛ 1,993,625 KHR</span>
              </div>

              <div className="space-y-1.5 text-[10px]">
                <div className="flex justify-between rounded-lg bg-slate-900 p-1.5">
                  <span className="text-slate-400">Base Salary (22d)</span>
                  <span className="font-mono">$450.00</span>
                </div>
                <div className="flex justify-between rounded-lg bg-slate-900 p-1.5 text-emerald-400">
                  <span>Overtime (6h @ 1.5×)</span>
                  <span className="font-mono">+$46.02</span>
                </div>
                <div className="flex justify-between rounded-lg bg-slate-900 p-1.5 text-rose-400">
                  <span>Late Deductions (20m)</span>
                  <span className="font-mono">-$9.77</span>
                </div>
              </div>

              <div className="rounded-lg bg-emerald-500/20 border border-emerald-500/30 p-2 text-center text-[10px] text-emerald-300 font-semibold">
                ✓ Approved for Bank Payment
              </div>
            </div>
          ) : (
            /* Attendance Clock-in UI */
            <div className="space-y-2.5">
              <div className="rounded-xl border border-white/10 bg-white/5 p-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand text-white">
                    <MapPin size={12} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white">BKK1 Branch</p>
                    <p className="text-[9.5px] text-emerald-400 font-mono">Inside 50m Radius</p>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full border-2 border-emerald-400 bg-slate-800 flex items-center justify-center">
                <Camera size={22} className="text-slate-400" />
                <span className="absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <CheckCircle2 size={10} />
                </span>
              </div>

              <div className="rounded-xl bg-brand py-2 text-center text-[11px] font-bold text-white shadow-xs">
                ✓ Clock-In Verified
              </div>
            </div>
          )}
        </div>

        <div className="text-center text-[9px] font-mono text-slate-500">
          AttendKH Anti-Mock GPS • Encrypted
        </div>
      </div>
    </div>
  );
}

/**
 * High-fidelity styled Graphic/Dashboard Preview Slot.
 */
export function ArtSlot({
  label,
  src,
  ratio = "4 / 3",
  className = "",
}: {
  label: string;
  src?: string;
  ratio?: string;
  className?: string;
}) {
  if (src) {
    return (
      <div className={`relative w-full ${className}`} style={{ aspectRatio: ratio }}>
        <Image src={src} alt={label} fill sizes="(max-width: 1024px) 90vw, 420px" className="object-contain" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative w-full overflow-hidden rounded-2xl border border-white/20 bg-slate-900/90 p-5 text-white shadow-2xl backdrop-blur-md ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-display font-bold">Multi-Branch Operations</span>
        </div>
        <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10.5px] text-blue-300">
          4 Locations Live
        </span>
      </div>

      <div className="mt-3.5 space-y-2.5 text-xs">
        <div className="flex items-center justify-between rounded-xl bg-white/5 p-2.5">
          <div className="flex items-center gap-2">
            <Building size={14} className="text-brand" />
            <span className="font-semibold">Tuol Kork HQ</span>
          </div>
          <span className="font-mono text-emerald-400">18/18 Present</span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-white/5 p-2.5">
          <div className="flex items-center gap-2">
            <Building size={14} className="text-brand" />
            <span className="font-semibold">BKK1 Flagship</span>
          </div>
          <span className="font-mono text-emerald-400">12/12 Present</span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-white/5 p-2.5">
          <div className="flex items-center gap-2">
            <Building size={14} className="text-brand" />
            <span className="font-semibold">Siem Reap Branch</span>
          </div>
          <span className="font-mono text-amber-400">14/15 (1 late)</span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/10 pt-2.5">
        <span>Dual Currency: USD + KHR</span>
        <span className="text-emerald-400">98% Punctuality</span>
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

export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState<string | null>(null);

  const match = /^([\d]+(?:\.[\d]+)?)(.*)$/.exec(value);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

  useEffect(() => {
    if (target === null || !inView || reduce) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / 1300);
      const eased = 1 - Math.pow(1 - p, 3);
      setShown((target * eased).toFixed(decimals));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, decimals, reduce]);

  if (target === null) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {shown === null ? value : `${shown}${suffix}`}
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
      className={`inline-flex items-center gap-2.5 rounded-xl border px-3.5 py-2 select-none ${
        tone === "dark"
          ? "border-white/20 bg-white/5 text-white"
          : "border-line bg-mist text-ink"
      }`}
    >
      {kind === "apple" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M16.36 12.72c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.83-.81-3-.79-1.54.02-2.96.9-3.75 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74s1.78.74 3 .72c1.24-.02 2.02-1.12 2.78-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.69zM14.1 5.9c.63-.77 1.06-1.83.94-2.9-.91.04-2.02.61-2.67 1.37-.58.68-1.09 1.77-.95 2.81 1.02.08 2.06-.52 2.68-1.28z" />
        </svg>
      ) : (
        <svg width="16" height="18" viewBox="0 0 24 26" aria-hidden="true">
          <path d="M3.3 1.2A1.7 1.7 0 0 0 2.7 2.5v21c0 .5.2 1 .6 1.3L14.7 13 3.3 1.2z" fill="#3B82F6" />
          <path d="M18.6 9.2 15 12.9l3.6 3.7 4.1-2.3c.9-.5.9-1.9 0-2.5l-4.1-2.6z" fill="#F5B301" />
          <path d="M3.3 24.8 15 13l3.6 3.6-13.2 7.6a1.7 1.7 0 0 1-2.1-.4z" fill="#10B981" />
          <path d="M3.3 1.2 18.6 9.2 15 12.9 3.3 1.2z" fill="#EF4444" />
        </svg>
      )}
      <span className="text-left leading-tight">
        <span className="block text-[9px] uppercase tracking-wide opacity-70">{top}</span>
        <span className="block text-[12px] font-semibold">{name}</span>
      </span>
    </div>
  );
}
