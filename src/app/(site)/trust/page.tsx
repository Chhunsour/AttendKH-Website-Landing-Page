import type { Metadata } from "next";
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
import { PageHero, Section, CtaBand } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Trust & Security Center | AttendKH",
  description:
    "Learn how AttendKH protects employee privacy, secures payroll data, enforces location boundaries, and maintains immutable audit logs.",
  openGraph: {
    title: "AttendKH Trust Center — Security & Privacy Architecture",
    description:
      "Clear privacy boundaries: Zero 24/7 background GPS tracking, end-to-end encryption, and role-based access control.",
  },
};

export default function TrustPage() {
  const principles = [
    {
      icon: EyeOff,
      title: "No 24/7 Background Tracking",
      desc: "AttendKH checks device GPS coordinates exclusively at the exact second a staff member taps 'Clock In' or 'Clock Out'. We strictly never track employee movements during breaks, after shifts, or on days off.",
    },
    {
      icon: Lock,
      title: "Encrypted in Transit & at Rest",
      desc: "All traffic between the mobile apps, web dashboard, and cloud database is encrypted using TLS 1.3. Stored database records and biometric selfie proofs are protected with industry-standard AES-256 encryption.",
    },
    {
      icon: UserCheck,
      title: "Strict Role-Based Access Control (RBAC)",
      desc: "Branch managers can only inspect attendance and schedules for their designated branch. Salary numbers and consolidated multi-branch audits are restricted to authorized super administrators.",
    },
    {
      icon: History,
      title: "Immutable Change Audit Logs",
      desc: "If an HR supervisor manually corrects or overrides a punch time, AttendKH logs the previous state, new state, supervisor ID, timestamp, and rationale to prevent payroll tampering.",
    },
    {
      icon: Database,
      title: "Data Ownership & Portability",
      desc: "Your company retains 100% ownership of your employee lists, punch logs, and payslips. You can export complete CSV / Excel archives or request full data deletion at any time.",
    },
    {
      icon: Server,
      title: "Reliable Infrastructure & Offline Cache",
      desc: "Built with redundant cloud failover and offline cryptographic caching, ensuring your business never misses an attendance record even during telecom network downtime.",
    },
  ];

  return (
    <div className="space-y-16 py-8 sm:space-y-24 sm:py-12">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3.5 py-1 text-xs font-bold text-brand uppercase tracking-wider">
            <ShieldCheck size={14} />
            <span>Privacy & Security</span>
          </span>

          <h1 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Our Commitment to Privacy, Security & Data Integrity
          </h1>

          <p className="mt-4 text-[16px] leading-relaxed text-body sm:text-[17px]">
            We believe workforce management software should empower teams through transparency. Here is exactly how AttendKH protects both employee privacy and business data.
          </p>
        </div>

        {/* Location Privacy Guarantee Banner */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-brand-soft via-white to-white p-6 sm:p-10 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-brand px-2.5 py-0.5 text-xs font-bold text-white uppercase">
                Location Privacy Guarantee
              </span>
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                Point-in-Time Verification, Never Continuous Surveillance
              </h2>
              <p className="text-sm leading-relaxed text-body">
                Unlike invasive tracking software, AttendKH does not monitor employee GPS trails throughout the day. GPS data is only read when the user presses the punch button to verify presence within the designated branch radius.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <div className="rounded-2xl border border-line bg-paper p-4 text-center shadow-xs">
                <span className="block font-mono text-2xl font-extrabold text-emerald-600">0%</span>
                <span className="text-[11px] font-semibold text-slate-500">Off-Duty Tracking</span>
              </div>
              <div className="rounded-2xl border border-line bg-paper p-4 text-center shadow-xs">
                <span className="block font-mono text-2xl font-extrabold text-brand">256-bit</span>
                <span className="text-[11px] font-semibold text-slate-500">AES Encryption</span>
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
  );
}
