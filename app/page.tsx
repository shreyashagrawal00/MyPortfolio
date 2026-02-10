"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import TransformerScrollCanvas from "@/components/TransformerScrollCanvas";
import TransformerExperience from "@/components/TransformerExperience";
import { transformerConfig } from "@/data/transformerData";
import EducationTimeline from "@/components/EducationTimeline";
import ProfessionalSummary from "@/components/ProfessionalSummary";
import NameOverlay from "@/components/NameOverlay";
import SkillsExpertise from "@/components/SkillsExpertise";
import Languages from "@/components/Languages";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";

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
          {/* Name Overlay (z-30) */}
          <NameOverlay name={transformerConfig.name} />

          {/* Canvas Layer (z-0) */}
          <TransformerScrollCanvas
            scrollYProgress={scrollYProgress}
            totalFrames={transformerConfig.totalFrames}
            imageFolderPath={transformerConfig.imageFolderPath}
          />
        </div>
      </section>

      <ProfessionalSummary />
      <EducationTimeline />
      <Projects />
      <SkillsExpertise />
      <Languages />
      <Connect />
    </main>
  );
}
