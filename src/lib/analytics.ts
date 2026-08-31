// Privacy-Conscious Website Event Analytics Engine for AttendKH

export interface EventPayload {
  [key: string]: any;
}

export function parseUserAgent(ua: string) {
  let deviceType = "Desktop";
  let os = "Other";
  let browser = "Other";

  if (/mobile|android|iphone|ipad|phone/i.test(ua)) {
    deviceType = /tablet|ipad/i.test(ua) ? "Tablet" : "Mobile";
  }

  if (/macintosh|mac os x/i.test(ua)) {
    os = "macOS";
  } else if (/windows/i.test(ua)) {
    os = "Windows";
  } else if (/android/i.test(ua)) {
    os = "Android";
  } else if (/iphone|ipad|ipod/i.test(ua)) {
    os = "iOS";
  } else if (/linux/i.test(ua)) {
    os = "Linux";
  }

  if (/edg\//i.test(ua)) {
    browser = "Edge";
  } else if (/chrome|crios/i.test(ua)) {
    browser = "Chrome";
  } else if (/firefox|fxios/i.test(ua)) {
    browser = "Firefox";
  } else if (/safari/i.test(ua) && !/chrome/i.test(ua)) {
    browser = "Safari";
  } else if (/opera|opr\//i.test(ua)) {
    browser = "Opera";
  }

  return { deviceType, os, browser };
}

export function parseTrafficSource(referrer: string | null | undefined): string {
  if (!referrer || referrer.trim() === "") return "Direct";
  try {
    const url = new URL(referrer);
    const host = url.hostname.toLowerCase();
    if (host.includes("google")) return "Google Search";
    if (host.includes("t.me") || host.includes("telegram")) return "Telegram";
    if (host.includes("facebook") || host.includes("fb.com")) return "Facebook";
    if (host.includes("linkedin")) return "LinkedIn";
    if (host.includes("twitter") || host.includes("x.com")) return "Twitter / X";
    if (host.includes("youtube")) return "YouTube";
    if (host.includes("tiktok")) return "TikTok";
    if (host.includes("attendkh.com") || host.includes("localhost")) return "Internal";
    return host;
  } catch {
    return "Referral";
  }
}

// Client-side cookie consent helper
const CONSENT_KEY = "attendkh_cookie_consent";
const VISITOR_KEY = "attendkh_visitor_id";
const SESSION_KEY = "attendkh_session_id";

export interface CookiePreferences {
  choice: "accept_all" | "reject_non_essential" | "custom";
  categories: {
    necessary: boolean;
    analytics: boolean;
    functional: boolean;
    marketing: boolean;
  };
  timestamp: string;
  version: string;
}

export function getClientCookiePreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function saveClientCookiePreferences(pref: CookiePreferences) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(pref));
    window.dispatchEvent(new CustomEvent("attendkh:consent_updated", { detail: pref }));
  } catch {}
}

export function getOrCreateVisitorId(): string {
  if (typeof window === "undefined") return "anon";
  try {
    let id = localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = "v_" + crypto.randomUUID();
      localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    return "anon";
  }
}

export function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "sess";
  try {
    let id = sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = "s_" + crypto.randomUUID();
      sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return "sess";
  }
}

export function isAnalyticsAllowed(): boolean {
  const pref = getClientCookiePreferences();
  if (!pref) return false; // Require explicit consent first
  if (pref.choice === "accept_all") return true;
  if (pref.categories?.analytics) return true;
  return false;
}

export async function trackEvent(eventName: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;

  // Check consent before dispatching analytics events (except consent logging itself)
  if (eventName !== "cookie_preferences_updated" && !isAnalyticsAllowed()) {
    return;
  }

  const visitorId = getOrCreateVisitorId();
  const sessionId = getOrCreateSessionId();

  try {
    const body = {
      event_name: eventName,
      visitor_id: visitorId,
      session_id: sessionId,
      page_path: window.location.pathname + window.location.search,
      referrer: document.referrer || null,
      payload,
    };

    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/events/track", JSON.stringify(body));
    } else {
      fetch("/api/events/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        keepalive: true,
      }).catch(() => {});
    }
  } catch {}
}
