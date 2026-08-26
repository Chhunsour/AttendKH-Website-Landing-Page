"use client";

import Link from "next/link";
import {
  MapPin,
  HeartHandshake,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Building,
} from "lucide-react";
import {
  useCopy,
  PageHero,
  Section,
  SectionHead,
  DirectAnswerBlock,
  ImageSlot,
  Reveal,
  CtaBand,
} from "@/components/site/ui";
import { useSite } from "@/lib/i18n";

export function AboutView() {
  const c = useCopy();
  const a = c.about;
  const { lang } = useSite();
  const isKm = lang === "km";

  const values = [
    {
      icon: MapPin,
      title: isKm ? "បង្កើតឡើងនៅកម្ពុជា" : "Built in Cambodia, For Cambodia",
      desc: isKm
        ? "យើងយល់ច្បាស់ពីច្បាប់ការងារក្នុងស្រុក វប្បធម៌ការងារកម្ពុជា ការទូទាត់ប្រាក់រៀល និងតម្រូវការជាក់ស្តែងរបស់អាជីវកម្ម។"
        : "Software written specifically for Cambodian labor law, dual-currency accounting, NSSF contributions, and local banking integrations.",
    },
    {
      icon: ShieldCheck,
      title: isKm ? "ផ្អែកលើភស្តុតាង និងតម្លាភាព" : "Evidence & Operational Truth",
      desc: isKm
        ? "រាល់ទិន្នន័យវត្តមាន និងប្រាក់ខែមានភស្តុតាងច្បាស់លាស់ ជួយឲ្យបុគ្គលិក និងថ្នាក់ដឹកនាំមានទំនុកចិត្តលើគ្នាទៅវិញទៅមក។"
        : "We replace guesswork with recorded timestamps, optional photo verification, and transparent payroll formulas.",
    },
    {
      icon: Headphones,
      title: isKm ? "សេវាគាំទ្រទាន់ពេល (Same-Timezone)" : "Real Local Support (Phnom Penh)",
      desc: isKm
        ? "ក្រុមការងារជំនួយនៅទួលគោក ឆ្លើយតបជាភាសាខ្មែរ និងអង់គ្លេសភ្លាមៗតាម Telegram និងទូរស័ព្ទក្នុងម៉ោងធ្វើការ។"
        : "Direct access to our Phnom Penh team via Telegram, email, or in-person visits during standard Cambodian business hours.",
    },
  ];

  return (
    <>
      <PageHero title={a.title} sub={a.sub} />

      {/* Story & Origin Section */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand uppercase tracking-wider">
                <Building size={13} />
                <span>{isKm ? "ដំណើរដើមទងរបស់យើង" : "Our Origin Story"}</span>
              </span>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {isKm
                  ? "ដោះស្រាយបញ្ហាវត្តមាន និងប្រាក់ខែជាក់ស្តែងនៅរាជធានីភ្នំពេញ"
                  : "Born from Real Workforce Challenges in Phnom Penh"}
              </h2>

              <div className="space-y-4 text-[15px] leading-relaxed text-body">
                {a.body.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.06}>
                <ImageSlot label="AttendKH Team in Toul Kork Office" ratio="4 / 3" />
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* Direct Answer Block for AEO / GEO */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <DirectAnswerBlock
            question={
              isKm
                ? "តើ AttendKH ជាអ្វី ហើយមានទីស្នាក់ការនៅទីណា?"
                : "What is AttendKH and where is it located?"
            }
            answer={
              isKm
                ? "AttendKH គឺជាផលិតផលគ្រប់គ្រងកម្លាំងពលកម្មដែលបង្កើតឡើងសម្រាប់បញ្ហាចុះវត្តមាន វេនការងារច្រើនសាខា និងប្រាក់បៀវត្សរ៍ USD/KHR របស់ក្រុមកម្ពុជា។ អង្គភាពនីមួយៗត្រូវផ្ទៀងផ្ទាត់ការកំណត់ប្រាក់ខែរបស់ខ្លួនជាមួយអ្នកជំនាញដែលមានសមត្ថភាព។"
                : "AttendKH is a workforce technology platform headquartered in Toul Kork, Phnom Penh, Cambodia (No. 12, Street 315). It addresses multi-branch attendance, shift scheduling, dual-currency payroll, offline operations, and bilingual Khmer/English workflows. Organizations remain responsible for reviewing configured payroll rules with qualified advisers."
            }
            facts={[
              {
                label: isKm ? "ទីតាំងការិយាល័យ" : "Headquarters",
                value: isKm ? "ទួលគោក រាជធានីភ្នំពេញ" : "Toul Kork, Phnom Penh",
              },
              {
                label: isKm ? "ភាសាគាំទ្រ" : "Supported Languages",
                value: isKm ? "ភាសាខ្មែរ និង អង់គ្លេស" : "Khmer & English Native",
              },
              {
                label: isKm ? "រូបិយប័ណ្ណប្រាក់ខែ" : "Payroll Currencies",
                value: "USD ($) + KHR (៛)",
              },
            ]}
          />
        </div>
      </Section>

      {/* Core Values */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            title={a.valuesTitle}
            sub={
              isKm
                ? "គោលការណ៍ដែលដឹកនាំការអភិវឌ្ឍផលិតផល និងសេវាកម្មរបស់យើងជារៀងរាល់ថ្ងៃ"
                : "The engineering and support principles that guide every decision we make."
            }
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-line bg-paper p-6 shadow-xs">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-[17px] font-bold text-ink">{v.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-body">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      <CtaBand title={a.ctaTitle} sub={isKm ? "ជួបពិភាក្សាជាមួយក្រុមការងារយើងនៅភ្នំពេញ" : "Get in touch with our Phnom Penh team for a personalized demo."} />
    </>
  );
}
