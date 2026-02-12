"use client";

import { educationData } from "@/data/transformerData";
import { motion } from "framer-motion";

export default function EducationTimeline() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 bg-base-dark border-t border-neutral-carbon/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-4xl tracking-widest text-white mb-16 text-center"
        >
          EDUCATION <span className="text-accent-metal">HISTORY</span>
        </motion.h2>

        <div className="relative border-l border-neutral-carbon ml-2 md:ml-0">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-6 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[29px] md:-left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent-metal border-4 border-base-dark shadow-[0_0_10px_rgba(183,28,28,0.5)]" />

              <div className="bg-neutral-carbon/20 border border-neutral-carbon/50 p-5 md:p-8 backdrop-blur-sm hover:border-accent-metal/50 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl text-white tracking-wide">
                      {item.institution}
                    </h3>
                    <p className="font-body text-accent-metal font-bold tracking-widest text-sm uppercase mt-1">
                      {item.degree} in {item.major}
                    </p>
                  </div>
                  <div className="font-heading text-white/60 text-sm tracking-widest whitespace-nowrap">
                    {item.period}
                  </div>
                </div>

                <div className="w-12 h-[2px] bg-accent-metal mb-4" />

                <p className="font-body text-white/50 text-sm md:text-base leading-relaxed max-w-2xl">
                  Currently pursuing a Bachelor of Technology in Computer Science, focusing on advanced software engineering principles and cinematic web experiences.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
