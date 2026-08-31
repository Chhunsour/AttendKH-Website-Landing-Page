"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Building,
  Shield,
  UserCheck,
  Users,
  CheckCircle2,
  ArrowRight,
  Clock,
  MapPin,
  Layers,
  Moon,
  LayoutGrid,
  Sparkles,
  Check,
  Radio,
  Activity,
  Wifi,
  Zap,
  Coffee,
  Compass,
  SunMedium,
  SlidersHorizontal,
  CircleDot,
  TrendingUp,
  Eye,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import {
  useCopy,
  PageHero,
  Section,
  SectionHead,
  FeatureList,
  DirectAnswerBlock,
  ImageSlot,
  Reveal,
  CtaBand,
} from "@/components/site/ui";
import { useSite } from "@/lib/i18n";

export function BranchesView() {
  const c = useCopy();
  const b = c.branches;
  const { lang } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  const tierIcons = [Shield, Building, UserCheck, Users];

  const shiftFeatures = [
    {
      icon: Moon,
      tag: isKm ? "វេនយប់" : isZh ? "跨夜夜班" : "Overnight",
      tagColor: "bg-blue-50 text-[#0052FF] border-blue-200/60",
      iconBg: "bg-[#EDF2FE] text-[#0052FF]",
      title: isKm ? "វេនយប់ឆ្លងកាត់អធ្រាត្រ" : isZh ? "跨越午夜连续夜班" : "Midnight Crossing Shifts",
      desc: isKm
        ? "រៀបចំវេនការងារដែលឆ្លងកាត់ម៉ោង ១២ យប់ (ឧ. ១៨:០០ ដល់ ០២:០០ ព្រឹក) ដោយគណនាប្រាក់ខែ និងម៉ោងបន្ថែមចូលខែត្រូវយ៉ាងត្រឹមត្រូវ។"
        : isZh
        ? "跨越午夜 12 点的连续夜班（如 18:00 至次日 02:00）精准记入当月工时与加班，无跨日薪资结算断档。"
        : "Shifts spanning past midnight (e.g. 18:00 to 02:00) are cleanly tracked without split payroll dates or manual formula fixes.",
    },
    {
      icon: Layers,
      tag: isKm ? "ហាង & ភោជនីយដ្ឋាន" : isZh ? "餐饮与零售分段班" : "F&B Rosters",
      tagColor: "bg-amber-50 text-amber-700 border-amber-200/60",
      iconBg: "bg-amber-100/70 text-amber-600",
      title: isKm ? "វេនបំបែកសម្រាប់ហាង និងភោជនីយដ្ឋាន" : isZh ? "分段跨班次智能排班 (Split Shifts)" : "Split Shift Rosters",
      desc: isKm
        ? "បុគ្គលិកអាចចុះវត្តមានវេនថ្ងៃត្រង់ (១០:៣០–១៤:០០) រួចត្រឡប់មកចុះវេនល្ងាច (១៧:០០–២២:០០) ក្នុងថ្ងៃតែមួយ។"
        : isZh
        ? "同一员工可在当天分别完成午高峰（10:30–14:00）与晚市（17:00–22:00）打卡，一单记录完整出勤。"
        : "Frontline staff easily clock in for the lunch rush, clock out during downtime, and return for the dinner service on one record.",
    },
    {
      icon: MapPin,
      tag: isKm ? "ច្បាប់តាមសាខា" : isZh ? "分店独立围栏" : "Geofence Rules",
      tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
      iconBg: "bg-emerald-100/70 text-emerald-600",
      title: isKm ? "ច្បាប់ និងកាំ GPS តាមសាខានីមួយៗ" : isZh ? "按分店定制 GPS 围栏与迟到规则" : "Per-Branch Radius & Grace Rules",
      desc: isKm
        ? "កំណត់កាំ GPS ៥០ ម៉ែត្រសម្រាប់ហាងទួលគោក និង ២០០ ម៉ែត្រសម្រាប់ឃ្លាំងព្រះសីហនុ តាមស្ថានភាពជាក់ស្តែង។"
        : isZh
        ? "金边堆谷店设置 50 米精准围栏，西港物流仓库设置 200 米宽限，灵活匹配不同业态现场。"
        : "Assign customized geofence boundaries, grace periods, and late penalty rules specific to each store location.",
    },
    {
      icon: LayoutGrid,
      tag: isKm ? "ផ្ទាំងគ្រប់គ្រង" : isZh ? "集团统览大盘" : "Executive Hub",
      tagColor: "bg-purple-50 text-purple-700 border-purple-200/60",
      iconBg: "bg-purple-100/70 text-purple-600",
      title: isKm ? "ទិដ្ឋភាពរួមរបស់ម្ចាស់អាជីវកម្ម" : isZh ? "企业创始人与高管全景控制台" : "Consolidated Owner Dashboard",
      desc: isKm
        ? "ម្ចាស់អាជីវកម្មអាចមើលឃើញទិន្នន័យគ្រប់សាខា ឬចុចចូលមើលកុងសូលរបស់ប្រធានសាខាណាមួយភ្លាមៗ។"
        : isZh
        ? "高管可实时查看所有分店在岗人数、实时工时支出并穿透下钻至任意单店经理的管理界面。"
        : "Owners and executives view real-time headcount, overtime expenditure, and branch attendance across all locations simultaneously.",
    },
  ];

  return (
    <>
      <PageHero title={b.title} sub={b.sub} />

      {/* 4-Tier Access Model */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            title={isKm ? "រចនាសម្ព័ន្ធសិទ្ធិ ៤ កម្រិត" : isZh ? "四级精细化角色权限管理" : "Four Levels of Role-Based Access Control"}
            sub={
              isKm
                ? "បែងចែកការទទួលខុសត្រូវច្បាស់លាស់ ចាប់ពីថ្នាក់ដឹកនាំរហូតដល់បុគ្គលិកជួរមុខ"
                : isZh
                ? "分店经理仅能查看本店出勤与审批，集团高层统揽全局用工与薪酬数据。"
                : "Granular permissions ensure branch managers see only their sites, while leadership retains full control."
            }
          />

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {b.tiers.map((t, i) => {
              const Icon = tierIcons[i] || Users;
              return (
                <Reveal key={t.role} delay={i * 0.06}>
                  <li className="flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-6 shadow-xs hover:border-brand hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                          <Icon size={20} />
                        </div>
                        <span className="font-mono text-xs font-bold text-brand">0{i + 1}</span>
                      </div>
                      <h3 className="font-display mt-5 text-[17px] font-bold text-ink">{t.role}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-body">{t.desc}</p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Section>

      {/* Redesigned Real Console Graphic & Shift Planner */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <ShiftRosterSection lang={lang} isKm={isKm} isZh={isZh} shiftFeatures={shiftFeatures} />
        </div>
      </Section>

      {/* Direct Answer Block for AEO / GEO */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <DirectAnswerBlock
            question={
              isKm
                ? "តើ AttendKH គ្រប់គ្រងអាជីវកម្មដែលមានច្រើនសាខានៅកម្ពុជាយ៉ាងដូចម្តេច?"
                : isZh
                ? "AttendKH 如何帮助柬埔寨企业统一管理分布在全国的多家分店？"
                : "How does AttendKH manage multi-branch operations across Cambodia?"
            }
            answer={
              isKm
                ? "AttendKH ផ្តល់នូវផ្ទាំងគ្រប់គ្រងកណ្តាលមួយដែលភ្ជាប់គ្រប់សាខានៅភ្នំពេញ សៀមរាប ព្រះសីហនុ និងបណ្តាខេត្តនានា។ ប្រព័ន្ធប្រើសិទ្ធិ ៤ កម្រិត (Super Admin, ម្ចាស់អាជីវកម្ម/HR, ប្រធានសាខា, បុគ្គលិក) ដែលអនុញ្ញាតឲ្យប្រធានសាខាគ្រប់គ្រងវេន និងអនុម័តច្បាប់នៅសាខាខ្លួន ខណៈដែលម្ចាស់អាជីវកម្មមើលឃើញទិន្នន័យវត្តមាន និងចំណាយប្រាក់ខែគ្រប់ទីតាំងទាំងអស់។"
                : isZh
                ? "AttendKH 打造了一个中央控制台，实时打通金边、暹粒、西港及各省分店。系统采用四级角色权限隔离（超级管理员、企业老板/HR、分店经理、基层员工），分店长负责本店排班与审批，而企业老板与 HR 总监可在单一屏幕统揽全部分店的出勤人数、工时成本与薪资明细。"
                : "AttendKH provides a centralized console connecting branches across Phnom Penh, Siem Reap, Sihanoukville, and provincial hubs. With 4-tier Role-Based Access Control, branch managers oversee their assigned outlet schedules and approvals, while business owners and HR directors maintain global visibility over attendance, labor costs, and payroll from a single screen."
            }
            facts={[
              {
                label: isKm ? "កម្រិតសិទ្ធិប្រើប្រាស់" : isZh ? "权限管理层级" : "Access Hierarchy",
                value: isKm ? "៤ កម្រិត (Owner, HR, Manager, Staff)" : isZh ? "4级 (老板、HR、店长、员工)" : "4 Tiers (Owner, HR, Mgr, Staff)",
              },
              {
                label: isKm ? "ប្រភេទវេនការងារ" : isZh ? "支持轮班类型" : "Shift Types Supported",
                value: isKm ? "វេនធម្មតា វេនបំបែក វេនយប់" : isZh ? "常规班、分段班、跨夜夜班" : "Standard, Split, Overnight",
              },
              {
                label: isKm ? "ទិដ្ឋភាពគ្រប់គ្រង" : isZh ? "多门店可视性" : "Multi-Site Visibility",
                value: isKm ? "ផ្ទាំងគ្រប់គ្រងរួមគ្រប់សាខា" : isZh ? "全国门店中央统览看板" : "Consolidated Dashboard",
              },
            ]}
          />
        </div>
      </Section>

      <CtaBand
        title={b.ctaTitle}
        sub={
          isKm
            ? "រៀបចំសាខារបស់អ្នកទាំងអស់ និងចាប់ផ្តើមគ្រប់គ្រងវេនការងារ"
            : "Connect your branches and manage multi-site shifts from a single console."
        }
      />
    </>
  );
}

interface ShiftFeature {
  icon: any;
  tag: string;
  tagColor: string;
  iconBg: string;
  title: string;
  desc: string;
}

function ShiftRosterSection({
  lang,
  isKm,
  isZh,
  shiftFeatures,
}: {
  lang: string;
  isKm: boolean;
  isZh: boolean;
  shiftFeatures: ShiftFeature[];
}) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeSubBranch, setActiveSubBranch] = useState<number>(0);

  const tabLabels = [
    { label: isKm ? "វេនយប់ឆ្លងកាត់អធ្រាត្រ" : isZh ? "跨夜夜班" : "Overnight", icon: Moon },
    { label: isKm ? "វេនបំបែក F&B" : isZh ? "分段班 (Split)" : "Split Roster", icon: Layers },
    { label: isKm ? "កាំ GPS តាមសាខា" : isZh ? "分店独立围栏" : "Geofence Radar", icon: MapPin },
    { label: isKm ? "ផ្ទាំងគ្រប់គ្រងរួម" : isZh ? "集团统览" : "Executive Hub", icon: LayoutGrid },
  ];

  return (
    <div className="space-y-10">
      {/* Section Header & Subtitle */}
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-12">
        {/* Left Feature Column */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/90 px-3.5 py-1.5 text-[12px] font-bold text-[#0052FF] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0052FF] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0052FF]"></span>
              </span>
              <Layers size={13} className="text-[#0052FF]" />
              <span className="tracking-wide uppercase">{isKm ? "ការរៀបចំវេនការងារទំនើប" : isZh ? "智能排班引擎" : "Shift Roster Engine"}</span>
            </div>

            <h2 className="font-display mt-4 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl lg:text-[2.15rem] leading-[1.2]">
              {isKm
                ? "រៀបចំវេនការងារជាក់ស្តែងនៅកម្ពុជា"
                : isZh
                ? "完美适配柬埔寨本土复杂排班业态"
                : "Handle Real-World Cambodian Shift Patterns"}
            </h2>

            <p className="mt-3.5 text-[14.5px] leading-relaxed text-[#475569]">
              {isKm
                ? "មិនថាជាហាងកាហ្វេដែលមានវេនបំបែក សណ្ឋាគារដែលដំណើរការ ២៤ម៉ោង ឬឃ្លាំងដែលមានវេនយប់ AttendKH ជួយឲ្យការគ្រប់គ្រងបុគ្គលិកដំណើរការយ៉ាងរលូន។"
                : isZh
                ? "从餐饮连锁的午晚高峰分段班，到安保物流的24小时跨夜轮班，AttendKH 为区域经理提供可视化的实时排班与多门店控制工具。"
                : "From split shifts in hospitality to 24/7 rotating rosters in security and logistics, AttendKH gives area managers intuitive scheduling and multi-site controls."}
            </p>
          </div>

          {/* Interactive Feature Selectors */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {shiftFeatures.map((f, idx) => {
              const Icon = f.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={f.title}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`group relative flex flex-col items-start rounded-2xl border p-4 text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "border-[#0052FF] bg-white shadow-lg ring-2 ring-[#0052FF]/15"
                      : "border-slate-200/90 bg-white/70 hover:border-slate-300 hover:bg-white hover:shadow-sm"
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-xl transition-transform group-hover:scale-105 ${
                          isActive ? "bg-[#0052FF] text-white shadow-xs" : f.iconBg
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isActive ? "text-[#0052FF]" : "text-slate-500"}`}>
                          {f.tag}
                        </span>
                        <h3 className={`font-display text-[14px] font-bold leading-snug transition-colors ${
                          isActive ? "text-[#0F172A]" : "text-slate-800 group-hover:text-[#0052FF]"
                        }`}>
                          {f.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isActive ? (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0052FF]/10 text-[#0052FF]">
                          <Check size={12} strokeWidth={3} />
                        </span>
                      ) : (
                        <ChevronRight size={15} className="text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-500" />
                      )}
                    </div>
                  </div>

                  <p className="mt-2.5 text-[12px] text-slate-500 leading-relaxed pl-12">
                    {f.desc}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="rounded-xl border border-blue-100 bg-[#EDF2FE]/50 p-3 flex items-center gap-2.5 text-[12px] text-slate-600">
            <Sparkles size={16} className="text-[#0052FF] shrink-0" />
            <span>
              {isKm
                ? "ចុចលើប្រភេទវេននីមួយៗដើម្បីមើលការធ្វើត្រាប់តាមកុងសូលផ្ទាល់"
                : isZh
                ? "点击左侧任意排班模式，右侧控制台将实时联动呈现仿真数据"
                : "Select any shift pattern above to preview its live simulation & timesheet on the right."}
            </span>
          </div>
        </div>

        {/* Right Live Operations Interactive Console */}
        <div className="lg:col-span-7">
          <Reveal delay={0.06}>
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#080D1A] p-5 sm:p-7 text-white shadow-2xl">
              {/* Dynamic Neon Ambient Glows */}
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#0052FF]/25 blur-[90px] pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-500/15 blur-[90px] pointer-events-none"
              />

              {/* Console Top Header & Tab Pills */}
              <div className="relative z-10 space-y-4 border-b border-slate-800/80 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-500/30 bg-[#0052FF]/20 text-[#3B82F6] shadow-inner">
                      <Building size={17} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-[14px] font-bold text-white">
                          Central Operations Console
                        </span>
                        <span className="rounded bg-blue-500/20 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase text-blue-400">
                          Interactive example
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        Sample Phnom Penh branch matrix
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10.5px] font-bold text-emerald-400">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                      </span>
                      4 Sample Branches
                    </span>
                  </div>
                </div>

                {/* Console Tab Selectors */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5">
                  {tabLabels.map((tab, idx) => {
                    const TabIcon = tab.icon;
                    const isCurrent = activeTab === idx;
                    return (
                      <button
                        key={tab.label}
                        type="button"
                        onClick={() => setActiveTab(idx)}
                        className={`flex items-center justify-center gap-1.5 rounded-xl py-2 px-2.5 text-[11px] font-bold transition-all cursor-pointer ${
                          isCurrent
                            ? "bg-[#0052FF] text-white shadow-md"
                            : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                        }`}
                      >
                        <TabIcon size={13} />
                        <span className="truncate">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic View Panels */}
              <div className="relative z-10 py-5">
                {activeTab === 0 && (
                  <OvernightShiftView isKm={isKm} isZh={isZh} />
                )}
                {activeTab === 1 && (
                  <SplitShiftView isKm={isKm} isZh={isZh} />
                )}
                {activeTab === 2 && (
                  <GeofenceRulesView
                    isKm={isKm}
                    isZh={isZh}
                    subBranch={activeSubBranch}
                    setSubBranch={setActiveSubBranch}
                  />
                )}
                {activeTab === 3 && (
                  <ExecutiveHubView isKm={isKm} isZh={isZh} />
                )}
              </div>

              {/* Console Footer Telemetry Bar */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/80 pt-4 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Activity size={14} className="text-blue-400 animate-pulse" />
                  <span>
                    {isKm
                      ? "ទិន្នន័យបញ្ជូនផ្ទាល់៖ ភ្នំពេញ សៀមរាប ព្រះសីហនុ"
                      : isZh
                      ? "实时数据链路：金边、暹粒、西港分店已同步"
                      : "Example data: Phnom Penh, Siem Reap, Sihanoukville"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">Illustrative values</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <Check size={13} strokeWidth={3} />
                    Review-ready
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

/**
 * View 0: Overnight Shifts Visualizer (Midnight Crossing)
 */
function OvernightShiftView({ isKm, isZh }: { isKm: boolean; isZh: boolean }) {
  return (
    <div className="space-y-4">
      {/* Shift Header Meta */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-blue-500/20 bg-blue-500/[0.06] p-3.5">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <span className="font-display text-xs font-bold text-white">
              {isKm ? "វេនយប់ឆ្លងកាត់អធ្រាត្រ • Tuol Kork Store" : isZh ? "堆谷店 • 跨夜连续夜班 (18:00 - 02:00)" : "Tuol Kork Store • Midnight Crossing Roster"}
            </span>
          </div>
          <span className="text-[11px] font-mono text-blue-200/80 pl-4">
            {isKm ? "ម៉ោងការងារ៖ ១៨:០០ ដល់ ០២:០០ ព្រឹក (+១ ថ្ងៃ)" : isZh ? "排班时段：18:00 - 次日 02:00 (共 8.0 小时)" : "Shift: 18:00 – 02:00 (+1 Day) • 8.0h Total"}
          </span>
        </div>
        <span className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 font-mono text-[10px] font-bold text-amber-300">
          🌙 {isKm ? "ប្រាក់បន្ថែមវេនយប់ +៣០%" : isZh ? "夜班津贴补贴 +30%" : "Night Diff +130% Rate"}
        </span>
      </div>

      {/* Visual 24h Timeline Bar crossing midnight */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
          <span>16:00</span>
          <span className="text-blue-400 font-bold">18:00 (Check-In)</span>
          <span className="text-slate-400">22:00</span>
          <span className="text-purple-400 font-bold">00:00 (Midnight)</span>
          <span className="text-blue-400 font-bold">02:00 (Out)</span>
          <span>04:00</span>
        </div>

        {/* The Multi-Segment Time Bar */}
        <div className="relative h-9 w-full rounded-xl bg-slate-900 overflow-hidden border border-white/10 p-1 flex">
          {/* Segment 1: Standard Rate 18:00-22:00 (4 hours) */}
          <div className="relative h-full w-[45%] rounded-l-lg bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center text-[10.5px] font-bold text-white shadow-xs">
            <span>18:00 - 22:00 (4.0h Standard)</span>
          </div>

          {/* Segment 2: Night Diff +130% 22:00-02:00 (4 hours crossing 00:00) */}
          <div className="relative h-full w-[55%] rounded-r-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 flex items-center justify-center text-[10.5px] font-bold text-amber-200 border-l border-amber-300/40">
            {/* Midnight Indicator Line */}
            <div className="absolute left-[50%] inset-y-0 w-0.5 bg-amber-400 shadow-[0_0_8px_#f59e0b] z-20 flex flex-col items-center">
              <span className="absolute -top-4 rounded bg-amber-400 px-1 font-mono text-[8px] font-extrabold text-slate-950 uppercase">
                00:00
              </span>
            </div>
            <span className="relative z-10">22:00 - 02:00 (4.0h Night Diff)</span>
          </div>
        </div>

        <div className="mt-2.5 flex items-center justify-between text-[10.5px] font-mono text-slate-400">
          <span className="text-blue-300">✓ {isKm ? "គណនាចូលថ្ងៃតែមួយ (មិនបែកខែ)" : isZh ? "精准归入单日出勤工时" : "Single consolidated date record"}</span>
          <span className="text-amber-300">✓ {isKm ? "អនុលោមតាមច្បាប់ការងារកម្ពុជា (មាត្រា ១៣៩)" : isZh ? "符合柬埔寨劳动法夜班规定" : "Complies with Cambodian Labor Law"}</span>
        </div>
      </div>

      {/* Active On-Shift Roster Stream */}
      <div className="grid gap-2.5 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 font-bold text-xs text-blue-300">
              SV
            </div>
            <div>
              <span className="font-display text-xs font-bold text-white block">Sothea V. (Bar Lead)</span>
              <span className="text-[10px] font-mono text-slate-400">In: 17:58 • GPS (4m)</span>
            </div>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-400">
            Active 4.2h
          </span>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 font-bold text-xs text-purple-300">
              BC
            </div>
            <div>
              <span className="font-display text-xs font-bold text-white block">Bopha C. (Floor Lead)</span>
              <span className="text-[10px] font-mono text-slate-400">In: 17:54 • WiFi Lock</span>
            </div>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-400">
            Active 4.3h
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * View 1: Split Shift Visualizer (F&B / Hospitality)
 */
function SplitShiftView({ isKm, isZh }: { isKm: boolean; isZh: boolean }) {
  return (
    <div className="space-y-4">
      {/* Shift Header Meta */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] p-3.5">
        <div>
          <div className="flex items-center gap-2">
            <Coffee size={14} className="text-amber-400" />
            <span className="font-display text-xs font-bold text-white">
              {isKm ? "វេនបំបែកភោជនីយដ្ឋាន • BKK1 Cafe" : isZh ? "BKK1 店 • 餐饮分段排班 (Lunch & Dinner)" : "BKK1 Bistro • F&B Split Shift Roster"}
            </span>
          </div>
          <span className="text-[11px] font-mono text-amber-200/80 pl-5">
            {isKm ? "វេនថ្ងៃត្រង់ (១០:៣០-១៤:០០) & វេនល្ងាច (១៧:០០-២២:០០)" : isZh ? "午高峰 (10:30-14:00) & 晚高峰 (17:00-22:00)" : "Lunch Peak (10:30–14:00) & Dinner Service (17:00–22:00)"}
          </span>
        </div>
        <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-300">
          ✓ {isKm ? "កត់ត្រាចូលតែ ១ ប័ណ្ណ" : isZh ? "单张工卡合并" : "1 Unified Daily Timecard"}
        </span>
      </div>

      {/* Dual Block Timeline */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 space-y-3">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>09:00</span>
          <span className="text-emerald-400 font-bold">10:30</span>
          <span className="text-slate-400">14:00</span>
          <span className="text-amber-400 font-bold">17:00</span>
          <span className="text-amber-400 font-bold">22:00</span>
          <span>23:00</span>
        </div>

        {/* 2-Block Progress Graph */}
        <div className="relative h-10 w-full rounded-xl bg-slate-900 border border-white/10 p-1 flex items-center gap-1.5">
          {/* Block 1: Lunch Rush */}
          <div className="h-full w-[38%] rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
            <span>10:30 - 14:00 (3.5h Lunch)</span>
          </div>

          {/* Downtime Interval */}
          <div className="h-full w-[24%] rounded-lg border border-dashed border-slate-700 bg-slate-800/40 flex items-center justify-center text-[9px] font-mono text-slate-400">
            <span>3.0h Rest Gap</span>
          </div>

          {/* Block 2: Dinner Service */}
          <div className="h-full w-[38%] rounded-lg bg-gradient-to-r from-amber-600 to-orange-500 flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
            <span>17:00 - 22:00 (5.0h Dinner)</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10.5px] font-mono text-slate-400">
          <span className="text-emerald-300">● Session 1: 3.5h Verified</span>
          <span className="text-slate-400">☕ Gap: Auto-Paused</span>
          <span className="text-amber-300">● Session 2: 5.0h Verified</span>
          <span className="text-white font-bold">Total: 8.5h</span>
        </div>
      </div>

      {/* Staff Split Details Card */}
      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 font-bold text-xs text-amber-300">
            RM
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-xs font-bold text-white">Rathana M. (Head Barista)</span>
              <span className="rounded bg-slate-800 px-1.5 py-0.2 font-mono text-[9px] text-slate-300">Staff #KHR-048</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              Punch 1: 10:28 - 14:02 (3.5h) • Punch 2: 16:55 - 22:01 (5.0h)
            </span>
          </div>
        </div>

        <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 font-mono text-[10px] font-bold text-emerald-400">
          8.5h Recorded • 1 Slip
        </span>
      </div>
    </div>
  );
}

/**
 * View 2: Per-Branch Radius & Geofence Rules
 */
function GeofenceRulesView({
  isKm,
  isZh,
  subBranch,
  setSubBranch,
}: {
  isKm: boolean;
  isZh: boolean;
  subBranch: number;
  setSubBranch: (v: number) => void;
}) {
  const branches = [
    {
      name: "Tuol Kork (Retail Outlet)",
      radius: "50m",
      grace: "10 min",
      type: "High Density Street",
      staff: "18/18",
      coords: "11.5682° N, 104.8912° E",
      status: "Strict Urban Geofence",
    },
    {
      name: "Sihanoukville (Logistics Port)",
      radius: "200m",
      grace: "15 min",
      type: "Warehouse & Yard Perimeter",
      staff: "12/12",
      coords: "10.6270° N, 103.5221° E",
      status: "Wide Perimeter Geofence",
    },
  ];

  const current = branches[subBranch] || branches[0];

  return (
    <div className="space-y-4">
      {/* Branch Selector Tabs */}
      <div className="grid grid-cols-2 gap-2">
        {branches.map((b, i) => (
          <button
            key={b.name}
            type="button"
            onClick={() => setSubBranch(i)}
            className={`rounded-xl border p-2.5 text-left transition-all cursor-pointer ${
              subBranch === i
                ? "border-emerald-500 bg-emerald-500/10 text-white shadow-xs"
                : "border-white/10 bg-white/[0.02] text-slate-400 hover:bg-white/[0.05]"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-[11.5px] font-bold">{b.name}</span>
              <span className="font-mono text-[10px] font-bold text-emerald-400">{b.radius}</span>
            </div>
            <span className="mt-0.5 block text-[9.5px] font-mono text-slate-400">{b.type}</span>
          </button>
        ))}
      </div>

      {/* Radar Graphic & Live Rules Inspector */}
      <div className="grid gap-3 sm:grid-cols-12 rounded-2xl border border-white/10 bg-white/[0.02] p-4 items-center">
        {/* Animated Radar Pulse */}
        <div className="sm:col-span-5 flex flex-col items-center justify-center p-3 relative">
          <div className="relative flex h-32 w-32 items-center justify-center">
            {/* Radar rings */}
            <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-ping opacity-30" />
            <div className="absolute inset-2 rounded-full border border-emerald-500/30" />
            <div className="absolute inset-6 rounded-full border border-emerald-500/40" />
            <div className="absolute inset-10 rounded-full border border-emerald-500/60 bg-emerald-500/10" />

            {/* Radar Sweep Line */}
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(16,185,129,0.35)_360deg)] animate-spin" style={{ animationDuration: "3s" }} />

            {/* Center Pin */}
            <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-slate-950 shadow-[0_0_15px_#10b981]">
              <MapPin size={14} strokeWidth={2.5} />
            </div>
          </div>
          <span className="mt-2 font-mono text-[10px] text-emerald-300 font-bold">
            GPS Lock: ±2.4m Accuracy
          </span>
        </div>

        {/* Rule Details */}
        <div className="sm:col-span-7 space-y-2.5 text-[11px] font-mono">
          <div className="flex items-center justify-between rounded-xl bg-white/[0.04] p-2.5 border border-white/5">
            <span className="text-slate-400">{isKm ? "កាំ GPS អនុញ្ញាត" : isZh ? "GPS 允许打卡半径" : "Geofence Radius"}:</span>
            <span className="font-bold text-emerald-400">{current.radius} Precision</span>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-white/[0.04] p-2.5 border border-white/5">
            <span className="text-slate-400">{isKm ? "រយៈពេលអនុគ្រោះយឺត" : isZh ? "打卡宽限期" : "Grace Period"}:</span>
            <span className="font-bold text-blue-400">{current.grace}</span>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-white/[0.04] p-2.5 border border-white/5">
            <span className="text-slate-400">{isKm ? "ប្រព័ន្ធទប់ស្កាត់ Fake GPS" : isZh ? "防虚拟定位作弊" : "Anti-Mock GPS"}:</span>
            <span className="font-bold text-emerald-400 flex items-center gap-1">
              <ShieldCheck size={13} /> Enabled
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-white/[0.04] p-2.5 border border-white/5">
            <span className="text-slate-400">{isKm ? "វត្តមានក្នុងកាំ" : isZh ? "在围栏内出勤人数" : "Verified In-Perimeter"}:</span>
            <span className="font-bold text-white">{current.staff} Staff Present</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * View 3: Executive Hub (Consolidated Multi-Branch Matrix)
 */
function ExecutiveHubView({ isKm, isZh }: { isKm: boolean; isZh: boolean }) {
  const branches = [
    {
      name: "Tuol Kork Branch",
      shift: "Morning Shift • 50m",
      ratio: "18/18",
      rate: "Configured",
      badge: "On Schedule",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      name: "BKK1 Branch",
      shift: "Split Shift • 65m",
      ratio: "12/12",
      rate: "Configured",
      badge: "Dinner Shift",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      name: "Toul Tompoung Branch",
      shift: "Flexi Shift • 75m",
      ratio: "15/15",
      rate: "Configured",
      badge: "On Schedule",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      name: "Siem Reap Branch",
      shift: "Regional Lab • 100m",
      ratio: "8/8",
      rate: "Configured",
      badge: "Full Attendance",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
  ];

  return (
    <div className="space-y-3.5">
      {/* 4 Branch Live Matrix Grid */}
      <div className="grid gap-2.5 sm:grid-cols-2">
        {branches.map((b) => (
          <div
            key={b.name}
            className="group rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 transition-all hover:border-[#0052FF]/50 hover:bg-white/[0.07]"
          >
            <div className="flex items-center justify-between gap-1.5">
              <span className="font-display text-[12.5px] font-bold text-white group-hover:text-blue-300 transition-colors">
                {b.name}
              </span>
              <span className="font-mono text-[12px] font-bold text-emerald-400">
                {b.ratio}
              </span>
            </div>

            <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>{b.shift}</span>
              <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-emerald-400 font-bold">
                {b.rate}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Aggregate Executive Statistics Bar */}
      <div className="rounded-2xl border border-purple-500/20 bg-purple-500/[0.05] p-3.5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-purple-400" />
          <span className="text-purple-200 font-bold">
            {isKm ? "បុគ្គលិកសរុបកំពុងបំពេញការងារ៖ ៥៣ / ៥៣ នាក់" : isZh ? "集团在岗总人数：53 / 53 人 (100%)" : "Group Live Headcount: 53 / 53 Frontline Staff (100%)"}
          </span>
        </div>
        <span className="text-slate-400">
          {isKm ? "០ ករណីយឺតយ៉ាវ ឬខុសទីតាំង" : isZh ? "全网 0 越界打卡异常" : "0 Geofence Violations"}
        </span>
      </div>
    </div>
  );
}
