import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono, Kantumruy_Pro } from "next/font/google";
import { Providers } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
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
  title: {
    default: "AttendKH — Attendance & payroll for Cambodian teams",
    template: "%s — AttendKH",
  },
  description:
    "GPS-verified attendance and one-click payroll in USD and KHR. Built in Phnom Penh for Cambodian businesses, from one branch to fifty.",
};

export const viewport: Viewport = {
  themeColor: "#fafaf7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${instrument.variable} ${jetbrains.variable} ${kantumruy.variable} font-sans`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
