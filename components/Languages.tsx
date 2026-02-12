"use client";

import { languagesData } from "@/data/transformerData";
import { motion } from "framer-motion";

export default function Languages() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 bg-base-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <h2 className="font-heading text-2xl md:text-4xl tracking-[0.3em] text-white mb-4 border-l-4 border-accent-metal pl-6">
            {languagesData.title}
          </h2>
          <p className="font-body text-lg text-white/60 tracking-wider">
            {languagesData.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {languagesData.list.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-neutral-carbon/5 border border-neutral-carbon/10 p-8 backdrop-blur-sm group overflow-hidden"
            >
              {/* Background accent animation */}
              <div className="absolute inset-0 bg-accent-metal/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

              <div className="relative flex justify-between items-center">
                <div>
                  <h3 className="font-heading text-xl text-white tracking-widest mb-1 group-hover:text-accent-metal transition-colors">
                    {lang.name}
                  </h3>
                  <div className="h-[2px] w-12 bg-accent-metal/30 group-hover:w-full transition-all duration-700" />
                </div>

                <div className="text-right">
                  <span className="font-body text-sm text-white/40 uppercase tracking-[0.3em] block mb-1">PROFICIENCY</span>
                  <span className="font-heading text-lg text-accent-metal tracking-widest uppercase">
                    {lang.level}
                  </span>
                </div>
              </div>

              {/* Decorative scanline */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 group-hover:bg-accent-metal/30 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
