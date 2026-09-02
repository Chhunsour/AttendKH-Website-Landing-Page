"use client";

import {
  useCopy,
  PageHero,
  Section,
  DirectAnswerBlock,
  Reveal,
  CtaBand,
} from "@/components/site/ui";
import { useSite } from "@/lib/i18n";
import { IndustriesSection } from "@/components/home/industries-section";

export function CustomersView() {
  const c = useCopy();
  const cu = c.customers;
  const { lang } = useSite();
  const isKm = lang === "km";

  return (
    <>
      <PageHero title={cu.title} sub={cu.sub} />

      {/* Operational Highlights */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <dl className="grid gap-6 sm:grid-cols-3">
            {cu.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="rounded-2xl border border-line bg-mist/40 p-6 sm:p-8 text-center">
                  <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{s.label}</dt>
                  <dd className="font-display mt-2 text-[2.5rem] font-bold leading-none text-brand">
                    {s.value}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </Section>

      {/* Direct Answer Block */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <DirectAnswerBlock
            question={
              isKm
                ? "តើអាជីវកម្មប្រភេទណាខ្លះនៅកម្ពុជាដែលប្រើប្រាស់ AttendKH?"
                : "Which Cambodian organizations is AttendKH designed for?"
            }
            answer={
              isKm
                ? "AttendKH ត្រូវបានរចនាឡើងសម្រាប់ក្រុមការងារកម្ពុជាក្នុងវិស័យភោជនីយដ្ឋាន ហាងលក់រាយ បដិសណ្ឋារកិច្ច និងសំណង់/ភស្តុភារ។ វាគាំទ្រការចុះវត្តមានតាម GPS លើទូរស័ព្ទ និងរូបមន្តប្រាក់ខែដែលអាចកំណត់បានជំនួសការកត់ត្រាក្រដាស។"
                : "AttendKH is designed for organizations across Food & Beverage (cafes, restaurants, bakeries), Retail & Boutiques, Hotels & Hospitality, and Logistics & Construction. Its workflows can replace paper timebooks and hardware clocks with geofenced mobile verification and configurable overtime calculations."
            }
            facts={[
              {
                label: isKm ? "វិស័យចម្បង" : "Primary Industries",
                value: "F&B, Retail, Hotels, Logistics",
              },
              {
                label: isKm ? "ទម្រង់នៃការប្រើប្រាស់" : "Deployment Methods",
                value: "Mobile App + Shared Tablet Kiosk",
              },
              {
                label: isKm ? "ការគាំទ្រតាមខេត្តក្រុង" : "Active Service Coverage",
                value: "Phnom Penh, Siem Reap, Sihanoukville",
              },
            ]}
          />
        </div>
      </Section>

      {/* Industry Solutions Showcase */}
      <IndustriesSection />

      <CtaBand title={cu.ctaTitle} sub={isKm ? "ចូលរួមជាមួយអាជីវកម្មកម្ពុជាដែលកំពុងដំណើរការលើ AttendKH" : "Join Cambodian businesses simplifying their daily attendance and payroll."} />
    </>
  );
}
