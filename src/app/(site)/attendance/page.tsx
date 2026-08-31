import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { AttendanceView } from "./attendance-view";

const title = "GPS Geofence & Selfie Attendance Tracking in Cambodia | AttendKH";
const description =
  "Reduce attendance disputes with point-in-time GPS geofencing (50–200m), configurable selfie verification, and offline punch queueing for Cambodian businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/attendance") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/attendance"),
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
      name: "Attendance",
      item: absoluteUrl("/attendance"),
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
      <AttendanceView />
    </>
  );
}
