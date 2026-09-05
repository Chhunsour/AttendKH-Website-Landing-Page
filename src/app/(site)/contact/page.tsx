import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { ContactView } from "./contact-view";

const title = "Contact & Demo — Phnom Penh Office | AttendKH";
const description =
  "Get in touch with the AttendKH team in Phnom Penh. Book a personalized live demo or reach our support team via Telegram and phone.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/contact"),
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
      name: "Contact",
      item: absoluteUrl("/contact"),
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
      <ContactView />
    </>
  );
}
