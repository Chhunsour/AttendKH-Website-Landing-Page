"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  FileText,
  CreditCard,
  ShieldCheck,
  Image as ImageIcon,
  Sliders,
  History,
  UserCheck,
  Inbox,
  ExternalLink,
  LogOut,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import type { AdminSession } from "@/lib/auth";

interface SidebarProps {
  user: AdminSession;
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export function AdminSidebar({ user, mobileOpen, onCloseMobile }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
    { href: "/admin/leads", label: "Inbound Leads", icon: Inbox },
    { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/admin/visitors", label: "Visitors", icon: Users },
    { href: "/admin/blog", label: "Blog CMS", icon: FileText },
    { href: "/admin/pricing", label: "Pricing", icon: CreditCard },
    { href: "/admin/legal", label: "Legal & Consent", icon: ShieldCheck },
    { href: "/admin/media", label: "Media Library", icon: ImageIcon },
    { href: "/admin/settings", label: "Website Settings", icon: Sliders },
    { href: "/admin/audit-logs", label: "Audit Logs", icon: History, superAdminOnly: true },
    { href: "/admin/admins", label: "Admins", icon: UserCheck, superAdminOnly: true },
  ];

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
      router.push("/admin/login");
      router.refresh();
    } catch {
      router.push("/admin/login");
    }
  };

  const isCurrent = (href: string, exact = false) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex w-72 flex-col border-r border-line bg-paper transition-transform duration-200 lg:static lg:translate-x-0 ${
          mobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        }`}
      >
        {/* Brand Header */}
        <div className="flex h-16 items-center justify-between border-b border-line px-5">
          <Link href="/admin" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white shadow-xs">
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path
                  d="M16 29.5S6 20.4 6 13.3A10 10 0 0 1 26 13.3C26 20.4 16 29.5 16 29.5Z"
                  fill="#ffffff"
                />
                <path
                  d="M12 13.2l2.9 2.9 5.3-5.5"
                  stroke="#0052FF"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-[16px] font-bold text-ink">AttendKH</span>
                <span className="rounded bg-brand/10 px-1.5 py-0.2 text-[10px] font-semibold text-brand">
                  CMS
                </span>
              </div>
              <p className="text-[11px] text-slate-500">Website Admin Console</p>
            </div>
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          <p className="px-3 pt-2 pb-1.5 text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
            Management
          </p>
          {navItems.map((item) => {
            if (item.superAdminOnly && user.role !== "super_admin") return null;
            const active = isCurrent(item.href, item.exact);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onCloseMobile}
                className={`group flex items-center justify-between rounded-lg px-3 py-2.5 text-[14px] font-medium transition-all ${
                  active
                    ? "bg-brand text-white shadow-xs font-semibold"
                    : "text-body hover:bg-mist hover:text-ink"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={18}
                    className={active ? "text-white" : "text-slate-500 group-hover:text-ink"}
                  />
                  <span>{item.label}</span>
                </div>
                {active ? (
                  <ChevronRight size={15} className="text-white/80" />
                ) : null}
              </Link>
            );
          })}

          <div className="pt-4">
            <p className="px-3 pb-1.5 text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
              Live Website
            </p>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg px-3 py-2 text-[13.5px] text-body transition-colors hover:bg-mist hover:text-ink"
            >
              <div className="flex items-center gap-2.5">
                <ExternalLink size={16} className="text-slate-500 group-hover:text-brand" />
                <span>View Public Site</span>
              </div>
              <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10.5px] text-slate-500">
                attendkh.com
              </span>
            </a>
          </div>
        </nav>

        {/* User Card & Logout */}
        <div className="border-t border-line p-3">
          <div className="flex items-center justify-between rounded-xl bg-mist p-3">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-200 font-semibold text-ink text-sm">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold text-ink leading-tight">
                  {user.name}
                </p>
                <span className="inline-flex items-center gap-1 rounded bg-brand/10 px-1.5 py-0.2 text-[10.5px] font-medium text-brand">
                  <Sparkles size={10} />
                  {user.role === "super_admin" ? "Super Admin" : "Editor"}
                </span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              title="Sign out of Admin"
              className="rounded-lg p-1.5 text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <LogOut size={17} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
