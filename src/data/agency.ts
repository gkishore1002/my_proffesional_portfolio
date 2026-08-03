import {
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiLayout,
  FiMonitor,
  FiServer,
  FiSettings,
  FiSmartphone,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import type { IconType } from "react-icons";

export interface Service {
  icon: IconType;
  title: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  challenge: string;
  solution: string;
  technologies: string[];
  timeline: string;
  impact: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#process", label: "Process" },
  { href: "#technologies", label: "Technologies" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const SERVICES: Service[] = [
  {
    icon: FiLayout,
    title: "UI/UX Design",
    description: "Premium interfaces that build trust, drive conversions, and elevate your brand.",
  },
  {
    icon: FiMonitor,
    title: "Frontend Development",
    description: "Pixel-perfect React applications with buttery-smooth interactions and performance.",
  },
  {
    icon: FiServer,
    title: "Backend Development",
    description: "Scalable APIs and services engineered for reliability, security, and growth.",
  },
  {
    icon: FiCpu,
    title: "AI Integration",
    description: "Intelligent copilots, automation, and AI features that feel native to your product.",
  },
  {
    icon: FiLayers,
    title: "SaaS Development",
    description: "End-to-end SaaS platforms built for subscription models and rapid iteration.",
  },
  {
    icon: FiTrendingUp,
    title: "Dashboard Development",
    description: "Executive dashboards and analytics interfaces that turn data into decisions.",
  },
  {
    icon: FiCode,
    title: "API Development",
    description: "RESTful and GraphQL APIs designed for seamless third-party integrations.",
  },
  {
    icon: FiCloud,
    title: "Cloud Deployment",
    description: "Production-ready infrastructure with CI/CD, monitoring, and auto-scaling.",
  },
  {
    icon: FiZap,
    title: "Performance Optimization",
    description: "Lightning-fast experiences that keep users engaged and search engines happy.",
  },
  {
    icon: FiSettings,
    title: "Maintenance & Support",
    description: "Long-term partnerships with proactive updates, monitoring, and iteration.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "school-erp",
    title: "School ERP Platform",
    challenge: "A fast-growing edtech company needed to replace fragmented tools with a unified platform for admissions, attendance, and analytics.",
    solution: "We designed and built a modular ERP with role-based dashboards, real-time reporting, and mobile-first workflows for teachers and administrators.",
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "AWS"],
    timeline: "8 weeks",
    impact: "Reduced administrative workload by 42% and accelerated onboarding from weeks to days.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "ai-analytics",
    title: "AI Student Analytics",
    challenge: "Leadership needed multi-source insights without overwhelming teachers and parents with raw data.",
    solution: "Built an AI-powered analytics dashboard with anomaly detection, automated summaries, and executive-ready visualizations.",
    technologies: ["Next.js", "OpenAI", "Python", "Docker", "PostgreSQL"],
    timeline: "10 weeks",
    impact: "Cut reporting time from hours to minutes and improved early intervention rates by 35%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "healthcare-dashboard",
    title: "Healthcare Operations Dashboard",
    challenge: "A regional healthcare provider needed a secure, HIPAA-aware view for scheduling and operational KPIs.",
    solution: "Delivered a compliant operations dashboard with real-time scheduling, incident tracking, and role-based access controls.",
    technologies: ["React", "Azure", "FastAPI", "Redis", "TypeScript"],
    timeline: "12 weeks",
    impact: "Improved incident visibility and reduced manual reporting by 60% across 12 facilities.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "#",
  },
];

export const PROCESS_STEPS = [
  "Discovery",
  "Research",
  "Wireframes",
  "Design",
  "Development",
  "Testing",
  "Deployment",
  "Support",
] as const;

export const WHY_CHOOSE_US = [
  { title: "Modern UI", description: "Interfaces that feel premium, intuitive, and unmistakably current." },
  { title: "Scalable Architecture", description: "Built to grow with your user base without costly rewrites." },
  { title: "AI Ready", description: "Intelligent features integrated thoughtfully from day one." },
  { title: "Enterprise Standards", description: "Security, accessibility, and compliance baked into every layer." },
  { title: "Pixel Perfect", description: "Every detail refined until it matches the design vision exactly." },
  { title: "Responsive", description: "Flawless experiences across desktop, tablet, and mobile." },
  { title: "SEO Friendly", description: "Optimized for discoverability and Core Web Vitals from launch." },
  { title: "Long-term Partnership", description: "We stay invested in your product long after deployment." },
];

export const TECH_STACK = [
  {
    category: "Frontend",
    icon: FiMonitor,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: FiServer,
    items: ["FastAPI", "Python", "Node.js", "GraphQL", "REST APIs"],
  },
  {
    category: "Cloud",
    icon: FiCloud,
    items: ["AWS", "Azure", "GCP", "Vercel", "Docker"],
  },
  {
    category: "AI",
    icon: FiCpu,
    items: ["OpenAI", "Gemini", "RAG", "LangChain", "Vector DBs"],
  },
  {
    category: "Database",
    icon: FiDatabase,
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"],
  },
  {
    category: "DevOps",
    icon: FiSettings,
    items: ["GitHub Actions", "CI/CD", "Terraform", "Kubernetes", "Monitoring"],
  },
  {
    category: "Testing",
    icon: FiSmartphone,
    items: ["Vitest", "Playwright", "Jest", "Cypress", "Storybook"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "They translated our vision into a product that feels premium, fast, and unmistakably future-ready. Our investors noticed immediately.",
    name: "Maya Brooks",
    role: "Founder & CEO",
    company: "ScaleFlow AI",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "Every screen felt thoughtful. The launch was smooth, the team was sharp, and the results were immediate. Best agency experience we've had.",
    name: "Daniel Ortiz",
    role: "Chief Operating Officer",
    company: "Lumina Health",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "From discovery to deployment, the process was calm and structured. They delivered a dashboard our executives actually use every day.",
    name: "Sarah Chen",
    role: "VP of Product",
    company: "ScaleFlow",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "We needed AI features that didn't feel bolted on. They built intelligent workflows that our users love and our team can maintain.",
    name: "James Mitchell",
    role: "CTO",
    company: "DataPulse",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
];

export const STATISTICS = [
  { value: 40, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "+", label: "Technologies" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Countries Served" },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "$5,000",
    period: "starting at",
    description: "Perfect for MVPs, landing pages, and early-stage product validation.",
    features: [
      "Product strategy session",
      "UI/UX design (up to 5 screens)",
      "Responsive web development",
      "Basic SEO setup",
      "2 revision cycles",
    ],
    cta: "Start Your Project",
  },
  {
    name: "Growth",
    price: "$15,000",
    period: "starting at",
    description: "For startups ready to scale with a full-featured digital product.",
    features: [
      "Full product design system",
      "Frontend + backend development",
      "AI feature integration",
      "Cloud deployment & CI/CD",
      "30 days post-launch support",
      "Performance optimization",
    ],
    cta: "Book Discovery Call",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored scope",
    description: "For complex platforms, enterprise integrations, and ongoing partnerships.",
    features: [
      "Dedicated product roadmap",
      "Advanced integrations & APIs",
      "Security & compliance review",
      "Dedicated team & SLA",
      "Ongoing maintenance",
      "Priority support channel",
    ],
    cta: "Contact Us",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "How quickly can we start a project?",
    answer: "Most engagements begin within 5–7 business days after our discovery call. We align on scope, timeline, and deliverables before any work begins.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "MVPs typically ship in 4–8 weeks. Full SaaS platforms range from 8–16 weeks depending on complexity. We provide a detailed timeline during discovery.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes. We offer flexible retainer packages for post-launch support, feature iterations, performance monitoring, and long-term product partnerships.",
  },
  {
    question: "Can you integrate AI features into our existing product?",
    answer: "Absolutely. We build AI copilots, RAG pipelines, intelligent automation, chat experiences, and custom ML integrations that feel native to your product.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We work across SaaS, healthcare, edtech, fintech, and enterprise software. Our focus is on products that need premium UI, scalable architecture, and intelligent features.",
  },
  {
    question: "How do you handle communication and updates?",
    answer: "Weekly progress updates, shared Figma boards, Slack or email access, and milestone demos. You'll always know exactly where your project stands.",
  },
];
