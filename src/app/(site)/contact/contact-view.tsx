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
  MessageCircle,
  HelpCircle,
  Calendar,
  Layers,
  ArrowRight,
} from "lucide-react";
import { useSite } from "@/lib/i18n";
import { PageHero, Section, DirectAnswerBlock, Reveal } from "@/components/site/ui";

export function ContactView() {
  const { lang, publicSettings } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  // Quick message composer state
  const [topic, setTopic] = useState<"demo" | "pricing" | "technical" | "general">("demo");
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
        : "Contact & Support • Fast Direct Chat",
      title: isKm
        ? "ទំនាក់ទំនងមកកាន់ក្រុមការងារ AttendKH"
        : isZh
        ? "联系 AttendKH 团队"
        : "Get in Touch with AttendKH",
      sub: isKm
        ? "មានចម្ងល់ ចង់សាកល្បងប្រព័ន្ធ ឬត្រូវការជំនួយបច្ចេកទេស? ទំនាក់ទំនងផ្ទាល់ជាមួយក្រុមការងារយើងខ្ញុំតាម Telegram អ៊ីមែល ឬទូរស័ព្ទ។"
        : isZh
        ? "无论是产品演示预约、价格方案咨询还是技术支持，欢迎随时通过 Telegram、邮件或电话直接联系我们的团队。"
        : "Have questions about AttendKH, want a live product walkthrough, or need technical onboarding? Message our leadership or technical team directly on Telegram, email, or phone.",
    },
    breadcrumbs: [
      { label: isKm ? "ទំព័រដើម" : isZh ? "首页" : "Home", href: "/" },
      { label: isKm ? "ទំនាក់ទំនង" : isZh ? "联系យើង" : "Contact" },
    ],
  };

  // Generate dynamic Telegram and Email URLs based on composer state
  const getTopicLabel = () => {
    if (topic === "demo") return isKm ? "កក់ការបង្ហាញផលិតផល (Book a Demo)" : isZh ? "预约产品演示 (Book a Demo)" : "Book a Product Demo";
    if (topic === "pricing") return isKm ? "សាកសួរតម្លៃ & សាខា (Pricing Inquiry)" : isZh ? "价格与分店咨询 (Pricing Inquiry)" : "Pricing & Branches Inquiry";
    if (topic === "technical") return isKm ? "ជំនួយបច្ចេកទេស & GPS (Technical Setup)" : isZh ? "技术支持与围栏配置 (Technical Setup)" : "Technical & GPS Setup";
    return isKm ? "សំណួរទូទៅ (General Inquiry)" : isZh ? "通用业务咨询 (General Inquiry)" : "General Inquiry";
  };

  const targetTelegramHandle = topic === "technical" ? "ChhunsourSENG" : "MPG_by_ongphaly";

  const composeMessageBody = () => {
    let msg = `Hello AttendKH Team,\n\nI am reaching out regarding: ${getTopicLabel()}\n`;
    if (senderName.trim()) msg += `Name: ${senderName.trim()}\n`;
    if (companyName.trim()) msg += `Company / Team: ${companyName.trim()}\n`;
    if (userNote.trim()) msg += `Note: ${userNote.trim()}\n`;
    msg += `\nSent via AttendKH Contact Page.`;
    return msg;
  };

  const dynamicTelegramUrl = `https://t.me/${targetTelegramHandle}?text=${encodeURIComponent(composeMessageBody())}`;
  const dynamicMailtoUrl = `mailto:support@attendkh.com?subject=${encodeURIComponent(`[AttendKH Inquiry] ${getTopicLabel()}`)}&body=${encodeURIComponent(composeMessageBody())}`;

  const quickChannels = [
    {
      icon: MessageSquare,
      title: isKm ? "ឆានែល Telegram ផ្លូវការ" : isZh ? "官方 Telegram 频道" : "Official Telegram Channel",
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
          1. DIRECT CONTACT TRACKS: SALES & TECHNICAL CHANNELS
      ------------------------------------------------------------- */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold text-brand uppercase tracking-wider">
              <Sparkles size={13} className="text-brand" />
              <span>{isKm ? "ជម្រើសទំនាក់ទំនងផ្ទាល់" : isZh ? "直接沟通渠道" : "Direct Contact Options"}</span>
            </span>
            <h2 className="font-display mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              {isKm
                ? "ជ្រើសរើសផ្នែកដែលអ្នកចង់ទំនាក់ទំនង"
                : isZh
                ? "根据您的需求，直接联系业务或技术负责人"
                : "Choose the Department You Wish to Reach"}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              {isKm
                ? "ចុចលើប៊ូតុង Telegram ខាងក្រោមដើម្បីជជែកផ្ទាល់ភ្លាមៗ គ្មានការរង់ចាំយូរឡើយ។"
                : isZh
                ? "点击下方专属 Telegram 按钮，即可立即开启 1 对 1 实时对话。"
                : "Connect with our team in seconds via direct Telegram messaging."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* ----------------- TRACK A: SALES & EXECUTIVE (MR. ONG PHALY) ----------------- */}
            <Reveal delay={0.05}>
              <div className="relative h-full rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white via-white to-blue-50/30 p-7 sm:p-9 shadow-sm hover:border-brand/40 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  {/* Card Header: Category + Live Status */}
                  <div className="flex items-center justify-between gap-3 pb-5 border-b border-slate-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft border border-blue-200/70 px-3 py-1 text-xs font-bold text-brand uppercase tracking-wider">
                      <Briefcase size={13} />
                      <span>{isKm ? "ផ្នែកអាជីវកម្ម & លក់" : isZh ? "商业合作与销售咨询" : "Sales & Inquiries"}</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-200/70 px-3 py-1 text-xs font-semibold shadow-2xs">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Online</span>
                    </span>
                  </div>

                  {/* Profile info with Avatar */}
                  <div className="mt-6 flex items-center gap-4">
                    <div className="relative h-18 w-18 sm:h-20 sm:w-20 rounded-2xl overflow-hidden border-2 border-brand/30 shadow-md bg-slate-900 shrink-0">
                      <Image
                        src="/avatars/ong-phaly.png"
                        alt="Mr. Ong Phaly - CEO & Sales Lead"
                        fill
                        sizes="(max-width: 640px) 72px, 80px"
                        className="object-cover object-top"
                        priority
                      />
                    </div>

                    <div>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                        {isKm ? "អគ្គនាយកប្រតិបត្តិ (CEO)" : isZh ? "创始人兼 CEO" : "Chief Executive Officer"}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                        {isKm ? "លោក អ៊ុង ផល្លី (Ong Phaly)" : isZh ? "Ong Phaly 先生" : "Mr. Ong Phaly"}
                      </h3>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">
                        @MPG_by_ongphaly
                      </p>
                    </div>
                  </div>

                  {/* Best for tags */}
                  <div className="mt-5 space-y-2">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      {isKm ? "ទាក់ទងសម្រាប់៖" : isZh ? "适合咨询的事项：" : "Best for:"}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(isKm
                        ? ["កក់ការបង្ហាញប្រព័ន្ធ (Demo)", "សាកសួរតម្លៃ & កញ្ចប់សេវា", "កិច្ចសន្យាសហគ្រាស", "ភាពជាដៃគូ"]
                        : isZh
                        ? ["预约系统演示 (Demo)", "价格与多门店方案", "企业定制 SLA", "商业合作洽谈"]
                        : ["1-on-1 Product Demos", "Pricing & Multi-Branch Quotes", "Enterprise Contracts", "Partnerships"]
                      ).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-xl bg-blue-500/10 text-brand border border-blue-200/70 px-2.5 py-1 text-xs font-semibold"
                        >
                          <Check size={12} strokeWidth={2.5} />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="mt-7 pt-5 border-t border-slate-100 flex items-center gap-2.5">
                  <a
                    href="https://t.me/MPG_by_ongphaly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#229ED9] hover:bg-[#1688bd] px-5 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_4px_14px_rgba(34,158,217,0.3)] transition-all cursor-pointer"
                  >
                    <Send size={16} />
                    <span>{isKm ? "ឆាតជាមួយផ្នែកលក់ (@MPG_by_ongphaly)" : isZh ? "联系销售负责人 (@MPG_by_ongphaly)" : "Chat for Sales (@MPG_by_ongphaly)"}</span>
                    <ExternalLink size={13} className="opacity-80" />
                  </a>

                  <button
                    type="button"
                    onClick={() => copyToClipboard("@MPG_by_ongphaly")}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 px-3.5 py-3.5 text-xs font-medium text-slate-700 transition-colors cursor-pointer"
                    title="Copy Telegram handle"
                  >
                    {copiedHandle === "@MPG_by_ongphaly" ? (
                      <CheckCircle2 size={15} className="text-emerald-600" />
                    ) : (
                      <Copy size={15} />
                    )}
                  </button>
                </div>
              </div>
            </Reveal>

            {/* ----------------- TRACK B: TECHNICAL & SUPPORT (CHHUNSOUR SENG) ----------------- */}
            <Reveal delay={0.1}>
              <div className="relative h-full rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between">
                <div>
                  {/* Card Header: Category + Live Status */}
                  <div className="flex items-center justify-between gap-3 pb-5 border-b border-slate-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-bold text-slate-700 uppercase tracking-wider">
                      <Code2 size={13} />
                      <span>{isKm ? "ផ្នែកបច្ចេកទេស & ដំឡើង" : isZh ? "技术支持与系统对接" : "Technical & Setup"}</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 text-xs font-semibold">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Online</span>
                    </span>
                  </div>

                  {/* Profile info with Clean Terminal icon */}
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex h-18 w-18 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-slate-900 text-emerald-400 font-mono shadow-md shrink-0">
                      <Terminal size={30} />
                    </div>

                    <div>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                        {isKm ? "ប្រធានផ្នែកបច្ចេកទេស" : isZh ? "技术负责人 (Technical Lead)" : "Technical Lead"}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                        Chhunsour Seng
                      </h3>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">
                        @ChhunsourSENG
                      </p>
                    </div>
                  </div>

                  {/* Best for tags */}
                  <div className="mt-5 space-y-2">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      {isKm ? "ទាក់ទងសម្រាប់៖" : isZh ? "适合咨询的事项：" : "Best for:"}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(isKm
                        ? ["ការដំឡើង GPS Geofencing", "ម៉ាស៊ីនប្រាក់ខែ & ប.ស.ស.", "តភ្ជាប់ Telegram Bot", "ជំនួយ API"]
                        : isZh
                        ? ["GPS 电子围栏校准", "柬埔寨双币种算薪规则", "Telegram 机器人与通知", "API 与系统对接"]
                        : ["GPS Geofencing Setup", "Payroll & NSSF Logic", "Telegram Bot Integration", "API Assistance"]
                      ).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-xl bg-slate-100/90 border border-slate-200/70 px-2.5 py-1 text-xs font-medium text-slate-700"
                        >
                          <Code2 size={11} className="text-slate-500" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="mt-7 pt-5 border-t border-slate-100 flex items-center gap-2.5">
                  <a
                    href="https://t.me/ChhunsourSENG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 px-5 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xs transition-colors cursor-pointer"
                  >
                    <Send size={15} />
                    <span>{isKm ? "ឆាតជាមួយផ្នែកបច្ចេកទេស (@ChhunsourSENG)" : isZh ? "联系技术负责人 (@ChhunsourSENG)" : "Chat for Tech (@ChhunsourSENG)"}</span>
                    <ExternalLink size={13} className="opacity-80" />
                  </a>

                  <button
                    type="button"
                    onClick={() => copyToClipboard("@ChhunsourSENG")}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 px-3.5 py-3.5 text-xs font-medium text-slate-700 transition-colors cursor-pointer"
                    title="Copy Telegram handle"
                  >
                    {copiedHandle === "@ChhunsourSENG" ? (
                      <CheckCircle2 size={15} className="text-emerald-600" />
                    ) : (
                      <Copy size={15} />
                    )}
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------
          2. INTERACTIVE QUICK MESSAGE DISPATCHER (NO BACKEND NEEDED)
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
                const isSelected = topic === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTopic(item.id as any)}
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
                  href={dynamicTelegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#229ED9] hover:bg-[#1688bd] px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(34,158,217,0.3)] transition-all cursor-pointer group"
                >
                  <Send size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <span>{isKm ? "ផ្ញើសារតាម Telegram" : isZh ? "通过 Telegram 一键发送" : "Dispatch via Telegram"}</span>
                  <ExternalLink size={13} className="opacity-80" />
                </a>

                <a
                  href={dynamicMailtoUrl}
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
          3. OFFICIAL CHANNELS & HEADQUARTERS DIRECTORY
      ------------------------------------------------------------- */}
      <Section tone="white">
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
          4. DIRECT ANSWER BLOCK FOR SEO & SEARCH ENGINES
      ------------------------------------------------------------- */}
      <Section tone="mist">
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
