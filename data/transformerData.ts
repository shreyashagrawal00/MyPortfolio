export const transformerConfig = {
  totalFrames: 120,
  imageFolderPath: "/images/transformer-sequence",
  scrollLength: "500vh",
  name: "SHREYASH AGRAWAL",
};

export const professionalSummary = {
  title: "PROFESSIONAL SUMMARY",
  content: "I'm Shreyash Agrawal, a B.Tech Information Technology student at GLA University with a strong foundation in full-stack development and deep expertise in LLM Engineering — building AI-powered applications using LangChain, LangGraph, RAG Pipelines, Multi-Agent Systems, and Vector Databases. I've shipped production-ready projects across the full AI stack — from an autonomous 11-agent software engineering platform (CodeSmith AI) and deepfake detection using CNN + LSTM, to RAG-based code review systems with FAISS and HuggingFace Embeddings, and a satellite-based AQI prediction platform built for ISRO's BAH 2026 using Google Earth Engine, XGBoost, LightGBM, and SHAP — backed by real internship experience as a Full Stack Developer at Codec Technologies. My goal is to build intelligent systems that are not just technically sound but actually useful in the real world.",
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
  "LangGraph",
  "RAG Pipelines",
  "Multi-Agent Systems",
  "FAISS",
  "ChromaDB",
  "HuggingFace Embeddings",
  "Prompt Engineering",
  "Groq API",
  "Mistral AI",
  "Google Gemini",
  "Pydantic v2",
  "Streamlit",
  "Conversation Memory",
  "Streaming Responses",

  // AI/ML & Deep Learning
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "TensorFlow",
  "Keras",
  "OpenCV",
  "Matplotlib",
  "Seaborn",
  "XGBoost",
  "LightGBM",
  "CatBoost",
  "SHAP",

  // Deep Learning Concepts
  "ANN",
  "CNN",
  "RNN",
  "LSTM",
  "Transfer Learning",
  "ResNet50",
  "Sequence Modeling",
  "TF-IDF",
  "Cosine Similarity",

  // Tools & DevOps
  "Git & GitHub",
  "Docker",
  "Docker Compose",
  "nginx",
  "AWS EC2",
  "Postman",
  "Google Earth Engine",
  "WebSockets",
  "SQLAlchemy",

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
    title: "🎙️ AI-Based Mock Interview System",
    description: "A full-stack AI-powered mock interview platform where users practice technical and behavioral interviews with real-time AI scoring across Communication, Technical Depth, and Confidence. Features 4 interview modes (Standard, Timed Pressure, STAR Behavioral, Live Code Sandbox), custom resume and JD upload for tailored questions, Text-to-Speech question reading, voice answer dictation with live animated waveform, webcam preview, AI benchmark model answers, performance analytics dashboard with score trends, PDF scorecard export, question bookmarking, and dark/light theme — deployed on Vercel + Render.",
    tech: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "Google Gemini AI", "Mistral AI", "Web Speech API", "html2pdf.js", "React Router v6"],
    link: "https://mock-interview-system-swart.vercel.app/",
    source: "https://github.com/shreyashagrawal00/Mock-Interview-System",
    image: "/images/projects/AI-Based Mock Interview System.png",
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
    title: "🛰️ AQI-Quality-Prediction",
    description: "A research-grade satellite-based AQI estimation platform built for ISRO's BAH 2026 problem statement. Integrates Google Earth Engine (Sentinel-5P TROPOMI, MODIS AOD) and NASA FIRMS active fire API with CPCB ground station data to predict surface AQI across India — including unmonitored regions. Features an ensemble of XGBoost, LightGBM, CatBoost, and Random Forest models (R² > 0.85), SHAP explainability, Z-score spatio-temporal HCHO hotspot detection, 7-day autoregressive forecasting with bootstrap confidence intervals, and a 10-page interactive dashboard with PDF export.",
    tech: ["Python", "Streamlit", "Google Earth Engine", "Sentinel-5P TROPOMI", "MODIS AOD", "NASA FIRMS API", "XGBoost", "LightGBM", "CatBoost", "Scikit-learn", "SHAP", "Plotly", "Mapbox", "FPDF2", "Pandas", "NumPy"],
    link: "https://aqi-quality-prediction-00.streamlit.app/",
    source: "https://github.com/shreyashagrawal00/AQI-Quality-Prediction",
    image: "/images/projects/AQI-Quality-Prediction.png",
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
  },
  {
    title: "✈️ AI Travel Planning System",
    description: "A multi-agent AI travel planner built with LangGraph where four specialized agents — Flight, Hotel, Itinerary, and Final — work sequentially to process a plain-English trip request into a complete travel report. Fetches real flight data via AviationStack API, searches hotels via Tavily, and synthesizes a day-by-day itinerary using Groq LLM, with conversation state persisted across sessions in PostgreSQL via LangGraph's PostgresSaver checkpointer and live agent progress streamed to a Streamlit UI.",
    tech: ["Python", "LangGraph", "LangChain", "Groq LLM", "Streamlit", "PostgreSQL", "PostgresSaver", "AviationStack API", "Tavily API", "Tenacity", "psycopg3"],
    link: "https://ai-travel-planning-system00.streamlit.app/",
    source: "https://github.com/shreyashagrawal00/AI-Travel-Planning-System",
    image: "/images/projects/ai-travel-planning-system.png",
  },
   {
    title: "📝 AI Blog Writing Agent",
    description: "A production-ready multi-agent AI blog generation system built with LangGraph. Takes a user topic through input guardrails, a router that decides between research and closed-book mode, a Tavily-powered research agent, and a blog planner — then fans out parallel worker agents to write each section simultaneously using LangGraph's Send() primitive. Sections are merged in correct order via a reducer node, followed by image planning and output guardrails, with LLM fallback routing across Groq, Gemini, and Mistral. Generation history persisted in SQLite and deployed on Streamlit Cloud.",
    tech: ["Python", "LangGraph", "LangChain", "Groq", "Google Gemini", "Mistral AI", "Tavily Search API", "Pydantic", "Streamlit", "SQLite", "Send() Fanout", "operator.add Reducer"],
    link: "https://blog-writing-agent00.streamlit.app/",
    source: "https://github.com/shreyashagrawal00/Blog-Writing-Agent",
    image: "/images/projects/Blog-writing-Agent.png",
  },
  {
    title: "🛠️ CodeSmith AI",
   description: "An autonomous multi-agent software engineering platform powered by LangGraph where 11 specialized AI agents — Product Manager, Architect, Database Designer, Backend Developer, Frontend Developer, Reviewer, Security Auditor, QA Engineer, Bug Fixer, Tech Writer, and DevOps Engineer — collaborate through a shared state machine to generate production-ready full-stack applications from a single prompt. Features parallel backend + frontend execution, 2 human-in-the-loop approval gates, an iterative self-correction loop with real compiler feedback (npm build + py_compile), LLM fallback routing across Groq, Gemini, Mistral, Cerebras and NVIDIA, WebSocket live streaming, SQLAlchemy job persistence, IDE-style file explorer UI, and downloadable ZIP output.",
    tech: ["Python", "LangGraph", "LangChain", "FastAPI", "React", "Vite", "Tailwind CSS", "Pydantic v2", "WebSockets", "SQLAlchemy", "SQLite", "Groq", "Google Gemini", "Mistral AI", "Cerebras", "NVIDIA NIM", "Docker Compose"],
    link: "https://code-smith-ai00-kappa.vercel.app",
    source: "https://github.com/shreyashagrawal00/CodeSmith-AI",
    image: "/images/projects/CodeSmith-AI.png",
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
