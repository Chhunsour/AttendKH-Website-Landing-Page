import type { Metadata } from "next";
import { getPricingPlans } from "@/lib/db";
import { PricingView } from "./pricing-view";

export const metadata: Metadata = {
  title: "Pricing — Simple Per-User Plans for Cambodia",
  description: "From $1.50 per user per month. No setup fee, no per-branch surcharge.",
};

export default async function Page() {
  const plans = await getPricingPlans(true);
  return <PricingView dynamicPlans={plans} />;
}
