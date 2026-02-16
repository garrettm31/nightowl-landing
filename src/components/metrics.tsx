"use client";

import { AnimatedSection } from "./ui/animated-section";

const metrics = [
  { value: "50,000+", label: "Calls answered" },
  { value: "<1s", label: "Average answer time" },
  { value: "92%", label: "Calls resolved without voicemail" },
];

export function Metrics() {
  return (
    <section className="border-t border-b border-night-800/80">
      <div className="max-w-5xl mx-auto px-5 md:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((m, i) => (
          <AnimatedSection key={m.label} delay={i * 0.1} className="text-center">
            <div className="text-3xl md:text-[36px] font-bold tracking-tight bg-gradient-to-r from-white to-night-300 bg-clip-text text-transparent">
              {m.value}
            </div>
            <div className="mt-1 text-[14px] text-night-400">{m.label}</div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
