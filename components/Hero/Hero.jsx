"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../aceternity/ui/aurora-background";

export default function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex h-full w-full flex-col items-center justify-center gap-4 px-4 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.1]"
      >
        <div className="text-3xl font-bold transition-all duration-1000 dark:text-white md:text-7xl md:hover:text-8xl">
          Hi, {"I'"}m Rakshith
        </div>
        <div className="max-w-4xl py-4 pt-10 text-base font-bold dark:text-neutral-200 md:text-4xl">
          <span className="animate-bounce text-[#c12d10]">/Website </span>
          <span className="animate-pulse">Coming Soon...</span>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
