"use client";

import { useMemo, useState, useId } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Check, Sparkles } from "lucide-react";
import { calculatePayroll, OT_OPTIONS, GRACE_PERIOD_MINUTES, type OtType } from "@/lib/payroll";
import { formatUSD, formatKHR, usdToKhr } from "@/lib/currency";
import { useSite } from "@/lib/i18n";

function money(usd: number, currency: "USD" | "KHR") {
  return currency === "KHR" ? formatKHR(usdToKhr(usd)) : formatUSD(usd, { showCentsIfZero: true });
}

export function HomepagePayrollSimulator() {
  const { currency, lang } = useSite();
  const isKm = lang === "km";

  const [base, setBase] = useState(450);
  const [days, setDays] = useState<22 | 26>(22);
  const [late, setLate] = useState(20);
  const [otHours, setOtHours] = useState(6);
  const [otType, setOtType] = useState<OtType>("public_holiday");

  const r = useMemo(
    () => calculatePayroll({ baseSalary: base, workingDays: days, lateMinutes: late, otHours, otType }),
    [base, days, late, otHours, otType]
  );

  const baseId = useId();
  const lateId = useId();
  const otId = useId();

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-paper shadow-xl">
      <div className="border-b border-line bg-mist/60 px-6 py-4 sm:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand text-white shadow-xs">
            <Calculator size={16} />
          </div>
          <div>
            <h3 className="font-display text-[16px] font-bold text-ink">
              {isKm ? "ម៉ាស៊ីនគណនាប្រាក់បៀវត្សរ៍កម្ពុជា" : "Cambodia Payroll Simulator"}
            </h3>
            <p className="text-[11.5px] text-slate-500">
              {isKm ? "រូបមន្តស្របច្បាប់ការងារ: (ប្រាក់ខែ ÷ ថ្ងៃធ្វើការ ÷ 8) = អត្រាក្នុងមួយម៉ោង" : "Labor Law Formula: (Base ÷ Working Days ÷ 8) = Hourly Rate"}
            </p>
          </div>
        </div>

        <Link
          href="/payroll"
          className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline"
        >
          <span>{isKm ? "មើលម៉ាស៊ីនគណនាពេញលេញ" : "Full Payroll Engine"}</span>
          <ArrowRight size={13} />
        </Link>
      </div>

      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10">
        {/* Sliders Form */}
        <div className="lg:col-span-7 space-y-5">
          {/* Base Salary */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <label htmlFor={baseId} className="font-semibold text-ink">
                {isKm ? "ប្រាក់ខែមូលដ្ឋាន (Base Salary)" : "Base Monthly Salary"}
              </label>
              <output htmlFor={baseId} className="font-mono text-sm font-bold text-brand">
                {money(base, currency)}
              </output>
            </div>
            <input
              id={baseId}
              type="range"
              min={250}
              max={2500}
              step={25}
              value={base}
              onChange={(e) => setBase(Number(e.target.value))}
              className="w-full accent-brand"
            />
          </div>

          {/* Working Days & OT Type */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <span className="block text-xs font-semibold text-ink mb-1.5">
                {isKm ? "ថ្ងៃធ្វើការក្នុងខែ" : "Monthly Working Days"}
              </span>
              <div className="flex gap-2">
                {([22, 26] as const).map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDays(d)}
                    className={`flex-1 rounded-xl border py-2 font-mono text-xs font-bold transition-all ${
                      days === d
                        ? "border-brand bg-brand-soft text-brand shadow-xs"
                        : "border-line bg-mist text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {d} {isKm ? "ថ្ងៃ" : "Days"}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="block text-xs font-semibold text-ink mb-1.5">
                {isKm ? "ប្រភេទថែមម៉ោង (OT Multiplier)" : "Overtime Multiplier"}
              </span>
              <select
                value={otType}
                onChange={(e) => setOtType(e.target.value as any)}
                className="w-full rounded-xl border border-line bg-mist px-3 py-2 text-xs font-semibold text-ink focus:border-brand focus:outline-none"
              >
                <option value="regular_day">1.5× {isKm ? "ថ្ងៃធម្មតា (Regular Day)" : "Regular Shift OT"}</option>
                <option value="public_holiday">2.0× {isKm ? "បុណ្យជាតិ (Public Holiday)" : "Public Holiday / Rest Day"}</option>
                <option value="night_shift">1.5× {isKm ? "វេនយប់ (Night Work)" : "Night Work OT"}</option>
              </select>
            </div>
          </div>

          {/* Late & Overtime Sliders */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <label htmlFor={lateId} className="font-semibold text-ink">
                  {isKm ? "ម៉ោងយឺត (Late Minutes)" : "Late Minutes (15m grace)"}
                </label>
                <output htmlFor={lateId} className="font-mono text-xs font-bold text-slate-700">
                  {late} min
                </output>
              </div>
              <input
                id={lateId}
                type="range"
                min={0}
                max={90}
                step={5}
                value={late}
                onChange={(e) => setLate(Number(e.target.value))}
                className="w-full accent-brand"
              />
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <label htmlFor={otId} className="font-semibold text-ink">
                  {isKm ? "ម៉ោងថែម (Overtime Hours)" : "Overtime Hours"}
                </label>
                <output htmlFor={otId} className="font-mono text-xs font-bold text-slate-700">
                  {otHours} hrs
                </output>
              </div>
              <input
                id={otId}
                type="range"
                min={0}
                max={25}
                step={1}
                value={otHours}
                onChange={(e) => setOtHours(Number(e.target.value))}
                className="w-full accent-brand"
              />
            </div>
          </div>
        </div>

        {/* Live Calculation Output Card */}
        <div className="lg:col-span-5 rounded-2xl border border-line bg-gradient-to-br from-mist to-slate-100 p-6 flex flex-col justify-between">
          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between border-b border-line pb-2">
              <span className="text-slate-500">{isKm ? "អត្រាក្នុងមួយម៉ោង" : "Calculated Hourly Rate"}</span>
              <span className="font-mono font-bold text-ink">{money(r.hourlyRate, currency)}/hr</span>
            </div>

            <div className="flex items-center justify-between text-rose-700">
              <span>
                {isKm ? `កាត់យឺត (${r.chargeableLateMinutes} នាទី)` : `Late Penalty (${r.chargeableLateMinutes} min)`}
              </span>
              <span className="font-mono font-bold">− {money(r.lateDeduction, currency)}</span>
            </div>

            <div className="flex items-center justify-between text-emerald-700">
              <span>
                {isKm ? `ប្រាក់ថែមម៉ោង (${otHours} ម៉ោង × ${r.otMultiplier}x)` : `Overtime Bonus (${otHours}h × ${r.otMultiplier}x)`}
              </span>
              <span className="font-mono font-bold">+ {money(r.otBonus, currency)}</span>
            </div>
          </div>

          <div className="mt-6 border-t border-line pt-4">
            <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              {isKm ? "ប្រាក់ត្រូវបើកសុទ្ធ (Net Take-Home Pay)" : "Estimated Net Monthly Take-Home"}
            </span>
            <div className="mt-1 flex flex-wrap items-baseline gap-2">
              <span className="font-mono text-3xl font-extrabold text-brand">
                {money(r.netTakeHome, currency)}
              </span>
              <span className="font-mono text-xs font-bold text-slate-500">
                {currency === "KHR"
                  ? formatUSD(r.netTakeHome, { showCentsIfZero: true })
                  : formatKHR(usdToKhr(r.netTakeHome))}
              </span>
            </div>
            <p className="mt-2 text-[11px] text-slate-500 leading-relaxed">
              {isKm
                ? "រាល់ប័ណ្ណបើកប្រាក់បៀវត្សរ៍ (Payslip) ត្រូវបានចេញជាទម្រង់ទ្វេភាសា USD & KHR ដោយស្វ័យប្រវត្តិ។"
                : "Automatic dual-currency USD/KHR payslips generated in 1 click."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
