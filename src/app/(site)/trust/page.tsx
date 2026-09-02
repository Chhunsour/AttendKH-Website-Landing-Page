import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { TrustView } from "./trust-view";

export const metadata: Metadata = {
  title: "Trust & Security Center | AttendKH",
  description:
    "Learn how AttendKH handles employee location checks, payroll data, access boundaries, and supervisor change records.",
  alternates: { canonical: absoluteUrl("/trust") },
  openGraph: {
    title: "AttendKH Trust Center — Security & Privacy Architecture",
    description:
      "Clear privacy boundaries for point-in-time GPS checks, encrypted data, and role-based access control.",
    url: absoluteUrl("/trust"),
    siteName: "AttendKH",
    type: "website",
    locale: "en_US",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: "AttendKH attendance and payroll software" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [absoluteUrl("/opengraph-image")],
    title: "Trust & Security Center | AttendKH",
    description: "Point-in-time GPS verification, encrypted data handling, and role-based access control.",
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
      name: "Trust & Security",
      item: absoluteUrl("/trust"),
    },
  ],
};

export default function TrustPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <TrustView />
    </>
  );
}
