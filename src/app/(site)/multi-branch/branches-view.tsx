"use client";

import { useState } from "react";
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
  Coffee,
  ShieldCheck,
  ChevronRight,
  Store,
  Warehouse,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

export function BranchesView() {
  const c = useCopy();
  const b = c.branches;
  const { lang } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  const tierIcons = [Shield, Building, UserCheck, Users];

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

      {/* Clean, Non-AI Slop Shift Engine Showcase */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <ShiftRosterSection isKm={isKm} isZh={isZh} />
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

/**
 * CLEAN, PURPOSEFUL SHIFT ROSTER SECTION (NO AI SLOP, NO EMPTY SPACE)
 */
function ShiftRosterSection({
  isKm,
  isZh,
}: {
  isKm: boolean;
  isZh: boolean;
}) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeSubBranch, setActiveSubBranch] = useState<number>(0);

  const shiftTabs = [
    {
      id: 0,
      icon: Moon,
      label: isKm ? "វេនយប់ឆ្លងអធ្រាត្រ" : isZh ? "跨夜连续夜班" : "Midnight Crossing",
      badge: "18:00 – 02:00",
      sub: isKm ? "គណនាប្រាក់បន្ថែមវេនយប់ +៣០%" : isZh ? "自动核算夜班津贴" : "Auto +30% Night Pay",
    },
    {
      id: 1,
      icon: Coffee,
      label: isKm ? "វេនបំបែក F&B" : isZh ? "餐饮分段班 (Split)" : "F&B Split Shifts",
      badge: "10:30 & 17:00",
      sub: isKm ? "កត់ត្រាចូលតែ ១ ប័ណ្ណ" : isZh ? "单张工卡合并记录" : "1 Merged Timecard",
    },
    {
      id: 2,
      icon: MapPin,
      label: isKm ? "កាំ GPS តាមសាខា" : isZh ? "分店定制围栏" : "Per-Branch Geofences",
      badge: "50m – 200m",
      sub: isKm ? "ច្បាប់ឯករាជ្យតាមទីតាំង" : isZh ? "各店独立规则" : "Location Rules",
    },
    {
      id: 3,
      icon: LayoutGrid,
      label: isKm ? "ផ្ទាំងគ្រប់គ្រងពហុសាខា" : isZh ? "多门店总览看板" : "Multi-Store Matrix",
      badge: isKm ? "៤ សាខា" : isZh ? "4家门店" : "4 Locations",
      sub: isKm ? "ទិន្នន័យវត្តមានផ្ទាល់" : isZh ? "实时出勤透视" : "Live Attendance",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Clean Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-brand">
            <Layers size={13} />
            <span>{isKm ? "ការរៀបចំវេនការងារទំនើប" : isZh ? "智能排班引擎" : "Shift Roster Engine"}</span>
          </div>

          <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {isKm
              ? "រៀបចំវេនការងារជាក់ស្តែងនៅកម្ពុជា"
              : isZh
              ? "完美适配柬埔寨本土复杂排班业态"
              : "Handle Real-World Cambodian Shift Patterns"}
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-500 max-w-lg leading-relaxed">
          {isKm
            ? "មិនថាជាហាងកាហ្វេដែលមានវេនបំបែក សណ្ឋាគារដែលដំណើរការ ២៤ម៉ោង ឬឃ្លាំងដែលមានវេនយប់ AttendKH ជួយឲ្យការគ្រប់គ្រងបុគ្គលិកដំណើរការយ៉ាងរលូន។"
            : isZh
            ? "从餐饮连锁的午晚高峰分段班，到安保物流的24小时跨夜轮班，AttendKH 为区域经理提供可视化的实时排班与多门店控制工具。"
            : "From split shifts in hospitality to 24/7 rotating rosters in security and logistics, AttendKH gives area managers intuitive scheduling and multi-site controls."}
        </p>
      </div>

      {/* Unified 4-Mode Selector Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {shiftTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`group relative rounded-2xl border p-4 text-left transition-all duration-200 cursor-pointer ${
                isActive
                  ? "border-brand bg-white shadow-md ring-2 ring-brand/10 -translate-y-0.5"
                  : "border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/50 shadow-2xs"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-xl transition-colors ${
                    isActive
                      ? "bg-brand text-white"
                      : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                  }`}
                >
                  <Icon size={16} />
                </div>
                <span className="font-mono text-[11px] font-semibold text-slate-500">
                  {tab.badge}
                </span>
              </div>

              <h3 className={`font-display text-sm font-bold ${isActive ? "text-brand" : "text-slate-900"}`}>
                {tab.label}
              </h3>
              <p className="mt-0.5 text-[11.5px] text-slate-500 line-clamp-1">
                {tab.sub}
              </p>
            </button>
          );
        })}
      </div>

      {/* Clean Interactive Display Card (No Dead Space) */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
          >
            {activeTab === 0 && <MidnightCrossingPanel isKm={isKm} isZh={isZh} />}
            {activeTab === 1 && <SplitShiftPanel isKm={isKm} isZh={isZh} />}
            {activeTab === 2 && (
              <GeofenceRulesPanel
                isKm={isKm}
                isZh={isZh}
                subBranch={activeSubBranch}
                setSubBranch={setActiveSubBranch}
              />
            )}
            {activeTab === 3 && <MultiStoreMatrixPanel isKm={isKm} isZh={isZh} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/**
 * 1. MIDNIGHT CROSSING PANEL (18:00 - 02:00)
 */
function MidnightCrossingPanel({ isKm, isZh }: { isKm: boolean; isZh: boolean }) {
  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <h4 className="font-display text-base font-bold text-slate-900">
              {isKm
                ? "វេនយប់ឆ្លងកាត់អធ្រាត្រ • Tuol Kork Outlet"
                : isZh
                ? "堆谷分店 • 跨夜连续夜班 (18:00 - 02:00)"
                : "Tuol Kork Outlet • Midnight Crossing Shift"}
            </h4>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {isKm
              ? "ម៉ោងការងារ ១៨:០០ ដល់ ០២:០០ ព្រឹក (+១ ថ្ងៃ) • សរុប ៨.០ ម៉ោង • អនុលោមតាមមាត្រា ១៣៩ ច្បាប់ការងារ"
              : isZh
              ? "排班时段 18:00 至次日 02:00（共 8.0 小时）• 严格执行柬埔寨劳工法第139条夜班津贴"
              : "Shift window: 18:00 to 02:00 (+1 Day) • 8.0h Total • Article 139 Compliant"}
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-semibold text-amber-800 self-start sm:self-auto">
          <Moon size={13} className="text-amber-600" />
          <span>{isKm ? "ប្រាក់បន្ថែមវេនយប់ +៣០%" : isZh ? "夜班津贴 +30%" : "Night Diff +30% Rate"}</span>
        </span>
      </div>

      {/* Proportional Shift Timeline */}
      <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 font-medium">
          <span className="text-brand font-bold">18:00 (Clock In)</span>
          <span className="text-slate-400">22:00 (Night Cutoff)</span>
          <span className="text-amber-600 font-bold">00:00 (Midnight)</span>
          <span className="text-brand font-bold">02:00 (Clock Out)</span>
        </div>

        {/* 2-Segment Timeline */}
        <div className="grid grid-cols-12 h-10 rounded-xl overflow-hidden border border-slate-200 bg-white p-1 gap-1">
          {/* 18:00 - 22:00 Standard (4h) */}
          <div className="col-span-6 rounded-lg bg-brand flex items-center justify-center text-xs font-semibold text-white px-2">
            <span>18:00 – 22:00 (4.0h Standard Rate)</span>
          </div>
          {/* 22:00 - 02:00 Night Diff (4h) */}
          <div className="col-span-6 rounded-lg bg-indigo-600 flex items-center justify-center text-xs font-semibold text-white px-2">
            <span>22:00 – 02:00 (4.0h +30% Night Pay)</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 pt-1">
          <span className="text-emerald-700 font-medium flex items-center gap-1">
            <CheckCircle2 size={13} />
            {isKm ? "កត់ត្រាចូលតែ ១ ប័ណ្ណគត់" : isZh ? "单张工卡合并记录" : "Single consolidated daily record"}
          </span>
          <span className="text-slate-500 font-mono">
            {isKm ? "ម៉ោងសរុប៖ ៨.០ ម៉ោង" : isZh ? "有效工时：8.0小时" : "Total: 8.0h Roster"}
          </span>
        </div>
      </div>

      {/* Real Frontline Team Roster Status */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-brand font-bold text-xs border border-blue-100">
              SV
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Sothea V. (Bar Lead)</p>
              <p className="text-[11px] text-slate-500 font-mono">Clocked in 17:58 • GPS (Inside 50m)</p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
            {isKm ? "កំពុងបំពេញការងារ" : isZh ? "在岗 4.2h" : "Active 4.2h"}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 font-bold text-xs border border-purple-100">
              BC
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Bopha C. (Floor Lead)</p>
              <p className="text-[11px] text-slate-500 font-mono">Clocked in 17:54 • Verified</p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
            {isKm ? "កំពុងបំពេញការងារ" : isZh ? "在岗 4.3h" : "Active 4.3h"}
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. SPLIT SHIFT PANEL (F&B / CAFES)
 */
function SplitShiftPanel({ isKm, isZh }: { isKm: boolean; isZh: boolean }) {
  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            <h4 className="font-display text-base font-bold text-slate-900">
              {isKm
                ? "វេនបំបែកភោជនីយដ្ឋាន • BKK1 Cafe"
                : isZh
                ? "BKK1 店 • 餐饮分段排班 (Lunch & Dinner)"
                : "BKK1 Cafe • F&B Split Shift Roster"}
            </h4>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {isKm
              ? "វេនថ្ងៃត្រង់ (១០:៣០-១៤:០០) & វេនល្ងាច (១៧:០០-២២:០០) • សម្រាក ៣.០ ម៉ោង"
              : isZh
              ? "午市高峰 (10:30-14:00) 与晚市 (17:00-22:00) • 中间自动暂停 3.0 小时休息"
              : "Lunch rush (10:30–14:00) & Dinner service (17:00–22:00) • 3.0h rest gap"}
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-800 self-start sm:self-auto">
          <CheckCircle2 size={13} className="text-emerald-600" />
          <span>{isKm ? "កត់ត្រាចូលតែ ១ ប័ណ្ណ" : isZh ? "1 张工卡自动合并" : "1 Unified Daily Timecard"}</span>
        </span>
      </div>

      {/* Proportional Split Timeline */}
      <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 font-medium">
          <span className="text-emerald-600 font-bold">10:30 (Lunch In)</span>
          <span className="text-slate-400">14:00 (Lunch Out)</span>
          <span className="text-amber-600 font-bold">17:00 (Dinner In)</span>
          <span className="text-amber-600 font-bold">22:00 (Dinner Out)</span>
        </div>

        {/* 3-Segment Timeline */}
        <div className="grid grid-cols-12 h-10 rounded-xl overflow-hidden border border-slate-200 bg-white p-1 gap-1">
          {/* Lunch: 3.5h */}
          <div className="col-span-5 rounded-lg bg-emerald-600 flex items-center justify-center text-xs font-semibold text-white px-2">
            <span>10:30 – 14:00 (3.5h Lunch Rush)</span>
          </div>
          {/* Gap: 3.0h */}
          <div className="col-span-2 rounded-lg border border-dashed border-slate-300 bg-slate-100 flex items-center justify-center text-[11px] font-medium text-slate-500">
            <span>3.0h Rest</span>
          </div>
          {/* Dinner: 5.0h */}
          <div className="col-span-5 rounded-lg bg-amber-600 flex items-center justify-center text-xs font-semibold text-white px-2">
            <span>17:00 – 22:00 (5.0h Dinner Service)</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 pt-1">
          <span className="text-emerald-700 font-medium">
            ● Session 1: 3.5h + Session 2: 5.0h
          </span>
          <span className="text-slate-900 font-bold font-mono">
            {isKm ? "សរុបម៉ោងធ្វើការ៖ ៨.៥ ម៉ោង" : isZh ? "当天实计工时：8.5小时" : "Total: 8.5h Paid Hours"}
          </span>
        </div>
      </div>

      {/* Staff Record Preview */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 font-bold text-xs border border-amber-200">
            RM
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">Rathana M. (Head Barista)</p>
            <p className="text-[11px] text-slate-500 font-mono">
              Session 1: 10:28 – 14:02 • Session 2: 16:55 – 22:01
            </p>
          </div>
        </div>

        <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 font-mono text-xs font-bold text-emerald-700 self-start sm:self-auto">
          8.5h Total • 1 Payslip
        </span>
      </div>
    </div>
  );
}

/**
 * 3. GEOFENCE RULES PANEL (PER-BRANCH CALIBRATION)
 */
function GeofenceRulesPanel({
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
      icon: Store,
      radius: "50m",
      grace: "10 min",
      env: isKm ? "ហាងលក់រាយនៅកណ្តាលក្រុង" : isZh ? "临街高密度商业零售门店" : "High-Density Urban Store",
      staff: "18/18 Staff On-Site",
    },
    {
      name: "Sihanoukville (Logistics Port)",
      icon: Warehouse,
      radius: "200m",
      grace: "15 min",
      env: isKm ? "ឃ្លាំងស្តុកទំនិញ និងទីលានកំពង់ផែ" : isZh ? "大型物流仓储与货运集散区" : "Port Yard & Warehouse Perimeter",
      staff: "12/12 Staff On-Site",
    },
  ];

  const current = branches[subBranch] || branches[0];

  return (
    <div className="space-y-6">
      {/* 2-Branch Segmented Switch */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {branches.map((b, i) => {
          const isCurrent = subBranch === i;
          const Icon = b.icon;

          return (
            <button
              key={b.name}
              type="button"
              onClick={() => setSubBranch(i)}
              className={`flex items-center justify-between rounded-2xl border p-4 text-left transition-all cursor-pointer ${
                isCurrent
                  ? "border-brand bg-blue-50/40 shadow-xs ring-1 ring-brand/10"
                  : "border-slate-200 bg-white hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                    isCurrent ? "bg-brand text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">{b.name}</p>
                  <p className="text-[11px] text-slate-500">{b.env}</p>
                </div>
              </div>
              <span className="font-mono text-xs font-bold text-brand bg-blue-100/60 px-2 py-0.5 rounded-md">
                {b.radius}
              </span>
            </button>
          );
        })}
      </div>

      {/* Geofence Rules Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
          <p className="text-[11px] text-slate-500 font-medium">
            {isKm ? "កាំ GPS អនុញ្ញាត" : isZh ? "允许打卡半径" : "Geofence Radius"}
          </p>
          <p className="font-display text-xl font-bold text-slate-900 mt-1">{current.radius}</p>
          <p className="text-[11px] text-slate-500 mt-0.5 font-mono">{current.staff}</p>
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
          <p className="text-[11px] text-slate-500 font-medium">
            {isKm ? "រយៈពេលអនុគ្រោះយឺត" : isZh ? "迟到宽限期" : "Grace Period"}
          </p>
          <p className="font-display text-xl font-bold text-brand mt-1">{current.grace}</p>
          <p className="text-[11px] text-slate-500 mt-0.5">
            {isKm ? "មិនកាត់ប្រាក់ប្រសិនបើនៅក្នុងម៉ោងនេះ" : isZh ? "宽限期内免扣罚" : "No penalty within window"}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
          <p className="text-[11px] text-slate-500 font-medium">
            {isKm ? "ប្រព័ន្ធទប់ស្កាត់ Fake GPS" : isZh ? "防虚拟定位" : "Anti-Mock GPS"}
          </p>
          <p className="font-display text-xl font-bold text-emerald-600 mt-1 flex items-center gap-1.5">
            <ShieldCheck size={18} />
            <span>Active</span>
          </p>
          <p className="text-[11px] text-slate-500 mt-0.5">
            {isKm ? "ទប់ស្កាត់ការក្លែងបន្លំទីតាំង ១០០%" : isZh ? "底层拦截虚拟定位软件" : "100% Anti-Spoofing"}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. MULTI-STORE MATRIX PANEL (ALL BRANCHES)
 */
function MultiStoreMatrixPanel({ isKm, isZh }: { isKm: boolean; isZh: boolean }) {
  const branches = [
    {
      name: "Tuol Kork Outlet",
      city: "Phnom Penh",
      shift: "Morning & Night Shift • 50m",
      ratio: "18/18 Present",
      status: "On Schedule",
    },
    {
      name: "BKK1 Bistro",
      city: "Phnom Penh",
      shift: "Split Shift (Lunch/Dinner) • 65m",
      ratio: "12/12 Present",
      status: "Dinner Shift Active",
    },
    {
      name: "Toul Tompoung Outlet",
      city: "Phnom Penh",
      shift: "Flexi Retail • 75m",
      ratio: "15/15 Present",
      status: "On Schedule",
    },
    {
      name: "Siem Reap Regional Hub",
      city: "Siem Reap",
      shift: "Hospitality Roster • 100m",
      ratio: "8/8 Present",
      status: "Full Attendance",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <h4 className="font-display text-base font-bold text-slate-900">
            {isKm
              ? "ផ្ទាំងគ្រប់គ្រងវត្តមានគ្រប់សាខាទូទាំងប្រទេស"
              : isZh
              ? "柬埔寨全国多分店出勤透视看板"
              : "Multi-Store Attendance Overview"}
          </h4>
          <p className="text-xs text-slate-500 mt-1">
            {isKm
              ? "មើលទិន្នន័យវត្តមាន និងបុគ្គលិកកំពុងបំពេញការងារនៅគ្រប់សាខាក្នុងពេលជាក់ស្តែង"
              : isZh
              ? "企业主与 HR 总监可在单一屏幕透视全国所有分店的在岗人员与出勤达标率"
              : "Real-time visibility into staff attendance, open shifts, and compliance across all locations"}
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-800 self-start sm:self-auto">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>4 Branches Online • 53/53 Staff</span>
        </span>
      </div>

      {/* 4 Branch Live Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {branches.map((b) => (
          <div
            key={b.name}
            className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs hover:border-brand/40 transition-colors"
          >
            <div>
              <p className="text-xs font-bold text-slate-900">{b.name}</p>
              <p className="text-[11px] text-slate-500 font-mono mt-0.5">{b.shift}</p>
            </div>
            <div className="text-right">
              <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                {b.ratio}
              </span>
              <p className="text-[10.5px] text-slate-400 mt-1">{b.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
