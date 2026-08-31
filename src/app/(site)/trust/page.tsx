import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Database,
  History,
  FileCheck,
  Server,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import { PageHero, Section, DirectAnswerBlock, CtaBand } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Trust & Security Center | AttendKH",
  description:
    "Learn how AttendKH handles employee location checks, payroll data, access boundaries, and supervisor change records.",
  alternates: { canonical: absoluteUrl("/trust") },
  openGraph: {
    title: "AttendKH Trust Center — Security & Privacy Architecture",
    description:
      "Clear privacy boundaries for point-in-time GPS checks, encrypted data, and role-based access control.",
    url: absoluteUrl("/trust"),
    siteName: "AttendKH",
    type: "website",
    locale: "en_US",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: "AttendKH attendance and payroll software" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [absoluteUrl("/opengraph-image")],
    title: "Trust & Security Center | AttendKH",
    description: "Point-in-time GPS verification, encrypted data handling, and role-based access control.",
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
      name: "Trust & Security",
      item: absoluteUrl("/trust"),
    },
  ],
};

export default function TrustPage() {
  const principles = [
    {
      icon: EyeOff,
      title: "Point-in-Time Location Verification",
      desc: "AttendKH reads device GPS coordinates exclusively at the moment a staff member taps 'Clock In' or 'Clock Out'. We do not run background route tracking, continuous location monitoring, or off-duty tracking.",
    },
    {
      icon: Lock,
      title: "Encrypted in Transit & at Rest",
      desc: "Data transmitted between client apps and server endpoints is encrypted in transit, and database records and uploaded selfie photos are stored with standard encryption at rest.",
    },
    {
      icon: UserCheck,
      title: "Strict Role-Based Access Control (RBAC)",
      desc: "Branch managers inspect attendance and schedules for their designated branch only. Consolidated company-wide payroll exports and administrative settings are restricted to authorized administrators.",
    },
    {
      icon: History,
      title: "Supervisor Punch Audit Records",
      desc: "If an HR supervisor manually corrects or overrides a punch time, AttendKH logs the previous state, new state, supervisor ID, timestamp, and explanation.",
    },
    {
      icon: Database,
      title: "Data Export & Retention",
      desc: "Organizations can export CSV and Excel records of employee punch logs and payroll summaries. For retention and deletion policies, please refer to our Privacy Policy.",
    },
    {
      icon: Server,
      title: "Local Device Offline Queue",
      desc: "If cellular or Wi-Fi connectivity drops, punches are queued on the mobile app or kiosk tablet and synced when the connection is restored.",
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
              <ShieldCheck size={14} />
              <span>Privacy & Security</span>
            </span>

            <h1 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Our Approach to Privacy, Security & Data Handling
            </h1>

            <p className="mt-4 text-[16px] leading-relaxed text-body sm:text-[17px]">
              We believe workforce management software should empower teams through transparency. Here is how AttendKH handles employee privacy and business data.
            </p>
          </div>

          {/* Direct Answer Block */}
          <div className="mt-12">
            <DirectAnswerBlock
              question="Does AttendKH track employee location continuously in Cambodia?"
              answer="No. AttendKH reads GPS coordinates strictly at the moment an employee taps 'Clock In' or 'Clock Out' to verify presence within the designated branch radius. AttendKH does not perform continuous background tracking, route recording, or off-duty monitoring. For complete data handling terms, see our Privacy Policy."
              facts={[
                { label: "Location Reading", value: "Point-in-Time Only" },
                { label: "Data Protection", value: "Encrypted in Transit & at Rest" },
                { label: "Data Export", value: "CSV / Excel Available" },
              ]}
            />
          </div>

        {/* Location Privacy Banner */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-brand-soft via-white to-white p-6 sm:p-10 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-brand px-2.5 py-0.5 text-xs font-bold text-white uppercase">
                Location Privacy Standard
              </span>
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                Point-in-Time Verification, Not Continuous Surveillance
              </h2>
              <p className="text-sm leading-relaxed text-body">
                GPS data is read only when submitting a clock-in or clock-out punch to verify presence within the designated branch perimeter.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <div className="rounded-2xl border border-line bg-paper p-4 text-center shadow-xs">
                <span className="block font-mono text-lg font-extrabold text-emerald-600">Point-in-Time</span>
                <span className="text-[11px] font-semibold text-slate-500">Punch Checks Only</span>
              </div>
              <div className="rounded-2xl border border-line bg-paper p-4 text-center shadow-xs">
                <span className="block font-mono text-lg font-extrabold text-brand">Encrypted</span>
                <span className="text-[11px] font-semibold text-slate-500">In Transit & At Rest</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Principles Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-line bg-paper p-6 shadow-xs flex flex-col justify-between hover:border-brand hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand mb-4 shadow-xs">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-[16.5px] font-bold text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-body">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal Policies Links Card */}
        <div className="mt-16 rounded-3xl border border-line bg-mist/50 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-display text-lg font-bold text-ink">
                Review Our Legal & Compliance Policies
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Version-controlled, legally binding documentation for all AttendKH platform users.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/privacy-policy"
                className="rounded-xl border border-line bg-paper px-4 py-2 text-xs font-semibold text-ink hover:bg-mist transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="rounded-xl border border-line bg-paper px-4 py-2 text-xs font-semibold text-ink hover:bg-mist transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="rounded-xl border border-line bg-paper px-4 py-2 text-xs font-semibold text-ink hover:bg-mist transition-colors"
              >
                Cookie Preferences
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CtaBand
        title="Experience secure, transparent workforce management"
        sub="Book a personalized demo to review our enterprise security and privacy controls."
        cta="Book a Demo"
        href="/contact"
      />
    </div>
    </>
  );
}
