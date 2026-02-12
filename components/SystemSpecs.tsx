"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { specsData, featuresData } from "@/data/transformerData";
import { Cpu, Zap, Maximize, Activity } from "lucide-react";

const iconMap = [Cpu, Activity, Maximize, Zap];

export default function SystemSpecs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-12 md:py-16 px-4 md:px-12 bg-base-dark relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left Column: Technical Grid */}
          <div className="space-y-8">
            <div className="border-l-2 border-accent-metal pl-4">
              <h2 className="font-heading text-lg md:text-xl tracking-[0.3em] text-white">SYSTEM_SPECS</h2>
              <p className="font-body text-white/40 mt-1 tracking-widest uppercase text-[9px]">Runtime environment assessment</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {specsData.map((spec, index) => (
                <div key={spec.label} className="bg-neutral-carbon/10 border border-white/5 p-3 group hover:border-accent-metal/30 transition-all">
                  <span className="block font-heading text-[8px] text-accent-metal/50 tracking-widest mb-1">0{index + 1}_METRIC</span>
                  <span className="block font-heading text-[10px] text-white/40 tracking-widest mb-0.5">{spec.label.toUpperCase()}</span>
                  <span className="block font-heading text-sm text-white tracking-widest">{spec.value.toUpperCase()}</span>
                </div>
              ))}
            </div>

            {/* Cinematic Scanline decoration */}
            <div className="relative h-32 bg-neutral-carbon/5 border border-white/5 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-metal/5 to-transparent animate-pulse" />
              <div className="flex flex-col items-center gap-4 relative z-10">
                <div className="w-16 h-16 rounded-full border border-accent-metal flex items-center justify-center animate-spin-slow">
                  <Cpu className="w-8 h-8 text-accent-metal" />
                </div>
                <span className="font-heading text-[10px] text-white/20 tracking-[1em]">CORE_PROCESS_SYNCED</span>
              </div>
              {/* Tiny random dots - Only render on client to avoid hydration mismatch */}
              {mounted && [...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-white/20 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `pulse ${1 + Math.random() * 2}s infinite`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Feature Modules */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {featuresData.map((feature, index) => {
                const Icon = iconMap[index % iconMap.length];
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-neutral-carbon/5 border border-white/5 p-4 flex gap-4 group hover:bg-neutral-carbon/10 transition-all"
                  >
                    <div className="shrink-0 w-10 h-10 bg-accent-metal/10 border border-accent-metal/20 flex items-center justify-center p-2 group-hover:bg-accent-metal/20 transition-all">
                      <Icon className="w-full h-full text-accent-metal" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xs text-white tracking-[0.2em] mb-1 group-hover:text-accent-metal transition-all">{feature.title.toUpperCase()}</h3>
                      <p className="font-body text-xs text-white/50 leading-relaxed tracking-wide">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}
