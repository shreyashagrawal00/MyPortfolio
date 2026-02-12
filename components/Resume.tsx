"use client";

import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-16 md:py-24 px-4 md:px-12 bg-base-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-2xl md:text-4xl tracking-[0.3em] text-white mb-4 border-l-4 border-accent-metal pl-6">
            RESUME <span className="text-accent-metal">SCHEMATICS</span>
          </h2>
          <p className="font-body text-base md:text-lg text-white/60 tracking-wider">
            Technical credentials and professional trajectory data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group aspect-[3/4] max-w-md mx-auto lg:mx-0 bg-neutral-carbon/10 border border-white/5 overflow-hidden backdrop-blur-sm"
          >
            <img
              src="/resume.png"
              alt="Resume Preview"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Scanning line decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-metal/10 to-transparent -translate-y-full group-hover:animate-[scan_3s_linear_infinite] pointer-events-none" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-base-dark/40 backdrop-blur-sm">
              <a
                href="/resume.png"
                target="_blank"
                className="bg-accent-metal text-white px-6 py-3 font-heading text-xs tracking-[0.2em] flex items-center gap-2 hover:bg-accent-metal/80 transition-colors"
              >
                <Eye className="w-4 h-4" /> VIEW FULL RESOLUTION
              </a>
            </div>
          </motion.div>

          {/* Download Stats / CTA */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-carbon/5 border border-white/5 p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent-metal/20 group-hover:border-accent-metal transition-colors" />

              <h3 className="font-heading text-xl text-white tracking-widest mb-4">SYSTEM EXPORT</h3>
              <p className="font-body text-white/50 mb-8 leading-relaxed">
                Download the complete professional dossier in high-resolution image format. Contains full technical stack, project history, and educational milestones.
              </p>

              <a
                href="/resume.png"
                download="Shreyash_Agrawal_Resume.png"
                className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 text-white hover:bg-accent-metal hover:border-accent-metal transition-all group/btn w-full justify-center md:w-auto"
              >
                <Download className="w-5 h-5 group-hover/btn:animate-bounce" />
                <span className="font-heading text-xs tracking-[0.3em]">DOWNLOAD RESUME</span>
              </a>
            </motion.div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-white/5 bg-white/2">
                <span className="block font-heading text-[10px] text-accent-metal/50 tracking-widest mb-1">FILE_TYPE</span>
                <span className="block font-body text-white/80">PNG IMAGE</span>
              </div>
              <div className="p-4 border border-white/5 bg-white/2">
                <span className="block font-heading text-[10px] text-accent-metal/50 tracking-widest mb-1">LAST_UPDATE</span>
                <span className="block font-body text-white/80">FEB 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
