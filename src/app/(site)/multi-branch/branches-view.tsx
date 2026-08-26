"use client";

import Link from "next/link";
import {
  Building,
  Shield,
  UserCheck,
  Users,
  CheckCircle2,
  ArrowRight,
  Clock,
  MapPin,
  Layers,
} from "lucide-react";
import {
  useCopy,
  PageHero,
  Section,
  SectionHead,
  FeatureList,
  DirectAnswerBlock,
  ImageSlot,
  Reveal,
  CtaBand,
} from "@/components/site/ui";
import { useSite } from "@/lib/i18n";

export function BranchesView() {
  const c = useCopy();
  const b = c.branches;
  const { lang } = useSite();
  const isKm = lang === "km";

  const tierIcons = [Shield, Building, UserCheck, Users];

  const shiftFeatures = [
    {
      title: isKm ? "វេនយប់ឆ្លងកាត់អធ្រាត្រ" : "Midnight Crossing Shifts",
      desc: isKm
        ? "រៀបចំវេនការងារដែលឆ្លងកាត់ម៉ោង ១២ យប់ (ឧ. ១៨:០០ ដល់ ០២:០០ ព្រឹក) ដោយគណនាប្រាក់ខែ និងម៉ោងបន្ថែមចូលខែត្រូវយ៉ាងត្រឹមត្រូវ។"
        : "Shifts spanning past midnight (e.g. 18:00 to 02:00) are cleanly tracked without split payroll dates or manual formula fixes.",
    },
    {
      title: isKm ? "វេនបំបែកសម្រាប់ហាងកាហ្វេ និងភោជនីយដ្ឋាន" : "Split Shift Rosters",
      desc: isKm
        ? "បុគ្គលិកអាចចុះវត្តមានវេនថ្ងៃត្រង់ (១០:៣០–១៤:០០) រួចត្រឡប់មកចុះវេនល្ងាច (១៧:០០–២២:០០) ក្នុងថ្ងៃតែមួយ។"
        : "Frontline staff easily clock in for the lunch rush, clock out during downtime, and return for the dinner service on one record.",
    },
    {
      title: isKm ? "ច្បាប់ និងកាំ GPS តាមសាខានីមួយៗ" : "Per-Branch Radius & Grace Rules",
      desc: isKm
        ? "កំណត់កាំ GPS ៥០ ម៉ែត្រសម្រាប់ហាងទួលគោក និង ២០០ ម៉ែត្រសម្រាប់ឃ្លាំងព្រះសីហនុ តាមស្ថានភាពជាក់ស្តែង។"
        : "Assign customized geofence boundaries, grace periods, and late penalty rules specific to each store location.",
    },
    {
      title: isKm ? "ទិដ្ឋភាពរួមរបស់ម្ចាស់អាជីវកម្ម" : "Consolidated Owner Dashboard",
      desc: isKm
        ? "ម្ចាស់អាជីវកម្មអាចមើលឃើញទិន្នន័យគ្រប់សាខា ឬចុចចូលមើលកុងសូលរបស់ប្រធានសាខាណាមួយភ្លាមៗ។"
        : "Owners and executives view real-time headcount, overtime expenditure, and branch attendance across all locations simultaneously.",
    },
  ];

  return (
    <>
      <PageHero title={b.title} sub={b.sub} />

      {/* 4-Tier Access Model */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            title={isKm ? "រចនាសម្ព័ន្ធសិទ្ធិ ៤ កម្រិត" : "Four Levels of Role-Based Access Control"}
            sub={
              isKm
                ? "បែងចែកការទទួលខុសត្រូវច្បាស់លាស់ ចាប់ពីថ្នាក់ដឹកនាំរហូតដល់បុគ្គលិកជួរមុខ"
                : "Granular permissions ensure branch managers see only their sites, while leadership retains full control."
            }
          />

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {b.tiers.map((t, i) => {
              const Icon = tierIcons[i] || Users;
              return (
                <Reveal key={t.role} delay={i * 0.06}>
                  <li className="flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-6 shadow-xs hover:border-brand hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                          <Icon size={20} />
                        </div>
                        <span className="font-mono text-xs font-bold text-brand">0{i + 1}</span>
                      </div>
                      <h3 className="font-display mt-5 text-[17px] font-bold text-ink">{t.role}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-body">{t.desc}</p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Section>

      {/* Real Console Graphic & Shift Planner */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand uppercase tracking-wider">
                  <Layers size={13} />
                  <span>{isKm ? "ការរៀបចំវេនការងារ" : "Shift Roster Engine"}</span>
                </span>
                <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {isKm
                    ? "រៀបចំវេនការងារស្មុគស្មាញយ៉ាងងាយស្រួល"
                    : "Handle Real-World Cambodian Shift Patterns"}
                </h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-body">
                  {isKm
                    ? "មិនថាជាហាងកាហ្វេដែលមានវេនបំបែក សណ្ឋាគារដែលដំណើរការ ២៤ម៉ោង ឬឃ្លាំងដែលមានវេនយប់ AttendKH ជួយឲ្យការគ្រប់គ្រងបុគ្គលិកដំណើរការយ៉ាងរលូន។"
                    : "From split shifts in hospitality to 24/7 rotating rosters in security and logistics, AttendKH gives area managers intuitive drag-and-drop scheduling tools."}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {shiftFeatures.map((f) => (
                  <div key={f.title} className="rounded-xl border border-line bg-paper p-4">
                    <h4 className="font-display text-sm font-bold text-ink">{f.title}</h4>
                    <p className="mt-1 text-xs text-body leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.06}>
                <ImageSlot label="Multi-Branch Management Console" ratio="4 / 3" />
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* Direct Answer Block for AEO / GEO */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <DirectAnswerBlock
            question={
              isKm
                ? "តើ AttendKH គ្រប់គ្រងអាជីវកម្មដែលមានច្រើនសាខានៅកម្ពុជាយ៉ាងដូចម្តេច?"
                : "How does AttendKH manage multi-branch operations across Cambodia?"
            }
            answer={
              isKm
                ? "AttendKH ផ្តល់នូវផ្ទាំងគ្រប់គ្រងកណ្តាលមួយដែលភ្ជាប់គ្រប់សាខានៅភ្នំពេញ សៀមរាប ព្រះសីហនុ និងបណ្តាខេត្តនានា។ ប្រព័ន្ធប្រើសិទ្ធិ ៤ កម្រិត (Super Admin, ម្ចាស់អាជីវកម្ម/HR, ប្រធានសាខា, បុគ្គលិក) ដែលអនុញ្ញាតឲ្យប្រធានសាខាគ្រប់គ្រងវេន និងអនុម័តច្បាប់នៅសាខាខ្លួន ខណៈដែលម្ចាស់អាជីវកម្មមើលឃើញទិន្នន័យវត្តមាន និងចំណាយប្រាក់ខែគ្រប់ទីតាំងទាំងអស់។"
                : "AttendKH provides a centralized console connecting branches across Phnom Penh, Siem Reap, Sihanoukville, and provincial hubs. With 4-tier Role-Based Access Control, branch managers oversee their assigned outlet schedules and approvals, while business owners and HR directors maintain global visibility over attendance, labor costs, and payroll from a single screen."
            }
            facts={[
              {
                label: isKm ? "កម្រិតសិទ្ធិប្រើប្រាស់" : "Access Hierarchy",
                value: isKm ? "៤ កម្រិត (Owner, HR, Manager, Staff)" : "4 Tiers (Owner, HR, Mgr, Staff)",
              },
              {
                label: isKm ? "ប្រភេទវេនការងារ" : "Shift Types Supported",
                value: isKm ? "វេនធម្មតា វេនបំបែក វេនយប់" : "Standard, Split, Overnight",
              },
              {
                label: isKm ? "ទិដ្ឋភាពគ្រប់គ្រង" : "Multi-Site Visibility",
                value: isKm ? "ផ្ទាំងគ្រប់គ្រងរួមគ្រប់សាខា" : "Consolidated Dashboard",
              },
            ]}
          />
        </div>
      </Section>

      <CtaBand
        title={b.ctaTitle}
        sub={
          isKm
            ? "រៀបចំសាខារបស់អ្នកទាំងអស់ និងចាប់ផ្តើមគ្រប់គ្រងវេនការងារ"
            : "Connect your branches and manage multi-site shifts from a single console."
        }
      />
    </>
  );
}
