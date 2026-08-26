import type { Metadata } from "next";
import { SupportView } from "./support-view";

const title = "Customer Support Center & Hotline (Phnom Penh) | AttendKH";
const description =
  "Contact AttendKH support in Toul Kork, Phnom Penh. Telegram hotline @attendkh, email support@attendkh.com, and troubleshooting guides in Khmer and English.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://attendkh.com/support" },
  openGraph: {
    title,
    description,
    url: "https://attendkh.com/support",
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
      name: "Support",
      item: "https://attendkh.com/support",
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
