"use client";

import Link from "next/link";
import { useSite } from "@/lib/i18n";
import { Kicker, Pic, ButtonLink, CheckItem, CtaBand } from "@/components/bits";
import { Fade, Words, DrawnRule, Wipe, CountUp } from "@/components/motion";

export function HomeView() {
  const { t } = useSite();
  const h = t.home;

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <Fade>
          <Kicker>{h.kicker}</Kicker>
        </Fade>
        <Words
          as="h1"
          text={`${h.titleA} ${h.titleAccent}`}
          className="font-serif mt-5 max-w-3xl text-[2.9rem] leading-[1.05] tracking-[-0.01em] text-ink sm:text-[4.4rem]"
          delay={0.1}
        />
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Fade delay={0.35}>
            <p className="max-w-md text-[16.5px] leading-relaxed">{h.sub}</p>
          </Fade>
          <Fade delay={0.45}>
            <div className="flex flex-wrap items-center gap-4">
              <ButtonLink href="/pricing">{t.common.trial}</ButtonLink>
              <Link
                href="/attendance"
                className="text-[14px] font-medium text-ink underline decoration-line underline-offset-[6px] transition-colors hover:decoration-accent"
              >
                {t.common.seeHow} →
              </Link>
            </div>
          </Fade>
        </div>
        <Wipe delay={0.3} className="mt-14">
          <Pic label={h.imgLabel} ratio="16 / 8" caption={h.imgCaption} />
        </Wipe>
        <Fade delay={0.5}>
          <p className="mt-3 text-[12.5px] text-zinc-400">{t.common.trialNote}</p>
        </Fade>
      </section>

      {/* Trusted marquee */}
      <section className="marquee-paused overflow-hidden border-y border-line" aria-label={h.trustedLabel}>
        <div className="flex w-max animate-marquee items-center py-5">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
              <span className="whitespace-nowrap px-8 font-mono text-[10.5px] uppercase tracking-[0.18em] text-zinc-400">
                {h.trustedLabel}
              </span>
              {h.trusted.map((name) => (
                <span key={`${copy}-${name}`} className="flex items-center whitespace-nowrap">
                  <span className="px-8 text-[13.5px] font-medium text-zinc-500">{name}</span>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-zinc-300" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Three jobs */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Fade>
          <Kicker>{h.workKicker}</Kicker>
        </Fade>
        <Words
          text={h.workTitle}
          className="font-serif mt-4 max-w-xl text-4xl leading-[1.1] text-ink sm:text-5xl"
          delay={0.08}
        />

        <div className="mt-14">
          {h.work.map((item, i) => (
            <div key={item.n} className="py-10">
              <DrawnRule />
              <div className="grid items-center gap-8 pt-10 md:grid-cols-12 md:gap-12">
                <div className="md:col-span-5">
                  <Fade delay={0.05}>
                    <span className="font-mono text-[12px] text-zinc-400">{item.n}</span>
                  </Fade>
                  <Fade delay={0.12}>
                    <h3 className="font-serif mt-2 text-[1.7rem] leading-tight text-ink">{item.t}</h3>
                  </Fade>
                  <Fade delay={0.2}>
                    <p className="mt-3 max-w-sm text-[15px] leading-relaxed">{item.d}</p>
                  </Fade>
                </div>
                <div className="md:col-span-7">
                  <Wipe delay={0.1 + i * 0.05}>
                    <Pic label={item.img} ratio="16 / 9" />
                  </Wipe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Attendance split */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <DrawnRule />
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
          <div>
            <Fade>
              <Kicker>{h.featA.kicker}</Kicker>
            </Fade>
            <Words
              text={h.featA.title}
              className="font-serif mt-4 text-4xl leading-[1.1] text-ink sm:text-[2.9rem]"
              delay={0.08}
            />
            <ul className="mt-8 space-y-3.5">
              {h.featA.bullets.map((b, i) => (
                <Fade key={b} delay={0.15 + i * 0.07}>
                  <CheckItem>{b}</CheckItem>
                </Fade>
              ))}
            </ul>
          </div>
          <Wipe delay={0.15}>
            <Pic label={h.featA.img} ratio="4 / 3" caption={h.featA.caption} />
          </Wipe>
        </div>
      </section>

      {/* Payroll split */}
      <section>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <DrawnRule />
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
          <Wipe delay={0.15} className="order-last lg:order-first">
            <Pic label={h.featB.img} ratio="4 / 3" />
          </Wipe>
          <div>
            <Fade>
              <Kicker>{h.featB.kicker}</Kicker>
            </Fade>
            <Words
              text={h.featB.title}
              className="font-serif mt-4 text-4xl leading-[1.1] text-ink sm:text-[2.9rem]"
              delay={0.08}
            />
            <Fade delay={0.2}>
              <p className="font-mono mt-6 inline-block border border-line bg-white px-4 py-2.5 text-[13px] text-ink">
                {h.featB.formula}
              </p>
            </Fade>
            <ul className="mt-8 space-y-3.5">
              {h.featB.bullets.map((b, i) => (
                <Fade key={b} delay={0.15 + i * 0.07}>
                  <CheckItem>{b}</CheckItem>
                </Fade>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-line px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
          {h.metrics.map((m, i) => (
            <Fade key={m.l} delay={i * 0.1}>
              <div className="px-0 py-10 text-center md:px-8">
                <p className="font-mono text-4xl tracking-tight text-ink sm:text-5xl">
                  <CountUp value={parseFloat(m.v)} suffix={m.v.replace(/[\d.]/g, "")} />
                </p>
                <p className="mt-2 text-[13.5px] text-zinc-500">{m.l}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <DrawnRule className="mx-auto max-w-xs" />
        <Words
          as="blockquote"
          text={`“${h.quote.text}”`}
          className="font-serif mt-12 text-[1.8rem] leading-[1.3] text-ink sm:text-[2.3rem]"
          stagger={0.02}
        />
        <Fade delay={0.3}>
          <div className="mt-8 flex items-center justify-center gap-3.5">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center border border-line bg-mist font-mono text-[12px] text-ink"
            >
              DC
            </span>
            <span className="text-left">
              <span className="block text-[14px] font-medium text-ink">{h.quote.name}</span>
              <span className="block text-[12.5px] text-zinc-400">{h.quote.role}</span>
            </span>
          </div>
        </Fade>
      </section>

      <CtaBand />
    </>
  );
}
