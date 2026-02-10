"use client";

import { skillsData } from "@/data/transformerData";
import { motion } from "framer-motion";

export default function SkillsExpertise() {
  return (
    <section className="py-24 px-6 md:px-12 bg-base-dark relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-metal/50 to-transparent opacity-30" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl tracking-[0.3em] text-white mb-4 border-l-4 border-accent-metal pl-6">
            {skillsData.title}
          </h2>
          <p className="font-body text-lg text-white/60 tracking-wider">
            {skillsData.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, borderColor: "rgba(183, 28, 28, 0.5)" }}
              className="relative bg-neutral-carbon/10 border border-neutral-carbon/20 p-6 md:p-8 backdrop-blur-xl group cursor-default"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent-metal/30 group-hover:border-accent-metal transition-colors" />

              <div className="flex flex-col items-center gap-2">
                <span className="font-heading text-sm md:text-base text-white tracking-[0.2em] group-hover:text-accent-metal transition-colors">
                  {skill}
                </span>
                <div className="w-8 h-[1px] bg-neutral-carbon group-hover:w-16 group-hover:bg-accent-metal/50 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
