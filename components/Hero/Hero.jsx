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
        className="dark:bg-grid-small-white/[0.1] bg-grid-small-black/[0.2] relative flex h-full w-full flex-col items-center justify-center gap-4 px-4"
      >
        <div className="dark:text-white text-3xl font-bold md:text-7xl">
          Hi , Im Rakshy
        </div>
        <div className="dark:text-neutral-200 max-w-4xl py-4 text-base font-extralight md:text-4xl">
          kittu gudde hakana kittu gudde hakana kittu gudde hakana kittu gudde
          hakana kittu gudde hakana kittu gudde hakana
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
