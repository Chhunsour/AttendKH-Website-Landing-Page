import type { Metadata } from "next";
import { getPricingPlans } from "@/lib/db";
import { PricingView } from "./pricing-view";

const title = "Pricing — Transparent Per-User Plans for Cambodia | AttendKH";
const description =
  "Compare AttendKH plans priced per active user, with monthly and annual billing choices for Cambodian teams.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://attendkh.com/pricing" },
  openGraph: {
    title,
    description,
    url: "https://attendkh.com/pricing",
    siteName: "AttendKH",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
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
      item: "https://attendkh.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pricing",
      item: "https://attendkh.com/pricing",
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
