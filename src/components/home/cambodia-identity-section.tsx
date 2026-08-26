"use client";

import {
  Flag,
  Globe,
  Coins,
  Calendar,
  Layers,
  WifiOff,
  Building2,
  FileCheck,
  ShieldCheck,
} from "lucide-react";
import { useSite } from "@/lib/i18n";

export function CambodiaIdentitySection() {
  const { lang } = useSite();
  const isKm = lang === "km";

  const features = [
    {
      icon: Globe,
      titleEn: "Khmer & English Bilingual UI",
      titleKm: "ទ្វេភាសា ខ្មែរ និង អង់គ្លេស",
      descEn:
        "Full native Khmer language interface for frontline staff and English for management. Switch anytime in one tap.",
      descKm:
        "ចំណុចប្រទាក់ភាសាខ្មែរពេញលេញសម្រាប់បុគ្គលិកជួរមុខ និងភាសាអង់គ្លេសសម្រាប់អ្នកគ្រប់គ្រង។ ប្តូរបានភ្លាមៗ។",
    },
    {
      icon: Coins,
      titleEn: "Dual-Currency Payroll (USD & KHR)",
      titleKm: "ប្រាក់បៀវត្សរ៍ទ្វេប្រាក់ ដុល្លារ និង រៀល",
      descEn:
        "Calculate base salaries, late deductions, overtime bonuses, and export bilingual payslips in both US Dollars ($) and Khmer Riel (៛).",
      descKm:
        "គណនាប្រាក់ខែមូលដ្ឋាន ការកាត់យឺត ប្រាក់ថែមម៉ោង និងបោះពុម្ពប័ណ្ណបើកប្រាក់ខែជាប្រាក់ដុល្លារ ($) និងប្រាក់រៀល (៛)។",
    },
    {
      icon: Calendar,
      titleEn: "Cambodian Public Holidays Calendar",
      titleKm: "ប្រតិទិនបុណ្យជាតិ និងច្បាប់សម្រាកកម្ពុជា",
      descEn:
        "Pre-loaded statutory Cambodian public holidays and annual leave allowances aligned with Ministry of Labour regulations.",
      descKm:
        "ភ្ជាប់មកជាមួយប្រតិទិនថ្ងៃឈប់សម្រាកបុណ្យជាតិផ្លូវការ និងការគណនាច្បាប់ឈប់សម្រាកប្រចាំឆ្នាំត្រឹមត្រូវ។",
    },
    {
      icon: FileCheck,
      titleEn: "Statutory Overtime & NSSF Lines",
      titleKm: "អត្រាថែមម៉ោង 1.5x/2.0x និង ប.ស.ស.",
      descEn:
        "Enforces 1.5× regular OT and 2.0× rest day/holiday multipliers with itemized NSSF (ប.ស.ស.) contribution breakdowns.",
      descKm:
        "អនុវត្តអត្រាថែមម៉ោង 1.5x ថ្ងៃធម្មតា និង 2.0x ថ្ងៃបុណ្យ/សម្រាកសប្តាហ៍ ព្រមទាំងការកាត់ប្រាក់វិភាគទាន ប.ស.ស. យ៉ាងត្រឹមត្រូវ។",
    },
    {
      icon: Building2,
      titleEn: "Multi-Branch Cross-Province Control",
      titleKm: "គ្រប់គ្រងបណ្តាញសាខាទូទាំងខេត្ត-ក្រុង",
      descEn:
        "Centralized labor visibility across Phnom Penh, Siem Reap, Sihanoukville, Battambang, and Kampot from a single screen.",
      descKm:
        "មើលទិដ្ឋភាពបុគ្គលិក និងការចំណាយលើកម្លាំងពលកម្មនៅភ្នំពេញ សៀមរាប ព្រះសីហនុ បាត់ដំបង និងកំពត លើអេក្រង់តែមួយ។",
    },
    {
      icon: WifiOff,
      titleEn: "Offline Resilient Attendance Sync",
      titleKm: "កត់ត្រាម៉ោងបាន ទោះគ្មានអ៊ីនធឺណិត (Offline)",
      descEn:
        "If mobile data or Wi-Fi drops, staff punches are securely cryptographically cached locally and auto-synced upon reconnecting.",
      descKm:
        "ប្រសិនបើដាច់សេវាទូរស័ព្ទ ឬ Wi-Fi ទិន្នន័យកត់ត្រាម៉ោងត្រូវរក្សាទុកដោយសុវត្ថិភាពក្នុងទូរស័ព្ទ ហើយធ្វើសមកាលកម្មស្វ័យប្រវត្តិពេលមានសេវាវិញ។",
    },
  ];

  return (
    <div className="rounded-3xl border border-line bg-gradient-to-b from-brand-soft/50 via-white to-white p-6 sm:p-10 lg:p-14">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white shadow-xs">
          <span>🇰🇭</span>
          <span>{isKm ? "ផលិតឡើងសម្រាប់អាជីវកម្មនៅកម្ពុជា" : "Engineered for Cambodia"}</span>
        </span>

        <h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
          {isKm
            ? "រចនាឡើងយ៉ាងជាក់លាក់ ស្របតាមរបៀបដំណើរការអាជីវកម្មនៅកម្ពុជា"
            : "Built Specifically for How Cambodian Organizations Operate"}
        </h2>

        <p className="mt-3.5 text-[15px] leading-relaxed text-body sm:text-[16px]">
          {isKm
            ? "មិនមែនជាកម្មវិធីបរទេសដែលបកប្រែពាក្យនោះទេ។ AttendKH ត្រូវបានបង្កើតឡើងដើម្បីដោះស្រាយបញ្ហាបន្លំម៉ោង គណនាប្រាក់ខែទ្វេប្រាក់ ដុល្លារ/រៀល និងគោរពច្បាប់ការងារកម្ពុជាទាំងស្រុង។"
            : "AttendKH solves proxy punching, dual-currency salaries, split shifts, and Cambodian labor compliance natively — without spreadsheets or overseas workarounds."}
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex flex-col justify-between rounded-2xl border border-line bg-paper p-6 shadow-xs transition-all hover:border-brand hover:shadow-md"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand mb-4 shadow-xs">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-[16px] font-bold text-ink">
                  {isKm ? item.titleKm : item.titleEn}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-body">
                  {isKm ? item.descKm : item.descEn}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
