"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { useSite } from "@/lib/i18n";
import { type WebsiteSettings, websiteSettings as defaultSettings } from "@/lib/site-content";

export function AnnouncementBar({ initialSettings = defaultSettings }: { initialSettings?: WebsiteSettings }) {
  const { lang } = useSite();
  const [settings] = useState<WebsiteSettings | undefined>(initialSettings);
  const [dismissed, setDismissed] = useState(false);

  if (!settings || settings.announcement_enabled !== 1 || dismissed) {
    return null;
  }

  const text =
    lang === "km" && settings.announcement_text_km
      ? settings.announcement_text_km
      : settings.announcement_text_en;

  if (!text) return null;

  const colorClass =
    settings.announcement_color === "emerald"
      ? "bg-emerald-600 text-white"
      : settings.announcement_color === "amber"
      ? "bg-amber-500 text-ink font-semibold"
      : settings.announcement_color === "dark"
      ? "bg-ink text-white"
      : "bg-brand text-white";

  return (
    <div className={`relative z-40 px-4 py-2 text-center text-xs transition-colors ${colorClass}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2">
        <span>{text}</span>
        {settings.announcement_link && (
          <Link
            href={settings.announcement_link}
            className="inline-flex items-center gap-1 font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            <span>Learn more</span>
            <ArrowRight size={12} />
          </Link>
        )}
      </div>

      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 opacity-75 hover:opacity-100"
        aria-label="Dismiss banner"
      >
        <X size={14} />
      </button>
    </div>
  );
}
