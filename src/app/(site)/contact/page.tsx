import type { Metadata } from "next";
import { ContactView } from "./contact-view";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to AttendKH — sales, support and demos. We reply within one business day. Phnom Penh, Cambodia.",
};

export default function Page() {
  return <ContactView />;
}
