import type { Metadata } from "next";
import { AboutView } from "./about-view";

const title = "About AttendKH — Built in Phnom Penh for Cambodian Businesses";
const description =
  "Discover how AttendKH builds GPS attendance, shift scheduling, and dual-currency payroll software from Toul Kork, Phnom Penh, tailored to Cambodian labor law.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://attendkh.com/about" },
  openGraph: {
    title,
    description,
    url: "https://attendkh.com/about",
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
      name: "About",
      item: "https://attendkh.com/about",
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
      <AboutView />
    </>
  );
}
