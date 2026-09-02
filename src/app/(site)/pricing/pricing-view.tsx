"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Send,
  Building,
  ShieldCheck,
  Coins,
  Calculator,
  Users,
  ChevronDown,
  Sparkles,
  Zap,
  Radio,
  FileCheck,
  CreditCard,
  CheckCircle2,
} from "lucide-react";
import { formatUSD, formatKHR, usdToKhr } from "@/lib/currency";
import { useSite } from "@/lib/i18n";
import {
  useCopy,
  PageHero,
  Section,
  SectionHead,
  DirectAnswerBlock,
  Reveal,
  CtaBand,
} from "@/components/site/ui";

const DEFAULT_ANNUAL_FACTOR = 10 / 12; // 2 months free

interface PricingViewProps {
  dynamicPlans?: any[];
}

export function PricingView({ dynamicPlans }: PricingViewProps = {}) {
  const c = useCopy();
  const { currency, setCurrency, lang, exchangeRate, publicSettings } = useSite();
  const isKm = lang === "km";

  const [annual, setAnnual] = useState(false);
  const [calcUsers, setCalcUsers] = useState<number>(50);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const primaryPlan = dynamicPlans?.[selectedPlanIndex] || dynamicPlans?.[0];
  const unitRateMonthly = primaryPlan?.price_monthly ?? 1;
  const unitRateAnnual = unitRateMonthly * (primaryPlan?.annual_factor ?? DEFAULT_ANNUAL_FACTOR);
  const unitRate = annual ? unitRateAnnual : unitRateMonthly;
  const monthlyRateUsd = formatUSD(unitRateMonthly, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const monthlyRateKhr = formatKHR(usdToKhr(unitRateMonthly, exchangeRate));
  const annualRateUsd = formatUSD(unitRateAnnual, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const planFeatures: string[] = primaryPlan?.features?.length
    ? primaryPlan.features
    : [
        "GPS attendance & geofenced radius",
        "Live selfie verification",
        "Leave tracking & balances",
        "Mobile app for iOS & Android",
        "Basic attendance reports",
        "Telegram notifications",
      ];

  const formatUnitRate = () => {
    return currency === "KHR"
      ? formatKHR(usdToKhr(unitRate, exchangeRate))
      : formatUSD(unitRate, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const calculateTotal = (count: number) => {
    const total = count * unitRate;
    return currency === "KHR"
      ? formatKHR(usdToKhr(total, exchangeRate))
      : formatUSD(total, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  // Calculate percentage fill for range slider
  const sliderPercentage = Math.min(100, Math.max(0, ((calcUsers - 5) / (250 - 5)) * 100));

  const allIncludedFeatures = [
    {
      icon: ShieldCheck,
      title: isKm ? "វត្តមាន GPS Geofence & Selfie" : "50–200m GPS Geofence & Live Selfie",
      desc: isKm
        ? "កំណត់កូអរដោនេសាខា ៥០–២០០ម រារាំង Mock GPS និងផ្ទៀងផ្ទាត់រូបថតផ្ទាល់រាល់ការចុះវត្តមាន។"
        : "Precise branch pinpoints, anti-mock GPS defense, and live snapshot verification on every punch.",
    },
    {
      icon: Coins,
      title: isKm ? "ប្រាក់ខែស្វ័យប្រវត្តិ ដុល្លារ ($) និងរៀល (៛)" : "Automated Dual-Currency Payroll ($ / ៛)",
      desc: isKm
        ? "គណនាកិច្ចសន្យាជា USD ឬ KHR ដោយឥតលម្អៀង និងចេញប័ណ្ណបើកប្រាក់ខែ PDF ពីរភាសាលើទូរស័ព្ទ។"
        : "Contract calculations in USD or KHR with real-time conversion and bilingual digital mobile payslips.",
    },
    {
      icon: FileCheck,
      title: isKm ? "ច្បាប់ការងារកម្ពុជា & ប.ស.ស." : "Labor Law Overtime (1.5× / 2.0×) & NSSF",
      desc: isKm
        ? "មេគុណម៉ោងបន្ថែម ១.៥x និង ២.០x ថ្ងៃបុណ្យជាតិ រយៈពេលអនុគ្រោះ និងវិភាគទាន ប.ស.ស. ស្វ័យប្រវត្តិ។"
        : "1.5× regular OT, 2.0× public holiday rates, 15-min grace periods, and statutory NSSF deductions.",
    },
    {
      icon: Building,
      title: isKm ? "គ្រប់គ្រងច្រើនសាខា គ្មានដែនកំណត់" : "Unlimited Multi-Branch Console",
      desc: isKm
        ? "គ្រប់គ្រងទីតាំង និងហាងទាំងអស់ពីផ្ទាំងតែមួយ គ្មានការគិតប្រាក់បន្ថែមតាមចំនួនសាខាឡើយ។"
        : "Oversee all shops and outlets from a single unified console with zero per-branch surcharges.",
    },
    {
      icon: Radio,
      title: isKm ? "សមកាលកម្ម Cloud ភ្លាមៗ & QR Kiosk" : "Real-Time Cloud Sync & QR Kiosk",
      desc: isKm
        ? "ទិន្នន័យវត្តមានធ្វើសមកាលកម្មភ្លាមៗ និងគាំទ្រថេប្លេតរួម QR Kiosk នៅមាត់ទ្វារសាខា។"
        : "Instant live punch synchronization with shared QR tablet kiosk support at branch doors.",
    },
    {
      icon: Send,
      title: isKm ? "ជំនួយផ្ទាល់ជាភាសាខ្មែរនៅភ្នំពេញ" : "Local Phnom Penh Support via Telegram",
      desc: isKm
        ? "សេវាគាំទ្រទាន់ពេលតាម Telegram @attendkh និងទូរស័ព្ទក្នុងម៉ោងធ្វើការកម្ពុជា។"
        : "Instant direct assistance via Telegram (@attendkh) and phone from our team in Phnom Penh.",
    },
  ];

  const paymentMethods = [
    { name: "Bakong KHQR", tag: isKm ? "ស្កេនទូទាត់រហ័ស" : "Instant National QR" },
    { name: "ABA PAY", tag: isKm ? "ផ្ទេរប្រាក់ផ្ទាល់" : "ABA Bank Direct" },
    { name: "ACLEDA Corporate", tag: isKm ? "គណនីក្រុមហ៊ុន" : "ACLEDA Bank Transfer" },
    { name: "Wing Bank", tag: isKm ? "ទូទាត់ទូទាំងប្រទេស" : "Wing Cash & Account" },
    { name: "Canadia Bank", tag: isKm ? "ផ្ទេរប្រាក់ក្នុងស្រុក" : "Corporate Billing" },
    { name: "Corporate Invoice", tag: isKm ? "វិក្កយបត្រផ្លូវការ" : "Official Tax Invoice" },
  ];

  const pricingFaqs = [
    {
      q: isKm
        ? `តើពិតជាត្រឹមតែ ${monthlyRateUsd} ក្នុងម្នាក់/ខែ មែនទេ? តើមានថ្លៃលាក់កំបាំងទេ?`
        : `Is it really just ${monthlyRateUsd} per employee per month? Are there any hidden fees?`,
      a: isKm
        ? `ពិតប្រាកដណាស់! AttendKH គិតតម្លៃត្រឹមតែ ${monthlyRateUsd} ក្នុងម្នាក់/ខែ ដោយរួមបញ្ចូលគ្រប់មុខងារទាំងអស់ (វត្តមាន GPS សេលហ្វី ប្រាក់ខែទ្វេប្រាក់ ច្បាប់ការងារ និងការគ្រប់គ្រងច្រើនសាខា) ដោយគ្មានថ្លៃដំឡើង និងគ្មានថ្លៃពិន័យតាមសាខាឡើយ។`
        : `Yes, exactly ${monthlyRateUsd} per active employee per month with all features included (GPS geofencing, live selfies, dual-currency payroll, NSSF formulas, and unlimited branches). No setup fees, no feature gates, and no per-branch surcharges.`,
    },
    {
      q: isKm ? "តើខ្ញុំអាចទូទាត់ជាប្រាក់រៀល (KHR) បានទេ?" : "Can our company pay in Cambodian Riel (KHR)?",
      a: isKm
        ? "បាន។ យើងគាំទ្រការទូទាត់ទាំងប្រាក់ដុល្លារអាមេរិក ($) និងប្រាក់រៀល (៛) តាមរយៈ Bakong KHQR, ABA, ACLEDA ឬវិក្កយបត្រផ្លូវការ។"
        : "Yes. Invoices can be settled in either USD ($) or KHR (៛) via Bakong KHQR, ABA Bank, ACLEDA, or corporate bank transfer.",
    },
    {
      q: isKm ? "ចុះប្រសិនបើក្រុមហ៊ុនយើងមានច្រើនសាខា?" : "What if our business operates across 10 or 20 branches?",
      a: isKm
        ? `អ្នកអាចបន្ថែមសាខាបានដោយសេរី គ្មានដែនកំណត់! យើងគិតតែលើចំនួនបុគ្គលិកសរុបប៉ុណ្ណោះ។ ឧទាហរណ៍៖ បើអ្នកមាន ៥ សាខា សរុប ២៥ នាក់ នោះថ្លៃសេវាគឺ ${formatUSD(unitRateMonthly * 25)}/ខែ។`
        : `You can add as many physical branches as you need with zero extra branch fees. Pricing is strictly based on total active headcount. For example, 5 branches with 25 total staff is simply ${formatUSD(unitRateMonthly * 25)}/month.`,
    },
    {
      q: isKm ? `តើការគិតប្រាក់ ${monthlyRateUsd} ដំណើរការយ៉ាងដូចម្តេច?` : `How does the ${monthlyRateUsd} per user pricing work?`,
      a: isKm
        ? `អ្នកបង់ត្រឹមតែ ${monthlyRateUsd} ក្នុងមួយបុគ្គលិកសកម្មក្នុងមួយខែ។ គ្មានថ្លៃដំឡើង គ្មានកិច្ចសន្យាចងភ្ជាប់ និងគ្មានការគិតប្រាក់បន្ថែមតាមសាខាឡើយ។`
        : `You only pay ${monthlyRateUsd} per active employee per month. There are zero setup fees, no lock-in contracts, and zero per-branch surcharges.`,
    },
  ];

  return (
    <div className="w-full bg-paper text-ink">
      {/* -------------------------------------------------------------
          1. UNIFIED PAGE HERO
      ------------------------------------------------------------- */}
      <PageHero
        title={
          isKm
            ? `តម្លៃសាមញ្ញ និងតម្លាភាព៖ ${monthlyRateUsd} ក្នុងម្នាក់`
            : "Simple, transparent pricing for every employee."
        }
        sub={
          isKm
            ? "រួមបញ្ចូលគ្រប់មុខងារទាំងអស់។ គ្មានថ្លៃដំឡើង គ្មានថ្លៃបន្ថែមតាមសាខា។"
            : "Every feature included. No setup fees, no tiers, and no per-branch surcharges."
        }
      />

      {/* -------------------------------------------------------------
          2. THE ALL-INCLUSIVE PLAN SHOWCASE & LIVE ESTIMATOR
      ------------------------------------------------------------- */}
      <Section tone="white">
        <div className="mx-auto max-w-[1160px]">
          {/* Controls Bar: Billing Frequency & Currency Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-slate-200/80">
            {/* Monthly / Annual Toggle */}
            <div className="inline-flex items-center gap-1 rounded-2xl bg-slate-100/90 p-1.5 border border-slate-200/80 shadow-2xs">
              <button
                type="button"
                onClick={() => setAnnual(false)}
                aria-pressed={!annual}
                className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  !annual
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>
                  {isKm
                    ? `ទូទាត់ប្រចាំខែ (${formatUSD(unitRateMonthly)}/ម្នាក់)`
                    : `Monthly (${formatUSD(unitRateMonthly)}/user)`}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setAnnual(true)}
                aria-pressed={annual}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  annual
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>
                  {isKm
                    ? `ទូទាត់ប្រចាំឆ្នាំ (${formatUSD(unitRateAnnual)}/ម្នាក់)`
                    : `Annual (${formatUSD(unitRateAnnual)}/user)`}
                </span>
                <span className="rounded-full bg-brand-soft border border-blue-200/60 px-2 py-0.5 text-[10.5px] font-bold text-brand uppercase tracking-wider">
                  {isKm ? "ឥតគិតថ្លៃ ២ ខែ" : "2 Months Free"}
                </span>
              </button>
            </div>

            {/* Currency Switcher */}
            <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
              <span className="font-semibold text-slate-700">{isKm ? "រូបិយប័ណ្ណ៖" : "Currency:"}</span>
              <div className="inline-flex rounded-xl border border-slate-200/80 bg-slate-100/90 p-1 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setCurrency("USD")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    currency === "USD"
                      ? "bg-brand text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  USD ($)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("KHR")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    currency === "KHR"
                      ? "bg-brand text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  KHR (៛)
                </button>
              </div>
            </div>
          </div>

          {/* Clean, Refined Showcase Card */}
          <div className="relative mt-10 rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,82,255,0.04),0_1px_3px_rgba(0,0,0,0.02)] overflow-hidden">
            {/* Subtle ambient lighting decoration */}
            <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-[radial-gradient(ellipse_at_top_right,rgba(0,82,255,0.045),transparent_70%)] pointer-events-none" />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Plan Identity, Rate & Feature List */}
              <div className="lg:col-span-7 space-y-6">
                {/* Plan Tier Switcher (if multiple plans exist) */}
                {dynamicPlans && dynamicPlans.length > 1 && (
                  <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100/90 border border-slate-200/80 w-fit">
                    {dynamicPlans.map((plan, idx) => (
                      <button
                        key={plan.id || plan.slug || idx}
                        type="button"
                        onClick={() => setSelectedPlanIndex(idx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          selectedPlanIndex === idx
                            ? "bg-white text-slate-900 shadow-xs font-bold"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        <span>{plan.name}</span>
                        <span className="font-num text-[11px] text-brand ml-1 font-bold">
                          (${plan.price_monthly ?? 1})
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-brand border border-blue-200/70 px-3.5 py-1 text-[11.5px] font-bold uppercase tracking-wider shadow-2xs">
                    <Sparkles size={13} className="text-brand" />
                    <span>{primaryPlan?.badge_text || (isKm ? "គម្រោងតម្លៃច្បាស់លាស់" : "TRANSPARENT PLAN")}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-200/70 px-3.5 py-1 text-[11.5px] font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{isKm ? "ដំណើរការភ្លាមៗ គ្មានថ្លៃដំឡើង" : "Instant Setup • No Hidden Fees"}</span>
                  </span>
                </div>

                {/* Plan Title & Subtitle */}
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-900 leading-tight">
                    {primaryPlan?.name || (isKm ? "គម្រោងរួមបញ្ចូលគ្រប់មុខងារ (All-in-One)" : "All-in-One Plan")}
                  </h2>
                  <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-slate-600 max-w-xl">
                    {primaryPlan?.description ||
                      (isKm
                        ? "ប្រព័ន្ធកត់ត្រាវត្តមានតាម GPS និងគណនាប្រាក់ខែពេញលេញត្រឹមតែ ១ ដុល្លារ/ម្នាក់/ខែ។ រួមបញ្ចូលគ្រប់មុខងារទាំងអស់ដោយគ្មានដែនកំណត់។"
                        : "Complete attendance & automated Cambodian payroll engine for just $1 per active user per month. All features unlocked with zero tier restrictions.")}
                  </p>
                </div>

                {/* Flat Unit Price Display with Unique Numeric Typography */}
                <div className="flex items-baseline gap-2 pt-2 border-t border-slate-100">
                  <span className="font-price text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 tabular-nums">
                    {formatUnitRate()}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-500">
                    {isKm ? "/ បុគ្គលិកសកម្ម / ខែ" : "/ active employee / month"}
                  </span>
                </div>

                {/* Feature Highlights Grid (2 Columns with Custom Bullet Pills) */}
                <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
                  {planFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10 text-brand shrink-0 border border-blue-200/60 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-3.5">
                  <Link
                    href={primaryPlan?.cta_url || "/contact"}
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand hover:bg-brand-dark px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,82,255,0.28)] hover:shadow-[0_6px_20px_rgba(0,82,255,0.38)] transition-all duration-200 group cursor-pointer"
                  >
                    <span>{primaryPlan?.cta_text || (isKm ? "ចាប់ផ្តើមប្រើសាកល្បងឥតគិតថ្លៃ" : "Start free trial")}</span>
                    <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={publicSettings.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 hover:border-slate-300 px-5 py-3.5 text-sm font-semibold text-slate-800 shadow-2xs transition-all duration-200 cursor-pointer"
                  >
                    <Send size={14} className="text-brand" />
                    <span>Telegram @attendkh</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Interactive Team Cost Estimator Panel */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-slate-200/90 bg-slate-50/80 backdrop-blur-sm p-6 sm:p-7 space-y-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
                  {/* Calculator Header */}
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft text-brand border border-blue-200/60 shadow-2xs">
                        <Calculator size={16} />
                      </div>
                      <span className="font-display text-sm sm:text-[15px] font-bold text-slate-900">
                        {isKm ? "គណនាថ្លៃសេវាសម្រាប់ក្រុម" : "Team Cost Calculator"}
                      </span>
                    </div>

                    <div className="font-num text-xs font-bold text-brand bg-brand-soft border border-blue-200/60 px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-2xs">
                      <Users size={12} />
                      <span>{calcUsers} {isKm ? "បុគ្គលិក" : "Staff"}</span>
                    </div>
                  </div>

                  {/* Optional Plan Limits Notice */}
                  {primaryPlan?.limits_text && (
                    <p className="text-xs font-medium text-slate-500 -mt-1">{primaryPlan.limits_text}</p>
                  )}

                  {/* Slider & Headcount Controls */}
                  <div className="space-y-3.5">
                    <label
                      htmlFor="team-size-slider"
                      className="flex items-center justify-between text-xs text-slate-600 font-semibold cursor-pointer"
                    >
                      <span>{isKm ? "ចំនួនបុគ្គលិក" : "Adjust headcount"}</span>
                      <span className="text-slate-800">
                        <span className="font-num text-sm font-bold text-slate-900">{calcUsers}</span>{" "}
                        <span className="font-normal text-slate-500">{isKm ? "នាក់" : "employees"}</span>
                      </span>
                    </label>

                    {/* Styled Range Input */}
                    <div className="relative flex items-center">
                      <input
                        id="team-size-slider"
                        type="range"
                        min="5"
                        max="250"
                        step="5"
                        value={calcUsers}
                        aria-label={isKm ? "ចំនួនបុគ្គលិក" : "Adjust headcount"}
                        aria-valuemin={5}
                        aria-valuemax={250}
                        aria-valuenow={calcUsers}
                        onChange={(e) => setCalcUsers(Number(e.target.value))}
                        className="pricing-slider w-full"
                        style={{
                          background: `linear-gradient(to right, #0052FF 0%, #0052FF ${sliderPercentage}%, #E2E8F0 ${sliderPercentage}%, #E2E8F0 100%)`,
                        }}
                      />
                    </div>

                    {/* Quick Preset Buttons Row with Unique Number Font */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {[10, 25, 50, 70, 100, 200].map((preset) => {
                        const isActive = calcUsers === preset;
                        return (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => setCalcUsers(preset)}
                            className={`font-num rounded-lg px-3 py-1.5 text-xs font-bold transition-all duration-150 cursor-pointer ${
                              isActive
                                ? "bg-brand text-white shadow-xs border border-brand"
                                : "bg-white border border-slate-200/90 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-2xs"
                            }`}
                          >
                            {preset}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Dynamic Total Cost Box with Elevated Contrast */}
                  <div className="relative rounded-xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] space-y-2.5 overflow-hidden">
                    <span className="text-xs font-semibold text-slate-500 block">
                      {annual
                        ? isKm ? "ថ្លៃសរុបប្រចាំឆ្នាំ" : "Total Annual Investment"
                        : isKm ? "ថ្លៃសរុបប្រចាំខែ" : "Total Monthly Investment"}
                    </span>

                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-price text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-900 tabular-nums">
                        {calculateTotal(calcUsers)}
                      </span>
                      <span className="font-num text-xs font-medium text-slate-400">
                        {annual
                          ? isKm ? "គិតថ្លៃប្រចាំឆ្នាំ" : "billed annually"
                          : isKm ? "គិតថ្លៃប្រចាំខែ" : "billed monthly"}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="shrink-0" />
                        <span>{isKm ? "រួមបញ្ចូលទាំងវត្តមាន និងប្រាក់ខែពេញលេញ" : "Includes full payroll + attendance engine"}</span>
                      </span>
                    </div>
                  </div>

                  {/* Settlement Note & Supported Currencies */}
                  <div className="text-[11.5px] text-slate-500 flex items-center justify-between pt-1">
                    <span className="font-medium">{isKm ? "ទូទាត់តាម Bakong & ABA" : "Settle via Bakong KHQR & ABA"}</span>
                    <span className="font-num text-xs font-bold text-slate-700 bg-white border border-slate-200/80 px-2 py-0.5 rounded-md shadow-2xs">
                      USD & KHR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------
          3. WHAT YOU GET FOR $1 / EMPLOYEE (6 Core Capabilities)
      ------------------------------------------------------------- */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            title={
              isKm
                ? `អ្វីគ្រប់យ៉ាងដែលទទួលបានក្នុងតម្លៃ ${monthlyRateUsd} / ម្នាក់`
                : `Everything Unlocked for ${monthlyRateUsd} Per Employee`
            }
            sub={
              isKm
                ? "គ្មានការចាក់សោមុខងារ គ្មានការបង្ខំដំឡើងគម្រោង។ គ្រប់អាជីវកម្មទទួលបានប្រព័ន្ធពេញលេញ។"
                : "No locked features or artificial tier walls. Every business gets the full enterprise engine."
            }
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allIncludedFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-brand hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand mb-4 border border-blue-200/60 shadow-2xs">
                        <Icon size={22} />
                      </div>
                      <h3 className="font-display text-[17px] font-bold text-slate-900 leading-snug">
                        {f.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-[13.5px] leading-relaxed text-slate-600">
                        {f.desc}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-slate-100 pt-3.5 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                      <CheckCircle2 size={14} />
                      <span>{isKm ? "រួមបញ្ចូលជាស្រេច" : "Included by Default"}</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------
          4. CAMBODIAN PAYMENT METHODS INFRASTRUCTURE
      ------------------------------------------------------------- */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <div className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand">
                  {isKm ? "វិធីសាស្ត្រទូទាត់ប្រាក់នៅកម្ពុជា" : "Payment Infrastructure"}
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
                  {isKm
                    ? "ទូទាត់ងាយស្រួលតាមធនាគារក្នុងស្រុក"
                    : "Seamless Settlement via Local Cambodian Banking Channels"}
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-200/70 shadow-2xs">
                <Check size={13} strokeWidth={2.5} />
                <span>USD ($) & KHR (៛) Supported</span>
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {paymentMethods.map((m) => (
                <div
                  key={m.name}
                  className="rounded-xl border border-slate-200/90 bg-white p-4 text-center shadow-2xs space-y-1 hover:border-slate-300 transition-colors"
                >
                  <span className="font-display text-xs font-bold text-slate-900 block">{m.name}</span>
                  <span className="text-[10.5px] text-slate-500 font-mono block">{m.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------
          5. DIRECT ANSWER BLOCK & FAQ ACCORDION
      ------------------------------------------------------------- */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px] space-y-12">
          {/* Direct Answer Block for Search & AI */}
          <DirectAnswerBlock
            question={
              isKm
                ? "តើ AttendKH មានតម្លៃប៉ុន្មានសម្រាប់អាជីវកម្មនៅកម្ពុជា?"
                : "How much does AttendKH cost for businesses in Cambodia?"
            }
            answer={
              isKm
                ? `AttendKH គិតតម្លៃសាមញ្ញត្រឹមតែ ${monthlyRateUsd} ក្នុងម្នាក់/ខែ (ឬ ${monthlyRateKhr}) ដោយរួមបញ្ចូលគ្រប់មុខងារទាំងអស់ រួមមាន វត្តមានតាម GPS Geofencing ការផ្ទៀងផ្ទាត់សេលហ្វី ម៉ាស៊ីនប្រាក់ខែស្វ័យប្រវត្តិកម្ពុជា និងការគ្រប់គ្រងច្រើនសាខា។ គ្មានថ្លៃដំឡើង និងគ្មានថ្លៃពិន័យតាមសាខាឡើយ។`
                : `AttendKH charges one simple rate of ${monthlyRateUsd} per active employee per month with all capabilities included (GPS geofencing, live selfie verification, Cambodian dual-currency payroll, NSSF formulas, and unlimited branches). There are zero setup fees or branch surcharges.`
            }
            facts={[
              {
                label: isKm ? "តម្លៃសេវា" : "Pricing Rate",
                value: `${monthlyRateUsd} / user / mo`,
              },
              {
                label: isKm ? "មុខងាររួមបញ្ចូល" : "Included Features",
                value: isKm ? "គ្រប់មុខងារទាំងអស់ (All-In)" : "All-Inclusive Access",
              },
              {
                label: isKm ? "ការទូទាត់ប្រចាំឆ្នាំ" : "Annual Billing",
                value: isKm ? `ការទូទាត់ប្រចាំឆ្នាំ (${annualRateUsd}/ម្នាក់)` : `Annual billing (${annualRateUsd}/mo)`,
              },
              {
                label: isKm ? "វិធីសាស្ត្រទូទាត់" : "Payment Options",
                value: "Bakong KHQR, ABA, ACLEDA, USD & KHR",
              },
            ]}
          />

          {/* Clean FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-slate-900 text-center mb-8">
              {isKm ? "សំណួរដែលសួរញឹកញាប់អំពីតម្លៃ" : "Frequently Asked Questions About Pricing"}
            </h3>

            <div className="space-y-3">
              {pricingFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    className="rounded-xl border border-slate-200/90 bg-white overflow-hidden transition-colors shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors select-none"
                      aria-expanded={isOpen}
                    >
                      <span className={`font-display text-[15px] font-bold transition-colors ${isOpen ? "text-brand" : "text-slate-900"}`}>
                        {faq.q}
                      </span>
                      <motion.span
                        animate={{
                          rotate: isOpen ? 180 : 0,
                          backgroundColor: isOpen ? "var(--color-brand, #0052FF)" : "#F1F5F9",
                          color: isOpen ? "#FFFFFF" : "#64748B",
                        }}
                        transition={{ type: "spring", stiffness: 350, damping: 24 }}
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate-500 transition-colors"
                      >
                        <ChevronDown size={14} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="faq-a"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                              height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                              opacity: { duration: 0.25, delay: 0.04, ease: "easeOut" },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                              opacity: { duration: 0.15, ease: "easeIn" },
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-xs sm:text-[13.5px] leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                            <p>{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------
          6. CLOSING CALL TO ACTION
      ------------------------------------------------------------- */}
      <CtaBand
        title={
          isKm
            ? `ចាប់ផ្តើមប្រើប្រាស់ AttendKH ត្រឹមតែ ${monthlyRateUsd} ក្នុងម្នាក់`
            : `Ready to streamline your attendance and payroll for ${monthlyRateUsd} per employee?`
        }
        sub={
          isKm
            ? "ដំឡើងសាខាដំបូងរបស់អ្នកក្នុងរយៈពេល ៥ នាទី ឬទាក់ទងមកកាន់ក្រុមការងារយើងនៅភ្នំពេញ។"
            : "Set up your first branch in five minutes, or contact our Phnom Penh team."
        }
      />
    </div>
  );
}
