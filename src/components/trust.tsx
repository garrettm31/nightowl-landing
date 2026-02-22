"use client";

import { Eye, Lock, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "./ui/animated-section";

const items = [
  {
    icon: Eye,
    heading: "You see every call",
    body: "Get a text summary after each interaction — caller name, what was said, what was booked. Nothing happens without you knowing.",
  },
  {
    icon: ShieldCheck,
    heading: "Can't book what isn't there",
    body: "NightOwl checks your live calendar in real time. It only offers slots that are actually open. Double-booking is impossible.",
  },
  {
    icon: Lock,
    heading: "No risk, no lock-in",
    body: "14-day free trial, no credit card required. Cancel anytime. Your phone number and calendar data are always yours.",
  },
];

export function Trust() {
  return (
    <section className="border-t border-night-800/80">
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-16 md:py-20">
        <AnimatedSection>
          <p className="text-center text-[13px] font-medium tracking-widest uppercase text-owl-400 mb-10">
            Built for owners who want to stay in control
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <AnimatedSection key={item.heading} delay={i * 0.1}>
              <div className="flex gap-4">
                <item.icon className="h-5 w-5 text-mint-500 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-[15px] font-semibold text-white">
                    {item.heading}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-night-400">
                    {item.body}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
