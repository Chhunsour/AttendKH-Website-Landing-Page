import type { Metadata } from "next";
import { LegalView } from "../legal-view";

export const metadata: Metadata = {
  title: "Support",
  description: "AttendKH support channels and guides in Khmer and English.",
};

export default function Page() {
  return <LegalView page="support" />;
}
