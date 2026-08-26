import type { Metadata } from "next";
import { CustomersView } from "./customers-view";

const title = "Customer Stories & Proof in Cambodia | AttendKH";
const description =
  "See how Cambodian cafes, retail chains, hotels, and logistics operations in Phnom Penh and Siem Reap run attendance and payroll on AttendKH.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://attendkh.com/customers" },
  openGraph: {
    title,
    description,
    url: "https://attendkh.com/customers",
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
      name: "Customers",
      item: "https://attendkh.com/customers",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <CustomersView />
    </>
  );
}
