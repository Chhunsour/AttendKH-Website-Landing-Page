"use client";

import { useSite } from "@/lib/i18n";
import { PageHero, Pic, CtaBand, CheckItem, ButtonLink } from "@/components/bits";

export function AttendanceView() {
  const { t } = useSite();
  const a = t.attendance;

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <PageHero kicker={a.kicker} title={a.title} sub={a.sub} />
        <div className="mt-12 flex items-center gap-4">
          <ButtonLink href="/pricing">{t.common.trial}</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            {t.nav.demo}
          </ButtonLink>
        </div>
        <Pic label={a.heroImg} ratio="16 / 8" className="mt-14" />
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-px bg-line px-0 sm:grid-cols-2 lg:grid-cols-4">
          {a.points.map((p, i) => (
            <div key={p.t} className="bg-paper px-6 py-10 sm:px-8">
              <span className="font-mono text-[11px] text-zinc-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif mt-3 text-[1.35rem] leading-snug text-ink">{p.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
        <div>
          <h2 className="font-serif max-w-md text-3xl leading-[1.15] text-ink sm:text-4xl">
            {t.home.featA.title}
          </h2>
          <ul className="mt-8 space-y-3.5">
            {t.home.featA.bullets.map((b) => (
              <CheckItem key={b}>{b}</CheckItem>
            ))}
          </ul>
          <dl className="mt-10 border-t border-line">
            <div className="flex justify-between border-b border-line py-3">
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                {a.specsTitle}
              </dt>
              <dd aria-hidden="true" />
            </div>
            {a.specs.map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-line py-3 text-[14px]">
                <dt className="text-zinc-500">{k}</dt>
                <dd className="font-mono text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Pic label={a.galleryImg} ratio="4 / 3" caption={a.galleryCaption} />
      </section>

      <CtaBand />
    </>
  );
}
