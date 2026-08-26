import type { Metadata } from "next";
import { getActiveLegalDocument } from "@/lib/db";
import { LegalView } from "../legal-view";

const title = "Cookie Policy & Privacy Preferences | AttendKH";
const description =
  "Understand how AttendKH uses privacy-first essential cookies and manage your consent preferences at any time.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://attendkh.com/cookies" },
  openGraph: {
    title,
    description,
    url: "https://attendkh.com/cookies",
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
      name: "Cookie Policy",
      item: "https://attendkh.com/cookies",
    },
  ],
};

export default async function Page() {
  const document = await getActiveLegalDocument("cookies");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <LegalView page="cookies" document={document} />
    </>
  );
}
