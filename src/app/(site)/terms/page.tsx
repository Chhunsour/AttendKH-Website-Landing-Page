import type { Metadata } from "next";
import { getActiveLegalDocument } from "@/lib/db";
import { LegalView } from "../legal-view";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using AttendKH services and software.",
};

export default async function Page() {
  const document = await getActiveLegalDocument("terms");
  return <LegalView page="terms" document={document} />;
}
