import type { Metadata } from "next";
import { PricingView } from "./pricing-view";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple per-user pricing for AttendKH. Annual billing includes two months free. Pay by card, KHQR or local bank transfer.",
};

export default function Page() {
  return <PricingView />;
}
