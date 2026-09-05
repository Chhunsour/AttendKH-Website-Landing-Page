import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import {
  Google_Sans,
  JetBrains_Mono,
  Kantumruy_Pro,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";
import { Providers } from "@/lib/i18n";
import { AnalyticsTracker } from "@/components/site/analytics-tracker";
import { ChatbotWidget } from "@/components/site/chatbot-widget";
import { MotionConfig } from "framer-motion";
import { absoluteUrl, SITE_URL, SOCIAL_IMAGE_PATH } from "@/lib/site";
import "./globals.css";

const googleSans = Google_Sans({
  subsets: ["latin"],
  variable: "--font-google-sans",
  display: "swap",
  adjustFontFallback: false,
  weight: ["400", "500", "600", "700"],
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

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Attend (AttendKH) — GPS attendance and configurable payroll for Cambodia",
  description:
    "GPS-assisted attendance and configurable payroll in USD and KHR, built in Phnom Penh for Cambodian teams.",
  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      "en": absoluteUrl("/"),
      "km": absoluteUrl("/"),
      "x-default": absoluteUrl("/"),
    },
  },
  applicationName: "AttendKH",
  category: "Business & Productivity Software",
  classification: "Workforce Management, Attendance Tracking, Payroll Software",
  keywords: [
    "Attend",
    "AttendKH",
    "Attend app",
    "Attend Cambodia",
    "Attend login",
    "Attend payroll",
    "Attend tracking",
    "attendance system Cambodia",
    "GPS attendance Phnom Penh",
    "Cambodian payroll software",
    "NSSF calculation",
    "MoLVT Cambodia compliance",
    "dual currency payroll USD KHR",
    "geofence clock-in",
    "selfie punch attendance",
    "multi-branch workforce management",
    "កម្មវិធីកត់វត្តមាន",
    "ប្រព័ន្ធគ្រប់គ្រងវត្តមាន",
    "ប្រព័ន្ធគណនាប្រាក់បៀវត្ស",
    "វត្តមានបុគ្គលិក",
    "កត់វត្តមានតាម GPS",
    "បើកប្រាក់ខែ",
    "ប.ស.ស. កម្ពុជា",
    "ច្បាប់ការងារកម្ពុជា",
    "ប្រាក់បំណាច់អតីតភាពការងារ",
  ],
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "AttendKH — GPS attendance and configurable payroll for Cambodia",
    description:
      "Record attendance with GPS geofencing and optional selfie evidence. Configure overtime, late rules, leave balances, and payslips in USD and KHR.",
    url: SITE_URL,
    siteName: "AttendKH",
    locale: "en_US",
    alternateLocale: ["km_KH", "zh_CN"],
    type: "website",
    images: [{ url: SOCIAL_IMAGE_PATH, width: 1200, height: 630, alt: "AttendKH attendance and payroll software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AttendKH — GPS attendance and configurable payroll for Cambodia",
    description:
      "Record attendance with GPS geofencing and optional selfie evidence. Configure overtime, late rules, leave balances, and payslips in USD and KHR.",
    images: [absoluteUrl(SOCIAL_IMAGE_PATH)],
  },
  icons: { icon: "/icon.png", apple: "/icon.png" },
  other: {
    "geo.region": "KH-12",
    "geo.placename": "Phnom Penh, Cambodia",
    "geo.position": "11.5761;104.8931",
    "ICBM": "11.5761, 104.8931",
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
      data-scroll-behavior="smooth"
      className={`${googleSans.variable} ${jetbrains.variable} ${kantumruy.variable} ${plusJakarta.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased">
        <MotionConfig reducedMotion="user">
          <Providers>
            <Suspense fallback={null}>
              <AnalyticsTracker />
            </Suspense>
            {children}
            <ChatbotWidget />
          </Providers>
        </MotionConfig>
      </body>
    </html>
  );
}
