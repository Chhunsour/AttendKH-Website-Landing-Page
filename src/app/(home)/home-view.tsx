"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Eye,
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
} from "lucide-react";
import { useSite } from "@/lib/i18n";
import { useHomeCopy, Rise, ImageSlot, StoreBadge } from "@/components/home/parts";
import { Header, Footer } from "@/components/site/chrome";

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

/** Hero headline word that cycles through what the app actually manages. */
function RotatingWord({ words }: { words: readonly string[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 3200);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="inline-block align-bottom">
      <span key={words[i]} className="word-swap inline-block whitespace-nowrap">
        {words[i]}
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

  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden text-white sm:min-h-[100svh]"
      style={{ paddingTop: HEADER_H }}
    >
      <HeroBackdrop />

      <div className={`${SHELL} relative flex min-h-0 flex-1 -translate-y-[4%] flex-col justify-center pt-12 sm:pt-16`}>
        <Rise className="relative z-20 mx-auto max-w-[820px] text-center">
          <h1 className="hero-headline mx-auto max-w-[1000px] text-balance text-[2.3rem] font-extrabold leading-[1.06] tracking-[-0.035em] sm:text-[3.1rem] lg:text-[3.6rem]">
            {c.hero.titlePre}
            <br className="hidden sm:block" />{" "}
            <RotatingWord words={c.hero.titleRotate} /> {c.hero.titlePost}{" "}
            <span className="hero-brand-mark whitespace-nowrap">
              Attend<span className="text-[#00C853]">KH</span>
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-[52ch] text-balance text-[15.5px] leading-[1.7] text-white/80 sm:text-[17px]">
            {c.hero.sub}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <StoreBadge kind="apple" top={c.footer.appStoreTop} name={c.footer.appStoreName} />
            <StoreBadge kind="play" top={c.footer.playTop} name={c.footer.playName} />
          </div>

        </Rise>

        {/* Phone shot bleeds past the hero edge. The Stats panel now overlaps the
            hero by 56/72px and cuts the shot there, so the bleed drops by the same
            amount — otherwise the panel would eat that much more of the handsets. */}
        <Rise delay={0.12} className="mx-auto -mb-[34px] mt-10 w-full max-w-[860px] sm:-mb-[48px] sm:mt-12">
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
                unoptimized
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
    <section className="relative z-10 -mt-[56px] rounded-t-[32px] border-b border-line bg-[#FBFCFD] pt-[56px] shadow-[0_-18px_44px_-16px_rgba(7,48,143,0.22)] sm:-mt-[72px] sm:rounded-t-[44px] sm:pt-[72px]">
      <div className={`${SHELL} py-10 sm:py-12`}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <p className="max-w-[24ch] text-[13.5px] leading-[1.6] text-[#475569]">
            {c.stats.trustedPre} <span className="font-bold text-[#0F172A]">{c.stats.trustedNumber}</span>{" "}
            {c.stats.trustedPost}
          </p>

          <dl className="grid grid-cols-3 gap-x-8 gap-y-4 sm:gap-x-14">
            {c.stats.items.map((s) => (
              <div key={s.value}>
                <dt className="text-[1.65rem] font-extrabold tracking-tight text-[#0F172A] tabular-nums sm:text-[1.95rem]">
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
    <section id="verification" className={`${SHELL} scroll-mt-24 py-4 sm:py-6`}>
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <Rise>
            <h2 className="text-[1.8rem] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#0F172A] sm:text-[2.25rem]">
              {c.featureOne.title}
            </h2>
          </Rise>
          <Rise delay={0.06}>
            <p className="mt-4 max-w-[50ch] text-[14.5px] leading-[1.75] text-[#475569]">
              {c.featureOne.body}
            </p>
          </Rise>
          <Rise delay={0.1}>
            <ul className="mt-6 space-y-3">
              {c.featureOne.points.map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-[14px] font-semibold text-[#0F172A]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EDF2FE] text-[#0052FF]">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
          </Rise>
          <Rise delay={0.14}>
            <Link
              href={c.featureOne.href}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#0052FF] px-6 py-3 text-[14px] font-semibold text-white shadow-xs transition-colors hover:bg-[#0043D6]"
            >
              {c.featureOne.cta}
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Rise>
        </div>

        <Rise delay={0.08} className="lg:col-span-6 flex justify-center">
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
    <section id="payroll" className={`${SHELL} scroll-mt-24 py-4 sm:py-6`}>
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <Rise delay={0.08} className="lg:col-span-6 flex justify-center order-2 lg:order-1">
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

        <div className="lg:col-span-6 order-1 lg:order-2">
          <Rise>
            <h2 className="text-[1.8rem] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#0F172A] sm:text-[2.25rem]">
              {c.featureTwo.title}
            </h2>
          </Rise>
          <Rise delay={0.06}>
            <p className="mt-4 max-w-[50ch] text-[14.5px] leading-[1.75] text-[#475569]">
              {c.featureTwo.body}
            </p>
          </Rise>
          <Rise delay={0.1}>
            <ul className="mt-6 space-y-3">
              {c.featureTwo.points.map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-[14px] font-semibold text-[#0F172A]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EDF2FE] text-[#0052FF]">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
          </Rise>
          <Rise delay={0.14}>
            <Link
              href={c.featureTwo.href}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#0052FF] px-6 py-3 text-[14px] font-semibold text-white shadow-xs transition-colors hover:bg-[#0043D6]"
            >
              {c.featureTwo.cta}
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
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
    <section id="requests" className={`${SHELL} scroll-mt-24 py-4 sm:py-6`}>
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <Rise>
            <h2 className="text-[1.8rem] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#0F172A] sm:text-[2.25rem]">
              {c.otLeave.title}
            </h2>
          </Rise>
          <Rise delay={0.06}>
            <p className="mt-4 max-w-[50ch] text-[14.5px] leading-[1.75] text-[#475569]">
              {c.otLeave.body}
            </p>
          </Rise>
          <Rise delay={0.1}>
            <ul className="mt-6 space-y-3">
              {c.otLeave.points.map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-[14px] font-semibold text-[#0F172A]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EDF2FE] text-[#0052FF]">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
          </Rise>
          <Rise delay={0.14}>
            <Link
              href={c.otLeave.href}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#0052FF] px-6 py-3 text-[14px] font-semibold text-white shadow-xs transition-colors hover:bg-[#0043D6]"
            >
              {c.otLeave.cta}
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Rise>
        </div>

        <Rise delay={0.08} className="lg:col-span-6 flex justify-center">
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

function CambodiaFitSection() {
  const c = useHomeCopy();

  return (
    <section className={`${SHELL} py-14 sm:py-20`}>
      <Rise>
        <div className="overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-[#EDF2FE]/50 via-white to-white p-6 sm:p-10 lg:p-12 shadow-md">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0052FF] px-3.5 py-1 text-[12px] font-bold text-white shadow-xs">
                <span>{c.cambodiaFit.badge}</span>
              </div>
              <h2 className="mt-4 text-[1.75rem] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#0F172A] sm:text-[2.15rem]">
                {c.cambodiaFit.title}
              </h2>
              <p className="mt-3.5 text-[14.5px] leading-relaxed text-[#475569]">
                {c.cambodiaFit.sub}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {c.cambodiaFit.items.map((item, i) => {
                  const Icon = CAMBODIA_ICONS[i] || Layers;
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-line bg-white p-4 shadow-2xs transition-all hover:border-[#0052FF]"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EDF2FE] text-[#0052FF] mb-3 shadow-2xs">
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <h3 className="text-[14.5px] font-bold text-[#0F172A]">{item.title}</h3>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-[#64748B]">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[265px]">
                <ImageSlot
                  noteBadge={c.cambodiaFit.slotBadge}
                  label={c.cambodiaFit.slotLabel}
                  subject={c.cambodiaFit.slotSubject}
                  instruction={c.cambodiaFit.slotInstruction}
                  src="/calendar-section.webp"
                  alt={c.cambodiaFit.slotAlt}
                  aspectRatio="1446 / 2952"
                  tone="light"
                />
              </div>
            </div>
          </div>
        </div>
      </Rise>
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

      {/* Segmented rail: each milestone owns one length of the progress bar. */}
      <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {c.impact.milestones.map((m, i) => (
          <Rise key={m.step} delay={i * 0.08}>
            <div className="group relative h-full pt-6">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 rounded-full bg-line transition-colors duration-300 group-hover:bg-[#0052FF]"
              />
              <span
                aria-hidden="true"
                className="absolute -top-[3px] left-0 h-2 w-2 rounded-full bg-[#0052FF] ring-4 ring-white"
              />
              <span className="font-mono text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#0052FF]">
                {m.step}
              </span>
              <h3 className="mt-3 text-[16.5px] font-bold leading-[1.35] tracking-[-0.01em] text-[#0F172A]">
                {m.title}
              </h3>
              <p className="mt-2.5 text-[13px] leading-[1.7] text-[#475569]">{m.body}</p>
              <p className="mt-4 flex items-start gap-2 text-[12.5px] font-semibold text-[#0F172A]">
                <Check size={14} strokeWidth={3} className="mt-0.5 shrink-0 text-[#0052FF]" aria-hidden="true" />
                {m.tag}
              </p>
            </div>
          </Rise>
        ))}
      </div>

      <Rise delay={0.12} className="mt-14">
        <aside
          aria-label={c.impact.badge}
          className="relative overflow-hidden rounded-[28px] border border-white/20 bg-[#0052FF] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_28px_70px_rgba(0,82,255,0.24)]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(255,255,255,0.18),transparent_27%),linear-gradient(118deg,rgba(3,42,149,0.72)_0%,rgba(3,42,149,0.72)_43%,transparent_43.1%)]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-28 -left-24 h-96 w-96 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(circle,#000_0%,transparent_70%)]"
          />

          <div className="relative grid lg:min-h-[430px] lg:grid-cols-12">
            <div className="flex min-h-[360px] flex-col justify-end border-b border-white/25 p-7 sm:min-h-[410px] sm:p-10 lg:col-span-6 lg:min-h-0 lg:border-b-0 lg:p-12">
              <h3 className="order-2 mt-6 text-[19px] font-bold tracking-[-0.01em] text-white sm:text-[22px]">
                {c.impact.summary[0].label}
              </h3>
              <p className={`${lang === "km" ? "font-khmer text-[clamp(3.4rem,7vw,6.4rem)]" : "font-sans text-[clamp(4.25rem,7vw,6.75rem)]"} order-1 whitespace-nowrap font-extrabold tabular-nums leading-[0.86] tracking-[-0.065em] text-white`}>
                {c.impact.summary[0].value}
              </p>
              <p className="order-3 mt-2.5 max-w-[34ch] text-[13.5px] leading-[1.65] text-white/70 sm:text-[14px]">
                {c.impact.summary[0].desc}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:col-span-6 lg:border-l lg:border-white/25">
              {c.impact.summary.slice(1).map((sum, i) => (
                <div
                  key={sum.label}
                  className={`flex min-h-[280px] flex-col justify-end p-7 sm:p-8 lg:p-10 ${
                    i === 0 ? "border-b border-white/25 sm:border-b-0 sm:border-r" : ""
                  }`}
                >
                  <h3 className="order-2 mt-6 text-[16px] font-bold tracking-[-0.01em] text-white sm:text-[17px]">
                    {sum.label}
                  </h3>
                  <p className={`${lang === "km" ? "font-khmer text-[clamp(2.25rem,5vw,3.5rem)]" : "font-sans text-[clamp(2.7rem,4.5vw,4rem)]"} order-1 font-extrabold tabular-nums leading-[0.95] tracking-[-0.055em] text-white`}>
                    {sum.value}
                  </p>
                  <p className="order-3 mt-2.5 max-w-[30ch] text-[13px] leading-[1.65] text-white/85">
                    {sum.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </Rise>
    </section>
  );
}

/* ------------------------------ steps ------------------------------ */

const STEP_ICONS = [MapPin, Layers, FileCheck];

function Steps() {
  const c = useHomeCopy();

  return (
    <section className="relative overflow-hidden border-y border-[#E3EAF7] bg-[#F6F8FC] py-16 sm:py-24">
      <div aria-hidden="true" className="absolute -left-32 top-8 h-72 w-72 rounded-full bg-[#0052FF]/6 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-sky-300/10 blur-3xl" />

      <div className={`${SHELL} relative grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-20`}>
        <Rise className="lg:col-span-5">
          <div className="flex items-center gap-3 text-[12px] font-bold tracking-[0.08em] text-[#0052FF]">
            <span className="h-px w-8 bg-[#0052FF]" aria-hidden="true" />
            <span>{c.steps.badge}</span>
          </div>
          <h2 className="mt-5 max-w-[12ch] text-balance text-[2.25rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0F172A] sm:text-[3rem]">
            {c.steps.title}
          </h2>
          <p className="mt-5 max-w-[42ch] text-pretty text-[15.5px] leading-[1.75] text-[#475569]">
            {c.steps.sub}
          </p>

          <div className="mt-9 flex max-w-sm items-center gap-4 border-t border-[#D8E1F0] pt-6">
            <span className="font-mono text-[2.5rem] font-extrabold leading-none tracking-[-0.05em] text-[#0052FF]">
              {c.steps.duration}
            </span>
            <span className="h-9 w-px bg-[#CBD6E8]" aria-hidden="true" />
            <p className="text-[13px] font-medium leading-5 text-[#64748B]">{c.steps.caption}</p>
          </div>
        </Rise>

        <Rise delay={0.08} className="lg:col-span-7">
          <ol
            aria-label={c.steps.title}
            className="overflow-hidden rounded-[30px] border border-[#DCE4F0] bg-white p-3 shadow-[0_24px_60px_rgba(30,64,175,0.10)] sm:p-4"
          >
            {c.steps.items.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <li
                  key={step.n}
                  className={`group grid grid-cols-[48px_1fr_40px] items-center gap-3 rounded-2xl px-3 py-5 transition-colors duration-300 hover:bg-[#F5F8FF] sm:grid-cols-[56px_1fr_44px] sm:gap-5 sm:px-5 sm:py-6 ${
                    i < c.steps.items.length - 1 ? "border-b border-[#E6EBF3]" : ""
                  }`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDF2FE] font-mono text-[14px] font-extrabold text-[#0052FF] transition-colors duration-300 group-hover:bg-[#0052FF] group-hover:text-white sm:h-14 sm:w-14">
                    {step.n}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[17px] font-bold tracking-[-0.01em] text-[#0F172A] sm:text-[18px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[48ch] text-[13.5px] leading-[1.7] text-[#475569] sm:text-[14px]">
                      {step.body}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE4F0] bg-white text-[#0052FF] shadow-xs transition-transform duration-300 group-hover:translate-x-1 sm:h-11 sm:w-11">
                    <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                </li>
              );
            })}
          </ol>
        </Rise>
      </div>
    </section>
  );
}

/* --------------------------- why choose --------------------------- */

const WHY_ICONS = [MapPin, Eye, Timer, ShieldCheck];

function WhyChoose() {
  const c = useHomeCopy();

  return (
    <section id="features" className={`${SHELL} scroll-mt-24 py-14 sm:py-20`}>
      <Rise>
        <div className="inline-flex items-center gap-2 rounded-full bg-[#EDF2FE] px-3.5 py-1 text-[12px] font-bold text-[#0052FF]">
          <span>{c.why.badge}</span>
        </div>
        <h2 className="mt-4 text-[1.75rem] font-extrabold tracking-[-0.025em] text-[#0F172A] sm:text-[2.15rem]">
          {c.why.title}
        </h2>
      </Rise>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {c.why.cards.map((card, i) => {
          const Icon = WHY_ICONS[i] || ShieldCheck;
          return (
            <Rise key={card.title} delay={(i % 2) * 0.08}>
              <article className="group h-full rounded-2xl border border-line bg-paper p-8 shadow-xs transition-all duration-300 hover:border-[#0052FF] hover:bg-[#EDF2FE]/30 hover:shadow-md">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDF2FE] text-[#0052FF] shadow-xs transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-[16.5px] font-bold leading-snug text-[#0F172A]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.75] text-[#475569]">{card.body}</p>
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

function FeaturedReview({ t }: { t: Review }) {
  return (
    <figure className="relative border-l-2 border-[#0052FF] pl-6 sm:min-h-[370px] sm:pl-10">
      <div className="flex items-center justify-between gap-4 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#7B8AA3]">
        <span className="font-semibold text-[#0052FF]">team profile</span>
        <span>{t.time} · {t.date}</span>
      </div>

      <div className="mt-8 max-w-[34rem]">
        <blockquote className="text-[1.35rem] font-medium leading-[1.4] tracking-[-0.02em] text-[#0F172A] sm:text-[1.6rem] sm:leading-[1.35]">
          “{t.quote}”
        </blockquote>
      </div>

      <figcaption className="mt-10 flex items-center gap-3 border-t border-line pt-5">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#EDF2FE] text-[12px] font-bold text-[#0052FF]">
            {t.initials}
          </span>
          <span className="text-[13.5px] font-bold text-[#0F172A]">{t.name}</span>
        </div>
      </figcaption>
    </figure>
  );
}

function ProofNote({ t, index }: { t: Review; index: number }) {
  return (
    <figure className="group relative border-t border-line py-5 first:pt-0">
      <div className="flex gap-4">
        <span className="pt-0.5 font-mono text-[11px] font-semibold tracking-wider text-[#0052FF]">0{index + 2}</span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <span className="text-[13.5px] font-bold text-[#0F172A]">{t.name}</span>
            <span className="font-mono text-[10px] text-[#7B8AA3]">{t.time} · {t.date}</span>
          </div>
          <blockquote className="mt-2.5 text-[13px] leading-[1.65] text-[#53647D] transition-colors duration-200 group-hover:text-[#1F365B]">
            {t.quote}
          </blockquote>
        </div>
      </div>
    </figure>
  );
}

function Testimonials() {
  const c = useHomeCopy();
  const r = c.testimonials.items;

  return (
    <section id="testimonials" className={`${SHELL} scroll-mt-24 py-14 sm:py-20`}>
      <div className="border-y border-line py-12 sm:py-16">
        <Rise>
          <div className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#0052FF]">{c.testimonials.badge}</p>
              <h2 className="mt-3 max-w-[14ch] text-[2rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-[#0F172A] sm:text-[2.8rem]">
                {c.testimonials.title}
              </h2>
            </div>
            <div className="flex items-end gap-3 sm:pb-1">
              <div>
                <span className="block text-[12px] font-semibold text-[#53647D]">{c.testimonials.summary}</span>
              </div>
            </div>
          </div>
        </Rise>

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Rise>
            <FeaturedReview t={r[0]} />
          </Rise>

          <Rise delay={0.08}>
            <aside>
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0052FF]">{c.testimonials.notesLabel}</span>
                <span className="font-mono text-[10px] text-[#7B8AA3]">{c.testimonials.notesCount}</span>
              </div>
              {r.slice(1).map((t, i) => (
                <ProofNote key={t.name} t={t} index={i} />
              ))}
            </aside>
          </Rise>
        </div>
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
        <div className="grid gap-8 rounded-3xl border border-line bg-paper px-8 py-10 sm:px-12 lg:grid-cols-[1.1fr_1fr] lg:items-center shadow-xl">
          <div>
            <span className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#0052FF]">
              {p.eyebrow}
            </span>
            <h2 className="mt-3 max-w-[22ch] text-[1.65rem] font-extrabold leading-tight tracking-[-0.025em] text-[#0F172A] sm:text-[2rem]">
              {p.title}
            </h2>
            <p className="mt-3 max-w-[46ch] text-[14.5px] leading-[1.75] text-[#475569]">{p.body}</p>
          </div>

          <div>
            <ul className="space-y-3">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-[14px] text-[#0F172A] font-semibold">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EDF2FE] text-[#0052FF]">
                    <Check size={12} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/pricing"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#0052FF] px-7 py-3.5 text-[14px] font-semibold text-white shadow-md transition-colors hover:bg-[#0043D6]"
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
        <div className="grid items-center gap-8 rounded-3xl bg-[#0052FF] px-8 py-12 sm:px-12 sm:py-16 lg:grid-cols-2 shadow-2xl text-white">
          <div>
            <h2 className="text-[1.85rem] font-extrabold leading-tight tracking-[-0.025em] text-white sm:text-[2.3rem]">
              {c.cta.title}
            </h2>
            <p className="mt-3.5 max-w-[40ch] text-[15px] leading-[1.7] text-white/85">{c.cta.sub}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-bold text-[#0B1220] shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#F0F4FF]"
              >
                {c.cta.button}
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-[14px] font-medium text-white backdrop-blur-xs transition-colors hover:border-white/70 hover:bg-white/10"
              >
                {c.cta.pricingButton}
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[440px]">
            <ImageSlot
              noteBadge={c.cta.slotBadge}
              label={c.cta.slotLabel}
              subject={c.cta.slotSubject}
              instruction={c.cta.slotInstruction}
              alt={c.cta.slotAlt}
              aspectRatio="4 / 3"
              tone="dark"
            />
          </div>
        </div>
      </Rise>
    </section>
  );
}

/* ------------------------- executive direct answer ------------------------- */

function HomeDirectAnswer() {
  const { lang } = useSite();
  const isKm = lang === "km";

  return (
    <section className={`${SHELL} py-12 sm:py-16`}>
      <Rise>
        <div className="rounded-3xl border border-line bg-mist/40 p-6 sm:p-10 lg:p-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0052FF]">
            <span className="h-2 w-2 rounded-full bg-[#0052FF]" aria-hidden="true" />
            <span>{isKm ? "ចម្លើយរហ័ស" : "Quick answer"}</span>
          </div>

          <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
            {isKm
              ? "អ្វីដែលអ្នកគ្រប់គ្រងត្រូវដឹងអំពី AttendKH នៅកម្ពុជា"
              : "What Business Leaders & Operations Managers Need to Know About AttendKH"}
          </h2>

          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#475569]">
            {isKm
              ? "AttendKH គឺជាប្រព័ន្ធគ្រប់គ្រងវត្តមានតាម GPS និងប្រាក់បៀវត្សរ៍ទ្វេភាសាដែលបង្កើតឡើងនៅភ្នំពេញ។ វាគាំទ្រការផ្ទៀងផ្ទាត់កាំសាខា រូបថត selfie និងរូបមន្តប្រាក់ខែជាដុល្លារ និងរៀលដែលអាចកំណត់បាន។"
              : "AttendKH is a GPS-verified attendance and automated dual-currency payroll platform built in Phnom Penh for Cambodian retail, F&B, hospitality, and logistics businesses. It provides point-in-time branch geofences and selfie verification, and calculates configurable overtime, late deductions, and bilingual payslips in USD and KHR."}
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-line bg-white p-5 shadow-2xs">
              <dt className="text-xs font-semibold text-[#64748B]">
                {isKm ? "ការផ្ទៀងផ្ទាត់វត្តមាន" : "Attendance Verification"}
              </dt>
              <dd className="font-display mt-1 text-sm font-bold text-[#0F172A]">
                {isKm ? "កាំ ៥០–២០០ម + Selfie ផ្ទាល់" : "50–200m Geofence + Live Selfie"}
              </dd>
              <p className="mt-1 text-xs text-[#64748B]">
                {isKm ? "ផ្ទៀងផ្ទាត់តែពេលចុះវត្តមាន" : "Point-in-time check only"}
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-white p-5 shadow-2xs">
              <dt className="text-xs font-semibold text-[#64748B]">
                {isKm ? "ប្រាក់បៀវត្សរ៍ទ្វេប្រាក់" : "Dual-Currency Payroll"}
              </dt>
              <dd className="font-display mt-1 text-sm font-bold text-[#0F172A]">
                {isKm ? "ដុល្លារ ($) និង រៀល (៛)" : "USD ($) & KHR (៛) Support"}
              </dd>
              <p className="mt-1 text-xs text-[#64748B]">
                {isKm ? "ថែមម៉ោង ១.៥x/២.០x + បន្ទាត់ ប.ស.ស." : "1.5×/2.0× OT + NSSF lines"}
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-white p-5 shadow-2xs">
              <dt className="text-xs font-semibold text-[#64748B]">
                {isKm ? "ការគ្រប់គ្រងច្រើនសាខា" : "Multi-Branch Operations"}
              </dt>
              <dd className="font-display mt-1 text-sm font-bold text-[#0F172A]">
                {isKm ? "សិទ្ធិ ៤ កម្រិតលើកុងសូលតែមួយ" : "4-Tier RBAC Central Console"}
              </dd>
              <p className="mt-1 text-xs text-[#64748B]">
                {isKm ? "វេនយប់ វេនបំបែក និងប្តូរវេន" : "Split shifts & midnight crossings"}
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-white p-5 shadow-2xs">
              <dt className="text-xs font-semibold text-[#64748B]">
                {isKm ? "ការដំឡើង និងជំនួយ" : "Setup & Local Support"}
              </dt>
              <dd className="font-display mt-1 text-sm font-bold text-[#0F172A]">
                {isKm ? "មានការណែនាំរៀបចំ" : "Guided Setup"}
              </dd>
              <p className="mt-1 text-xs text-[#64748B]">
                {isKm ? "ជំនួយជាភាសាខ្មែរ និងអង់គ្លេស" : "Support in Khmer & English"}
              </p>
            </div>
          </dl>
        </div>
      </Rise>
    </section>
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
      <main id="main" className="page-enter">
        <Hero />
        <Stats />
        <AttendanceVerificationSection />
        <PayrollSection />
        <OvertimeLeaveSection />
        <CambodiaFitSection />
        <ImpactSection />
        <Steps />
        <WhyChoose />
        <Testimonials />
        <HomeDirectAnswer />
        <PricingTeaser />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}
