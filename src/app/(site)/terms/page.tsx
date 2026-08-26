import type { Metadata } from "next";
import { getActiveLegalDocument } from "@/lib/db";
import { LegalView } from "../legal-view";

const title = "Terms of Service & Platform Agreement | AttendKH";
const description =
  "Review the AttendKH Terms of Service governing the use of our mobile attendance app, admin console, and payroll software in Cambodia.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://attendkh.com/terms" },
  openGraph: {
    title,
    description,
    url: "https://attendkh.com/terms",
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
      name: "Terms of Service",
      item: "https://attendkh.com/terms",
    },
  ],
};

export default async function Page() {
  const document = await getActiveLegalDocument("terms");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <LegalView page="terms" document={document} />
    </>
  );
}
