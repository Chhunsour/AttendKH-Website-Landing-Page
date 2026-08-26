import type { Metadata } from "next";
import { CustomersView } from "./customers-view";

export const metadata: Metadata = {
  title: "Customers",
  description: "Retail, F&B, logistics and agencies running attendance and payroll on AttendKH.",
};

export default function Page() {
  return <CustomersView />;
}
