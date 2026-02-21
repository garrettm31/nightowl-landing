import { AnimatedSection } from "./ui/animated-section";
import { SectionHeader } from "./ui/section-header";

const testimonials = [
  {
    initials: "DW",
    color: "bg-amber-600",
    name: "Darnell W.",
    business: "Cuts by Darnell",
    city: "Atlanta, GA",
    quote:
      "I was losing walk-in calls every night after 7 PM. Now clients book their slot at 11 PM and I wake up to a full chair. Wish I had this from day one.",
  },
  {
    initials: "RV",
    color: "bg-blue-600",
    name: "Ramon V.",
    business: "Fade & Fresh Barbershop",
    city: "Houston, TX",
    quote:
      "We've got four barbers and coordinating bookings was a mess. NightOwl handles the after-hours calls, fills the chairs, and texts us each a summary. It just works.",
  },
  {
    initials: "TK",
    color: "bg-teal-600",
    name: "Tyler K.",
    business: "The Sharp Gentleman",
    city: "Chicago, IL",
    quote:
      "A client called at 10:30 on a Friday night to book a Saturday cut. NightOwl grabbed it, confirmed the slot, and I never even woke up. That's the dream.",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-night-800/80">
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-24 md:py-28">
        <AnimatedSection>
          <SectionHeader
            label="Customer Stories"
            heading="Barbers that stopped missing bookings"
            centered
          />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="rounded-2xl border border-night-700/50 bg-night-800/30 p-7 flex flex-col h-full">
                <p className="text-[15px] leading-relaxed text-night-300 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className={`h-10 w-10 rounded-full ${t.color} flex items-center justify-center text-[13px] font-bold text-white shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-white">
                      {t.name}
                    </div>
                    <div className="text-[13px] text-night-500">
                      {t.business} &middot; {t.city}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
