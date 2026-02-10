"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import TransformerScrollCanvas from "@/components/TransformerScrollCanvas";
import TransformerExperience from "@/components/TransformerExperience";
import { transformerConfig, specsData, featuresData } from "@/data/transformerData";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-base-dark">
      {/* Scroll Sequence Container (500vh) */}
      <section
        ref={containerRef}
        className="h-[500vh] relative"
        style={{ height: transformerConfig.scrollLength }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Canvas Layer (z-0) */}
          <TransformerScrollCanvas
            scrollYProgress={scrollYProgress}
            totalFrames={transformerConfig.totalFrames}
            imageFolderPath={transformerConfig.imageFolderPath}
          />
        </div>
      </section>

      {/* Post-Sequence Content */}
      <div className="relative z-20 bg-base-dark">
        {/* Specs Grid */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-wider text-white mb-12 text-center">
            TECHNICAL SPECS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {specsData.map((spec, index) => (
              <div
                key={index}
                className="bg-neutral-carbon/50 border border-neutral-carbon p-6 text-center"
              >
                <p className="font-heading text-sm text-accent-metal mb-2 tracking-widest">
                  {spec.label}
                </p>
                <p className="font-body text-2xl text-white">{spec.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-wider text-white mb-12 text-center">
            FEATURES
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="bg-neutral-carbon/30 border border-neutral-carbon p-8"
              >
                <h3 className="font-heading text-xl md:text-2xl text-accent-metal mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="font-body text-base md:text-lg text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-12 px-6 md:px-12 border-t border-neutral-carbon">
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-heading text-sm md:text-base text-white/60 tracking-widest">
              CINEMATIC TRANSFORMATION © 2026
            </p>
            <p className="font-body text-sm text-white/40 mt-2">
              Scroll-driven storytelling at its finest
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
