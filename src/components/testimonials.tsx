import { AnimatedSection } from "./ui/animated-section";
import { SectionHeader } from "./ui/section-header";

const testimonials = [
  {
    initials: "JL",
    color: "bg-blue-600",
    name: "Jamie L.",
    business: "Lakeside Dental",
    city: "Denver, CO",
    quote:
      "We were losing almost a third of our after-hours calls to voicemail. NightOwl fixed that in one afternoon. My front desk is less stressed and we haven't missed a booking since.",
  },
  {
    initials: "MT",
    color: "bg-amber-600",
    name: "Marcus T.",
    business: "West End Barbershop",
    city: "Austin, TX",
    quote:
      "Clients book at midnight now. I wake up to a full calendar — no missed calls, no callbacks. Honestly I just wish I had set this up two years ago.",
  },
  {
    initials: "SR",
    color: "bg-rose-600",
    name: "Sandra R.",
    business: "Paws & Claws Vet Clinic",
    city: "Seattle, WA",
    quote:
      "Pet owners call in a panic at 10 PM and NightOwl handles it calmly. It books the appointment and texts me a summary. Exactly what a busy clinic needs.",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-night-800/80">
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-24 md:py-28">
        <AnimatedSection>
          <SectionHeader
            label="Customer Stories"
            heading="Businesses that stopped missing calls"
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
