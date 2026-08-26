import type { Metadata } from "next";
import { getActiveLegalDocument } from "@/lib/db";
import { LegalView } from "../legal-view";

export const metadata: Metadata = {
  title: "Cookie & Consent Policy",
  description: "Learn how AttendKH uses privacy-conscious cookies and how you can manage preferences.",
};

export default async function Page() {
  const document = await getActiveLegalDocument("cookies");
  return <LegalView page="privacy" document={document} />;
}
