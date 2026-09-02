import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { DownloadsView } from "./downloads-view";

const title = "Download Mobile Apps (iOS & Android) — Upcoming | AttendKH";
const description =
  "Download the AttendKH mobile app for iOS (App Store) and Android (Google Play). Fast GPS geofenced clock-in, selfie verification, and real-time cloud attendance sync.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/downloads") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/downloads"),
    siteName: "AttendKH",
    type: "website",
    locale: "en_US",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: "AttendKH Mobile Apps" }],
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
      name: "Downloads",
      item: absoluteUrl("/downloads"),
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
      <DownloadsView />
    </>
  );
}
