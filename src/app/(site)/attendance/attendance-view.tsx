"use client";

import { useCopy, PageHero, Section, SectionHead, FeatureList, ImageSlot, Reveal, CtaBand } from "@/components/site/ui";

export function AttendanceView() {
  const c = useCopy();
  const a = c.attendance;

  return (
    <>
      <PageHero title={a.title} sub={a.sub} />

      <Section tone="white">
        <ImageSlot label={a.heroImage} ratio="16 / 7" />
        <FeatureList items={a.features} />
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHead title={a.splitTitle} sub={a.splitDesc} />
          </div>
          <Reveal delay={0.06}>
            <ImageSlot label={a.splitImage} ratio="4 / 3" />
          </Reveal>
        </div>
      </Section>

      <CtaBand title={a.ctaTitle} />
    </>
  );
}
