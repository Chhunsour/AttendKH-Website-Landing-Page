import { ImageResponse } from "next/og";

export const alt = "AttendKH — Smart Attendance & Payroll for Cambodian Teams";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#0A2540",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          color: "white",
          position: "relative",
        }}
      >
        {/* Top brand header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#0066FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "24px",
            }}
          >
            <span>A</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "32px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            <span>Attend</span>
            <span style={{ color: "#0066FF" }}>KH</span>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "16px",
              padding: "6px 14px",
              borderRadius: "999px",
              background: "rgba(255, 255, 255, 0.12)",
              fontSize: "14px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#93C5FD",
            }}
          >
            <span>Cambodia</span>
          </div>
        </div>

        {/* Middle title & value prop */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "900px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "50px",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
            }}
          >
            <span>Smart Attendance & Payroll for Cambodian Businesses</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              color: "#94A3B8",
              lineHeight: 1.4,
            }}
          >
            <span>Configurable 50–200m GPS geofencing, selfie-at-punch verification, and bilingual USD + KHR payroll rules.</span>
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "32px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", color: "#E2E8F0" }}>
            <span style={{ color: "#38BDF8", fontWeight: "bold" }}>[+]</span>
            <span>Configurable GPS Radius</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", color: "#E2E8F0" }}>
            <span style={{ color: "#38BDF8", fontWeight: "bold" }}>[+]</span>
            <span>Overtime & Holiday Multipliers</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", color: "#E2E8F0" }}>
            <span style={{ color: "#38BDF8", fontWeight: "bold" }}>[+]</span>
            <span>Real-Time Cloud Sync</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", color: "#E2E8F0" }}>
            <span style={{ color: "#38BDF8", fontWeight: "bold" }}>[+]</span>
            <span>Phnom Penh Engineering Hub</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
