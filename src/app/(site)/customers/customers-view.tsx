"use client";

import { useCopy, PageHero, Section, ImageSlot, Reveal, CtaBand } from "@/components/site/ui";

export function CustomersView() {
  const c = useCopy();
  const cu = c.customers;

  return (
    <>
      <PageHero title={cu.title} sub={cu.sub} />

      <Section tone="white">
        <ImageSlot label={cu.image} ratio="16 / 7" />
        <dl className="mt-12 grid gap-8 sm:grid-cols-3">
          {cu.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="font-display block text-[2.4rem] font-bold leading-none text-brand">
                    {s.value}
                  </span>
                  <span className="mt-2 block text-[14.5px] text-body">{s.label}</span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section tone="mist">
        <div className="grid gap-8 lg:grid-cols-3">
          {cu.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <figure className="flex h-full flex-col rounded-xl border border-line bg-paper p-7">
                <blockquote className="flex-1 text-[16px] leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-5">
                  <span className="block text-[14.5px] font-semibold text-ink">{t.name}</span>
                  <span className="block text-[13.5px] text-body">{t.role}</span>
                  <span className="block text-[13px] text-slate-500">{t.company}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand title={cu.ctaTitle} />
    </>
  );
}
