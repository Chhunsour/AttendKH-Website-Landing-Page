import type { Metadata } from "next";
import { HomeView } from "./home-view";

const title = "AttendKH — Take control of your attendance and payroll";
const description =
  "GPS-verified clock-in, automatic overtime and late rules, and payslips in USD and KHR. Built in Phnom Penh for Cambodian teams.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: "AttendKH", type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "AttendKH",
      url: "https://attendkh.com",
      email: "support@attendkh.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 12, Street 315, Toul Kork",
        addressLocality: "Phnom Penh",
        addressCountry: "KH",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "AttendKH",
      applicationCategory: "BusinessApplication",
      operatingSystem: "iOS, Android, Web",
      description,
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "250" },
      offers: {
        "@type": "Offer",
        price: "1.50",
        priceCurrency: "USD",
        description: "Per user, per month",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <HomeView />
    </>
  );
}
