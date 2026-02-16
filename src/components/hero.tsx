"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-owl-500/20 blur-[120px]" />
        <div className="absolute top-[100px] left-[20%] h-[300px] w-[400px] rounded-full bg-owl-700/15 blur-[100px]" />
        <div className="absolute top-[50px] right-[15%] h-[250px] w-[350px] rounded-full bg-mint-500/8 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-5 md:px-6 pt-20 md:pt-24 pb-28 md:pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-night-700 bg-night-800/60 px-4 py-1.5 text-[13px] text-night-300 mb-8 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-mint-500 animate-pulse" />
            Now answering calls for 500+ businesses
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-[56px] leading-[1.08] font-bold tracking-tight bg-gradient-to-b from-white to-night-300 bg-clip-text text-transparent"
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
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#pricing">Start free trial</Button>
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
