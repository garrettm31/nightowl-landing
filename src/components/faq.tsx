"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { AnimatedSection } from "./ui/animated-section";
import { SectionHeader } from "./ui/section-header";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-night-900 border-t border-night-800/80">
      <div className="max-w-3xl mx-auto px-5 md:px-6 py-24 md:py-28">
        <AnimatedSection>
          <SectionHeader
            label="FAQ"
            heading="Common questions"
            centered
          />
        </AnimatedSection>

        <div className="mt-14 space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <AnimatedSection key={i} delay={0.05 + i * 0.05}>
              <div className="rounded-xl border border-night-700/50 bg-night-800/30 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-[15px] font-medium text-white pr-4">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-night-400 shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-[15px] leading-relaxed text-night-400">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
