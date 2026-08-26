import type { Metadata } from "next";
import Link from "next/link";
import {
  Truck,
  HardHat,
  MapPin,
  WifiOff,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Coins,
  Building2,
} from "lucide-react";
import { PageHero, Section, CtaBand, ImageSlot } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Attendance & Payroll for Construction & Logistics in Cambodia | AttendKH",
  description:
    "Offline-resilient clock-in, 200m yard geofences, anti-mock GPS defense, and multi-site foreman approvals for Cambodian logistics and construction sites.",
  openGraph: {
    title: "AttendKH for Logistics & Construction in Cambodia",
    description:
      "Engineered for field teams: offline punch caching, wide yard geofences, tamper-proof location verification, and automated contractor payroll.",
  },
};

export default function ConstructionLogisticsSolutionPage() {
  const painPoints = [
    {
      title: "Offline-Resilient Clock-In",
      desc: "Remote construction projects and deep warehouse facilities with poor cellular coverage never lose a punch. Punches are encrypted locally and auto-synced upon reconnecting.",
    },
    {
      title: "Wide Perimeter 200m Yard Geofences",
      desc: "Set wide customizable geofences tailored for massive logistics yards, container terminals, and multi-hectare building sites.",
    },
    {
      title: "Anti-Mock GPS Defense Shield",
      desc: "Active protection blocks location spoofing apps and fake GPS emulators, guaranteeing physical attendance at the assigned site.",
    },
    {
      title: "Multi-Site Project Cost Tracking",
      desc: "Track labor hours and overtime expenditure per individual construction project or logistics terminal in real time.",
    },
  ];

  return (
    <div className="space-y-16 py-8 sm:space-y-24 sm:py-12">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3.5 py-1 text-xs font-bold text-brand uppercase tracking-wider">
            <HardHat size={14} />
            <span>Construction & Logistics Solutions</span>
          </span>

          <h1 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Rugged Attendance & Payroll for Field & Logistics Teams
          </h1>

          <p className="mt-4 text-[16px] leading-relaxed text-body sm:text-[17px]">
            Designed for harsh field environments, remote project sites, and large industrial yards across Cambodia. Operates smoothly even without internet connectivity.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-brand-dark transition-all"
            >
              <span>Book Field Operations Demo</span>
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

        {/* Feature Showcase Box */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-paper p-6 sm:p-10 shadow-xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Field Reliability
              </span>
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                Zero Data Loss on Remote Job Sites & Warehouses
              </h2>
              <p className="text-sm leading-relaxed text-body">
                Field teams operate far beyond office Wi-Fi. AttendKH uses cryptographic timestamp caching to ensure every morning arrival and overtime punch is securely recorded even during network blackouts.
              </p>

              <ul className="space-y-3 text-xs font-medium text-ink">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Custom 100m–500m geofence radius for container depots and construction sites</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Mandatory selfie check prevents fake buddy punches among field crews</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>One-click export of project labor reports for general contractor billings</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <ImageSlot label="Logistics Yard Geofence & Field Punch Stream" ratio="4 / 3" />
            </div>
          </div>
        </div>

        {/* Pain Points Grid */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Engineered for Cambodia&apos;s Infrastructure & Logistics Boom
            </h2>
            <p className="text-sm text-body mt-2">
              Empowering construction contractors, freight forwarders, and logistics depots nationwide.
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
        title="Ready to gain complete control of your field teams?"
        sub="Talk to our operations specialist about setting up your construction or logistics branches."
        cta="Book a Demo for Field Operations"
        href="/contact"
      />
    </div>
  );
}
