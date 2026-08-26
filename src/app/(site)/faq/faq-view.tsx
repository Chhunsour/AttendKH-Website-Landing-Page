"use client";

import { Plus } from "lucide-react";
import {
  useCopy,
  PageHero,
  Section,
  SectionHead,
  DirectAnswerBlock,
  Reveal,
  CtaBand,
} from "@/components/site/ui";
import { useSite } from "@/lib/i18n";

export function FaqView() {
  const c = useCopy();
  const f = c.faq;
  const { lang } = useSite();
  const isKm = lang === "km";

  return (
    <>
      <PageHero title={f.title} sub={f.sub} />

      {/* Direct Answer Summary Block for AEO / Search Engines */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <DirectAnswerBlock
            question={
              isKm
                ? "តើ AttendKH ដោះស្រាយបញ្ហាចម្បងៗអ្វីខ្លះសម្រាប់អាជីវកម្មនៅកម្ពុជា?"
                : "What core operational problems does AttendKH solve for Cambodian businesses?"
            }
            answer={
              isKm
                ? "AttendKH ជួយការពារការចុះវត្តមានជំនួសគ្នា តាមរយៈការផ្ទៀងផ្ទាត់ GPS កាំ ៥០–២០០ម និងរូបថត Selfie ផ្ទាល់។ វាក៏ជួយសម្រួលការគណនាប្រាក់ខែ តាមរយៈការគណនាម៉ោងបន្ថែម (១.៥x/២.០x) ការកាត់យឺត និងវិភាគទាន ប.ស.ស. តាមរូបមន្តដែលបានកំណត់ ព្រមទាំងបោះពុម្ពប័ណ្ណប្រាក់ខែជាដុល្លារ និងរៀលទន្ទឹមគ្នា។"
                : "AttendKH helps prevent proxy clock-ins using point-in-time 50–200m GPS geofencing with mandatory selfie proof. It streamlines monthly Cambodian payroll calculations by applying configurable overtime rates (1.5× / 2.0×), late rules, and NSSF contributions, generating bilingual payslips in USD ($) and Khmer Riel (៛)."
            }
            facts={[
              {
                label: isKm ? "ការផ្ទៀងផ្ទាត់វត្តមាន" : "Attendance Verification",
                value: isKm ? "GPS កាំសាខា + Selfie ផ្ទាល់" : "GPS Radius + Mandatory Selfie",
              },
              {
                label: isKm ? "ការគណនាប្រាក់ខែ" : "Payroll Rules",
                value: isKm ? "ថែមម៉ោង ១.៥x/២.០x និង ប.ស.ស." : "1.5×/2.0× OT & NSSF Lines",
              },
              {
                label: isKm ? "រូបិយប័ណ្ណទូទាត់" : "Supported Currencies",
                value: "USD ($) & KHR (៛)",
              },
            ]}
          />
        </div>
      </Section>

      {/* Accordion Questions */}
      <Section tone="mist">
        <div className="mx-auto max-w-3xl">
          <SectionHead
            title={isKm ? "សំណួរដែលសួរញឹកញាប់" : "Frequently Asked Questions"}
            align="center"
          />

          <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-paper px-6 sm:px-8 shadow-xs">
            {f.items.map((item, i) => (
              <Reveal key={item.q} delay={Math.min(i, 4) * 0.04}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 outline-none">
                    <h3 className="font-display text-[16px] font-bold leading-snug text-ink group-hover:text-brand transition-colors">
                      {item.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="faq-mark mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-body group-open:rotate-45 transition-transform"
                    >
                      <Plus size={14} />
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[65ch] text-[14.5px] leading-relaxed text-body">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand title={f.ctaTitle} sub={isKm ? "ត្រូវការចម្លើយចំពោះសំណួរផ្សេងទៀត? ទាក់ទងមកយើងខ្ញុំ" : "Have a specific operational question? Reach out to our Phnom Penh team."} />
    </>
  );
}
