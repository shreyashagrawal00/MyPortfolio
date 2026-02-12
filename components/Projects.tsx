"use client";

import { projectsData } from "@/data/transformerData";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 bg-base-dark relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-neutral-carbon/20 pb-8 gap-4"
        >
          <div>
            <h2 className="font-heading text-2xl md:text-4xl tracking-[0.3em] text-white mb-4">
              PROJECTS
            </h2>
            <p className="font-body text-base md:text-lg text-white/60 tracking-wider">
              Recent developments in scalable systems and interactive platforms.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="font-heading text-[10px] text-accent-metal tracking-[0.5em]">STATUS: LOADED</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group bg-neutral-carbon/5 border border-neutral-carbon/10 p-8 flex flex-col h-full overflow-hidden"
            >
              {/* Cinematic scanline decoration */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-metal/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-heading text-[10px] text-accent-metal/50 tracking-widest">PROJECT_0{index + 1}</span>
                  <div className="w-2 h-2 rounded-full bg-accent-metal animate-pulse" />
                </div>

                <h3 className="font-heading text-xl text-white tracking-widest mb-4 group-hover:text-accent-metal transition-colors">
                  {project.title}
                </h3>

                <p className="font-body text-white/60 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* @ts-ignore */}
                {project.image && (
                  <div className="relative w-full aspect-video mb-8 overflow-hidden border border-white/10 group/img">
                    <motion.img
                      /* @ts-ignore */
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-700 scale-100 group-hover/img:scale-110"
                    />
                    <div className="absolute inset-0 bg-accent-metal/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-8">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-heading px-2 py-1 bg-white/5 border border-white/10 text-white/40 tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 mt-auto">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="font-heading text-[10px] tracking-[0.3em] text-white hover:text-accent-metal transition-colors flex items-center gap-2 group/btn"
                  >
                    VIEW PROJECT
                    <span className="text-accent-metal group-hover/btn:translate-x-1 transition-transform">→</span>
                  </motion.a>

                  {/* @ts-ignore */}
                  {project.source && (
                    <motion.a
                      /* @ts-ignore */
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="font-heading text-[10px] tracking-[0.3em] text-white/40 hover:text-white transition-colors flex items-center gap-2 group/btn"
                    >
                      SOURCE
                      <span className="text-white/20 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform">→</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Box accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent-metal/20 group-hover:border-accent-metal transition-colors" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-accent-metal/20 group-hover:border-accent-metal transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
