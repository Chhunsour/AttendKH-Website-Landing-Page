"use client";

import { useState } from "react";
import {
  MapPin,
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Smartphone,
  Navigation,
  Sparkles,
  Info,
} from "lucide-react";
import { useSite } from "@/lib/i18n";

export function GeofenceDemo() {
  const { lang } = useSite();
  const isKm = lang === "km";

  const [radius, setRadius] = useState<50 | 100 | 200>(100);
  const [position, setPosition] = useState<"inside" | "outside">("inside");
  const [mockGpsBlocked, setMockGpsBlocked] = useState(true);

  const isInside = position === "inside";

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-paper shadow-xl">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:items-center">
        {/* Interactive Map Visualizer */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="relative h-72 w-full max-w-md rounded-2xl border border-line bg-slate-950 p-4 overflow-hidden flex items-center justify-center">
            {/* Grid background representing street map */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />

            {/* Geofence Circle Radius */}
            <div
              className={`absolute rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                isInside
                  ? "border-emerald-500/80 bg-emerald-500/10"
                  : "border-brand/60 bg-brand/5"
              }`}
              style={{
                width: radius === 50 ? "140px" : radius === 100 ? "200px" : "260px",
                height: radius === 50 ? "140px" : radius === 100 ? "200px" : "260px",
              }}
            >
              {/* Geofence pulse wave */}
              <div className="absolute inset-0 rounded-full border border-emerald-400/30 animate-ping opacity-30" />
            </div>

            {/* Branch Center Landmark Pin */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/40">
                <MapPin size={20} />
              </div>
              <span className="mt-1 rounded bg-slate-900/90 px-2 py-0.5 font-mono text-[10px] font-bold text-white border border-slate-700">
                Tuol Kork Branch
              </span>
            </div>

            {/* Simulated Employee Marker */}
            <div
              className={`absolute z-20 flex flex-col items-center transition-all duration-700 ${
                isInside
                  ? "translate-x-12 -translate-y-8"
                  : "translate-x-32 translate-y-24"
              }`}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-white shadow-md transition-colors ${
                  isInside ? "bg-emerald-500 animate-bounce" : "bg-rose-500"
                }`}
              >
                <Smartphone size={15} />
              </div>
              <span
                className={`mt-1 rounded px-1.5 py-0.5 text-[9.5px] font-bold font-mono text-white ${
                  isInside ? "bg-emerald-800" : "bg-rose-800"
                }`}
              >
                {isInside ? "Sokha (32m away)" : "Sokha (290m away)"}
              </span>
            </div>

            {/* Bottom Map Legend */}
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-lg backdrop-blur-xs">
              <span>Radius: {radius}m</span>
              <span className="text-emerald-400">
                {isInside ? "● Inside Geofence" : "▲ Outside Geofence"}
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Controls & Real-time Verification Feedback */}
        <div className="lg:col-span-5 space-y-5">
          <div>
            <span className="rounded bg-brand-soft px-2.5 py-1 text-xs font-bold text-brand uppercase tracking-wider">
              {isKm ? "ការផ្ទៀងផ្ទាត់ GPS ផ្ទាល់" : "Live Geofence Test"}
            </span>
            <h3 className="font-display mt-2 text-xl font-bold text-ink sm:text-2xl">
              {isKm
                ? "សាកល្បងកំណត់ទីតាំង និងរង្វង់សុពលភាព"
                : "Simulate Employee Location Verification"}
            </h3>
          </div>

          {/* Location Position Toggle */}
          <div>
            <label className="block text-xs font-semibold text-ink mb-1.5">
              {isKm ? "ទីតាំងបុគ្គលិកសាកល្បង" : "Simulated Employee Location"}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPosition("inside")}
                className={`rounded-xl border p-2.5 text-xs font-semibold transition-all ${
                  isInside
                    ? "border-emerald-500 bg-emerald-50 text-emerald-800 shadow-xs"
                    : "border-line bg-mist text-slate-600 hover:text-ink"
                }`}
              >
                📍 {isKm ? "នៅក្នុងសាខា (32m)" : "Inside Branch (32m)"}
              </button>
              <button
                type="button"
                onClick={() => setPosition("outside")}
                className={`rounded-xl border p-2.5 text-xs font-semibold transition-all ${
                  !isInside
                    ? "border-rose-500 bg-rose-50 text-rose-800 shadow-xs"
                    : "border-line bg-mist text-slate-600 hover:text-ink"
                }`}
              >
                🚫 {isKm ? "នៅក្រៅសាខា (290m)" : "Outside Branch (290m)"}
              </button>
            </div>
          </div>

          {/* Branch Radius Adjuster */}
          <div>
            <label className="block text-xs font-semibold text-ink mb-1.5">
              {isKm ? "កម្រិតរង្វង់សាខា (Branch Radius)" : "Branch Radius Setting"}
            </label>
            <div className="flex gap-2">
              {([50, 100, 200] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRadius(r)}
                  className={`flex-1 rounded-lg border py-1.5 text-xs font-mono font-semibold transition-all ${
                    radius === r
                      ? "border-brand bg-brand text-white"
                      : "border-line bg-paper text-slate-600 hover:bg-mist"
                  }`}
                >
                  {r}m {r === 50 ? "(Cafe)" : r === 100 ? "(Office)" : "(Yard)"}
                </button>
              ))}
            </div>
          </div>

          {/* Real-time Result Banner */}
          <div
            className={`rounded-2xl border p-4 transition-all duration-300 ${
              isInside
                ? "border-emerald-200 bg-emerald-50/80 text-emerald-900"
                : "border-rose-200 bg-rose-50/80 text-rose-900"
            }`}
          >
            <div className="flex items-start gap-3">
              {isInside ? (
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-600" />
              ) : (
                <XCircle size={20} className="mt-0.5 shrink-0 text-rose-600" />
              )}
              <div className="space-y-1">
                <p className="font-display font-bold text-[14px]">
                  {isInside
                    ? isKm
                      ? "ទីតាំងត្រឹមត្រូវ — អនុញ្ញាតឱ្យកត់ត្រាម៉ោង"
                      : "Location Verified — Punch Allowed"
                    : isKm
                      ? "នៅក្រៅតំបន់សាខា — បដិសេធការកត់ត្រាម៉ោង"
                      : "Outside Geofence — Clock-in Blocked"}
                </p>
                <p className="text-[12px] leading-relaxed opacity-85">
                  {isInside
                    ? isKm
                      ? `បុគ្គលិកស្ថិតនៅចម្ងាយ 32m ក្នុងរង្វង់ ${radius}m នៃសាខាទួលគោក។ រូបថត selfie ភ្ជាប់ជាមួយកូអរដោនេ។`
                      : `Employee is 32m away, safely within the ${radius}m Tuol Kork radius. Selfie timestamp logged.`
                    : isKm
                      ? `បុគ្គលិកស្ថិតនៅចម្ងាយ 290m (លើសរង្វង់ ${radius}m)។ ប្រព័ន្ធការពារ mock GPS បានទប់ស្កាត់ការកត់ត្រាក្លែងបន្លំ។`
                      : `Employee is 290m away (exceeds ${radius}m radius). Anti-mock GPS shield prevented proxy punch.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
