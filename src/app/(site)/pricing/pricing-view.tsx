"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { formatUSD, formatKHR, usdToKhr } from "@/lib/currency";
import { useSite } from "@/lib/i18n";
import { useCopy, PageHero, Section, Reveal, Button, CtaBand } from "@/components/site/ui";
import type { PricingPlan } from "@/lib/db/schema";

const DEFAULT_ANNUAL_FACTOR = 10 / 12;

interface PricingViewProps {
  dynamicPlans?: PricingPlan[];
}

export function PricingView({ dynamicPlans }: PricingViewProps) {
  const c = useCopy();
  const p = c.pricing;
  const { currency } = useSite();
  const [annual, setAnnual] = useState(true);

  const price = (monthly: number, factor = DEFAULT_ANNUAL_FACTOR) => {
    const v = annual ? monthly * factor : monthly;
    return currency === "KHR"
      ? formatKHR(usdToKhr(v))
      : formatUSD(v, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const hasDynamic = dynamicPlans && dynamicPlans.length > 0;

  return (
    <>
      <PageHero title={p.title} sub={p.sub} />

      <Section tone="white">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-lg bg-mist p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              aria-pressed={!annual}
              className={`rounded px-4 py-2 text-[14px] font-semibold transition-colors ${
                !annual ? "bg-white text-ink shadow-sm" : "text-body hover:text-ink"
              }`}
            >
              {p.monthly}
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              aria-pressed={annual}
              className={`flex items-center gap-2 rounded px-4 py-2 text-[14px] font-semibold transition-colors ${
                annual ? "bg-white text-ink shadow-sm" : "text-body hover:text-ink"
              }`}
            >
              {p.annual}
              <span className="rounded bg-brand-soft px-1.5 py-0.5 text-[11.5px] font-semibold text-brand">
                {p.annualBadge}
              </span>
            </button>
          </div>
        </div>

        <div className={`mt-10 grid gap-6 ${hasDynamic && dynamicPlans.length > 3 ? "lg:grid-cols-4 md:grid-cols-2" : "lg:grid-cols-3"}`}>
          {hasDynamic
            ? dynamicPlans.map((plan, i) => {
                const popular = plan.is_popular === 1;
                return (
                  <Reveal key={plan.id} delay={i * 0.06}>
                    <article
                      className={`flex h-full flex-col rounded-xl border p-7 ${
                        popular ? "border-brand bg-brand-soft" : "border-line bg-paper"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h2 className="font-display text-[19px] font-bold text-ink">{plan.name}</h2>
                        {popular ? (
                          <span className="rounded bg-brand px-2 py-1 text-[11px] font-semibold text-white">
                            {plan.badge_text || p.popular}
                          </span>
                        ) : null}
                      </div>

                      <p className="mt-5 flex flex-wrap items-baseline gap-1.5">
                        <span className="font-mono text-[2.1rem] font-bold leading-none text-ink">
                          {price(Number(plan.price_monthly), plan.annual_factor || DEFAULT_ANNUAL_FACTOR)}
                        </span>
                        <span className="text-[13.5px] text-body">{p.perUser}</span>
                      </p>
                      <p className="mt-1.5 text-[12.5px] text-slate-500">
                        {annual ? p.billedAnnually : " "}
                      </p>
                      <p className="mt-4 text-[14px] font-medium text-ink">{plan.limits_text}</p>

                      <ul className="mt-5 flex-1 space-y-2.5">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-body">
                            <Check size={15} className="mt-1 shrink-0 text-brand" aria-hidden="true" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7">
                        <Button href={plan.cta_url || "/contact"} variant={popular ? "primary" : "outline"} className="w-full">
                          {plan.cta_text || (plan.slug === "enterprise" ? c.common.talkToSales : c.common.trial)}
                        </Button>
                      </div>
                    </article>
                  </Reveal>
                );
              })
            : p.plans.map((plan, i) => {
                const popular = plan.id === "growth";
                return (
                  <Reveal key={plan.id} delay={i * 0.06}>
                    <article
                      className={`flex h-full flex-col rounded-xl border p-7 ${
                        popular ? "border-brand bg-brand-soft" : "border-line bg-paper"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h2 className="font-display text-[19px] font-bold text-ink">{plan.name}</h2>
                        {popular ? (
                          <span className="rounded bg-brand px-2 py-1 text-[11px] font-semibold text-white">
                            {p.popular}
                          </span>
                        ) : null}
                      </div>

                      <p className="mt-5 flex flex-wrap items-baseline gap-1.5">
                        <span className="font-mono text-[2.1rem] font-bold leading-none text-ink">
                          {price(plan.priceMonthly)}
                        </span>
                        <span className="text-[13.5px] text-body">{p.perUser}</span>
                      </p>
                      <p className="mt-1.5 text-[12.5px] text-slate-500">
                        {annual ? p.billedAnnually : " "}
                      </p>
                      <p className="mt-4 text-[14px] font-medium text-ink">{plan.limit}</p>

                      <ul className="mt-5 flex-1 space-y-2.5">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-body">
                            <Check size={15} className="mt-1 shrink-0 text-brand" aria-hidden="true" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7">
                        <Button href="/contact" variant={popular ? "primary" : "outline"} className="w-full">
                          {plan.id === "enterprise" ? c.common.talkToSales : c.common.trial}
                        </Button>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[14px] leading-relaxed text-slate-500">
          {p.note}
        </p>
      </Section>

      <CtaBand title={p.ctaTitle} sub={p.ctaSub} />
    </>
  );
}
