"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Camera,
  ShieldCheck,
  Radio,
  Tablet,
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  Clock,
} from "lucide-react";
import {
  useCopy,
  PageHero,
  Section,
  SectionHead,
  FeatureList,
  DirectAnswerBlock,
  Reveal,
  CtaBand,
} from "@/components/site/ui";
import { useSite } from "@/lib/i18n";

export function AttendanceView() {
  const c = useCopy();
  const a = c.attendance;
  const { lang } = useSite();
  const isKm = lang === "km";

  const featureCards = [
    {
      icon: MapPin,
      title: isKm ? "កាំ Geofence សាខា ៥០–២០០ម" : "50–200m Branch Geofence",
      desc: isKm
        ? "កំណត់កូអរដោនេ GPS ជាក់លាក់សម្រាប់ហាង ការិយាល័យ ឬឃ្លាំង។ បុគ្គលិកអាចចុះវត្តមានបានលុះត្រាតែស្ថិតក្នុងកាំដែលបានកំណត់។"
        : "Define precise GPS pinpoints and customized perimeter radii (50m for cafes, 200m for logistics yards). Clock-ins outside the zone are blocked.",
    },
    {
      icon: Camera,
      title: isKm ? "រូបថត Selfie ផ្ទាល់រាល់ការចុះ" : "Live Selfie Verification",
      desc: isKm
        ? "អាចតម្រូវឱ្យថតរូប Selfie នៅពេលចុះវត្តមាន ហើយរក្សាទុកជាមួយម៉ោងសម្រាប់អ្នកគ្រប់គ្រងពិនិត្យ។"
        : "A camera snapshot can be required on each punch and is stored with the attendance time for manager review.",
    },
    {
      icon: ShieldCheck,
      title: isKm ? "ប្រព័ន្ធទប់ស្កាត់ GPS ក្លែងក្លាយ" : "Anti-Mock Location Defense",
      desc: isKm
        ? "រារាំងកម្មវិធី Mock Location កម្មវិធីក្លែងកូអរដោនេ និងទូរស័ព្ទ Jailbreak/Rooted ដោយស្វ័យប្រវត្តិ។"
        : "Detects and prevents GPS spoofing apps, emulator environments, and unrealistic coordinate jumps across Cambodia.",
    },
    {
      icon: Radio,
      title: isKm ? "ធ្វើសមកាលកម្ម Cloud ផ្ទាល់ (Real-Time)" : "Real-Time Cloud Sync",
      desc: isKm
        ? "ទិន្នន័យចុះវត្តមាន និងរូបថត Selfie បញ្ជូនទៅកាន់កុងសូលកណ្តាលភ្លាមៗ ដើម្បីឲ្យម្ចាស់អាជីវកម្ម និងអ្នកគ្រប់គ្រងដឹងពីវត្តមានជាក់ស្តែង។"
        : "Punches and live selfies stream instantly to the central cloud console for immediate attendance visibility and payroll integration.",
    },
    {
      icon: Tablet,
      title: isKm ? "ថេប្លេតរួម QR Kiosk នៅមាត់ទ្វារ" : "Shared QR Tablet Kiosk",
      desc: isKm
        ? "សម្រាប់បុគ្គលិកដែលមិនប្រើស្មាតហ្វូន អាចប្រើថេប្លេតរួមមួយនៅមាត់ទ្វារសាខាដើម្បីស្កេន QR និងថតរូបចុះវត្តមាន។"
        : "Mount a single shared tablet at the branch door for warehouse, cleaner, or kitchen crews using personalized QR badges.",
    },
    {
      icon: FileSpreadsheet,
      title: isKm ? "មូលហេតុយឺតស្របតាមការងារជាក់ស្តែង" : "Configurable Late Reason Logging",
      desc: isKm
        ? "ជម្រើសមូលហេតុមកយឺតជាក់ស្តែងនៅកម្ពុជា៖ ភ្លៀងខ្លាំង ស្ទះចរាចរណ៍ យានយន្តខូច ឬមានវេជ្ជបញ្ជាពេទ្យ។"
        : "Allow staff to select standard localized reasons for tardiness (heavy monsoon rain, city traffic, vehicle breakdown, clinic visit).",
    },
  ];

  return (
    <>
      <PageHero title={a.title} sub={a.sub} />

      {/* Main Image Showcase & Overview */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <div className="overflow-hidden rounded-3xl border border-line bg-mist/30 p-4 sm:p-8 shadow-xs">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand uppercase tracking-wider">
                  <MapPin size={13} />
                  <span>{isKm ? "ផ្ទៀងផ្ទាត់វត្តមាន" : "Attendance Evidence"}</span>
                </span>
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {isKm
                    ? "វត្តមានត្រឹមត្រូវ មានទីតាំង ពេលវេលា និងរូបថតភស្តុតាង"
                    : "Every Clock-In Carries Proof: Exact Time, Verified Location, and Photo"}
                </h2>
                <p className="text-[15px] leading-relaxed text-body">
                  {isKm
                    ? "AttendKH បំប្លែងទូរស័ព្ទរបស់បុគ្គលិកទៅជាឧបករណ៍ចុះវត្តមាន។ បុគ្គលិកចុចចុះវត្តមានក្នុងកាំសាខា ហើយអាចភ្ជាប់រូបថតសម្រាប់អ្នកគ្រប់គ្រងពិនិត្យ។"
                    : "AttendKH turns your team’s mobile devices into localized timeclocks. Staff tap to punch within the designated branch radius, with an optional photo record for manager review."}
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-xs hover:bg-brand-dark transition-all"
                  >
                    <span>{isKm ? "កក់ការបង្ហាញវត្តមាន" : "Book an Attendance Demo"}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-line bg-white shadow-md">
                  <Image
                    src="/clockin-frame-3.webp"
                    alt={isKm ? "អេក្រង់ចុះវត្តមាន AttendKH (Attend) តាម GPS និង Selfie នៅកម្ពុជា" : "AttendKH (Attend) GPS Geofence & Selfie Clock-In Interface in Cambodia"}
                    width={960}
                    height={810}
                    priority
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Feature Cards Grid */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead
            title={isKm ? "លក្ខណៈពិសេសនៃការកត់ត្រាវត្តមាន" : "Engineered for Complete Clock-In Integrity"}
            sub={
              isKm
                ? "រចនាឡើងយ៉ាងជាក់លាក់ដើម្បីដោះស្រាយបញ្ហាវត្តមានជាក់ស្តែងនៅតាមសាខា"
                : "Six purpose-built capabilities preventing proxy punches and attendance disputes."
            }
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={i * 0.05}>
                  <article className="h-full rounded-2xl border border-line bg-paper p-6 shadow-xs hover:border-brand hover:shadow-md transition-all">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-[16.5px] font-bold text-ink">{f.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-body">{f.desc}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Direct Answer Block for AEO / GEO */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <DirectAnswerBlock
            question={
              isKm
                ? "តើការចុះវត្តមានតាម GPS និង Selfie របស់ AttendKH ដំណើរការយ៉ាងដូចម្តេច?"
                : "How does GPS and selfie attendance verification work with AttendKH?"
            }
            answer={
              isKm
                ? "AttendKH អានកូអរដោនេ GPS នៅពេលបុគ្គលិកបញ្ជូនការចុះ ឬចេញវត្តមាន ពិនិត្យកាំសាខា ៥០–២០០ ម៉ែត្រដែលបានកំណត់ និងអាចតម្រូវឱ្យថតរូប selfie សម្រាប់អ្នកគ្រប់គ្រងពិនិត្យ។ ដំណើរការចុះវត្តមានមិនតម្រូវឱ្យតាមដានផ្លូវជាបន្តបន្ទាប់ទេ។ សូមមើលគោលការណ៍ឯកជនភាពសម្រាប់ព័ត៌មានអំពីទិន្នន័យ។"
                : "AttendKH reads GPS coordinates when an employee submits a clock-in or clock-out, checks the configured 50–200 meter branch radius, and can require a selfie for manager review. The clock-in flow does not require continuous route tracking; see the Privacy Policy for full data-handling terms."
            }
            facts={[
              {
                label: isKm ? "កាំ Geofence សាខា" : "Geofence Radius",
                value: "50m – 200m",
              },
              {
                label: isKm ? "ការតាមដានពេលក្រៅម៉ោង" : "Off-Duty Tracking",
                value: isKm ? "មិនមានការតាមដាន" : "No Background Tracking",
              },
              {
                label: isKm ? "ល្បឿនសមកាលកម្ម" : "Cloud Sync Speed",
                value: isKm ? "ភ្លាមៗ Real-Time (< ១ វិនាទី)" : "Instant Real-Time (< 1s)",
              },
            ]}
          />
        </div>
      </Section>

      {/* Split Live Dashboard Section */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHead title={a.splitTitle} sub={a.splitDesc} />
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 text-emerald-500 shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-ink">
                      {isKm ? "ដឹងពីវត្តមានវេនព្រឹកទាន់ពេល" : "Real-Time Morning Shift Visibility"}
                    </h3>
                    <p className="text-xs text-body mt-0.5">
                      {isKm
                        ? "ប្រធានសាខាដឹងពីបុគ្គលិកមកយឺត ឬអវត្តមានក្នុងរយៈពេល ១០ នាទីដំបូងនៃវេន"
                        : "Managers spot staffing shortages in the first 10 minutes rather than at month end."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 text-emerald-500 shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-ink">
                      {isKm ? "ការកែប្រែម៉ោងមានកំណត់ហេតុត្រឹមត្រូវ" : "Audit-Logged Shift Adjustments"}
                    </h3>
                    <p className="text-xs text-body mt-0.5">
                      {isKm
                        ? "រាល់ការកែម៉ោង ឬអនុម័តច្បាប់ឈប់ត្រូវបានកត់ត្រាទុកក្នុងប្រព័ន្ធដោយមិនអាចកែបន្លំបាន"
                        : "Any manual punch override requires supervisor authorization with logged rationale."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Reveal delay={0.06}>
              <div className="rounded-2xl border border-line bg-paper p-6 shadow-md">
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-brand" />
                    <span className="font-display text-xs font-bold text-ink">
                      {isKm ? "ផ្ទាំងតាមដានវត្តមានសាខាផ្ទាល់" : "Live Branch Attendance Roster"}
                    </span>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10.5px] font-bold text-emerald-700">
                    Live Synced
                  </span>
                </div>

                <div className="mt-4 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between rounded-xl bg-mist p-3 border border-line">
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-full bg-brand text-white flex items-center justify-center font-bold text-[11px]">
                        BF
                      </div>
                      <div>
                        <p className="font-semibold text-ink">Barista / Floor Staff</p>
                        <p className="text-[10px] text-slate-500">BKK1 Branch • Shift 07:00–15:30</p>
                      </div>
                    </div>
                    <span className="font-mono text-emerald-800 font-bold">06:54 AM (In Radius)</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-mist p-3 border border-line">
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold text-[11px]">
                        SA
                      </div>
                      <div>
                        <p className="font-semibold text-ink">Store Associate</p>
                        <p className="text-[10px] text-slate-500">Tuol Kork • Shift 08:00–17:00</p>
                      </div>
                    </div>
                    <span className="font-mono text-amber-800 font-bold">08:12 AM (Late: Heavy Rain)</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-mist p-3 border border-line">
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-[11px]">
                        FD
                      </div>
                      <div>
                        <p className="font-semibold text-ink">Front Desk Staff</p>
                        <p className="text-[10px] text-slate-500">Siem Reap • Annual Leave</p>
                      </div>
                    </div>
                    <span className="font-mono text-slate-500 font-medium">Approved Leave (1/1)</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaBand title={a.ctaTitle} sub={isKm ? "ចាប់ផ្តើមសាកល្បងឥតគិតថ្លៃ ១៤ ថ្ងៃ ជាមួយសាខាពិតរបស់អ្នក" : "Set up your branches and test live clock-ins with your team during onboarding."} />
    </>
  );
}
