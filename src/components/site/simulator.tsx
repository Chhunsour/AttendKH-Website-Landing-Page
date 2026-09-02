"use client";

import { useMemo, useState, useId } from "react";
import { calculatePayroll, OT_OPTIONS, GRACE_PERIOD_MINUTES, type OtType } from "@/lib/payroll";
import { formatUSD, formatKHR, usdToKhr } from "@/lib/currency";
import { useSite } from "@/lib/i18n";
import { useCopy } from "@/components/site/ui";
import { Calculator, Clock, Calendar, CheckCircle2 } from "lucide-react";

function money(usd: number, currency: "USD" | "KHR", exchangeRate: number) {
  return currency === "KHR"
    ? formatKHR(usdToKhr(usd, exchangeRate))
    : formatUSD(usd, { showCentsIfZero: true });
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
    <div className="space-y-2.5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <label htmlFor={id} className="text-sm font-bold text-slate-900 cursor-pointer">
            {label}
          </label>
          {subLabel && (
            <span className="ml-2 text-xs font-medium text-slate-500">
              {subLabel}
            </span>
          )}
        </div>
        <output
          htmlFor={id}
          className="inline-flex items-center rounded-xl border border-blue-200/70 bg-blue-50/90 px-3 py-1 font-price text-sm font-bold text-brand shadow-2xs tabular-nums"
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
          className="h-2 w-full cursor-pointer appearance-none rounded-lg focus:outline-hidden focus:ring-2 focus:ring-brand/30 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-brand [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110"
        />
      </div>
    </div>
  );
}

export function PayrollSimulator() {
  const c = useCopy();
  const s = c.payroll.sim;
  const { currency, exchangeRate, lang } = useSite();
  const isKm = lang === "km";
  const isZh = lang === "zh";

  const [base, setBase] = useState(450);
  const [days, setDays] = useState<22 | 26>(22);
  const [late, setLate] = useState(25);
  const [otHours, setOtHours] = useState(8);
  const [otType, setOtType] = useState<OtType>("public_holiday");

  const r = useMemo(
    () =>
      calculatePayroll({
        baseSalary: base,
        workingDays: days,
        lateMinutes: late,
        otHours: otHours,
        otType,
      }),
    [base, days, late, otHours, otType]
  );

  const otLabel = (t: OtType) => {
    if (isKm) {
      if (t === "regular") return "ថ្ងៃធម្មតា (1.5x)";
      if (t === "rest_day") return "ថ្ងៃសម្រាក (2.0x)";
      return "បុណ្យជាតិ (2.0x)";
    }
    if (isZh) {
      if (t === "regular") return "平时加班 (1.5x)";
      if (t === "rest_day") return "公休日 (2.0x)";
      return "法定节假日 (2.0x)";
    }
    if (t === "regular") return "Regular (1.5x)";
    if (t === "rest_day") return "Rest Day (2.0x)";
    return "Public Holiday (2.0x)";
  };

  const presets = [250, 450, 850, 1500];

  return (
    <div className="w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Interactive Input Controls */}
        <div className="p-6 sm:p-8 lg:p-10 lg:col-span-7 space-y-7 border-b lg:border-b-0 lg:border-r border-slate-200/80">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-brand border border-blue-200/60 shadow-2xs">
                <Calculator size={16} />
              </div>
              <span className="font-display text-sm font-bold text-slate-900">
                {isKm ? "ផ្ទាំងបញ្ជាការគណនាប្រាក់បៀវត្សរ៍" : isZh ? "薪资参数交互配置" : "Interactive Payroll Controls"}
              </span>
            </div>
            <span className="font-price text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
              USD & KHR
            </span>
          </div>

          <div className="space-y-6">
            {/* 1. Base Salary Slider & Presets */}
            <div className="space-y-2.5">
              <CustomSlider
                label={s.baseSalary}
                value={base}
                min={100}
                max={2500}
                step={25}
                display={money(base, currency, exchangeRate)}
                onChange={setBase}
              />
              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs font-semibold text-slate-500">
                  {isKm ? "កម្រិតកំណត់ជាមុន៖" : isZh ? "快速预设：" : "Presets:"}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {presets.map((p) => {
                    const isSelected = base === p;
                    return (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setBase(p)}
                        className={`rounded-lg px-2.5 py-1 font-price text-xs font-bold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-brand text-white shadow-xs"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                        }`}
                      >
                        {formatUSD(p, { showCentsIfZero: false })}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 2. Working Days Selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-slate-900">
                  {s.workingDays}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {days === 22
                    ? isKm ? "ច័ន្ទ–សុក្រ (៥ ថ្ងៃ/សប្តាហ៍)" : isZh ? "周一至周五 (5天/周)" : "Mon–Fri (5 days/wk)"
                    : isKm ? "ច័ន្ទ–សៅរ៍ (៦ ថ្ងៃ/សប្តាហ៍)" : isZh ? "周一至周六 (6天/周)" : "Mon–Sat (6 days/wk)"}
                </span>
              </div>
              <div role="group" aria-label={s.workingDays} className="grid grid-cols-2 gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/80 p-1">
                {([22, 26] as const).map((d) => {
                  const isSelected = days === d;
                  return (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDays(d)}
                      aria-pressed={isSelected}
                      className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-white text-brand shadow-xs border border-slate-200/90"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <Calendar size={14} className={isSelected ? "text-brand" : "text-slate-400"} />
                      <span className="font-price font-bold">{d} {isKm ? "ថ្ងៃ" : isZh ? "天" : "Days"}</span>
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
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-slate-900">
                  {s.otType}
                </span>
                <span className="font-price text-xs font-bold text-brand bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">
                  {r.otMultiplier.toFixed(1)}× Rate
                </span>
              </div>
              <div role="group" aria-label={s.otType} className="flex flex-wrap gap-2">
                {(Object.keys(OT_OPTIONS) as OtType[]).map((t) => {
                  const isSelected = otType === t;
                  const mult = OT_OPTIONS[t].multiplier;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setOtType(t)}
                      aria-pressed={isSelected}
                      className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? "border-brand bg-blue-50/70 text-brand shadow-2xs font-bold"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <Clock size={13} className={isSelected ? "text-brand" : "text-slate-400"} />
                      <span>{otLabel(t)}</span>
                      <span
                        className={`font-price rounded px-1.5 py-0.5 text-[10.5px] font-bold ${
                          isSelected ? "bg-brand text-white" : "bg-slate-100 text-slate-600"
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
        <div className="flex flex-col justify-between bg-slate-50/70 p-6 sm:p-8 lg:p-10 lg:col-span-5 space-y-8">
          <div>
            {/* Top Payslip Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{isKm ? "លទ្ធផលគណនាផ្ទាល់" : isZh ? "实时核算明细" : "Live Calculation"}</span>
              </span>
              <span className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 font-price text-xs font-semibold text-slate-600 shadow-2xs">
                (Base ÷ Days) ÷ 8h
              </span>
            </div>

            {/* Itemized Calculations Breakdown */}
            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <dt className="text-slate-600 font-medium">{s.hourly}</dt>
                <dd className="font-price font-bold text-slate-900 tabular-nums">
                  {money(r.hourlyRate, currency, exchangeRate)} <span className="text-xs font-normal text-slate-400">/ hr</span>
                </dd>
              </div>

              <div className="flex items-center justify-between text-sm">
                <dt className="flex items-center gap-1 text-slate-600 font-medium">
                  <span>{s.lateMinutes}</span>
                  <span className="text-xs text-slate-400">({r.chargeableLateMinutes} {s.min})</span>
                </dt>
                <dd className="font-price font-bold text-rose-600 tabular-nums">
                  − {money(r.lateDeduction, currency, exchangeRate)}
                </dd>
              </div>

              <div className="flex items-center justify-between text-sm">
                <dt className="flex items-center gap-1 text-slate-600 font-medium">
                  <span>{s.otHours}</span>
                  <span className="text-xs text-slate-400">({otHours}h × {r.otMultiplier.toFixed(1)})</span>
                </dt>
                <dd className="font-price font-bold text-emerald-600 tabular-nums">
                  + {money(r.otBonus, currency, exchangeRate)}
                </dd>
              </div>
            </dl>
          </div>

          {/* Bottom Hero Net Pay Box */}
          <div className="rounded-2xl border border-blue-200/90 bg-white p-6 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {s.net}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                <CheckCircle2 size={12} className="text-emerald-600" />
                <span>{isKm ? "ស្របតាមច្បាប់ការងារ" : isZh ? "劳工法合规" : "Labor Law"}</span>
              </span>
            </div>

            <div>
              <span className="block font-price text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-none tracking-tight text-slate-900 tabular-nums">
                {money(r.netTakeHome, currency, exchangeRate)}
              </span>
              <span className="mt-2 block font-price text-sm font-bold text-brand tabular-nums">
                {currency === "KHR"
                  ? formatUSD(r.netTakeHome, { showCentsIfZero: true })
                  : `≈ ${formatKHR(usdToKhr(r.netTakeHome, exchangeRate))}`}
              </span>
            </div>

            <p className="border-t border-slate-100 pt-3 text-xs leading-relaxed text-slate-500">
              {isKm
                ? "* រូបមន្តស្របតាមស្តង់ដារច្បាប់ការងារកម្ពុជា រួមទាំងការលើកលែងពេលយឺត និងមេគុណថែមម៉ោង។"
                : isZh
                ? "* 算法严格遵循柬埔寨劳工法标准，包含迟到宽限期抵扣与法定加班倍率计算。"
                : "* Estimate using the selected grace period and overtime settings. Confirm payroll rules with a qualified adviser."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
