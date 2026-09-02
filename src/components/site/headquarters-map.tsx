"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Send,
  Navigation,
  ExternalLink,
  Plus,
  Minus,
  RotateCcw,
  Layers,
} from "lucide-react";
import { useSite } from "@/lib/i18n";

interface HeadquartersMapProps {
  googleMapsUrl?: string;
}

export function HeadquartersMap({
  googleMapsUrl = "https://maps.app.goo.gl/Qw1zEoirTn6TFoXg7",
}: HeadquartersMapProps) {
  const { lang } = useSite();
  const isKm = lang === "km";

  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isGoogleEmbed, setIsGoogleEmbed] = useState(false);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.75));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // 3x3 Grid of local high-res tiles centered at 15_25932_15340
  const rows = [
    ["15_25931_15339", "15_25932_15339", "15_25933_15339"],
    ["15_25931_15340", "15_25932_15340", "15_25933_15340"],
    ["15_25931_15341", "15_25932_15341", "15_25933_15341"],
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-900 shadow-2xl min-h-[560px] sm:min-h-[620px] lg:min-h-[660px]">
      {/* MAP CANVAS */}
      {isGoogleEmbed ? (
        <iframe
          src="https://maps.google.com/maps?q=11.5203646,104.8980894&t=&z=16&ie=UTF8&iwloc=&output=embed"
          title="371 Garage Google Map View"
          className="absolute inset-0 w-full h-full border-0"
          loading="eager"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 overflow-hidden flex items-center justify-center bg-[#E5E3DF] cursor-grab active:cursor-grabbing">
          {/* Stitched Map Tiles */}
          <div
            className="transition-transform duration-200 ease-out select-none relative"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              width: "768px",
              height: "768px",
            }}
          >
            <div className="grid grid-cols-3 w-[768px] h-[768px]">
              {rows.map((row, rIdx) =>
                row.map((tileName) => (
                  <div key={tileName} className="w-[256px] h-[256px] relative">
                    <img
                      src={`/maps/tiles/${tileName}.png`}
                      alt={`Map Tile ${tileName}`}
                      className="w-full h-full object-cover block pointer-events-none"
                      draggable={false}
                    />
                  </div>
                ))
              )}
            </div>

            {/* Custom Interactive Marker at exact location (Center of center tile) */}
            <div
              className="absolute z-20 flex flex-col items-center pointer-events-auto"
              style={{
                left: "52.8%",
                top: "52.4%",
                transform: "translate(-50%, -100%)",
              }}
            >
              {/* Tooltip Card */}
              <div className="mb-2 rounded-xl border border-slate-800 bg-slate-950/95 backdrop-blur-md px-3.5 py-2 text-center text-white shadow-xl whitespace-nowrap animate-bounce-subtle">
                <p className="font-display text-xs font-bold text-white tracking-wide">
                  371 Garage / MPG Studio
                </p>
                <p className="font-mono text-[10px] text-blue-300">
                  AttendKH Headquarters
                </p>
              </div>

              {/* Red Pin Marker with Radar Wave */}
              <div className="relative flex items-center justify-center">
                <span className="absolute h-10 w-10 rounded-full bg-red-500/30 animate-ping" />
                <span className="absolute h-6 w-6 rounded-full bg-red-500/50" />
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white shadow-lg border-2 border-white">
                  <MapPin size={18} className="fill-white" />
                </div>
              </div>

              {/* Pin Base Shadow */}
              <div className="mt-0.5 h-1.5 w-4 rounded-full bg-slate-900/40 blur-[1px]" />
            </div>
          </div>
        </div>
      )}

      {/* TOP-RIGHT CONTROLS */}
      <div className="absolute top-5 right-5 z-20 flex flex-col sm:flex-row items-end sm:items-center gap-2">
        {/* Layer Mode Toggle */}
        <button
          type="button"
          onClick={() => setIsGoogleEmbed(!isGoogleEmbed)}
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white/95 px-3 py-2 text-xs font-semibold text-slate-700 shadow-md backdrop-blur-md hover:bg-slate-100 transition-all cursor-pointer"
        >
          <Layers size={13} className="text-brand" />
          <span>{isGoogleEmbed ? "Standard Map" : "Google Mode"}</span>
        </button>

        {/* Direct Google Maps External Shortcut */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/95 px-4 py-2 text-xs font-bold text-slate-900 shadow-md backdrop-blur-md hover:bg-brand hover:text-white hover:border-brand transition-all cursor-pointer"
        >
          <span>{isKm ? "បើកលើ Google Maps" : "Open in Google Maps"}</span>
          <ExternalLink size={13} />
        </a>
      </div>

      {/* ZOOM & RECENTER CONTROLS (When in Standard Mode) */}
      {!isGoogleEmbed && (
        <div className="absolute bottom-5 right-5 z-20 hidden sm:flex flex-col gap-1.5 rounded-xl border border-slate-200/90 bg-white/95 p-1.5 shadow-lg backdrop-blur-md">
          <button
            type="button"
            onClick={handleZoomIn}
            aria-label="Zoom in"
            className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
          >
            <Plus size={16} />
          </button>
          <button
            type="button"
            onClick={handleZoomOut}
            aria-label="Zoom out"
            className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
          >
            <Minus size={16} />
          </button>
          <button
            type="button"
            onClick={handleReset}
            aria-label="Reset map"
            className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer border-t border-slate-100 pt-1"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      )}

      {/* FLOATING GLASSMORPHIC CONSOLE CARD */}
      <div className="relative z-10 p-4 sm:p-6 lg:p-8 max-w-lg">
        <div className="rounded-2xl sm:rounded-3xl border border-white/80 bg-white/95 backdrop-blur-xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.14)] space-y-5">
          {/* Header Badge */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft border border-blue-200/70 px-3.5 py-1 text-xs font-bold text-brand uppercase tracking-wider shadow-2xs">
              <MapPin size={13} />
              <span>{isKm ? "ទីស្នាក់ការកណ្តាល" : "HEADQUARTERS & HUB"}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open Mon–Fri</span>
            </span>
          </div>

          {/* Address Title & Details */}
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {isKm ? "ផ្លូវ ៣៧១ រាជធានីភ្នំពេញ" : "Street 371, Phnom Penh, Cambodia"}
            </h3>
            <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-slate-600">
              {isKm
                ? "ការិយាល័យកណ្តាល និងមជ្ឈមណ្ឌលវិស្វកម្ម AttendKH (371 Garage / MPG Studio)។ សូមអញ្ជើញមកទស្សនាសម្រាប់ការណែនាំប្រព័ន្ធ និងការកំណត់សាខា។"
                : "Central engineering hub for system onboarding, multi-branch geofence calibration, and direct team training."}
            </p>
          </div>

          {/* Key Telemetry & Hours */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <div className="rounded-xl border border-slate-200/70 bg-slate-50/80 p-3 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
                <Clock size={13} className="text-brand" />
                <span>{isKm ? "ម៉ោងធ្វើការ" : "Working Hours"}</span>
              </div>
              <p className="text-xs font-bold text-slate-900 font-num">
                8:00 – 17:30 ICT
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/70 bg-slate-50/80 p-3 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
                <Send size={13} className="text-brand" />
                <span>{isKm ? "តេឡេក្រាមជំនួយ" : "Direct Support"}</span>
              </div>
              <a
                href="https://t.me/attendkh"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs font-bold text-brand hover:underline"
              >
                @attendkh
              </a>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2 border-t border-slate-100">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand hover:bg-brand-dark px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,82,255,0.28)] transition-all duration-200 cursor-pointer"
            >
              <Navigation size={14} />
              <span>{isKm ? "ទិសដៅលើ Google Maps" : "Get Directions"}</span>
              <ExternalLink size={12} className="opacity-80" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs transition-all duration-200"
            >
              <span>{isKm ? "កក់ការណាត់ជួប" : "Schedule a Visit"}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
