"use client";

import Link from "next/link";
import {
  MapPin,
  Building,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Send,
  Globe,
  Coins,
  WifiOff,
  FileCheck,
  Sparkles,
  Users,
  Activity,
  Layers,
  Radio,
} from "lucide-react";
import {
  useCopy,
  PageHero,
  Section,
  SectionHead,
  DirectAnswerBlock,
  Reveal,
  CtaBand,
} from "@/components/site/ui";
import { useSite } from "@/lib/i18n";

export function AboutView() {
  const c = useCopy();
  const a = c.about;
  const { lang } = useSite();
  const isKm = lang === "km";

  const stats = [
    {
      value: "Phnom Penh",
      label: isKm ? "បង្កើតឡើងនៅកម្ពុជា" : "Built in Cambodia",
      desc: isKm ? "ក្រុមការងារនៅរាជធានីភ្នំពេញ" : "Based in Cambodia's capital",
    },
    {
      value: "50–200m",
      label: isKm ? "កាំ GPS តាមសាខា" : "Branch Geofence",
      desc: isKm ? "កំណត់តាមទីតាំងសាខា" : "Configurable per location",
    },
    {
      value: "USD + KHR",
      label: isKm ? "ប្រាក់បៀវត្សរ៍ទ្វេប្រាក់" : "Dual-Currency Payroll",
      desc: isKm ? "គណនាជាប្រាក់ដុល្លារ និងរៀល" : "Automated USD ($) & KHR (៛) payslips",
    },
    {
      value: "ខ្មែរ + EN",
      label: isKm ? "បទពិសោធន៍ពីរភាសា" : "Bilingual Experience",
      desc: isKm ? "ភាសាខ្មែរ និងអង់គ្លេស" : "Khmer and English workflows",
    },
  ];

  const principles = [
    {
      icon: Globe,
      title: isKm ? "ភាសាខ្មែរជាភាសាដើម មិនមែនជាការបកប្រែ" : "Khmer-Native by Design",
      desc: isKm
        ? "បង្កើតឡើងដោយប្រើពុម្ពអក្សរ Kantumruy Pro និង Google Sans ដោយផ្ទាល់។ កម្ពស់អក្សរ ជើងព្យញ្ជនៈ និងរបៀបប្រើប្រាស់ត្រូវបានរចនាឡើងយ៉ាងច្បាស់លាស់សម្រាប់អ្នកប្រើប្រាស់កម្ពុជា។"
        : "Engineered from day one with Kantumruy Pro and Google Sans. Khmer is our primary interface language with proper typographic rhythm — never an afterthought translation layer.",
    },
    {
      icon: Coins,
      title: isKm ? "គណនេយ្យទ្វេប្រាក់ ដុល្លារ ($) និងរៀល (៛)" : "Dual-Currency USD & KHR Engine",
      desc: isKm
        ? "អាជីវកម្មកម្ពុជាដំណើរការលើរូបិយប័ណ្ណពីរ។ ប្រព័ន្ធគណនាកិច្ចសន្យាជាដុល្លារ ឬរៀល គិតការកាត់យឺត ម៉ោងបន្ថែម និងចេញប័ណ្ណបើកប្រាក់ខែ PDF ពីរភាសាដោយស្វ័យប្រវត្តិ។"
        : "Cambodian commerce operates in two currencies simultaneously. Our payroll engine handles contracts in USD or KHR with real-time conversion and bilingual PDF payslips.",
    },
    {
      icon: WifiOff,
      title: isKm ? "ដំណើរការក្រៅបណ្តាញ (Offline-First)" : "Offline-First Device Resilience",
      desc: isKm
        ? "ពេលដាច់ចរន្តអគ្គិសនី ឬគ្មានសេវាទូរស័ព្ទ ការចុះវត្តមានត្រូវបានរក្សាទុកដោយសុវត្ថិភាពលើទូរស័ព្ទ ហើយធ្វើសមកាលកម្មដោយស្វ័យប្រវត្តិពេលមានបណ្តាញឡើងវិញ។"
        : "When cellular data or Wi-Fi drops, punches queue securely on the device with exact timestamps, syncing automatically within 60 seconds of reconnection.",
    },
    {
      icon: ShieldCheck,
      title: isKm ? "ផ្ទៀងផ្ទាត់ GPS ត្រឹមត្រូវ គ្មានការលួចតាមដាន" : "Point-in-Time GPS Verification",
      desc: isKm
        ? "កូអរដោនេ GPS ត្រូវបានអានតែនៅពេលបុគ្គលិកចុច «ចុះវត្តមាន» ក្នុងកាំ ៥០–២០០ ម៉ែត្រប៉ុណ្ណោះ។ AttendKH មិនតាមដានផ្លូវធ្វើដំណើរ ឬទីតាំងក្រៅម៉ោងធ្វើការឡើយ។"
        : "GPS coordinates are read strictly at the instant of clocking in within a 50–200m perimeter. We never perform continuous background tracking or off-duty surveillance.",
    },
    {
      icon: FileCheck,
      title: isKm ? "អនុលោមតាមច្បាប់ការងារ និង ប.ស.ស." : "Cambodian Labor Law & NSSF",
      desc: isKm
        ? "ប្រព័ន្ធរួមបញ្ចូលរូបមន្តម៉ោងបន្ថែម ១.៥× (ថ្ងៃធម្មតា) ២.០× (ថ្ងៃសម្រាក និងបុណ្យជាតិផ្លូវការ) រយៈពេលអនុគ្រោះ ១៥ នាទី និងការគណនាវិភាគទាន ប.ស.ស. យ៉ាងត្រឹមត្រូវ។"
        : "Automates Cambodian statutory holiday calendars, 1.5× regular overtime, 2.0× rest/holiday rates, 15-minute grace intervals, and statutory NSSF contributions.",
    },
    {
      icon: Headphones,
      title: isKm ? "សេវាគាំទ្រទាន់ពេលនៅភ្នំពេញ" : "Real Local Support in Phnom Penh",
      desc: isKm
        ? "ក្រុមការងារយើងនៅទួលគោក ឆ្លើយតបជាភាសាខ្មែរ និងអង់គ្លេសភ្លាមៗតាម Telegram និងទូរស័ព្ទ ព្រមទាំងចុះជួយបណ្តុះបណ្តាលដល់ទីកន្លែងក្នុងម៉ោងធ្វើការកម្ពុជា។"
        : "Direct access to our Phnom Penh team via Telegram (@attendkh), phone, and on-site branch setup visits during standard Cambodian business hours.",
    },
  ];

  const team = [
    {
      name: "Sophornn Roth",
      role: isKm ? "សហស្ថាបនិក & ប្រធានផ្នែកផលិតផល" : "Co-Founder & Head of Product",
      domain: isKm ? "ស្ថាបត្យកម្មផលិតផល & UX" : "Product Architecture & Cambodian SME UX",
      initials: "SR",
      color: "from-blue-600 to-indigo-700",
    },
    {
      name: "Vicheka Meng",
      role: isKm ? "ប្រធានផ្នែកវិស្វកម្មសូហ្វវែរ" : "Head of Software Engineering",
      domain: isKm ? "ប្រព័ន្ធ Offline & សុវត្ថិភាព GPS" : "Distributed Systems & Anti-Mock GPS Security",
      initials: "VM",
      color: "from-emerald-600 to-teal-700",
    },
    {
      name: "Channary Keo",
      role: isKm ? "ប្រធានផ្នែកសេវាកម្មអតិថិជន" : "Head of Customer Success",
      domain: isKm ? "ការបណ្តុះបណ្តាល & គាំទ្រភាសាខ្មែរ" : "Bilingual Onboarding & Operations Training",
      initials: "CK",
      color: "from-purple-600 to-pink-700",
    },
    {
      name: "Rathana Seng",
      role: isKm ? "វិស្វករស្ថាបត្យកម្មប្រាក់ខែ" : "Lead Payroll & Compliance Architect",
      domain: isKm ? "ច្បាប់ការងារកម្ពុជា & ប.ស.ស." : "Labor Law Automation & NSSF Formulations",
      initials: "RS",
      color: "from-amber-600 to-orange-700",
    },
  ];

  return (
    <>
      {/* 1. Standard AttendKH Blue PageHero */}
      <PageHero
        title={
          isKm
            ? "បង្កើតឡើងនៅភ្នំពេញ សម្រាប់អាជីវកម្មកម្ពុជា"
            : "Built in Phnom Penh for Cambodian Businesses"
        }
        sub={
          isKm
            ? "ភាសាខ្មែរជាចម្បង គិតជារៀល និងដុល្លារ និងសង្វាក់តាមការងារជាក់ស្តែងនៅទីនេះ។"
            : "Khmer first, dual-currency by default, and engineered for the realities of running shifts here."
        }
      />

      {/* 2. Story & Central Operations Console Showcase */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <div className="overflow-hidden rounded-3xl border border-line bg-mist/30 p-6 sm:p-10 shadow-xs">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Origin Story */}
              <div className="lg:col-span-6 space-y-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3.5 py-1 text-xs font-bold text-brand uppercase tracking-wider">
                  <Building size={13} />
                  <span>{isKm ? "ដំណើរដើមទងរបស់យើង" : "Our Origin Story"}</span>
                </span>

                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  {isKm
                    ? "ដោះស្រាយបញ្ហាវត្តមាន និងប្រាក់ខែជាក់ស្តែងនៅភ្នំពេញ"
                    : "Born from Real Workforce Challenges in Phnom Penh"}
                </h2>

                <div className="space-y-4 text-[15px] leading-relaxed text-body">
                  <p>
                    {isKm
                      ? "AttendKH បានចាប់ផ្តើមឡើងពីសំណួរមួយរបស់ម្ចាស់ហាងកាហ្វេនៅរាជធានីភ្នំពេញ៖ «តើបុគ្គលិកណាម្នាក់កំពុងនៅសាខាពិតប្រាកដនៅពេលនេះ?»"
                      : "AttendKH began with one straightforward question from a coffee chain owner in Phnom Penh: who is actually at the branch right now?"}
                  </p>
                  <p>
                    {isKm
                      ? "កម្មវិធីបរទេសភាគច្រើនដំណើរការតែជាភាសាអង់គ្លេស គិតតែប្រាក់ដុល្លារ និងមិនស្គាល់ថ្ងៃបុណ្យជាតិកម្ពុជា ឬច្បាប់ ប.ស.ស. ឡើយ។ ដូច្នេះយើងបានកសាងចម្លើយនៅទីនេះ — ខ្មែរ និងអង់គ្លេស រៀល និងដុល្លារ និងរូបមន្តស្របតាមច្បាប់ការងារកម្ពុជា។"
                      : "Global HR tools answered it in English, in USD, on a holiday calendar that was not ours. So we built the answer here in Toul Kork — Khmer and English, riel and dollar, with Cambodian labor rules built directly into the formulas."}
                  </p>
                  <p>
                    {isKm
                      ? "សព្វថ្ងៃ ក្រុមការងារនៅភ្នំពេញ សៀមរាប និងព្រះសីហនុ ប្រើប្រាស់ AttendKH សម្រាប់វត្តមាន និងប្រាក់ខែ ចាប់ពីហាងទោល រហូតដល់ក្រុមហ៊ុន ៥០ សាខា។"
                      : "Today teams across Phnom Penh, Siem Reap, and Sihanoukville run their attendance and payroll on AttendKH, from single shops to fifty-branch groups."}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-xs hover:bg-brand-dark transition-all"
                  >
                    <span>{isKm ? "កក់ការបង្ហាញប្រព័ន្ធ" : "Book a Demonstration"}</span>
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href="https://t.me/attendkh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                  >
                    <Send size={14} />
                    <span>Telegram @attendkh</span>
                  </a>
                </div>
              </div>

              {/* Right Column: High-Precision Operations Console */}
              <div className="lg:col-span-6">
                <div
                  role="region"
                  aria-label="AttendKH Central Operations Console"
                  className="signal-frame relative w-full overflow-hidden rounded-2xl border border-line bg-slate-950 p-6 text-white shadow-xl"
                >
                  {/* Subtle ambient grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />
                  <span aria-hidden="true" className="signal-sweep pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-brand/70" />

                  <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-white font-bold text-xs shadow-sm">
                          <Building size={15} />
                        </span>
                        <div>
                          <span className="font-display text-xs font-bold text-white block">
                            Central Operations Console
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 block">
                            Illustrative branch overview
                          </span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Example Data
                      </span>
                    </div>

                    {/* 4 Branch Live Status Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-auto py-1">
                      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-all hover:border-brand/40 hover:bg-white/[0.08]">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-white text-xs truncate">Toul Kork (HQ)</span>
                          <span className="font-mono text-[11px] font-bold text-emerald-400 shrink-0 ml-1">On shift</span>
                        </div>
                        <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
                          <span>Morning Shift · 50m Geofence</span>
                          <span className="text-emerald-400 font-mono">Configured</span>
                        </div>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-all hover:border-brand/40 hover:bg-white/[0.08]">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-white text-xs truncate">BKK1 Tech Center</span>
                          <span className="font-mono text-[11px] font-bold text-emerald-400 shrink-0 ml-1">Split shift</span>
                        </div>
                        <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
                          <span>Split Shift · 65m Geofence</span>
                          <span className="text-emerald-400 font-mono">Configured</span>
                        </div>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-all hover:border-brand/40 hover:bg-white/[0.08]">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-white text-xs truncate">Siem Reap Boutique</span>
                          <span className="font-mono text-[11px] font-bold text-emerald-400 shrink-0 ml-1">Flexible shift</span>
                        </div>
                        <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
                          <span>Flexi Shift · 75m Geofence</span>
                          <span className="text-emerald-400 font-mono">Configured</span>
                        </div>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-all hover:border-brand/40 hover:bg-white/[0.08]">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-white text-xs truncate">Sihanoukville Yard</span>
                          <span className="font-mono text-[11px] font-bold text-emerald-400 shrink-0 ml-1">Regional shift</span>
                        </div>
                        <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
                          <span>24/7 Shift · 100m Geofence</span>
                          <span className="text-emerald-400 font-mono">Configured</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-white/10 pt-2.5 text-[10.5px] font-mono text-slate-400">
                      <span className="text-blue-300">Dual-Currency: USD ($) + KHR (៛)</span>
                      <span className="text-emerald-400 font-semibold">Example workflow</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Core Numbers Grid */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-line bg-paper p-6 shadow-xs">
                  <span className="font-mono text-3xl font-bold tracking-tight text-ink block">
                    {s.value}
                  </span>
                  <span className="font-display text-sm font-bold text-ink mt-2 block">
                    {s.label}
                  </span>
                  <span className="text-xs text-slate-500 mt-1 block leading-relaxed">
                    {s.desc}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Six Core Product Principles */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            title={isKm ? "របៀបដែលយើងធ្វើការ និងអភិវឌ្ឍផលិតផល" : "How We Work: Six Core Principles"}
            sub={
              isKm
                ? "គោលការណ៍វិស្វកម្ម និងសេវាកម្មដែលដឹកនាំរាល់ការសម្រេចចិត្តរបស់យើងជារៀងរាល់ថ្ងៃ"
                : "The engineering and support principles that guide every decision we make."
            }
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.05}>
                  <article className="h-full rounded-2xl border border-line bg-paper p-6 sm:p-7 shadow-xs hover:border-brand hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand mb-4">
                        <Icon size={22} />
                      </div>
                      <h3 className="font-display text-[17px] font-bold text-ink leading-snug">
                        {p.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-[13.5px] leading-relaxed text-body">
                        {p.desc}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 5. Team & Builders */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            title={isKm ? "ក្រុមការងារនៅរាជធានីភ្នំពេញ" : "The Builders Behind AttendKH"}
            sub={
              isKm
                ? "វិស្វករ អ្នករចនា និងអ្នកជំនាញសេវាកម្មក្នុងស្រុកដែលប្តេជ្ញាលើកកម្ពស់អាជីវកម្មកម្ពុជា"
                : "Engineers, designers, and customer advocates based in Phnom Penh with a shared mission."
            }
          />

          {/* Team Cards Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-line bg-paper p-6 shadow-xs flex flex-col justify-between hover:border-brand hover:shadow-md transition-all">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr ${t.color} text-white font-display font-bold text-sm shadow-xs`}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <h3 className="font-display text-[15px] font-bold text-ink">
                          {t.name}
                        </h3>
                        <p className="text-xs font-semibold text-brand">
                          {t.role}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.domain}
                    </p>
                  </div>

                  <div className="mt-4 border-t border-line/70 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Phnom Penh, KH</span>
                    <span className="text-brand font-semibold">AttendKH Core</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. Headquarters & Direct Answer Block */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px] space-y-12">
          {/* Direct Answer Block for AEO / GEO */}
          <DirectAnswerBlock
            question={
              isKm
                ? "តើ AttendKH ជាអ្វី ហើយមានទីស្នាក់ការនៅទីណា?"
                : "What is AttendKH and where is it located?"
            }
            answer={
              isKm
                ? "AttendKH គឺជាផលិតផលបច្ចេកវិទ្យាគ្រប់គ្រងកម្លាំងពលកម្មកម្ពុជា ដែលមានទីស្នាក់ការកណ្តាលនៅខណ្ឌទួលគោក រាជធានីភ្នំពេញ (លេខ ១២ ផ្លូវ ៣១៥)។ វាដោះស្រាយបញ្ហាចុះវត្តមានតាម GPS Geofencing ការផ្ទៀងផ្ទាត់សេលហ្វី ប្រព័ន្ធ Offline-First និងការគណនាប្រាក់ខែទ្វេប្រាក់ USD/KHR ស្របតាមច្បាប់ការងារ និង ប.ស.ស. កម្ពុជា។"
                : "AttendKH is a workforce technology platform headquartered in Toul Kork, Phnom Penh, Cambodia (No. 12, Street 315). It addresses multi-branch attendance, shift scheduling, dual-currency payroll in USD and KHR, offline operations, and bilingual Khmer/English workflows."
            }
            facts={[
              {
                label: isKm ? "ទីតាំងការិយាល័យ" : "Headquarters",
                value: isKm ? "ទួលគោក រាជធានីភ្នំពេញ" : "Toul Kork, Phnom Penh, KH",
              },
              {
                label: isKm ? "ភាសាគាំទ្រ" : "Supported Languages",
                value: isKm ? "ភាសាខ្មែរ និង អង់គ្លេស" : "Khmer & English Native",
              },
              {
                label: isKm ? "រូបិយប័ណ្ណប្រាក់ខែ" : "Payroll Currencies",
                value: "USD ($) + KHR (៛)",
              },
              {
                label: isKm ? "កាំ Geofence សាខា" : "Geofence Radius",
                value: "50m – 200m per branch",
              },
            ]}
          />

          {/* Physical Office Card */}
          <div className="rounded-2xl border border-line bg-mist/40 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-wider">
                  <MapPin size={14} />
                  <span>{isKm ? "ទស្សនាការិយាល័យយើង" : "Visit Our Office"}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-ink">
                  No. 12, Street 315, Khan Toul Kork, Phnom Penh
                </h3>
                <p className="text-xs text-slate-500">
                  Mon – Fri, 8:00 – 17:30 ICT · Telegram: @attendkh
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl border border-line bg-paper px-4 py-2.5 text-xs font-semibold text-ink hover:border-slate-400 transition-colors"
                >
                  {isKm ? "កក់ការណាត់ជួប" : "Schedule a Visit"}
                </Link>
                <a
                  href="https://t.me/attendkh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-xs font-semibold text-white hover:bg-brand-dark transition-colors"
                >
                  <Send size={13} />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. Standard Conversion CTA Band */}
      <CtaBand
        title={
          isKm
            ? "ជួបពិភាក្សាជាមួយក្រុមការងារយើងនៅភ្នំពេញ"
            : "Get in touch with our Phnom Penh team for a personalized demo."
        }
        sub={
          isKm
            ? "ដំឡើងសាខាដំបូងរបស់អ្នកក្នុងរយៈពេល ៥ នាទី ត្រឹមតែ ១ ដុល្លារក្នុងម្នាក់។"
            : "Set up your first branch in about five minutes for just $1 per employee."
        }
      />
    </>
  );
}
