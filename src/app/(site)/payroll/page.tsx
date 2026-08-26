import type { Metadata } from "next";
import { PayrollView } from "./payroll-view";

export const metadata: Metadata = {
  title: "Payroll",
  description: "Cambodian payroll rules, overtime multipliers and payslips in USD and KHR.",
};

export default function Page() {
  return <PayrollView />;
}
