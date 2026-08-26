import type { Metadata } from "next";
import { FaqView } from "./faq-view";
import { siteCopy } from "@/lib/site-copy";

const title = "Frequently Asked Questions (FAQ) | AttendKH Cambodia";
const description =
  "Find clear answers on GPS geofence radius, selfie proof, offline clock-in, Cambodian labor law overtime (1.5×/2.0×), and USD/KHR payslips.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://attendkh.com/faq" },
  openGraph: {
    title,
    description,
    url: "https://attendkh.com/faq",
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

export default function Page() {
  const faqItems = siteCopy.en.faq.items;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
            name: "FAQ",
            item: "https://attendkh.com/faq",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <FaqView />
    </>
  );
}
