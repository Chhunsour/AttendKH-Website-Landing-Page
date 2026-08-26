"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Coins,
  Calculator,
  Calendar,
  FileCheck,
  Building,
  CheckCircle2,
  ArrowRight,
  Download,
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
import { PayrollSimulator } from "@/components/site/simulator";
import { useSite } from "@/lib/i18n";

export function PayrollView() {
  const c = useCopy();
  const p = c.payroll;
  const { lang } = useSite();
  const isKm = lang === "km";

  const featureCards = [
    {
      icon: Coins,
      title: isKm ? "ប័ណ្ណប្រាក់ខែពីររូបិយប័ណ្ណ ($ / ៛)" : "Dual-Currency Payslips (USD & KHR)",
      desc: isKm
        ? "រក្សាទុកប្រាក់ខែមូលដ្ឋានតាមរូបិយប័ណ្ណកិច្ចសន្យា ហើយបង្ហាញប័ណ្ណប្រាក់ខែជាដុល្លារ និងរៀលទន្ទឹមគ្នាតាមការកំណត់របស់អ្នក។"
        : "Store base pay in the contract currency and prepare payslips displaying USD ($) and Khmer Riel (៛) side-by-side at the organization's set exchange rate.",
    },
    {
      icon: Calendar,
      title: isKm ? "មេគុណម៉ោងបន្ថែមស្របច្បាប់" : "Configurable Overtime Multipliers",
      desc: isKm
        ? "អនុវត្តអត្រាថែមម៉ោង ១.៥x សម្រាប់ថ្ងៃធ្វើការធម្មតា និង ២.០x សម្រាប់ថ្ងៃសម្រាកប្រចាំសប្តាហ៍ និងថ្ងៃបុណ្យជាតិផ្លូវការ។"
        : "Configure multipliers such as 1.5× or 2.0× for overtime, rest days, and public holidays after reviewing company policy and applicable rules.",
    },
    {
      icon: Calculator,
      title: isKm ? "រយៈពេលអនុគ្រោះ និងការកាត់យឺត" : "Configurable Grace Periods & Late Rules",
      desc: isKm
        ? "កំណត់ចំនួននាទីអនុគ្រោះ (ឧ. ១៥ នាទី) មុនពេលប្រព័ន្ធចាប់ផ្តើមកាត់ប្រាក់យឺតតាមរូបមន្តច្បាស់លាស់។"
        : "Set an initial grace threshold (e.g. 15 minutes) before proportional minute-by-minute late deductions apply.",
    },
    {
      icon: FileCheck,
      title: isKm ? "វិភាគទាន ប.ស.ស. និងប្រាក់អតីតភាព" : "NSSF (ប.ស.ស.) Lines & Seniority Pay",
      desc: isKm
        ? "គណនាវិភាគទានថែទាំសុខភាព និងហានិភ័យការងាររបស់ ប.ស.ស. ព្រមទាំងប្រាក់អតីតភាពការងារដោយស្វ័យប្រវត្តិ។"
        : "Automatic line items for National Social Security Fund (NSSF) healthcare/injury contributions and semi-annual seniority pay.",
    },
    {
      icon: Building,
      title: isKm ? "នាំចេញឯកសារធនាគារក្នុងស្រុក" : "Local Cambodian Bank Payroll Exports",
      desc: isKm
        ? "ទាញយកឯកសារបើកប្រាក់ខែជាទម្រង់ ABA, ACLEDA, Wing, Canadia, ឬ Bakong CSV ក្នុង ១ ចុច។"
        : "Export batch transfer CSV files formatted specifically for ABA iBus, ACLEDA Corporate, Wing, and Canadia Bank.",
    },
    {
      icon: Download,
      title: isKm ? "ទាញយកប័ណ្ណប្រាក់ខែ PDF លើទូរស័ព្ទ" : "Employee Mobile PDF Downloads",
      desc: isKm
        ? "បុគ្គលិកអាចមើល និងទាញយកប័ណ្ណប្រាក់ខែ PDF ជាភាសាខ្មែរ ឬអង់គ្លេសផ្ទាល់ពីទូរស័ព្ទដៃរបស់ពួកគេ។"
        : "Staff securely view and download signed digital PDF payslips in Khmer or English directly in their mobile app.",
    },
  ];

  return (
    <>
      <PageHero title={p.title} sub={p.sub}>
        <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-xl bg-white/15 px-4 py-2.5 font-mono text-[13.5px] text-white backdrop-blur-xs">
          <span className="font-bold text-blue-200">{p.formulaLabel}:</span>
          <span>{p.formula}</span>
        </div>
      </PageHero>

      {/* Real Payslip Image Showcase */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <div className="overflow-hidden rounded-3xl border border-line bg-mist/30 p-4 sm:p-8 shadow-xs">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand uppercase tracking-wider">
                  <Coins size={13} />
                  <span>{isKm ? "ប្រាក់ខែស្វ័យប្រវត្តិ" : "Payroll Rule Engine"}</span>
                </span>
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {isKm
                    ? "បិទបញ្ជីប្រាក់ខែត្រឹមតែមួយរសៀល ជំនួសការចំណាយពេល ៣–៤ ថ្ងៃ"
                    : "Prepare monthly payroll without spreadsheet re-entry"}
                </h2>
                <p className="text-[15px] leading-relaxed text-body">
                  {isKm
                    ? "ទិន្នន័យម៉ោងធ្វើការ ម៉ោងបន្ថែម ការមកយឺត និងច្បាប់ឈប់សម្រាក អាចបញ្ចូលទៅក្នុងរូបមន្តប្រាក់ខែ ដោយកាត់បន្ថយការបញ្ចូលទិន្នន័យឡើងវិញក្នុង Excel។"
                    : "Verified attendance timestamps flow straight into monthly payroll formulas. Overtime, late penalties, and leave balances apply themselves, producing audit-ready payslips and bank files."}
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-xs hover:bg-brand-dark transition-all"
                  >
                    <span>{isKm ? "កក់ការបង្ហាញប្រាក់ខែ" : "Book a Payroll Demo"}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-line bg-white shadow-md">
                  <Image
                    src="/payslip-frame-4.webp"
                    alt={isKm ? "គំរូប័ណ្ណប្រាក់ខែទ្វេភាសា AttendKH" : "AttendKH Bilingual Cambodian Payslip"}
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
            title={isKm ? "មុខងារប្រព័ន្ធប្រាក់បៀវត្សរ៍កម្ពុជា" : "Cambodia-ready payroll controls"}
            sub={
              isKm
                ? "កំណត់ម៉ោងបន្ថែម ច្បាប់ឈប់ ប.ស.ស. រូបិយប័ណ្ណ និងការនាំចេញធនាគារ រួចផ្ទៀងផ្ទាត់ច្បាប់ដែលអនុវត្តចំពោះអង្គភាពរបស់អ្នក។"
                : "Configure overtime, leave, NSSF, currency, and bank-export workflows, then validate the rules that apply to your organization."
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
                ? "តើរូបមន្តគណនាប្រាក់បៀវត្សរ៍ និងម៉ោងបន្ថែមរបស់ AttendKH ដំណើរការយ៉ាងដូចម្តេច?"
                : "How are payroll calculations configured in AttendKH?"
            }
            answer={
              isKm
                ? "AttendKH អនុញ្ញាតឱ្យក្រុមប្រាក់ខែកំណត់រូបមន្តអត្រាម៉ោង មេគុណម៉ោងបន្ថែម ការមកយឺត ច្បាប់ឈប់ បន្ទាត់ ប.ស.ស. និងរូបិយប័ណ្ណ។ គំរូមួយប្រើ (ប្រាក់ខែមូលដ្ឋាន ÷ ថ្ងៃធ្វើការ) ÷ ៨ ម៉ោង ជាមួយមេគុណ ១.៥x និង ២.០x ដែលអាចកែបាន។ សូមផ្ទៀងផ្ទាត់ការកំណត់ជាមួយអ្នកជំនាញប្រាក់ខែ ឬច្បាប់មុនប្រើប្រាស់។"
                : "AttendKH lets payroll teams define an hourly formula, overtime multipliers, late rules, leave treatment, NSSF lines, and currency settings. The example setup uses (Base Salary ÷ Working Days) ÷ 8 Hours with configurable 1.5× and 2.0× multipliers. Review every configuration with a qualified payroll or legal adviser before use."
            }
            facts={[
              {
                label: isKm ? "រូបមន្តអត្រាម៉ោង" : "Hourly Rate Formula",
                value: "(Base ÷ Days) ÷ 8 hrs",
              },
              {
                label: isKm ? "អត្រាថែមម៉ោងបុណ្យជាតិ" : "Holiday Overtime Multiplier",
                value: "Configured by Policy",
              },
              {
                label: isKm ? "ការនាំចេញធនាគារ" : "Bank Batch Exports",
                value: "ABA, ACLEDA, Wing, CSV",
              },
            ]}
          />
        </div>
      </Section>

      {/* Interactive Live Simulator */}
      <Section tone="mist">
        <div className="mx-auto max-w-[1240px]">
          <SectionHead title={p.simTitle} sub={p.simSub} />
          <Reveal delay={0.06}>
            <div className="mt-10">
              <PayrollSimulator />
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        title={p.ctaTitle}
        sub={
          isKm
            ? "សាកល្បងដំណើរការប្រាក់ខែពិតមួយដងជាមួយក្រុមរបស់អ្នក ដោយឥតគិតថ្លៃ"
            : "Run your next monthly payroll with AttendKH. Free 14-day trial, no credit card required."
        }
      />
    </>
  );
}
