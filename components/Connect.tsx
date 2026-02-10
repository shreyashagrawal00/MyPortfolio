"use client";

import { contactData } from "@/data/transformerData";
import { motion } from "framer-motion";
import { Linkedin, Github, Instagram } from "lucide-react";

const IconMap: { [key: string]: any } = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
};

export default function Connect() {
  return (
    <section className="py-24 px-6 md:px-12 bg-base-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-metal/30 to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl tracking-[0.5em] text-white mb-6">
            {contactData.title}
          </h2>
          <div className="h-[2px] w-24 bg-accent-metal mx-auto mb-8" />
          <p className="font-body text-lg text-white/40 tracking-widest uppercase">
            Let's build the future together.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {contactData.links.map((link, index) => {
            const Icon = IconMap[link.icon];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group flex flex-col items-center gap-4"
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 border border-white/10 flex items-center justify-center group-hover:border-accent-metal transition-all duration-300 backdrop-blur-sm">
                  {/* Corner accents */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-accent-metal opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-accent-metal opacity-0 group-hover:opacity-100 transition-opacity" />

                  {Icon && <Icon className="w-8 h-8 text-white/40 group-hover:text-white transition-colors" />}
                </div>
                <span className="font-heading text-[10px] md:text-sm tracking-[0.4em] text-white/20 group-hover:text-accent-metal transition-colors uppercase">
                  {link.name}
                </span>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
