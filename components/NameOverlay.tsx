"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function NameOverlay({ name }: { name: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Appear and then fade out as user scrolls
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.6], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -100]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute top-[20%] left-40 z-30 pointer-events-none"
    >
      <div className="flex flex-col items-start text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading text-lg md:text-2xl text-white tracking-[0.2em] drop-shadow-2xl"
        >
          {name.split(" ")[0]}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-heading text-lg md:text-2xl text-accent-metal self-start tracking-[0.2em] -mt-1 drop-shadow-2xl"
        >
          {name.split(" ")[1]}
        </motion.div>

        {/* Animated line decoration */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="h-1 bg-white/10 mt-2 origin-left w-full"
        />
        <div className="flex flex-col items-start mt-2">
          <span className="font-heading text-[10px] text-white/30 tracking-[0.5em]">SOFTWARE ENGINEER</span>
          <span className="font-body text-xl md:text-2xl text-white font-bold italic tracking-[0.05em] whitespace-nowrap">2nd Year GLA University Student</span>
          <span className="font-heading text-[10px] text-accent-metal tracking-[0.5em] mt-1 border border-accent-metal/50 px-2 py-0.5">SYSTEM: ACTIVE</span>
        </div>
      </div>
    </motion.div>
  );
}
