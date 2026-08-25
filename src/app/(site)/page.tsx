import type { Metadata } from "next";
import { HomeView } from "./home-view";

export const metadata: Metadata = {
  title: "Attendance & payroll for Cambodian teams",
  description:
    "GPS-verified attendance and one-click payroll in USD and KHR. Built in Phnom Penh for Cambodian businesses.",
};

export default function Page() {
  return <HomeView />;
}
