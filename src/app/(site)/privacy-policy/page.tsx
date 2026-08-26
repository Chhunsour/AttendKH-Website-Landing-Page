import type { Metadata } from "next";
import { getActiveLegalDocument } from "@/lib/db";
import { LegalView } from "../legal-view";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AttendKH stores and protects attendance and payroll data.",
};

export default async function Page() {
  const document = await getActiveLegalDocument("privacy");
  return <LegalView page="privacy" document={document} />;
}
