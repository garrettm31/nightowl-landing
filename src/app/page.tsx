import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Metrics } from "@/components/metrics";
import { Problem } from "@/components/problem";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { CTABanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="text-white">
      <Nav />
      <Hero />
      <Metrics />
      <Problem />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />

      {/* Sticky mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-night-950/95 backdrop-blur-md border-t border-night-700/60 px-5 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <a
          href="#pricing"
          className="flex items-center justify-center gap-2 w-full bg-owl-500 hover:bg-owl-400 text-white rounded-xl py-3.5 text-[15px] font-semibold transition-all"
        >
          <Phone className="h-4 w-4 shrink-0" />
          Start Free Trial
        </a>
      </div>
    </div>
  );
}
