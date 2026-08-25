import type { Metadata } from "next";
import { LegalView } from "../legal-view";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AttendKH stores and protects attendance and payroll data.",
};

export default function Page() {
  return <LegalView page="privacy" />;
}
