import Link from "next/link";
import type { ReactNode } from "react";
import { useSite } from "@/lib/i18n";
import { Fade, Words } from "@/components/motion";

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{children}</p>
  );
}

export function Pic({
  label,
  ratio = "4 / 3",
  caption,
  className = "",
}: {
  label: string;
  ratio?: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div
        role="img"
        aria-label={label}
        style={{ aspectRatio: ratio }}
        className="flex w-full items-center justify-center border border-line bg-mist"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">
          {label}
        </span>
      </div>
      {caption ? (
        <figcaption className="mt-2.5 text-[12.5px] text-zinc-400">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  children,
  external,
}: {
  href: string;
  variant?: "primary" | "outline" | "light" | "ghost-light";
  children: ReactNode;
  external?: boolean;
}) {
  const cls =
    variant === "primary"
      ? "bg-ink text-white hover:bg-black"
      : variant === "outline"
        ? "border border-line bg-transparent text-ink hover:border-zinc-400"
        : variant === "light"
          ? "bg-white text-ink hover:bg-paper"
          : "border border-white/30 text-white hover:border-white/60";
  const clsFull = `inline-flex items-center justify-center px-5 py-2.5 text-[14px] font-medium transition-colors ${cls}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={clsFull}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={clsFull}>
      {children}
    </Link>
  );
}

export function PageHero({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="max-w-2xl">
      <Fade>
        <Kicker>{kicker}</Kicker>
      </Fade>
      <Words
        as="h1"
        text={title}
        className="font-serif mt-4 text-[2.6rem] leading-[1.08] tracking-[-0.01em] text-ink sm:text-6xl"
        delay={0.08}
      />
      <Fade delay={0.3}>
        <p className="mt-5 max-w-xl text-[16px] leading-relaxed">{sub}</p>
      </Fade>
    </div>
  );
}

export function CtaBand() {
  const { t } = useSite();
  const cta = t.home.cta;
  return (
    <section className="bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-20 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-lg">
          <Words as="h2" text={cta.title} className="font-serif text-4xl text-white sm:text-5xl" />
          <Fade delay={0.25}>
            <p className="mt-3 text-[15px] text-zinc-400">{cta.sub}</p>
          </Fade>
        </div>
        <Fade delay={0.35}>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/pricing" variant="light">
              {cta.primary}
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost-light">
              {cta.secondary}
            </ButtonLink>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[15px] leading-relaxed text-zinc-600">
      <span aria-hidden="true" className="mt-[9px] h-px w-4 shrink-0 bg-accent" />
      <span>{children}</span>
    </li>
  );
}
