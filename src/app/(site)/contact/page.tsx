import type { Metadata } from "next";
import { ContactView } from "./contact-view";

const title = "Book a Demo & Contact Our Phnom Penh Team | AttendKH";
const description =
  "Schedule a walkthrough, request pricing assistance, or contact our support team in Toul Kork, Phnom Penh. Operating Monday to Friday, 8:00 AM – 5:30 PM ICT.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://attendkh.com/contact" },
  openGraph: {
    title,
    description,
    url: "https://attendkh.com/contact",
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
      name: "Contact",
      item: "https://attendkh.com/contact",
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
