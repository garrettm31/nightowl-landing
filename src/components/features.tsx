"use client";

import { Zap, Calendar, MessageSquare, Mic, Shield, Timer } from "lucide-react";
import { AnimatedSection } from "./ui/animated-section";
import { SectionHeader } from "./ui/section-header";

const features = [
  {
    icon: Zap,
    title: "Instant call answering",
    description:
      "Picks up in under a second. No hold music, no phone tree, no voicemail. Callers talk to a natural, professional voice that knows your business.",
  },
  {
    icon: Calendar,
    title: "Appointment booking",
    description:
      "Checks your real Google Calendar, offers available slots, and books confirmed appointments — all in a single phone conversation.",
  },
  {
    icon: MessageSquare,
    title: "Message capture",
    description:
      "When booking isn't right, NightOwl captures caller name, number, reason, and preferred callback time. Sends you a structured SMS instantly.",
  },
  {
    icon: Mic,
    title: "Natural conversation",
    description:
      "Powered by the latest voice AI. Handles interruptions, understands accents, stays concise. Callers often don't realize it's automated.",
  },
  {
    icon: Shield,
    title: "Emergency handling",
    description:
      "Detects urgent situations and responds with your configured emergency message. Never gives medical, legal, or financial advice.",
  },
  {
    icon: Timer,
    title: "Five-minute setup",
    description:
      "Connect a phone number, link your calendar, set your greeting. That's the entire onboarding. Taking calls in minutes.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-night-900 border-t border-night-800/80">
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-24 md:py-28">
        <AnimatedSection>
          <SectionHeader
            label="Features"
            heading="Everything your front desk does, available 24/7"
          />
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-12">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={0.05 + i * 0.08}>
              <div className="flex gap-4">
                <f.icon className="h-6 w-6 text-owl-400 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-[18px] font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-night-400">
                    {f.description}
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
