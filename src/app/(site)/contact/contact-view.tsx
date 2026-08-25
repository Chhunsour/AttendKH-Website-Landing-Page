"use client";

import { useState } from "react";
import { useSite } from "@/lib/i18n";
import { PageHero, Pic } from "@/components/bits";

export function ContactView() {
  const { t } = useSite();
  const c = t.contact;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`AttendKH — ${c.formMessage} (${company || name})`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${company}\n${email}`);
    window.location.href = `mailto:support@attendkh.com?subject=${subject}&body=${body}`;
  };

  const info = [
    [c.sales, "sales@attendkh.com"],
    [c.support, "support@attendkh.com"],
    [c.telegram, "@attendkh"],
    [c.office, c.officeVal],
    [c.hours, c.hoursVal],
  ] as const;

  const field =
    "w-full border border-line bg-white px-3.5 py-2.5 text-[14.5px] text-ink placeholder:text-zinc-400 focus:border-accent focus:outline-none";

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <PageHero kicker={c.kicker} title={c.title} sub={c.sub} />

        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          <div>
            <dl>
              {info.map(([label, value]) => (
                <div key={label} className="border-t border-line py-4 last:border-b">
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-zinc-400">
                    {label}
                  </dt>
                  <dd className="mt-1 text-[15px] text-ink">
                    {value.startsWith("http") || value.startsWith("@") || value.includes("@attendkh") ? (
                      <a
                        href={value.startsWith("@") ? "https://t.me/attendkh" : `mailto:${value}`}
                        target={value.startsWith("@") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <Pic label={c.img} ratio="4 / 3" className="mt-10" />
          </div>

          <form onSubmit={submit} className="h-fit border border-line bg-white p-7 sm:p-9">
            <div className="space-y-5">
              <div>
                <label htmlFor="cf-name" className="mb-1.5 block text-[13px] font-medium text-ink">
                  {c.formName}
                </label>
                <input
                  id="cf-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="cf-email" className="mb-1.5 block text-[13px] font-medium text-ink">
                  {c.formEmail}
                </label>
                <input
                  id="cf-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="cf-company" className="mb-1.5 block text-[13px] font-medium text-ink">
                  {c.formCompany}
                </label>
                <input
                  id="cf-company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="cf-msg" className="mb-1.5 block text-[13px] font-medium text-ink">
                  {c.formMessage}
                </label>
                <textarea
                  id="cf-msg"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${field} resize-y`}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-ink px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-black"
              >
                {c.send}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
