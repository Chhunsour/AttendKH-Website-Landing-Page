"use client";

import { useState } from "react";
import { Send, Copy, Check } from "lucide-react";
import { absoluteUrl } from "@/lib/site";

export function ShareButtons({
  title,
  slug,
  compact = false,
}: {
  title: string;
  slug: string;
  compact?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const url = absoluteUrl(`/blog/${slug}`);

  const shareTelegram = () => {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      "_blank"
    );
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      "_blank"
    );
  };

  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const copyLink = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${compact ? "" : "mb-8 pb-6 border-b border-line"}`}>
      {!compact && <span className="text-xs font-semibold text-slate-500 mr-2">Share:</span>}

      <button
        type="button"
        onClick={shareTelegram}
        title="Share on Telegram"
        className="flex items-center gap-1.5 rounded-lg border border-line bg-paper px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 transition-colors"
      >
        <Send size={13} className="text-sky-500" />
        <span>Telegram</span>
      </button>

      <button
        type="button"
        onClick={shareTwitter}
        title="Share on Twitter / X"
        className="flex items-center gap-1.5 rounded-lg border border-line bg-paper px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 hover:text-black transition-colors"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span>X</span>
      </button>

      <button
        type="button"
        onClick={shareLinkedIn}
        title="Share on LinkedIn"
        className="flex items-center gap-1.5 rounded-lg border border-line bg-paper px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
        <span>LinkedIn</span>
      </button>

      <button
        type="button"
        onClick={copyLink}
        title="Copy Link"
        className="flex items-center gap-1.5 rounded-lg border border-line bg-paper px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-mist transition-colors"
      >
        {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
}
