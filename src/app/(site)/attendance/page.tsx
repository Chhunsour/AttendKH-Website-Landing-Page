import type { Metadata } from "next";
import { AttendanceView } from "./attendance-view";

const title = "GPS Geofence & Selfie Attendance Tracking in Cambodia | AttendKH";
const description =
  "Reduce attendance disputes with point-in-time GPS geofencing (50–200m), configurable selfie verification, and offline punch queueing for Cambodian businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://attendkh.com/attendance" },
  openGraph: {
    title,
    description,
    url: "https://attendkh.com/attendance",
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
      name: "Attendance",
      item: "https://attendkh.com/attendance",
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
