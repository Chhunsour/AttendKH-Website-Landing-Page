"use client";

import { useState } from "react";
import { useSite } from "@/lib/i18n";
import { PageHero, ButtonLink, CtaBand } from "@/components/bits";

export function PricingView() {
  const { t, fmt } = useSite();
  const p = t.pricing;
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:px-8 sm:pt-24">
        <PageHero kicker={p.kicker} title={p.title} sub={p.sub} />

        <div className="mt-10 flex items-center gap-4">
          <div className="flex border border-line bg-white" role="group" aria-label="Billing period">
            {([false, true] as const).map((isAnnual) => (
              <button
                key={String(isAnnual)}
                onClick={() => setAnnual(isAnnual)}
                aria-pressed={annual === isAnnual}
                className={`px-5 py-2.5 text-[13.5px] font-medium transition-colors ${
                  annual === isAnnual ? "bg-ink text-white" : "text-zinc-500 hover:text-ink"
                }`}
              >
                {isAnnual ? p.annual : p.monthly}
              </button>
            ))}
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            {p.save}
          </span>
        </div>

        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
          {p.plans.map((plan) => {
            const price = annual ? (plan.price * 10) / 12 : plan.price;
            const popular = plan.name === "Growth";
            return (
              <div
                key={plan.name}
                className={`flex flex-col bg-paper p-8 ${popular ? "border-2 border-ink bg-white" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-[1.6rem] text-ink">{plan.name}</h2>
                  {popular ? (
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                      {p.popular}
                    </span>
                  ) : null}
                </div>
                <p className="mt-1.5 text-[13.5px] text-zinc-500">{plan.desc}</p>

                <p className="mt-7 font-mono text-[2.1rem] leading-none tracking-tight text-ink">
                  {fmt(price)}
                  <span className="ml-1 text-[13px] font-normal text-zinc-400">{p.per}</span>
                </p>
                <p className="mt-2 text-[12.5px] text-zinc-400">
                  {annual ? p.billedAnnually : p.billedMonthly}
                </p>

                <ul className="mt-7 flex-1 space-y-2.5 border-t border-line pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-[14px] text-zinc-600">
                      <span aria-hidden="true" className="text-zinc-300">
                        —
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <ButtonLink
                    href={plan.name === "Enterprise" ? "/contact" : "/contact"}
                    variant={popular ? "primary" : "outline"}
                  >
                    {plan.cta}
                  </ButtonLink>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <h2 className="font-serif mt-8 text-3xl text-ink">{p.faqTitle}</h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {p.faq.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15.5px] font-medium text-ink">
                {item.q}
                <span aria-hidden="true" className="faq-mark font-mono text-[18px] leading-none text-zinc-400">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
