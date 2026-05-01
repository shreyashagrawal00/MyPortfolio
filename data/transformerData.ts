export const transformerConfig = {
  totalFrames: 120,
  imageFolderPath: "/images/transformer-sequence",
  scrollLength: "500vh",
  name: "SHREYASH AGRAWAL",
};

export const professionalSummary = {
  title: "PROFESSIONAL SUMMARY",
  content: "Motivated and detail-oriented Software Engineering aspirant with a strong foundation in computer science fundamentals, data structures, and problem-solving. Experienced in building projects using modern programming languages and frameworks, with a keen interest in developing scalable, efficient, and user-centric software solutions. Adept at learning new technologies quickly, collaborating in team environments, and applying logical thinking to real-world problems. Seeking an opportunity to contribute as a Software Engineer while continuously enhancing technical and professional skills.",
};

export interface HUDCopyLine {
  scrollStart: number; // 0-1 range
  scrollEnd: number;   // 0-1 range
  text: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
}

// HUD copy lines triggered at specific scroll percentages
export const hudCopyLines: HUDCopyLine[] = [
  // Phase 2: Transformation — Peak (30%-75%)
  {
    scrollStart: 0.3,
    scrollEnd: 0.45,
    text: "SYSTEM: SHIFTING",
    position: "top-right",
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

export const educationData = [
  {
    institution: "KMPS Mathura",
    degree: "High School",
    period: "2021 - 2022",
    major: "General",
    logo: "/images/education/kmps.png",
  },
  {
    institution: "KMPS Mathura",
    degree: "Higher Secondary School",
    period: "2023 - 2024",
    major: "Science",
    logo: "/images/education/kmps.png",
  },
  {
    institution: "GLA University",
    degree: "BTech",
    period: "2024 - 2028",
    major: "Computer Science",
    logo: "/images/education/gla-university.png",
  },
];

export const skillsData = {
  title: "SKILLS & EXPERTISE",
  description: "A comprehensive collection of my technical and professional capabilities.",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Node-JS",
    "React-JS",
    "Express",
    "MongoDB",
    "SQL",
    "JAVA",
    "Python",
    "Git & GitHub",
    "Tailwind",
  ],
};

export const languagesData = {
  title: "LANGUAGES",
  description: "Languages I speak and their proficiency levels.",
  list: [
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Fluent" },
  ],
};

export const projectsData = [
  {
    title: "Smart Hostel Hub",
    description: "A comprehensive digital management ecosystem designed to streamline hostel life for both students and administration, featuring real-time communication and safety automation.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind"],
    link: "https://hosteltracker00.vercel.app/",
    source: "https://github.com/shreyashagrawal00/HackOverflow_2026",
    image: "/images/projects/smart-hostel-hub.png",
  },
  {
    title: "eSeva India: QueueSmart",
    description: "A modern web application designed to eliminate long waiting lines for government and healthcare services, allowing users to book appointments and track live queue positions.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "OTP"],
    link: "https://eseva-india00.onrender.com/",
    source: "https://github.com/shreyashagrawal00/WebXdesign_Project",
    image: "/images/projects/eseva-india.png",
  },
  {
    title: "Briefly: AI Information Hub",
    description: "A high-performance, AI-driven information processing hub designed to eliminate content overload by transforming YouTube videos, PDFs, and news into actionable summaries.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI", "JWT", "Google API"],
    link: "https://summarizer-agent.vercel.app/",
    source: "https://github.com/shreyashagrawal00/SummarizerAgent",
    image: "/images/projects/briefly.png",
  },
  {
    title: "Smart Attendance Portal",
    description: "A web-based system designed to simplify and automate the attendance process for students and teachers, featuring a digital platform for efficient recording, management, and analysis.",
    tech: ["Node.js", "Express.js", "MongoDB Atlas", "React.js", "JWT", "Tailwind CSS"],
    link: "https://mini-project-1liwntyq6-shreyashagrawal00s-projects.vercel.app",
    source: "https://github.com/shreyashagrawal00/Smart-Attendance-Portal",
    image: "/images/projects/smart-attendance-portal.png",
  },
];

export const contactData = {
  title: "CONNECT WITH ME",
  links: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/shreyash-agrawal-87636134a/", icon: "linkedin" },
    { name: "Github", url: "https://github.com/shreyashagrawal00", icon: "github" },
    { name: "Instagram", url: "https://www.instagram.com/shreyash_agrawal00/", icon: "instagram" },
    { name: "LeetCode", url: "https://leetcode.com/u/K4fMSgxC0S/", icon: "leetcode" },
  ],
};

export const getInTouchData = {
  title: "GET IN TOUCH",
  email: "shreyash.agrawal3004@gmail.com",
  phone: "7017373927",
  location: "Mathura, Uttar Pradesh, India",
  preferredMethod: "Both (Email & Phone)",
  responseStatus: "SYSTEM: ACTIVE",
  quickResponse: "I typically respond within 24 hours during business days. For urgent matters, please use the phone number provided.",
};
