import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { getActiveLegalDocument } from "@/lib/site-content";
import { LegalView } from "../legal-view";

const title = "Terms of Service & Platform Agreement | AttendKH";
const description =
  "Review the AttendKH Terms of Service governing the use of our mobile attendance app, admin console, and payroll software in Cambodia.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/terms") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/terms"),
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
      name: "Terms of Service",
      item: absoluteUrl("/terms"),
    },
  ],
};

export default async function Page() {
  const document = await getActiveLegalDocument("terms");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <LegalView page="terms" document={document} />
    </>
  );
}
