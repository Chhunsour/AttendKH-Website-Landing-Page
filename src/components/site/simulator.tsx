"use client";

import { useMemo, useState, useId } from "react";
import { calculatePayroll, OT_OPTIONS, GRACE_PERIOD_MINUTES, type OtType } from "@/lib/payroll";
import { formatUSD, formatKHR, usdToKhr } from "@/lib/currency";
import { useSite } from "@/lib/i18n";
import { useCopy } from "@/components/site/ui";
import { Calculator, Clock, Calendar, Check } from "lucide-react";

function money(usd: number, currency: "USD" | "KHR", exchangeRate: number) {
  return currency === "KHR" ? formatKHR(usdToKhr(usd, exchangeRate)) : formatUSD(usd, { showCentsIfZero: true });
}

function CustomSlider({
  label,
  value,
  min,
  max,
  step,
  display,
  subLabel,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  subLabel?: string;
  onChange: (v: number) => void;
}) {
  const id = useId();
  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <div>
          <label htmlFor={id} className="text-[13.5px] font-semibold text-[#0F172A]">
            {label}
          </label>
          {subLabel && (
            <span className="ml-2 text-[11.5px] font-medium text-[#64748B]">
              {subLabel}
            </span>
          )}
        </div>
        <output
          htmlFor={id}
          className="inline-flex items-center rounded-lg border border-[#0052FF]/15 bg-[#EDF2FE] px-2.5 py-0.5 font-mono text-[13.5px] font-bold text-[#0052FF]"
        >
          {display}
        </output>
      </div>

      <div className="relative flex items-center py-1">
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{
            background: `linear-gradient(to right, #0052FF 0%, #0052FF ${percentage}%, #E2E8F0 ${percentage}%, #E2E8F0 100%)`,
          }}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052FF]/30 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0052FF] [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110"
        />
      </div>
    </div>
  );
}

export function PayrollSimulator() {
  const c = useCopy();
  const { currency, lang, exchangeRate } = useSite();
  const isKm = lang === "km";

  const [base, setBase] = useState(450);
  const [days, setDays] = useState<22 | 26>(22);
  const [late, setLate] = useState(25);
  const [otHours, setOtHours] = useState(8);
  const [otType, setOtType] = useState<OtType>("public_holiday");

  const r = useMemo(
    () => calculatePayroll({ baseSalary: base, workingDays: days, lateMinutes: late, otHours, otType }),
    [base, days, late, otHours, otType]
  );

  const otLabel = (t: OtType) => (lang === "km" ? OT_OPTIONS[t].labelKm : lang === "zh" ? OT_OPTIONS[t].labelZh : OT_OPTIONS[t].labelEn);
  const s = c.payroll.sim;

  const basePresets = [
    { label: "$250", value: 250 },
    { label: "$450", value: 450 },
    { label: "$850", value: 850 },
    { label: "$1,500", value: 1500 },
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-xl shadow-blue-500/5">
      <div className="grid lg:grid-cols-12">
        {/* Left Interactive Control Panel */}
        <div className="p-6 sm:p-9 lg:col-span-7 lg:border-r lg:border-line">
          <div className="flex items-center gap-2 font-mono text-[11.5px] font-bold uppercase tracking-wider text-[#0052FF]">
            <Calculator size={14} />
            <span>{isKm ? "ផ្ទាំងកំណត់ការគណនា" : "Interactive Payroll Controls"}</span>
          </div>

          <div className="mt-6 space-y-6">
            {/* 1. Base Salary */}
            <div>
              <CustomSlider
                label={s.baseSalary}
                value={base}
                min={200}
                max={3000}
                step={25}
                display={money(base, currency, exchangeRate)}
                onChange={setBase}
              />
              <div className="mt-2.5 flex items-center gap-1.5">
                <span className="text-[11px] font-semibold text-[#94A3B8]">
                  {isKm ? "កម្រិតទូទៅ:" : "Presets:"}
                </span>
                <div className="flex flex-wrap gap-1">
                  {basePresets.map((p) => (
                    <button
                      key={p.value}
                      type="button"
                      onClick={() => setBase(p.value)}
                      className={`rounded-md px-2 py-0.5 text-[11px] font-mono font-medium transition-all cursor-pointer ${
                        base === p.value
                          ? "bg-[#0052FF] text-white shadow-2xs font-bold"
                          : "bg-slate-100 text-[#64748B] hover:bg-slate-200"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Working Days */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[13.5px] font-semibold text-[#0F172A]">
                  {s.workingDays}
                </span>
                <span className="text-[11.5px] text-[#64748B]">
                  {days === 22 ? (isKm ? "ច័ន្ទ - សុក្រ (៥ ថ្ងៃ)" : "Mon–Fri (5 days/wk)") : (isKm ? "ច័ន្ទ - សៅរ៍ (៦ ថ្ងៃ)" : "Mon–Sat (6 days/wk)")}
                </span>
              </div>
              <div role="group" aria-label={s.workingDays} className="mt-2 grid grid-cols-2 gap-2.5 rounded-xl border border-line bg-slate-50/80 p-1">
                {([22, 26] as const).map((d) => {
                  const isSelected = days === d;
                  return (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDays(d)}
                      aria-pressed={isSelected}
                      className={`flex items-center justify-center gap-2 rounded-lg py-2 text-[13px] font-bold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-white text-[#0052FF] shadow-xs border border-[#0052FF]/20"
                          : "text-[#64748B] hover:text-[#0F172A]"
                      }`}
                    >
                      <Calendar size={13} className={isSelected ? "text-[#0052FF]" : "text-[#94A3B8]"} />
                      <span>{d} {isKm ? "ថ្ងៃ" : "Days"}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Late Minutes */}
            <CustomSlider
              label={s.lateMinutes}
              subLabel={`(${GRACE_PERIOD_MINUTES} ${s.min} ${s.grace})`}
              value={late}
              min={0}
              max={120}
              step={5}
              display={`${late} ${s.min}`}
              onChange={setLate}
            />

            {/* 4. Overtime Hours */}
            <CustomSlider
              label={s.otHours}
              value={otHours}
              min={0}
              max={40}
              step={1}
              display={`${otHours} ${s.hrs}`}
              onChange={setOtHours}
            />

            {/* 5. Overtime Multiplier Type */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[13.5px] font-semibold text-[#0F172A]">
                  {s.otType}
                </span>
                <span className="text-[11px] font-mono text-[#0052FF] font-semibold">
                  {r.otMultiplier.toFixed(1)}× Rate
                </span>
              </div>
              <div role="group" aria-label={s.otType} className="mt-2 flex flex-wrap gap-2">
                {(Object.keys(OT_OPTIONS) as OtType[]).map((t) => {
                  const isSelected = otType === t;
                  const mult = OT_OPTIONS[t].multiplier;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setOtType(t)}
                      aria-pressed={isSelected}
                      className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-[12.5px] font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? "border-[#0052FF] bg-[#EDF2FE] text-[#0052FF] shadow-2xs"
                          : "border-line bg-white text-[#475569] hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <Clock size={13} className={isSelected ? "text-[#0052FF]" : "text-[#94A3B8]"} />
                      <span>{otLabel(t)}</span>
                      <span
                        className={`ml-0.5 rounded px-1.5 py-0.2 text-[10.5px] font-mono font-bold ${
                          isSelected ? "bg-[#0052FF] text-white" : "bg-slate-100 text-[#64748B]"
                        }`}
                      >
                        {mult.toFixed(1)}×
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Live Payslip Summary Card */}
        <div className="flex flex-col justify-between bg-gradient-to-b from-[#FAFBFD] to-[#F1F5F9]/60 p-6 sm:p-9 lg:col-span-5">
          <div>
            {/* Top Payslip Badge */}
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0F172A]">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                {isKm ? "លទ្ធផលគណនាផ្ទាល់" : "Live Calculation"}
              </span>
              <span className="rounded-md border border-line bg-white px-2 py-0.5 font-mono text-[10.5px] text-[#64748B]">
                (Base ÷ Days) ÷ 8h
              </span>
            </div>

            {/* Itemized Calculations Breakdown */}
            <dl className="mt-5 space-y-3.5">
              <div className="flex items-center justify-between text-[13.5px]">
                <dt className="text-[#475569]">{s.hourly}</dt>
                <dd className="font-mono font-semibold text-[#0F172A]">
                  {money(r.hourlyRate, currency, exchangeRate)} <span className="text-[11px] text-[#94A3B8]">/ hr</span>
                </dd>
              </div>

              <div className="flex items-center justify-between text-[13.5px]">
                <dt className="flex items-center gap-1 text-[#475569]">
                  <span>{s.lateMinutes}</span>
                  <span className="text-[11px] text-[#94A3B8]">({r.chargeableLateMinutes} {s.min})</span>
                </dt>
                <dd className="font-mono font-bold text-rose-600">
                  − {money(r.lateDeduction, currency, exchangeRate)}
                </dd>
              </div>

              <div className="flex items-center justify-between text-[13.5px]">
                <dt className="flex items-center gap-1 text-[#475569]">
                  <span>{s.otHours}</span>
                  <span className="text-[11px] text-[#94A3B8]">({otHours}h × {r.otMultiplier.toFixed(1)})</span>
                </dt>
                <dd className="font-mono font-bold text-emerald-600">
                  + {money(r.otBonus, currency, exchangeRate)}
                </dd>
              </div>
            </dl>
          </div>

          {/* Bottom Hero Net Pay Box */}
          <div className="mt-8 rounded-2xl border border-[#0052FF]/25 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                {s.net}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                <Check size={11} strokeWidth={2.5} />
                {isKm ? "ស្របតាមច្បាប់ការងារ" : "Labor Law"}
              </span>
            </div>

            <div className="mt-3">
              <span className="block font-mono text-[34px] sm:text-[38px] font-extrabold leading-none tracking-tight text-[#0F172A]">
                {money(r.netTakeHome, currency, exchangeRate)}
              </span>
              <span className="mt-1.5 block font-mono text-[13.5px] font-semibold text-[#0052FF]">
                {currency === "KHR"
                  ? formatUSD(r.netTakeHome, { showCentsIfZero: true })
                  : `≈ ${formatKHR(usdToKhr(r.netTakeHome, exchangeRate))}`}
              </span>
            </div>

            <p className="mt-4 border-t border-line/70 pt-3 text-[11px] text-[#94A3B8]">
              {isKm
                ? "* រូបមន្តស្របតាមស្តង់ដារច្បាប់ការងារកម្ពុជា រួមទាំងការលើកលែងពេលយឺត និងមេគុណថែមម៉ោង។"
                : "* Estimate using the selected grace period and overtime settings. Confirm payroll rules with a qualified adviser."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
