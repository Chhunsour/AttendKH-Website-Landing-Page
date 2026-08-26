import type { Metadata } from "next";
import { PayrollView } from "./payroll-view";

const title = "Automated Dual-Currency Payroll (USD & KHR) for Cambodia | AttendKH";
const description =
  "Automate Cambodian labor law overtime (1.5× / 2.0×), late deductions, NSSF lines, and digital payslips in USD and KHR with 1-click bank exports.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://attendkh.com/payroll" },
  openGraph: {
    title,
    description,
    url: "https://attendkh.com/payroll",
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
      name: "Payroll",
      item: "https://attendkh.com/payroll",
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
      <PayrollView />
    </>
  );
}
