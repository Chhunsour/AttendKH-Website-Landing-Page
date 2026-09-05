import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { HomeView } from "./home-view";
import { MaintenancePage } from "@/components/site/maintenance";
import { getPricingPlans, getWebsiteSettings } from "@/lib/site-content";
import { siteCopy } from "@/lib/site-copy";

const title = "Attend (AttendKH) — #1 Attendance & Payroll App in Cambodia";
const description =
  "Smart GPS attendance tracking, selfie clock-in, and automated dual-currency payroll in USD and KHR for Cambodian businesses across every branch.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/"),
    siteName: "AttendKH",
    type: "website",
    locale: "en_US",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: "AttendKH attendance and payroll software" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [absoluteUrl("/opengraph-image")] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${absoluteUrl("/")}#organization`,
      name: "AttendKH",
      alternateName: ["Attend", "Attend KH", "Attend App", "Attend Cambodia", "កម្មវិធី AttendKH"],
      legalName: "AttendKH Co., Ltd.",
      url: absoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.png"),
        width: 512,
        height: 512,
      },
      image: absoluteUrl("/opengraph-image"),
      description,
      email: "support@attendkh.com",
      telephone: "+855 23 999 888",
      priceRange: "$$",
      currenciesAccepted: "USD, KHR",
      paymentAccepted: "Bakong KHQR, ABA PayWay, ACLEDA ToanChet, Wing Bank, Cash, Bank Transfer",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 12, Street 315, Boeng Kak 1, Toul Kork",
        addressLocality: "Phnom Penh",
        addressRegion: "Phnom Penh",
        postalCode: "12000",
        addressCountry: "KH",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 11.5761,
        longitude: 104.8931,
      },
      areaServed: [
        { "@type": "Country", name: "Cambodia" },
        { "@type": "City", name: "Phnom Penh" },
        { "@type": "City", name: "Siem Reap" },
        { "@type": "City", name: "Sihanoukville" },
        { "@type": "City", name: "Battambang" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:30",
        },
      ],
      sameAs: [
        "https://t.me/MPG_by_ongphaly",
      ],
      knowsAbout: [
        "GPS Geofencing Attendance",
        "Point-in-Time Selfie Verification",
        "Cambodian Labour Law Overtime Multipliers",
        "NSSF (ប.ស.ស.) Healthcare and Pension Contributions",
        "Bilingual USD and KHR Payroll Automation",
        "ABA Bank and Bakong KHQR Payroll Formats",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${absoluteUrl("/")}#website`,
      name: "AttendKH",
      url: absoluteUrl("/"),
      description,
      inLanguage: ["en", "km", "zh"],
      publisher: {
        "@id": `${absoluteUrl("/")}#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${absoluteUrl("/blog")}?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ItemList",
      "@id": `${absoluteUrl("/")}#sitelinks`,
      name: "Key Sections & Sitelinks",
      itemListElement: [
        {
          "@type": "SiteNavigationElement",
          position: 1,
          name: "Attendance Tracking",
          description: "Point-in-time GPS geofencing and live selfie verification for Cambodian teams.",
          url: absoluteUrl("/attendance"),
        },
        {
          "@type": "SiteNavigationElement",
          position: 2,
          name: "Cambodian Payroll",
          description: "Automated USD & KHR payroll with overtime rules, NSSF deductions, and bank batch exports.",
          url: absoluteUrl("/payroll"),
        },
        {
          "@type": "SiteNavigationElement",
          position: 3,
          name: "Pricing Plans",
          description: "All-in-one plan for $1 per active user per month. All features included with zero tier lockouts.",
          url: absoluteUrl("/pricing"),
        },
        {
          "@type": "SiteNavigationElement",
          position: 4,
          name: "Multi-Branch Operations",
          description: "Centralized visibility, role-based access, and flexible shift rosters across all your branches.",
          url: absoluteUrl("/multi-branch"),
        },
        {
          "@type": "SiteNavigationElement",
          position: 5,
          name: "Download Mobile Apps",
          description: "Download native AttendKH apps for iOS and Android with fast geofenced clock-in.",
          url: absoluteUrl("/downloads"),
        },
        {
          "@type": "SiteNavigationElement",
          position: 6,
          name: "Contact & Demo",
          description: "Connect with the Phnom Penh team for personalized live demos and onboarding support.",
          url: absoluteUrl("/contact"),
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${absoluteUrl("/")}#software`,
      name: "AttendKH",
      alternateName: ["Attend", "Attend App", "Attend Cambodia"],
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Workforce Management & Payroll",
      operatingSystem: "iOS, Android, Web Browser",
      description,
      softwareVersion: "2.0",
      featureList: [
        "Configurable 50m to 200m GPS Geofencing",
        "Selfie-at-Punch Anti-Buddy Verification",
        "Offline Punch Queue with Automatic Sync",
        "Dual-Currency USD and KHR Itemized Payslips",
        "Cambodian Labour Law Overtime Rules (1.5x, 2.0x)",
        "NSSF (ប.ស.ស.) Contribution Deductions",
        "One-Click Bank Batch Export for ABA, ACLEDA, Canadia, Wing",
        "Shared Tablet QR Door Kiosk Mode",
      ],
      offers: {
        "@type": "Offer",
        price: "1.00",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        description: "Per user, per month — All features included",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "85",
        bestRating: "5",
        worstRating: "1",
      },
      provider: {
        "@id": `${absoluteUrl("/")}#organization`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${absoluteUrl("/")}#faq`,
      mainEntity: siteCopy.en.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
    {
      "@type": "HowTo",
      "@id": `${absoluteUrl("/")}#howto-clockin`,
      name: "How to Clock In with GPS Geofencing on AttendKH",
      description: "Step-by-step guide on recording accurate employee attendance using the AttendKH mobile app with point-in-time GPS and selfie verification.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Arrive at Designated Branch",
          text: "Open the AttendKH app on your iOS or Android device when arriving within your branch's 50m–200m geofence boundary.",
          url: absoluteUrl("/attendance"),
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Take Live Selfie Verification",
          text: "Tap Clock In and capture a quick real-time selfie snapshot to eliminate buddy punching.",
          url: absoluteUrl("/attendance"),
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Automatic Cloud Sync",
          text: "Your verified timestamp and GPS coordinates sync in real time to the company's central payroll engine.",
          url: absoluteUrl("/payroll"),
        },
      ],
    },
  ],
};

export default async function Page() {
  const [settings, plans] = await Promise.all([getWebsiteSettings(), getPricingPlans(true)]);
  if (settings.maintenance_mode === 1) return <MaintenancePage />;
  const priceMonthly = plans[0]?.price_monthly ?? 1;
  const pageSchema = {
    ...schema,
    "@graph": schema["@graph"].map((item) => {
      const isOrg = Array.isArray(item["@type"])
        ? item["@type"].includes("Organization")
        : item["@type"] === "Organization";
      if (isOrg) {
        return {
          ...item,
          email: settings.contact_email || item.email,
          telephone: settings.support_phone || item.telephone,
          sameAs: settings.telegram_url ? [settings.telegram_url] : item.sameAs,
        };
      }
      if (item["@type"] === "SoftwareApplication") {
        return {
          ...item,
          offers: {
            ...item.offers,
            price: priceMonthly.toFixed(2),
          },
        };
      }
      return item;
    }),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <HomeView priceMonthly={priceMonthly} />
    </>
  );
}
