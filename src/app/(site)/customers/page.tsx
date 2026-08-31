import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { CustomersView } from "./customers-view";

const title = "Industry Workflows for Cambodian Teams | AttendKH";
const description =
  "Explore attendance and payroll workflows designed for Cambodian cafes, retail stores, hotels, and logistics operations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/customers") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/customers"),
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
      name: "Customers",
      item: absoluteUrl("/customers"),
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
