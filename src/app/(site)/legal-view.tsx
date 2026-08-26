"use client";

import Link from "next/link";
import { useSite } from "@/lib/i18n";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import type { LegalDocument } from "@/lib/db/schema";
import { OpenCookieSettingsButton } from "@/components/site/cookie-banner";

type LegalKey = "privacy" | "terms" | "support" | "cookies";

export function LegalView({
  page,
  document,
}: {
  page: LegalKey;
  document?: LegalDocument | null;
}) {
  const { t, lang } = useSite();
  const isKm = lang === "km";
  const doc = (t.legal as Record<string, { title: string; updated: string; p1: string; p2: string; p3: string }>)[page] || t.legal.privacy;

  const legalNav = [
    { key: "privacy", label: isKm ? "គោលការណ៍ឯកជនភាព" : "Privacy Policy", href: "/privacy-policy" },
    { key: "terms", label: isKm ? "លក្ខខណ្ឌប្រើប្រាស់" : "Terms of Service", href: "/terms" },
    { key: "cookies", label: isKm ? "គោលការណ៍ Cookie" : "Cookie Policy", href: "/cookies" },
    { key: "trust", label: isKm ? "មជ្ឈមណ្ឌលសុវត្ថិភាព" : "Trust & Security", href: "/trust" },
  ];

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
          <div className="mx-auto max-w-4xl px-5 pt-28 pb-12 sm:px-8 sm:pt-32 sm:pb-16">
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

            {/* Legal Quick Nav Tabs */}
            <nav className="mt-8 flex flex-wrap gap-2" aria-label="Legal document navigation">
              {legalNav.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                    page === item.key
                      ? "bg-white text-brand shadow-xs"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-16">
          {page === "cookies" && (
            <div className="mb-10 rounded-2xl border border-blue-200 bg-brand-soft/30 p-6">
              <h3 className="font-display text-base font-bold text-ink">
                {isKm ? "គ្រប់គ្រងការយល់ព្រម Cookie របស់អ្នក" : "Manage Your Cookie Preferences"}
              </h3>
              <p className="mt-1 text-xs text-body">
                {isKm
                  ? "អ្នកអាចបើក ឬបិទ Cookie វិភាគទិន្នន័យបានគ្រប់ពេលវេលា"
                  : "You can modify your consent settings for optional performance and analytics cookies at any time."}
              </p>
              <div className="mt-4">
                <OpenCookieSettingsButton className="rounded-xl bg-brand px-5 py-2.5 text-xs font-semibold text-white hover:bg-brand-dark transition-colors cursor-pointer" />
              </div>
            </div>
          )}

          <div
            className="prose prose-slate max-w-none text-[15.5px] leading-relaxed text-body prose-headings:font-display prose-headings:font-bold prose-headings:text-ink prose-h2:mt-10 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl prose-a:text-brand prose-code:font-mono"
            dangerouslySetInnerHTML={{ __html: safeHtml }}
          />
        </article>
      </>
    );
  }

  // Fallback to static copy
  return (
    <>
      <section className="bg-brand">
        <div className="mx-auto max-w-4xl px-5 pt-28 pb-12 sm:px-8 sm:pt-32 sm:pb-16">
          <p className="font-mono text-[12px] text-blue-200">{doc.updated}</p>
          <h1 className="font-display mt-3 text-[2rem] font-bold leading-tight tracking-[-0.02em] text-white sm:text-[2.6rem]">
            {doc.title}
          </h1>

          <nav className="mt-8 flex flex-wrap gap-2" aria-label="Legal document navigation">
            {legalNav.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  page === item.key
                    ? "bg-white text-brand shadow-xs"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <article className="mx-auto max-w-4xl space-y-5 px-5 py-14 text-[15.5px] leading-relaxed text-body sm:px-8 sm:py-16">
        <p>{doc.p1}</p>
        <p>{doc.p2}</p>
        <p>{doc.p3}</p>
      </article>
    </>
  );
}
