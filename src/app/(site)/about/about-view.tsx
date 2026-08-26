"use client";

import { useCopy, PageHero, Section, SectionHead, ImageSlot, Reveal, CtaBand } from "@/components/site/ui";

export function AboutView() {
  const c = useCopy();
  const a = c.about;

  return (
    <>
      <PageHero title={a.title} sub={a.sub} />

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            {a.body.map((para, i) => (
              <Reveal key={para.slice(0, 24)} delay={i * 0.05}>
                <p className="text-[16px] leading-relaxed text-body">{para}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.06}>
            <ImageSlot label={a.image} ratio="4 / 3" />
          </Reveal>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHead title={a.valuesTitle} />
        <dl className="mt-10 grid gap-8 sm:grid-cols-3">
          {a.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div>
                <dt className="text-[16px] font-semibold text-ink">{v.title}</dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-body">{v.desc}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>

      <CtaBand title={a.ctaTitle} />
    </>
  );
}
