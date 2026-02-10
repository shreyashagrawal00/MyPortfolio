export const transformerConfig = {
  totalFrames: 120,
  imageFolderPath: "/images/transformer-sequence",
  scrollLength: "500vh",
};

export interface HUDCopyLine {
  scrollStart: number; // 0-1 range
  scrollEnd: number;   // 0-1 range
  text: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
}

// HUD copy lines triggered at specific scroll percentages
export const hudCopyLines: HUDCopyLine[] = [
  // Phase 1: Hero — Presence (0%-30%)
  {
    scrollStart: 0,
    scrollEnd: 0.15,
    text: "TRANSFORMATION SEQUENCE",
    position: "top-left",
  },
  {
    scrollStart: 0.05,
    scrollEnd: 0.25,
    text: "FRAME-BY-FRAME CINEMATIC DIRECTION",
    position: "bottom-right",
  },

  // Phase 2: Transformation — Peak (30%-75%)
  {
    scrollStart: 0.3,
    scrollEnd: 0.45,
    text: "SYSTEM: SHIFTING",
    position: "top-right",
  },
  {
    scrollStart: 0.35,
    scrollEnd: 0.5,
    text: "CORE ENGAGED",
    position: "bottom-left",
  },
  {
    scrollStart: 0.5,
    scrollEnd: 0.65,
    text: "STRUCTURAL RECONFIGURATION",
    position: "top-left",
  },
  {
    scrollStart: 0.55,
    scrollEnd: 0.7,
    text: "POWER LEVELS: OPTIMAL",
    position: "bottom-right",
  },

  // Phase 3: Arrival — Robot (75%-100%)
  {
    scrollStart: 0.75,
    scrollEnd: 0.9,
    text: "TRANSFORMATION COMPLETE",
    position: "center",
  },
  {
    scrollStart: 0.85,
    scrollEnd: 1,
    text: "CINEMATIC DIRECTION",
    position: "bottom-right",
  },
];

export const navbarConfig = {
  title: "TRANSFORMER",
  ctaText: "INQUIRE",
  ctaLink: "#contact",
};

export const specsData = [
  { label: "Total Frames", value: "120" },
  { label: "Scroll Length", value: "500vh" },
  { label: "Technology", value: "Next.js 14 + Canvas" },
  { label: "Animation", value: "Scroll-driven" },
];

export const featuresData = [
  {
    title: "Cinematic Precision",
    description: "Every frame meticulously crafted for a seamless transformation experience.",
  },
  {
    title: "Scroll-Driven Narrative",
    description: "User-controlled pacing through an aggressive, mechanical metamorphosis.",
  },
  {
    title: "High-DPI Rendering",
    description: "Canvas-based rendering optimized for Retina and 4K displays.",
  },
  {
    title: "Minimal HUD Design",
    description: "Non-invasive overlay that enhances without distracting from the sequence.",
  },
];
