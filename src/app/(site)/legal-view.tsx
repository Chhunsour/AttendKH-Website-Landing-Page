"use client";

import { useSite } from "@/lib/i18n";

type LegalKey = "privacy" | "terms" | "support";

export function LegalView({ page }: { page: LegalKey }) {
  const { t } = useSite();
  const doc = t.legal[page];

  return (
    <article className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400">
        {doc.updated}
      </p>
      <h1 className="font-serif mt-3 text-4xl text-ink sm:text-5xl">{doc.title}</h1>
      <div className="mt-8 space-y-5 text-[15.5px] leading-relaxed">
        <p>{doc.p1}</p>
        <p>{doc.p2}</p>
        <p>{doc.p3}</p>
      </div>
    </article>
  );
}
