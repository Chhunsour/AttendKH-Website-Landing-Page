import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import Link from "next/link";
import {
  Hotel,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Users,
  Coins,
  BedDouble,
} from "lucide-react";
import { PageHero, Section, DirectAnswerBlock, CtaBand, ImageSlot } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Attendance & Payroll for Hotels & Resorts in Cambodia | AttendKH",
  description:
    "24/7 rotational rosters, configurable night and holiday payroll rules, service-charge lines, and dual-currency payslips for Cambodian hotels and resorts.",
  alternates: { canonical: absoluteUrl("/solutions/hospitality") },
  openGraph: {
    title: "AttendKH for Hotels, Resorts & Spas in Cambodia",
    description:
      "Engineered for Cambodian hospitality: 24/7 shift rosters, department-level attendance, and automated dual-currency USD/KHR payslips.",
    url: absoluteUrl("/solutions/hospitality"),
    siteName: "AttendKH",
    type: "website",
    locale: "en_US",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: "AttendKH attendance and payroll software" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [absoluteUrl("/opengraph-image")],
    title: "Attendance & Payroll for Cambodian Hotels & Resorts",
    description: "24/7 shifts, night premiums, and automated payroll for hospitality teams.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solutions",
      item: absoluteUrl("/solutions/hospitality"),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Hotels & Hospitality",
      item: absoluteUrl("/solutions/hospitality"),
    },
  ],
};

export default function HospitalitySolutionPage() {
  const painPoints = [
    {
      title: "24/7 Rotating Shift Rosters",
      desc: "Manage morning, afternoon, and night audit shifts seamlessly across front desk, housekeeping, concierge, and engineering.",
    },
    {
      title: "Night Shift & Overtime Multipliers",
      desc: "Configure night-work and overtime multipliers for overnight front-desk, engineering, and security teams.",
    },
    {
      title: "Service Charge & Point Distribution",
      desc: "Incorporate service charge points and tips into monthly payroll exports with itemized transparent payslips in USD and KHR.",
    },
    {
      title: "Department-Level Visibility",
      desc: "Department heads (F&B Director, Executive Housekeeper) manage their own rosters while General Managers retain global visibility.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="space-y-16 py-8 sm:space-y-24 sm:py-12">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-14">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3.5 py-1 text-xs font-bold text-brand uppercase tracking-wider">
              <BedDouble size={14} />
              <span>Hotels & Resorts Solution</span>
            </span>

            <h1 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              24/7 Attendance & Payroll for Cambodian Hotels & Resorts
            </h1>

            <p className="mt-4 text-[16px] leading-relaxed text-body sm:text-[17px]">
              Coordinate 24/7 operations across departments with recorded attendance, rotating rosters, and configurable payroll rules.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-brand-dark transition-all"
              >
                <span>Book Hospitality Demo</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-6 py-3.5 text-sm font-semibold text-ink hover:bg-mist transition-colors"
              >
                <span>View Pricing Plans</span>
              </Link>
            </div>
          </div>

          {/* Direct Answer Block */}
          <div className="mt-12">
            <DirectAnswerBlock
              question="How does AttendKH coordinate 24/7 hotel rosters in Cambodia?"
              answer="AttendKH supports rotating schedules for front desk, housekeeping, concierge, security, and maintenance. Hotel teams can configure night and holiday payroll multipliers, assign department-level approvals, and produce bilingual USD and KHR payslips with itemized payroll lines. Each organization should validate its rules with a qualified adviser."
              facts={[
                { label: "Operation Type", value: "24/7 Rotational 3-Shift Support" },
                { label: "Night Shift Multipliers", value: "Configured by Policy" },
                { label: "Property Geofence", value: "Custom 50–100m Resort Radius" },
              ]}
            />
          </div>

        {/* Feature Showcase Box */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-paper p-6 sm:p-10 shadow-xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Department Roster Engine
              </span>
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                Uncomplicate 3-Shift 24/7 Operations Across All Departments
              </h2>
              <p className="text-sm leading-relaxed text-body">
                AttendKH gives hotel HR and department managers tools to coordinate rotating shifts, handle shift swaps, and apply the organization&apos;s approved holiday payroll rules.
              </p>

              <ul className="space-y-3 text-xs font-medium text-ink">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>50–100m geofence covering the entire hotel property and grounds</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Configurable selfie records give managers additional punch evidence</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Dual currency USD & KHR payslips with NSSF (ប.ស.ស.) deduction breakdowns</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <ImageSlot label="AttendKH (Attend) Hotel Department Rosters and Multi-Shift Console" ratio="4 / 3" />
            </div>
          </div>
        </div>

        {/* Pain Points Grid */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Engineered for Cambodia&apos;s World-Class Hospitality Industry
            </h2>
            <p className="text-sm text-body mt-2">
              From boutique riverside retreats to 200+ room luxury resort hotels.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl border border-line bg-paper p-6 shadow-xs hover:border-brand hover:shadow-md transition-all"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand mb-4 font-bold text-xs">
                  0{i + 1}
                </div>
                <h3 className="font-display text-[16px] font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-body">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaBand
        title="Elevate staff punctuality and guest satisfaction"
        sub="Book a tailored walkthrough for your hotel or resort management team."
        cta="Schedule a Hotel Demo"
        href="/contact"
      />
    </div>
    </>
  );
}
