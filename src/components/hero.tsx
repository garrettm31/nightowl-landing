"use client";

import { motion } from "framer-motion";
import { Scissors } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Social proof banner */}
      <div className="border-b border-night-800/60 bg-night-900/40">
        <div className="max-w-4xl mx-auto px-5 md:px-6 py-3 flex items-center justify-center gap-2 text-[13px] text-night-400">
          <Scissors className="h-3.5 w-3.5 text-mint-500 shrink-0" />
          <span>Trusted by barber shops, nail salons, and solo operators across the US</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 md:px-6 pt-20 md:pt-24 pb-28 md:pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-night-700 bg-night-800/60 px-4 py-1.5 text-[13px] text-night-300 mb-8 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
            AI-powered &middot; Set up in 5 minutes &middot; No contracts
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-[56px] leading-[1.08] font-bold tracking-tight text-white"
        >
          Keep Working.
          <br />
          We&apos;ll Answer the Phone.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-7 text-base md:text-[19px] leading-relaxed text-night-400 max-w-2xl mx-auto"
        >
          NightOwl picks up after-hours calls, books appointments in your chair
          calendar, and texts you a summary. Set up in five minutes. No contracts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button href="https://cal.com/garrett-martel-sbxrdo" >Book a Demo</Button>
          <Button href="#how-it-works" variant="secondary">
            See how it works
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-5 text-[13px] text-night-500"
        >
          14-day free trial &middot; No credit card required
        </motion.p>
      </div>
    </section>
  );
}
