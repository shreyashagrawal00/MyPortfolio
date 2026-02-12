"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  progress: number;
  onComplete: () => void;
}

const logs = [
  "INITIALIZING CORE SYSTEMS...",
  "SYNCING HYDRAULIC ACTUATORS...",
  "MAPPING STRUCTURAL TOPOLOGY...",
  "PRIMING ENERGON CHANNELS...",
  "CALIBRATING OPTICAL SENSORS...",
  "ESTABLISHING NEURAL LINK...",
  "TRANSFORMATION ENGINE: STANDBY",
  "CORE_SYNC: OPTIMAL",
  "SYSTEM_STATE: READY"
];

export default function Preloader({ progress, onComplete }: PreloaderProps) {
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const logInterval = setInterval(() => {
      setCurrentLogIndex((prev) => (prev < logs.length - 1 ? prev + 1 : prev));
    }, 400);

    return () => clearInterval(logInterval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 1000); // Allow exit animation to finish
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-base-dark flex flex-col items-center justify-center p-6 overflow-hidden"
        >
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="w-full max-w-md relative z-10">
            {/* Header HUD */}
            <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
              <div>
                <span className="block font-heading text-[10px] text-accent-metal tracking-widest uppercase">ID_NUMBER</span>
                <span className="block font-heading text-lg text-white tracking-[0.2em]">SHREYASH_00</span>
              </div>
              <div className="text-right">
                <span className="block font-heading text-[10px] text-white/20 tracking-widest uppercase">BOOT_SEQUENCE</span>
                <span className="block font-heading text-lg text-accent-metal animate-pulse tracking-widest uppercase">ACTIVE</span>
              </div>
            </div>

            {/* Progress Bar Container */}
            <div className="relative mb-12">
              <div className="flex justify-between mb-4">
                <span className="font-heading text-[10px] text-white/50 tracking-widest">LOADING ASSETS</span>
                <span className="font-heading text-lg text-white tabular-nums">{progress}%</span>
              </div>

              <div className="h-2 w-full bg-white/5 border border-white/10 overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-accent-metal relative shadow-[0_0_15px_rgba(183,28,28,0.5)]"
                >
                  {/* Scanning glint */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
                </motion.div>
              </div>
            </div>

            {/* Rolling Logs */}
            <div className="h-32 font-heading text-[10px] tracking-widest space-y-2 overflow-hidden">
              {logs.slice(0, currentLogIndex + 1).map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 0.6, x: 0 }}
                  className={`flex items-center gap-3 ${i === currentLogIndex ? 'text-accent-metal' : 'text-white/40'}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>{log}</span>
                </motion.div>
              ))}
            </div>

            {/* Bottom Corner Decoration */}
            <div className="absolute -bottom-12 -left-12 w-32 h-32 border-b-2 border-l-2 border-accent-metal/20" />
            <div className="absolute -top-12 -right-12 w-32 h-32 border-t-2 border-r-2 border-accent-metal/20" />
          </div>

          <style jsx global>{`
            @keyframes shimmer {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
