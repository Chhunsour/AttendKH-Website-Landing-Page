"use client";

import { useState, useEffect } from "react";
import {
  MapPin,
  Camera,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
  RefreshCw,
  Building,
  User,
} from "lucide-react";
import { useSite } from "@/lib/i18n";

export function HeroInteractiveDemo() {
  const { lang } = useSite();
  const [punched, setPunched] = useState(false);
  const [currentTime, setCurrentTime] = useState("07:58:42 AM");
  const [punchTime, setPunchTime] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePunch = () => {
    if (punched) {
      setPunched(false);
      setPunchTime(null);
    } else {
      setPunched(true);
      setPunchTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    }
  };

  const isKm = lang === "km";

  return (
    <div className="relative mx-auto w-full max-w-[340px] select-none">
      {/* Subtle phone halo glow */}
      <div className="absolute -inset-2 rounded-[3.2rem] bg-gradient-to-b from-white/30 to-blue-400/20 blur-xl opacity-60 pointer-events-none" />

      {/* Realistic iPhone Bezel */}
      <div className="relative overflow-hidden rounded-[3rem] border-[6px] border-[#101b33] bg-[#0d1527] shadow-[0_25px_60px_rgba(0,30,90,0.45)]">
        {/* Dynamic Island Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 h-4 w-24 rounded-full bg-black flex items-center justify-between px-2">
          <div className="h-2 w-2 rounded-full bg-slate-800" />
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
        </div>

        {/* Screen Content */}
        <div className="relative z-10 flex flex-col justify-between bg-slate-900 px-4 pt-9 pb-5 text-white min-h-[480px]">
          {/* Top Bar Status */}
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-3">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>GPS Verified</span>
              </span>
              <span>Phnom Penh (ICT)</span>
            </div>

            {/* Workplace Location Badge */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-xs">
                  <Building size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[12.5px] font-bold text-white truncate">
                    {isKm ? "ការិយាល័យកណ្តាល ទួលគោក" : "Tuol Kork HQ — Phnom Penh"}
                  </p>
                  <p className="flex items-center gap-1 text-[10.5px] font-medium text-emerald-400">
                    <MapPin size={10} />
                    <span>{isKm ? "នៅក្នុងរង្វង់ 50m • សុពលភាព" : "Inside 50m radius • Valid"}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Live Clock & Shift Target */}
            <div className="mt-4 text-center">
              <p className="font-mono text-2xl font-extrabold tracking-tight text-white tabular-nums">
                {currentTime}
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5 font-medium">
                {isKm ? "វេនព្រឹក: 08:00 – 17:00 (អនុគ្រោះ 15 នាទី)" : "Morning Shift: 08:00 – 17:00 (15m grace)"}
              </p>
            </div>

            {/* Selfie Biometric Verification Preview */}
            <div className="relative mt-3.5 overflow-hidden rounded-2xl border border-white/15 bg-slate-800/80 p-3 text-center">
              <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full border-2 border-emerald-400/80 bg-slate-700 flex items-center justify-center">
                <User size={36} className="text-slate-400" />
                <span className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xs">
                  <Camera size={12} />
                </span>
              </div>
              <p className="mt-2 text-[11px] font-semibold text-slate-200">
                {isKm ? "រូបថតផ្ទាល់ (Live Selfie Checked)" : "Live Selfie Proof Attached"}
              </p>
              <div className="mt-1 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-mono">
                <ShieldCheck size={11} className="text-emerald-400" />
                <span>Anti-Mock GPS Active</span>
              </div>
            </div>
          </div>

          {/* Interactive Clock-In Button */}
          <div className="mt-4 space-y-2">
            <button
              type="button"
              onClick={handlePunch}
              className={`group relative flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-[13.5px] font-bold transition-all duration-300 shadow-lg ${
                punched
                  ? "bg-emerald-500 text-white shadow-emerald-500/25 hover:bg-emerald-600"
                  : "bg-brand text-white shadow-brand/35 hover:bg-brand-dark hover:scale-[1.02] active:scale-[0.98]"
              }`}
            >
              {punched ? (
                <>
                  <CheckCircle2 size={18} className="animate-bounce" />
                  <span>
                    {isKm
                      ? `បានកត់ត្រាម៉ោង ${punchTime} (ជោគជ័យ)`
                      : `Clocked In at ${punchTime} (Success)`}
                  </span>
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  <span>{isKm ? "ចុចដើម្បីកត់ត្រាម៉ោងចូល (Tap to Clock In)" : "Tap to Clock In Now"}</span>
                </>
              )}
            </button>

            {punched && (
              <p className="text-center text-[10.5px] font-mono text-emerald-400 animate-fade-in flex items-center justify-center gap-1">
                <span>⚡ Synced to HR Console in 0.2s</span>
                <button
                  type="button"
                  onClick={handlePunch}
                  className="underline text-slate-400 hover:text-white ml-1"
                >
                  Reset
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
