"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useSite, type Lang, type Currency } from "@/lib/i18n";
import { ScrollProgress } from "@/components/motion";

export function Logo({ theme = "light" }: { theme?: "light" | "dark" }) {
  return (
    <span className="inline-flex items-center gap-2">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 21.5C12 21.5 4.5 15.6 4.5 9.9C4.5 5.8 7.9 2.5 12 2.5C16.1 2.5 19.5 5.8 19.5 9.9C19.5 15.6 12 21.5 12 21.5Z"
          stroke="#0052FF"
          strokeWidth="1.8"
        />
        <path
          d="M8.8 9.9L11.1 12.2L15.4 7.9"
          stroke="#0052FF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`text-[17px] font-semibold tracking-tight ${
          theme === "dark" ? "text-white" : "text-ink"
        }`}
      >
        Attend<span className="text-accent">KH</span>
      </span>
    </span>
  );
}

function LangToggle() {
  const { lang, setLang } = useSite();
  const item = (l: Lang, label: string) => (
    <button
      key={l}
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      className={`transition-colors ${
        lang === l ? "text-ink font-semibold" : "text-zinc-400 hover:text-zinc-600"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div className="flex items-center gap-1 text-[13px]" role="group" aria-label="Language">
      {item("en", "EN")}
      <span className="text-zinc-300" aria-hidden="true">
        /
      </span>
      {item("km", "ខ្មែរ")}
    </div>
  );
}

function CurrencyToggle() {
  const { currency, setCurrency } = useSite();
  const item = (c: Currency, label: string) => (
    <button
      key={c}
      onClick={() => setCurrency(c)}
      aria-pressed={currency === c}
      className={`font-mono text-[12px] transition-colors ${
        currency === c ? "text-ink font-semibold" : "text-zinc-400 hover:text-zinc-600"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div className="flex items-center gap-1" role="group" aria-label="Currency">
      {item("USD", "$")}
      <span className="text-zinc-300" aria-hidden="true">
        /
      </span>
      {item("KHR", "៛")}
    </div>
  );
}

export function Header() {
  const { t } = useSite();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  const links = [
    { href: "/attendance", label: t.nav.attendance },
    { href: "/payroll", label: t.nav.payroll },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <ScrollProgress />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="AttendKH home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[14px] transition-colors ${
                pathname === l.href
                  ? "text-ink underline decoration-accent underline-offset-[6px]"
                  : "text-zinc-500 hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <LangToggle />
          <CurrencyToggle />
          <span className="h-4 w-px bg-line" aria-hidden="true" />
          <a href="#" className="text-[14px] text-zinc-500 transition-colors hover:text-ink">
            {t.nav.signIn}
          </a>
          <Link
            href="/contact"
            className="bg-ink px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-black"
          >
            {t.nav.demo}
          </Link>
        </div>

        <button
          className="p-1.5 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="border-b border-line py-3 text-[15px] text-ink last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4">
              <LangToggle />
              <CurrencyToggle />
              <Link
                href="/contact"
                className="bg-ink px-4 py-2 text-[13px] font-medium text-white"
              >
                {t.nav.demo}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const { t } = useSite();
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-4 md:col-span-5">
            <Logo />
            <p className="max-w-xs text-[14px] leading-relaxed">{t.footer.tagline}</p>
            <div className="space-y-1 text-[13px] text-zinc-500">
              <p>{t.footer.address}</p>
              <p>
                <a href={`mailto:${t.footer.email}`} className="hover:text-ink">
                  {t.footer.email}
                </a>
              </p>
              <p>
                <a
                  href="https://t.me/attendkh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink"
                >
                  Telegram {t.footer.telegram}
                </a>
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">
              {t.footer.product}
            </h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li><Link href="/attendance" className="hover:text-ink">{t.nav.attendance}</Link></li>
              <li><Link href="/payroll" className="hover:text-ink">{t.nav.payroll}</Link></li>
              <li><Link href="/pricing" className="hover:text-ink">{t.nav.pricing}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">
              {t.footer.company}
            </h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li><Link href="/about" className="hover:text-ink">{t.nav.about}</Link></li>
              <li><Link href="/contact" className="hover:text-ink">{t.nav.contact}</Link></li>
              <li><Link href="/support" className="hover:text-ink">{t.footer.support}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">
              {t.footer.legalCol}
            </h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li><Link href="/privacy-policy" className="hover:text-ink">{t.footer.privacy}</Link></li>
              <li><Link href="/terms" className="hover:text-ink">{t.footer.terms}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
