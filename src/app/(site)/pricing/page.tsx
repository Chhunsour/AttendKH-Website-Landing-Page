import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { getPricingPlans } from "@/lib/site-content";
import { PricingView } from "./pricing-view";

const title = "Pricing Plans — $1/User All-in-One | AttendKH";
const description =
  "Simple, transparent pricing for Cambodian businesses. $1 per active user per month with all features unlocked and zero tier restrictions.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/pricing") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/pricing"),
    siteName: "AttendKH",
    type: "website",
    locale: "en_US",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: "AttendKH attendance and payroll software" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [absoluteUrl("/opengraph-image")],
    title,
    description,
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
      name: "Pricing",
      item: absoluteUrl("/pricing"),
    },
  ],
};

export default async function Page() {
  const plans = await getPricingPlans(true);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <PricingView dynamicPlans={plans} />
    </>
  );
}
