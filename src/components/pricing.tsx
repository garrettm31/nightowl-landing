"use client";

import { Check } from "lucide-react";
import { PRICING_TIERS } from "@/lib/pricing-data";
import { AnimatedSection } from "./ui/animated-section";
import { SectionHeader } from "./ui/section-header";

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-night-800/80">
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-24 md:py-28">
        <AnimatedSection>
          <SectionHeader
            label="Pricing"
            heading="Simple, transparent pricing"
            subtext="No contracts. No setup fees. Cancel anytime."
            centered
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING_TIERS.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={0.1 + i * 0.1}>
              <div
                className={`rounded-2xl p-8 h-full flex flex-col transition-all ${
                  tier.highlighted
                    ? "bg-night-800 border border-white/20"
                    : "bg-night-800/50 border border-night-700/50 hover:border-night-600"
                }`}
              >
                {tier.highlighted && (
                  <div className="text-[12px] font-medium text-night-300 uppercase tracking-wider mb-4">
                    Most popular
                  </div>
                )}
                <h3 className="text-[18px] font-semibold text-white">{tier.name}</h3>
                <div className="mt-3 flex items-baseline">
                  <span className="text-[48px] font-bold tracking-tight text-white">
                    ${tier.price}
                  </span>
                  <span className="ml-2 text-[15px] text-night-400">/month</span>
                </div>
                <p className="mt-2 text-[14px] text-night-400">{tier.description}</p>

                <a
                  href={`/api/checkout?tier=${tier.name.toLowerCase()}`}
                  className={`mt-8 block w-full rounded-full py-3 text-center text-[14px] font-medium transition-all ${
                    tier.highlighted
                      ? "bg-owl-500 text-white hover:bg-owl-400"
                      : "bg-night-700 text-night-100 hover:bg-night-600"
                  }`}
                >
                  {tier.cta}
                </a>

                <div className="mt-8 pt-8 border-t border-night-700/50 flex-1">
                  <ul className="space-y-3.5">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-[14px] text-night-300"
                      >
                        <Check className="h-4 w-4 mt-0.5 shrink-0 text-owl-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 text-[12px] text-night-500">
                  Then ${tier.overageRate.toFixed(2)}/call after {tier.callsIncluded}{" "}
                  calls
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
