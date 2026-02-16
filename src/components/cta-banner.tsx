"use client";

import { AnimatedSection } from "./ui/animated-section";
import { Button } from "./ui/button";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden border-t border-night-800/80">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[700px] rounded-full bg-owl-500/10 blur-[120px]" />
      </div>
      <div className="max-w-3xl mx-auto px-5 md:px-6 py-24 md:py-28 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-white">
            Stop losing customers to voicemail
          </h2>
          <p className="mt-5 text-night-400 text-[17px]">
            Every missed call is a missed appointment. NightOwl makes sure that
            never happens.
          </p>
          <div className="mt-10">
            <Button href="#pricing">Start your free trial</Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
