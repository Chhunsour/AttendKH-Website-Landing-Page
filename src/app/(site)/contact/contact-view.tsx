"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock3,
  Check,
  Copy,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ExternalLink,
  MessageSquare,
  Code2,
  Briefcase,
  Terminal,
  Zap,
  Building2,
  Users,
  Award,
  BadgeCheck,
  ChevronRight,
  MessageCircle,
  HelpCircle,
  TrendingUp,
} from "lucide-react";
import { useSite } from "@/lib/i18n";
import { PageHero, Section, DirectAnswerBlock, Reveal } from "@/components/site/ui";

export function ContactView() {
  const { lang, publicSettings } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<number>(0);

  const copyToClipboard = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedHandle(text);
      setTimeout(() => setCopiedHandle(null), 2500);
    }
  };

  const copy = {
    hero: {
      badge: isKm
        ? "ទំនាក់ទំនងផ្ទាល់ជាមួយថ្នាក់ដឹកនាំ"
        : isZh
        ? "直接联系创始人与技术团队"
        : "Direct Executive Access • No Forms Needed",
      title: isKm
        ? "ទំនាក់ទំនងផ្ទាល់ជាមួយថ្នាក់ដឹកនាំ AttendKH"
        : isZh
        ? "无需繁琐等待，直接与 CEO 及技术负责人对话"
        : "Connect Directly with Our Leadership Team",
      sub: isKm
        ? "ទទួលបានចម្លើយភ្លាមៗ កក់ការបង្ហាញប្រព័ន្ធ ឬទទួលបានការជួយដំឡើងបច្ចេកទេសផ្ទាល់តាម Telegram ដោយមិនចាំបាច់បំពេញទម្រង់បែបបទ។"
        : isZh
        ? "无论是商业合作咨询、专属企业报价，还是系统部署与技术对接，均可通过 Telegram 一键直达核心团队。"
        : "Skip the contact forms. Message our CEO directly for commercial partnerships and executive walkthroughs, or reach our technical lead for immediate setup assistance.",
    },
    breadcrumbs: [
      { label: isKm ? "ទំព័រដើម" : isZh ? "首页" : "Home", href: "/" },
      { label: isKm ? "ទំនាក់ទំនង" : isZh ? "联系យើង" : "Contact" },
    ],
  };

  const executivePillars = [
    {
      id: "demo",
      title: isKm ? "ការបង្ហាញផលិតផលជាន់ខ្ពស់" : isZh ? "高管专属 1对1 演示" : "1-on-1 Executive Walkthrough",
      desc: isKm ? "បង្ហាញគ្រប់មុខងារផ្ទាល់តាមតម្រូវការជាក់ស្តែង" : isZh ? "针对您团队规模定制全流程功能演练" : "Tailored walkthrough for your headcount & branches",
      telegramText: "Hello Mr. Ong Phaly, I would like to schedule a 1-on-1 Executive Walkthrough for AttendKH.",
      telegramTextKm: "ជម្រាបសួរលោក អ៊ុង ផល្លី ខ្ញុំចង់កក់ការបង្ហាញផលិតផលជាន់ខ្ពស់ (1-on-1 Walkthrough) នៃ AttendKH។",
      telegramTextZh: "您好 Ong Phaly 先生，我想预约一次 AttendKH 的高管专属一对一产品演示。",
    },
    {
      id: "pricing",
      title: isKm ? "កិច្ចសន្យាសហគ្រាស & SLA" : isZh ? "企业级定制报价与 SLA" : "Enterprise Pricing & SLAs",
      desc: isKm ? "កិច្ចព្រមព្រៀងពិសេសសម្រាប់អាជីវកម្មខ្នាតធំ" : isZh ? "大客户专属服务等级协议与多门店方案" : "Volume contracts and customized billing arrangements",
      telegramText: "Hello Mr. Ong Phaly, I would like to inquire about Enterprise Pricing and SLAs for our organization.",
      telegramTextKm: "ជម្រាបសួរលោក អ៊ុង ផល្លី ខ្ញុំចង់ពិភាក្សាអំពីកិច្ចសន្យាសហគ្រាស និងគម្រោងតម្លៃ SLA សម្រាប់ស្ថាប័នយើងខ្ញុំ។",
      telegramTextZh: "您好 Ong Phaly 先生，我想咨询关于我们企业的定制化报价方案与 SLA 服务协议。",
    },
    {
      id: "compliance",
      title: isKm ? "ច្បាប់ការងារ & ប.ស.ស." : isZh ? "柬埔寨劳工法与社保合规" : "Labor Law & NSSF Compliance",
      desc: isKm ? "ប្រឹក្សាយោបល់លើរូបមន្តប្រាក់ខែ និងម៉ោងបន្ថែម" : isZh ? "柬埔寨法定加班与社保代扣专属规则" : "Guidance on Cambodian overtime multipliers & formulas",
      telegramText: "Hello Mr. Ong Phaly, I would like to discuss Cambodian Labor Law and NSSF payroll formulas in AttendKH.",
      telegramTextKm: "ជម្រាបសួរលោក អ៊ុង ផល្លី ខ្ញុំចង់ពិភាក្សាអំពីការអនុលោមតាមច្បាប់ការងារ និងរូបមន្ត ប.ស.ស. ក្នុង AttendKH។",
      telegramTextZh: "您好 Ong Phaly 先生，我想了解 AttendKH 如何支持柬埔寨劳工法与 NSSF 社保计算合规。",
    },
    {
      id: "partnership",
      title: isKm ? "ភាពជាដៃគូយុទ្ធសាស្ត្រ" : isZh ? "战略合作与生态拓展" : "Strategic Partnerships",
      desc: isKm ? "សហការជាមួយធនាគារ ស្ថាប័ន និងដៃគូអាជីវកម្ម" : isZh ? "本地商会、银行渠道及行业集成合作" : "Banking, payroll channel & technology alliances",
      telegramText: "Hello Mr. Ong Phaly, I would like to explore a strategic business partnership with AttendKH.",
      telegramTextKm: "ជម្រាបសួរលោក អ៊ុង ផល្លី ខ្ញុំចង់ពិភាក្សាអំពីកិច្ចសហការ និងភាពជាដៃគូយុទ្ធសាស្ត្រជាមួយ AttendKH។",
      telegramTextZh: "您好 Ong Phaly 先生，我想探讨与 AttendKH 的战略商业合作机会。",
    },
  ];

  const currentTopic = executivePillars[selectedTopic] || executivePillars[0];
  const encodedTelegramMsg = encodeURIComponent(
    isKm ? currentTopic.telegramTextKm : isZh ? currentTopic.telegramTextZh : currentTopic.telegramText
  );
  const activeTelegramUrl = `https://t.me/MPG_by_ongphaly?text=${encodedTelegramMsg}`;

  const quickChannels = [
    {
      icon: MessageSquare,
      title: isKm ? "ឆានែល Telegram ផ្លូវការ" : isZh ? "官方 Telegram 频道与客服" : "Official Telegram Channel",
      desc: "@attendkh",
      href: "https://t.me/attendkh",
      linkText: isKm ? "ចូលរួម Telegram" : isZh ? "打开 Telegram" : "Open Telegram",
      badge: isKm ? "ឆ្លើយតបរហ័ស" : isZh ? "极速响应" : "Instant Reply",
    },
    {
      icon: Mail,
      title: isKm ? "អ៊ីមែលជំនួយការងារ" : isZh ? "官方技术支持与隐私邮箱" : "Direct Support Email",
      desc: "support@attendkh.com",
      href: "mailto:support@attendkh.com",
      linkText: isKm ? "ផ្ញើអ៊ីមែល" : isZh ? "发送邮件" : "Send Email",
      badge: isKm ? "ផ្លូវការ" : isZh ? "官方渠道" : "Official",
    },
    {
      icon: Phone,
      title: isKm ? "ទូរស័ព្ទ Hotline ភ្នំពេញ" : isZh ? "金边热线电话" : "Phnom Penh Hotline",
      desc: "+855 23 999 888",
      href: "tel:+85523999888",
      linkText: isKm ? "ហៅទូរស័ព្ទឥឡូវនេះ" : isZh ? "拨打电话" : "Call Office",
      badge: "Mon–Fri, 8AM–5:30PM",
    },
    {
      icon: MapPin,
      title: isKm ? "ទីស្នាក់ការកណ្តាល" : isZh ? "金边总部办公地址" : "Headquarters Office",
      desc: isKm
        ? "ផ្លូវ ៣៧១ រាជធានីភ្នំពេញ ព្រះរាជាណាចក្រកម្ពុជា"
        : isZh
        ? "柬埔寨王国 金边市 371 路"
        : "Street 371, Phnom Penh, Kingdom of Cambodia",
      href: "https://maps.google.com/?q=Street+371+Phnom+Penh+Cambodia",
      linkText: isKm ? "មើលផែនទី" : isZh ? "查看地图" : "View on Maps",
      badge: "Phnom Penh, KH",
    },
  ];

  return (
    <>
      <PageHero
        title={copy.hero.title}
        badge={copy.hero.badge}
        sub={copy.hero.sub}
        breadcrumbs={copy.breadcrumbs}
      />

      {/* -------------------------------------------------------------
          1. HERO EXECUTIVE SHOWCASE: CEO MR. ONG PHALY
      ------------------------------------------------------------- */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <Reveal delay={0.05}>
            <div className="relative rounded-[36px] border border-blue-200/90 bg-gradient-to-br from-white via-white to-blue-50/50 p-8 sm:p-12 lg:p-14 shadow-[0_30px_90px_rgba(0,82,255,0.08),0_1px_3px_rgba(0,0,0,0.02)] ring-1 ring-blue-500/10 overflow-hidden">
              {/* Background ambient lighting effects */}
              <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,82,255,0.12),transparent_70%)] blur-3xl pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.10),transparent_70%)] blur-3xl pointer-events-none" />

              <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
                {/* ----------------- LEFT: Large Framed Portrait & Live Badge (5 cols) ----------------- */}
                <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
                  <div className="relative group">
                    {/* Glowing outer backdrop */}
                    <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 opacity-25 blur-xl group-hover:opacity-45 transition-opacity duration-500" />
                    
                    {/* Main framed photo container */}
                    <div className="relative h-72 w-72 sm:h-84 sm:w-84 rounded-[28px] overflow-hidden border-4 border-white shadow-2xl bg-slate-900">
                      <Image
                        src="/avatars/ong-phaly.png"
                        alt="Mr. Ong Phaly - CEO & Founder of AttendKH"
                        fill
                        sizes="(max-width: 640px) 288px, 336px"
                        className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-500"
                        priority
                      />
                      
                      {/* Smooth dark gradient vignette at the base of the image */}
                      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                      
                      {/* Overlay name and title on the photo */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-300 tracking-wider uppercase">
                          <BadgeCheck size={15} className="text-blue-400 fill-blue-400 text-white" />
                          <span>{isKm ? "ស្ថាបនិក & CEO" : isZh ? "创始人兼 CEO" : "CEO & Founder"}</span>
                        </div>
                        <p className="font-display text-xl sm:text-2xl font-extrabold text-white drop-shadow-md">
                          {isKm ? "លោក អ៊ុង ផល្លី" : isZh ? "Ong Phaly 先生" : "Mr. Ong Phaly"}
                        </p>
                      </div>
                    </div>

                    {/* Executive Direct VIP Seal */}
                    <div className="absolute -top-3 -right-3 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1.5 text-[11px] font-bold text-white shadow-lg border-2 border-white">
                      <Award size={13} className="text-amber-300" />
                      <span>Executive Direct Line</span>
                    </div>
                  </div>

                  {/* Online presence badge */}
                  <div className="mt-6 inline-flex items-center gap-2.5 rounded-2xl bg-white/95 border border-slate-200/90 px-4 py-2 text-xs font-semibold text-slate-800 shadow-xs">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span>{isKm ? "បើកទទួលសារផ្ទាល់ • ឆ្លើយតបក្នុងរយៈពេល ៥–១៥ នាទី" : isZh ? "Telegram 在线中 • 通常 5–15 分钟内极速响应" : "Online on Telegram • Fast 5–15 min response"}</span>
                  </div>
                </div>

                {/* ----------------- RIGHT: Executive Bio, Interactive Topics & CTA (7 cols) ----------------- */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft border border-blue-200/70 px-3.5 py-1 text-xs font-bold text-brand uppercase tracking-wider mb-3">
                      <Briefcase size={13} />
                      <span>{isKm ? "ការិយាល័យអគ្គនាយកប្រតិបត្តិ" : isZh ? "最高管理层办公室 • 一对一直通" : "Office of the Chief Executive"}</span>
                    </div>
                    
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                      {isKm ? "លោក អ៊ុង ផល្លី (Ong Phaly)" : isZh ? "Ong Phaly 先生" : "Mr. Ong Phaly"}
                    </h2>
                    
                    <p className="font-display text-base sm:text-lg font-semibold text-brand mt-1">
                      {isKm ? "អគ្គនាយកប្រតិបត្តិ (Chief Executive Officer) • AttendKH" : isZh ? "AttendKH 创始人兼首席执行官" : "Chief Executive Officer & Founder, AttendKH"}
                    </p>

                    <blockquote className="mt-4 rounded-2xl border-l-4 border-brand bg-slate-50/90 p-4 text-xs sm:text-sm italic leading-relaxed text-slate-700">
                      {isKm
                        ? "«យើងប្តេជ្ញាផ្តល់នូវដំណោះស្រាយបច្ចេកវិទ្យាវត្តមាន និងប្រាក់ខែកម្ពុជាដែលងាយស្រួល ទំនើប និងមានទំនុកចិត្តបំផុតជូនម្ចាស់អាជីវកម្មគ្រប់រូប។»"
                        : isZh
                        ? "“我们致力于为柬埔寨企业打造最透明、最符合本地劳工法且极具性价比的数字化考勤与薪酬基础设施。”"
                        : "“Our mission is to empower every Cambodian business with simple, transparent, and legally compliant workforce automation.”"}
                    </blockquote>
                  </div>

                  {/* Interactive Consultation Topic Selector */}
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        {isKm ? "ជ្រើសរើសប្រធានបទដើម្បីឆាតភ្លាមៗ៖" : isZh ? "点击选择咨询主题（自动生成 Telegram 问候）：" : "Select a topic to start instant chat:"}
                      </span>
                      <span className="text-[11px] font-medium text-brand">
                        {isKm ? "ចុចដើម្បីជ្រើសរើស" : isZh ? "点击卡片切换" : "Click card to select"}
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {executivePillars.map((p, idx) => {
                        const isSelected = selectedTopic === idx;
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setSelectedTopic(idx)}
                            className={`text-left rounded-2xl border p-3.5 transition-all duration-200 cursor-pointer relative overflow-hidden ${
                              isSelected
                                ? "border-brand bg-blue-50/70 shadow-sm ring-2 ring-brand/20 scale-[1.01]"
                                : "border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className={`font-display text-xs font-bold leading-snug ${isSelected ? "text-brand" : "text-slate-900"}`}>
                                {p.title}
                              </span>
                              {isSelected ? (
                                <CheckCircle2 size={14} className="text-brand shrink-0" />
                              ) : (
                                <span className="h-3.5 w-3.5 rounded-full border border-slate-300 shrink-0" />
                              )}
                            </div>
                            <p className="mt-1 text-[11px] leading-snug text-slate-500 line-clamp-1">
                              {p.desc}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Primary High-Impact CTA Row with dynamic topic message */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                    <a
                      href={activeTelegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#229ED9] to-[#0088cc] hover:from-[#1a8bc2] hover:to-[#0077b3] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-[0_8px_25px_rgba(34,158,217,0.38)] hover:shadow-[0_12px_32px_rgba(34,158,217,0.48)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group"
                    >
                      <Send size={19} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      <span>{isKm ? "ឆាតផ្ទាល់ជាមួយ CEO តាម Telegram" : isZh ? "联系 CEO 咨询 (@MPG_by_ongphaly)" : "Chat with CEO on Telegram"}</span>
                      <ExternalLink size={15} className="opacity-80" />
                    </a>

                    <button
                      type="button"
                      onClick={() => copyToClipboard("@MPG_by_ongphaly")}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50 px-5 py-4 text-xs sm:text-sm font-bold text-slate-700 shadow-2xs transition-colors cursor-pointer"
                      title={isKm ? "ចម្លង Telegram handle" : "Copy Telegram handle"}
                    >
                      {copiedHandle === "@MPG_by_ongphaly" ? (
                        <>
                          <CheckCircle2 size={16} className="text-emerald-600" />
                          <span className="text-emerald-600 font-bold">{isKm ? "បានចម្លង!" : "Copied!"}</span>
                        </>
                      ) : (
                        <>
                          <Copy size={16} />
                          <span>@MPG_by_ongphaly</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------------------------------------------------------------
          2. SECONDARY SECTION: TECHNICAL SUPPORT & DIRECTORY
      ------------------------------------------------------------- */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px] space-y-12">
          {/* Section heading */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand">
              {isKm ? "ជំនួយបច្ចេកទេស & បណ្តាញផ្លូវការ" : isZh ? "技术支持与官方服务通道" : "Technical Support & Channels"}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              {isKm
                ? "ជំនួយដំឡើងបច្ចេកទេស និងបណ្តាញទំនាក់ទំនងផ្លូវការ"
                : isZh
                ? "系统部署技术支持与官方服务通道"
                : "Engineering Onboarding & Official Channels"}
            </h3>
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            {/* ----------------- TECHNICAL LEAD CARD (PLAIN & CLEAN - 5 COLS) ----------------- */}
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between">
                  <div>
                    {/* Header: Clean dark terminal icon */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-emerald-400 font-mono shadow-xs">
                          <Terminal size={20} />
                        </div>
                        <div>
                          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                            {isKm ? "ប្រធានផ្នែកបច្ចេកទេស" : isZh ? "技术支持与系统研发" : "Technical Lead"}
                          </span>
                          <h4 className="font-display text-lg font-bold text-slate-900">
                            Chhunsour Seng
                          </h4>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-0.5 text-xs font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>Online</span>
                      </span>
                    </div>

                    {/* Scope */}
                    <div className="mt-4 space-y-3">
                      <p className="text-xs sm:text-[13px] leading-relaxed text-slate-600">
                        {isKm
                          ? "ជំនួយផ្ទាល់លើការដំឡើង GPS Geofencing ការកំណត់ច្បាប់ប្រាក់ខែកម្ពុជា ការតភ្ជាប់ Telegram Bot និងជំនួយបច្ចេកទេស។"
                          : isZh
                          ? "负责 GPS 电子围栏校准、柬埔寨双币种算薪引擎配置、Telegram 机器人告警与移动端技术对接。"
                          : "Direct technical assistance for GPS geofence calibration, Cambodian payroll formulas, Telegram bot alerts, and custom integrations."}
                      </p>

                      {/* Clean Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {(isKm
                          ? ["ការដំឡើង GPS", "ម៉ាស៊ីនប្រាក់ខែ", "Telegram Bot", "ជំនួយ API"]
                          : isZh
                          ? ["电子围栏配置", "算薪公式支持", "机器人集成", "API 支持"]
                          : ["GPS Setup", "Payroll Engine", "Telegram Bot", "API Support"]
                        ).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-lg bg-slate-100/90 border border-slate-200/70 px-2.5 py-1 text-xs font-medium text-slate-700"
                          >
                            <Code2 size={11} className="text-slate-500" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                    <a
                      href="https://t.me/ChhunsourSENG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 px-4 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs transition-colors cursor-pointer"
                    >
                      <Send size={14} />
                      <span>{isKm ? "ឆាតជាមួយ Tech Lead (@ChhunsourSENG)" : isZh ? "联系技术负责人 (@ChhunsourSENG)" : "Message Tech Lead (@ChhunsourSENG)"}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => copyToClipboard("@ChhunsourSENG")}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 px-3 py-3 text-xs font-medium text-slate-700 transition-colors cursor-pointer"
                      title="Copy handle"
                    >
                      {copiedHandle === "@ChhunsourSENG" ? (
                        <CheckCircle2 size={14} className="text-emerald-600" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ----------------- OFFICIAL DIRECTORY (7 COLS - 4 BOXES) ----------------- */}
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2 h-full">
                {quickChannels.map((ch, i) => {
                  const Icon = ch.icon;
                  return (
                    <Reveal key={ch.title} delay={0.1 + i * 0.04}>
                      <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs hover:border-brand/40 transition-all flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand border border-blue-200/60 shadow-2xs">
                              <Icon size={18} />
                            </div>
                            <span className="rounded-full bg-slate-100 border border-slate-200/70 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                              {ch.badge}
                            </span>
                          </div>

                          <h4 className="font-display text-[15px] font-bold text-slate-900">
                            {ch.title}
                          </h4>
                          <p className="mt-1 text-xs font-mono text-slate-600 break-words">
                            {ch.desc}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100">
                          <a
                            href={ch.href}
                            target={ch.href.startsWith("http") ? "_blank" : undefined}
                            rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-dark transition-colors group"
                          >
                            <span>{ch.linkText}</span>
                            <ExternalLink size={11} className="transition-transform group-hover:translate-x-0.5" />
                          </a>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Operating hours guarantee banner */}
          <div className="rounded-2xl border border-blue-200/70 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-blue-500/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white shrink-0 shadow-xs">
                <Clock3 size={20} />
              </div>
              <div>
                <h4 className="font-display text-sm sm:text-base font-bold text-slate-900">
                  {isKm
                    ? "ម៉ោងបម្រើការងារផ្លូវការនៅរាជធានីភ្នំពេញ"
                    : isZh
                    ? "金边本地官方工作时间"
                    : "Standard Business & Support Hours"}
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  {isKm
                    ? "ថ្ងៃច័ន្ទ ដល់ ថ្ងៃសុក្រ វេលាម៉ោង ៨:០០ ព្រឹក – ៥:៣០ ល្ងាច (ម៉ោងនៅកម្ពុជា ICT / UTC+7)"
                    : isZh
                    ? "周一至周五 08:00 – 17:30 (中南半岛时间 ICT / UTC+7) • Telegram 紧急咨询 7x24 小时在线"
                    : "Monday to Friday, 8:00 AM – 5:30 PM ICT (UTC+7) • Emergency Telegram hotline available 24/7"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-4 py-2 rounded-xl shrink-0">
              <ShieldCheck size={16} />
              <span>{isKm ? "ឆ្លើយតបក្នុងរយៈពេល ១៥ នាទី" : isZh ? "平均 15 分钟极速响应" : "Avg. 15-Min Response"}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------
          3. DIRECT ANSWER BLOCK FOR SEARCH & AI
      ------------------------------------------------------------- */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <DirectAnswerBlock
            question={
              isKm
                ? "តើខ្ញុំអាចទាក់ទងថ្នាក់ដឹកនាំ និងក្រុមការងារបច្ចេកទេស AttendKH ដោយរបៀបណា?"
                : isZh
                ? "如何直接联系 AttendKH 的管理层与技术支持负责人？"
                : "How can I contact AttendKH leadership and technical support directly?"
            }
            answer={
              isKm
                ? "អ្នកអាចទាក់ទងផ្ទាល់ជាមួយអគ្គនាយកប្រតិបត្តិ (CEO) លោក អ៊ុង ផល្លី តាមរយៈ Telegram @MPG_by_ongphaly សម្រាប់សំណួរអាជីវកម្ម និងកិច្ចសន្យាសហគ្រាស ឬទាក់ទងប្រធានផ្នែកបច្ចេកទេស Chhunsour Seng តាមរយៈ Telegram @ChhunsourSENG សម្រាប់ការដំឡើង និងជំនួយបច្ចេកទេស។"
                : isZh
                ? "您可以直接通过 Telegram @MPG_by_ongphaly 联系 CEO Ong Phaly 先生咨询商业合作与专属企业报价；或通过 Telegram @ChhunsourSENG 联系技术负责人 Chhunsour Seng 咨询系统部署、考勤围栏与算薪配置。"
                : "You can contact CEO Mr. Ong Phaly directly on Telegram at @MPG_by_ongphaly for executive demos and enterprise contracts, or Technical Lead Chhunsour Seng at @ChhunsourSENG for system setup, geofencing configuration, and technical onboarding."
            }
            facts={[
              {
                label: isKm ? "CEO Telegram" : "CEO Telegram",
                value: "@MPG_by_ongphaly",
              },
              {
                label: isKm ? "Tech Lead Telegram" : "Tech Lead Telegram",
                value: "@ChhunsourSENG",
              },
              {
                label: isKm ? "ឆានែលផ្លូវការ" : "Official Channel",
                value: "@attendkh",
              },
              {
                label: isKm ? "ទីតាំង" : "Location",
                value: "Phnom Penh, Cambodia",
              },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
