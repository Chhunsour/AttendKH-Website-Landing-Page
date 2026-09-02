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
} from "lucide-react";
import { useSite } from "@/lib/i18n";
import { PageHero, Section, DirectAnswerBlock, Reveal } from "@/components/site/ui";

export function ContactView() {
  const { lang, publicSettings } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

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
        ? "直接联系管理层与技术团队"
        : "Direct Leadership & Technical Support",
      title: isKm
        ? "ទំនាក់ទំនងផ្ទាល់ជាមួយថ្នាក់ដឹកនាំ"
        : isZh
        ? "无需繁琐表单，直接与 CEO 及技术负责人对话"
        : "Connect Directly with Our Leadership Team",
      sub: isKm
        ? "ទទួលបានចម្លើយភ្លាមៗ កក់ការបង្ហាញប្រព័ន្ធ ឬទទួលបានការជួយដំឡើងបច្ចេកទេសផ្ទាល់តាម Telegram ដោយមិនចាំបាច់បំពេញទម្រង់បែបបទ។"
        : isZh
        ? "无论是商业合作咨询、专属企业报价，还是系统部署与技术对接，均可通过 Telegram 一键直达核心团队。"
        : "Get instant answers, schedule executive walkthroughs, or get technical onboarding assistance directly on Telegram.",
    },
    breadcrumbs: [
      { label: isKm ? "ទំព័រដើម" : isZh ? "首页" : "Home", href: "/" },
      { label: isKm ? "ទំនាក់ទំនង" : isZh ? "联系我们" : "Contact" },
    ],
  };

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
          1. SPOTLIGHT: CEO EXECUTIVE CONTACT SHOWCASE
      ------------------------------------------------------------- */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          {/* Top section heading */}
          <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold text-brand uppercase tracking-wider">
              <Sparkles size={13} className="text-brand" />
              <span>{isKm ? "ទំនាក់ទំនងផ្ទាល់ជាមួយ CEO" : isZh ? "直通创始人与管理层" : "Direct Executive Contact"}</span>
            </span>
            <h2 className="font-display mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              {isKm
                ? "ជួប និងពិភាក្សាផ្ទាល់ជាមួយអគ្គនាយកប្រតិបត្តិ (CEO)"
                : isZh
                ? "与 AttendKH 创始人兼首席执行官直接对话"
                : "Meet & Message Our Chief Executive Officer"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              {isKm
                ? "សម្រាប់កិច្ចពិភាក្សាអាជីវកម្ម ការបង្ហាញផលិតផលកម្រិតសហគ្រាស និងសំណើកិច្ចសន្យាពិសេស។"
                : isZh
                ? "针对企业级采购、商业合作洽谈、定制演示预约及大客户服务协议，欢迎直接联系。"
                : "For strategic partnerships, enterprise demos, custom contract requirements, and executive inquiries."}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* ----------------- LEFT: HERO CEO SPOTLIGHT CARD (7 COLS) ----------------- */}
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <div className="relative h-full rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white via-white to-blue-50/30 p-7 sm:p-10 shadow-[0_20px_50px_rgba(0,82,255,0.06),0_1px_3px_rgba(0,0,0,0.02)] hover:border-brand/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  {/* Subtle top ambient glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(ellipse_at_top_right,rgba(0,82,255,0.08),transparent_70%)] pointer-events-none" />

                  <div>
                    {/* Header: Photo + Status Pill */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                      <div className="flex items-center gap-5">
                        <div className="relative">
                          <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-2xl overflow-hidden border-2 border-brand/30 shadow-lg bg-slate-100">
                            <Image
                              src="/avatars/ong-phaly.png"
                              alt="Mr. Ong Phaly - CEO of AttendKH"
                              fill
                              sizes="(max-width: 640px) 96px, 112px"
                              className="object-cover object-top"
                              priority
                            />
                          </div>
                          <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-xl bg-brand text-white border-2 border-white shadow-xs">
                            <Briefcase size={13} />
                          </span>
                        </div>

                        <div>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft border border-blue-200/70 px-3 py-0.5 text-[11.5px] font-bold text-brand uppercase tracking-wider mb-1.5">
                            <Building2 size={12} />
                            <span>{isKm ? "អគ្គនាយកប្រតិបត្តិ" : isZh ? "创始人兼 CEO" : "CEO & Founder"}</span>
                          </span>
                          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                            {isKm ? "លោក អ៊ុង ផល្លី" : isZh ? "Ong Phaly 先生" : "Mr. Ong Phaly"}
                          </h3>
                          <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                            {isKm ? "ដឹកនាំ និងគ្រប់គ្រង AttendKH" : isZh ? "AttendKH 创始人" : "Executive Leadership & Strategy"}
                          </p>
                        </div>
                      </div>

                      {/* Online status indicator */}
                      <div className="sm:self-start flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-200/70 px-3.5 py-1 text-xs font-semibold shadow-2xs">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{isKm ? "បើកទទួលសារផ្ទាល់" : isZh ? "在线接受咨询" : "Available on Telegram"}</span>
                      </div>
                    </div>

                    {/* Bio & Leadership Focus */}
                    <div className="mt-6 space-y-4">
                      <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700">
                        {isKm
                          ? "ដឹកនាំយុទ្ធសាស្ត្រអាជីវកម្ម ភាពជាដៃគូសហគ្រាស កិច្ចសន្យា SLA និងការអភិវឌ្ឍផលិតផលស្របតាមតម្រូវការអាជីវកម្មកម្ពុជា។"
                          : isZh
                          ? "全面负责 AttendKH 商业战略拓展、大客户企业采购、定制演示预约与专属 SLA 服务保障协议。"
                          : "Oversees executive strategy, commercial agreements, enterprise customer success, and tailored workforce solutions across Cambodia."}
                      </p>

                      {/* Expertise Badges */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {(isKm
                          ? ["កិច្ចព្រមព្រៀងសហគ្រាស", "ការបង្ហាញផលិតផលជាន់ខ្ពស់", "ភាពជាដៃគូអាជីវកម្ម", "កិច្ចសន្យា SLA"]
                          : isZh
                          ? ["企业采购方案", "高管专属演示", "商业合作对接", "定制服务协议"]
                          : ["Enterprise Agreements", "Executive Walkthroughs", "Commercial Partnerships", "Dedicated SLAs"]
                        ).map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-blue-500/10 text-brand border border-blue-200/70 px-3 py-1 text-xs font-semibold"
                          >
                            <Check size={12} strokeWidth={3} />
                            <span>{item}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                    <a
                      href="https://t.me/MPG_by_ongphaly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#229ED9] hover:bg-[#1688bd] px-7 py-4 text-sm sm:text-[15px] font-bold text-white shadow-[0_6px_20px_rgba(34,158,217,0.35)] hover:shadow-[0_8px_25px_rgba(34,158,217,0.45)] transition-all duration-200 cursor-pointer group"
                    >
                      <Send size={18} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      <span>{isKm ? "ឆាតផ្ទាល់ជាមួយ CEO តាម Telegram" : isZh ? "联系 CEO 咨询 (@MPG_by_ongphaly)" : "Chat with CEO on Telegram"}</span>
                      <ExternalLink size={14} className="opacity-80" />
                    </a>

                    <button
                      type="button"
                      onClick={() => copyToClipboard("@MPG_by_ongphaly")}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50 px-5 py-4 text-xs font-bold text-slate-700 shadow-2xs transition-colors cursor-pointer"
                      title={isKm ? "ចម្លង Telegram handle" : "Copy Telegram handle"}
                    >
                      {copiedHandle === "@MPG_by_ongphaly" ? (
                        <>
                          <CheckCircle2 size={15} className="text-emerald-600" />
                          <span className="text-emerald-600 font-semibold">{isKm ? "បានចម្លង!" : "Copied!"}</span>
                        </>
                      ) : (
                        <>
                          <Copy size={15} />
                          <span>@MPG_by_ongphaly</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ----------------- RIGHT: PLAIN & CLEAN TECHNICAL LEAD CARD (5 COLS) ----------------- */}
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="relative h-full rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-xs hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Header with clean terminal icon */}
                    <div className="flex items-center justify-between gap-4 pb-5 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-emerald-400 font-mono shadow-xs">
                          <Terminal size={22} />
                        </div>
                        <div>
                          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                            {isKm ? "ផ្នែកបច្ចេកទេស" : isZh ? "技术支持与研发" : "Technical Lead"}
                          </span>
                          <h4 className="font-display text-xl font-bold text-slate-900">
                            Chhunsour Seng
                          </h4>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 text-xs font-semibold">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Active</span>
                      </span>
                    </div>

                    {/* Scope & Responsibilities */}
                    <div className="mt-5 space-y-3.5">
                      <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-600">
                        {isKm
                          ? "ជំនួយផ្ទាល់លើការដំឡើងប្រព័ន្ធ វត្តមាន GPS Geofencing ការកំណត់ច្បាប់ប្រាក់ខែកម្ពុជា ការតភ្ជាប់ Bot Telegram និងបញ្ហាបច្ចេកទេស។"
                          : isZh
                          ? "负责系统集成、GPS 电子围栏校准、柬埔寨双币种算薪引擎配置、Telegram 机器人告警与移动端技术支持。"
                          : "Direct engineering support for geofencing setup, Cambodian payroll logic, Telegram bot alerts, and technical integrations."}
                      </p>

                      {/* Clean Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {(isKm
                          ? ["ការដំឡើង GPS", "ម៉ាស៊ីនប្រាក់ខែ", "Telegram Bot", "ជំនួយ API"]
                          : isZh
                          ? ["围栏打卡配置", "算薪公式支持", "机器人集成", "API 对接"]
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

                  {/* Tech Lead Action Button */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    <a
                      href="https://t.me/ChhunsourSENG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-colors cursor-pointer"
                    >
                      <Send size={15} />
                      <span>{isKm ? "ឆាតជាមួយ Tech Lead (@ChhunsourSENG)" : isZh ? "联系技术负责人 (@ChhunsourSENG)" : "Message Tech Lead (@ChhunsourSENG)"}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => copyToClipboard("@ChhunsourSENG")}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 px-3.5 py-3.5 text-xs font-medium text-slate-700 transition-colors cursor-pointer"
                      title={isKm ? "ចម្លង handle" : "Copy handle"}
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
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------
          2. OFFICIAL CHANNELS & HEADQUARTERS DIRECTORY
      ------------------------------------------------------------- */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand">
              {isKm ? "បណ្តាញផ្លូវការ" : isZh ? "全渠道联系方式" : "Official Channels"}
            </span>
            <h3 className="font-display text-2xl font-bold text-slate-900 mt-2">
              {isKm
                ? "មធ្យោបាយបន្ថែមដើម្បីទាក់ទងមក AttendKH"
                : isZh
                ? "其他官方沟通与技术支持渠道"
                : "Other Ways to Reach AttendKH"}
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
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand border border-blue-200/60 shadow-2xs">
                          <Icon size={20} />
                        </div>
                        <span className="rounded-full bg-slate-100 border border-slate-200/70 px-2.5 py-0.5 text-[10.5px] font-semibold text-slate-600">
                          {ch.badge}
                        </span>
                      </div>

                      <h4 className="font-display text-[16px] font-bold text-slate-900">
                        {ch.title}
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-[13px] font-mono text-slate-600 break-words">
                        {ch.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <a
                        href={ch.href}
                        target={ch.href.startsWith("http") ? "_blank" : undefined}
                        rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-dark transition-colors group"
                      >
                        <span>{ch.linkText}</span>
                        <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5" />
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
          3. DIRECT ANSWER BLOCK FOR SEO & SEARCH ENGINES
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
