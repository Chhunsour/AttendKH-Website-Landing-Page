import { Header, Footer } from "@/components/site/chrome";
import { MaintenancePage } from "@/components/site/maintenance";
import { getWebsiteSettings } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = await getWebsiteSettings();
  if (settings.maintenance_mode === 1) return <MaintenancePage />;
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-[14px] focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="page-enter flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
