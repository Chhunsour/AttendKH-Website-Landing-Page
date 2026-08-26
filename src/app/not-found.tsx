import Link from "next/link";
import { ArrowLeft, Home, Clock, Calculator, Building2, HelpCircle } from "lucide-react";

export default function NotFound() {
  const helpfulLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "Attendance Tracking", href: "/attendance", icon: Clock },
    { label: "Cambodian Payroll", href: "/payroll", icon: Calculator },
    { label: "Multi-Branch Control", href: "/multi-branch", icon: Building2 },
    { label: "Support & Help Center", href: "/support", icon: HelpCircle },
  ];

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3.5 py-1 text-xs font-bold text-brand uppercase tracking-wider">
          404 Error • រកមិនឃើញទំព័រ
        </span>

        <h1 className="font-display mt-6 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Page Not Found
        </h1>

        <p className="mt-4 text-[16px] leading-relaxed text-body sm:text-[17px]">
          The page you are looking for does not exist or has been moved. Explore our core features below or return to the homepage.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-all"
          >
            <ArrowLeft size={16} />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-6 py-3 text-sm font-semibold text-ink hover:bg-mist transition-colors"
          >
            <span>Contact Support</span>
          </Link>
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
            Popular Pages
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {helpfulLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-mist/60 px-3.5 py-2 text-xs font-semibold text-ink hover:border-brand hover:bg-paper transition-all"
                >
                  <Icon size={14} className="text-brand" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
