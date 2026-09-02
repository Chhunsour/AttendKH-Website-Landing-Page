"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Building,
  ShieldCheck,
  Headphones,
  Check,
  ArrowRight,
  Send,
  Globe,
  Coins,
  FileCheck,
  Sparkles,
  Users,
  Radio,
  ExternalLink,
  Compass,
} from "lucide-react";
import {
  useCopy,
  Section,
  SectionHead,
  Reveal,
  CtaBand,
} from "@/components/site/ui";
import { HeadquartersMap } from "@/components/site/headquarters-map";
import { useSite } from "@/lib/i18n";

export function AboutView() {
  const c = useCopy();
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
        : "Direct access to our Phnom Penh team via Telegram (@MPG_by_ongphaly), phone, and on-site branch setup visits during standard Cambodian business hours.",
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
    <div className="bg-paper">
      {/* 1. Cinematic Hero Header with Phnom Penh Studio Imagery */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0052FF] to-[#0043D6] text-white pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Subtle geometric grid backdrop */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-14">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white border border-white/20 shadow-xs">
              <MapPin size={13} className="text-amber-300" />
              <span>{isKm ? "វិស្វកម្មនៅរាជធានីភ្នំពេញ" : "Engineered in Phnom Penh"}</span>
            </div>

            <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              {isKm
                ? "បង្កើតឡើងនៅភ្នំពេញ សម្រាប់អាជីវកម្មកម្ពុជា"
                : "Built in Phnom Penh for Cambodian Businesses"}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-blue-100 max-w-2xl">
              {isKm
                ? "ភាសាខ្មែរជាចម្បង គិតជារៀល និងដុល្លារ និងសង្វាក់តាមការងារជាក់ស្តែងនៅទីនេះ។"
                : "Khmer first, dual-currency by default, and engineered for the daily realities of running shifts and payroll in Cambodia."}
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand shadow-lg shadow-blue-950/20 hover:bg-blue-50 transition"
              >
                <span>{isKm ? "កក់ការបង្ហាញប្រព័ន្ធ" : "Book a Demonstration"}</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href="https://t.me/MPG_by_ongphaly"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-5 py-3 text-sm font-semibold text-white border border-white/20 hover:bg-white/20 transition"
              >
                <Send size={14} />
                <span>Telegram @MPG_by_ongphaly</span>
              </a>
            </div>
          </div>

          {/* Hero Visual Bento: Authentic Phnom Penh Studio & Engineering Imagery */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            {/* Main Office / Team Photo */}
            <div className="md:col-span-8 relative overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl h-[320px] sm:h-[400px]">
              <Image
                src="/about/office.jpg"
                alt="AttendKH Engineering Studio in Phnom Penh"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-brand px-2.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider mb-1.5">
                    <Building size={12} />
                    Headquarters
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
                    AttendKH Tech Studio • Street 371, Phnom Penh
                  </h3>
                  <p className="text-xs text-white/80">
                    Local software architecture, customer support, and product engineering.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Snapshot & Metrics Card */}
            <div className="md:col-span-4 flex flex-col gap-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-xl flex-1 min-h-[190px]">
                <Image
                  src="/about/team.jpg"
                  alt="AttendKH Engineering Team"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4">
                  <span className="text-[11px] font-bold text-amber-300 uppercase">Product & Engineering</span>
                  <p className="text-sm font-bold text-white">Cambodian Talent Building for Cambodia</p>
                </div>
              </div>

              {/* Fast live stats badge */}
              <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-5 text-white flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blue-100 font-medium">Active Deployment</span>
                  <span className="flex items-center gap-1 text-emerald-300 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Real-Time
                  </span>
                </div>
                <div className="mt-2">
                  <span className="font-price text-2xl font-extrabold text-white">50–200m</span>
                  <p className="text-xs text-blue-100">Point-in-time GPS geofence with zero 24/7 background tracking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Origin Story & Founder Leadership Showcase */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: The Real Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1 text-xs font-bold text-brand uppercase tracking-wider">
                <Compass size={13} />
                <span>{isKm ? "ដំណើរដើមទងរបស់យើង" : "Our Origin Story"}</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink leading-tight">
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

              {/* Verified Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="rounded-xl border border-line bg-mist/60 p-3 text-left">
                  <span className="font-price text-lg font-extrabold text-ink block">$1.00</span>
                  <span className="text-[11.5px] text-slate-500 font-medium">Per user / month</span>
                </div>
                <div className="rounded-xl border border-line bg-mist/60 p-3 text-left">
                  <span className="font-price text-lg font-extrabold text-ink block">&lt; 1s</span>
                  <span className="text-[11.5px] text-slate-500 font-medium">Real-time sync</span>
                </div>
                <div className="rounded-xl border border-line bg-mist/60 p-3 text-left col-span-2 sm:col-span-1">
                  <span className="font-price text-lg font-extrabold text-brand block">100%</span>
                  <span className="text-[11.5px] text-slate-500 font-medium">Khmer-native code</span>
                </div>
              </div>
            </div>

            {/* Right Column: Founder & Leadership Card */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-xl shadow-slate-900/5 ring-1 ring-slate-900/5">
                <div className="relative h-64 sm:h-72 w-full bg-slate-100">
                  <Image
                    src="/ong-phaly.png"
                    alt="Mr. Ong Phaly — Managing Director of AttendKH"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 480px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="rounded-md bg-brand px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-white">
                      Executive Leadership
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mt-1">Mr. Ong Phaly</h3>
                    <p className="text-xs text-blue-100">Managing Director & Product Architect</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <blockquote className="border-l-2 border-brand pl-3.5 italic text-[13.5px] text-body leading-relaxed">
                    {isKm
                      ? "«យើងមិនគ្រាន់តែបង្កើតកម្មវិធីទេ — យើងកសាងប្រព័ន្ធហេដ្ឋារចនាសម្ព័ន្ធគ្រប់គ្រងកម្លាំងពលកម្ម ដែលផ្តល់តម្លៃដល់ពេលវេលា និងការខិតខំរបស់បុគ្គលិកគ្រប់រូបនៅកម្ពុជា។»"
                      : "“We did not just build software — we engineered a transparent workforce infrastructure that respects the time and hard work of every Cambodian employee.”"}
                  </blockquote>

                  <div className="flex items-center justify-between border-t border-line pt-3.5 text-xs text-slate-500">
                    <span className="font-medium">Phnom Penh, Cambodia</span>
                    <a
                      href="https://t.me/MPG_by_ongphaly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-brand hover:underline"
                    >
                      <Send size={12} />
                      <span>Contact @MPG_by_ongphaly</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Core Capability Highlights - 4 Clean Cards */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.label} delay={i * 0.05}>
                  <div className="group relative h-full rounded-2xl sm:rounded-3xl border border-line bg-white p-6 shadow-xs hover:border-brand/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
                    <div>
                      {/* Icon & Pill Badge */}
                      <div className="flex items-center justify-between gap-2 mb-5">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand border border-blue-200/60 shadow-2xs">
                          <Icon size={20} />
                        </div>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 border border-slate-200/70 shadow-2xs">
                          {s.pill}
                        </span>
                      </div>

                      {/* Stat Value */}
                      <div>
                        <span className="font-price text-2xl font-extrabold tracking-tight text-slate-900 block leading-tight">
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

      {/* 4. Six Core Product Principles - Engineered Bento Grid */}
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
            {/* 01. Khmer-Native by Design */}
            <div className="lg:col-span-7">
              <Reveal delay={0.02}>
                <article className="h-full rounded-2xl sm:rounded-3xl border border-line bg-white p-6 sm:p-8 shadow-xs hover:border-brand/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand border border-blue-200/60 shadow-2xs">
                        <Globe size={22} />
                      </div>
                      <span className="font-num text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/70">
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

            {/* 02. Dual-Currency USD & KHR Engine */}
            <div className="lg:col-span-5">
              <Reveal delay={0.06}>
                <article className="h-full rounded-2xl sm:rounded-3xl border border-line bg-white p-6 sm:p-8 shadow-xs hover:border-brand/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand border border-blue-200/60 shadow-2xs">
                        <Coins size={22} />
                      </div>
                      <span className="font-num text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/70">
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

            {/* 03. Point-in-Time GPS Verification */}
            <div className="lg:col-span-4">
              <Reveal delay={0.09}>
                <article className="h-full rounded-2xl sm:rounded-3xl border border-line bg-white p-6 sm:p-7 shadow-xs hover:border-brand/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-5">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand border border-blue-200/60 shadow-2xs">
                        <ShieldCheck size={22} />
                      </div>
                      <span className="font-num text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/70">
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

                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3 flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">Privacy Perimeter</span>
                    <span className="font-num font-bold text-slate-900 bg-white border border-slate-200 px-2.5 py-1 rounded-lg shadow-2xs">
                      50m – 200m
                    </span>
                  </div>
                </article>
              </Reveal>
            </div>

            {/* 04. Cambodian Labor Law & NSSF */}
            <div className="lg:col-span-4">
              <Reveal delay={0.12}>
                <article className="h-full rounded-2xl sm:rounded-3xl border border-line bg-white p-6 sm:p-7 shadow-xs hover:border-brand/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-5">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand border border-blue-200/60 shadow-2xs">
                        <FileCheck size={22} />
                      </div>
                      <span className="font-num text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/70">
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

                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="font-num text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200/70">
                      1.5× OT
                    </span>
                    <span className="font-num text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200/70">
                      2.0× Holiday
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/70">
                      NSSF
                    </span>
                  </div>
                </article>
              </Reveal>
            </div>

            {/* 05. Real-Time Cloud Synchronization */}
            <div className="lg:col-span-4">
              <Reveal delay={0.15}>
                <article className="h-full rounded-2xl sm:rounded-3xl border border-line bg-white p-6 sm:p-7 shadow-xs hover:border-brand/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-5">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand border border-blue-200/60 shadow-2xs">
                        <Radio size={22} />
                      </div>
                      <span className="font-num text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/70">
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

            {/* 06. Real Local Support in Phnom Penh */}
            <div className="lg:col-span-12">
              <Reveal delay={0.18}>
                <article className="rounded-2xl sm:rounded-3xl border border-line bg-white p-6 sm:p-8 shadow-xs hover:border-brand/40 hover:shadow-lg transition-all duration-200">
                  <div className="grid lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-7 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand border border-blue-200/60 shadow-2xs">
                          <Headphones size={22} />
                        </div>
                        <span className="font-num text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/70">
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
                        href="https://t.me/MPG_by_ongphaly"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-brand-dark transition-all"
                      >
                        <Send size={14} />
                        <span>Telegram @MPG_by_ongphaly</span>
                      </a>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-xl border border-line bg-white hover:bg-slate-50 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs transition-all"
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

      {/* 5. Nationwide Operations & Real Workplaces Across Cambodia */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold text-brand uppercase tracking-wider">
              <Building size={13} className="text-brand" />
              <span>{isKm ? "វត្តមានទូទាំងប្រទេសកម្ពុជា" : "Nationwide Coverage"}</span>
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              {isKm
                ? "បច្ចេកវិទ្យាបង្កើតឡើងដោយកូនខ្មែរ ដើម្បីអាជីវកម្មកម្ពុជា"
                : "Powering Operations Across Every Cambodian Province"}
            </h2>
            <p className="text-sm leading-relaxed text-body sm:text-base">
              {isKm
                ? "ពីហាងកាហ្វេ និងភោជនីយដ្ឋាននៅភ្នំពេញ ដល់សណ្ឋាគារនៅសៀមរាប និងឃ្លាំងស្តុកទំនិញនៅកំពង់ផែក្រុងព្រះសីហនុ — AttendKH ដំណើរការយ៉ាងរលូនគ្រប់ទីកន្លែង។"
                : "From cafes and boutiques in Phnom Penh to boutique hotels in Siem Reap and logistics yards in Sihanoukville."}
            </p>
          </div>

          {/* Sector Realities Grid with Real Cambodian Workplace Photography */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sector 1: Restaurants & Cafes */}
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-xs hover:border-brand hover:shadow-lg transition-all">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="/industry_restaurants_cambodia_1788319571060.jpg"
                  alt="Cambodian F&B and Coffee Chain Operations"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-bold text-white uppercase tracking-wider">
                  Food & Beverage
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h4 className="font-display text-base font-bold text-ink">Restaurants & Coffee Chains</h4>
                <p className="text-xs text-body leading-relaxed">
                  Split shifts, morning openings, late-night closing staff, and door QR tablet kiosks for fast check-in.
                </p>
              </div>
            </div>

            {/* Sector 2: Offices & Tech Workplaces */}
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-xs hover:border-brand hover:shadow-lg transition-all">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="/industry_offices_cambodia_1788319517336.jpg"
                  alt="Cambodian Tech and Corporate Offices"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-bold text-white uppercase tracking-wider">
                  Corporate & Tech
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h4 className="font-display text-base font-bold text-ink">Agencies & Corporate Teams</h4>
                <p className="text-xs text-body leading-relaxed">
                  Flexible working hours, leave balance approvals, and automatic NSSF reporting exports in 1-click.
                </p>
              </div>
            </div>

            {/* Sector 3: Logistics & Hospitality */}
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-xs hover:border-brand hover:shadow-lg transition-all">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="/about/network-map.jpg"
                  alt="Cambodia Multi-Branch Logistics and Branch Network"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-bold text-white uppercase tracking-wider">
                  Multi-Branch Retail
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h4 className="font-display text-base font-bold text-ink">Nationwide Multi-Location</h4>
                <p className="text-xs text-body leading-relaxed">
                  Single management console spanning 50+ branches across Phnom Penh, Siem Reap, Battambang, and Sihanoukville.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>



      {/* 7. Headquarters & Interactive Map Section */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            title={isKm ? "ទីស្នាក់ការកណ្តាល AttendKH នៅរាជធានីភ្នំពេញ" : "Our Phnom Penh Headquarters"}
            sub={
              isKm
                ? "សូមអញ្ជើញមកទស្សនាមជ្ឈមណ្ឌលបច្ចេកវិទ្យារបស់យើងនៅផ្លូវ ៣៧១ ឬទាក់ទងជាមួយក្រុមការងារផ្ទាល់។"
                : "Centrally located on Street 371 in Phnom Penh, powering workforce operations across Cambodia."
            }
          />

          <div className="mt-10">
            <HeadquartersMap googleMapsUrl="https://maps.app.goo.gl/Qw1zEoirTn6TFoXg7" />
          </div>
        </div>
      </Section>

      {/* 8. Conversion CTA Band */}
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
    </div>
  );
}
