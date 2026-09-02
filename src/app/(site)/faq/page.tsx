import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { FaqView } from "./faq-view";
import { siteCopy } from "@/lib/site-copy";

const title = "Frequently Asked Questions (FAQ) | AttendKH Cambodia";
const description =
  "Find clear answers on GPS geofence radius, selfie proof, real-time cloud sync, Cambodian labor law overtime (1.5×/2.0×), and USD/KHR payslips.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/faq") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/faq"),
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
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "FAQ",
            item: absoluteUrl("/faq"),
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
