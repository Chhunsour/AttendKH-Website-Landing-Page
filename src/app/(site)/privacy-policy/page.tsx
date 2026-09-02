import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { getActiveLegalDocument } from "@/lib/site-content";
import { LegalView } from "../legal-view";

const title = "Privacy Policy & Location Data Standards | AttendKH";
const description =
  "Comprehensive Privacy Policy for AttendKH Attendance App (iOS & Android) & Web Platform. Zero continuous GPS tracking, encrypted selfie verification, App Store compliance, and Cambodian labor data standards.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AttendKH privacy policy",
    "attendance app privacy policy",
    "GPS attendance data policy",
    "biometric selfie attendance privacy",
    "Cambodia labor law data compliance",
    "geofence location tracking policy",
    "App Store attendance privacy disclosure",
    "Google Play attendance user data",
  ],
  alternates: { canonical: absoluteUrl("/privacy-policy") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/privacy-policy"),
    siteName: "AttendKH",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "AttendKH Privacy Policy and Workforce Data Governance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [absoluteUrl("/opengraph-image")],
    title,
    description,
  },
};

const structuredSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
    },
    {
      "@type": "DigitalDocument",
      name: "AttendKH Privacy Policy & Workforce Data Governance Standards",
      url: absoluteUrl("/privacy-policy"),
      version: "2.0",
      inLanguage: ["en", "km", "zh"],
      datePublished: "2026-08-01",
      dateModified: "2026-09-01",
      publisher: {
        "@type": "Organization",
        name: "AttendKH",
        url: absoluteUrl("/"),
        logo: absoluteUrl("/logo.png"),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Data Protection Officer",
          email: "privacy@attendkh.com",
          telephone: "+855-23-999-888",
          areaServed: "KH",
        },
      },
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
          __html: JSON.stringify(structuredSchema).replace(/</g, "\\u003c"),
        }}
      />
      <LegalView page="privacy" document={document} />
    </>
  );
}

