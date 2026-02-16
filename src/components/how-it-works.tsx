"use client";

import { Phone, Settings, Rocket } from "lucide-react";
import { AnimatedSection } from "./ui/animated-section";
import { SectionHeader } from "./ui/section-header";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Connect your phone",
    description:
      "Get a new local number or forward your existing business line to NightOwl after hours.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Configure your agent",
    description:
      "Set your greeting, business hours, appointment duration, and emergency message.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Go live",
    description:
      "NightOwl answers calls, books appointments, and texts you summaries. You just show up.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-night-800/80">
      <div className="max-w-5xl mx-auto px-5 md:px-6 py-24 md:py-28">
        <AnimatedSection>
          <SectionHeader label="How it works" heading="Three steps. Five minutes." />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={0.1 + i * 0.15}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <step.icon className="h-5 w-5 text-owl-400" />
                  <span className="text-[13px] font-mono text-owl-400">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-[18px] font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-night-400">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
