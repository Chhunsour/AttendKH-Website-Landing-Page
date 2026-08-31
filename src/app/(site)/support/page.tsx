import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { SupportView } from "./support-view";

const title = "Customer Support Center & Hotline (Phnom Penh) | AttendKH";
const description =
  "Contact AttendKH support in Toul Kork, Phnom Penh. Telegram hotline @attendkh, email support@attendkh.com, and troubleshooting guides in Khmer and English.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/support") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/support"),
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
      name: "Support",
      item: absoluteUrl("/support"),
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
      <SupportView />
    </>
  );
}
