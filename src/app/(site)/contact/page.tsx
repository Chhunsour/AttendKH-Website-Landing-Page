import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { ContactView } from "./contact-view";

const title = "Book a Demo & Contact Our Phnom Penh Team | AttendKH";
const description =
  "Schedule a walkthrough, request pricing assistance, or contact our support team in Phnom Penh. Operating Monday to Friday, 8:00 AM – 5:30 PM ICT.";

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
