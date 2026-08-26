"use client";

import { Plus } from "lucide-react";
import { useCopy, PageHero, Section, Reveal, CtaBand } from "@/components/site/ui";

export function FaqView() {
  const c = useCopy();
  const f = c.faq;

  return (
    <>
      <PageHero title={f.title} sub={f.sub} />

      <Section tone="white">
        <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
          {f.items.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i, 4) * 0.04}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <h2 className="text-[16px] font-semibold leading-snug text-ink">{item.q}</h2>
                  <span
                    aria-hidden="true"
                    className="faq-mark mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-body"
                  >
                    <Plus size={13} />
                  </span>
                </summary>
                <p className="mt-3 max-w-[65ch] text-[15px] leading-relaxed text-body">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand title={f.ctaTitle} />
    </>
  );
}
