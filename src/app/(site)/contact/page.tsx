import type { Metadata } from "next";
import { ContactView } from "./contact-view";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a demo, ask about pricing, or reach AttendKH support.",
};

export default function Page() {
  return <ContactView />;
}
