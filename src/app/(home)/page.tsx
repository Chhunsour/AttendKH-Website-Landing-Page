import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { HomeView } from "./home-view";
import { MaintenancePage } from "@/components/site/maintenance";
import { getPricingPlans, getWebsiteSettings } from "@/lib/db";

export const dynamic = "force-dynamic";

const title = "AttendKH — Take control of your attendance and payroll";
const description =
  "GPS-verified clock-in, automatic overtime and late rules, and payslips in USD and KHR. Built in Phnom Penh for Cambodian teams.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/"),
    siteName: "AttendKH",
    type: "website",
    locale: "en_US",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: "AttendKH attendance and payroll software" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [absoluteUrl("/opengraph-image")] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "AttendKH",
      url: absoluteUrl("/"),
      email: "support@attendkh.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 12, Street 315, Toul Kork",
        addressLocality: "Phnom Penh",
        addressCountry: "KH",
      },
    },
    {
      "@type": "WebSite",
      name: "AttendKH",
      url: absoluteUrl("/"),
      description,
    },
    {
      "@type": "SoftwareApplication",
      name: "AttendKH",
      applicationCategory: "BusinessApplication",
      operatingSystem: "iOS, Android, Web",
      description,
      offers: {
        "@type": "Offer",
        price: "1.00",
        priceCurrency: "USD",
        description: "Per user, per month",
      },
    },
  ],
};

export default async function Page() {
  const [settings, plans] = await Promise.all([getWebsiteSettings(), getPricingPlans(true)]);
  if (settings.maintenance_mode === 1) return <MaintenancePage />;
  const priceMonthly = plans[0]?.price_monthly ?? 1;
  const pageSchema = {
    ...schema,
    "@graph": schema["@graph"].map((item) =>
      item["@type"] === "Organization"
        ? { ...item, email: settings.contact_email }
        : item["@type"] === "SoftwareApplication"
          ? { ...item, offers: { ...item.offers, price: priceMonthly.toFixed(2) } }
          : item
    ),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <HomeView priceMonthly={priceMonthly} />
    </>
  );
}
