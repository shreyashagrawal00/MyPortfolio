"use client";

import { MotionValue, motion, useTransform } from "framer-motion";
import { hudCopyLines } from "@/data/transformerData";

interface TransformerExperienceProps {
  scrollYProgress: MotionValue<number>;
}

export default function TransformerExperience({
  scrollYProgress,
}: TransformerExperienceProps) {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* HUD Overlay */}
      {hudCopyLines.map((line, index) => {
        const opacity = useTransform(
          scrollYProgress,
          [line.scrollStart, line.scrollStart + 0.05, line.scrollEnd - 0.05, line.scrollEnd],
          [0, 1, 1, 0]
        );

        const y = useTransform(
          scrollYProgress,
          [line.scrollStart, line.scrollEnd],
          [20, 0]
        );

        // Position mapping
        const positionClasses = {
          "top-left": "top-8 left-8 md:top-12 md:left-12",
          "top-right": "top-8 right-8 md:top-12 md:right-12",
          "bottom-left": "bottom-8 left-8 md:bottom-12 md:left-12",
          "bottom-right": "bottom-8 right-8 md:bottom-12 md:right-12",
          center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        };

        const position = line.position || "top-left";

        return (
          <motion.div
            key={index}
            style={{ opacity, y }}
            className={`absolute ${positionClasses[position]}`}
          >
            <p
              className="font-heading text-sm md:text-base lg:text-lg tracking-widest uppercase"
              style={{
                textShadow: "0 0 10px rgba(183, 28, 28, 0.5)",
                color: line.position === "center" ? "#B71C1C" : "#ffffff",
                fontWeight: line.position === "center" ? 700 : 400,
              }}
            >
              {line.text}
            </p>
          </motion.div>
        );
      })}

      {/* Screen reader accessible summary */}
      <div className="sr-only">
        <h1>Cinematic Transformer Sequence</h1>
        <p>
          A scroll-driven animation showcasing a mechanical truck transforming
          into a humanoid robot across 120 frames. The transformation is
          controlled by your scroll position.
        </p>
      </div>
    </div>
  );
}
