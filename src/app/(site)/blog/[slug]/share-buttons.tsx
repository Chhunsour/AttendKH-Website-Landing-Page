"use client";

import { useState } from "react";
import { Send, Copy, Check, Mail, Share2, QrCode, ChevronDown, ChevronUp } from "lucide-react";
import { absoluteUrl } from "@/lib/site";
import { motion, AnimatePresence } from "framer-motion";

export function ShareButtons({
  title,
  slug,
  compact = false,
}: {
  title: string;
  slug: string;
  compact?: boolean;
}) {
  const [showAll, setShowAll] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const url = absoluteUrl(`/blog/${slug}`);

  const openShareWindow = (shareUrl: string) => {
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=600");
  };

  const shareTelegram = () => {
    openShareWindow(
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    );
  };

  const shareFacebook = () => {
    openShareWindow(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    );
  };

  const shareMessenger = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `fb-messenger://share?link=${encodeURIComponent(url)}`;
      setTimeout(() => {
        openShareWindow(
          `https://www.facebook.com/dialog/send?link=${encodeURIComponent(url)}&app_id=291494419107518&redirect_uri=${encodeURIComponent(url)}`
        );
      }, 500);
    } else {
      openShareWindow(
        `https://www.facebook.com/dialog/send?link=${encodeURIComponent(url)}&app_id=291494419107518&redirect_uri=${encodeURIComponent(url)}`
      );
    }
  };

  const shareWhatsApp = () => {
    openShareWindow(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} — ${url}`)}`
    );
  };

  const shareTwitter = () => {
    openShareWindow(
      `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    );
  };

  const shareLinkedIn = () => {
    openShareWindow(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    );
  };

  const shareEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
      `Read this article from AttendKH:\n\n${title}\n\n${url}`
    )}`;
  };

  const copyLink = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className={`relative flex flex-wrap items-center gap-2 ${compact ? "" : "mb-8 pb-6 border-b border-slate-200/90"}`}>
      {!compact && (
        <span className="text-xs font-semibold text-slate-500 mr-1.5 flex items-center gap-1">
          <Share2 size={13} className="text-slate-400" />
          <span>Share:</span>
        </span>
      )}

      {/* 1. Telegram Button (Primary) */}
      <button
        type="button"
        onClick={shareTelegram}
        title="Share to Telegram"
        className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 transition-all duration-150 shadow-2xs cursor-pointer active:scale-95"
      >
        <Send size={13} className="text-[#229ED9]" />
        <span>Telegram</span>
      </button>

      {/* 2. Facebook Button (Primary) */}
      <button
        type="button"
        onClick={shareFacebook}
        title="Share on Facebook"
        className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#1877F2] hover:border-blue-200 transition-all duration-150 shadow-2xs cursor-pointer active:scale-95"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="#1877F2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        <span>Facebook</span>
      </button>

      {/* 3. Copy Link Button with Animated Feedback */}
      <button
        type="button"
        onClick={copyLink}
        title="Copy article link"
        className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-xs font-semibold transition-all duration-150 shadow-2xs cursor-pointer active:scale-95 ${
          copied
            ? "bg-emerald-50 border-emerald-300 text-emerald-700 font-bold"
            : "bg-white border-slate-200/90 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
        }`}
      >
        {copied ? (
          <>
            <Check size={13} strokeWidth={2.5} className="text-emerald-600 animate-in zoom-in-50" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy size={13} className="text-slate-500" />
            <span>Copy Link</span>
          </>
        )}
      </button>

      {/* Hidden / Expanded Share Options */}
      <AnimatePresence>
        {showAll && (
          <>
            {/* 4. Facebook Messenger Button */}
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.9, x: -4 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -4 }}
              transition={{ duration: 0.15 }}
              onClick={shareMessenger}
              title="Share via Messenger"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-sky-50 hover:text-[#0084FF] hover:border-sky-200 transition-all duration-150 shadow-2xs cursor-pointer active:scale-95"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#0084FF">
                <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.304 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.79 8.24l3.127 3.259L19.81 8.24l-6.619 6.723z" />
              </svg>
              <span>Messenger</span>
            </motion.button>

            {/* 5. WhatsApp Button */}
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.9, x: -4 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -4 }}
              transition={{ duration: 0.15, delay: 0.02 }}
              onClick={shareWhatsApp}
              title="Share on WhatsApp"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all duration-150 shadow-2xs cursor-pointer active:scale-95"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#25D366">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp</span>
            </motion.button>

            {/* 6. X (Twitter) Button */}
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.9, x: -4 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -4 }}
              transition={{ duration: 0.15, delay: 0.04 }}
              onClick={shareTwitter}
              title="Share on X"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-black hover:border-slate-300 transition-all duration-150 shadow-2xs cursor-pointer active:scale-95"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>X</span>
            </motion.button>

            {/* 7. LinkedIn Button */}
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.9, x: -4 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -4 }}
              transition={{ duration: 0.15, delay: 0.06 }}
              onClick={shareLinkedIn}
              title="Share on LinkedIn"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#0A66C2] hover:border-blue-200 transition-all duration-150 shadow-2xs cursor-pointer active:scale-95"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </motion.button>

            {/* 8. Email Button */}
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.9, x: -4 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -4 }}
              transition={{ duration: 0.15, delay: 0.08 }}
              onClick={shareEmail}
              title="Share via Email"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 transition-all duration-150 shadow-2xs cursor-pointer active:scale-95"
            >
              <Mail size={13} className="text-rose-500" />
              <span>Email</span>
            </motion.button>

            {/* 9. QR Code Button */}
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.9, x: -4 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -4 }}
              transition={{ duration: 0.15, delay: 0.1 }}
              onClick={() => setShowQr(true)}
              title="Show QR Code"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-brand-soft hover:text-brand hover:border-brand/30 transition-all duration-150 shadow-2xs cursor-pointer active:scale-95"
            >
              <QrCode size={13} className="text-brand" />
              <span>QR Code</span>
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* 10. View all / Show less Toggle Button */}
      <button
        type="button"
        onClick={() => setShowAll((prev) => !prev)}
        title={showAll ? "Show fewer share options" : "View all share options"}
        aria-expanded={showAll}
        className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all duration-150 shadow-2xs cursor-pointer active:scale-95 ${
          showAll
            ? "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
            : "bg-white border-slate-200/90 text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300"
        }`}
      >
        <span>{showAll ? "Show less" : "View all"}</span>
        {showAll ? <ChevronUp size={13} className="text-slate-500" /> : <ChevronDown size={13} className="text-slate-500" />}
      </button>

      {/* QR Code Popup Modal */}
      <AnimatePresence>
        {showQr && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4 text-center"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="font-display text-sm font-bold text-slate-900">Scan to Open on Mobile</span>
                <button
                  type="button"
                  onClick={() => setShowQr(false)}
                  className="rounded-lg p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* QR Image */}
              <div className="flex justify-center p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(url)}`}
                  alt={`QR code for reading "${title}" on AttendKH (Attend)`}
                  width={180}
                  height={180}
                  className="rounded-lg shadow-2xs"
                />
              </div>

              <p className="text-xs text-slate-500 truncate">{url}</p>

              <button
                type="button"
                onClick={() => setShowQr(false)}
                className="w-full rounded-xl bg-brand py-2.5 text-xs font-bold text-white hover:bg-brand-dark transition-colors cursor-pointer"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
