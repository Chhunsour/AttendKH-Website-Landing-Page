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
import {
  BakongLogo,
  AbaBankLogo,
  AcledaBankLogo,
  CanadiaBankLogo,
  WingBankLogo,
  CorporateTransferLogo,
} from "@/components/site/bank-logos";

const DEFAULT_ANNUAL_FACTOR = 10 / 12; // 2 months free

interface PricingViewProps {
  dynamicPlans?: any[];
}

export function PricingView({ dynamicPlans }: PricingViewProps = {}) {
  const c = useCopy();
  const { currency, setCurrency, lang, exchangeRate, publicSettings } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

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
      title: isKm
        ? "វត្តមាន GPS Geofence & Selfie"
        : isZh
        ? "50–200m GPS 围栏与真人自拍打卡"
        : "50–200m GPS Geofence & Live Selfie",
      desc: isKm
        ? "កំណត់កូអរដោនេសាខា ៥០–២០០ម រារាំង Mock GPS និងផ្ទៀងផ្ទាត់រូបថតផ្ទាល់រាល់ការចុះវត្តមាន។"
        : isZh
        ? "精准定位门市半径，底层拦截虚拟定位作弊，打卡同时附带真人自拍。"
        : "Precise branch pinpoints, anti-mock GPS defense, and live snapshot verification on every punch.",
    },
    {
      icon: Coins,
      title: isKm
        ? "ប្រាក់ខែស្វ័យប្រវត្តិ ដុល្លារ ($) និងរៀល (៛)"
        : isZh
        ? "美元与柬币双币自动化算薪引擎"
        : "Automated Dual-Currency Payroll ($ / ៛)",
      desc: isKm
        ? "គណនាកិច្ចសន្យាជា USD ឬ KHR ដោយឥតលម្អៀង និងចេញប័ណ្ណបើកប្រាក់ខែ PDF ពីរភាសាលើទូរស័ព្ទ។"
        : isZh
        ? "灵活支持美元与柬币合同，自动依据官方汇率结算并生成双语电子工资条。"
        : "Contract calculations in USD or KHR with real-time conversion and bilingual digital mobile payslips.",
    },
    {
      icon: FileCheck,
      title: isKm
        ? "ច្បាប់ការងារ & របាយការណ៍ ប.ស.ស."
        : isZh
        ? "柬埔寨劳工法加班规则与 NSSF 导出"
        : "Labor Law Overtime & NSSF Reports",
      desc: isKm
        ? "អនុវត្តរូបមន្តម៉ោងបន្ថែម ១.៥x និង ២.០x ស្វ័យប្រវត្តិ រួមទាំងការនាំចេញទិន្នន័យស្របតាមទម្រង់ ប.ស.ស.។"
        : isZh
        ? "内置法定1.5倍平日与2.0倍节日加班公式，一键导出合规 NSSF 社保申报报表。"
        : "Built-in statutory 1.5x regular and 2.0x holiday multipliers with 1-click NSSF-ready exports.",
    },
    {
      icon: Building,
      title: isKm
        ? "គ្រប់គ្រងច្រើនសាខា គ្មានដែនកំណត់"
        : isZh
        ? "无限多分店接入与四级角色权限"
        : "Unlimited Branch Network & 4 Tiers",
      desc: isKm
        ? "បង្កើតសាខាបានគ្មានដែនកំណត់ ជាមួយការបែងចែកសិទ្ធិ ៤ កម្រិត ចាប់ពី Owner រហូតដល់បុគ្គលិក។"
        : isZh
        ? "支持全国无限门店接入，提供老板、HR、店长及员工4级精细化权限隔离。"
        : "Add unlimited physical outlets across Cambodia with 4-tier Role-Based Access Control.",
    },
    {
      icon: Zap,
      title: isKm
        ? "ដំណើរការ Offline & Sync ស្វ័យប្រវត្តិ"
        : isZh
        ? "弱网离线打卡与静默数据同步"
        : "Offline Queue & Silent Cloud Sync",
      desc: isKm
        ? "បុគ្គលិកអាចចុះវត្តមានបានទោះបីជាគ្មានអ៊ីនធឺណិត ហើយប្រព័ន្ធនឹង sync ដោយស្វ័យប្រវត្តិពេលមានសេវា។"
        : isZh
        ? "施工现场或地库断网亦可正常自拍打卡，恢复网络后自动加密同步至云端。"
        : "Frontline teams clock in without cellular data; encrypted timestamps sync silently once reconnected.",
    },
    {
      icon: Send,
      title: isKm
        ? "ដំណឹង Telegram & សេវាគាំទ្រផ្ទាល់"
        : isZh
        ? "Telegram 智能预警与金边专属支持"
        : "Telegram Alerts & Direct Phnom Penh Support",
      desc: isKm
        ? "ផ្ញើសារជូនដំណឹងពេលបុគ្គលិកយឺតតាម Telegram Bot ជាមួយក្រុមការងារគាំទ្រផ្ទាល់នៅភ្នំពេញ។"
        : isZh
        ? "缺勤迟到即刻触发 Telegram Bot 预警通知，金边技术顾问随时响应解答。"
        : "Instant Telegram bot alerts on late punches, backed by our dedicated support team in Phnom Penh.",
    },
  ];

  const paymentMethods = [
    {
      name: "Bakong KHQR",
      tag: "National Bank of Cambodia",
      logo: BakongLogo,
    },
    {
      name: "ABA Bank",
      tag: "PayWay / KHQR",
      logo: AbaBankLogo,
    },
    {
      name: "ACLEDA Bank",
      tag: "ToanChet / QR",
      logo: AcledaBankLogo,
    },
    {
      name: "Canadia Bank",
      tag: "Direct Settlement",
      logo: CanadiaBankLogo,
    },
    {
      name: "Wing Bank",
      tag: "Enterprise Payroll",
      logo: WingBankLogo,
    },
    {
      name: "Corporate Transfer",
      tag: "Official Bank Invoice",
      logo: CorporateTransferLogo,
    },
  ];

  const faqs = [
    {
      q: isKm
        ? "តើមានការគិតថ្លៃដំឡើង ឬថ្លៃលាក់កំបាំងផ្សេងទៀតទេ?"
        : isZh
        ? "系统是否有任何初装费、硬件费或隐藏收费？"
        : "Are there any setup fees, hardware purchases, or hidden charges?",
      a: isKm
        ? "គ្មានដាច់ខាត។ AttendKH ដំណើរការលើទូរស័ព្ទដៃរបស់បុគ្គលិក (iOS & Android) ឬថេប្លេត QR Kiosk ដែលមានស្រាប់។ គ្មានថ្លៃដំឡើង និងគ្មានកិច្ចសន្យាចងភ្ជាប់ឡើយ។"
        : isZh
        ? "完全没有。AttendKH 纯云端运行，员工直接使用自有 iOS/Android 手机或门市既有平板打卡，无需购买昂贵的考勤机，无任何初装费。"
        : "Zero. AttendKH runs entirely on employee smartphones (iOS & Android) and existing tablet kiosks. There is no hardware to buy, no installation fees, and no annual lock-in.",
    },
    {
      q: isKm
        ? "តើខ្ញុំអាចទូទាត់ជាប្រាក់រៀល (KHR) បានទេ?"
        : isZh
        ? "企业是否可以使用柬币瑞尔 (KHR) 进行账单结算？"
        : "Can our company pay in Cambodian Riel (KHR)?",
      a: isKm
        ? "បាន។ យើងគាំទ្រការទូទាត់ទាំងប្រាក់ដុល្លារអាមេរិក ($) និងប្រាក់រៀល (៛) តាមរយៈ Bakong KHQR, ABA, ACLEDA ឬវិក្កយបត្រផ្លូវការ។"
        : isZh
        ? "完全支持。支持通过 Bakong KHQR、ABA、ACLEDA 或银行公账电汇，以美元或柬币等额结算并开具正式商业发票。"
        : "Yes. Invoices can be settled in either USD ($) or KHR (៛) via Bakong KHQR, ABA Bank, ACLEDA, or corporate bank transfer.",
    },
    {
      q: isKm
        ? "ចុះប្រសិនបើក្រុមហ៊ុនយើងមានច្រើនសាខា?"
        : isZh
        ? "如果企业旗下拥有 10 家或 20 家以上分店，如何计费？"
        : "What if our business operates across 10 or 20 branches?",
      a: isKm
        ? `អ្នកអាចបន្ថែមសាខាបានដោយសេរី គ្មានដែនកំណត់! យើងគិតតែលើចំនួនបុគ្គលិកសរុបប៉ុណ្ណោះ។ ឧទាហរណ៍៖ បើអ្នកមាន ៥ សាខា សរុប ២៥ នាក់ នោះថ្លៃសេវាគឺ ${formatUSD(unitRateMonthly * 25)}/ខែ។`
        : isZh
        ? `分店数量完全不限！系统按全公司实际活跃员工总数计费。例如：5家分店共计25人，月费仅为 ${formatUSD(unitRateMonthly * 25)}/月。`
        : `You can add as many physical branches as you need with zero extra branch fees. Pricing is strictly based on total active headcount. For example, 5 branches with 25 total staff is simply ${formatUSD(unitRateMonthly * 25)}/month.`,
    },
    {
      q: isKm
        ? `តើការគិតប្រាក់ ${monthlyRateUsd} ដំណើរការយ៉ាងដូចម្តេច?`
        : isZh
        ? `每人每月 ${monthlyRateUsd} 的计费规则是怎样的？`
        : `How does the ${monthlyRateUsd} per user pricing work?`,
      a: isKm
        ? `អ្នកបង់ត្រឹមតែ ${monthlyRateUsd} ក្នុងមួយបុគ្គលិកសកម្មក្នុងមួយខែ។ គ្មានថ្លៃដំឡើង គ្មានកិច្ចសន្យាចងភ្ជាប់ និងគ្មានការគិតប្រាក់បន្ថែមតាមសាខាឡើយ។`
        : isZh
        ? `按月度实际激活的在岗人数结算，每人每月仅需 ${monthlyRateUsd}。员工离职即可随时停用，次月不再计费。`
        : `You only pay ${monthlyRateUsd} per active employee per month. There are zero setup fees, no lock-in contracts, and zero per-branch surcharges.`,
    },
  ];

  return (
    <div className="w-full bg-paper text-ink">
      {/* -------------------------------------------------------------
          1. PAGE HERO
      ------------------------------------------------------------- */}
      <PageHero
        title={
          isKm
            ? `តម្លៃសាមញ្ញ និងតម្លាភាព៖ ${monthlyRateUsd} ក្នុងម្នាក់`
            : isZh
            ? `透明定价：每位员工仅需 ${monthlyRateUsd} / 月`
            : "Simple, transparent pricing for every employee."
        }
        sub={
          isKm
            ? "រួមបញ្ចូលគ្រប់មុខងារទាំងអស់។ គ្មានថ្លៃដំឡើង គ្មានថ្លៃបន្ថែមតាមសាខា។"
            : isZh
            ? "全功能一揽子解锁，无初装费、无门店费、无功能等级限制。"
            : "Every feature included. No setup fees, no tiers, and no per-branch surcharges."
        }
      />

      {/* -------------------------------------------------------------
          2. THE ALL-INCLUSIVE PLAN SHOWCASE & LIVE ESTIMATOR
      ------------------------------------------------------------- */}
      <Section tone="white">
        <div className="mx-auto max-w-[1120px]">
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
                    : isZh
                    ? `按月付费 (${formatUSD(unitRateMonthly)}/人)`
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
                    : isZh
                    ? `按年付费 (${formatUSD(unitRateAnnual)}/人)`
                    : `Annual (${formatUSD(unitRateAnnual)}/user)`}
                </span>
                <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                  {isKm ? "ឥតគិតថ្លៃ ២ ខែ" : isZh ? "赠送2个月" : "2 Months Free"}
                </span>
              </button>
            </div>

            {/* Currency Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-slate-500">
                {isKm ? "រូបិយប័ណ្ណបង្ហាញ៖" : isZh ? "币种切换：" : "Currency:"}
              </span>
              <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200/80 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setCurrency("USD")}
                  className={`rounded-lg px-3 py-1 text-xs font-bold transition-all cursor-pointer ${
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
                  className={`rounded-lg px-3 py-1 text-xs font-bold transition-all cursor-pointer ${
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

          {/* Unified Clean Pricing Card */}
          <div className="mt-8 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Plan Details & Core Features */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-brand mb-3">
                    <Sparkles size={13} />
                    <span>{primaryPlan?.badge_text || (isKm ? "គម្រោងរួមបញ្ចូលគ្រប់មុខងារ" : isZh ? "全功能一揽子计划" : "All-in-One Plan")}</span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                    {primaryPlan?.name || (isKm ? "គម្រោងតម្លៃសាមញ្ញតែមួយគត់" : isZh ? "透明统一的全功能企业套餐" : "One Simple, Transparent Plan")}
                  </h2>

                  <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
                    {isKm
                      ? "ប្រព័ន្ធកត់ត្រាវត្តមានតាម GPS និងគណនាប្រាក់ខែពេញលេញត្រឹមតែ ១ ដុល្លារ/ម្នាក់/ខែ។ រួមបញ្ចូលគ្រប់មុខងារទាំងអស់ដោយគ្មានដែនកំណត់។"
                      : isZh
                      ? "每位员工仅需 1 美元/月，全面解锁 GPS 围栏打卡、多门店倒班排班与柬埔寨本土合规算薪。"
                      : "Complete attendance & automated Cambodian payroll engine with zero tier restrictions or hidden fees."}
                  </p>
                </div>

                {/* Main Price Tag */}
                <div className="flex items-baseline gap-2 pt-2 border-t border-slate-100">
                  <span className="font-price text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 tabular-nums">
                    {formatUnitRate()}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-500">
                    {isKm ? "/ បុគ្គលិកសកម្ម / ខែ" : isZh ? "/ 在岗员工 / 月" : "/ active employee / month"}
                  </span>
                </div>

                {/* Curated 6 High-Impact Inclusions */}
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {[
                    isKm
                      ? "វត្តមាន GPS Geofence (៥០–២០០ម) & សេលហ្វី"
                      : isZh
                      ? "50m–200m GPS 围栏与自拍活体核验"
                      : "50m–200m GPS Geofence & Live Selfie Check",
                    isKm
                      ? "គណនាប្រាក់ខែស្វ័យប្រវត្តិ (OT ១.៥x, ២.០x & ប.ស.ស.)"
                      : isZh
                      ? "柬埔寨法定算薪 (1.5倍OT / 2.0倍双薪 / NSSF)"
                      : "Cambodia Payroll (1.5x OT, 2.0x Holiday & NSSF)",
                    isKm
                      ? "គ្រប់គ្រងវេនបំបែក និងវេនយប់ឆ្លងអធ្រាត្រ"
                      : isZh
                      ? "支持餐饮分段班与跨夜连续夜班"
                      : "Split Shift & Midnight Crossing Rosters",
                    isKm
                      ? "មុខងារ QR Door Kiosk លើថេប្លេត"
                      : isZh
                      ? "平板端 QR Kiosk 极速公共打卡"
                      : "Shared Tablet QR Kiosk Mode (iOS & Android)",
                    isKm
                      ? "ការជូនដំណឹងស្វ័យប្រវត្តិតាម Telegram Bot"
                      : isZh
                      ? "Telegram Bot 自动化推送与双语工资条"
                      : "Telegram Bot Alerts & Bilingual PDF Payslips",
                    isKm
                      ? "បន្ថែមសាខាបានគ្មានដែនកំណត់ ឥតគិតថ្លៃ"
                      : isZh
                      ? "无限多分店接入，零分店加价费用"
                      : "Unlimited Branches with Zero Surcharges",
                  ].map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-brand shrink-0 border border-blue-200 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Primary & Secondary Action CTAs */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <Link
                    href={primaryPlan?.cta_url || "/contact"}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand hover:bg-brand-dark px-6 py-3.5 text-sm font-bold text-white shadow-xs transition-all cursor-pointer"
                  >
                    <span>{primaryPlan?.cta_text || (isKm ? "ចាប់ផ្តើមប្រើសាកល្បងឥតគិតថ្លៃ" : isZh ? "免费试用 14 天" : "Start 14-day free trial")}</span>
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href={publicSettings.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-2xs transition-all cursor-pointer"
                  >
                    <Send size={14} className="text-brand" />
                    <span>Telegram @MPG_by_ongphaly</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean, Direct Team Cost Estimator */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-7 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                    <div className="flex items-center gap-2">
                      <Calculator size={16} className="text-brand" />
                      <span className="font-display text-sm font-bold text-slate-900">
                        {isKm ? "គណនាថ្លៃសេវាសម្រាប់ក្រុម" : isZh ? "团队费用实时估算" : "Team Cost Estimator"}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-brand bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-lg">
                      {calcUsers} {isKm ? "នាក់" : isZh ? "人" : "Staff"}
                    </span>
                  </div>

                  {/* Range Slider */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                      <span>{isKm ? "ជ្រើសរើសចំនួនបុគ្គលិក" : isZh ? "滑动选择团队人数" : "Select Headcount"}</span>
                      <span className="font-mono text-sm font-bold text-slate-900">
                        {calcUsers} {isKm ? "បុគ្គលិក" : isZh ? "名员工" : "employees"}
                      </span>
                    </div>

                    <input
                      id="team-size-slider"
                      type="range"
                      min="5"
                      max="250"
                      step="5"
                      value={calcUsers}
                      aria-label={isKm ? "ចំនួនបុគ្គលិក" : "Adjust headcount"}
                      onChange={(e) => setCalcUsers(Number(e.target.value))}
                      className="pricing-slider w-full cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #0052FF 0%, #0052FF ${sliderPercentage}%, #E2E8F0 ${sliderPercentage}%, #E2E8F0 100%)`,
                      }}
                    />

                    {/* Quick Presets */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {[10, 25, 50, 75, 100, 200].map((preset) => {
                        const isActive = calcUsers === preset;
                        return (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => setCalcUsers(preset)}
                            className={`font-mono rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                              isActive
                                ? "bg-brand text-white shadow-xs"
                                : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                            }`}
                          >
                            {preset}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Calculated Price Box */}
                  <div className="rounded-xl border border-slate-200/90 bg-white p-5 space-y-2 shadow-2xs">
                    <span className="text-xs font-medium text-slate-500 block">
                      {annual
                        ? isKm ? "ថ្លៃសរុបប្រចាំឆ្នាំ" : isZh ? "年度投资总额" : "Total Annual Investment"
                        : isKm ? "ថ្លៃសរុបប្រចាំខែ" : isZh ? "月度投资总额" : "Total Monthly Investment"}
                    </span>

                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-price text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 tabular-nums">
                        {calculateTotal(calcUsers)}
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {annual
                          ? isKm ? "គិតថ្លៃប្រចាំឆ្នាំ" : isZh ? "按年计费" : "billed annually"
                          : isKm ? "គិតថ្លៃប្រចាំខែ" : isZh ? "按月计费" : "billed monthly"}
                      </span>
                    </div>

                    <p className="text-[11.5px] text-emerald-700 font-medium flex items-center gap-1.5 pt-1 border-t border-slate-100">
                      <CheckCircle2 size={13} className="shrink-0 text-emerald-600" />
                      <span>{isKm ? "រួមបញ្ចូលទាំងវត្តមាន និងប្រាក់ខែពេញលេញ" : isZh ? "包含全部考勤、排班与算薪功能" : "Includes full payroll + attendance engine"}</span>
                    </p>
                  </div>

                  {/* Settlement Note */}
                  <div className="text-[11.5px] text-slate-500 flex items-center justify-between pt-1">
                    <span>{isKm ? "ទូទាត់តាម Bakong & ABA" : isZh ? "支持 Bakong KHQR 与 ABA 结算" : "Settle via Bakong KHQR & ABA"}</span>
                    <span className="font-mono text-xs font-bold text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded-md">
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
                : isZh
                ? `每位员工仅需 ${monthlyRateUsd}，即可解锁全部功能`
                : `Everything Unlocked for ${monthlyRateUsd} Per Employee`
            }
            sub={
              isKm
                ? "គ្មានការចាក់សោមុខងារ គ្មានការបង្ខំដំឡើងគម្រោង។ គ្រប់អាជីវកម្មទទួលបានប្រព័ន្ធពេញលេញ។"
                : isZh
                ? "无功能等级限制，无强制升级套路。任意规模企业均享全功能企业级引擎。"
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
                      <span>{isKm ? "រួមបញ្ចូលជាស្រេច" : isZh ? "默认全包" : "Included by Default"}</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------
          4. CAMBODIAN PAYMENT METHODS INFRASTRUCTURE (WITH REAL SVG LOGOS)
      ------------------------------------------------------------- */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <div className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-9 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand">
                  {isKm ? "វិធីសាស្ត្រទូទាត់ប្រាក់នៅកម្ពុជា" : isZh ? "柬埔寨本土支付支持" : "Payment Infrastructure"}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  {isKm
                    ? "ទូទាត់ងាយស្រួលតាមធនាគារក្នុងស្រុក"
                    : isZh
                    ? "无缝接入柬埔寨本土主流银行与结算通道"
                    : "Seamless Settlement via Local Cambodian Banking Channels"}
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-200/70 shadow-2xs">
                <Check size={13} strokeWidth={2.5} />
                <span>USD ($) & KHR (៛) Supported</span>
              </span>
            </div>

            {/* 6 Clean Cambodian Banking Cards with SVG Logos */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {paymentMethods.map((m) => {
                const Logo = m.logo;
                return (
                  <div
                    key={m.name}
                    className="group rounded-2xl border border-slate-200/90 bg-white p-5 text-center shadow-2xs hover:border-brand/40 hover:shadow-md transition-all flex flex-col items-center justify-between gap-3.5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-xs transition-transform duration-200 group-hover:scale-105">
                      <Logo className="h-11 w-11" />
                    </div>
                    <div>
                      <span className="font-display text-xs font-bold text-slate-900 block group-hover:text-brand transition-colors leading-tight">
                        {m.name}
                      </span>
                      <span className="text-[11px] text-slate-500 block mt-1 leading-snug">
                        {m.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
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
                : isZh
                ? "AttendKH 针对柬埔寨企业的收费标准是怎样的？"
                : "How much does AttendKH cost for businesses in Cambodia?"
            }
            answer={
              isKm
                ? `AttendKH គិតតម្លៃសាមញ្ញត្រឹមតែ ${monthlyRateUsd} ក្នុងម្នាក់/ខែ (ឬ ${monthlyRateKhr}) ដោយរួមបញ្ចូលគ្រប់មុខងារទាំងអស់ រួមមាន វត្តមានតាម GPS Geofencing ការផ្ទៀងផ្ទាត់សេលហ្វី ម៉ាស៊ីនប្រាក់ខែស្វ័យប្រវត្តិកម្ពុជា និងការគ្រប់គ្រងច្រើនសាខា។ គ្មានថ្លៃដំឡើង និងគ្មានថ្លៃពិន័យតាមសាខាឡើយ។`
                : isZh
                ? `AttendKH 采用全包统一定价，每位活跃员工仅需 ${monthlyRateUsd}/月（或约 ${monthlyRateKhr}），涵盖 GPS 电子围栏、实时自拍打卡、柬埔寨双币薪酬引擎、NSSF 社保报表及无限多分店管理，无任何初装费或门店附加费。`
                : `AttendKH charges one simple rate of ${monthlyRateUsd} per active employee per month with all capabilities included (GPS geofencing, live selfie verification, Cambodian dual-currency payroll, NSSF formulas, and unlimited branches). There are zero setup fees or branch surcharges.`
            }
            facts={[
              {
                label: isKm ? "តម្លៃសេវា" : isZh ? "月费标准" : "Pricing Rate",
                value: `${monthlyRateUsd} / user / mo`,
              },
              {
                label: isKm ? "មុខងាររួមបញ្ចូល" : isZh ? "包含功能" : "Included Features",
                value: isKm ? "គ្រប់មុខងារទាំងអស់ (All-In)" : isZh ? "全功能一揽子包含" : "All-Inclusive Access",
              },
              {
                label: isKm ? "ការទូទាត់ប្រចាំឆ្នាំ" : isZh ? "年付优惠" : "Annual Billing",
                value: isKm ? `ការទូទាត់ប្រចាំឆ្នាំ (${annualRateUsd}/ម្នាក់)` : isZh ? `年付优惠折合 (${annualRateUsd}/人/月)` : `Annual billing (${annualRateUsd}/mo)`,
              },
              {
                label: isKm ? "ការទូទាត់ប្រាក់" : isZh ? "支持币种" : "Settlement",
                value: "USD ($) & KHR (៛) KHQR",
              },
            ]}
          />

          {/* FAQ Accordion */}
          <div className="mx-auto max-w-3xl">
            <h3 className="font-display text-2xl font-bold text-slate-900 text-center mb-8">
              {isKm ? "សំណួរដែលសួរញឹកញាប់អំពីតម្លៃ" : isZh ? "关于价格与计费的常见问题" : "Frequently Asked Questions About Pricing"}
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-2xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-display text-sm font-bold text-slate-900 hover:text-brand transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-brand" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-[13.5px] leading-relaxed text-slate-600 border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        title={c.pricing.ctaTitle}
        sub={
          isKm
            ? "ចាប់ផ្តើមប្រើ AttendKH សម្រាប់ក្រុមការងាររបស់អ្នកត្រឹមតែ $1 ក្នុងមួយខែសម្រាប់បុគ្គលិកម្នាក់។"
            : isZh
            ? "每位员工仅需 1 美元/月，立即接入 AttendKH 全功能平台。"
            : "Get started with AttendKH for your entire team at just $1 per employee."
        }
      />
    </div>
  );
}
