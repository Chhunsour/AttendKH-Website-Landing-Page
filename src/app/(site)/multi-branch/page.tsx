import type { Metadata } from "next";
import { BranchesView } from "./branches-view";

export const metadata: Metadata = {
  title: "Multi-Branch",
  description: "One console for every location, with four levels of access and real shift rules.",
};

export default function Page() {
  return <BranchesView />;
}
