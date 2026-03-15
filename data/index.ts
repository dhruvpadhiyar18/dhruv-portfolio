
import {
  Github,
  Home,
  Linkedin,
  Notebook,
  User,
} from "lucide-react";
import {
  EducationProps,
  MobileAppProps,
  ProjectProps,
  SkillProps,
  SocialProps,
} from "../types";

export const socialLinks: SocialProps[] = [
  {
    label: "Github",
    link: "https://github.com/dhruvpadhiyar18",
    icon: Github,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/dhruvpadhiyar18",
    icon: Linkedin,
  },
];

export const navLinks = [
  {
    label: "Home",
    link: "#home",
    icon: Home,
  },
  {
    label: "About",
    link: "#about",
    icon: User,
  },
  {
    label: "Projects",
    link: "#projects",
    icon: Notebook,
  },
];

export const heroData = {
  name: "Dhruv Padhiyar",
  title: "AI Developer • Automation Engineer • Computer Vision Enthusiast",
  description:
    "I build intelligent systems, AI-powered tools, and automation solutions that solve real-world problems.",
  cta: [
    {
      label: "View Projects",
      link: "#projects",
      external: false,
      download: false,
    },
    {
      label: "Github",
      link: "https://github.com/dhruvpadhiyar18",
      external: true,
      download: false,
    },
    {
      label: "Download Resume",
      link: "/dhruv-padhiyar-resume.pdf",
      external: false,
      download: true,
    },
    {
      label: "Contact",
      link: "#contact",
      external: false,
      download: false,
    },
  ],
};

export const aboutData = {
  description:
    "I am a Computer Science student specializing in Data Science with a strong interest in artificial intelligence, automation, and scalable software systems. I have hands-on experience building AI-assisted tools, computer vision applications, and workflow automation systems using Python, OpenCV, Flask, and modern frameworks. During my internship at Knowledge Square Services LLP, I worked on AI-powered automation solutions and mentored interns in Python and prompt engineering.",
  image: "/dhruv-profile.jpeg",
};

export const skillsData: SkillProps[] = [
  {
    label: "Python",
    category: "Programming",
  },
  {
    label: "C",
    category: "Programming",
  },
  {
    label: "C++",
    category: "Programming",
  },
  {
    label: "JavaScript",
    category: "Programming",
  },
  {
    label: "OpenCV",
    category: "AI & Computer Vision",
  },
  {
    label: "Face Recognition",
    category: "AI & Computer Vision",
  },
  {
    label: "Generative AI",
    category: "AI & Computer Vision",
  },
  {
    label: "LLM Applications",
    category: "AI & Computer Vision",
  },
  {
    label: "Flask",
    category: "Backend",
  },
  {
    label: "REST APIs",
    category: "Backend",
  },
  {
    label: "JSON Processing",
    category: "Backend",
  },
  {
    label: "n8n Workflow Automation",
    category: "Automation",
  },
  {
    label: "API Integration",
    category: "Automation",
  },
  {
    label: "Git",
    category: "Tools",
  },
  {
    label: "GitHub",
    category: "Tools",
  },
  {
    label: "Vercel",
    category: "Tools",
  },
  {
    label: "Netlify",
    category: "Tools",
  },
];

export const projectsData: ProjectProps[] = [
  {
    title: "Face Recognition Attendance System",
    description:
      "AI-based system for automated attendance tracking using computer vision.",
    tech: ["Python", "OpenCV", "Flask"],
    features: [
      "Real-time face recognition",
      "Teacher/student portal",
      "Automated attendance tracking",
    ],
    github: "https://github.com/dhruvpadhiyar18/face-recognition-attendance-system",
    live: "",
    image: "/project-placeholder.svg",
  },
  {
    title: "Jarvis AI Assistant",
    description:
      "Jarvis AI Assistant is a modular Python-based command-line assistant that supports text and voice commands to automate tasks, fetch web info (weather/news/search), and generate AI responses using OpenAI.",
    tech: [
      "Python",
      "OpenAI API",
      "python-dotenv",
      "SpeechRecognition",
      "pyttsx3",
      "PyAudio",
      "requests",
      "wikipedia",
    ],
    features: [
      "Supports both text and voice commands",
      "Automates web tasks like weather, news, and search",
      "Generates AI responses using OpenAI",
    ],
    github: "https://github.com/dhruvpadhiyar18/Jarvis-AI-Assistant",
    live: "",
    image: "/project-placeholder.svg",
  },
  {
    title: "AI Academic Paper Review & Feedback Tool",
    description:
      "This project is a web-based Academic Paper Review Tool that helps evaluate paper sections (Title, Abstract, Introduction, Methodology, Results, Conclusion, References) and gives structured feedback for better research quality.",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Lucide React"],
    features: [
      "Structured review output: Strengths",
      "Structured review output: Areas to Improve",
      "Structured review output: Actionable Suggestions",
      "AI prompt template for external AI review",
      "Export feedback as a text file",
    ],
    github: "https://github.com/dhruvpadhiyar18/ai-academic-paper-review-tool",
    live: "",
    image: "/project-placeholder.svg",
  },
];

export const mobileAppsData: MobileAppProps[] = [
  {
    name: "Consistancy",
    description:
      "Consistancy is an education-focused Android app published on the Indus App Store, designed to help users stay consistent with daily goals.",
    tech: ["Android", "Java", "API"],
    highlights: [
      "Published on the Indus App Store",
      "Focused on consistency-building for learners",
    ],
    github: "https://github.com/dhruvpadhiyar18/Consistancy-App",
    download:
      "https://www.indusappstore.com/apps/education/consistancy/com.consistancy.app/?page=details&id=com.consistancy.app",
    image: "/project-placeholder.svg",
  },
  {
    name: "StockEase",
    description:
      "StockEase is a professional offline-first inventory management Android app built with Kotlin, Room Database, and MVVM. It digitizes local grocery store operations with stock tracking, sales reporting, and low-stock alerts.",
    tech: [
      "Kotlin",
      "MVVM",
      "Room",
      "Kotlin Coroutines",
      "Material Design",
      "ViewBinding",
      "GSON",
      "LiveData",
      "ViewModel",
      "App Startup",
    ],
    highlights: [
      "Inventory tracking with low-stock alerts",
      "Sales management with automatic stock updates",
      "Daily sales summaries and stock movement reporting",
      "Custom 30-day trial with soft lock and developer unlock flow",
      "Secure JSON backup and restore with trial identity stamping",
    ],
    github: "https://github.com/dhruvpadhiyar18/StockEase",
    download: "",
    image: "/project-placeholder.svg",
  },
  {
    name: "SaveMore",
    description:
      "SaveMore is a privacy-first, offline-only money discipline tool for Android, built with modern Android development best practices. It helps users track income and expenses, set savings goals, and get actionable spending insights without connecting to the internet.",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "MVVM",
      "Room Database",
      "DataStore",
      "Coroutines",
      "Flow",
      "Gradle Kotlin DSL",
      "Version Catalog",
    ],
    highlights: [
      "100% offline and private with no internet permission",
      "Net balance tracking with clear income vs spending view",
      "Fast transaction logging with custom categories and notes",
      "Goal-oriented savings tracking with automatic progress updates",
      "Balance reconciliation to align in-app and real-world cash",
      "Safe atomic transaction edits to prevent data corruption",
      "Clean architecture with separated UI, ViewModel, Repository, and Data layers",
    ],
    github: "https://github.com/dhruvpadhiyar18/SaveMore-Android-App",
    download: "",
    image: "/project-placeholder.svg",
  },
];

export const experienceData = [
  {
    title: "Prompt Engineering & AI Automation Intern",
    company: "Knowledge Square Services LLP",
    date: "April 2025 – August 2025",
    responsibilities: [
      "Built AI automation tools",
      "Created workflow automation using n8n",
      "Mentored interns in Python",
      "Contributed to startup technical planning",
    ],
  },
];

export const educationData: EducationProps[] = [
  {
    degree: "B.Tech Computer Science (Data Science)",
    institution: "ITM Vocational University",
    date: "Expected 2028",
  },
  {
    degree: "Diploma in Computer Science & Engineering",
    institution: "ITM Vocational University",
    date: "Completed 2025",
  },
];

export const contactData = {
  email: "dhruvgtech@gmail.com",
  social: [
    {
      label: "Github",
      link: "https://github.com/dhruvpadhiyar18",
      icon: Github,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/dhruvpadhiyar18",
      icon: Linkedin,
    },
  ],
};
