"use client";

import { useMemo, useState, useId } from "react";
import { calculatePayroll, OT_OPTIONS, GRACE_PERIOD_MINUTES, type OtType } from "@/lib/payroll";
import { formatUSD, formatKHR, usdToKhr } from "@/lib/currency";
import { useSite } from "@/lib/i18n";
import { useCopy } from "@/components/site/ui";

function money(usd: number, currency: "USD" | "KHR") {
  return currency === "KHR" ? formatKHR(usdToKhr(usd)) : formatUSD(usd, { showCentsIfZero: true });
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}) {
  const id = useId();
  return (
    <div>
      <div className="flex items-end justify-between gap-3">
        <label htmlFor={id} className="text-[14px] text-body">
          {label}
        </label>
        <output htmlFor={id} className="font-mono text-[15px] font-semibold text-ink">
          {display}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2.5 w-full"
      />
    </div>
  );
}

export function PayrollSimulator() {
  const c = useCopy();
  const { currency, lang } = useSite();

  const [base, setBase] = useState(450);
  const [days, setDays] = useState<22 | 26>(22);
  const [late, setLate] = useState(25);
  const [otHours, setOtHours] = useState(8);
  const [otType, setOtType] = useState<OtType>("public_holiday");

  const r = useMemo(
    () => calculatePayroll({ baseSalary: base, workingDays: days, lateMinutes: late, otHours, otType }),
    [base, days, late, otHours, otType]
  );

  const otLabel = (t: OtType) => (lang === "km" ? OT_OPTIONS[t].labelKm : OT_OPTIONS[t].labelEn);

  const s = c.payroll.sim;

  const rows = [
    { label: s.hourly, value: money(r.hourlyRate, currency) },
    {
      label: `${s.lateMinutes} · ${r.chargeableLateMinutes} ${s.min}`,
      value: `− ${money(r.lateDeduction, currency)}`,
    },
    {
      label: `${s.otHours} · ${otHours} ${s.hrs} × ${r.otMultiplier.toFixed(1)}`,
      value: `+ ${money(r.otBonus, currency)}`,
    },
  ];

  return (
    <div className="grid gap-10 rounded-xl border border-line bg-paper p-6 sm:p-8 lg:grid-cols-2 lg:gap-14">
      <div className="space-y-6">
        <Slider
          label={s.baseSalary}
          value={base}
          min={300}
          max={3000}
          step={10}
          display={money(base, currency)}
          onChange={setBase}
        />

        <div>
          <p className="text-[14px] text-body">{s.workingDays}</p>
          <div className="mt-2.5 flex gap-2">
            {([22, 26] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDays(d)}
                aria-pressed={days === d}
                className={`flex-1 rounded-lg border px-4 py-2 font-mono text-[14px] font-semibold transition-colors ${
                  days === d ? "border-brand bg-brand-soft text-brand" : "border-line text-body hover:border-slate-400"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <Slider
          label={`${s.lateMinutes} (${GRACE_PERIOD_MINUTES} ${s.min} ${s.grace})`}
          value={late}
          min={0}
          max={180}
          step={1}
          display={`${late} ${s.min}`}
          onChange={setLate}
        />

        <Slider
          label={s.otHours}
          value={otHours}
          min={0}
          max={40}
          step={1}
          display={`${otHours} ${s.hrs}`}
          onChange={setOtHours}
        />

        <div>
          <p className="text-[14px] text-body">{s.otType}</p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {(Object.keys(OT_OPTIONS) as OtType[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setOtType(t)}
                aria-pressed={otType === t}
                className={`rounded-lg border px-3 py-2 text-[13px] font-medium transition-colors ${
                  otType === t ? "border-brand bg-brand-soft text-brand" : "border-line text-body hover:border-slate-400"
                }`}
              >
                {otLabel(t)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-line bg-mist p-6">
        <p className="font-mono text-[12px] text-slate-500">{c.payroll.formula}</p>
        <dl className="mt-5 space-y-3">
          {rows.map((row) => (
            <div key={row.label} className="flex items-baseline justify-between gap-4 text-[14px]">
              <dt className="text-body">{row.label}</dt>
              <dd className="font-mono font-medium text-ink">{row.value}</dd>
            </div>
          ))}
          <div className="border-t border-line pt-4">
            <dt className="text-[14px] text-body">{s.net}</dt>
            <dd className="mt-1">
              <span className="block font-mono text-[30px] font-bold leading-tight text-ink">
                {money(r.netTakeHome, currency)}
              </span>
              <span className="block font-mono text-[14px] text-slate-500">
                {currency === "KHR"
                  ? formatUSD(r.netTakeHome, { showCentsIfZero: true })
                  : formatKHR(usdToKhr(r.netTakeHome))}
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
