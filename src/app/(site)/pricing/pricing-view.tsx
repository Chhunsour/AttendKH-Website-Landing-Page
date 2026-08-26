"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { formatUSD, formatKHR, usdToKhr } from "@/lib/currency";
import { useSite } from "@/lib/i18n";
import {
  useCopy,
  PageHero,
  Section,
  SectionHead,
  DirectAnswerBlock,
  Reveal,
  Button,
  CtaBand,
} from "@/components/site/ui";
import type { PricingPlan } from "@/lib/db/schema";

const DEFAULT_ANNUAL_FACTOR = 10 / 12;

const isUnsupportedFeature = (feat: string) => {
  const lower = feat.toLowerCase();
  return (
    lower.includes("99.9%") ||
    lower.includes("uptime sla") ||
    lower.includes("sla guarantee") ||
    lower.includes("guarantee") ||
    lower.includes("100% compliant")
  );
};

interface PricingViewProps {
  dynamicPlans?: PricingPlan[];
}

export function PricingView({ dynamicPlans }: PricingViewProps) {
  const c = useCopy();
  const p = c.pricing;
  const { currency, lang } = useSite();
  const isKm = lang === "km";
  const [annual, setAnnual] = useState(true);

  const price = (monthly: number, factor = DEFAULT_ANNUAL_FACTOR) => {
    const v = annual ? monthly * factor : monthly;
    return currency === "KHR"
      ? formatKHR(usdToKhr(v))
      : formatUSD(v, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const hasDynamic = dynamicPlans && dynamicPlans.length > 0;

  const pricingFaqs = [
    {
      q: isKm ? "តើខ្ញុំអាចទូទាត់ជាប្រាក់រៀល (KHR) បានទេ?" : "Can we pay in Cambodian Riel (KHR)?",
      a: isKm
        ? "បាន។ យើងគាំទ្រការទូទាត់ទាំងប្រាក់ដុល្លារអាមេរិក ($) និងប្រាក់រៀល (៛) តាមរយៈការផ្ទេរធនាគារក្នុងស្រុក (ABA, ACLEDA, Bakong) ឬវិក្កយបត្រផ្លូវការ។"
        : "Yes. Invoices can be settled in either USD ($) or KHR (៛) via local bank transfer (ABA, ACLEDA, Bakong QR) or corporate wire.",
    },
    {
      q: isKm ? "តើមានគិតកម្រៃបន្ថែមលើចំនួនសាខាដែរឬទេ?" : "Is there an extra charge per branch?",
      a: isKm
        ? "គ្មានទេ។ តម្លៃគិតតាមចំនួនបុគ្គលិកសរុបតែប៉ុណ្ណោះ។ អ្នកអាចបន្ថែមសាខាបានដោយមិនគិតថ្លៃបន្ថែមលើគម្រោង Growth និង Enterprise។"
        : "No. Pricing is strictly per-user per-month. You can connect as many physical branches as you operate without branch-level surcharges on Growth and Enterprise plans.",
    },
    {
      q: isKm ? "តើការសាកល្បងឥតគិតថ្លៃដំណើរការយ៉ាងដូចម្តេច?" : "How does the 14-day free trial work?",
      a: isKm
        ? "អ្នកអាចប្រើប្រាស់មុខងារទាំងអស់ដោយឥតគិតថ្លៃរយៈពេល ១៤ ថ្ងៃ ដោយមិនចាំបាច់បញ្ចូលកាតធនាគារឡើយ។ ក្រុមការងារយើងនឹងជួយរៀបចំសាខាដំបូងរបស់អ្នក។"
        : "You can start a 14-day trial without entering payment details. Our Phnom Penh team can help configure your first branches and roster.",
    },
  ];

  return (
    <>
      <PageHero title={p.title} sub={p.sub} />

      <Section tone="white">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-xl bg-mist p-1.5 border border-line">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              aria-pressed={!annual}
              className={`rounded-lg px-5 py-2.5 text-[14px] font-semibold transition-all ${
                !annual ? "bg-white text-ink shadow-xs" : "text-body hover:text-ink"
              }`}
            >
              {p.monthly}
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              aria-pressed={annual}
              className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-[14px] font-semibold transition-all ${
                annual ? "bg-white text-ink shadow-xs" : "text-body hover:text-ink"
              }`}
            >
              <span>{p.annual}</span>
              <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[11px] font-bold text-brand uppercase">
                {p.annualBadge}
              </span>
            </button>
          </div>
        </div>

        <div className={`mt-12 grid gap-6 ${hasDynamic && dynamicPlans.length > 3 ? "lg:grid-cols-4 md:grid-cols-2" : "lg:grid-cols-3"}`}>
          {hasDynamic
            ? dynamicPlans.map((plan, i) => {
                const popular = plan.is_popular === 1;
                const safeFeatures = plan.features.filter((f) => !isUnsupportedFeature(f));
                return (
                  <Reveal key={plan.id} delay={i * 0.06}>
                    <article
                      className={`flex h-full flex-col justify-between rounded-2xl border p-7 transition-all ${
                        popular
                          ? "border-brand bg-brand-soft/20 shadow-md ring-2 ring-brand/20"
                          : "border-line bg-paper shadow-xs hover:border-slate-300"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <h2 className="font-display text-[20px] font-bold text-ink">{plan.name}</h2>
                          {popular ? (
                            <span className="rounded-full bg-brand px-2.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider">
                              {plan.badge_text || p.popular}
                            </span>
                          ) : null}
                        </div>

                        <p className="mt-5 flex flex-wrap items-baseline gap-1.5">
                          <span className="font-mono text-[2.2rem] font-extrabold leading-none text-ink">
                            {price(Number(plan.price_monthly), plan.annual_factor || DEFAULT_ANNUAL_FACTOR)}
                          </span>
                          <span className="text-[13.5px] font-medium text-body">{p.perUser}</span>
                        </p>
                        <p className="mt-1 text-[12px] text-slate-500 font-mono">
                          {annual ? p.billedAnnually : "Billed monthly"}
                        </p>
                        <p className="mt-4 text-[13.5px] font-semibold text-brand">{plan.limits_text}</p>

                        <ul className="mt-5 space-y-3 border-t border-line/60 pt-5">
                          {safeFeatures.map((f) => (
                            <li key={f} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-body">
                              <Check size={16} className="mt-0.5 shrink-0 text-brand font-bold" aria-hidden="true" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8">
                        <Button
                          href={plan.cta_url || "/contact"}
                          variant={popular ? "primary" : "outline"}
                          className="w-full"
                        >
                          {plan.cta_text || (plan.slug === "enterprise" ? c.common.talkToSales : c.common.trial)}
                        </Button>
                      </div>
                    </article>
                  </Reveal>
                );
              })
            : p.plans.map((plan, i) => {
                const popular = plan.id === "growth";
                const safeFeatures = plan.features.filter((f) => !isUnsupportedFeature(f));
                return (
                  <Reveal key={plan.id} delay={i * 0.06}>
                    <article
                      className={`flex h-full flex-col justify-between rounded-2xl border p-7 transition-all ${
                        popular
                          ? "border-brand bg-brand-soft/20 shadow-md ring-2 ring-brand/20"
                          : "border-line bg-paper shadow-xs hover:border-slate-300"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <h2 className="font-display text-[20px] font-bold text-ink">{plan.name}</h2>
                          {popular ? (
                            <span className="rounded-full bg-brand px-2.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider">
                              {p.popular}
                            </span>
                          ) : null}
                        </div>

                        <p className="mt-5 flex flex-wrap items-baseline gap-1.5">
                          <span className="font-mono text-[2.2rem] font-extrabold leading-none text-ink">
                            {price(plan.priceMonthly)}
                          </span>
                          <span className="text-[13.5px] font-medium text-body">{p.perUser}</span>
                        </p>
                        <p className="mt-1 text-[12px] text-slate-500 font-mono">
                          {annual ? p.billedAnnually : "Billed monthly"}
                        </p>
                        <p className="mt-4 text-[13.5px] font-semibold text-brand">{plan.limit}</p>

                        <ul className="mt-5 space-y-3 border-t border-line/60 pt-5">
                          {safeFeatures.map((f) => (
                            <li key={f} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-body">
                              <Check size={16} className="mt-0.5 shrink-0 text-brand font-bold" aria-hidden="true" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8">
                        <Button
                          href="/contact"
                          variant={popular ? "primary" : "outline"}
                          className="w-full"
                        >
                          {plan.id === "enterprise" ? c.common.talkToSales : c.common.trial}
                        </Button>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-[13.5px] leading-relaxed text-slate-500">
          {p.note}
        </p>
      </Section>

      {/* Direct Answer Block for AEO / GEO */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <DirectAnswerBlock
            question={
              isKm
                ? "តើ AttendKH មានតម្លៃប៉ុន្មានសម្រាប់អាជីវកម្មនៅកម្ពុជា?"
                : "How much does AttendKH cost for businesses in Cambodia?"
            }
            answer={
              isKm
                ? "AttendKH គិតតម្លៃតាមអ្នកប្រើសកម្មម្នាក់ ដោយមានជម្រើសទូទាត់ប្រចាំខែ និងប្រចាំឆ្នាំ។ កាតគម្រោងខាងលើបង្ហាញតម្លៃ និងមុខងារបច្ចុប្បន្នសម្រាប់ Starter, Growth, Scale និង Enterprise។"
                : "AttendKH prices plans per active user, with monthly and annual billing choices. The plan cards above show the current prices, limits, and included features for Starter, Growth, Scale, and Enterprise."
            }
            facts={[
              {
                label: isKm ? "មូលដ្ឋានតម្លៃ" : "Pricing Basis",
                value: isKm ? "តាមអ្នកប្រើសកម្ម" : "Per Active User",
              },
              {
                label: isKm ? "ជម្រើសទូទាត់" : "Billing Choices",
                value: isKm ? "ប្រចាំខែ ឬប្រចាំឆ្នាំ" : "Monthly or Annual",
              },
              {
                label: isKm ? "តម្លៃបច្ចុប្បន្ន" : "Current Rates",
                value: isKm ? "មើលកាតគម្រោងខាងលើ" : "See Plan Cards Above",
              },
            ]}
          />

          {/* Pricing FAQ */}
          <div className="mt-12">
            <SectionHead
              title={isKm ? "សំណួរទាក់ទងនឹងតម្លៃ និងការទូទាត់" : "Frequently Asked Questions About Pricing"}
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {pricingFaqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-line bg-paper p-6 shadow-xs">
                  <h4 className="font-display text-[15px] font-bold text-ink">{faq.q}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-body">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CtaBand title={p.ctaTitle} sub={p.ctaSub} />
    </>
  );
}
