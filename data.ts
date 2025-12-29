
import { Experience, Project, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Syed Mehrab",
  role: "AI-Focused Software Engineer",
  location: "Karachi, Pakistan",
  email: "syedmehrab2288@gmail.com",
  phone: "+92 342 288 3720",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  summary: "AI-focused Software Engineer with expertise in building production-ready AI systems using Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and backend microservices architecture. Proven track record in developing scalable chatbot platforms and high-performance distributed systems."
};

export const EXPERIENCES: Experience[] = [
  {
    role: "AI Python Developer",
    company: "Next Generation Innovations (NGI)",
    location: "Karachi, Pakistan",
    period: "February 2022 – Present",
    points: [
      "Architected and deployed AI-powered chatbot systems leveraging LLMs and RAG for enterprise conversational AI applications.",
      "Engineered gRPC microservices architecture enabling high-performance communication between distributed AI components.",
      "Containerized AI services using Docker with GPU acceleration support for text-to-speech and LLM inference workloads.",
      "Fine-tuned multilingual TTS models for German and English using NVIDIA NeMo and Riva.",
      "Optimized quantized LLMs including DeepSeek, Mistral-7B, and TinyLlama using BentoML and vLLM.",
      "Initiated R&D of agentic AI systems for autonomous task execution and decision-making workflows."
    ]
  },
  {
    role: "Trainee Python Developer",
    company: "Next Generation Innovations (NGI)",
    location: "Karachi, Pakistan",
    period: "October 2021 – January 2022",
    points: [
      "Developed Django-based web applications with emphasis on backend architecture and database design.",
      "Implemented RESTful APIs for client-server communication and integrated third-party services."
    ]
  },
  {
    role: "Django Intern (Part-time)",
    company: "Crop2x",
    location: "Karachi, Pakistan",
    period: "July 2021 – September 2021",
    points: [
      "Built and maintained REST APIs using Django REST Framework with PostgreSQL and Redis caching.",
      "Implemented asynchronous task processing with Celery for background job execution."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "AI-Powered Virtual Support Agent (heronOS)",
    description: "Customizable LLM and RAG-based virtual agent with video avatar capabilities.",
    points: [
      "Led development of LLM and RAG-powered conversational systems.",
      "Built gRPC microservices with streaming support.",
      "Optimized quantized models (DeepSeek, Mistral-7B) for reduced memory footprint."
    ],
    tech: ["LLM", "RAG", "gRPC", "Docker", "NVIDIA NeMo", "BentoML"]
  },
  {
    title: "Fintech Savings & Investment Platform",
    description: "Interactive platform for small-amount savings and real-time portfolio tracking.",
    points: [
      "Developed secure Django backend APIs for financial data protection.",
      "Built graph-based APIs for displaying portfolio statistics.",
      "Integrated real-time push notifications and SMS services."
    ],
    tech: ["Django", "PostgreSQL", "REST APIs", "Redis"]
  },
  {
    title: "Telehealth Platform (Health-at-Hand)",
    description: "Accessible health services platform with HL7 FHIR-compliant RESTful APIs.",
    points: [
      "Engineered backend services for secure management of health-related data.",
      "Integrated interoperability standards for external EHR systems.",
      "Implemented interactive dashboards for patient monitoring."
    ],
    tech: ["Django", "HL7 FHIR", "RESTful APIs", "Dashboard"]
  },
  {
    title: "Automated Lead Gen & Booking (n8n Workflow)",
    description: "Intelligent automation integrating RAG-powered chatbot with calendar booking.",
    points: [
      "Designed RAG-enhanced LLM chatbot for natural conversations.",
      "Built automated calendar logic integrated with inbound call systems.",
      "Created lead qualification workflows using n8n orchestration."
    ],
    tech: ["n8n", "LLM", "Agentic AI", "Workflow Orchestration"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "SQL", "TypeScript"]
  },
  {
    name: "Backend & Frameworks",
    skills: ["Django", "FastAPI", "Django REST Framework", "Next.js"]
  },
  {
    name: "AI & LLM",
    skills: ["LLMs", "Hugging Face", "BentoML", "vLLM", "RAG", "Vector DBs", "Model Quantization"]
  },
  {
    name: "Infrastructure & Deployment",
    skills: ["Docker", "GPU Acceleration", "gRPC", "Microservices", "CI/CD", "Git"]
  }
];
