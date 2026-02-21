"use client";

import { PhoneMissed, Clock, Frown } from "lucide-react";
import { AnimatedSection } from "./ui/animated-section";
import { SectionHeader } from "./ui/section-header";

const painPoints = [
  {
    icon: PhoneMissed,
    title: "Missed calls, lost revenue",
    body: "62% of callers won't leave a voicemail. They'll book a slot at the shop down the street instead.",
  },
  {
    icon: Clock,
    title: "Voicemail phone tag",
    body: "You call back the next day. They don't answer. You try again. They've already got a cut somewhere else.",
  },
  {
    icon: Frown,
    title: "Bad first impressions",
    body: "A robotic voicemail greeting at 7 PM tells callers your business doesn't care about their time.",
  },
];

export function Problem() {
  return (
    <section className="bg-night-900 border-t border-night-800/80">
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-24 md:py-28">
        <AnimatedSection>
          <SectionHeader
            label="The problem"
            heading="Every missed call is money walking out the door"
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, i) => (
            <AnimatedSection key={point.title} delay={0.1 + i * 0.1}>
              <div className="rounded-2xl p-8 bg-night-800/50 border border-night-700/50 h-full">
                <point.icon className="h-8 w-8 text-owl-400 mb-5" />
                <h3 className="text-[18px] font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-night-400">
                  {point.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
