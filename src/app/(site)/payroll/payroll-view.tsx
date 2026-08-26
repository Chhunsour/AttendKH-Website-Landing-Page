"use client";

import { useCopy, PageHero, Section, SectionHead, FeatureList, ImageSlot, Reveal, CtaBand } from "@/components/site/ui";
import { PayrollSimulator } from "@/components/site/simulator";

export function PayrollView() {
  const c = useCopy();
  const p = c.payroll;

  return (
    <>
      <PageHero title={p.title} sub={p.sub}>
        <p className="mt-6 inline-block rounded-lg bg-white/15 px-4 py-2.5 font-mono text-[13.5px] text-white">
          {p.formulaLabel} = {p.formula}
        </p>
      </PageHero>

      <Section tone="white">
        <ImageSlot label={p.heroImage} ratio="16 / 7" />
        <FeatureList items={p.features} />
      </Section>

      <Section tone="mist">
        <SectionHead title={p.simTitle} sub={p.simSub} />
        <Reveal delay={0.06}>
          <div className="mt-10">
            <PayrollSimulator />
          </div>
        </Reveal>
      </Section>

      <CtaBand title={p.ctaTitle} />
    </>
  );
}
