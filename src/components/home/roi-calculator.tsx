"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { ArrowRight, DollarSign, TrendingDown, Clock, ShieldAlert, Sparkles } from "lucide-react";
import { formatUSD, formatKHR, usdToKhr } from "@/lib/currency";
import { useSite } from "@/lib/i18n";

function money(usd: number, currency: "USD" | "KHR") {
  return currency === "KHR" ? formatKHR(usdToKhr(usd)) : formatUSD(usd, { showCentsIfZero: false });
}

export function AttendanceRoiCalculator() {
  const { currency, lang } = useSite();
  const isKm = lang === "km";

  const [staffCount, setStaffCount] = useState(25);
  const [avgSalary, setAvgSalary] = useState(400);
  const [lateMins, setLateMins] = useState(15);

  const staffId = useId();
  const salaryId = useId();
  const lateId = useId();

  // Calculation formulas
  const workingDays = 22;
  const hourlyRate = avgSalary / (workingDays * 8);
  const totalLostHours = Math.round((staffCount * lateMins * workingDays) / 60);
  const monthlyLeakage = Math.round(totalLostHours * hourlyRate);
  const annualLeakage = monthlyLeakage * 12;
  const hrHoursSaved = Math.round(staffCount * 0.35); // ~20 mins per employee/month on manual Excel reconciliations

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-paper shadow-xl">
      <div className="border-b border-line bg-mist/60 px-6 py-5 sm:px-8">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand text-white shadow-xs">
            <TrendingDown size={16} />
          </span>
          <div>
            <h3 className="font-display text-[17px] font-bold text-ink">
              {isKm ? "ម៉ាស៊ីនគណនាផលប៉ះពាល់នៃការមកយឺត និងការបន្លំម៉ោង" : "Attendance Leakage & Operational ROI Calculator"}
            </h3>
            <p className="text-[12px] text-slate-500">
              {isKm
                ? "ប៉ាន់ប្រមាណការខាតបង់ម៉ោងធ្វើការ និងថវិកាប្រចាំខែដោយសារការកត់ត្រាមិនច្បាស់លាស់"
                : "Estimate the hidden monthly cost of buddy punching and manual attendance reconciliation"}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10">
        {/* Sliders Input */}
        <div className="lg:col-span-6 space-y-6">
          {/* Team Size */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <label htmlFor={staffId} className="font-semibold text-ink">
                {isKm ? "ចំនួនបុគ្គលិកសរុប (Number of Employees)" : "Total Employees Across Branches"}
              </label>
              <output htmlFor={staffId} className="font-mono text-sm font-bold text-brand">
                {staffCount} {isKm ? "នាក់" : "Staff"}
              </output>
            </div>
            <input
              id={staffId}
              type="range"
              min={5}
              max={150}
              step={5}
              value={staffCount}
              onChange={(e) => setStaffCount(Number(e.target.value))}
              className="w-full accent-brand"
            />
          </div>

          {/* Average Salary */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <label htmlFor={salaryId} className="font-semibold text-ink">
                {isKm ? "ប្រាក់ខែជាមធ្យម (Average Monthly Salary)" : "Average Monthly Salary per Employee"}
              </label>
              <output htmlFor={salaryId} className="font-mono text-sm font-bold text-brand">
                {money(avgSalary, currency)}
              </output>
            </div>
            <input
              id={salaryId}
              type="range"
              min={200}
              max={1500}
              step={25}
              value={avgSalary}
              onChange={(e) => setAvgSalary(Number(e.target.value))}
              className="w-full accent-brand"
            />
          </div>

          {/* Average Late Minutes */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <label htmlFor={lateId} className="font-semibold text-ink">
                {isKm ? "ម៉ោងយឺត/បន្លំជាមធ្យមក្នុងមួយថ្ងៃ" : "Avg Daily Lateness / Proxy Punching"}
              </label>
              <output htmlFor={lateId} className="font-mono text-sm font-bold text-slate-700">
                {lateMins} {isKm ? "នាទី / ថ្ងៃ" : "mins / day"}
              </output>
            </div>
            <input
              id={lateId}
              type="range"
              min={5}
              max={30}
              step={1}
              value={lateMins}
              onChange={(e) => setLateMins(Number(e.target.value))}
              className="w-full accent-brand"
            />
          </div>
        </div>

        {/* Impact Calculations Output */}
        <div className="lg:col-span-6 rounded-2xl border border-line bg-gradient-to-br from-mist to-slate-100 p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-line bg-paper p-3 text-center">
                <span className="text-[11px] font-semibold text-slate-500 block">
                  {isKm ? "ម៉ោងខាតបង់ប្រចាំខែ" : "Monthly Lost Hours"}
                </span>
                <p className="font-mono text-xl font-extrabold text-ink mt-1">
                  ~{totalLostHours} hrs
                </p>
              </div>

              <div className="rounded-xl border border-line bg-paper p-3 text-center">
                <span className="text-[11px] font-semibold text-slate-500 block">
                  {isKm ? "ម៉ោង HR ចំណេញបាន" : "HR Admin Hours Saved"}
                </span>
                <p className="font-mono text-xl font-extrabold text-emerald-600 mt-1">
                  ~{hrHoursSaved} hrs/mo
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-rose-200 bg-rose-50/80 p-4">
              <span className="text-[11px] font-bold text-rose-800 uppercase tracking-wider block">
                {isKm ? "ការខាតបង់ថវិកាប៉ាន់ស្មានប្រចាំឆ្នាំ (Annual Leakage)" : "Estimated Annual Labor Leakage"}
              </span>
              <p className="font-mono text-2xl sm:text-3xl font-extrabold text-rose-700 mt-1">
                {money(annualLeakage, currency)}
              </p>
              <span className="text-[11px] text-rose-800/80 block mt-0.5">
                (~{money(monthlyLeakage, currency)} {isKm ? "ក្នុងមួយខែ" : "per month"})
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-line">
            <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
              {isKm
                ? "ការប៉ាន់ស្មាននេះផ្អែកលើរូបមន្តស្របច្បាប់ការងារ 22 ថ្ងៃធ្វើការ។ ការសន្សំជាក់ស្តែងអាស្រ័យលើទំហំសាខា និងគោលការណ៍កត់ត្រាម៉ោងរបស់ស្ថាប័ន។"
                : "Assumptions based on standard 22 working days. AttendKH eliminates proxy punches via GPS radius & mandatory selfie checks."}
            </p>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-xs font-semibold text-white shadow-xs hover:bg-brand-dark transition-all"
            >
              <span>{isKm ? "កក់ការប្រឹក្សា និងសាកល្បងឥតគិតថ្លៃ" : "Book a Workflow Audit & Demo"}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
