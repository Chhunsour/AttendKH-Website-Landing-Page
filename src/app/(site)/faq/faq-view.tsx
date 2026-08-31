"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useCopy,
  PageHero,
  Section,
  SectionHead,
  DirectAnswerBlock,
  Reveal,
  CtaBand,
} from "@/components/site/ui";
import { useSite } from "@/lib/i18n";

export function FaqView() {
  const c = useCopy();
  const f = c.faq;
  const { lang } = useSite();
  const isKm = lang === "km";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      <PageHero title={f.title} sub={f.sub} />

      {/* Direct Answer Summary Block for AEO / Search Engines */}
      <Section tone="white">
        <div className="mx-auto max-w-[1240px]">
          <DirectAnswerBlock
            question={
              isKm
                ? "តើ AttendKH ដោះស្រាយបញ្ហាចម្បងៗអ្វីខ្លះសម្រាប់អាជីវកម្មនៅកម្ពុជា?"
                : "What core operational problems does AttendKH solve for Cambodian businesses?"
            }
            answer={
              isKm
                ? "AttendKH ជួយការពារការចុះវត្តមានជំនួសគ្នា តាមរយៈការផ្ទៀងផ្ទាត់ GPS កាំ ៥០–២០០ម និងរូបថត Selfie ផ្ទាល់។ វាក៏ជួយសម្រួលការគណនាប្រាក់ខែ តាមរយៈការគណនាម៉ោងបន្ថែម (១.៥x/២.០x) ការកាត់យឺត និងវិភាគទាន ប.ស.ស. តាមរូបមន្តដែលបានកំណត់ ព្រមទាំងបោះពុម្ពប័ណ្ណប្រាក់ខែជាដុល្លារ និងរៀលទន្ទឹមគ្នា។"
                : "AttendKH helps prevent proxy clock-ins using point-in-time 50–200m GPS geofencing with mandatory selfie proof. It streamlines monthly Cambodian payroll calculations by applying configurable overtime rates (1.5× / 2.0×), late rules, and NSSF contributions, generating bilingual payslips in USD ($) and Khmer Riel (៛)."
            }
            facts={[
              {
                label: isKm ? "ការផ្ទៀងផ្ទាត់វត្តមាន" : "Attendance Verification",
                value: isKm ? "GPS កាំសាខា + Selfie ផ្ទាល់" : "GPS Radius + Mandatory Selfie",
              },
              {
                label: isKm ? "ការគណនាប្រាក់ខែ" : "Payroll Rules",
                value: isKm ? "ថែមម៉ោង ១.៥x/២.០x និង ប.ស.ស." : "1.5×/2.0× OT & NSSF Lines",
              },
              {
                label: isKm ? "រូបិយប័ណ្ណទូទាត់" : "Supported Currencies",
                value: "USD ($) & KHR (៛)",
              },
            ]}
          />
        </div>
      </Section>

      {/* Accordion Questions */}
      <Section tone="mist">
        <div className="mx-auto max-w-3xl">
          <SectionHead
            title={isKm ? "សំណួរដែលសួរញឹកញាប់" : "Frequently Asked Questions"}
            align="center"
          />

          <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-paper px-6 sm:px-8 shadow-xs">
            {f.items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <Reveal key={item.q} delay={Math.min(i, 4) * 0.04}>
                  <div className="py-5">
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      className="flex w-full cursor-pointer list-none items-start justify-between gap-6 text-left outline-none select-none group"
                      aria-expanded={isOpen}
                    >
                      <h3
                        className={`font-display text-[16px] font-bold leading-snug transition-colors duration-200 ${
                          isOpen ? "text-brand" : "text-ink group-hover:text-brand"
                        }`}
                      >
                        {item.q}
                      </h3>
                      <motion.span
                        aria-hidden="true"
                        animate={{
                          rotate: isOpen ? 45 : 0,
                          backgroundColor: isOpen ? "var(--color-brand, #0052FF)" : "transparent",
                          borderColor: isOpen ? "var(--color-brand, #0052FF)" : "var(--color-line, #E2E8F0)",
                          color: isOpen ? "#FFFFFF" : "#64748B",
                        }}
                        transition={{ type: "spring", stiffness: 350, damping: 24 }}
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-body transition-colors"
                      >
                        <Plus size={14} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                              height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                              opacity: { duration: 0.25, delay: 0.05, ease: "easeOut" },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                              opacity: { duration: 0.15, ease: "easeIn" },
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <motion.p
                            initial={{ y: -6, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -6, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-3 max-w-[65ch] text-[14.5px] leading-relaxed text-body pr-4"
                          >
                            {item.a}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      <CtaBand title={f.ctaTitle} sub={isKm ? "ត្រូវការចម្លើយចំពោះសំណួរផ្សេងទៀត? ទាក់ទងមកយើងខ្ញុំ" : "Have a specific operational question? Reach out to our Phnom Penh team."} />
    </>
  );
}
