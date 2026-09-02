import type { Metadata } from "next";
import { getAdminSession } from "@/lib/auth";
import { ToastProvider } from "@/components/admin/toast";
import { AdminLayoutClient } from "./layout-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "AttendKH Admin",
  robots: { index: false, follow: false, noarchive: true, nocache: true },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();

  // If not logged in, client handler will allow login page, or redirect for protected pages
  return (
    <ToastProvider>
      <AdminLayoutClient session={session}>{children}</AdminLayoutClient>
    </ToastProvider>
  );
}
