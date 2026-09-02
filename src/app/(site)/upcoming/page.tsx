import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { DownloadsView } from "../downloads/downloads-view";

const title = "Upcoming Mobile App Releases | AttendKH";
const description =
  "AttendKH iOS and Android native apps are coming soon. Join early access for GPS-verified clock-in and selfie attendance.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/upcoming") },
};

export default function Page() {
  return <DownloadsView />;
}
