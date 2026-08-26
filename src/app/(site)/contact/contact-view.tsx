"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Mail,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useCopy } from "@/components/site/ui";
import { useSite } from "@/lib/i18n";

const inputClass =
  "mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-[15px] text-ink outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-brand focus:ring-4 focus:ring-brand/10";

export function ContactView() {
  const { footer } = useCopy();
  const { lang } = useSite();
  const isKm = lang === "km";
  const t = isKm
    ? {
        eyebrow: "កក់ការបង្ហាញផលិតផល",
        title: "ស្វែងយល់ពីរបៀបដែល AttendKH សមនឹងក្រុមការងាររបស់អ្នក",
        intro:
          "ប្រាប់យើងបន្តិចអំពីអាជីវកម្មរបស់អ្នក។ យើងនឹងបង្ហាញការគ្រប់គ្រងវត្តមាន វេន និងប្រាក់បៀវត្សរ៍ដែលសមនឹងការងារជាក់ស្តែងរបស់អ្នក។",
        benefits: [
          "ការបង្ហាញផ្ទាល់ខ្លួនរយៈពេល ១៥ នាទី",
          "រៀបចំតាមទំហំក្រុម និងសាខារបស់អ្នក",
          "តម្លៃច្បាស់លាស់ និងជំហានបន្ទាប់ដែលអាចអនុវត្តបាន",
        ],
        response: "ឆ្លើយតបក្នុងម៉ោងធ្វើការ (ច័ន្ទ–សុក្រ ៨:០០–១៧:៣០)",
        private: "យើងប្រើព័ត៌មានរបស់អ្នកសម្រាប់តែការរៀបចំ និងកំណត់ពេលបង្ហាញប៉ុណ្ណោះ។",
        telegram: "ត្រូវការចម្លើយរហ័ស? ផ្ញើសារមកយើងតាម Telegram",
        formTitle: "ប្រាប់យើងអំពីក្រុមរបស់អ្នក",
        formHint: "ព័ត៌មាន ៥ ចំណុច • ប្រហែល ១ នាទី",
        name: "ឈ្មោះពេញ",
        email: "អ៊ីមែលការងារ",
        company: "ឈ្មោះក្រុមហ៊ុន ឬអាជីវកម្ម",
        contact: "លេខទូរស័ព្ទ ឬ Telegram",
        teamSize: "ទំហំក្រុមការងារ",
        note: "បន្ថែមចំណាំ (ជាជម្រើស)",
        noteHint: "ប្រាប់យើងអំពីវេនធ្វើការ សាខា ឬតម្រូវការប្រាក់ខែរបស់អ្នក។",
        submit: "ស្នើសុំការបង្ហាញដោយឥតគិតថ្លៃ",
        submitting: "កំពុងផ្ញើសំណើ...",
        consent: "ដោយការដាក់ស្នើ អ្នកយល់ព្រមឲ្យ AttendKH ទាក់ទងអ្នកអំពីការបង្ហាញនេះ។",
        privacy: "គោលការណ៍ឯកជនភាព",
        successTitle: "យើងបានទទួលសំណើរបស់អ្នក",
        successBody:
          "ក្រុមការងាររបស់យើងនឹងទាក់ទងតាមអ៊ីមែល ឬ Telegram ក្នុងម៉ោងធ្វើការ ដើម្បីកំណត់ពេលបង្ហាញ។",
        successMeta: "ការបង្ហាញផ្ទាល់ • ឥតគិតថ្លៃ • មិនត្រូវការកាត",
        chatNow: "ឆាតតាម Telegram ឥឡូវនេះ",
        error: "មិនអាចផ្ញើសំណើបានទេ។ សូមពិនិត្យព័ត៌មានរបស់អ្នក ហើយព្យាយាមម្តងទៀត។",
        networkError: "ការតភ្ជាប់បានបរាជ័យ។ សូមព្យាយាមម្តងទៀត ឬទាក់ទងយើងតាម Telegram។",
      }
    : {
        eyebrow: "Book a product demo",
        title: "See how AttendKH fits your team",
        intro:
          "Tell us a little about your business. We’ll show you a practical setup for attendance, shifts, and payroll—based on how your team actually works.",
        benefits: [
          "A focused product walkthrough",
          "Configured around your team size and branches",
          "Clear pricing and practical next steps",
        ],
        response: "Available Mon–Fri, 8:00 AM – 5:30 PM ICT",
        private: "We only use your details to prepare and schedule your demo.",
        telegram: "Need a quick answer? Message us on Telegram",
        formTitle: "Tell us about your team",
        formHint: "5 details • about 1 minute",
        name: "Full name",
        email: "Work email",
        company: "Company or business name",
        contact: "Phone or Telegram",
        teamSize: "Team size",
        note: "Add a note (optional)",
        noteHint: "Tell us about your shifts, branches, or payroll requirements.",
        submit: "Request my free demo",
        submitting: "Sending request...",
        consent: "By submitting, you agree that AttendKH may contact you about this demo.",
        privacy: "Privacy policy",
        successTitle: "Your demo request is in",
        successBody:
          "Our team will contact you by email or Telegram during business hours to arrange your walkthrough.",
        successMeta: "Product walkthrough • Free • No card required",
        chatNow: "Chat on Telegram now",
        error: "We couldn’t send your request. Check your details and try again.",
        networkError: "Connection failed. Try again or message us on Telegram.",
      };

  const [form, setForm] = useState({
    name: "",
    company: "",
    industry: "Other",
    employees_count: "16-50 staff",
    branches_count: "1",
    email: "",
    phone_telegram: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          preferred_language: lang,
          source_page: "/contact",
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        setErrorMsg(data.error || t.error);
        return;
      }

      setSubmitted(true);
    } catch {
      setErrorMsg(t.networkError);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden pt-[62px] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(168deg,#0B5CFF_0%,#0A47D6_45%,#07308F_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_30%_0%,rgba(255,255,255,0.20),rgba(255,255,255,0)_65%)]" />
        <div
          className="absolute inset-0 [mask-image:radial-gradient(75%_55%_at_50%_42%,transparent_35%,#000_100%)]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.34) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute -bottom-1/4 -left-[10%] h-[70%] w-[65%] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.30),transparent_70%)] blur-3xl" />
        <div className="absolute -right-[12%] top-[-15%] h-[65%] w-[55%] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.28),transparent_70%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-20">
        <div className="lg:col-span-5">
          <p className="mb-5 inline-flex items-center gap-2 text-[13px] font-semibold text-white/75">
            <span className="h-2 w-2 rounded-full bg-white" />
            {t.eyebrow}
          </p>
          <h1 className="max-w-xl text-balance font-display text-[2.6rem] font-bold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-[3.4rem]">
            {t.title}
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-[16px] leading-7 text-white/80">
            {t.intro}
          </p>

          <ul className="mt-8 space-y-4" aria-label={isKm ? "អ្វីដែលអ្នកនឹងទទួលបាន" : "What to expect"}>
            {t.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-[15px] text-slate-100">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                  <Check size={13} strokeWidth={3} aria-hidden="true" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-9 border-t border-white/12 pt-6">
            <div className="flex items-start gap-3">
              <Clock3 className="mt-0.5 shrink-0 text-blue-300" size={19} aria-hidden="true" />
              <div>
                <p className="text-[14px] font-semibold text-white">{t.response}</p>
                <p className="mt-1 text-[13px] leading-5 text-white/65">{t.private}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-[13px]">
              <a
                href="https://t.me/attendkh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-white/85 transition hover:text-white focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <Send size={15} aria-hidden="true" />
                {t.telegram}
              </a>
              <a
                href={`mailto:${footer.email}`}
                className="inline-flex min-h-11 items-center gap-2 text-white/75 transition hover:text-white focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <Mail size={15} aria-hidden="true" />
                {footer.email}
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-[28px] border border-white/15 bg-white p-5 text-ink shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[470px] flex-col items-center justify-center text-center" role="status" aria-live="polite">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={34} aria-hidden="true" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-bold tracking-[-0.03em] text-ink">
                  {t.successTitle}
                </h2>
                <p className="mt-3 max-w-md text-[15px] leading-6 text-body">{t.successBody}</p>
                <p className="mt-5 rounded-lg bg-mist px-4 py-2 text-[13px] font-medium text-slate-600">
                  {t.successMeta}
                </p>
                <a
                  href="https://t.me/attendkh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#229ED9] px-6 text-[14px] font-semibold text-white transition hover:bg-[#1688bd] active:translate-y-px focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
                >
                  <Send size={16} aria-hidden="true" />
                  {t.chatNow}
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="font-display text-2xl font-bold tracking-[-0.025em] text-ink sm:text-[1.75rem]">
                      {t.formTitle}
                    </h2>
                    <p className="mt-1 text-[14px] text-slate-500">{t.formHint}</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[12px] font-medium text-slate-500">
                    <ShieldCheck size={15} className="text-emerald-600" aria-hidden="true" />
                    {isKm ? "ព័ត៌មានត្រូវបានការពារ" : "Your details stay private"}
                  </div>
                </div>

                {errorMsg && (
                  <div role="alert" className="mt-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-[14px] font-medium text-rose-800">
                    {errorMsg}
                  </div>
                )}

                <div className="mt-6 grid gap-x-4 gap-y-5 sm:grid-cols-2">
                  <label className="text-[14px] font-semibold text-ink" htmlFor="contact-name">
                    {t.name}
                    <span className="text-brand" aria-hidden="true"> *</span>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      minLength={2}
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      placeholder={isKm ? "ឧ. សុខា ចាន់" : "Sokha Chan"}
                      className={inputClass}
                    />
                  </label>

                  <label className="text-[14px] font-semibold text-ink" htmlFor="contact-email">
                    {t.email}
                    <span className="text-brand" aria-hidden="true"> *</span>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </label>

                  <label className="text-[14px] font-semibold text-ink" htmlFor="contact-company">
                    {t.company}
                    <span className="text-brand" aria-hidden="true"> *</span>
                    <input
                      id="contact-company"
                      name="organization"
                      type="text"
                      autoComplete="organization"
                      required
                      minLength={2}
                      value={form.company}
                      onChange={(event) => setForm({ ...form, company: event.target.value })}
                      placeholder={isKm ? "ឧ. Mekong Cafe Group" : "Mekong Cafe Group"}
                      className={inputClass}
                    />
                  </label>

                  <label className="text-[14px] font-semibold text-ink" htmlFor="contact-phone">
                    {t.contact}
                    <span className="text-brand" aria-hidden="true"> *</span>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="text"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                      minLength={6}
                      value={form.phone_telegram}
                      onChange={(event) => setForm({ ...form, phone_telegram: event.target.value })}
                      placeholder="012 345 678 / @username"
                      className={inputClass}
                    />
                  </label>

                  <label className="text-[14px] font-semibold text-ink sm:col-span-2" htmlFor="contact-team-size">
                    {t.teamSize}
                    <span className="text-brand" aria-hidden="true"> *</span>
                    <select
                      id="contact-team-size"
                      name="team-size"
                      required
                      value={form.employees_count}
                      onChange={(event) => setForm({ ...form, employees_count: event.target.value })}
                      className={`${inputClass} cursor-pointer appearance-auto`}
                    >
                      <option value="1-15 staff">{isKm ? "បុគ្គលិក ១–១៥ នាក់" : "1–15 people"}</option>
                      <option value="16-50 staff">{isKm ? "បុគ្គលិក ១៦–៥០ នាក់" : "16–50 people"}</option>
                      <option value="51-150 staff">{isKm ? "បុគ្គលិក ៥១–១៥០ នាក់" : "51–150 people"}</option>
                      <option value="150+ staff">{isKm ? "បុគ្គលិក ១៥០ នាក់ឡើង" : "150+ people"}</option>
                    </select>
                  </label>
                </div>

                <details className="group mt-5 rounded-xl border border-line bg-mist/70 open:bg-white">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 text-[14px] font-semibold text-ink outline-none transition hover:bg-slate-50 focus-visible:ring-4 focus-visible:ring-brand/10 [&::-webkit-details-marker]:hidden">
                    {t.note}
                    <ChevronDown size={17} className="shrink-0 text-slate-500 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="px-4 pb-4">
                    <label className="sr-only" htmlFor="contact-note">{t.note}</label>
                    <textarea
                      id="contact-note"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={(event) => setForm({ ...form, message: event.target.value })}
                      placeholder={t.noteHint}
                      className={`${inputClass} min-h-24 py-3`}
                    />
                  </div>
                </details>

                <button
                  type="submit"
                  disabled={submitting}
                  aria-describedby="contact-consent"
                  className="mt-6 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(0,82,255,0.24)] transition hover:bg-brand-dark hover:shadow-[0_14px_34px_rgba(0,82,255,0.3)] active:translate-y-px disabled:cursor-not-allowed disabled:opacity-65 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/20"
                >
                  {submitting && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />}
                  <span>{submitting ? t.submitting : t.submit}</span>
                  {!submitting && <ArrowRight size={17} aria-hidden="true" />}
                </button>
                <p id="contact-consent" className="mt-3 text-center text-[12px] leading-5 text-slate-500">
                  {t.consent}{" "}
                  <a href="/privacy-policy" className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-2 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/20">
                    {t.privacy}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
