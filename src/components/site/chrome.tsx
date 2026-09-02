"use client";

import Image from "next/image";
import Link from "next/link";
import { useSite, type Lang, type Currency } from "@/lib/i18n";
import { useCopy } from "@/components/site/ui";

export function Logo({ theme = "light" }: { theme?: "light" | "dark" }) {
  return (
    <span className="inline-flex items-center gap-2">
      <Image src="/logo.png" alt="" width={26} height={26} className="h-[26px] w-[26px]" />
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
      {item("zh", "中文")}
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

export { Header } from "@/components/home/header";

export function Footer() {
  const c = useCopy();
  const f = c.footer;
  const { publicSettings } = useSite();

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
    <footer className="bg-brand">
      {/* Wordmark band: painted in the page colour above so the brand-blue
          letters read here, then merge seamlessly into the blue footer body.
          ponytail: textLength + lengthAdjust fits the word to the viewport
          exactly at any width — no JS fitting, no clamp() guesswork. The
          viewBox height crops below the ink so the letters sink into the body. */}
      <div className="bg-paper">
        <svg
          viewBox="3.2 0 979.3 144"
          className="block w-full select-none font-display"
          role="img"
          aria-label="AttendKH"
        >
          <text
            x="0"
            y="150.4"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fontSize="210"
            fontWeight="700"
            fill="var(--color-brand)"
          >
            AttendKH
          </text>
        </svg>
      </div>
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo theme="dark" />
            <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-white/90">{f.tagline}</p>
            <address className="mt-5 space-y-1.5 text-[13.5px] not-italic text-white/90">
              <p>{f.address}</p>
              <p>
                <a href={`mailto:${publicSettings.contactEmail}`} className="hover:text-white">
                  {publicSettings.contactEmail}
                </a>
              </p>
              <p>
                <a
                  href={publicSettings.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-mono text-xs text-white/90"
                >
                  Telegram {f.telegram}
                </a>
              </p>
            </address>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="md:col-span-2">
              <h2 className="text-[13px] font-semibold text-white">{col.title}</h2>
              <ul className="mt-3.5 space-y-2.5">
                {col.links.map((l) => (
                  <li key={`${col.title}-${l.label}`}>
                    <Link href={l.href} className="text-[14px] text-white/90 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="md:col-span-2">
            <h2 className="text-[13px] font-semibold text-white">{f.solutionsCol}</h2>
            <ul className="mt-3.5 space-y-2.5">
              {solutionLinks.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-[14px] text-white/90 hover:text-white">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-[13px] text-white/90">
            <p>{f.rights}</p>
          </div>
          <p className="text-[13px] text-white/90">{f.madeIn}</p>
        </div>

        {/* Very bottom attribution */}
        <div className="mt-6 border-t border-white/15 pt-5 text-center">
          <p className="text-[11.5px] font-medium tracking-wide text-white/75 sm:text-[12px]">
            © 2026 AttendKH. All rights reserved. · Led by Mr. Ong Phaly
          </p>
        </div>
      </div>
    </footer>
  );
}
