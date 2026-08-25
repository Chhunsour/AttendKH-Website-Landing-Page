"use client";

import { useSite } from "@/lib/i18n";
import { PageHero, Pic, CtaBand } from "@/components/bits";

export function AboutView() {
  const { t } = useSite();
  const a = t.about;

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <PageHero kicker={a.kicker} title={a.title} sub={a.sub} />
        <Pic label={a.img} ratio="16 / 8" className="mt-14" />
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl leading-[1.15] text-ink">{t.home.workTitle}</h2>
          </div>
          <div className="space-y-5 text-[16px] leading-relaxed lg:col-span-7">
            {a.story.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">{a.valuesTitle}</h2>
          <div className="mt-12">
            {a.values.map((v) => (
              <div
                key={v.n}
                className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8"
              >
                <span className="font-mono text-[12px] text-zinc-400 md:col-span-1">{v.n}</span>
                <h3 className="font-serif text-[1.55rem] text-ink md:col-span-4">{v.t}</h3>
                <p className="max-w-lg text-[15px] leading-relaxed md:col-span-7">{v.d}</p>
              </div>
            ))}
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
            {a.facts.map(([k, v]) => (
              <div key={k} className="bg-paper px-6 py-7">
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-zinc-400">
                  {k}
                </dt>
                <dd className="font-mono mt-2 text-[1.35rem] text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
