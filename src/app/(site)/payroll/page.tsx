import type { Metadata } from "next";
import { PayrollView } from "./payroll-view";

export const metadata: Metadata = {
  title: "Payroll",
  description:
    "One-click Cambodian payroll: hourly rates, late rules, overtime multipliers and bilingual payslips in USD and KHR.",
};

export default function Page() {
  return <PayrollView />;
}
