export const transformerConfig = {
  totalFrames: 120,
  imageFolderPath: "/images/transformer-sequence",
  scrollLength: "500vh",
  name: "SHREYASH AGRAWAL",
};

export const professionalSummary = {
  title: "PROFESSIONAL SUMMARY",
  content: "I'm Shreyash Agrawal, a B.Tech Information Technology student at GLA University with a strong foundation in full-stack development and a focused transition into LLM Engineering — building AI-powered applications using LangChain, RAG Pipelines, and Vector Databases. I've shipped production-ready projects across the full AI stack — from deepfake detection using CNN + LSTM to RAG-based code review platforms with FAISS, HuggingFace Embeddings, and Groq LLM — backed by real internship experience as a Full Stack Developer at Codec Technologies. My goal is to build intelligent systems that are not just technically sound but actually useful in the real world.",
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
  // Languages
  "C",
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",

  // Web Development
  "HTML",
  "CSS",
  "React-JS",
  "Node-JS",
  "Express",
  "Tailwind",
  "Bootstrap",
  "REST APIs",

  // Backend & Databases
  "FastAPI",
  "MongoDB",
  "MySQL",
  "Redis",
  "Firebase",
  "JWT",

  // LLM Engineering
  "LangChain",
  "RAG Pipelines",
  "FAISS",
  "ChromaDB",
  "HuggingFace Embeddings",
  "Prompt Engineering",
  "Groq API",
  "Mistral AI",
  "Pydantic",
  "Streamlit",

  // AI/ML & Deep Learning
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "TensorFlow",
  "Keras",
  "OpenCV",
  "Matplotlib",

  // Tools & DevOps
  "Git & GitHub",
  "Docker",
  "Docker Compose",
  "nginx",
  "AWS EC2",
  "Postman",
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
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind" ,"Axios"],
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
  {
    title: "ElectionEase Bot",
    description: "An AI-powered election assistance platform that helps users make informed decisions through features like a Gemini-based chatbot, candidate research tools, and real-time news updates.",
    tech: ["React (Vite)", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js", "MongoDB Atlas", "Gemini API"],
    link: "https://election-ease-bot.vercel.app/",
    source: "https://github.com/shreyashagrawal00/ElectionEase-Bot",
    image: "/images/projects/election-ease-bot.png",
  },
  {
    title: "CineMatch - Movie Recommendation System",
    description: "A content-based movie recommendation system that uses TF-IDF vectorization and cosine similarity on movie metadata to surface similar titles. Integrates TMDB API for real-time posters and details, with a FastAPI backend, Streamlit frontend, and deployed via Docker on AWS EC2.",
    tech: ["Python", "FastAPI", "Streamlit", "Scikit-learn", "TF-IDF", "Cosine Similarity", "TMDB API", "Docker", "AWS EC2"],
    link: "http://3.26.201.177:8501/",
    source: "https://github.com/shreyashagrawal00/movies_recommendation",
    image: "/images/projects/cinematch.png",
  },
    {
    title: "🛡️ FakeShield AI",
    description: "A full-stack deepfake detection platform that classifies images and videos as real or AI-generated with a confidence score. Uses a fine-tuned ResNet50 for image detection and a TimeDistributed CNN + LSTM architecture for temporal video analysis. FastAPI backend serves both models, with a React frontend proxied via nginx — fully containerized with Docker Compose.",
    tech: ["Python", "FastAPI", "TensorFlow", "Keras", "ResNet50", "LSTM", "OpenCV", "React (Vite)", "Tailwind CSS", "Docker", "Docker Compose", "Nginx"],
    link: "https://github.com/shreyashagrawal00/FakeShield",
    source: "https://github.com/shreyashagrawal00/FakeShield",
    image: "/images/projects/FakeShield.png",
  },
 {
    title: "🎬 AI Video Assistant",
    description: "A RAG-based meeting intelligence platform that transcribes, summarizes, and lets you chat with your meeting recordings. Supports YouTube URLs, local files, and direct uploads with dual-engine transcription — local Whisper for English and Sarvam AI for Hinglish. Uses ChromaDB + HuggingFace embeddings for transcript indexing and Mistral AI for structured extraction of summaries, action items, decisions, and open questions.",
    tech: ["Python", "FastAPI", "LangChain", "Mistral AI", "ChromaDB", "HuggingFace Embeddings", "Whisper", "Sarvam AI STT", "Streamlit", "FFmpeg"],
    link: "https://aivideoassistant00.streamlit.app/",
    source: "https://github.com/shreyashagrawal00/AI_Video_Assistant",
    image: "/images/projects/AI-video-agent.png",
  },
{
    title: "🔍 AI Code Reviewer",
    description: "An AI-powered code review tool that analyzes pasted snippets, uploaded files, or entire GitHub repositories. Uses LangChain + Groq for structured reviews covering bugs, fixes, and optimizations. For repo-level analysis, ingests files via GitHub API, runs per-file LLM analysis, builds a FAISS vector store from code chunks, and enables a RAG-powered Ask Repo Q&A interface.",
    tech: ["Python", "LangChain", "Groq API", "FAISS", "HuggingFace Embeddings", "Pydantic", "Streamlit", "GitHub REST API"],
    link: "https://aivideoassistant00.streamlit.app/",
    source: "https://github.com/shreyashagrawal00/AI-Code-Reviewer",
    image: "/images/projects/ai-code-reviewer.png",
  }


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
