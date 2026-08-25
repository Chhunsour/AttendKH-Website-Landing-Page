import type { Metadata } from "next";
import { AboutView } from "./about-view";

export const metadata: Metadata = {
  title: "About",
  description:
    "AttendKH builds attendance and payroll software in Phnom Penh, for Cambodian businesses. Khmer first, riel first.",
};

export default function Page() {
  return <AboutView />;
}
