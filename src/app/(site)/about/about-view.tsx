"use client";

import Link from "next/link";
import {
  MapPin,
  Building,
  ShieldCheck,
  Headphones,
  Check,
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
  ExternalLink,
  Navigation,
  Clock,
  Mail,
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
      icon: MapPin,
      value: "Phnom Penh",
      label: isKm ? "បង្កើតឡើងនៅកម្ពុជា" : "Built in Cambodia",
      desc: isKm
        ? "វិស្វកម្មបច្ចេកវិទ្យានៅផ្លូវ ៣៧១ សម្រាប់អាជីវកម្មកម្ពុជា"
        : "Engineered from Street 371 for Cambodian workforce realities",
      tag: isKm ? "រាជធានីភ្នំពេញ" : "Phnom Penh Hub",
      pill: isKm ? "ស្នាក់ការកណ្តាល" : "HQ & Hub",
    },
    {
      icon: ShieldCheck,
      value: "50–200m",
      label: isKm ? "កាំ GPS តាមសាខា" : "Branch Geofence",
      desc: isKm
        ? "កំណត់កូអរដោនេច្បាស់លាស់ គ្មានការលួចតាមដានពេលក្រៅម៉ោង"
        : "Point-in-time perimeter check with zero continuous tracking",
      tag: isKm ? "សុវត្ថិភាព GPS" : "Anti-Mock Defense",
      pill: isKm ? "កម្រិតខ្ពស់" : "±2m Precision",
    },
    {
      icon: Coins,
      value: "USD + KHR",
      label: isKm ? "ប្រាក់បៀវត្សរ៍ទ្វេប្រាក់" : "Dual-Currency Payroll",
      desc: isKm
        ? "រូបមន្តថែមម៉ោង ១.៥×/២.០× វិភាគទាន ប.ស.ស. និងប័ណ្ណបើកប្រាក់ខែ"
        : "Automated 1.5×/2.0× OT rules, NSSF lines & bilingual payslips",
      tag: isKm ? "ដុល្លារ ($) + រៀល (៛)" : "USD ($) + KHR (៛)",
      pill: isKm ? "ប.ស.ស. ស្វ័យប្រវត្តិ" : "NSSF Compliant",
    },
    {
      icon: Globe,
      value: "ខ្មែរ + EN",
      label: isKm ? "បទពិសោធន៍ពីរភាសា" : "Native Bilingual UX",
      desc: isKm
        ? "រចនាឡើងជាមួយ Kantumruy Pro & Google Sans យ៉ាងស្រស់ស្អាត"
        : "Engineered natively with Kantumruy Pro and Google Sans typography",
      tag: isKm ? "ភាសាខ្មែរដើម" : "Khmer-Native",
      pill: isKm ? "១០០% Native" : "100% Native",
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
      icon: Radio,
      title: isKm ? "ធ្វើសមកាលកម្ម Cloud ភ្លាមៗ (Real-Time)" : "Real-Time Cloud Synchronization",
      desc: isKm
        ? "ទិន្នន័យវត្តមាន និងរូបថត Selfie ធ្វើសមកាលកម្មភ្លាមៗទៅកាន់ផ្ទាំងគ្រប់គ្រងកណ្តាល។ ម្ចាស់អាជីវកម្ម និងអ្នកគ្រប់គ្រងដឹងពីវត្តមានបុគ្គលិកជាក់ស្តែងដោយគ្មានការពន្យារពេល។"
        : "Punches and live selfie checks stream instantly to the central cloud console, giving owners and area managers immediate real-time visibility across all stores.",
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

  const cambodiaPridePillars = [
    {
      icon: Sparkles,
      title: isKm ? "បង្កើតឡើងដោយកូនខ្មែរ ១០០%" : "100% Proudly Made in Cambodia",
      desc: isKm
        ? "បង្កើតឡើង និងអភិវឌ្ឍដោយវិស្វករបច្ចេកវិទ្យាកម្ពុជានៅរាជធានីភ្នំពេញ ដើម្បីដោះស្រាយបញ្ហាជាក់ស្តែងរបស់សហគ្រាសក្នុងស្រុក។"
        : "Engineered from the ground up by local Cambodian talent in Phnom Penh to solve genuine operational workforce challenges.",
      badge: isKm ? "វិស្វកម្មកម្ពុជា" : "Khmer Engineering",
    },
    {
      icon: Coins,
      title: isKm ? "ស្របតាមតថភាពពាណិជ្ជកម្មកម្ពុជា" : "Tailored to Cambodian Realities",
      desc: isKm
        ? "គាំទ្រការទូទាត់ប្រាក់ខែទ្វេប្រាក់ (USD និង KHR) ស្របតាមច្បាប់ការងារកម្ពុជា ប្រតិទិនបុណ្យជាតិ និងការកាត់ប្រាក់ ប.ស.ស. ស្វ័យប្រវត្តិ។"
        : "Deeply aligned with Cambodian labor laws, statutory public holidays, NSSF contributions, and native dual-currency (USD & KHR) payroll.",
      badge: isKm ? "ច្បាប់ការងារ & ប.ស.ស." : "Labor Law & NSSF",
    },
    {
      icon: Users,
      title: isKm ? "តម្លៃសមរម្យសម្រាប់គ្រប់អាជីវកម្ម" : "Empowering Local SMEs",
      desc: isKm
        ? "បច្ចេកវិទ្យាកម្រិតខ្ពស់ក្នុងតម្លៃត្រឹម $1.00 ក្នុងមួយខែ ដើម្បីជួយអាជីវកម្មខ្មែរគ្រប់ទំហំរីកចម្រើនប្រកបដោយប្រសិទ្ធភាព។"
        : "Enterprise-grade attendance and payroll made accessible to every local cafe, boutique, and warehouse from just $1.00/user/mo.",
      badge: isKm ? "ដើម្បីអាជីវកម្មខ្មែរ" : "Local Empowerment",
    },
    {
      icon: Headphones,
      title: isKm ? "សេវាបម្រើផ្ទាល់នៅភ្នំពេញ" : "Direct Local Phnom Penh Support",
      desc: isKm
        ? "ក្រុមការងារគាំទ្រជាភាសាខ្មែរ និងអង់គ្លេសផ្ទាល់នៅភ្នំពេញ ឆ្លើយតបរហ័សតាម Telegram និងចុះជួយដល់ទីកន្លែងសាខាផ្ទាល់។"
        : "Native bilingual Khmer and English customer assistance via Telegram and in-person branch onboarding directly from our Phnom Penh office.",
      badge: isKm ? "ជំនួយទាន់ចិត្ត" : "Phnom Penh Team",
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
                      : "Global HR tools answered it in English, in USD, on a holiday calendar that was not ours. So we built the answer here in Phnom Penh — Khmer and English, riel and dollar, with Cambodian labor rules built directly into the formulas."}
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

              {/* Right Column: High-Precision Operations Console (Clean White Theme) */}
              <div className="lg:col-span-6">
                <div
                  role="region"
                  aria-label="AttendKH Central Operations Console"
                  className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xl shadow-slate-900/5 ring-1 ring-slate-900/5 space-y-4"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand font-bold text-xs shadow-2xs border border-blue-200/60">
                        <Building size={16} />
                      </span>
                      <div>
                        <span className="font-display text-sm sm:text-[15px] font-bold text-slate-900 block">
                          Central Operations Console
                        </span>
                        <span className="text-xs text-slate-500 font-medium block">
                          Phnom Penh • Siem Reap • Sihanoukville
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-2xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span><strong className="font-num font-bold">4</strong> Branches Online</span>
                    </span>
                  </div>

                  {/* 4 Branch Live Status Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-1">
                    <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-3.5 transition-all hover:border-brand/40 hover:bg-white shadow-2xs">
                      <div className="flex justify-between items-center">
                        <span className="font-display font-bold text-slate-900 text-xs sm:text-[13px] truncate">Phnom Penh (HQ)</span>
                        <span className="font-num text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 rounded-lg shrink-0 ml-1 tabular-nums shadow-2xs">
                          18/18
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-xs text-slate-500 font-medium">
                        <span>Morning Shift • <span className="font-num font-semibold">50m</span></span>
                        <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          On Shift
                        </span>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-3.5 transition-all hover:border-brand/40 hover:bg-white shadow-2xs">
                      <div className="flex justify-between items-center">
                        <span className="font-display font-bold text-slate-900 text-xs sm:text-[13px] truncate">BKK1 Tech Center</span>
                        <span className="font-num text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/70 px-2.5 py-0.5 rounded-lg shrink-0 ml-1 tabular-nums shadow-2xs">
                          12/12
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-xs text-slate-500 font-medium">
                        <span>Split Shift • <span className="font-num font-semibold">65m</span></span>
                        <span className="text-brand font-semibold flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                          Dinner Peak
                        </span>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-3.5 transition-all hover:border-brand/40 hover:bg-white shadow-2xs">
                      <div className="flex justify-between items-center">
                        <span className="font-display font-bold text-slate-900 text-xs sm:text-[13px] truncate">Siem Reap Boutique</span>
                        <span className="font-num text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200/70 px-2.5 py-0.5 rounded-lg shrink-0 ml-1 tabular-nums shadow-2xs">
                          8/8
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-xs text-slate-500 font-medium">
                        <span>Flexi Shift • <span className="font-num font-semibold">75m</span></span>
                        <span className="text-purple-700 font-semibold flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                          Flexible
                        </span>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-3.5 transition-all hover:border-brand/40 hover:bg-white shadow-2xs">
                      <div className="flex justify-between items-center">
                        <span className="font-display font-bold text-slate-900 text-xs sm:text-[13px] truncate">Sihanoukville Yard</span>
                        <span className="font-num text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200/70 px-2.5 py-0.5 rounded-lg shrink-0 ml-1 tabular-nums shadow-2xs">
                          15/15
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-xs text-slate-500 font-medium">
                        <span>24/7 Shift • <span className="font-num font-semibold">100m</span></span>
                        <span className="text-amber-700 font-semibold flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                          Overnight
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3 text-xs">
                    <span className="text-slate-600 font-medium">
                      Dual-Currency: USD ($) + KHR (៛)
                    </span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="shrink-0" />
                      <span><strong className="font-num font-bold">53/53</strong> Staff In-Perimeter</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Core Capability Highlights - Clean & Professional Grid */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.label} delay={i * 0.05}>
                  <div className="group relative h-full rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-brand/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
                    <div>
                      {/* Icon & Pill Badge */}
                      <div className="flex items-center justify-between gap-2 mb-5">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand border border-blue-200/60 shadow-2xs">
                          <Icon size={20} />
                        </div>
                        <span className="rounded-full bg-slate-100/90 px-3 py-1 text-[11px] font-semibold text-slate-600 border border-slate-200/70 shadow-2xs">
                          {s.pill}
                        </span>
                      </div>

                      {/* Stat Value */}
                      <div>
                        <span className="font-price text-2xl sm:text-[26px] font-extrabold tracking-tight text-slate-900 block leading-tight">
                          {s.value}
                        </span>
                        <span className="font-display text-sm font-bold text-slate-800 mt-1.5 block leading-snug">
                          {s.label}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-slate-600 mt-2.5 leading-relaxed font-normal">
                        {s.desc}
                      </p>
                    </div>

                    {/* Bottom Micro Footnote */}
                    <div className="mt-6 border-t border-slate-100 pt-3.5 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">{s.tag}</span>
                      <span className="text-brand font-semibold text-[11.5px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        <span>AttendKH</span>
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 4. Six Core Product Principles - Engineered Bento Matrix */}
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

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
            {/* 01. Khmer-Native by Design (Hero Pillar - 7 cols) */}
            <div className="lg:col-span-7">
              <Reveal delay={0.02}>
                <article className="h-full rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:border-brand/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand border border-blue-200/60 shadow-2xs">
                        <Globe size={22} />
                      </div>
                      <span className="font-num text-xs font-bold text-slate-400 bg-slate-100/90 px-3 py-1 rounded-full border border-slate-200/70 shadow-2xs">
                        01
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                        {principles[0].title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-slate-600">
                        {principles[0].desc}
                      </p>
                    </div>
                  </div>

                  {/* Micro-UI: Authentic Typography Specimen */}
                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 space-y-2.5">
                    <div className="flex items-center justify-between text-xs border-b border-slate-200/60 pb-2">
                      <span className="text-slate-500 font-medium">Bilingual Rhythm & Script Engine</span>
                      <span className="font-num text-[11px] font-bold text-brand bg-brand-soft px-2 py-0.5 rounded-md border border-blue-200/60">
                        100% Native
                      </span>
                    </div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="font-khmer text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        « វត្តមាន GPS និងប្រាក់ខែស្វ័យប្រវត្តិ »
                      </span>
                      <span className="font-display text-xs font-semibold text-slate-500">
                        Kantumruy Pro • Google Sans
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>

            {/* 02. Dual-Currency USD & KHR Engine (5 cols) */}
            <div className="lg:col-span-5">
              <Reveal delay={0.06}>
                <article className="h-full rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:border-brand/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand border border-blue-200/60 shadow-2xs">
                        <Coins size={22} />
                      </div>
                      <span className="font-num text-xs font-bold text-slate-400 bg-slate-100/90 px-3 py-1 rounded-full border border-slate-200/70 shadow-2xs">
                        02
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                        {principles[1].title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-slate-600">
                        {principles[1].desc}
                      </p>
                    </div>
                  </div>

                  {/* Micro-UI: Currency Conversion Specimen */}
                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span>Dual-Currency Settlement</span>
                      <span className="text-emerald-600 font-semibold flex items-center gap-1">
                        <Check size={12} strokeWidth={2.5} /> Real-Time Rate
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2 pt-1 font-price">
                      <span className="font-bold text-slate-900 text-sm sm:text-base">$350.00 USD</span>
                      <span className="text-slate-400 text-xs">⇄</span>
                      <span className="font-bold text-slate-900 text-sm sm:text-base">1,435,000 ៛ KHR</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>

            {/* 03. Point-in-Time GPS Verification (4 cols) */}
            <div className="lg:col-span-4">
              <Reveal delay={0.09}>
                <article className="h-full rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-brand/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-5">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand border border-blue-200/60 shadow-2xs">
                        <ShieldCheck size={22} />
                      </div>
                      <span className="font-num text-xs font-bold text-slate-400 bg-slate-100/90 px-3 py-1 rounded-full border border-slate-200/70 shadow-2xs">
                        03
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-[17px] font-bold text-slate-900 tracking-tight">
                        {principles[3].title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                        {principles[3].desc}
                      </p>
                    </div>
                  </div>

                  {/* Micro-UI: Privacy Perimeter Indicator */}
                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3 flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">Privacy Perimeter</span>
                    <span className="font-num font-bold text-slate-900 bg-white border border-slate-200 px-2.5 py-1 rounded-lg shadow-2xs">
                      50m – 200m
                    </span>
                  </div>
                </article>
              </Reveal>
            </div>

            {/* 04. Cambodian Labor Law & NSSF (4 cols) */}
            <div className="lg:col-span-4">
              <Reveal delay={0.12}>
                <article className="h-full rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-brand/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-5">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand border border-blue-200/60 shadow-2xs">
                        <FileCheck size={22} />
                      </div>
                      <span className="font-num text-xs font-bold text-slate-400 bg-slate-100/90 px-3 py-1 rounded-full border border-slate-200/70 shadow-2xs">
                        04
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-[17px] font-bold text-slate-900 tracking-tight">
                        {principles[4].title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                        {principles[4].desc}
                      </p>
                    </div>
                  </div>

                  {/* Micro-UI: Statutory Formula Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="font-num text-[11px] font-bold text-slate-700 bg-slate-100/90 px-2.5 py-1 rounded-lg border border-slate-200/70">
                      1.5× OT
                    </span>
                    <span className="font-num text-[11px] font-bold text-slate-700 bg-slate-100/90 px-2.5 py-1 rounded-lg border border-slate-200/70">
                      2.0× Holiday
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/70">
                      NSSF
                    </span>
                  </div>
                </article>
              </Reveal>
            </div>

            {/* 05. Real-Time Cloud Synchronization (4 cols) */}
            <div className="lg:col-span-4">
              <Reveal delay={0.15}>
                <article className="h-full rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-brand/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-5">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand border border-blue-200/60 shadow-2xs">
                        <Radio size={22} />
                      </div>
                      <span className="font-num text-xs font-bold text-slate-400 bg-slate-100/90 px-3 py-1 rounded-full border border-slate-200/70 shadow-2xs">
                        05
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-[17px] font-bold text-slate-900 tracking-tight">
                        {principles[2].title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                        {principles[2].desc}
                      </p>
                    </div>
                  </div>

                  {/* Micro-UI: Live Latency Specimen */}
                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3 flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Socket
                    </span>
                    <span className="font-num font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md">
                      &lt; 120ms Latency
                    </span>
                  </div>
                </article>
              </Reveal>
            </div>

            {/* 06. Real Local Support in Phnom Penh (Wide Showcase Footer - 12 cols) */}
            <div className="lg:col-span-12">
              <Reveal delay={0.18}>
                <article className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:border-brand/40 hover:shadow-lg transition-all duration-200">
                  <div className="grid lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-7 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand border border-blue-200/60 shadow-2xs">
                          <Headphones size={22} />
                        </div>
                        <span className="font-num text-xs font-bold text-slate-400 bg-slate-100/90 px-3 py-1 rounded-full border border-slate-200/70 shadow-2xs">
                          06 • Local Support
                        </span>
                      </div>

                      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                        {principles[5].title}
                      </h3>
                      <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-600 max-w-2xl">
                        {principles[5].desc}
                      </p>
                    </div>

                    <div className="lg:col-span-5 flex flex-wrap lg:justify-end items-center gap-3">
                      <a
                        href="https://t.me/attendkh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-brand-dark transition-all"
                      >
                        <Send size={14} />
                        <span>Telegram @attendkh</span>
                      </a>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs transition-all"
                      >
                        <span>{isKm ? "ទាក់ទងមកយើង" : "Contact Team"}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Proudly Made in Cambodia */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold text-brand uppercase tracking-wider">
              <MapPin size={13} className="text-brand" />
              <span>{isKm ? "មោទនភាពផលិតផលកម្ពុជា" : "Proudly Made in Cambodia"}</span>
            </span>
            <h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              {isKm
                ? "បច្ចេកវិទ្យាបង្កើតឡើងដោយកូនខ្មែរ ដើម្បីអាជីវកម្មកម្ពុជា"
                : "Built by Cambodian Talent, Crafted for Cambodian Enterprise"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">
              {isKm
                ? "AttendKH កើតចេញពីក្តីស្រឡាញ់ និងការប្តេជ្ញាចិត្តរបស់វិស្វករកម្ពុជានៅរាជធានីភ្នំពេញ ក្នុងការនាំយកបច្ចេកវិទ្យាទំនើប ងាយស្រួល និងមានតម្លៃសមរម្យបំផុតជូនម្ចាស់អាជីវកម្មគ្រប់រូប។"
                : "AttendKH was founded on a simple conviction: Cambodian businesses deserve world-class workforce technology built specifically for local workflow realities, dual-currency commerce, and statutory labor standards."}
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cambodiaPridePillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-line bg-paper p-6 shadow-xs flex flex-col justify-between hover:border-brand hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                          <Icon size={22} />
                        </div>
                        <span className="rounded-full bg-mist px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                          {p.badge}
                        </span>
                      </div>

                      <h3 className="font-display text-[16px] font-bold text-ink leading-snug">
                        {p.title}
                      </h3>

                      <p className="mt-2.5 text-xs leading-relaxed text-body">
                        {p.desc}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-line/70 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Phnom Penh, KH</span>
                      <span className="text-brand font-semibold">AttendKH</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Bottom highlight banner */}
          <div className="mt-10 rounded-2xl border border-brand/20 bg-brand-soft/50 p-6 sm:p-8 text-center">
            <p className="font-display text-base font-bold text-brand sm:text-lg">
              {isKm
                ? "«យើងមានមោទនភាពក្នុងការរួមចំណែកកសាងអនាគតឌីជីថលនៃកម្លាំងពលកម្មកម្ពុជា»"
                : "“Proudly powering Cambodian teams from Phnom Penh to Siem Reap and Sihanoukville.”"}
            </p>
            <p className="mt-2 text-xs font-medium text-slate-600">
              {isKm
                ? "ទីស្នាក់ការកណ្តាល៖ ផ្លូវ ៣៧១ រាជធានីភ្នំពេញ • បង្កើតឡើងដោយក្តីស្រឡាញ់ចំពោះសហគ្រិនកម្ពុជា"
                : "Headquartered on Street 371, Phnom Penh • Built with pride for Cambodian entrepreneurs"}
            </p>
          </div>
        </div>
      </Section>

      {/* 6. Quick Definition / Direct Answer Block for Search & AI */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <DirectAnswerBlock
            question={
              isKm
                ? "តើ AttendKH ជាអ្វី ហើយមានទីស្នាក់ការនៅទីណា?"
                : "What is AttendKH and where is it located?"
            }
            answer={
              isKm
                ? "AttendKH គឺជាផលិតផលបច្ចេកវិទ្យាគ្រប់គ្រងកម្លាំងពលកម្មកម្ពុជា ដែលមានទីស្នាក់ការកណ្តាលនៅផ្លូវ ៣៧១ រាជធានីភ្នំពេញ។ វាដោះស្រាយបញ្ហាចុះវត្តមានតាម GPS Geofencing ការផ្ទៀងផ្ទាត់សេលហ្វី ការធ្វើសមកាលកម្ម Cloud ផ្ទាល់ និងការគណនាប្រាក់ខែទ្វេប្រាក់ USD/KHR ស្របតាមច្បាប់ការងារ និង ប.ស.ស. កម្ពុជា។"
                : "AttendKH is a workforce technology platform headquartered on Street 371, Phnom Penh, Cambodia. It addresses multi-branch attendance, shift scheduling, dual-currency payroll in USD and KHR, real-time cloud synchronization, and bilingual Khmer/English workflows."
            }
            facts={[
              {
                label: isKm ? "ទីតាំងការិយាល័យ" : "Headquarters",
                value: isKm ? "ផ្លូវ ៣៧១ រាជធានីភ្នំពេញ" : "Street 371, Phnom Penh, KH",
              },
              {
                label: isKm ? "កូអរដោនេ GPS" : "GPS Coordinates",
                value: "11.5204° N, 104.8956° E",
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
        </div>
      </Section>

      {/* 7. Grand Panoramic Headquarters & Interactive Map Section */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            title={isKm ? "ទីស្នាក់ការកណ្តាល AttendKH នៅរាជធានីភ្នំពេញ" : "Our Phnom Penh Headquarters"}
            sub={
              isKm
                ? "សូមអញ្ជើញមកទស្សនាមជ្ឈមណ្ឌលបច្ចេកវិទ្យារបស់យើងនៅផ្លូវ ៣៧១ ឬទាក់ទងជាមួយក្រុមការងារផ្ទាល់។"
                : "Centrally located on Street 371 in Phnom Penh, powering workforce operations across Cambodia."
            }
          />

          {/* Expansive Panoramic Map Canvas */}
          <div className="mt-10 relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-100 shadow-2xl min-h-[560px] sm:min-h-[620px] lg:min-h-[660px]">
            {/* Full-bleed 100% Reliable Interactive Map Embed (Street 371, Phnom Penh) */}
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=104.8840%2C11.5120%2C104.9120%2C11.5280&layer=mapnik&marker=11.5203646%2C104.8980894"
              title="AttendKH Headquarters Map Viewport (Street 371, Phnom Penh)"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />

            {/* Subtle Top-Right Open Maps App Shortcut */}
            <a
              href="https://maps.app.goo.gl/Qw1zEoirTn6TFoXg7"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-5 right-5 z-20 inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/95 px-4 py-2 text-xs font-bold text-slate-800 shadow-md backdrop-blur-md hover:bg-brand hover:text-white hover:border-brand transition-all cursor-pointer"
            >
              <span>{isKm ? "បើកលើកម្មវិធី Maps" : "Open in Google Maps App"}</span>
              <ExternalLink size={13} />
            </a>

            {/* Floating Glassmorphic Headquarters Console Card (Overlay on Desktop) */}
            <div className="relative z-10 p-4 sm:p-6 lg:p-8 max-w-lg">
              <div className="rounded-2xl sm:rounded-3xl border border-white/80 bg-white/95 backdrop-blur-xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.14)] space-y-5">
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft border border-blue-200/70 px-3.5 py-1 text-xs font-bold text-brand uppercase tracking-wider shadow-2xs">
                    <MapPin size={13} />
                    <span>{isKm ? "ទីស្នាក់ការកណ្តាល" : "HEADQUARTERS & HUB"}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open Mon–Fri</span>
                  </span>
                </div>

                {/* Address Title & Details */}
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {isKm ? "ផ្លូវ ៣៧១ រាជធានីភ្នំពេញ" : "Street 371, Phnom Penh, Cambodia"}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                    {isKm
                      ? "ការិយាល័យកណ្តាល និងមជ្ឈមណ្ឌលវិស្វកម្ម AttendKH។ សូមអញ្ជើញមកទស្សនាសម្រាប់ការណែនាំប្រព័ន្ធ និងការកំណត់សាខា។"
                      : "Central engineering hub for system onboarding, multi-branch geofence calibration, and direct team training."}
                  </p>
                </div>

                {/* Key Telemetry & Hours */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <div className="rounded-xl border border-slate-200/70 bg-slate-50/80 p-3 space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
                      <Clock size={13} className="text-brand" />
                      <span>{isKm ? "ម៉ោងធ្វើការ" : "Working Hours"}</span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 font-num">
                      8:00 – 17:30 ICT
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/70 bg-slate-50/80 p-3 space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
                      <Send size={13} className="text-brand" />
                      <span>{isKm ? "តេឡេក្រាមជំនួយ" : "Direct Support"}</span>
                    </div>
                    <a
                      href="https://t.me/attendkh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs font-bold text-brand hover:underline"
                    >
                      @attendkh
                    </a>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2 border-t border-slate-100">
                  <a
                    href="https://maps.app.goo.gl/Qw1zEoirTn6TFoXg7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand hover:bg-brand-dark px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,82,255,0.28)] transition-all duration-200 cursor-pointer"
                  >
                    <Navigation size={14} />
                    <span>{isKm ? "ទិសដៅលើ Google Maps" : "Get Directions"}</span>
                    <ExternalLink size={12} className="opacity-80" />
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs transition-all duration-200"
                  >
                    <span>{isKm ? "កក់ការណាត់ជួប" : "Schedule a Visit"}</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom-Right Floating Telemetry Chip */}
            <div className="hidden sm:inline-flex absolute bottom-5 right-5 z-20 items-center gap-2 rounded-xl border border-white/90 bg-white/95 backdrop-blur-md px-4 py-2 text-xs font-medium text-slate-700 shadow-lg">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Phnom Penh HQ • <strong className="font-num font-bold">11.5204° N, 104.8956° E</strong></span>
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
