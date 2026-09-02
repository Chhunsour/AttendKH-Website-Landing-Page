"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AdminSidebar } from "@/components/admin/sidebar";
import { AdminHeader } from "@/components/admin/header";
import type { AdminSession } from "@/lib/auth";

interface AdminLayoutClientProps {
  session: AdminSession | null;
  children: React.ReactNode;
}

export function AdminLayoutClient({ session, children }: AdminLayoutClientProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // If on /admin/login, render login page full-screen without sidebar
  if (pathname === "/admin/login") {
    return <div className="min-h-screen bg-mist text-ink">{children}</div>;
  }

  // If not logged in on a protected page, show login redirect state or render children
  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-mist p-6 text-center">
        <div className="max-w-md rounded-2xl border border-line bg-paper p-8 shadow-lg">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 29.5S6 20.4 6 13.3A10 10 0 0 1 26 13.3C26 20.4 16 29.5 16 29.5Z"
                fill="#0052FF"
              />
              <path
                d="M12 13.2l2.9 2.9 5.3-5.5"
                stroke="#ffffff"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="mt-4 font-display text-xl font-bold text-ink">Authentication Required</h2>
          <p className="mt-2 text-sm text-slate-500">
            Please sign in to your authorized administrator account to access the AttendKH console.
          </p>
          <a
            href="/admin/login"
            className="mt-6 inline-block w-full rounded-lg bg-brand py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Sign in to Admin
          </a>
        </div>
      </div>
    );
  }

  const getPageTitle = () => {
    if (pathname === "/admin") return { title: "Dashboard Overview", sub: "Live performance, visitor metrics & conversion tracking" };
    if (pathname === "/admin/analytics") return { title: "Analytics & Funnels", sub: "Deep-dive traffic attribution & conversion events" };
    if (pathname === "/admin/visitors") return { title: "Visitor Explorer", sub: "Anonymous sessions, journeys & consent telemetry" };
    if (pathname.startsWith("/admin/blog/new")) return { title: "Create Blog Post", sub: "Draft and publish articles with SEO metadata" };
    if (pathname.includes("/edit")) return { title: "Edit Blog Post", sub: "Modify content, cover images and publishing status" };
    if (pathname === "/admin/blog") return { title: "Blog CMS", sub: "Publishing workflow, categories and article catalog" };
    if (pathname === "/admin/pricing") return { title: "Subscription Pricing", sub: "Manage public pricing tiers, features and limits" };
    if (pathname === "/admin/legal") return { title: "Legal & Consent Policies", sub: "Manage Privacy Policy, Terms and Cookie compliance" };
    if (pathname === "/admin/media") return { title: "Media Library", sub: "Upload and organize website imagery and assets" };
    if (pathname === "/admin/settings") return { title: "Website Settings", sub: "Announcement banner, hotline and system configurations" };
    if (pathname === "/admin/audit-logs") return { title: "System Audit Trail", sub: "Chronological ledger of administrative changes and diffs" };
    if (pathname === "/admin/admins") return { title: "Admin User Management", sub: "Authorized administrative accounts and roles" };
    return { title: "Admin Console", sub: "AttendKH Website Management" };
  };

  const pageInfo = getPageTitle();

  return (
    <div className="flex min-h-screen bg-mist text-ink">
      <AdminSidebar
        user={session}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <AdminHeader
          user={session}
          title={pageInfo.title}
          subtitle={pageInfo.sub}
          onOpenMobile={() => setMobileOpen(true)}
          onRefresh={() => window.location.reload()}
        />

        <main className="flex-1 overflow-y-auto p-5 sm:p-8">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
