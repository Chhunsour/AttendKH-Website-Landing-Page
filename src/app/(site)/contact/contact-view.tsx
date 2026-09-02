"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  Headphones,
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
      eyebrow: isKm
        ? "ទំនាក់ទំនងផ្ទាល់ជាមួយថ្នាក់ដឹកនាំ"
        : isZh
        ? "直接联系管理层与技术团队"
        : "Direct Leadership & Technical Support",
      title: isKm
        ? "ជួបជាមួយថ្នាក់ដឹកនាំ និងក្រុមការងារបច្ចេកទេស"
        : isZh
        ? "无需繁琐表单，直接与决策人及技术负责人对话"
        : "Connect Directly with Our Leadership & Technical Team",
      sub: isKm
        ? "ទទួលបានចម្លើយភ្លាមៗ កក់ការបង្ហាញប្រព័ន្ធ ឬទទួលបានការជួយដំឡើងបច្ចេកទេសផ្ទាល់តាម Telegram ដោយមិនចាំបាច់បំពេញទម្រង់បែបបទ។"
        : isZh
        ? "无论是商业合作咨询、专属报价方案，还是系统部署与技术对接，均可通过 Telegram 一键直达核心团队。"
        : "Get instant answers, request custom walkthroughs, or get technical onboarding assistance directly on Telegram.",
    },
    breadcrumbs: [
      { label: isKm ? "ទំព័រដើម" : isZh ? "首页" : "Home", href: "/" },
      { label: isKm ? "ទំនាក់ទំនង" : isZh ? "联系我们" : "Contact" },
    ],
  };

  const teamContacts = [
    {
      id: "ceo",
      name: isKm ? "លោក អ៊ុង ផល្លី (Ong Phaly)" : isZh ? "Ong Phaly 先生" : "Mr. Ong Phaly",
      role: isKm ? "អគ្គនាយកប្រតិបត្តិ (CEO & Founder)" : isZh ? "首席执行官 (CEO & Founder)" : "CEO & Founder",
      avatar: "/avatars/ong-phaly.png",
      tagline: isKm
        ? "ដឹកនាំយុទ្ធសាស្ត្រអាជីវកម្ម ភាពជាដៃគូសហគ្រាស និងកិច្ចសន្យា SLA"
        : isZh
        ? "负责商业合作拓展、企业定制方案、大客户洽谈与 SLA 服务协议"
        : "Executive Leadership, Enterprise Partnerships, Pricing & SLAs",
      telegramHandle: "MPG_by_ongphaly",
      telegramUrl: "https://t.me/MPG_by_ongphaly",
      statusText: isKm ? "បើកទទួលសារផ្ទាល់" : isZh ? "在线接受咨询" : "Available on Telegram",
      roleIcon: Briefcase,
      badgeColor: "from-blue-600 to-indigo-600",
      skills: isKm
        ? ["កិច្ចព្រមព្រៀងសហគ្រាស", "ការបង្ហាញផលិតផលជាន់ខ្ពស់", "ភាពជាដៃគូអាជីវកម្ម"]
        : isZh
        ? ["企业采购方案", "高管专属演示", "商业合作对接"]
        : ["Enterprise SLAs", "Executive Demos", "Commercial Agreements"],
      buttonLabel: isKm
        ? "ឆាតផ្ទាល់ជាមួយ CEO តាម Telegram"
        : isZh
        ? "联系 CEO (@MPG_by_ongphaly)"
        : "Chat with CEO on Telegram",
    },
    {
      id: "technical",
      name: isKm ? "សេង ឈុនសួរ (Chhunsour Seng)" : isZh ? "Chhunsour Seng 先生" : "Chhunsour Seng",
      role: isKm ? "ប្រធានផ្នែកបច្ចេកទេស (Technical Lead)" : isZh ? "技术负责人 (Technical Lead)" : "Technical Lead & Engineering",
      avatar: "/avatars/chhunsour.png",
      tagline: isKm
        ? "ដឹកនាំវិស្វកម្មកម្មវិធីទូរស័ព្ទ ប្រព័ន្ធ GPS Geofencing និងការតភ្ជាប់ API"
        : isZh
        ? "负责移动端研发、GPS 电子围栏算法、算薪引擎及 API 系统对接"
        : "Mobile Engineering, Geofencing Architecture & Product Integration",
      telegramHandle: "ChhunsourSENG",
      telegramUrl: "https://t.me/ChhunsourSENG",
      statusText: isKm ? "ជំនួយបច្ចេកទេស ២៤/៧" : isZh ? "技术支持在线" : "Active Technical Support",
      roleIcon: Code2,
      badgeColor: "from-emerald-600 to-teal-600",
      skills: isKm
        ? ["ការដំឡើងប្រព័ន្ធ & GPS", "ម៉ាស៊ីនគណនាប្រាក់ខែ", "ការតភ្ជាប់ Telegram Bot"]
        : isZh
        ? ["考勤与围栏配置", "柬埔寨算薪规则", "Telegram 机器人与 API"]
        : ["GPS & Perimeter Setup", "Payroll Calculations", "Bot & API Integration"],
      buttonLabel: isKm
        ? "ឆាតផ្ទាល់ជាមួយ Tech Lead តាម Telegram"
        : isZh
        ? "联系技术负责人 (@ChhunsourSENG)"
        : "Chat with Tech Lead on Telegram",
    },
  ];

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
        badge={copy.hero.eyebrow}
        sub={copy.hero.sub}
        breadcrumbs={copy.breadcrumbs}
      />

      {/* -------------------------------------------------------------
          1. PRIMARY LEADERSHIP DIRECT CONTACT CARDS
      ------------------------------------------------------------- */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold text-brand uppercase tracking-wider">
              <Sparkles size={13} className="text-brand" />
              <span>{isKm ? "ទំនាក់ទំនងផ្ទាល់ដោយគ្មានទម្រង់បែបបទ" : isZh ? "直通核心团队 • 零等待表单" : "1-Click Direct Access"}</span>
            </span>
            <h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              {isKm
                ? "ជ្រើសរើសទំនាក់ទំនងជាមួយថ្នាក់ដឹកនាំ ឬក្រុមបច្ចេកទេស"
                : isZh
                ? "根据您的需求，直接联系业务负责人或技术主管"
                : "Choose Who You Would Like to Connect With"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              {isKm
                ? "ចុចលើប៊ូតុង Telegram ខាងក្រោមដើម្បីចាប់ផ្តើមការសន្ទនាផ្ទាល់ភ្លាមៗ។"
                : isZh
                ? "点击下方专属 Telegram 按钮，即可立即开启 1 对 1 实时对话。"
                : "Click the direct Telegram links below to initiate an instant conversation."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {teamContacts.map((member, idx) => {
              const RoleIcon = member.roleIcon;
              const isCopied = copiedHandle === member.telegramHandle;

              return (
                <Reveal key={member.id} delay={idx * 0.1}>
                  <div className="relative h-full rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-[0_12px_40px_rgba(0,82,255,0.04),0_1px_3px_rgba(0,0,0,0.02)] hover:border-brand/40 hover:shadow-[0_20px_60px_rgba(0,82,255,0.08)] transition-all duration-300 flex flex-col justify-between group overflow-hidden">
                    {/* Background subtle gradient */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,rgba(0,82,255,0.04),transparent_70%)] pointer-events-none" />

                    <div>
                      {/* Header row: Avatar + Status + Badge */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="relative">
                          <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md bg-slate-100 group-hover:border-brand transition-colors">
                            <Image
                              src={member.avatar}
                              alt={member.name}
                              fill
                              sizes="(max-width: 640px) 96px, 112px"
                              className="object-cover object-top"
                              priority
                            />
                          </div>
                          <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-xl bg-white text-brand border border-slate-200 shadow-xs">
                            <RoleIcon size={14} />
                          </span>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-200/70 px-3 py-1 text-xs font-semibold shadow-2xs">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span>{member.statusText}</span>
                          </span>
                          <span className="text-[11px] font-mono text-slate-500 font-medium">
                            @{member.telegramHandle}
                          </span>
                        </div>
                      </div>

                      {/* Name & Role */}
                      <div className="mt-6">
                        <span className="inline-block font-mono text-xs font-bold uppercase tracking-wider text-brand mb-1">
                          {member.role}
                        </span>
                        <h3 className="font-display text-2xl font-extrabold text-slate-900 tracking-tight">
                          {member.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {member.tagline}
                        </p>
                      </div>

                      {/* Expertise Badges */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100/90 border border-slate-200/70 px-3 py-1 text-xs font-medium text-slate-700"
                          >
                            <Check size={12} className="text-brand" />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions Row: 1-Click Telegram Button & Copy Handle */}
                    <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <a
                        href={member.telegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#229ED9] hover:bg-[#1688bd] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(34,158,217,0.3)] hover:shadow-[0_6px_20px_rgba(34,158,217,0.4)] transition-all duration-200 cursor-pointer group/btn"
                      >
                        <Send size={16} className="transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                        <span>{member.buttonLabel}</span>
                        <ExternalLink size={13} className="opacity-80" />
                      </a>

                      <button
                        type="button"
                        onClick={() => copyToClipboard(`@${member.telegramHandle}`)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 px-4 py-3.5 text-xs font-bold text-slate-700 shadow-2xs transition-colors cursor-pointer"
                        title={isKm ? "ចម្លង Telegram handle" : "Copy Telegram handle"}
                      >
                        {isCopied ? (
                          <>
                            <CheckCircle2 size={14} className="text-emerald-600" />
                            <span className="text-emerald-600 font-semibold">{isKm ? "បានចម្លង!" : "Copied!"}</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>@{member.telegramHandle}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
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
                ? "អ្នកអាចទាក់ទងផ្ទាល់ជាមួយអគ្គនាយកប្រតិបត្តិ (CEO) លោក អ៊ុង ផល្លី តាមរយៈ Telegram @MPG_by_ongphaly សម្រាប់សំណួរអាជីវកម្ម និងកិច្ចសន្យាសហគ្រាស ឬទាក់ទងប្រធានផ្នែកបច្ចេកទេស លោក សេង ឈុនសួរ តាមរយៈ Telegram @ChhunsourSENG សម្រាប់ការដំឡើង និងជំនួយបច្ចេកទេស។"
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
