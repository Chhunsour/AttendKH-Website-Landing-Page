import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import Link from "next/link";
import {
  UtensilsCrossed,
  Clock,
  MapPin,
  Camera,
  Coins,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
} from "lucide-react";
import { PageHero, Section, DirectAnswerBlock, CtaBand, ImageSlot } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Attendance & Payroll for Restaurants & Cafes in Cambodia | AttendKH",
  description:
    "Solve split shifts, late night closes, multi-outlet rosters, and buddy punching across your coffee shops, bakeries, and restaurants in Phnom Penh and Siem Reap.",
  alternates: { canonical: absoluteUrl("/solutions/restaurants-cafes") },
  openGraph: {
    title: "AttendKH for Restaurants & Cafes — Cambodian F&B Attendance",
    description:
      "Engineered for Cambodian F&B: split shift rosters, 50m branch geofences, selfie verification, and 1-click dual-currency payroll.",
    url: absoluteUrl("/solutions/restaurants-cafes"),
    siteName: "AttendKH",
    type: "website",
    locale: "en_US",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: "AttendKH attendance and payroll software" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [absoluteUrl("/opengraph-image")],
    title: "Attendance & Payroll for Cambodian Restaurants & Cafes",
    description: "GPS attendance, split shifts, and dual-currency payslips for F&B teams.",
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
      item: absoluteUrl("/solutions/restaurants-cafes"),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Restaurants & Cafes",
      item: absoluteUrl("/solutions/restaurants-cafes"),
    },
  ],
};

export default function RestaurantSolutionPage() {
  const painPoints = [
    {
      title: "Split Shifts Made Effortless",
      desc: "Frontline baristas and waitstaff easily clock in for lunch rush (10:30–14:00) and clock out, then return for dinner rush (17:00–22:00) without messy spreadsheet formulas.",
    },
    {
      title: "Add evidence to kitchen clock-ins",
      desc: "A configured branch geofence and selfie record help managers review whether a punch came from the expected location.",
    },
    {
      title: "Late Night Closes & Midnight Crossings",
      desc: "Shifts that finish past midnight (e.g. 18:00 to 02:00 AM) are properly allocated to the correct payroll period with automatic night premium allowances.",
    },
    {
      title: "Multi-Outlet Brand Visibility",
      desc: "See live staffing levels across your BKK1, Tuol Kork, Toul Tompoung, and Siem Reap branches from a single management dashboard on your phone.",
    },
  ];

  const features = [
    {
      title: "Instant Staff Replacement Alerts",
      desc: "If a barista is marked absent or late, branch managers receive immediate alerts to reassign floor duties.",
      icon: Users,
    },
    {
      title: "Dual Currency USD & KHR Payslips",
      desc: "Base wages, late deductions, and overtime bonuses calculated instantly in US Dollars ($) and Khmer Riel (៛).",
      icon: Coins,
    },
    {
      title: "Cambodian Public Holiday Multipliers",
      desc: "Configure the organization's approved multipliers for Pchum Ben, Khmer New Year, Water Festival, and other holidays.",
      icon: Sparkles,
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
              <UtensilsCrossed size={14} />
              <span>F&B & Hospitality Solutions</span>
            </span>

            <h1 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Attendance & Payroll Built for Cambodian Restaurants, Cafes & Bars
            </h1>

            <p className="mt-4 text-[16px] leading-relaxed text-body sm:text-[17px]">
              Say goodbye to paper logbooks, lost time cards, and buddy punching. Manage split shifts, late night closes, and multi-branch rosters with GPS-verified mobile clock-ins.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-brand-dark transition-all"
              >
                <span>Book F&B Demo</span>
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
              question="How does AttendKH handle restaurant and cafe shifts in Cambodia?"
              answer="AttendKH supports split-shift clock-ins for lunch and dinner service, configurable branch geofences with selfie records, and organization-defined holiday payroll multipliers in USD and KHR. Managers can review the attendance evidence and payroll inputs before each run."
              facts={[
                { label: "Branch Geofence", value: "50m Kitchen Boundary" },
                { label: "Shift Types", value: "Split & Midnight Crossings" },
                { label: "Holiday Multipliers", value: "Configured by Policy" },
              ]}
            />
          </div>

        {/* Feature Graphic Showcase */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-paper p-6 sm:p-10 shadow-xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Operational Excellence
              </span>
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                How AttendKH Simplifies Daily Food & Beverage Operations
              </h2>
              <p className="text-sm leading-relaxed text-body">
                Restaurants face unique scheduling challenges: high staff turnover, split shifts between peak lunch and dinner hours, and cash/allowance adjustments. AttendKH handles these workflows automatically.
              </p>

              <ul className="space-y-3 text-xs font-medium text-ink">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>50m Geofence around branch kitchen & dining room</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Selfie verification prevents colleagues from punching for friends</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Export ABA / ACLEDA / Canadia payroll batch files in 1 click</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <ImageSlot label="AttendKH (Attend) F&B Restaurant Branch Console and Shift Schedule" ratio="4 / 3" />
            </div>
          </div>
        </div>

        {/* Pain Points Grid */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Solved for Every Branch Manager & Kitchen Supervisor
            </h2>
            <p className="text-sm text-body mt-2">
              Designed specifically for fast-paced hospitality environments.
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

        {/* Three Value Pillars */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-line bg-mist/50 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand shadow-xs mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-[15.5px] font-bold text-ink">{f.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-body">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CtaBand
        title="Ready to modernise attendance across your restaurant chain?"
        sub="Join dozens of Cambodian hospitality groups using AttendKH to cut payroll admin time."
        cta="Book a Demo with Our F&B Specialist"
        href="/contact"
      />
    </div>
    </>
  );
}
