"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, ChevronDown, ClipboardCheck, Menu, WalletCards, X, ArrowRight } from "lucide-react";
import { useSite, type Lang } from "@/lib/i18n";
import { useHomeCopy } from "@/components/home/parts";

const SHELL = "mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:px-14";

/* ------------------------------- logo ------------------------------- */

function Mark({ solid }: { solid: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image src="/logo.png" alt="" width={28} height={28} priority className="h-7 w-7" />
      <span
        className={`text-[19px] font-extrabold tracking-tight transition-colors duration-300 ease-out ${
          solid ? "text-[#0052FF]" : "text-white"
        }`}
      >
        AttendKH
      </span>
    </span>
  );
}

function ProductIcon({ href }: { href: string }) {
  const Icon = href === "/attendance" ? ClipboardCheck : href === "/payroll" ? WalletCards : Building2;
  return <Icon size={18} strokeWidth={2} aria-hidden="true" />;
}

/* --------------------------- language switch --------------------------- */

function LangSwitch({ solid, block }: { solid: boolean; block?: boolean }) {
  const { lang, setLang } = useSite();
  const c = useHomeCopy();

  const item = (l: Lang, label: string) => (
    <button
      key={l}
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      className={`rounded-full px-2.5 py-1.5 text-[12px] font-semibold leading-none transition-colors ${
        lang === l
          ? solid
            ? "bg-white text-[#141414] shadow-sm"
            : "bg-white text-[#141414]"
          : solid
            ? "text-[#7A7A7A] hover:text-[#141414]"
            : "text-white/70 hover:text-white"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div
      role="group"
      aria-label={c.nav.language}
      className={`flex items-center rounded-full p-0.5 transition-colors ${block ? "w-fit" : ""} ${
        solid ? "bg-[#F1F1F1]" : "bg-white/15"
      }`}
    >
      {item("en", "EN")}
      {item("km", "ខ្មែរ")}
      {item("zh", "中文")}
    </div>
  );
}

/* ---------------------------- product menu ---------------------------- */

function ProductMenu({ solid }: { solid: boolean }) {
  const c = useHomeCopy();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isProductActive = c.nav.productItems.some(
    (item) => pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`))
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const hoverOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hoverClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div ref={wrap} className="relative" onMouseEnter={hoverOpen} onMouseLeave={hoverClose}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 text-[14px] transition-colors duration-300 ease-out ${
          solid
            ? isProductActive
              ? "font-semibold text-[#0052FF]"
              : "font-medium text-[#5C5C5C] hover:text-[#141414]"
            : isProductActive
              ? "font-semibold text-white underline underline-offset-4"
              : "font-medium text-white/85 hover:text-white"
        }`}
      >
        {c.nav.product}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-[min(360px,calc(100vw-2rem))] -translate-x-1/2 pt-3">
          <div className="overflow-hidden rounded-2xl border border-[#E6EAF2] bg-white p-2 shadow-[0_18px_48px_rgba(15,23,42,0.16)]">
            {c.nav.productItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-3.5 transition-colors ${
                    isActive ? "bg-[#EFF4FF]" : "hover:bg-[#F7F9FC]"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isActive
                        ? "bg-[#DCE8FF] text-[#0052FF]"
                        : "bg-[#F1F5FE] text-[#6D8EDB] group-hover:bg-[#E6EEFF] group-hover:text-[#0052FF]"
                    }`}
                  >
                    <ProductIcon href={item.href} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block text-[14px] font-semibold ${
                        isActive ? "text-[#0052FF]" : "text-[#141414]"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-[12.5px] leading-snug text-[#8A8A8A]">
                      {item.desc}
                    </span>
                  </span>
                  <ArrowRight
                    size={15}
                    className={`shrink-0 transition-all duration-200 group-hover:translate-x-0.5 ${
                      isActive ? "text-[#0052FF]" : "text-[#C4C4C4] group-hover:text-[#2563EB]"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------- header ------------------------------- */

export function Header() {
  const c = useHomeCopy();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileSheetRef = useRef<HTMLDivElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        const top = window.scrollY;
        setScrolled((prev) => (prev ? top > 18 : top > 36));
        rafId = null;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      mobileCloseRef.current?.focus();
    }
    document.body.style.overflow = open ? "hidden" : "";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!open) return;
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !mobileSheetRef.current) return;
      const focusable = Array.from(
        mobileSheetRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (open) previousFocusRef.current?.focus();
    };
  }, [open]);

  // Close mobile nav on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { label: c.nav.pricing, href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: c.nav.customers, href: "/customers" },
    { label: c.nav.about, href: "/about" },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-2.5 sm:px-6 sm:pt-3">
        <div
          className={`relative mx-auto flex h-[62px] sm:h-[64px] items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? "max-w-[960px] px-4 sm:px-5 lg:px-6"
              : "max-w-[1240px] px-4 sm:px-6 lg:px-8"
          }`}
        >
          {/* Hardware-accelerated glass background: zero layout reflow, pure compositor-level opacity */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 rounded-2xl border border-black/[0.07] bg-white/95 shadow-[0_10px_34px_rgba(15,23,42,0.10)] backdrop-blur-md transition-opacity duration-300 ease-out ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
            style={{ willChange: "opacity" }}
          />

          <div
            className={`relative z-10 flex w-full items-center justify-between transition-[gap] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              scrolled ? "gap-4 sm:gap-6" : "gap-6 sm:gap-8"
            }`}
          >
            <Link href="/" aria-label="AttendKH — home" className="shrink-0">
              <Mark solid={scrolled} />
            </Link>

            <nav
              aria-label="Main"
              className={`hidden items-center transition-[gap] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:flex ${
                scrolled ? "gap-5" : "gap-8"
              }`}
            >
              <ProductMenu solid={scrolled} />
              {links.map((l) => {
                const isActive = pathname === l.href || (l.href !== "/" && pathname.startsWith(`${l.href}/`));
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-[14px] transition-colors duration-300 ease-out ${
                      scrolled
                        ? isActive
                          ? "font-semibold text-[#0052FF]"
                          : "font-medium text-[#5C5C5C] hover:text-[#141414]"
                        : isActive
                          ? "font-semibold text-white underline underline-offset-4"
                          : "font-medium text-white/85 hover:text-white"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            <div
              className={`flex items-center shrink-0 transition-[gap] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                scrolled ? "gap-2 sm:gap-2.5" : "gap-2.5"
              }`}
            >
              <div className="hidden md:block">
                <LangSwitch solid={scrolled} />
              </div>

              <a
                href="https://dashboard.attendkh.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden text-[14px] font-medium transition-colors duration-300 ease-out lg:inline-flex ${
                  scrolled ? "text-[#5C5C5C] hover:text-[#141414]" : "text-white/85 hover:text-white"
                }`}
              >
                {c.nav.signIn}
              </a>

              <Link
                href="/contact"
                className={`hidden rounded-full font-semibold transition-all duration-300 ease-out sm:inline-flex ${
                  scrolled
                    ? "bg-[#0052FF] text-white hover:bg-[#0045D8] shadow-sm shadow-[#0052FF]/20 px-4 py-2 text-[13px]"
                    : "bg-white text-[#141414] hover:bg-[#EAF0FE] px-5 py-2.5 text-[13.5px]"
                }`}
              >
                {c.nav.getStarted}
              </Link>

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label={c.nav.openMenu}
                className={`flex min-h-11 min-w-11 items-center justify-center rounded-full border p-2 transition-all duration-300 ease-out lg:hidden ${
                  scrolled ? "border-[#E4E4E4] text-[#141414]" : "border-white/30 text-white"
                }`}
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* full-screen mobile sheet */}
      {open && (
        <div
          ref={mobileSheetRef}
          role="dialog"
          aria-modal="true"
          aria-label={c.nav.menuTitle}
          className="fixed inset-0 z-[60] flex flex-col bg-white lg:hidden"
        >
          <div className={`${SHELL} flex h-[62px] shrink-0 items-center justify-between`}>
            <Mark solid />
            <button
              type="button"
              ref={mobileCloseRef}
              onClick={() => setOpen(false)}
              aria-label={c.nav.closeMenu}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#E4E4E4] p-2 text-[#141414]"
            >
              <X size={18} />
            </button>
          </div>

          <nav aria-label={c.nav.menuTitle} className={`${SHELL} flex-1 overflow-y-auto pb-8 pt-4`}>
            <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#B0B0B0]">
              {c.nav.product}
            </p>
            <ul className="mt-3 space-y-1">
              {c.nav.productItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-start gap-3 rounded-xl bg-[#F7F7F7] px-4 py-3.5"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block text-[15px] font-semibold text-[#141414]">{item.label}</span>
                      <span className="mt-0.5 block text-[12.5px] leading-snug text-[#8A8A8A]">
                        {item.desc}
                      </span>
                    </span>
                    <ArrowRight size={16} className="mt-1 shrink-0 text-[#C4C4C4]" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-7 border-t border-[#EFEFEF]">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-[#EFEFEF] py-4 text-[16px] font-medium text-[#141414]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex items-center justify-between gap-4">
              <span className="text-[13px] text-[#8A8A8A]">{c.nav.language}</span>
              <LangSwitch solid block />
            </div>

            <div className="mt-6 space-y-2.5">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-[#0052FF] px-5 py-3.5 text-center text-[15px] font-semibold text-white hover:bg-[#0045D8]"
              >
                {c.nav.getStarted}
              </Link>
              <a
                href="https://dashboard.attendkh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-[#E4E4E4] px-5 py-3.5 text-center text-[15px] font-semibold text-[#141414]"
              >
                {c.nav.signIn}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
