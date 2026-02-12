"use client";

import { professionalSummary } from "@/data/transformerData";
import { motion } from "framer-motion";

export default function ProfessionalSummary() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 bg-base-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-neutral-carbon/10 border border-neutral-carbon/20 p-6 md:p-12 backdrop-blur-xl overflow-hidden group"
        >
          {/* Animated decorative corner */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent-metal/30 transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:border-accent-metal" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-accent-metal/30 transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:border-accent-metal" />

          <h2 className="font-heading text-2xl md:text-3xl tracking-widest text-white mb-8 border-l-4 border-accent-metal pl-6">
            {professionalSummary.title}
          </h2>

          <div className="relative">
            <p className="font-body text-lg md:text-xl text-white/80 leading-relaxed md:leading-loose">
              {professionalSummary.content}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-neutral-carbon" />
              <div className="w-2 h-2 rounded-full bg-accent-metal animate-pulse" />
              <div className="h-[1px] w-12 bg-neutral-carbon" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
