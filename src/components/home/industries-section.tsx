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
  CheckCircle2,
} from "lucide-react";
import { useSite } from "@/lib/i18n";
import { useHomeCopy, Rise } from "@/components/home/parts";

const SHELL = "mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8";

type IconName =
  | "building-2"
  | "factory"
  | "utensils-crossed"
  | "store"
  | "sparkles"
  | "hotel"
  | "stethoscope"
  | "warehouse"
  | "hard-hat"
  | "graduation-cap";

const ICON_MAP: Record<IconName, React.ComponentType<{ size?: number; className?: string }>> = {
  "building-2": Building2,
  factory: Factory,
  "utensils-crossed": UtensilsCrossed,
  store: Store,
  sparkles: Sparkles,
  hotel: Hotel,
  stethoscope: Stethoscope,
  warehouse: Warehouse,
  "hard-hat": HardHat,
  "graduation-cap": GraduationCap,
};

// Smooth drag-to-scroll hook for horizontal containers
function useDragToScroll<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
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
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
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
  const [direction, setDirection] = useState<number>(0);
  const activeItem = ind.items[activeIndex] || ind.items[0];
  const ActiveIcon = ICON_MAP[activeItem.icon as IconName] || Building2;

  const topPillsRef = useDragToScroll<HTMLDivElement>();
  const thumbnailsRef = useDragToScroll<HTMLDivElement>();
  const isFirstRender = useRef(true);

  // Auto scroll active thumbnail horizontally within its container only (never scroll window)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const container = thumbnailsRef.current;
    if (container) {
      const activeEl = container.children[activeIndex] as HTMLElement;
      if (activeEl) {
        const containerLeft = container.getBoundingClientRect().left;
        const elementLeft = activeEl.getBoundingClientRect().left;
        const relativeLeft = elementLeft - containerLeft;
        const targetScrollLeft =
          container.scrollLeft + relativeLeft - container.clientWidth / 2 + activeEl.clientWidth / 2;
        container.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
      }
    }
  }, [activeIndex, thumbnailsRef]);

  const goToIndex = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  const handlePrev = () => {
    const prevIdx = activeIndex === 0 ? ind.items.length - 1 : activeIndex - 1;
    goToIndex(prevIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex === ind.items.length - 1 ? 0 : activeIndex + 1;
    goToIndex(nextIdx);
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

          {/* Minimalist Prev/Next Arrow Controls with Index Counter */}
          <Rise delay={0.06} className="flex items-center gap-3 shrink-0 self-end md:self-auto">
            <span className="font-mono text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
              {String(activeIndex + 1).padStart(2, "0")} / {String(ind.items.length).padStart(2, "0")}
            </span>

            <div className="flex items-center gap-1.5">
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
            </div>
          </Rise>
        </div>

        {/* Clean Top Category Pill Tabs */}
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
                  onClick={() => goToIndex(idx)}
                  className={`group relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-200 select-none cursor-pointer ${
                    isCurrent
                      ? "bg-[#0052FF] text-white shadow-sm"
                      : "bg-[#F8FAFC] text-slate-600 hover:bg-slate-200/70 hover:text-slate-900 border border-slate-200/80"
                  }`}
                >
                  <Icon size={14} className={isCurrent ? "text-white" : "text-slate-500"} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </Rise>

        {/* Main Crystal-Clear Feature Display with Touch Swipe Support */}
        <Rise delay={0.1}>
          <div className="group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-100 shadow-md">
            <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden touch-pan-y">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeItem.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 25 : -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -25 : 25 }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_e, { offset, velocity }) => {
                    if (offset.x < -40 || velocity.x < -300) {
                      handleNext();
                    } else if (offset.x > 40 || velocity.x > 300) {
                      handlePrev();
                    }
                  }}
                  className="relative h-full w-full cursor-grab active:cursor-grabbing"
                >
                  <Image
                    src={activeItem.imageSrc || "/industry_offices_khmer.jpg"}
                    alt={`${activeItem.name} in Cambodia`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1200px"
                    className="object-cover pointer-events-none"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Clean Caption Bar Directly Below Image */}
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

        {/* -------------------------------------------------------------
            REDESIGNED: ULTRA-CLEAN WIDE CARD PREVIEW RAIL
        ------------------------------------------------------------- */}
        <Rise delay={0.14}>
          <div
            ref={thumbnailsRef}
            className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 no-scrollbar select-none cursor-grab active:cursor-grabbing"
          >
            {ind.items.map((item, idx) => {
              const isCurrent = idx === activeIndex;
              const Icon = ICON_MAP[item.icon as IconName] || Building2;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToIndex(idx)}
                  className={`group relative flex-shrink-0 w-48 sm:w-56 rounded-2xl overflow-hidden transition-all duration-300 select-none text-left cursor-pointer ${
                    isCurrent
                      ? "ring-2 ring-[#0052FF] ring-offset-2 shadow-lg shadow-blue-500/15 scale-[1.02]"
                      : "opacity-60 hover:opacity-100 hover:scale-[1.01] border border-slate-200/80"
                  }`}
                >
                  {/* Photo Container with subtle gradient */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 pointer-events-none">
                    <Image
                      src={item.imageSrc || "/industry_offices_khmer.jpg"}
                      alt={item.name}
                      fill
                      sizes="224px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      draggable={false}
                    />

                    {/* Dark gradient for crisp text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                    {/* Content inside the card */}
                    <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="flex h-5 w-5 items-center justify-center rounded-md bg-white/20 backdrop-blur-xs text-white">
                          <Icon size={11} />
                        </div>
                        <span className="font-mono text-[10px] text-blue-300 font-bold uppercase tracking-wider">
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="font-display text-xs sm:text-[13px] font-bold text-white leading-snug line-clamp-1 drop-shadow-xs">
                        {item.name}
                      </p>
                    </div>

                    {/* Active Checkmark Pill */}
                    {isCurrent && (
                      <div className="absolute top-2.5 right-2.5 flex items-center justify-center h-5 w-5 rounded-full bg-[#0052FF] text-white shadow-xs">
                        <CheckCircle2 size={13} />
                      </div>
                    )}
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
