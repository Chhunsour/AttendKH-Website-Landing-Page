import type { Metadata } from "next";
import { AttendanceView } from "./attendance-view";

export const metadata: Metadata = {
  title: "Attendance",
  description: "GPS geofencing, selfie verification and offline clock-in for Cambodian teams.",
};

export default function Page() {
  return <AttendanceView />;
}
