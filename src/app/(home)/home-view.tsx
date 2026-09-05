"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Timer,
  ShieldCheck,
  Check,
  Mail,
  Send,
  Globe,
  Coins,
  FileCheck,
  WifiOff,
  Clock,
  Sparkles,
  Layers,
  Users,
  ReceiptText,
  Plus,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  FileSpreadsheet,
  Building,
  DollarSign,
  UploadCloud,
  Smartphone,
  BadgeCheck,
} from "lucide-react";
import { useSite } from "@/lib/i18n";
import { useHomeCopy, Rise, ImageSlot, StoreBadge } from "@/components/home/parts";
import { Header, Footer } from "@/components/site/chrome";
import { DirectAnswerBlock } from "@/components/site/ui";
import { IndustriesSection } from "@/components/home/industries-section";

const SHELL = "mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:px-14";
const HEADER_H = 72;

/* ------------------------------ hero ------------------------------ */

/**
 * Hero backdrop: gradient → light source → dot grid → accent glow → grain.
 * The grain matters as much as the colour — it kills the banding a tall
 * blue→navy gradient shows on wide screens.
 */
function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(168deg,#0B5CFF_0%,#0A47D6_45%,#07308F_100%)]" />

      {/* Single soft light behind the headline. */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_30%_0%,rgba(255,255,255,0.20),rgba(255,255,255,0)_65%)]" />

      {/* Dot grid — masked hollow in the middle so it rings the copy, never sits under it. */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(75%_55%_at_50%_42%,transparent_35%,#000_100%)]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.34) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Accent glows — cyan low-left, violet high-right, so the flat blue reads as depth. */}
      <div className="absolute -bottom-1/4 -left-[10%] h-[70%] w-[65%] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.30),transparent_70%)] blur-3xl" />
      <div className="absolute -right-[12%] top-[-15%] h-[65%] w-[55%] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.28),transparent_70%)] blur-3xl" />

      {/* Grain — kills the banding a wide blue gradient shows. */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}

/** Keep the largest headline text stable so it cannot create a late LCP. */
function HeroWord({ words }: { words: readonly string[] }) {
  return (
    <span className="inline-block align-bottom">
      <span className="word-swap inline-block whitespace-nowrap">
        {words[0]}
      </span>
    </span>
  );
}

/* Hero orbit. The ring, the chips and the phone shot share one 3D scene, so the
   browser depth-sorts them for real: the far half of the ring and the chips
   riding it pass behind the handsets, the near half crosses in front. Every
   transform reads the same animated angle, --yaw, off the shared ancestor, so a
   chip's counter-rotation cancels the ring's spin exactly — two independent
   animations would drift apart. */
const ORBIT_DUR = 38;
const ORBIT_TILT_X = 17;
const ORBIT_TILT_Z = -7;

/** Evenly spaced, so the composition stays balanced at every angle. */
const ORBIT_CHIPS = [MapPin, Users, Clock, Coins, ReceiptText, ShieldCheck];

function PhoneOrbit() {
  return (
    <div aria-hidden="true" className="orbit-stage hidden sm:block">
      <div
        className="orbit-ring"
        style={
          {
            transform: `rotateZ(${ORBIT_TILT_Z}deg) rotateX(${ORBIT_TILT_X}deg)`,
            // the chips read these back to cancel the tilt and face the viewer
            "--tilt-x": `${ORBIT_TILT_X}deg`,
            "--tilt-z": `${ORBIT_TILT_Z}deg`,
          } as CSSProperties
        }
      >
        {/* the ellipse is static — a circle spun about its own axis shows nothing */}
        <div className="orbit-path" />

        <div className="orbit-spin">
          {ORBIT_CHIPS.map((Icon, i) => {
            const angle = (i * 360) / ORBIT_CHIPS.length;
            return (
              <div
                key={i}
                className="orbit-chip"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(var(--orbit-r))`,
                  ["--angle" as string]: `${angle}deg`,
                }}
              >
                {/* unwind the ring's spin and tilt so the icon always faces the viewer */}
                <div className="orbit-face" style={{ transform: `rotateY(${-angle}deg)` }}>
                  <div className="orbit-face-spin">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const c = useHomeCopy();
  const { lang } = useSite();
  const isKm = lang === "km";

  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden text-white sm:min-h-[100svh]"
      style={{ paddingTop: HEADER_H }}
    >
      <HeroBackdrop />

      <div className={`${SHELL} relative flex min-h-0 flex-1 -translate-y-[4%] flex-col justify-center pt-12 sm:pt-16`}>
        <Rise className="relative z-20 mx-auto max-w-[820px] text-center">
          <h1 className="hero-headline mx-auto max-w-[1000px] text-balance text-[clamp(1.65rem,7.5vw,2.05rem)] font-extrabold leading-[1.14] tracking-[-0.035em] sm:text-[3.1rem] sm:leading-[1.06] lg:text-[3.6rem]">
            {isKm ? (
              <>
                <span>
                  {c.hero.titlePre} <HeroWord words={c.hero.titleRotate} />
                </span>
                <br />
                <span>
                  {c.hero.titlePost}{" "}
                  <span className="hero-brand-mark whitespace-nowrap">
                    Attend<span className="text-[#00C853]">KH</span>
                  </span>
                </span>
              </>
            ) : (
              <>
                {c.hero.titlePre}
                <br />{" "}
                <HeroWord words={c.hero.titleRotate} />
                <br className="sm:hidden" /> {c.hero.titlePost}{" "}
                <span className="hero-brand-mark whitespace-nowrap">
                  Attend<span className="text-[#00C853]">KH</span>
                </span>
              </>
            )}
          </h1>

          <p className="mx-auto mt-5 max-w-[52ch] text-balance text-[15.5px] leading-[1.7] text-white/80 sm:text-[17px]">
            {c.hero.sub}
          </p>

          {/* Grid, not flex-wrap: at 375px the two badges would wrap to two rows and
              eat a third of the fold. Two equal columns keep them on one line. */}
          <div className="mx-auto mt-5 sm:mt-7 grid max-w-[310px] xs:max-w-[340px] grid-cols-2 gap-2 sm:flex sm:max-w-none sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
            <StoreBadge kind="apple" top={c.footer.appStoreTop} name={c.footer.appStoreName} />
            <StoreBadge kind="play" top={c.footer.playTop} name={c.footer.playName} />
          </div>

          <p className="mx-auto mt-5 max-w-[34ch] text-[11.5px] leading-[1.6] text-white/60 sm:max-w-none sm:text-[12.5px]">
            {c.hero.rating}
          </p>
        </Rise>

        {/* Phone shot bleeds past the hero edge, and the Stats panel (40/72px of
            overlap) cuts it there. On mobile it also goes edge-to-edge: inside the
            gutter the two handsets were too small to read, and the old 34px bleed
            plus a 56px panel hid 43% of a shot only ~210px tall. */}
        <Rise delay={0.12} className="-mx-6 -mb-[16px] mt-9 w-[calc(100%+3rem)] max-w-none sm:mx-auto sm:-mb-[48px] sm:mt-12 sm:w-full sm:max-w-[860px]">
          <div className="orbit-scene" style={{ ["--orbit-dur" as string]: `${ORBIT_DUR}s` }}>
            {/* the wrapper carries the z = 0 plane, not the <img> — Chromium paints a
                replaced element unreliably when it holds the 3D transform itself */}
            <div className="orbit-plane hero-float">
              <Image
                src="/hero-section.webp"
                alt={c.hero.slotAlt}
                width={2520}
                height={1620}
                priority
                sizes="(max-width: 768px) 100vw, 860px"
                className="h-auto w-full"
              />
            </div>
            <PhoneOrbit />
          </div>
        </Rise>
      </div>
    </section>
  );
}

/* ------------------------------ stats ------------------------------ */

function Stats() {
  const c = useHomeCopy();
  return (
    /* Slides up over the hero on a rounded edge, so the phone shot is cut by a
       deliberate panel instead of the section's own straight bottom. The -mt and
       pt cancel, so nothing below moves; bg must be opaque (mist/60 would let the
       hero's blue through) and z-10 puts the panel above the hero's phone shot. */
    <section className="relative z-10 -mt-[40px] rounded-t-[28px] border-b border-line bg-[#FBFCFD] pt-[40px] shadow-[0_-18px_44px_-16px_rgba(7,48,143,0.22)] sm:-mt-[72px] sm:rounded-t-[44px] sm:pt-[72px]">
      <div className={`${SHELL} py-10 sm:py-12`}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <p className="max-w-[24ch] text-[13.5px] leading-[1.6] text-[#475569]">
            {c.stats.trustedPre} <span className="font-bold text-[#0F172A]">{c.stats.trustedNumber}</span>{" "}
            {c.stats.trustedPost}
          </p>

          <dl className="grid grid-cols-3 gap-x-8 gap-y-4 sm:gap-x-14">
            {c.stats.items.map((s) => (
              <div key={s.value} className="min-w-0">
                <dt className="text-[1.65rem] font-extrabold tracking-tight text-[#0F172A] tabular-nums [overflow-wrap:anywhere] sm:text-[1.95rem]">
                  {s.value}
                </dt>
                <dd className="mt-1 text-[12.5px] leading-[1.45] text-[#64748B]">
                  {s.line1} {s.line2}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* -------------------- 01. attendance verification -------------------- */

function AttendanceVerificationSection() {
  const c = useHomeCopy();

  return (
    <section id="verification" className={`${SHELL} scroll-mt-24 py-5 sm:py-8`}>
      <div className="grid grid-cols-2 items-center gap-3.5 sm:gap-8 lg:grid-cols-12 lg:gap-14">
        <div className="col-span-1 lg:col-span-6">
          <Rise>
            <h2 className="text-[13px] xs:text-[15px] sm:text-[1.65rem] lg:text-[2.25rem] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#0F172A]">
              {c.featureOne.title}
            </h2>
          </Rise>
          <Rise delay={0.06}>
            <p className="mt-1.5 sm:mt-4 max-w-[50ch] text-[9.5px] xs:text-[11px] sm:text-[13.5px] lg:text-[14.5px] leading-snug sm:leading-[1.75] text-[#475569]">
              {c.featureOne.body}
            </p>
          </Rise>
          <Rise delay={0.1}>
            <ul className="mt-2 sm:mt-6 space-y-1 xs:space-y-1.5 sm:space-y-3">
              {c.featureOne.points.map((pt) => (
                <li key={pt} className="flex items-center gap-1.5 sm:gap-3 text-[9px] xs:text-[10.5px] sm:text-[13.5px] lg:text-[14px] font-semibold text-[#0F172A]">
                  <span className="flex h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#EDF2FE] text-[#0052FF]">
                    <Check className="h-2 w-2 xs:h-2.5 xs:w-2.5 sm:h-3.5 sm:w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="truncate sm:overflow-visible">{pt}</span>
                </li>
              ))}
            </ul>
          </Rise>
          <Rise delay={0.14}>
            <Link
              href={c.featureOne.href}
              aria-label={`${c.featureOne.cta}: ${c.featureOne.title}`}
              className="group mt-2.5 sm:mt-8 inline-flex items-center gap-1 sm:gap-2 rounded-full bg-[#0052FF] px-2.5 py-1.5 xs:px-3.5 xs:py-2 sm:px-6 sm:py-3 text-[9.5px] xs:text-[11px] sm:text-[14px] font-semibold text-white shadow-xs transition-colors hover:bg-[#0043D6]"
            >
              {c.featureOne.cta}<span className="sr-only">: {c.featureOne.title}</span>
              <ArrowRight className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Rise>
        </div>

        <Rise delay={0.08} className="col-span-1 lg:col-span-6 flex justify-center">
          <div className="w-full">
            <ImageSlot
              noteBadge={c.featureOne.slotBadge}
              label={c.featureOne.slotLabel}
              subject={c.featureOne.slotSubject}
              instruction={c.featureOne.slotInstruction}
              src="/clockin-frame-3.webp"
              alt={c.featureOne.slotAlt}
              aspectRatio="32 / 27"
              tone="light"
            />
          </div>
        </Rise>
      </div>
    </section>
  );
}

/* -------------------- 02. dual-currency payroll -------------------- */

function PayrollSection() {
  const c = useHomeCopy();

  return (
    <section id="payroll" className={`${SHELL} scroll-mt-24 py-5 sm:py-8`}>
      <div className="grid grid-cols-2 items-center gap-3.5 sm:gap-8 lg:grid-cols-12 lg:gap-14">
        <Rise delay={0.08} className="col-span-1 lg:col-span-6 flex justify-center">
          <div className="w-full">
            <ImageSlot
              noteBadge={c.featureTwo.slotBadge}
              label={c.featureTwo.slotLabel}
              subject={c.featureTwo.slotSubject}
              instruction={c.featureTwo.slotInstruction}
              src="/payslip-frame-4.webp"
              alt={c.featureTwo.slotAlt}
              aspectRatio="32 / 27"
              tone="light"
            />
          </div>
        </Rise>

        <div className="col-span-1 lg:col-span-6">
          <Rise>
            <h2 className="text-[13px] xs:text-[15px] sm:text-[1.65rem] lg:text-[2.25rem] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#0F172A]">
              {c.featureTwo.title}
            </h2>
          </Rise>
          <Rise delay={0.06}>
            <p className="mt-1.5 sm:mt-4 max-w-[50ch] text-[9.5px] xs:text-[11px] sm:text-[13.5px] lg:text-[14.5px] leading-snug sm:leading-[1.75] text-[#475569]">
              {c.featureTwo.body}
            </p>
          </Rise>
          <Rise delay={0.1}>
            <ul className="mt-2 sm:mt-6 space-y-1 xs:space-y-1.5 sm:space-y-3">
              {c.featureTwo.points.map((pt) => (
                <li key={pt} className="flex items-center gap-1.5 sm:gap-3 text-[9px] xs:text-[10.5px] sm:text-[13.5px] lg:text-[14px] font-semibold text-[#0F172A]">
                  <span className="flex h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#EDF2FE] text-[#0052FF]">
                    <Check className="h-2 w-2 xs:h-2.5 xs:w-2.5 sm:h-3.5 sm:w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="truncate sm:overflow-visible">{pt}</span>
                </li>
              ))}
            </ul>
          </Rise>
          <Rise delay={0.14}>
            <Link
              href={c.featureTwo.href}
              aria-label={`${c.featureTwo.cta}: ${c.featureTwo.title}`}
              className="group mt-2.5 sm:mt-8 inline-flex items-center gap-1 sm:gap-2 rounded-full bg-[#0052FF] px-2.5 py-1.5 xs:px-3.5 xs:py-2 sm:px-6 sm:py-3 text-[9.5px] xs:text-[11px] sm:text-[14px] font-semibold text-white shadow-xs transition-colors hover:bg-[#0043D6]"
            >
              {c.featureTwo.cta}<span className="sr-only">: {c.featureTwo.title}</span>
              <ArrowRight className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Rise>
        </div>
      </div>
    </section>
  );
}

/* -------------------- 03. overtime & leave requests -------------------- */

function OvertimeLeaveSection() {
  const c = useHomeCopy();

  return (
    <section id="requests" className={`${SHELL} scroll-mt-24 py-5 sm:py-8`}>
      <div className="grid grid-cols-2 items-center gap-3.5 sm:gap-8 lg:grid-cols-12 lg:gap-14">
        <div className="col-span-1 lg:col-span-6">
          <Rise>
            <h2 className="text-[13px] xs:text-[15px] sm:text-[1.65rem] lg:text-[2.25rem] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#0F172A]">
              {c.otLeave.title}
            </h2>
          </Rise>
          <Rise delay={0.06}>
            <p className="mt-1.5 sm:mt-4 max-w-[50ch] text-[9.5px] xs:text-[11px] sm:text-[13.5px] lg:text-[14.5px] leading-snug sm:leading-[1.75] text-[#475569]">
              {c.otLeave.body}
            </p>
          </Rise>
          <Rise delay={0.1}>
            <ul className="mt-2 sm:mt-6 space-y-1 xs:space-y-1.5 sm:space-y-3">
              {c.otLeave.points.map((pt) => (
                <li key={pt} className="flex items-center gap-1.5 sm:gap-3 text-[9px] xs:text-[10.5px] sm:text-[13.5px] lg:text-[14px] font-semibold text-[#0F172A]">
                  <span className="flex h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#EDF2FE] text-[#0052FF]">
                    <Check className="h-2 w-2 xs:h-2.5 xs:w-2.5 sm:h-3.5 sm:w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="truncate sm:overflow-visible">{pt}</span>
                </li>
              ))}
            </ul>
          </Rise>
          <Rise delay={0.14}>
            <Link
              href={c.otLeave.href}
              aria-label={`${c.otLeave.cta}: ${c.otLeave.title}`}
              className="group mt-2.5 sm:mt-8 inline-flex items-center gap-1 sm:gap-2 rounded-full bg-[#0052FF] px-2.5 py-1.5 xs:px-3.5 xs:py-2 sm:px-6 sm:py-3 text-[9.5px] xs:text-[11px] sm:text-[14px] font-semibold text-white shadow-xs transition-colors hover:bg-[#0043D6]"
            >
              {c.otLeave.cta}<span className="sr-only">: {c.otLeave.title}</span>
              <ArrowRight className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Rise>
        </div>

        <Rise delay={0.08} className="col-span-1 lg:col-span-6 flex justify-center">
          <div className="w-full">
            <ImageSlot
              noteBadge={c.otLeave.slotBadge}
              label={c.otLeave.slotLabel}
              subject={c.otLeave.slotSubject}
              instruction={c.otLeave.slotInstruction}
              src="/ot-frame-5.webp"
              alt={c.otLeave.slotAlt}
              aspectRatio="32 / 27"
              tone="light"
            />
          </div>
        </Rise>
      </div>
    </section>
  );
}

/* -------------------- 04. cambodia fit section -------------------- */

const CAMBODIA_ICONS = [Globe, Coins, FileCheck, WifiOff];

/**
 * Full-bleed blue break in an otherwise white page. Reuses HeroBackdrop so the
 * gradient, dot grid, glows and grain are literally the hero's, not a lookalike.
 * The four capabilities read as a glass spec ledger with Khmer numerals, not cards.
 */
function CambodiaFitSection() {
  const c = useHomeCopy();

  return (
    <section className="relative overflow-hidden py-16 text-white sm:py-24">
      <HeroBackdrop />

      <div className={`relative ${SHELL}`}>
        {/* Editorial masthead: title left, standfirst right, hairline underneath. */}
        <Rise>
          <div className="grid gap-6 border-b border-white/20 pb-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
                <span className="h-px w-8 bg-white/60" aria-hidden="true" />
                <span>{c.cambodiaFit.badge}</span>
              </div>
              <h2 className="mt-4 text-[1.9rem] font-extrabold leading-[1.12] tracking-[-0.03em] sm:text-[2.6rem]">
                {c.cambodiaFit.title}
              </h2>
            </div>
            <p className="text-[14.5px] leading-relaxed text-white/75 lg:col-span-5">
              {c.cambodiaFit.sub}
            </p>
          </div>
        </Rise>

        <div className="mt-8 sm:mt-10 grid gap-8 lg:grid-cols-12 lg:gap-14">
          {/* Device floats in its own light, on top on mobile, right on desktop */}
          <Rise className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative flex justify-center lg:sticky lg:top-28">
              <div
                aria-hidden="true"
                className="absolute inset-x-2 top-4 bottom-4 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.30),transparent_68%)] blur-3xl"
              />
              <div className="relative w-full max-w-[200px] xs:max-w-[230px] sm:max-w-[290px] rotate-[-2deg] drop-shadow-[0_24px_50px_rgba(3,20,70,0.45)] transition-transform duration-500 hover:rotate-0">
                <ImageSlot
                  noteBadge={c.cambodiaFit.slotBadge}
                  label={c.cambodiaFit.slotLabel}
                  subject={c.cambodiaFit.slotSubject}
                  instruction={c.cambodiaFit.slotInstruction}
                  src="/calendar-section.webp"
                  alt={c.cambodiaFit.slotAlt}
                  aspectRatio="1446 / 2952"
                  tone="dark"
                />
              </div>
            </div>
          </Rise>

          {/* Glass spec ledger — 2-row grid (2 columns) below image on mobile, left on desktop. */}
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-2.5 sm:gap-3.5 lg:col-span-7">
            {c.cambodiaFit.items.map((item, i) => {
              const Icon = CAMBODIA_ICONS[i] || Layers;
              return (
                <Rise key={item.title} className="h-full">
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/15 bg-white/[0.07] p-3.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.12] sm:rounded-2xl sm:p-5">
                    <div>
                      <div className="flex items-center gap-2.5 sm:gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white shadow-xs transition-colors duration-300 group-hover:bg-white group-hover:text-[#0A47D6] sm:h-11 sm:w-11 sm:rounded-xl">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
                        </span>
                      </div>
                      <h3 className="mt-2.5 text-[12px] font-bold leading-snug sm:text-[15.5px]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[9.5px] leading-snug text-white/70 sm:mt-2 sm:text-[13px] sm:leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Rise>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- 05. impact timeline section -------------------- */

function ImpactSection() {
  const c = useHomeCopy();
  const { lang } = useSite();

  return (
    <section className={`${SHELL} py-14 sm:py-20`}>
      <Rise>
        <div className="max-w-[62ch]">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0052FF]">
            {c.impact.badge}
          </span>
          <h2 className="mt-3 text-[1.8rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0F172A] sm:text-[2.25rem]">
            {c.impact.title}
          </h2>
          <p className="mt-3 text-[14.5px] leading-[1.75] text-[#475569]">{c.impact.sub}</p>
        </div>
      </Rise>

      {/* Horizontal Phone Interface Image placed on top */}
      <Rise delay={0.06} className="mt-8 sm:mt-12 flex justify-center">
        <div className="relative w-full max-w-[1060px]">
          <Image
            src="/iphone-sleeping.webp"
            alt="AttendKH (Attend) Mobile Attendance Clock-in & HR Operations Interface on Smartphone"
            width={3893}
            height={1725}
            className="h-auto w-full object-contain"
            sizes="(max-width: 1200px) 100vw, 1060px"
          />
        </div>
      </Rise>

      {/* Segmented rail: 2-column grid (2 rows on mobile, 4 columns on desktop). */}
      <div className="mt-8 sm:mt-14 grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4">
        {c.impact.milestones.map((m, i) => (
          <Rise key={m.step} delay={i * 0.08} className="h-full">
            <div className="group relative h-full pt-4 sm:pt-6">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 rounded-full bg-line transition-colors duration-300 group-hover:bg-[#0052FF]"
              />
              <span
                aria-hidden="true"
                className="absolute -top-[3px] left-0 h-2 w-2 rounded-full bg-[#0052FF] ring-4 ring-white"
              />
              <span className="font-mono text-[10px] sm:text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#0052FF]">
                {m.step}
              </span>
              <h3 className="mt-2 text-[12.5px] sm:text-[16.5px] font-bold leading-[1.3] sm:leading-[1.35] tracking-[-0.01em] text-[#0F172A]">
                {m.title}
              </h3>
              <p className="mt-1.5 text-[9.5px] sm:text-[13px] leading-snug sm:leading-[1.7] text-[#475569]">
                {m.body}
              </p>
              <p className="mt-2.5 sm:mt-4 flex items-start gap-1 sm:gap-2 text-[9.5px] sm:text-[12.5px] font-semibold text-[#0F172A]">
                <Check className="mt-0.5 h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 text-[#0052FF]" strokeWidth={3} aria-hidden="true" />
                <span>{m.tag}</span>
              </p>
            </div>
          </Rise>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ steps ------------------------------ */

function Steps() {
  const c = useHomeCopy();
  const { lang } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  const [activeStep, setActiveStep] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const stepImages = [
    {
      src: "/steps/config-branch.png",
      alt: "AttendKH (Attend) Branch Setup & GPS Geofence Configuration in Cambodia",
      title: isKm ? "កំណត់សាខា និងកាំ GPS Geofence" : isZh ? "分店与 GPS 围栏配置界面" : "Branch & GPS Geofence Configuration",
    },
    {
      src: "/steps/payroll.png",
      alt: "AttendKH Employee Excel Import and Cambodian Payroll Setup",
      title: isKm ? "នាំចូលបុគ្គលិក និងរៀបចំប្រាក់ខែ" : isZh ? "员工花名册导入与薪酬核算" : "Employee Records & Payroll Setup",
    },
    {
      src: "/steps/review-and-approve.png",
      alt: "AttendKH Cambodian Payroll Review, NSSF & Overtime Approval Console",
      title: isKm ? "ផ្ទៀងផ្ទាត់ និងអនុម័តបើកប្រាក់ខែ" : isZh ? "考勤核算与一键发薪审批" : "Payroll Review & Approval Console",
    },
  ];

  const goToStep = (newIndex: number) => {
    setDirection(newIndex > activeStep ? 1 : -1);
    setActiveStep(newIndex);
  };

  const handleNext = () => {
    if (activeStep < stepImages.length - 1) {
      goToStep(activeStep + 1);
    } else {
      goToStep(0);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      goToStep(activeStep - 1);
    } else {
      goToStep(stepImages.length - 1);
    }
  };

  return (
    <section className="relative border-y border-[#E2E8F0] bg-white py-16 sm:py-24">
      <div className={`${SHELL} relative space-y-10 sm:space-y-12`}>
        {/* Clean Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EDF2FE] px-3.5 py-1 text-[12px] font-bold text-[#0052FF]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0052FF] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0052FF]"></span>
            </span>
            <span className="tracking-wider uppercase">{c.steps.badge}</span>
          </div>

          <h2 className="font-display text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl lg:text-[2.6rem] leading-[1.12]">
            {c.steps.title}
          </h2>

          <p className="text-[15px] leading-relaxed text-[#475569] sm:text-[16px]">
            {c.steps.sub}
          </p>
        </div>

        {/* 2-Column Interactive Rollout Studio */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          {/* Right Column (on desktop): Expanded Large Transparent Image Display with Touch Swipe Support */}
          <div className="order-1 lg:order-2 lg:col-span-8 flex flex-col items-center justify-center">
            <div className="relative w-full select-none">
              <div className="relative aspect-[10/7] min-h-[220px] w-full overflow-hidden sm:min-h-[340px] touch-pan-y">
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.div
                    key={activeStep}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 30 : -30, scale: 0.985 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: direction > 0 ? -30 : 30, scale: 0.985 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={(_e, { offset, velocity }) => {
                      const swipeThreshold = 40;
                      if (offset.x < -swipeThreshold || velocity.x < -300) {
                        handleNext();
                      } else if (offset.x > swipeThreshold || velocity.x > 300) {
                        handlePrev();
                      }
                    }}
                    className="relative h-full w-full cursor-grab active:cursor-grabbing"
                  >
                    <Image
                      src={stepImages[activeStep].src}
                      alt={stepImages[activeStep].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 880px"
                      className="object-contain drop-shadow-2xl pointer-events-none"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Clean, Simple & Premium Navigation Bar */}
            <div className="mt-4 sm:mt-5 flex w-full items-center justify-between gap-3 px-2 text-xs">
              {/* Smooth Animated Transit Indicator Dots */}
              <div className="flex items-center gap-2 rounded-full bg-slate-100/90 border border-slate-200/80 px-3 py-1.5 shadow-2xs">
                {stepImages.map((_, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => goToStep(idx)}
                      aria-label={`Go to step ${idx + 1}`}
                      className="group relative flex h-4 items-center justify-center p-0.5 cursor-pointer focus:outline-none"
                    >
                      <motion.span
                        layout
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                        className={`h-2 rounded-full transition-colors duration-200 ${
                          isActive
                            ? "w-7 bg-[#0052FF] shadow-xs shadow-blue-500/40"
                            : "w-2 bg-slate-300 group-hover:bg-slate-400"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Next & Previous Buttons */}
              <div className="flex items-center gap-2">
                {activeStep > 0 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-2xs transition-all cursor-pointer"
                  >
                    <span>{isKm ? "ថយក្រោយ" : isZh ? "上一步" : "Previous"}</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#0052FF] hover:bg-[#0043D6] px-4 py-1.5 font-semibold text-white shadow-[0_2px_8px_rgba(0,82,255,0.25)] hover:shadow-[0_4px_12px_rgba(0,82,255,0.35)] transition-all cursor-pointer"
                >
                  <span>
                    {activeStep === stepImages.length - 1
                      ? isKm
                        ? "ចាប់ផ្តើមឡើងវិញ"
                        : isZh
                        ? "重新开始"
                        : "Start Over"
                      : isKm
                      ? "បន្ទាប់"
                      : isZh
                      ? "下一步"
                      : "Next"}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Left Column (on desktop): Modern Vertical Stepper Rail (below image on mobile) */}
          <div className="order-2 lg:order-1 lg:col-span-4 relative">
            {/* Background connecting vertical line */}
            <div
              aria-hidden="true"
              className="absolute left-[28px] top-6 bottom-6 w-0.5 bg-slate-200 pointer-events-none"
            />

            <div className="space-y-2.5 sm:space-y-3 relative">
              {c.steps.items.map((step, i) => {
                const isActive = activeStep === i;
                const isCompleted = i < activeStep;

                return (
                  <button
                    key={step.n}
                    type="button"
                    onClick={() => setActiveStep(i)}
                    className={`group relative flex w-full items-start gap-3.5 sm:gap-4 rounded-2xl p-3 sm:p-4 text-left transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-white border border-slate-200/90 shadow-md shadow-slate-900/5 ring-1 ring-black/5"
                        : "bg-transparent hover:bg-white/60 border border-transparent"
                    }`}
                  >
                    {/* Node circle on the rail */}
                    <div
                      className={`relative z-10 flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full font-mono text-[11.5px] sm:text-[12.5px] font-extrabold transition-all duration-200 ${
                        isActive
                          ? "bg-[#0052FF] text-white shadow-md shadow-blue-500/25 ring-4 ring-blue-50"
                          : isCompleted
                          ? "bg-emerald-500 text-white shadow-xs"
                          : "bg-white border border-slate-300 text-slate-500 group-hover:border-slate-400 group-hover:text-slate-700"
                      }`}
                    >
                      {isCompleted ? <Check size={14} strokeWidth={3} /> : step.n}
                    </div>

                    {/* Step Content */}
                    <div className="min-w-0 flex-1 pt-0.5">
                      <div className="flex items-center justify-between gap-2">
                        <h3
                          className={`font-display text-[14px] sm:text-[15.5px] font-bold leading-snug tracking-tight transition-colors ${
                            isActive
                              ? "text-[#0F172A]"
                              : "text-slate-700 group-hover:text-[#0F172A]"
                          }`}
                        >
                          {step.title}
                        </h3>

                        {isActive && (
                          <span className="shrink-0 font-mono text-[10px] sm:text-[10.5px] font-bold text-[#0052FF] bg-[#EDF2FE] px-2 py-0.5 rounded-full">
                            Step 0{i + 1}
                          </span>
                        )}
                      </div>

                      <p
                        className={`mt-1 sm:mt-1.5 text-[12px] sm:text-[13px] leading-relaxed transition-colors ${
                          isActive
                            ? "text-[#475569]"
                            : "text-[#64748B] group-hover:text-[#475569]"
                        }`}
                      >
                        {step.body}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- faq --------------------------------- */

function FAQSection() {
  const c = useHomeCopy();
  const faq = c.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className={`${SHELL} scroll-mt-24 py-16 sm:py-24`}>
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Eyebrow, Headline, and Subtitle */}
        <Rise className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EDF2FE] px-3.5 py-1 text-[12px] font-bold text-[#0052FF]">
            <Sparkles size={13} className="text-[#0052FF]" />
            <span>{faq.badge}</span>
          </div>
          <h2 className="mt-4 text-[2rem] font-extrabold tracking-[-0.03em] text-[#0F172A] sm:text-[2.5rem] leading-[1.12]">
            {faq.title}
          </h2>
          <p className="mt-4 max-w-[34ch] text-[15px] leading-[1.7] text-[#475569]">
            {faq.summary}
          </p>

          <div className="mt-8 border-t border-line/80 pt-6">
            <p className="text-[13px] font-medium text-[#64748B]">
              {faq.contactPrompt}
            </p>
            <Link
              href="/contact"
              className="group mt-1.5 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#0052FF] transition-all hover:gap-2"
            >
              {faq.contactLink}
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Rise>

        {/* Right Column: Elevated Card with Accordion */}
        <Rise delay={0.08} className="lg:col-span-7 space-y-6">
          <DirectAnswerBlock
            question="What is AttendKH and how does it work in Cambodia?"
            answer="AttendKH is an all-in-one workforce attendance and automated payroll platform built for Cambodian businesses. Employees clock in via mobile GPS geofencing (50–200m) with live selfie verification. Attendance data syncs in real time with Cambodian labor law overtime (1.5× & 2.0×), NSSF contributions, and dual-currency (USD & KHR) payslips."
            facts={[
              { label: "Pricing", value: "$1.00 per user / month (All features included)" },
              { label: "Geofencing", value: "Configurable 50m–200m per branch" },
              { label: "Compliance", value: "MoLVT Overtime, Seniority Pay & NSSF lines" },
              { label: "Local Support", value: "Phnom Penh team via Telegram & phone" },
            ]}
          />
          <div className="relative overflow-hidden rounded-3xl border border-line bg-paper p-6 sm:p-8 shadow-xs transition-shadow duration-300 hover:shadow-md">
            {/* Subtle background ambient lighting */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-[#0052FF]/[0.05] to-transparent blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-gradient-to-tr from-[#0052FF]/[0.04] to-transparent blur-2xl"
            />

            <div className="relative z-10 divide-y divide-[#E6EBF3]">
              {faq.items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <motion.div
                    key={item.q}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className={`transition-colors duration-200 ${
                      i === 0 ? "pb-5" : "py-5"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      className="group flex w-full items-center justify-between gap-4 text-left cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#0052FF]/30 rounded-lg"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-[15.5px] sm:text-[17px] font-bold leading-snug transition-all duration-200 ${
                          isOpen
                            ? "text-[#0052FF]"
                            : "text-[#0F172A] group-hover:text-[#0052FF]"
                        }`}
                      >
                        {item.q}
                      </span>
                      <motion.div
                        animate={{
                          rotate: isOpen ? 180 : 0,
                          backgroundColor: isOpen ? "#EDF2FE" : "rgba(241, 245, 249, 0.7)",
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ type: "spring", stiffness: 360, damping: 24 }}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
                          isOpen
                            ? "border-[#0052FF]/20 text-[#0052FF]"
                            : "border-transparent text-[#94A3B8] group-hover:border-[#0052FF]/20 group-hover:text-[#0052FF] group-hover:bg-[#EDF2FE]"
                        }`}
                      >
                        <ChevronDown
                          size={17}
                          className="transition-colors duration-200"
                        />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="faq-content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                              height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                              opacity: { duration: 0.28, delay: 0.05, ease: "easeOut" },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: { duration: 0.26, ease: [0.16, 1, 0.3, 1] },
                              opacity: { duration: 0.16, ease: "easeIn" },
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{ y: -8, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -8, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                            className="pt-3 pr-4 sm:pr-8"
                          >
                            <p className="text-[14px] sm:text-[14.5px] leading-[1.75] text-[#475569]">
                              {item.a}
                            </p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Rise>
      </div>
    </section>
  );
}

/* --------------------------- pricing teaser --------------------------- */

function PricingTeaser({ priceMonthly }: { priceMonthly: number }) {
  const c = useHomeCopy();
  const p = c.pricingTeaser;
  const { lang } = useSite();
  const price = `$${priceMonthly.toFixed(2)}`;

  return (
    <section className={`${SHELL} py-14 sm:py-20`}>
      <Rise>
        <div className="relative overflow-hidden rounded-[32px] border border-line bg-gradient-to-br from-white via-[#FAFBFD] to-[#F3F6FC] p-8 sm:p-12 lg:p-14 shadow-sm">
          {/* Subtle decorative glow */}
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#0052FF]/5 blur-3xl pointer-events-none"
          />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-14 lg:items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EDF2FE] px-3.5 py-1 text-[12px] font-bold text-[#0052FF]">
                <span>{p.eyebrow}</span>
              </div>

              <h2 className="mt-4 text-[1.85rem] sm:text-[2.25rem] font-extrabold leading-tight tracking-[-0.03em] text-[#0F172A]">
                {lang === "km" ? `${price} ក្នុងម្នាក់ / ខែ` : lang === "zh" ? `每位员工 ${price} / 月` : `${price} per user, per month`}
              </h2>

              <p className="mt-3.5 max-w-[48ch] text-[15px] sm:text-[15.5px] leading-[1.7] text-[#475569]">
                {p.body}
              </p>

              {/* Feature Points Grid */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {p.points.map((pt) => (
                  <div key={pt} className="flex items-center gap-2.5 text-[13.5px] font-semibold text-[#1E293B]">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EDF2FE] text-[#0052FF]">
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Plan Card Column */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#0052FF]/20 bg-white p-6 sm:p-8 shadow-md">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0052FF] bg-[#EDF2FE] px-2.5 py-0.5 rounded-md">
                    All-Inclusive Plan
                  </span>
                  <span className="text-[12px] font-medium text-[#64748B]">
                    Billed Monthly
                  </span>
                </div>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A]">
                    {price}
                  </span>
                  <span className="text-[13.5px] font-medium text-[#64748B]">
                    / user / month
                  </span>
                </div>

                <p className="mt-1.5 text-[12.5px] text-[#64748B]">
                  No branch limit • Instant activation • No setup fee
                </p>

                <Link
                  href="/pricing"
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0052FF] px-6 py-3.5 text-[14px] font-bold text-white shadow-md transition-all duration-200 hover:bg-[#0043D6] hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>{p.cta}</span>
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <p className="mt-3 text-center text-[11.5px] text-[#94A3B8]">
                  Pay only for active staff • Cancel anytime
                </p>
              </div>
            </div>
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
    <section className={`${SHELL} py-14 sm:py-24 overflow-hidden`}>
      <Rise>
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-[1.85rem] font-extrabold leading-tight tracking-[-0.03em] text-[#0F172A] sm:text-[2.6rem]">
              {c.cta.title}
            </h2>
            <p className="mt-3 sm:mt-4 max-w-[40ch] text-[14.5px] sm:text-[15.5px] leading-[1.65] sm:leading-[1.7] text-[#475569]">
              {c.cta.sub}
            </p>

            {/* Mobile Image: on top of buttons */}
            <div className="my-6 flex w-full items-center justify-center lg:hidden">
              <Image
                src="/apple-products.webp"
                alt="AttendKH (Attend) GPS Attendance App on iPhone, iPad, and Mac in Cambodia"
                width={2000}
                height={873}
                className="h-auto w-full max-w-[460px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.10)]"
              />
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0052FF] px-7 py-3.5 text-[14px] font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0043D6]"
              >
                {c.cta.button}
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0F172A] shadow-2xs transition-colors hover:border-[#0052FF]/40 hover:bg-[#F5F8FF] hover:text-[#0052FF]"
              >
                {c.cta.pricingButton}
              </Link>
            </div>
          </div>

          {/* Desktop Image: right side */}
          <div className="relative hidden w-full items-center justify-center lg:flex lg:col-span-7">
            <div className="w-full max-w-[780px] lg:scale-105 xl:scale-115 lg:origin-center">
              <Image
                src="/apple-products.webp"
                alt="AttendKH (Attend) GPS Attendance App on iPhone, iPad, and Mac in Cambodia"
                width={2000}
                height={873}
                className="h-auto w-full object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.10)] transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </Rise>
    </section>
  );
}



/* ------------------------------ page ------------------------------ */

export function HomeView({ priceMonthly }: { priceMonthly: number }) {
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
      <main id="main" className="page-enter">
        <Hero />
        <Stats />
        <AttendanceVerificationSection />
        <PayrollSection />
        <OvertimeLeaveSection />
        <CambodiaFitSection />
        <IndustriesSection />
        <ImpactSection />
        <Steps />
        <FAQSection />
        <PricingTeaser priceMonthly={priceMonthly} />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}
