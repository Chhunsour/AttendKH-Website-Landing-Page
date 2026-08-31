import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { getActiveLegalDocument } from "@/lib/db";
import { LegalView } from "../legal-view";

const title = "Privacy Policy & Location Data Standards | AttendKH";
const description =
  "Read the AttendKH Privacy Policy for details on point-in-time GPS clock-in checks, data handling, retention, and user choices.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/privacy-policy") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/privacy-policy"),
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
      name: "Privacy Policy",
      item: absoluteUrl("/privacy-policy"),
    },
  ],
};

export default async function Page() {
  const document = await getActiveLegalDocument("privacy");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <LegalView page="privacy" document={document} />
    </>
  );
}
