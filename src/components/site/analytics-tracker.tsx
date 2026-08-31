"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { isAnalyticsAllowed, trackEvent } from "@/lib/analytics";
import { useSite } from "@/lib/i18n";

export function AnalyticsTracker() {
  const { publicSettings } = useSite();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    const trackPage = () => {
      const currentUrl = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
      if (!publicSettings.analyticsEnabled || pathname.startsWith("/admin") || !isAnalyticsAllowed() || lastTrackedPath.current === currentUrl) return;
      lastTrackedPath.current = currentUrl;
      trackEvent("page_view", {
        path: pathname,
        search: searchParams?.toString() || "",
        title: document.title,
      });
    };

    trackPage();
    window.addEventListener("attendkh:consent_updated", trackPage);
    return () => window.removeEventListener("attendkh:consent_updated", trackPage);
  }, [pathname, publicSettings.analyticsEnabled, searchParams]);

  // Global click listener for CTA tracking
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (!publicSettings.analyticsEnabled) return;
      const target = (e.target as HTMLElement).closest("a, button");
      if (!target) return;

      const href = target.getAttribute("href");
      const text = target.textContent?.trim().substring(0, 40) || "";

      if (href === "/contact" || text.toLowerCase().includes("trial") || text.toLowerCase().includes("get started")) {
        trackEvent("signup_clicked", { text, href });
      } else if (href?.includes("/pricing")) {
        trackEvent("pricing_view", { text, href });
      } else if (href?.includes("/login") || href?.includes("dashboard.attendkh.com") || text.toLowerCase().includes("sign in")) {
        trackEvent("login_clicked", { text, href });
      } else if (href?.includes("t.me") || text.toLowerCase().includes("telegram")) {
        trackEvent("contact_clicked", { channel: "telegram", text });
      }
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleDocumentClick, { capture: true });
    };
  }, [publicSettings.analyticsEnabled]);

  return null;
}
