import type { Metadata } from "next";
import { AboutView } from "./about-view";

export const metadata: Metadata = {
  title: "About",
  description: "AttendKH is built in Phnom Penh for Cambodian businesses.",
};

export default function Page() {
  return <AboutView />;
}
