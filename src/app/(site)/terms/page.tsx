import type { Metadata } from "next";
import { LegalView } from "../legal-view";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "AttendKH terms of service and fair use.",
};

export default function Page() {
  return <LegalView page="terms" />;
}
