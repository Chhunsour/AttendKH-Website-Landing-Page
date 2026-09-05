"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
  Calendar,
  Layers,
  ArrowRight,
  Headphones,
  HelpCircle,
} from "lucide-react";
import { useSite } from "@/lib/i18n";
import { PageHero, Section, DirectAnswerBlock, Reveal } from "@/components/site/ui";

export function ContactView() {
  const { lang, publicSettings } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  // Quick message composer state
  const [composerTopic, setComposerTopic] = useState<"demo" | "pricing" | "technical" | "general">("demo");
  const [senderName, setSenderName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [userNote, setUserNote] = useState("");

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
        ? "ទំនាក់ទំនង & ជំនួយបច្ចេកទេស"
        : isZh
        ? "联系我们 • 实时沟通"
        : "Direct Messaging • Fast Contact",
      title: isKm
        ? "ទំនាក់ទំនងមកកាន់យើងខ្ញុំ"
        : isZh
        ? "联系 AttendKH 团队"
        : "Get in Touch with AttendKH",
      sub: isKm
        ? "មានចម្ងល់ ចង់សាកល្បងប្រព័ន្ធ ឬត្រូវការជំនួយបច្ចេកទេស? ទំនាក់ទំនងផ្ទាល់ជាមួយក្រុមការងារយើងខ្ញុំតាម Telegram អ៊ីមែល ឬទូរស័ព្ទ។"
        : isZh
        ? "无论是产品演示预约、价格方案咨询还是技术支持，欢迎随时通过 Telegram、邮件或电话直接联系我们。"
        : "Have questions about AttendKH, want a live product walkthrough, or need custom enterprise pricing? Message our CEO directly on Telegram for immediate assistance.",
    },
    breadcrumbs: [
      { label: isKm ? "ទំព័រដើម" : isZh ? "首页" : "Home", href: "/" },
      { label: isKm ? "ទំនាក់ទំនង" : isZh ? "联系យើង" : "Contact" },
    ],
  };

  // Composer helpers
  const getComposerTopicLabel = () => {
    if (composerTopic === "demo") return "Book a Product Demo";
    if (composerTopic === "pricing") return "Pricing & Branches Inquiry";
    if (composerTopic === "technical") return "Technical & GPS Setup";
    return "General Inquiry";
  };

  const composerTargetHandle = composerTopic === "technical" ? "ChhunsourSENG" : "MPG_by_ongphaly";

  const composeCustomMessage = () => {
    let msg = `Hello AttendKH Team,\n\nInquiry Type: ${getComposerTopicLabel()}\n`;
    if (senderName.trim()) msg += `Name: ${senderName.trim()}\n`;
    if (companyName.trim()) msg += `Company: ${companyName.trim()}\n`;
    if (userNote.trim()) msg += `Message: ${userNote.trim()}\n`;
    msg += `\nSent via AttendKH Contact Portal.`;
    return msg;
  };

  const dynamicComposerTelegramUrl = `https://t.me/${composerTargetHandle}?text=${encodeURIComponent(composeCustomMessage())}`;
  const dynamicComposerMailtoUrl = `mailto:support@MPG_by_ongphaly.com?subject=${encodeURIComponent(`[AttendKH] ${getComposerTopicLabel()}`)}&body=${encodeURIComponent(composeCustomMessage())}`;

  const quickChannels = [
    {
      icon: MessageSquare,
      title: isKm ? "ឆានែល Telegram ផ្លូវការ" : isZh ? "官方 Telegram 频道" : "Official Telegram Channel",
      desc: "@MPG_by_ongphaly",
      href: "https://t.me/MPG_by_ongphaly",
      linkText: isKm ? "ចូលរួម Telegram" : isZh ? "打开 Telegram" : "Open Telegram",
      badge: isKm ? "ឆ្លើយតបរហ័ស" : isZh ? "极速响应" : "Instant Reply",
    },
    {
      icon: Mail,
      title: isKm ? "អ៊ីមែលជំនួយការងារ" : isZh ? "官方技术支持与隐私邮箱" : "Direct Support Email",
      desc: "support@MPG_by_ongphaly.com",
      href: "mailto:support@MPG_by_ongphaly.com",
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
      href: "https://maps.app.goo.gl/Qw1zEoirTn6TFoXg7",
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
          1. PRIMARY HERO SPOTLIGHT: DIRECT CONTACT WITH CEO
      ------------------------------------------------------------- */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <Reveal delay={0.05}>
            <div className="relative rounded-[36px] border border-blue-200/90 bg-gradient-to-br from-white via-white to-blue-50/50 p-8 sm:p-12 lg:p-14 shadow-[0_25px_80px_rgba(0,82,255,0.08),0_1px_3px_rgba(0,0,0,0.02)] ring-1 ring-blue-500/10 overflow-hidden">
              {/* Background ambient lighting */}
              <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(0,82,255,0.12),transparent_70%)] blur-3xl pointer-events-none" />

              <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
                {/* Left Column: Framed Portrait of Mr. Ong Phaly (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
                  <div className="relative group">
                    {/* Glowing outer backdrop */}
                    <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 opacity-25 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                    
                    {/* Main framed photo container */}
                    <div className="relative h-72 w-72 sm:h-80 sm:w-80 rounded-[28px] overflow-hidden border-4 border-white shadow-2xl bg-slate-900">
                      <Image
                        src="/avatars/ong-phaly.png"
                        alt="Mr. Ong Phaly — CEO and Founder of AttendKH (Attend) Cambodia"
                        fill
                        sizes="(max-width: 640px) 288px, 320px"
                        className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-500"
                        priority
                      />
                      
                      {/* Vignette overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                      
                      {/* Name overlay on photo */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-300 tracking-wider uppercase">
                          <BadgeCheck size={15} className="text-blue-400 fill-blue-400 text-white" />
                          <span>{isKm ? "អគ្គនាយកប្រតិបត្តិ & ផ្នែកលក់" : isZh ? "创始人兼 CEO" : "CEO & Sales Lead"}</span>
                        </div>
                        <p className="font-display text-xl sm:text-2xl font-extrabold text-white drop-shadow-md">
                          {isKm ? "លោក អ៊ុង ផល្លី" : isZh ? "Ong Phaly 先生" : "Mr. Ong Phaly"}
                        </p>
                      </div>
                    </div>

                    {/* Direct Contact Badge */}
                    <div className="absolute -top-3 -right-3 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1.5 text-[11px] font-bold text-white shadow-lg border-2 border-white">
                      <Zap size={13} className="text-amber-300 fill-amber-300" />
                      <span>Direct Contact</span>
                    </div>
                  </div>

                  {/* Availability pill */}
                  <div className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-white border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-800 shadow-xs">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span>{isKm ? "ឆ្លើយតបផ្ទាល់ក្នុងរយៈពេល ៥–១៥ នាទី" : isZh ? "Telegram 通常 5–15 分钟内极速回复" : "Direct response within 5–15 mins on Telegram"}</span>
                  </div>
                </div>

                {/* Right Column: Direct Messaging & Telegram CTA (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft border border-blue-200/70 px-3.5 py-1 text-xs font-bold text-brand uppercase tracking-wider mb-3">
                      <Briefcase size={13} />
                      <span>{isKm ? "ផ្នែកអាជីវកម្ម & សំណួរទូទៅ" : isZh ? "商业咨询 • 快速直达" : "Sales, Pricing & Demos"}</span>
                    </div>
                    
                    <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {isKm ? "ជជែកផ្ទាល់ជាមួយលោក អ៊ុង ផល្លី" : isZh ? "直接联系 Ong Phaly 先生" : "Chat Directly with Mr. Ong Phaly"}
                    </h2>
                    
                    <p className="text-sm sm:text-base leading-relaxed text-slate-600 mt-3">
                      {isKm
                        ? "សម្រាប់សំណួរអំពីការបង្ហាញប្រព័ន្ធ (Demo) គម្រោងតម្លៃតាមសាខា ច្បាប់ការងារ និងកិច្ចសន្យាសហគ្រាស សូមផ្ញើសារផ្ទាល់តាម Telegram ទៅកាន់ CEO ដោយមិនចាំបាច់បំពេញបែបបទស្មុគស្មាញឡើយ។"
                        : isZh
                        ? "如需预约系统演示 (Demo)、咨询多门店价格方案、柬埔寨劳工法与社保合规或企业级采购协议，欢迎直接通过 Telegram 发起对话。"
                        : "For product walkthroughs, multi-branch quotes, labor law inquiries, or enterprise agreements, reach out directly on Telegram for immediate support."}
                    </p>
                  </div>

                  {/* Highlights Bar */}
                  <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-2xs flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-brand shrink-0" />
                      <span>{isKm ? "បង្ហាញប្រព័ន្ធ 1-on-1" : isZh ? "1对1 演示" : "1-on-1 Product Demos"}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-brand shrink-0" />
                      <span>{isKm ? "គម្រោងតម្លៃច្រើនសាខា" : isZh ? "多分店方案" : "Multi-Branch Quotes"}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-brand shrink-0" />
                      <span>{isKm ? "កិច្ចសន្យាសហគ្រាស SLA" : isZh ? "企业级 SLA" : "Enterprise SLAs"}</span>
                    </div>
                  </div>

                  {/* Main Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href="https://t.me/MPG_by_ongphaly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#229ED9] to-[#0088cc] hover:from-[#1a8bc2] hover:to-[#0077b3] px-7 py-4 text-sm sm:text-base font-bold text-white shadow-[0_8px_25px_rgba(34,158,217,0.38)] hover:shadow-[0_12px_32px_rgba(34,158,217,0.48)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group"
                    >
                      <Send size={19} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      <span>{isKm ? "ឆាតជាមួយ CEO តាម Telegram" : isZh ? "联系 CEO 咨询 (@MPG_by_ongphaly)" : "Chat with CEO on Telegram"}</span>
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
          2. QUICK MESSAGE COMPOSER (INSTANT DISPATCH)
      ------------------------------------------------------------- */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-10 lg:p-12 shadow-sm">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand">
                {isKm ? "ផ្ញើសាររហ័ស" : isZh ? "一键快捷咨询" : "Instant Message Composer"}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                {isKm
                  ? "រៀបចំសំណួររបស់អ្នក ហើយផ្ញើភ្លាមៗតាម Telegram ឬ អ៊ីមែល"
                  : isZh
                  ? "选择咨询类型，一键直达 Telegram 或邮箱"
                  : "Compose Your Inquiry & Dispatch Instantly"}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                {isKm
                  ? "ជ្រើសរើសប្រធានបទ បញ្ចូលឈ្មោះក្រុមហ៊ុន ហើយចុចផ្ញើតាម Telegram ឬ អ៊ីមែលដោយមិនចាំបាច់រង់ចាំប្រព័ន្ធ Backend។"
                  : isZh
                  ? "选择您关注的主题，一键生成结构化消息并通过 Telegram 或电子邮件直接发送给相应负责人。"
                  : "Select a topic, enter optional details, and launch directly into Telegram or your email client."}
              </p>
            </div>

            {/* Topic selector pills */}
            <div className="max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-2 mb-6">
              {[
                { id: "demo", label: isKm ? "កក់ការបង្ហាញ (Demo)" : isZh ? "预约演示 (Demo)" : "Book a Demo", icon: Calendar },
                { id: "pricing", label: isKm ? "សាកសួរតម្លៃ (Pricing)" : isZh ? "咨询价格 (Pricing)" : "Pricing Inquiry", icon: Briefcase },
                { id: "technical", label: isKm ? "ជំនួយបច្ចេកទេស (Tech)" : isZh ? "技术支持 (Technical)" : "Technical Help", icon: Code2 },
                { id: "general", label: isKm ? "សំណួរទូទៅ (General)" : isZh ? "其他咨询 (General)" : "General Inquiry", icon: HelpCircle },
              ].map((item) => {
                const isSelected = composerTopic === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setComposerTopic(item.id as any)}
                    className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-brand text-white shadow-xs"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
                    }`}
                  >
                    <Icon size={14} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Form inputs */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isKm ? "ឈ្មោះរបស់អ្នក (ជាជម្រើស)" : isZh ? "您的姓名 (可选)" : "Your Name (Optional)"}
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder={isKm ? "ឧ. សុខ វិសាល" : isZh ? "例如：张经理" : "e.g. Sok Visal"}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isKm ? "ឈ្មោះក្រុមហ៊ុន / សាខា (ជាជម្រើស)" : isZh ? "公司或分店名称 (可选)" : "Company / Branch Count (Optional)"}
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder={isKm ? "ឧ. ABC Cafe (3 សាខា)" : isZh ? "例如：精品咖啡 (3家分店)" : "e.g. Boutique Mart (3 branches)"}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isKm ? "ចំណាំ ឬសំណួរជាក់លាក់ (ជាជម្រើស)" : isZh ? "具体问题或说明 (可选)" : "Notes or Specific Question (Optional)"}
                </label>
                <textarea
                  rows={3}
                  value={userNote}
                  onChange={(e) => setUserNote(e.target.value)}
                  placeholder={isKm ? "ប្រាប់យើងពីចំនួនបុគ្គលិក វេនការងារ ឬតម្រូវការប្រាក់ខែ..." : isZh ? "简要说明您的员工人数、排班方式或特殊薪酬需求..." : "Tell us about your headcount, shift rostering, or payroll needs..."}
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition resize-none"
                />
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={dynamicComposerTelegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#229ED9] hover:bg-[#1688bd] px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(34,158,217,0.3)] transition-all cursor-pointer group"
                >
                  <Send size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <span>{isKm ? "ផ្ញើសារតាម Telegram" : isZh ? "通过 Telegram 一键发送" : "Dispatch via Telegram"}</span>
                  <ExternalLink size={13} className="opacity-80" />
                </a>

                <a
                  href={dynamicComposerMailtoUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-2xs transition-colors cursor-pointer"
                >
                  <Mail size={16} />
                  <span>{isKm ? "ផ្ញើតាមអ៊ីមែល (Email)" : isZh ? "通过邮件发送" : "Send via Email"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------
          3. COMPACT TECHNICAL LEAD & ONBOARDING STRIP (AT BOTTOM)
      ------------------------------------------------------------- */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-2xs">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-emerald-400 font-mono shadow-xs shrink-0">
                  <Terminal size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm sm:text-base font-bold text-slate-900">
                      Chhunsour Seng
                    </span>
                    <span className="font-mono text-[10.5px] font-bold text-slate-500 bg-slate-200/70 px-2 py-0.5 rounded-md">
                      Technical Lead
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5 max-w-xl">
                    {isKm
                      ? "ជំនួយបច្ចេកទេសលើការដំឡើង GPS Geofencing ការកំណត់ច្បាប់ប្រាក់ខែកម្ពុជា ការតភ្ជាប់ Telegram Bot និង API។"
                      : isZh
                      ? "负责 GPS 电子围栏校准、柬埔寨双币种算薪公式配置、Telegram 机器人告警与 API 对接支持。"
                      : "Need developer help with GPS geofencing calibration, Cambodian payroll formula setup, Telegram bot alerts, or API integrations?"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-stretch sm:self-auto shrink-0">
                <a
                  href="https://t.me/ChhunsourSENG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 px-4 py-2.5 text-xs font-bold text-white transition-colors cursor-pointer"
                >
                  <Send size={13} />
                  <span>{isKm ? "ឆាតជាមួយ Tech Lead (@ChhunsourSENG)" : isZh ? "联系技术负责人 (@ChhunsourSENG)" : "Message Tech Lead (@ChhunsourSENG)"}</span>
                </a>

                <button
                  type="button"
                  onClick={() => copyToClipboard("@ChhunsourSENG")}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-700 transition-colors cursor-pointer"
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
      </Section>

      {/* -------------------------------------------------------------
          4. OFFICIAL CHANNELS & HEADQUARTERS DIRECTORY
      ------------------------------------------------------------- */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand">
              {isKm ? "បណ្តាញផ្លូវការ" : isZh ? "全渠道联系方式" : "Official Channels"}
            </span>
            <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
              {isKm
                ? "ព័ត៌មានទំនាក់ទំនងការិយាល័យកណ្តាល"
                : isZh
                ? "官方服务渠道与总部办公信息"
                : "Headquarters & Support Directory"}
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickChannels.map((ch, i) => {
              const Icon = ch.icon;
              return (
                <Reveal key={ch.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-brand/40 hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand border border-blue-200/60 shadow-2xs">
                          <Icon size={19} />
                        </div>
                        <span className="rounded-full bg-slate-100 border border-slate-200/70 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600">
                          {ch.badge}
                        </span>
                      </div>

                      <h4 className="font-display text-[15px] font-bold text-slate-900">
                        {ch.title}
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-[13px] font-mono text-slate-600 break-words">
                        {ch.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-slate-100">
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

          {/* Operating hours guarantee banner */}
          <div className="mt-10 rounded-2xl border border-blue-200/70 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-blue-500/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
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
          5. DIRECT ANSWER BLOCK FOR SEO & SEARCH ENGINES
      ------------------------------------------------------------- */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <DirectAnswerBlock
            question={
              isKm
                ? "តើខ្ញុំអាចទាក់ទងមកកាន់ AttendKH សម្រាប់សំណួរ និងការបង្ហាញប្រព័ន្ធដោយរបៀបណា?"
                : isZh
                ? "如何联系 AttendKH 咨询产品演示与技术支持？"
                : "How can I contact AttendKH for product inquiries and technical setup?"
            }
            answer={
              isKm
                ? "អ្នកអាចទាក់ទងផ្ទាល់ជាមួយផ្នែកលក់ និងអគ្គនាយកប្រតិបត្តិ (CEO) តាម Telegram @MPG_by_ongphaly សម្រាប់សំណួរអាជីវកម្ម ឬទាក់ទងប្រធានផ្នែកបច្ចេកទេស តាម Telegram @ChhunsourSENG សម្រាប់ការដំឡើង និងជំនួយបច្ចេកទេស។"
                : isZh
                ? "您可以直接通过 Telegram @MPG_by_ongphaly 联系 CEO 咨询产品演示与企业报价；或通过 Telegram @ChhunsourSENG 联系技术负责人咨询系统部署与算薪配置。"
                : "You can contact Sales & CEO directly on Telegram at @MPG_by_ongphaly for product walkthroughs and enterprise quotes, or Technical Lead at @ChhunsourSENG for system setup, geofencing configuration, and technical onboarding."
            }
            facts={[
              {
                label: isKm ? "ផ្នែកលក់ & CEO" : "Sales & CEO",
                value: "@MPG_by_ongphaly",
              },
              {
                label: isKm ? "ផ្នែកបច្ចេកទេស" : "Technical Lead",
                value: "@ChhunsourSENG",
              },
              {
                label: isKm ? "ឆានែលផ្លូវការ" : "Official Channel",
                value: "@MPG_by_ongphaly",
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
