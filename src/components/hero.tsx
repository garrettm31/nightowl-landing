"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
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
          Your phone line,
          <br />
          answered by AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-7 text-base md:text-[19px] leading-relaxed text-night-400 max-w-2xl mx-auto"
        >
          NightOwl picks up after-hours calls, books appointments on your
          calendar, and sends you a text summary. Set up in five minutes.
          No contracts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <a
            href="tel:+18883115214"
            className="inline-flex items-center gap-3 bg-owl-500 hover:bg-owl-400 text-white rounded-2xl px-9 py-4 text-[18px] font-semibold transition-all hover:shadow-xl hover:shadow-owl-500/20"
          >
            <Phone className="h-5 w-5 shrink-0" />
            <span>Call a Demo Line</span>
            <span className="opacity-75 font-normal text-[15px]">(888) 311-5214</span>
          </a>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button href="#pricing">Start free trial</Button>
            <Button href="#how-it-works" variant="secondary">
              See how it works
            </Button>
          </div>
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
