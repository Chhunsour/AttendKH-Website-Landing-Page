import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { AboutView } from "./about-view";

const title = "About AttendKH — Built in Phnom Penh for Cambodian Businesses";
const description =
  "Discover how AttendKH builds GPS attendance, shift scheduling, and dual-currency (USD & KHR) payroll software from Phnom Penh, crafted specifically for Cambodian labor law and workforce realities.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/about"),
    siteName: "AttendKH",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: absoluteUrl("/about/team.jpg"),
        width: 1376,
        height: 768,
        alt: "AttendKH Engineering Team in Phnom Penh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [absoluteUrl("/about/team.jpg")],
  },
};

const jsonLdSchemas = {
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
          name: "About",
          item: absoluteUrl("/about"),
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: "AttendKH Co., Ltd.",
      url: absoluteUrl("/"),
      logo: absoluteUrl("/logo.png"),
      description:
        "Workforce management, GPS attendance, and dual-currency payroll platform engineered in Phnom Penh for Cambodian businesses.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Street 371",
        addressLocality: "Phnom Penh",
        addressRegion: "Phnom Penh",
        addressCountry: "KH",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "support@attendkh.com",
        availableLanguage: ["Khmer", "English"],
      },
      sameAs: ["https://t.me/attendkh"],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdSchemas).replace(/</g, "\\u003c"),
        }}
      />
      <AboutView />
    </>
  );
}
