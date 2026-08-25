import type { Metadata } from "next";
import { AttendanceView } from "./attendance-view";

export const metadata: Metadata = {
  title: "Attendance",
  description:
    "GPS-geofenced clock-in with live selfie verification. Works offline, syncs later. Built for Cambodian branches.",
};

export default function Page() {
  return <AttendanceView />;
}
