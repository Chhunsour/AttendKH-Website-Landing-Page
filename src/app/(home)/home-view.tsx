"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Bookmark,
  Plane,
  Target,
  GraduationCap,
  ShoppingCart,
  Wallet,
  Eye,
  Timer,
  ShieldCheck,
  Check,
  Mail,
  Send,
  Building,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useSite } from "@/lib/i18n";
import { useHomeCopy, Rise, PhoneSlot, ArtSlot, Stars, CountUp, StoreBadge } from "@/components/home/parts";
import { Header } from "@/components/home/header";
import { HeroInteractiveDemo } from "@/components/home/hero-interactive-demo";
import { GeofenceDemo } from "@/components/home/geofence-demo";
import { HomepagePayrollSimulator } from "@/components/home/homepage-payroll-simulator";
import { LiveOperationsDemo } from "@/components/home/live-operations-demo";
import { CambodiaIdentitySection } from "@/components/home/cambodia-identity-section";
import { AttendanceRoiCalculator } from "@/components/home/roi-calculator";

const SHELL = "mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:px-14";
const HEADER_H = 72;

/* ------------------------------ hero ------------------------------ */

const BADGES = [
  { Icon: Wallet, pos: "left-[10%] top-[28%]", kind: "chip" as const },
  { Icon: Bookmark, pos: "right-[11%] top-[24%]", kind: "dark" as const },
  { Icon: Plane, pos: "left-[4%] top-[48%]", kind: "plain" as const },
  { Icon: Target, pos: "right-[4%] top-[48%]", kind: "plain" as const },
  { Icon: GraduationCap, pos: "left-[8%] top-[68%]", kind: "plain" as const },
  { Icon: ShoppingCart, pos: "right-[8%] top-[68%]", kind: "plain" as const },
];

function Hero() {
  const c = useHomeCopy();
  const { lang } = useSite();

  return (
    <section className="relative overflow-hidden bg-[#0052FF]" style={{ paddingTop: HEADER_H }}>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[38%] h-[150%] w-[190%] -translate-x-1/2 text-white"
        viewBox="0 0 1200 900"
        fill="none"
      >
        <ellipse cx="600" cy="560" rx="560" ry="420" stroke="currentColor" strokeOpacity="0.08" />
        <ellipse cx="600" cy="560" rx="420" ry="320" stroke="currentColor" strokeOpacity="0.07" />
        <ellipse cx="600" cy="560" rx="280" ry="215" stroke="currentColor" strokeOpacity="0.06" />
      </svg>

      <div className={`${SHELL} relative pb-16`}>
        {BADGES.map(({ Icon, pos, kind }, i) => (
          <span
            key={i}
            aria-hidden="true"
            className={`absolute z-10 hidden h-[52px] w-[52px] items-center justify-center rounded-full shadow-[0_10px_24px_rgba(0,30,90,0.22)] lg:flex ${pos} ${
              kind === "dark" ? "bg-[#101B33] text-white" : "bg-white text-[#0052FF]"
            }`}
          >
            {kind === "chip" ? (
              <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#EF4444] text-white">
                <Icon size={16} />
              </span>
            ) : (
              <Icon size={20} />
            )}
          </span>
        ))}

        <div className="relative z-10 pt-12 text-center sm:pt-14">
          <Link
            href="/attendance"
            className="group relative mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 p-1 pr-3.5 shadow-[0_8px_24px_rgba(0,30,90,0.18)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/18 hover:shadow-[0_12px_32px_rgba(0,30,90,0.28)]"
          >
            <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold tracking-wide text-white shadow-xs backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              </span>
              <span>{lang === "km" ? "ជំនាន់ថ្មី" : "AttendKH 2.0"}</span>
            </span>

            <span className="text-[12.5px] font-medium text-white/95 sm:text-[13px]">
              {lang === "km"
                ? "ប្រព័ន្ធគ្រប់គ្រងវត្តមាន GPS & ប្រាក់ខែស្វ័យប្រវត្តិសម្រាប់អាជីវកម្មកម្ពុជា"
                : "Attendance & Payroll SaaS for Cambodian Businesses"}
            </span>

            <ArrowRight
              size={13}
              className="text-white/70 transition-all duration-200 group-hover:translate-x-1 group-hover:text-white"
            />
          </Link>

          <h1 className="mx-auto max-w-[880px] text-[2.1rem] font-extrabold leading-[1.14] tracking-[-0.025em] text-white sm:text-[2.85rem] lg:text-[3.25rem]">
            {c.hero.titleLine1} <br className="hidden sm:inline" />
            {c.hero.titleLine2}
          </h1>

          <p className="mx-auto mt-4 max-w-[48ch] text-[14.5px] leading-relaxed text-white/85 sm:text-[16px]">{c.hero.sub}</p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[14px] font-bold text-[#141414] shadow-[0_8px_25px_rgba(0,40,130,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F0F4FF]"
            >
              {c.hero.cta}
            </Link>
            <Link
              href="/attendance"
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-[14px] font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white/20"
            >
              <span>{c.hero.secondary}</span>
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2.5">
            <Stars />
            <span className="text-[12.5px] font-medium text-white/90">{c.hero.rating}</span>
          </div>
        </div>

        {/* Realistic iPhone Interactive Demo */}
        <div className="relative z-20 mt-10 flex justify-center">
          <HeroInteractiveDemo />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ stats ------------------------------ */

function Stats() {
  const c = useHomeCopy();
  return (
    <section className={`${SHELL} py-12 sm:py-16`}>
      <div className="grid grid-cols-2 items-center gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-x-4">
        <p className="max-w-[210px] text-[12.5px] leading-[1.55] text-[#7C7C7C]">
          {c.stats.trustedPre} <span className="font-bold text-[#141414]">{c.stats.trustedNumber}</span>{" "}
          {c.stats.trustedPost}
        </p>

        {c.stats.items.map((s) => (
          <div key={s.value} className="flex items-center gap-3 lg:justify-center lg:border-l lg:border-[#EDEDED]">
            <CountUp
              value={s.value}
              className="text-[1.9rem] font-extrabold tracking-tight text-[#0052FF] tabular-nums sm:text-[2.15rem]"
            />
            <span className="text-[12.5px] leading-[1.35] text-[#141414] font-medium">
              {s.line1}
              <br />
              {s.line2}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- feature rows --------------------------- */

function FeatureRow({
  title,
  body,
  points,
  cta,
  href,
  phone,
  reversed,
}: {
  title: string;
  body: string;
  points: string[];
  cta: string;
  href: string;
  phone: string;
  reversed?: boolean;
}) {
  return (
    <section className={`${SHELL} py-10 sm:py-14`}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={reversed ? "lg:order-2" : ""}>
          <Rise>
            <h2 className="max-w-[18ch] text-[1.65rem] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#141414] sm:text-[2rem]">
              {title}
            </h2>
          </Rise>
          <Rise delay={0.06}>
            <p className="mt-4 max-w-[48ch] text-[14px] leading-[1.75] text-[#6B7280]">{body}</p>
          </Rise>
          <Rise delay={0.1}>
            <ul className="mt-5 space-y-2.5">
              {points.map((pt) => (
                <li key={pt} className="flex items-center gap-2.5 text-[13.5px] text-[#141414] font-medium">
                  <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#EDF2FE] text-[#0052FF]">
                    <Check size={12} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
          </Rise>
          <Rise delay={0.14}>
            <Link
              href={href}
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#0052FF] px-6 py-3 text-[13.5px] font-semibold text-white shadow-xs transition-colors hover:bg-[#0045D8]"
            >
              {cta}
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Rise>
        </div>

        <Rise delay={0.08} className={reversed ? "lg:order-1" : ""}>
          <div className="flex justify-center overflow-hidden rounded-[26px] bg-[#F8FAFC] border border-line p-6 shadow-md">
            <PhoneSlot label={phone} className="w-[240px] sm:w-[280px]" />
          </div>
        </Rise>
      </div>
    </section>
  );
}

/* ------------------------------ steps ------------------------------ */

function Steps() {
  const c = useHomeCopy();
  return (
    <section className={`${SHELL} py-14 sm:py-16`}>
      <Rise>
        <h2 className="text-[1.6rem] font-extrabold tracking-[-0.02em] text-[#141414] sm:text-[1.85rem]">
          {c.steps.title}
        </h2>
        <p className="mt-2.5 max-w-[48ch] text-[14px] leading-[1.75] text-[#6B7280]">{c.steps.sub}</p>
      </Rise>

      <ol className="mt-9 grid gap-5 md:grid-cols-3">
        {c.steps.items.map((s, i) => (
          <Rise key={s.n} delay={i * 0.06}>
            <li className="h-full rounded-2xl border border-line bg-paper p-7 shadow-xs transition-all hover:border-[#0052FF] hover:shadow-md">
              <span className="text-[12px] font-bold tracking-[0.14em] text-[#0052FF]">{s.n}</span>
              <h3 className="mt-4 text-[16px] font-bold text-[#141414]">{s.title}</h3>
              <p className="mt-2.5 text-[13px] leading-[1.7] text-[#6B7280]">{s.body}</p>
            </li>
          </Rise>
        ))}
      </ol>
    </section>
  );
}

/* --------------------------- why choose --------------------------- */

const WHY_ICONS = [MapPin, Eye, Timer, ShieldCheck];

function WhyChoose() {
  const c = useHomeCopy();
  return (
    <section id="features" className={`${SHELL} scroll-mt-24 py-14 sm:py-16`}>
      <Rise>
        <h2 className="text-[1.6rem] font-extrabold tracking-[-0.02em] text-[#141414] sm:text-[1.85rem]">
          {c.why.title}
        </h2>
      </Rise>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {c.why.cards.map((card, i) => {
          const Icon = WHY_ICONS[i];
          return (
            <Rise key={card.title} delay={(i % 2) * 0.06}>
              <article className="group h-full rounded-2xl border border-line bg-paper p-7 shadow-xs transition-all duration-300 hover:border-[#0052FF] hover:bg-[#EDF2FE]/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDF2FE] text-[#0052FF] shadow-xs transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-6 max-w-[34ch] text-[15.5px] font-bold leading-snug text-[#141414]">
                  {card.title}
                </h3>
                <p className="mt-2.5 max-w-[48ch] text-[13px] leading-[1.7] text-[#6B7280]">{card.body}</p>
              </article>
            </Rise>
          );
        })}
      </div>
    </section>
  );
}

/* --------------------------- testimonials --------------------------- */

type Review = { name: string; initials: string; quote: string; time: string; date: string };

function ReviewCard({ t }: { t: Review }) {
  return (
    <figure className="rounded-2xl border border-line bg-paper p-6 shadow-xs transition-all duration-300 hover:border-[#0052FF] hover:shadow-md">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0052FF] text-[12px] font-bold text-white shadow-xs"
        >
          {t.initials}
        </span>
        <div>
          <span className="block text-[13.5px] font-bold text-[#141414]">{t.name}</span>
          <Stars />
        </div>
      </div>

      <blockquote className="mt-4 text-[13px] leading-[1.75] text-[#4B5563]">{t.quote}</blockquote>

      <figcaption className="mt-5 flex items-center justify-between border-t border-line pt-3 text-[11px] font-mono text-[#9CA3AF]">
        <span>{t.time}</span>
        <span>{t.date}</span>
      </figcaption>
    </figure>
  );
}

function Testimonials() {
  const c = useHomeCopy();
  const r = c.testimonials.items;

  const columns = [
    [r[0], r[3]],
    [r[1], r[4]],
    [r[2]],
  ];

  return (
    <section id="testimonials" className={`${SHELL} scroll-mt-24 py-14 sm:py-16`}>
      <Rise>
        <div className="text-center">
          <h2 className="text-[1.6rem] font-extrabold tracking-[-0.02em] text-[#141414] sm:text-[1.85rem]">
            {c.testimonials.title}
          </h2>
          <span className="mt-3 inline-flex items-center gap-2">
            <Stars />
            <span className="text-[13px] font-medium text-[#6B7280]">{c.testimonials.summary}</span>
          </span>
        </div>
      </Rise>

      <div className="mt-9 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {columns.map((col, i) => (
          <Rise key={i} delay={i * 0.06} className="space-y-5">
            {col.map((t) => (
              <ReviewCard key={t.name} t={t} />
            ))}
          </Rise>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- pricing teaser --------------------------- */

function PricingTeaser() {
  const c = useHomeCopy();
  const p = c.pricingTeaser;
  return (
    <section className={`${SHELL} py-12 sm:py-16`}>
      <Rise>
        <div className="grid gap-8 rounded-3xl border border-line bg-paper px-8 py-10 sm:px-12 lg:grid-cols-[1.1fr_1fr] lg:items-center shadow-lg">
          <div>
            <span className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#0052FF]">
              {p.eyebrow}
            </span>
            <h2 className="mt-3 max-w-[22ch] text-[1.6rem] font-extrabold leading-tight tracking-[-0.02em] text-[#141414] sm:text-[1.9rem]">
              {p.title}
            </h2>
            <p className="mt-3 max-w-[46ch] text-[14px] leading-[1.75] text-[#6B7280]">{p.body}</p>
          </div>

          <div>
            <ul className="space-y-2.5">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-center gap-2.5 text-[14px] text-[#141414] font-medium">
                  <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#EDF2FE] text-[#0052FF]">
                    <Check size={12} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
            <Link
              href="/pricing"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#0052FF] px-6 py-3 text-[13.5px] font-semibold text-white shadow-xs transition-colors hover:bg-[#0045D8]"
            >
              {p.cta}
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Rise>
    </section>
  );
}

/* ------------------------------ cta ------------------------------ */

function GetStarted() {
  const c = useHomeCopy();
  return (
    <section className={`${SHELL} py-12 sm:py-16`}>
      <Rise>
        <div className="grid items-center gap-8 rounded-3xl bg-[#0052FF] px-8 py-12 sm:px-12 sm:py-14 lg:grid-cols-2 shadow-2xl text-white">
          <div>
            <h2 className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-[2.1rem]">
              {c.cta.title}
            </h2>
            <p className="mt-3 max-w-[36ch] text-[14.5px] leading-[1.7] text-white/85">{c.cta.sub}</p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-bold text-[#141414] shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#F0F4FF]"
            >
              {c.cta.button}
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mx-auto w-full max-w-[380px]">
            <ArtSlot label={c.cta.image} ratio="4 / 3" />
          </div>
        </div>
      </Rise>
    </section>
  );
}

/* ------------------------------ footer ------------------------------ */

function SocialIcon({ kind }: { kind: "facebook" | "x" }) {
  if (kind === "facebook") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3 0-1.3-.1-2.45-.1-2.4 0-4.05 1.5-4.05 4.2v2.2H7.5V13h2.7v8h3.3z" />
      </svg>
    );
  }
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.2 3h3.3l-7.2 8.2L21.8 21h-6.6l-4.3-5.6L5.9 21H2.6l7.7-8.8L2.4 3H9l3.9 5.2L17.2 3zm-1.2 16h1.8L8.1 4.9H6.2L16 19z" />
    </svg>
  );
}

function Footer() {
  const c = useHomeCopy();
  const f = c.footer;
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setNewsletterStatus(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source_page: "/" }),
      });
      const data = await res.json();
      if (res.ok) {
        setNewsletterStatus("Thank you for subscribing to Cambodia HR updates!");
        setEmail("");
      } else {
        setNewsletterStatus(data.error || "Subscription failed");
      }
    } catch {
      setNewsletterStatus("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#101524]">
      <div className={`${SHELL} py-14 sm:py-16`}>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[22px] font-extrabold tracking-tight text-white">AttendKH</p>
            <p className="text-xs text-slate-400 mt-1">Smart Attendance & Cambodian Payroll System</p>

            <address className="mt-5 space-y-2.5 text-[12.5px] not-italic leading-relaxed text-[#9CA3AF]">
              <span className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                {f.address}
              </span>
              <span className="flex items-center gap-2.5">
                <Mail size={14} className="shrink-0 text-brand" aria-hidden="true" />
                <a href={`mailto:${f.email}`} className="transition-colors hover:text-white">
                  {f.email}
                </a>
              </span>
              <span className="flex items-center gap-2.5">
                <Send size={14} className="shrink-0 text-sky-400" aria-hidden="true" />
                <a
                  href="https://t.me/attendkh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {f.telegram}
                </a>
              </span>
            </address>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://facebook.com/attendkh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AttendKH on Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:text-white hover:border-white"
              >
                <SocialIcon kind="facebook" />
              </a>
              <a
                href="https://x.com/attendkh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AttendKH on X"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:text-white hover:border-white"
              >
                <SocialIcon kind="x" />
              </a>
            </div>
          </div>

          {f.columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="md:col-span-2">
              <h2 className="text-[13px] font-semibold text-white">{col.title}</h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={`${col.title}-${l.label}`}>
                    <Link href={l.href} className="text-[12.5px] text-[#9CA3AF] transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="md:col-span-2">
            <h2 className="text-[13px] font-semibold text-white">{f.appsTitle}</h2>
            <div className="mt-4 flex flex-col items-start gap-2.5">
              <StoreBadge kind="apple" top={f.appStoreTop} name={f.appStoreName} />
              <StoreBadge kind="play" top={f.playTop} name={f.playName} />
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-[16px] font-semibold text-white">{f.newsletterTitle}</h2>
              <p className="mt-1.5 text-[12.5px] text-[#9CA3AF]">{f.newsletterSub}</p>
            </div>

            <div className="w-full max-w-[420px]">
              <form className="flex w-full items-center gap-2.5" onSubmit={handleSubscribe}>
                <label htmlFor="newsletter-email" className="sr-only">
                  {f.emailPlaceholder}
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={f.emailPlaceholder}
                  className="h-11 w-full rounded-full border border-white/20 bg-white/5 px-5 text-[13px] text-white placeholder:text-[#6E6E6E] focus:border-brand focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="h-11 shrink-0 rounded-full bg-[#0052FF] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#0045D8] disabled:opacity-50"
                >
                  {submitting ? "..." : f.subscribe}
                </button>
              </form>
              {newsletterStatus && (
                <p className="mt-2 text-xs font-mono text-emerald-400">{newsletterStatus}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {f.legal.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-[12px] text-[#9CA3AF] transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-[12px] text-[#9CA3AF]">{f.rights}</p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------ page ------------------------------ */

export function HomeView() {
  const c = useHomeCopy();

  return (
    <div className="mnf-page bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-[13px] focus:font-semibold focus:text-[#141414]"
      >
        {c.nav.skip}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />

        {/* Section: Live Geofence & Anti-Tamper Test */}
        <section className={`${SHELL} py-10 sm:py-14`}>
          <GeofenceDemo />
        </section>

        <FeatureRow
          title={c.featureOne.title}
          body={c.featureOne.body}
          points={c.featureOne.points}
          cta={c.featureOne.cta}
          href={c.featureOne.href}
          phone={c.featureOne.phone}
        />

        {/* Section: Compact Cambodian Payroll Simulator */}
        <section className={`${SHELL} py-10 sm:py-14`}>
          <HomepagePayrollSimulator />
        </section>

        <FeatureRow
          title={c.featureTwo.title}
          body={c.featureTwo.body}
          points={c.featureTwo.points}
          cta={c.featureTwo.cta}
          href={c.featureTwo.href}
          phone={c.featureTwo.phone}
          reversed
        />

        {/* Section: Live Operations Command Center */}
        <section className={`${SHELL} py-10 sm:py-14`}>
          <LiveOperationsDemo />
        </section>

        {/* Section: Engineered for Cambodia */}
        <section className={`${SHELL} py-10 sm:py-14`}>
          <CambodiaIdentitySection />
        </section>

        {/* Section: Attendance Cost & ROI Calculator */}
        <section className={`${SHELL} py-10 sm:py-14`}>
          <AttendanceRoiCalculator />
        </section>

        <Steps />
        <WhyChoose />
        <Testimonials />
        <PricingTeaser />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}
