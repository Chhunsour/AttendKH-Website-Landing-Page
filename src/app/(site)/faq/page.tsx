import type { Metadata } from "next";
import { FaqView } from "./faq-view";
import { siteCopy } from "@/lib/site-copy";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | AttendKH",
  description:
    "Everything you need to know about offline clock-ins, anti-mock GPS shields, Excel imports, dual-currency USD/KHR payroll, and Cambodian labor compliance.",
  openGraph: {
    title: "AttendKH FAQ — Smart Attendance & Payroll in Cambodia",
    description:
      "Answers on offline sync, buddy punching prevention, NSSF statutory calculations, and branch setup.",
  },
};

export default function Page() {
  const faqItems = siteCopy.en.faq.items;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqView />
    </>
  );
}
