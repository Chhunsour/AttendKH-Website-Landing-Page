"use client";

import Link from "next/link";
import { useSite, type Lang, type Currency } from "@/lib/i18n";
import { useCopy } from "@/components/site/ui";

export function Logo({ theme = "light" }: { theme?: "light" | "dark" }) {
  return (
    <span className="inline-flex items-center gap-2">
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 29.5S6 20.4 6 13.3A10 10 0 0 1 26 13.3C26 20.4 16 29.5 16 29.5Z"
          fill={theme === "dark" ? "#ffffff" : "#0052FF"}
        />
        <path
          d="M12 13.2l2.9 2.9 5.3-5.5"
          stroke={theme === "dark" ? "#0052FF" : "#ffffff"}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`font-display text-[18px] font-bold tracking-tight ${
          theme === "dark" ? "text-white" : "text-ink"
        }`}
      >
        AttendKH
      </span>
    </span>
  );
}

function LangToggle() {
  const { lang, setLang } = useSite();
  const c = useCopy();
  const item = (l: Lang, label: string) => (
    <button
      key={l}
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      className={`whitespace-nowrap rounded px-2 py-1 text-[12.5px] font-semibold transition-colors ${
        lang === l ? "bg-white text-ink shadow-sm" : "text-slate-500 hover:text-ink"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div role="group" aria-label={c.nav.language} className="flex items-center rounded-lg bg-mist p-0.5">
      {item("en", "EN")}
      {item("km", "ខ្មែរ")}
    </div>
  );
}

function CurrencyToggle() {
  const { currency, setCurrency } = useSite();
  const c = useCopy();
  const item = (cur: Currency, label: string) => (
    <button
      key={cur}
      type="button"
      onClick={() => setCurrency(cur)}
      aria-pressed={currency === cur}
      aria-label={cur}
      className={`whitespace-nowrap rounded px-2 py-1 font-mono text-[12.5px] font-semibold transition-colors ${
        currency === cur ? "bg-white text-ink shadow-sm" : "text-slate-500 hover:text-ink"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div role="group" aria-label={c.nav.currency} className="flex items-center rounded-lg bg-mist p-0.5">
      {item("USD", "$")}
      {item("KHR", "៛")}
    </div>
  );
}

import { OpenCookieSettingsButton } from "@/components/site/cookie-banner";
export { Header } from "@/components/home/header";

export function Footer() {
  const c = useCopy();
  const f = c.footer;

  const columns = [
    {
      title: f.productCol,
      links: [
        { label: c.nav.attendance, href: "/attendance" },
        { label: c.nav.payroll, href: "/payroll" },
        { label: c.nav.branches, href: "/multi-branch" },
        { label: c.nav.pricing, href: "/pricing" },
      ],
    },
    {
      title: f.companyCol,
      links: [
        { label: "About", href: "/about" },
        { label: "HR Guides & Blog", href: "/blog" },
        { label: c.nav.customers, href: "/customers" },
        { label: "Book a Demo", href: "/contact" },
        { label: "Support Center", href: "/support" },
      ],
    },
    {
      title: f.legalCol,
      links: [
        { label: "Trust & Security", href: "/trust" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Admin Portal", href: "/admin" },
      ],
    },
  ];

  const solutionLinks = [
    { label: "Restaurants & Cafes", href: "/solutions/restaurants-cafes" },
    { label: "Retail & Boutiques", href: "/solutions/retail" },
    { label: "Hotels & Hospitality", href: "/solutions/hospitality" },
    { label: "Construction & Logistics", href: "/solutions/construction-logistics" },
  ];

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-body">{f.tagline}</p>
            <address className="mt-5 space-y-1.5 text-[13.5px] not-italic text-slate-500">
              <p>{f.address}</p>
              <p>
                <a href={`mailto:${f.email}`} className="hover:text-ink">
                  {f.email}
                </a>
              </p>
              <p>
                <a
                  href="https://t.me/attendkh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink font-mono text-xs text-brand"
                >
                  Telegram {f.telegram}
                </a>
              </p>
            </address>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="md:col-span-2">
              <h2 className="text-[13px] font-semibold text-ink">{col.title}</h2>
              <ul className="mt-3.5 space-y-2.5">
                {col.links.map((l) => (
                  <li key={`${col.title}-${l.label}`}>
                    <Link href={l.href} className="text-[14px] text-body hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="md:col-span-2">
            <h2 className="text-[13px] font-semibold text-ink">{f.solutionsCol}</h2>
            <ul className="mt-3.5 space-y-2.5">
              {solutionLinks.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-[14px] text-body hover:text-ink">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-[13px] text-slate-500">
            <p>{f.rights}</p>
            <span>•</span>
            <OpenCookieSettingsButton className="text-[13px] text-slate-500 hover:text-ink underline underline-offset-2" />
          </div>
          <p className="text-[13px] text-slate-500">{f.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
