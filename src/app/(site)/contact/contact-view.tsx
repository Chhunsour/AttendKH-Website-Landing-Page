"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  MapPin,
  CheckCircle2,
  Building,
  Users,
  Clock,
  Sparkles,
  Phone,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useCopy, PageHero, Section, Button, Reveal } from "@/components/site/ui";
import { useSite } from "@/lib/i18n";

export function ContactView() {
  const c = useCopy();
  const ct = c.contact;
  const f = c.footer;
  const { lang } = useSite();
  const isKm = lang === "km";

  const [form, setForm] = useState({
    name: "",
    company: "",
    industry: "Restaurants & Cafes",
    employees_count: "16-50 staff",
    branches_count: "1",
    email: "",
    phone_telegram: "",
    preferred_language: isKm ? "km" : "en",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source_page: "/contact",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Failed to submit form. Please verify your details.");
        return;
      }

      setSubmitted(true);
    } catch {
      setErrorMsg("Network error. Please reach us directly via Telegram @attendkh");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        title={
          isKm
            ? "កក់ការបង្ហាញផលិតផល ឬ ពិភាក្សាជាមួយក្រុមការងារ"
            : "Book a Demo or Talk to Our Sales Team"
        }
        sub={
          isKm
            ? "ស្វែងយល់ពីរបៀបដែល AttendKH អាចជួយលុបបំបាត់ការបន្លំម៉ោង និងគណនាប្រាក់បៀវត្សរ៍ត្រឹមត្រូវតាមច្បាប់ការងារកម្ពុជា។"
            : "See how AttendKH eliminates buddy punching, automates dual-currency payroll, and simplifies multi-branch attendance for Cambodian businesses."
        }
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main Lead Generation Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-3xl border border-line bg-paper p-6 sm:p-10 shadow-xl">
                {submitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-ink">
                      {isKm ? "សូមអរគុណ! យើងបានទទួលសំណើរបស់អ្នកហើយ" : "Demo Request Received!"}
                    </h3>
                    <p className="text-sm text-body max-w-md mx-auto leading-relaxed">
                      {isKm
                        ? "ក្រុមការងារបច្ចេកទេស AttendKH នឹងទាក់ទងមកលោកអ្នកតាមរយៈ Telegram ឬ Email ក្នុងរយៈពេលក្រោម 2 ម៉ោងធ្វើការ។"
                        : "Our Cambodian operations specialist will contact you via Telegram or Email within 2 business hours to schedule your personalized demo."}
                    </p>

                    <div className="pt-4 flex justify-center gap-3">
                      <a
                        href="https://t.me/attendkh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-xs font-semibold text-white hover:bg-sky-600 shadow-xs"
                      >
                        <Send size={14} />
                        <span>{isKm ? "ឆាតផ្ទាល់តាម Telegram ឥឡូវនេះ" : "Chat on Telegram Immediately"}</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink">
                        {isKm ? "បំពេញព័ត៌មានស្ថាប័នរបស់អ្នក" : "Schedule a 15-Minute Personalized Walkthrough"}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {isKm
                          ? "ឥតគិតថ្លៃ និងមិនចាំបាច់មានកាតឥណទានឡើយ"
                          : "Free, customized to your branch structure, no card required."}
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs font-medium text-rose-800">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-ink mb-1">
                          {isKm ? "ឈ្មោះពេញរបស់អ្នក *" : "Full Name *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Sokha Chan"
                          className="w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-xs text-ink focus:border-brand focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-ink mb-1">
                          {isKm ? "ឈ្មោះក្រុមហ៊ុន / អាជីវកម្ម *" : "Company / Business Name *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="e.g. Mekong Cafe Group"
                          className="w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-xs text-ink focus:border-brand focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div>
                        <label className="block text-xs font-semibold text-ink mb-1">
                          {isKm ? "វិស័យអាជីវកម្ម *" : "Industry *"}
                        </label>
                        <select
                          value={form.industry}
                          onChange={(e) => setForm({ ...form, industry: e.target.value })}
                          className="w-full rounded-xl border border-line bg-paper px-3 py-2.5 text-xs font-medium text-ink focus:border-brand focus:outline-none"
                        >
                          <option value="Restaurants & Cafes">Restaurants & Cafes</option>
                          <option value="Retail & Boutiques">Retail & Boutiques</option>
                          <option value="Hospitality & Hotels">Hospitality & Hotels</option>
                          <option value="Construction & Logistics">Construction & Logistics</option>
                          <option value="Education & Schools">Education & Schools</option>
                          <option value="Professional Services">Professional Services</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-ink mb-1">
                          {isKm ? "ចំនួនបុគ្គលិក *" : "Team Size *"}
                        </label>
                        <select
                          value={form.employees_count}
                          onChange={(e) => setForm({ ...form, employees_count: e.target.value })}
                          className="w-full rounded-xl border border-line bg-paper px-3 py-2.5 text-xs font-medium text-ink focus:border-brand focus:outline-none"
                        >
                          <option value="1-15 staff">1–15 staff</option>
                          <option value="16-50 staff">16–50 staff</option>
                          <option value="51-150 staff">51–150 staff</option>
                          <option value="150+ staff">150+ staff</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-ink mb-1">
                          {isKm ? "ចំនួនសាខា *" : "Branches *"}
                        </label>
                        <select
                          value={form.branches_count}
                          onChange={(e) => setForm({ ...form, branches_count: e.target.value })}
                          className="w-full rounded-xl border border-line bg-paper px-3 py-2.5 text-xs font-medium text-ink focus:border-brand focus:outline-none"
                        >
                          <option value="1">1 location</option>
                          <option value="2-5">2–5 branches</option>
                          <option value="6-15">6–15 branches</option>
                          <option value="16+">16+ branches</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-ink mb-1">
                          {isKm ? "អ៊ីមែលក្រុមហ៊ុន *" : "Business Email *"}
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="sokha@company.com"
                          className="w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-xs text-ink focus:border-brand focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-ink mb-1">
                          {isKm ? "លេខទូរស័ព្ទ ឬ Telegram *" : "Phone or Telegram *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={form.phone_telegram}
                          onChange={(e) => setForm({ ...form, phone_telegram: e.target.value })}
                          placeholder="012 345 678 or @username"
                          className="w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-xs text-ink focus:border-brand focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ink mb-1">
                        {isKm ? "តម្រូវការ ឬសំណួរជាក់លាក់ (បើមាន)" : "Specific Scheduling or Payroll Requirements"}
                      </label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder={
                          isKm
                            ? "ឧ. យើងមាន 4 សាខានៅភ្នំពេញ និងសៀមរាប ចង់គ្រប់គ្រងវេនប្តូរ..."
                            : "e.g. We have 4 branches in PP and Siem Reap with night shifts..."
                        }
                        className="w-full rounded-xl border border-line bg-paper p-3 text-xs text-ink focus:border-brand focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-full bg-brand py-3.5 text-xs font-bold text-white shadow-md hover:bg-brand-dark transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <span>{submitting ? "Submitting..." : isKm ? "ផ្ញើសំណើកក់ Demo" : "Request Free Demo"}</span>
                      <ArrowRight size={14} />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Direct Channels & Trust Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.06}>
              <article className="rounded-3xl border border-line bg-mist/60 p-6 sm:p-7 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-white shadow-xs">
                    <Send size={18} />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-ink">
                      {isKm ? "ជំនួយ និងការប្រឹក្សារហ័សតាម Telegram" : "Instant Telegram Consultation"}
                    </h4>
                    <p className="text-xs text-slate-500">Fastest response for Cambodian teams</p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-body">
                  Need an answer right away? Message our Phnom Penh support team on Telegram for rapid assistance, product questions, or pricing inquiries.
                </p>
                <a
                  href="https://t.me/attendkh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 py-2.5 text-xs font-semibold text-white hover:bg-sky-600 shadow-xs"
                >
                  <Send size={13} />
                  <span>Open Telegram @attendkh</span>
                </a>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="rounded-3xl border border-line bg-paper p-6 sm:p-7 space-y-4 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand shadow-xs">
                    <Building size={18} />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-ink">
                      {isKm ? "ការិយាល័យភ្នំពេញ" : "Phnom Penh Headquarters"}
                    </h4>
                    <p className="text-xs text-slate-500">{f.address}</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-body border-t border-line pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Business Hours:</span>
                    <span className="font-semibold text-ink">Mon–Fri: 08:00 – 17:30 (ICT)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Support Email:</span>
                    <a href={`mailto:${f.email}`} className="font-mono text-brand font-semibold">
                      {f.email}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 space-y-2 text-xs text-emerald-950">
                <div className="flex items-center gap-2 font-bold text-emerald-800">
                  <ShieldCheck size={16} />
                  <span>Zero-Commitment Trial</span>
                </div>
                <p className="leading-relaxed opacity-90">
                  All demo requests include a 14-day full feature test for your branches with custom shift and overtime configuration assistance.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
