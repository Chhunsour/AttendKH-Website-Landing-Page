"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Factory,
  UtensilsCrossed,
  Store,
  Sparkles,
  Hotel,
  Stethoscope,
  Warehouse,
  HardHat,
  GraduationCap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Layers,
} from "lucide-react";
import { useSite } from "@/lib/i18n";
import { useHomeCopy, Rise } from "@/components/home/parts";

const SHELL = "mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:px-14";

const ICON_MAP = {
  Building2,
  Factory,
  UtensilsCrossed,
  Store,
  Sparkles,
  Hotel,
  Stethoscope,
  Warehouse,
  HardHat,
  GraduationCap,
} as const;

type IconName = keyof typeof ICON_MAP;

function useDragToScroll<T extends HTMLElement>() {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let moved = false;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      moved = false;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
    };

    const onMouseUp = () => {
      isDown = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      if (Math.abs(walk) > 4) {
        moved = true;
      }
      el.scrollLeft = scrollLeft - walk;
    };

    const onClickCapture = (e: MouseEvent) => {
      if (moved) {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("click", onClickCapture, true);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return containerRef;
}

export function IndustriesSection() {
  const c = useHomeCopy();
  const ind = c.industries;
  const { lang } = useSite();
  const isKm = lang === "km";

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeItem = ind.items[activeIndex] || ind.items[0];
  const ActiveIcon = ICON_MAP[activeItem.icon as IconName] || Building2;

  const topPillsRef = useDragToScroll<HTMLDivElement>();
  const thumbnailsRef = useDragToScroll<HTMLDivElement>();

  // Auto scroll active thumbnail into view when changed via arrows or pills
  useEffect(() => {
    if (thumbnailsRef.current) {
      const activeEl = thumbnailsRef.current.children[activeIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeIndex, thumbnailsRef]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? ind.items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === ind.items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="industries" className="relative scroll-mt-24 bg-white py-16 sm:py-20 overflow-hidden border-y border-line">
      <div className={`${SHELL} relative space-y-6 sm:space-y-8`}>
        {/* Clean, Refined Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <Rise className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EDF2FE] px-3.5 py-1 text-[11.5px] font-bold text-[#0052FF]">
              <Layers size={13} className="text-[#0052FF]" />
              <span className="tracking-wider uppercase">{ind.badge}</span>
            </div>

            <h2 className={`text-[1.85rem] sm:text-[2.25rem] lg:text-[2.5rem] font-extrabold leading-tight tracking-[-0.03em] text-[#0F172A] ${isKm ? "font-khmer" : ""}`}>
              {ind.title}
            </h2>

            <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#64748B]">
              {ind.sub}
            </p>
          </Rise>

          {/* Minimalist Prev/Next Arrow Buttons */}
          <Rise delay={0.06} className="flex items-center gap-2 shrink-0 self-end md:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous industry"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs transition-colors hover:border-[#0052FF] hover:text-[#0052FF] active:scale-95 cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next industry"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs transition-colors hover:border-[#0052FF] hover:text-[#0052FF] active:scale-95 cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </Rise>
        </div>

        {/* Clean Draggable Industry Tabs */}
        <Rise delay={0.08}>
          <div
            ref={topPillsRef}
            className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar select-none cursor-grab active:cursor-grabbing"
          >
            {ind.items.map((item, idx) => {
              const isCurrent = idx === activeIndex;
              const Icon = ICON_MAP[item.icon as IconName] || Building2;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveIndex(idx);
                  }}
                  className={`group relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-200 select-none ${
                    isCurrent
                      ? "bg-[#0052FF] text-white shadow-sm cursor-pointer"
                      : "bg-[#F8FAFC] text-slate-600 hover:bg-slate-200/70 hover:text-slate-900 border border-slate-200/80 cursor-pointer"
                  }`}
                >
                  <Icon size={14} className={isCurrent ? "text-white" : "text-slate-500"} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </Rise>

        {/* Ultra-Clean, Crystal-Clear Image Frame */}
        <Rise delay={0.1}>
          <div className="group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-100 shadow-md">
            <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="relative h-full w-full"
                >
                  {/* Razor Sharp, 100% Unobscured Image */}
                  <Image
                    src={activeItem.imageSrc || "/industry_offices_khmer.jpg"}
                    alt={`${activeItem.name} in Cambodia`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1200px"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Clean, Lightweight Caption Bar Directly Below Image */}
            <div className="border-t border-slate-200/80 bg-white p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EDF2FE] text-[#0052FF]">
                  <ActiveIcon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#0F172A]">
                    {activeItem.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#64748B]">
                    {activeItem.tagline}
                  </p>
                </div>
              </div>

              <Link
                href={activeItem.href}
                className="group inline-flex items-center gap-1.5 self-start sm:self-auto text-xs sm:text-[13px] font-bold text-[#0052FF] hover:text-[#0043D6] transition-colors"
              >
                <span>{ind.exploreCta}</span>
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Rise>

        {/* Ultra-Clean Draggable Visual Thumbnail Strip */}
        <Rise delay={0.14}>
          <div
            ref={thumbnailsRef}
            className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-1 no-scrollbar select-none cursor-grab active:cursor-grabbing"
          >
            {ind.items.map((item, idx) => {
              const isCurrent = idx === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveIndex(idx);
                  }}
                  className={`group relative flex-shrink-0 w-[110px] sm:w-[140px] rounded-xl overflow-hidden transition-all duration-200 select-none ${
                    isCurrent
                      ? "ring-2 ring-[#0052FF] shadow-sm cursor-pointer"
                      : "opacity-60 hover:opacity-100 cursor-pointer"
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 pointer-events-none">
                    <Image
                      src={item.imageSrc || "/industry_offices_khmer.jpg"}
                      alt={item.name}
                      fill
                      sizes="140px"
                      className="object-cover"
                      draggable={false}
                    />
                  </div>
                  <div className="bg-white p-1.5 border-t border-slate-100 text-center pointer-events-none">
                    <p className="truncate text-[10.5px] sm:text-[11px] font-semibold text-slate-800">
                      {item.name}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </Rise>
      </div>
    </section>
  );
}
