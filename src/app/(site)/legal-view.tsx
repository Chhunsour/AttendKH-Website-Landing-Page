"use client";

import { useSite } from "@/lib/i18n";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import type { LegalDocument } from "@/lib/db/schema";

type LegalKey = "privacy" | "terms" | "support";

export function LegalView({
  page,
  document,
}: {
  page: LegalKey;
  document?: LegalDocument | null;
}) {
  const { t } = useSite();
  const doc = t.legal[page];

  // If document from database is present, render it
  if (document) {
    const rawHtml = marked.parse(document.content || "") as string;
    const safeHtml = sanitizeHtml(rawHtml, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        "h1",
        "h2",
        "h3",
        "h4",
        "span",
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
      ]),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        span: ["class"],
      },
    });

    const dateStr = document.created_at
      ? new Date(document.created_at).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : "August 2026";

    return (
      <>
        <section className="bg-brand">
          <div className="mx-auto max-w-3xl px-5 pt-28 pb-12 sm:px-8 sm:pt-32 sm:pb-16">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[12px] text-blue-200">
                Last updated: {dateStr}
              </span>
              <span className="rounded bg-white/20 px-2 py-0.5 font-mono text-[11px] font-bold text-white">
                v{document.version}
              </span>
            </div>
            <h1 className="font-display mt-3 text-[2rem] font-bold leading-tight tracking-[-0.02em] text-white sm:text-[2.6rem]">
              {document.title}
            </h1>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
          <div
            className="prose prose-slate max-w-none text-[16px] leading-relaxed text-body prose-headings:font-display prose-headings:font-bold prose-headings:text-ink prose-h2:mt-10 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl prose-a:text-brand prose-code:font-mono"
            dangerouslySetInnerHTML={{ __html: safeHtml }}
          />
        </article>
      </>
    );
  }

  // Fallback to static i18n copy
  return (
    <>
      <section className="bg-brand">
        <div className="mx-auto max-w-3xl px-5 pt-28 pb-12 sm:px-8 sm:pt-32 sm:pb-16">
          <p className="font-mono text-[12px] text-blue-200">{doc.updated}</p>
          <h1 className="font-display mt-3 text-[2rem] font-bold leading-tight tracking-[-0.02em] text-white sm:text-[2.6rem]">
            {doc.title}
          </h1>
        </div>
      </section>
      <article className="mx-auto max-w-3xl space-y-5 px-5 py-14 text-[16px] leading-relaxed text-body sm:px-8 sm:py-16">
        <p>{doc.p1}</p>
        <p>{doc.p2}</p>
        <p>{doc.p3}</p>
      </article>
    </>
  );
}
