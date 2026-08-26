import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import {
  Google_Sans,
  JetBrains_Mono,
  Kantumruy_Pro,
} from "next/font/google";
import { Providers } from "@/lib/i18n";
import { AnalyticsTracker } from "@/components/site/analytics-tracker";
import { CookieBanner } from "@/components/site/cookie-banner";
import "./globals.css";

const googleSans = Google_Sans({
  subsets: ["latin"],
  variable: "--font-google-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  adjustFontFallback: false,
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const kantumruy = Kantumruy_Pro({
  subsets: ["khmer", "latin"],
  variable: "--font-kantumruy",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://attendkh.com"),
  title: "AttendKH — GPS attendance and configurable payroll for Cambodia",
  description:
    "GPS-assisted attendance and configurable payroll in USD and KHR, built in Phnom Penh for Cambodian teams.",
  openGraph: {
    title: "AttendKH — GPS attendance and configurable payroll for Cambodia",
    description:
      "Record attendance with GPS geofencing and optional selfie evidence. Configure overtime, late rules, leave balances, and payslips in USD and KHR.",
    url: "https://attendkh.com",
    siteName: "AttendKH",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0052ff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${googleSans.variable} ${jetbrains.variable} ${kantumruy.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <Suspense fallback={null}>
            <AnalyticsTracker />
          </Suspense>
          {children}
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
