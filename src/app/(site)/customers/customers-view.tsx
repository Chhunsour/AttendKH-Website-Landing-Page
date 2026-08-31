"use client";

import Link from "next/link";
import {
  Utensils,
  ShoppingBag,
  Hotel,
  Truck,
  CheckCircle2,
  ArrowRight,
  MapPin,
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

export function CustomersView() {
  const c = useCopy();
  const cu = c.customers;
  const { lang } = useSite();
  const isKm = lang === "km";

  const industryProfiles = [
    {
      icon: Utensils,
      title: isKm ? "ភោជនីយដ្ឋាន និងហាងកាហ្វេ" : "Restaurants & Cafes",
      location: isKm ? "ភ្នំពេញ និងសៀមរាប" : "Phnom Penh & Siem Reap",
      challenge: isKm
        ? "បុគ្គលិកវេនបំបែក និងម៉ោងមមាញឹកថ្ងៃត្រង់/យប់"
        : "Split shifts and high lunchtime/evening turnover",
      solution: isKm
        ? "ចុះវត្តមានតាមទូរស័ព្ទក្នុងកាំ ៥០ម និងរូបថត Selfie ផ្ទាល់"
        : "50m geofenced mobile clock-in with mandatory selfie checks",
    },
    {
      icon: ShoppingBag,
      title: isKm ? "ហាងលក់រាយ និងម៉ាត" : "Retail Stores & Boutiques",
      location: isKm ? "សាខាតាមផ្សារទំនើប និងដងផ្លូវ" : "Mall Outlets & High-Street Boutiques",
      challenge: isKm
        ? "ការមកយឺត និងការបន្លំម៉ោងធ្វើការរវាងបុគ្គលិកគ្នាឯង"
        : "Buddy punching and tardiness tracking across 8+ outlets",
      solution: isKm
        ? "ផ្ទាំងគ្រប់គ្រងកណ្តាលសម្រាប់ម្ចាស់អាជីវកម្ម និងកាត់ប្រាក់យឺតស្វ័យប្រវត្តិ"
        : "Centralized owner dashboard and automated late penalty rules",
    },
    {
      icon: Hotel,
      title: isKm ? "សណ្ឋាគារ និងបដិសណ្ឋារកិច្ច" : "Hotels & Hospitality",
      location: isKm ? "សៀមរាប និងព្រះសីហនុ" : "Siem Reap & Sihanoukville",
      challenge: isKm
        ? "វេនឆ្លងកាត់ម៉ោង ១២ យប់ និងការថែមម៉ោងថ្ងៃបុណ្យជាតិ"
        : "24/7 rotating rosters, midnight crossing shifts, and holiday OT",
      solution: isKm
        ? "មេគុណថែមម៉ោង ២.០x ស្វ័យប្រវត្តិ និងប័ណ្ណប្រាក់ខែពីររូបិយប័ណ្ណ"
        : "Configurable holiday payroll multipliers and dual-currency payslips",
    },
    {
      icon: Truck,
      title: isKm ? "សំណង់ និងភស្តុភារ" : "Construction & Logistics",
      location: isKm ? "តំបន់សេដ្ឋកិច្ចពិសេស និងឃ្លាំងទំនិញ" : "Special Economic Zones & Port Yards",
      challenge: isKm
        ? "បុគ្គលិកជួរមុខគ្មានស្មាតហ្វូន និងសេវាទូរស័ព្ទខ្សោយ"
        : "Staff without smartphones and patchy cellular network coverage",
      solution: isKm
        ? "ថេប្លេតរួម QR Kiosk នៅមាត់ទ្វារ និងប្រព័ន្ធរក្សាទុក Offline"
        : "Shared tablet QR door kiosk and offline punch queueing",
    },
  ];

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

      {/* Industry Solutions Matrix */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            title={isKm ? "ដំណោះស្រាយតាមវិស័យនីមួយៗ" : "Tailored by Industry Need"}
            sub={
              isKm
                ? "ស្វែងយល់បន្ថែមពីរបៀបដែល AttendKH ដោះស្រាយបញ្ហាជាក់លាក់នៃវិស័យរបស់អ្នក"
                : "Explore purpose-built workflows designed for your operational environment."
            }
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industryProfiles.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.title} className="rounded-2xl border border-line bg-paper p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-[16px] font-bold text-ink">{ind.title}</h3>
                    <p className="text-[11px] font-mono text-brand mt-0.5">{ind.location}</p>

                    <div className="mt-4 space-y-2 text-xs">
                      <div>
                        <span className="font-semibold text-slate-500">{isKm ? "បញ្ហាប្រឈម:" : "Challenge:"}</span>
                        <p className="text-body mt-0.5">{ind.challenge}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-500">{isKm ? "ដំណោះស្រាយ:" : "Solution:"}</span>
                        <p className="text-body mt-0.5">{ind.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <CtaBand title={cu.ctaTitle} sub={isKm ? "ចូលរួមជាមួយអាជីវកម្មកម្ពុជាដែលកំពុងដំណើរការលើ AttendKH" : "Join Cambodian businesses simplifying their daily attendance and payroll."} />
    </>
  );
}
