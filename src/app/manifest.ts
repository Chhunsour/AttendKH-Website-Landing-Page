import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AttendKH — GPS Attendance & Automated Payroll Cambodia",
    short_name: "AttendKH",
    description:
      "GPS-assisted attendance tracking with selfie verification and automated dual-currency payroll (USD & KHR) for Cambodian businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A2540",
    theme_color: "#0052ff",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
