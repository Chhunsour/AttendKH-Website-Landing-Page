import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import Link from "next/link";
import {
  ShoppingBag,
  Store,
  MapPin,
  Camera,
  Coins,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building,
} from "lucide-react";
import { PageHero, Section, DirectAnswerBlock, CtaBand, ImageSlot } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Attendance & Payroll for Retail & Boutiques in Cambodia | AttendKH",
  description:
    "Control attendance across shopping mall outlets and retail stores in Cambodia. Real-time store opening visibility, commission lines, and automated dual-currency payroll.",
  alternates: { canonical: absoluteUrl("/solutions/retail") },
  openGraph: {
    title: "AttendKH for Retail Chains & Boutiques in Cambodia",
    description:
      "Seamless multi-store attendance across Aeon Malls, Chip Mong, and shopping centers. Automated overtime and bilingual payslips in USD and KHR.",
    url: absoluteUrl("/solutions/retail"),
    siteName: "AttendKH",
    type: "website",
    locale: "en_US",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: "AttendKH attendance and payroll software" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [absoluteUrl("/opengraph-image")],
    title: "Attendance & Payroll for Cambodian Retail Chains",
    description: "GPS attendance, mall store tracking, and automated payroll for retail.",
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
      item: absoluteUrl("/solutions/retail"),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Retail & Boutiques",
      item: absoluteUrl("/solutions/retail"),
    },
  ],
};

export default function RetailSolutionPage() {
  const painPoints = [
    {
      title: "Mall Outlet Synchronization",
      desc: "Synchronize shift rules across Aeon 1, Aeon Sen Sok, Aeon Mean Chey, and standalone boutique outlets across Phnom Penh.",
    },
    {
      title: "Store Opening Punctuality",
      desc: "Ensure store associates clock in before mall doors open. Automatic notifications alert area managers if a branch is unopened.",
    },
    {
      title: "Weekend & Peak Shopping Rosters",
      desc: "Effortlessly manage weekend rotational schedules and holiday shopping rushes with custom shift assignments in seconds.",
    },
    {
      title: "Commission & Performance Bonuses",
      desc: "Add sales commissions and performance bonuses directly to monthly payroll exports without manual spreadsheet reconciliation.",
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
              <ShoppingBag size={14} />
              <span>Retail & Fashion Solutions</span>
            </span>

            <h1 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Attendance & Labor Control for Multi-Store Retail Brands
            </h1>

            <p className="mt-4 text-[16px] leading-relaxed text-body sm:text-[17px]">
              Keep every retail store staffed, punctual, and profitable. Track floor attendance across all shopping centers from your headquarters in real time.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-brand-dark transition-all"
              >
                <span>Book Retail Demo</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-6 py-3.5 text-sm font-semibold text-ink hover:bg-mist transition-colors"
              >
                <span>Explore Pricing</span>
              </Link>
            </div>
          </div>

          {/* Direct Answer Block */}
          <div className="mt-12">
            <DirectAnswerBlock
              question="How does AttendKH improve multi-store retail operations in Cambodia?"
              answer="AttendKH gives retail founders and area managers immediate visibility across all mall outlets (Aeon Malls, Chip Mong, Makro, and standalone boutiques). Staff verify clock-ins inside their designated 50m store radius with a live selfie, preventing unpunctual store openings and buddy punching, while sales commissions and late deductions calculate into dual-currency payroll automatically."
              facts={[
                { label: "Store Visibility", value: "Real-Time Headcount by Mall" },
                { label: "Punctuality Alerts", value: "Instant Unopened Store Flags" },
                { label: "Commission Lines", value: "Direct Additions to Payslips" },
              ]}
            />
          </div>

        {/* Feature Showcase Box */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-paper p-6 sm:p-10 shadow-xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Chain Management
              </span>
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                Unify 5 to 50 Store Locations in One Live Console
              </h2>
              <p className="text-sm leading-relaxed text-body">
                Retail headquarters often lack visibility into whether mall store associates arrive on time or leave early. AttendKH delivers transparent GPS radius verification and digital clock-in proof for every store.
              </p>

              <ul className="space-y-3 text-xs font-medium text-ink">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Precise 50m geofence ensures staff are inside the store, not wandering the mall</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Store manager shift swaps and approval workflows in one tap</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Automatic Cambodian labor law overtime multipliers (1.5× / 2.0×)</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <ImageSlot label="AttendKH (Attend) Retail Multi-Store Attendance & Branch Console" ratio="4 / 3" />
            </div>
          </div>
        </div>

        {/* Pain Points Grid */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Engineered for Cambodia&apos;s Growing Retail Ecosystem
            </h2>
            <p className="text-sm text-body mt-2">
              From standalone fashion boutiques to nationwide electronics chains.
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
        title="Scale your retail chain with confidence"
        sub="Schedule a 15-minute consultation to see how AttendKH streamlines multi-store operations."
        cta="Book a Demo for Your Retail Chain"
        href="/contact"
      />
    </div>
    </>
  );
}
