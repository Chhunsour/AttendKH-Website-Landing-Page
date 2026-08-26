import type { Metadata } from "next";
import { BranchesView } from "./branches-view";

const title = "Centralized Multi-Branch Operations Console for Cambodia | AttendKH";
const description =
  "Manage 1 to 50+ locations across Phnom Penh, Siem Reap, and Sihanoukville on one central console. 4-tier access control, split shifts, and branch-specific rules.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://attendkh.com/multi-branch" },
  openGraph: {
    title,
    description,
    url: "https://attendkh.com/multi-branch",
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
      name: "Multi-Branch",
      item: "https://attendkh.com/multi-branch",
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
      <BranchesView />
    </>
  );
}
