"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, Settings, X, Lock } from "lucide-react";
import {
  getClientCookiePreferences,
  saveClientCookiePreferences,
  getOrCreateVisitorId,
  type CookiePreferences,
} from "@/lib/analytics";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Lazy initialize preference category states
  const [analytics, setAnalytics] = useState(true);
  const [functional, setFunctional] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = getClientCookiePreferences();
    if (!existing) {
      const timer = setTimeout(() => setShowBanner(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Listen to open settings custom event
    const handleOpenSettings = () => {
      const existing = getClientCookiePreferences();
      if (existing?.categories) {
        setAnalytics(existing.categories.analytics ?? false);
        setFunctional(existing.categories.functional ?? true);
        setMarketing(existing.categories.marketing ?? false);
      }
      setShowModal(true);
    };
    window.addEventListener("attendkh:open_cookie_settings", handleOpenSettings);
    return () => {
      window.removeEventListener("attendkh:open_cookie_settings", handleOpenSettings);
    };
  }, []);

  const sendConsentTelemetry = async (
    choice: "accept_all" | "reject_non_essential" | "custom",
    categories: string[]
  ) => {
    try {
      const visitorId = getOrCreateVisitorId();
      fetch("/api/events/consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitor_id: visitorId,
          choice,
          categories,
          policy_version: "1.0",
        }),
      }).catch(() => {});
    } catch {}
  };

  const handleAcceptAll = () => {
    const pref: CookiePreferences = {
      choice: "accept_all",
      categories: {
        necessary: true,
        analytics: true,
        functional: true,
        marketing: true,
      },
      timestamp: new Date().toISOString(),
      version: "1.0",
    };
    saveClientCookiePreferences(pref);
    sendConsentTelemetry("accept_all", ["necessary", "analytics", "functional", "marketing"]);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleRejectNonEssential = () => {
    const pref: CookiePreferences = {
      choice: "reject_non_essential",
      categories: {
        necessary: true,
        analytics: false,
        functional: false,
        marketing: false,
      },
      timestamp: new Date().toISOString(),
      version: "1.0",
    };
    saveClientCookiePreferences(pref);
    sendConsentTelemetry("reject_non_essential", ["necessary"]);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSaveCustom = () => {
    const chosenCategories = ["necessary"];
    if (analytics) chosenCategories.push("analytics");
    if (functional) chosenCategories.push("functional");
    if (marketing) chosenCategories.push("marketing");

    const pref: CookiePreferences = {
      choice: "custom",
      categories: {
        necessary: true,
        analytics,
        functional,
        marketing,
      },
      timestamp: new Date().toISOString(),
      version: "1.0",
    };
    saveClientCookiePreferences(pref);
    sendConsentTelemetry("custom", chosenCategories);
    setShowBanner(false);
    setShowModal(false);
  };

  return (
    <>
      {/* Bottom Floating Consent Banner */}
      {showBanner && !showModal && (
        <aside
          role="region"
          aria-label="Cookie consent banner"
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl rounded-2xl border border-line bg-paper/95 p-5 shadow-2xl backdrop-blur-md transition-all sm:p-6"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <ShieldCheck size={22} />
              </div>
              <div className="space-y-1">
                <h2 className="font-display text-[15.5px] font-bold text-ink">
                  We respect your privacy & data choices
                </h2>
                <p className="text-[13px] leading-relaxed text-body max-w-2xl">
                  We use necessary cookies to operate our website and optional privacy-conscious
                  analytics to improve attendance and payroll solutions for Cambodia. No invasive
                  tracking or profiling is used.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 self-end lg:self-center">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="rounded-lg border border-line px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-mist hover:text-ink transition-colors"
              >
                Customize
              </button>

              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="rounded-lg border border-line px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-mist hover:text-ink transition-colors"
              >
                Reject Non-Essential
              </button>

              <button
                type="button"
                onClick={handleAcceptAll}
                className="rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-brand-dark transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Preferences Customization Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setShowModal(false)}
            aria-hidden="true"
          />

          <div className="relative z-10 w-full max-w-lg rounded-2xl border border-line bg-paper p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-line pb-3">
              <div className="flex items-center gap-2">
                <Settings size={18} className="text-brand" />
                <h3 className="font-display text-[16.5px] font-bold text-ink">
                  Cookie & Privacy Preferences
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-lg p-1 text-slate-400 hover:bg-mist hover:text-ink"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-4 space-y-4 text-xs">
              {/* Necessary Category */}
              <div className="flex items-start justify-between rounded-xl border border-line bg-mist/50 p-3.5">
                <div>
                  <div className="flex items-center gap-1.5 font-semibold text-ink">
                    <Lock size={13} className="text-slate-500" />
                    <span>Necessary Cookies (Strictly Required)</span>
                  </div>
                  <p className="text-[11.5px] text-slate-500 mt-0.5">
                    Essential for secure authentication, CSRF defense, and remembering your preferences.
                  </p>
                </div>
                <span className="rounded bg-slate-200 px-2 py-0.5 font-semibold text-[10px] text-slate-600">
                  Always Active
                </span>
              </div>

              {/* Analytics Category */}
              <div className="flex items-start justify-between rounded-xl border border-line p-3.5">
                <div>
                  <span className="font-semibold text-ink">Analytics Cookies</span>
                  <p className="text-[11.5px] text-slate-500 mt-0.5">
                    Helps us understand landing page navigation flow without collecting personal info.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer ml-3">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
                </label>
              </div>

              {/* Functional Category */}
              <div className="flex items-start justify-between rounded-xl border border-line p-3.5">
                <div>
                  <span className="font-semibold text-ink">Functional Preferences</span>
                  <p className="text-[11.5px] text-slate-500 mt-0.5">
                    Remembers your language choice (English / Khmer) and currency toggle ($ USD / ៛ KHR).
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer ml-3">
                  <input
                    type="checkbox"
                    checked={functional}
                    onChange={(e) => setFunctional(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
                </label>
              </div>

              {/* Marketing Category */}
              <div className="flex items-start justify-between rounded-xl border border-line p-3.5">
                <div>
                  <span className="font-semibold text-ink">Marketing & Attribution</span>
                  <p className="text-[11.5px] text-slate-500 mt-0.5">
                    Measures campaign effectiveness from partner referrals.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer ml-3">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
                </label>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
              <a
                href="/cookies"
                target="_blank"
                className="text-[11.5px] font-medium text-slate-500 underline hover:text-ink"
              >
                Read full Cookie Policy
              </a>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-mist"
                >
                  Reject Optional
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="rounded-lg bg-brand px-4 py-1.5 text-xs font-semibold text-white hover:bg-brand-dark"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Global button to reopen cookie settings from footer
export function OpenCookieSettingsButton({ className = "" }: { className?: string }) {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("attendkh:open_cookie_settings"));
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`text-slate-500 hover:text-ink transition-colors ${className}`}
    >
      Cookie Settings
    </button>
  );
}
