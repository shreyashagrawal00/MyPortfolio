"use client";

import { useRef, useState } from "react";
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
import SystemSpecs from "@/components/SystemSpecs";
import Connect from "@/components/Connect";
import GetInTouch from "@/components/GetInTouch";
import Resume from "@/components/Resume";
import Terminal from "@/components/Terminal";
import Preloader from "@/components/Preloader";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className={`bg-base-dark transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Preloader progress={loadingProgress} onComplete={() => setIsLoaded(true)} />
      <Terminal />

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
            onProgress={setLoadingProgress}
          />

          {/* HUD Overlay */}
          <TransformerExperience scrollYProgress={scrollYProgress} />
        </div>
      </section>

      <ProfessionalSummary />
      <SystemSpecs />
      <EducationTimeline />
      <Projects />
      <SkillsExpertise />
      <Languages />
      <Resume />
      <Connect />
      <GetInTouch />
    </main>
  );
}
