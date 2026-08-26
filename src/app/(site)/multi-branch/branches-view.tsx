"use client";

import { useCopy, PageHero, Section, SectionHead, FeatureList, ImageSlot, Reveal, CtaBand } from "@/components/site/ui";

export function BranchesView() {
  const c = useCopy();
  const b = c.branches;

  return (
    <>
      <PageHero title={b.title} sub={b.sub} />

      <Section tone="white">
        <ImageSlot label={b.heroImage} ratio="16 / 7" />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {b.tiers.map((t, i) => (
            <Reveal key={t.role} delay={i * 0.05}>
              <li>
                <span className="font-mono text-[13px] text-brand">0{i + 1}</span>
                <h3 className="mt-1.5 text-[16px] font-semibold text-ink">{t.role}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-body">{t.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead title={b.featuresTitle} />
            <FeatureList items={b.features} columns={2} />
          </div>
          <Reveal delay={0.06}>
            <ImageSlot label={b.splitImage} ratio="4 / 3" />
          </Reveal>
        </div>
      </Section>

      <CtaBand title={b.ctaTitle} />
    </>
  );
}
