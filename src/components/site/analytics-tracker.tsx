"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

export function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    // Avoid double tracking in strict mode
    const currentUrl = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    if (lastTrackedPath.current === currentUrl) return;
    lastTrackedPath.current = currentUrl;

    // Do not track admin internal pages as public website events
    if (pathname.startsWith("/admin")) return;

    trackEvent("page_view", {
      path: pathname,
      search: searchParams?.toString() || "",
      title: document.title,
    });
  }, [pathname, searchParams]);

  // Global click listener for CTA tracking
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button");
      if (!target) return;

      const href = target.getAttribute("href");
      const text = target.textContent?.trim().substring(0, 40) || "";

      if (href === "/contact" || text.toLowerCase().includes("trial") || text.toLowerCase().includes("get started")) {
        trackEvent("signup_clicked", { text, href });
      } else if (href?.includes("/pricing")) {
        trackEvent("pricing_view", { text, href });
      } else if (href?.includes("/login") || text.toLowerCase().includes("sign in")) {
        trackEvent("login_clicked", { text, href });
      } else if (href?.includes("t.me") || text.toLowerCase().includes("telegram")) {
        trackEvent("contact_clicked", { channel: "telegram", text });
      }
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleDocumentClick, { capture: true });
    };
  }, []);

  return null;
}
