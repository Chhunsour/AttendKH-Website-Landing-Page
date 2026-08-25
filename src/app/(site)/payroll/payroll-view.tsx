"use client";

import { useMemo, useState } from "react";
import { useSite } from "@/lib/i18n";
import { PageHero, Pic, CtaBand, CheckItem, ButtonLink } from "@/components/bits";
import { calculatePayroll, type OtType } from "@/lib/payroll";
import { formatUSD, formatKHR } from "@/lib/currency";

function Simulator() {
  const { t } = useSite();
  const s = t.payroll.sim;

  const [base, setBase] = useState(450);
  const [days, setDays] = useState<22 | 26>(26);
  const [late, setLate] = useState(25);
  const [otHours, setOtHours] = useState(8);
  const [otType, setOtType] = useState<OtType>("public_holiday");

  const r = useMemo(
    () => calculatePayroll({ baseSalary: base, workingDays: days, lateMinutes: late, otHours, otType }),
    [base, days, late, otHours, otType]
  );

  const rows: Array<[string, number, string]> = [
    [s.hourly, r.hourlyRate, ""],
    [s.lateOut, -r.lateDeduction, `(${r.chargeableLateMinutes} ${s.grace})`],
    [s.otOut, r.otBonus, `${r.otHours}h × ${r.otMultiplier}×`],
    [s.gross, r.grossSalary, ""],
  ];

  const sliderCls = "w-full accent-[#0052ff]";
  const segBtn = (active: boolean) =>
    `border px-3.5 py-2 text-[13px] font-medium transition-colors ${
      active ? "border-ink bg-ink text-white" : "border-line bg-white text-zinc-500 hover:text-ink"
    }`;

  return (
    <div className="grid gap-px border border-line bg-line lg:grid-cols-2">
      {/* Controls */}
      <div className="space-y-8 bg-white p-7 sm:p-10">
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="sim-base" className="text-[14px] font-medium text-ink">
              {s.base}
            </label>
            <span className="font-mono text-[14px] text-ink">${base.toLocaleString()}</span>
          </div>
          <input
            id="sim-base"
            type="range"
            min={300}
            max={3000}
            step={25}
            value={base}
            onChange={(e) => setBase(Number(e.target.value))}
            className={`mt-3 ${sliderCls}`}
          />
        </div>

        <div>
          <span className="text-[14px] font-medium text-ink">{s.days}</span>
          <div className="mt-3 flex gap-2">
            {([22, 26] as const).map((d) => (
              <button key={d} onClick={() => setDays(d)} aria-pressed={days === d} className={segBtn(days === d)}>
                {d}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="sim-late" className="text-[14px] font-medium text-ink">
              {s.late}
            </label>
            <span className="font-mono text-[14px] text-ink">{late} min</span>
          </div>
          <input
            id="sim-late"
            type="range"
            min={0}
            max={120}
            step={5}
            value={late}
            onChange={(e) => setLate(Number(e.target.value))}
            className={`mt-3 ${sliderCls}`}
          />
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="sim-ot" className="text-[14px] font-medium text-ink">
              {s.ot}
            </label>
            <span className="font-mono text-[14px] text-ink">{otHours} h</span>
          </div>
          <input
            id="sim-ot"
            type="range"
            min={0}
            max={40}
            step={1}
            value={otHours}
            onChange={(e) => setOtHours(Number(e.target.value))}
            className={`mt-3 ${sliderCls}`}
          />
        </div>

        <div>
          <span className="text-[14px] font-medium text-ink">{s.otType}</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {(["regular", "rest_day", "public_holiday"] as const).map((k) => (
              <button key={k} onClick={() => setOtType(k)} aria-pressed={otType === k} className={segBtn(otType === k)}>
                {k === "regular" ? s.otRegular : k === "rest_day" ? s.otRest : s.otHoliday}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Output */}
      <div className="bg-paper p-7 sm:p-10">
        <div className="grid grid-cols-[1fr_auto_auto] gap-x-6 text-[14px]">
          <span className="pb-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-zinc-400">
            USD
          </span>
          <span />
          <span className="pb-3 text-right font-mono text-[10.5px] uppercase tracking-[0.16em] text-zinc-400">
            KHR
          </span>

          {rows.map(([label, val, note]) => (
            <div key={label} className="col-span-3 grid grid-cols-[1fr_auto_auto] items-baseline gap-x-6 border-t border-line py-3">
              <span>
                {label}
                {note ? <span className="ml-2 text-[12px] text-zinc-400">{note}</span> : null}
              </span>
              <span className={`font-mono ${val < 0 ? "text-red-600" : "text-ink"}`}>
                {val < 0 ? "−" : ""}
                {formatUSD(Math.abs(val), { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span className={`text-right font-mono text-[13px] ${val < 0 ? "text-red-600" : "text-zinc-500"}`}>
                {val < 0 ? "−" : ""}
                {formatKHR(Math.abs(val) * 4100)}
              </span>
            </div>
          ))}

          <div className="col-span-3 mt-4 grid grid-cols-[1fr_auto_auto] items-baseline gap-x-6 border-t-2 border-ink bg-white px-4 py-4">
            <span className="text-[14px] font-semibold text-ink">{s.net}</span>
            <span className="font-mono text-xl font-semibold text-ink">
              {formatUSD(r.netTakeHome, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span className="text-right font-mono text-[15px] text-ink">
              {formatKHR(r.netTakeHome * 4100)}
            </span>
          </div>
        </div>
        <p className="mt-5 text-[12.5px] leading-relaxed text-zinc-400">{s.note}</p>
      </div>
    </div>
  );
}

export function PayrollView() {
  const { t } = useSite();
  const p = t.payroll;

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <PageHero kicker={p.kicker} title={p.title} sub={p.sub} />
        <div className="mt-12 flex items-center gap-4">
          <ButtonLink href="/pricing">{t.common.trial}</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            {t.nav.demo}
          </ButtonLink>
        </div>
        <Pic label={p.heroImg} ratio="16 / 8" className="mt-14" />
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{p.sim.kicker}</p>
          <h2 className="font-serif mt-4 text-4xl leading-[1.1] text-ink">{p.sim.title}</h2>
          <div className="mt-10">
            <Simulator />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              {p.rulesKicker}
            </p>
            <h2 className="font-serif mt-4 max-w-md text-4xl leading-[1.1] text-ink">
              {p.rulesTitle}
            </h2>
            <ul className="mt-8 space-y-3.5">
              {p.rules.map((r) => (
                <CheckItem key={r}>{r}</CheckItem>
              ))}
            </ul>
          </div>
          <Pic label={t.payroll.heroImg} ratio="4 / 3" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
