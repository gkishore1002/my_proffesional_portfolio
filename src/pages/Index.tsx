import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  ChevronRight,
  Cloud,
  Cpu,
  Globe2,
  Layers3,
  Monitor,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import ParticlesBackground from "@/components/ParticlesBackground";
import GradientBlurs from "@/components/GradientBlurs";
import { PERSONAL } from "@/data/personal";

const services = [
  {
    icon: Monitor,
    title: "UI/UX Design",
    description: "Premium product experiences crafted for trust, clarity, and conversion.",
  },
  {
    icon: Rocket,
    title: "SaaS Development",
    description: "Fast, modular web applications built with React, TypeScript, and scalable architecture.",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description: "Intelligent workflows, copilots, and AI copilots that feel native to your product.",
  },
  {
    icon: Cpu,
    title: "Backend APIs",
    description: "Reliable FastAPI and Python services for dashboards, automation, and integrations.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description: "Launch-ready infrastructure with performance tuning, CI/CD, and monitoring.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast experiences that keep users engaged and teams productive.",
  },
];

const caseStudies = [
  {
    title: "School ERP Platform",
    problem: "A fast-growing edtech team needed a modern platform for admissions, attendance, and analytics.",
    outcome: "Reduced admin effort by 42% and launched in under 10 weeks.",
    stack: "React • TypeScript • FastAPI • PostgreSQL",
    timeline: "8 weeks",
  },
  {
    title: "AI Student Analytics",
    problem: "Leadership needed multi-source insights without overwhelming teachers and parents.",
    outcome: "Delivered an executive dashboard with real-time anomaly detection and AI summaries.",
    stack: "Next.js • OpenAI • Python • Docker",
    timeline: "10 weeks",
  },
  {
    title: "Healthcare Operations Dashboard",
    problem: "A regional healthcare provider needed a secure view for scheduling and operational KPIs.",
    outcome: "Improved incident visibility and cut reporting time from hours to minutes.",
    stack: "React • Azure • FastAPI • Redis",
    timeline: "12 weeks",
  },
];

const processSteps = ["Discovery", "Research", "Design", "Development", "Testing", "Deployment", "Support"];

const reasons = [
  "Modern UI",
  "Scalable architecture",
  "Fast delivery",
  "AI-ready systems",
  "Pixel-perfect execution",
  "Responsive by default",
  "SEO-friendly experiences",
  "Long-term support",
];

const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Python", "Node", "PostgreSQL", "Redis", "Docker"],
  },
  {
    title: "Cloud & AI",
    items: ["AWS", "Azure", "GCP", "OpenAI", "Gemini", "RAG", "Agents"],
  },
];

const testimonials = [
  {
    quote:
      "They translated our vision into a product that feels premium, fast, and unmistakably future-ready.",
    name: "Maya Brooks",
    role: "Founder, Northstar AI",
  },
  {
    quote:
      "Every screen felt thoughtful. The launch was smooth, the team was sharp, and the results were immediate.",
    name: "Daniel Ortiz",
    role: "COO, Lumina Health",
  },
];

const stats = [
  { value: "40+", label: "Projects shipped" },
  { value: "8+", label: "Years building" },
  { value: "15+", label: "Technologies mastered" },
  { value: "20+", label: "Countries served" },
  { value: "98%", label: "Client satisfaction" },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$7k",
    description: "Ideal for MVPs and early-stage launches.",
    features: ["Product strategy", "Design system", "Core web app", "1 revision cycle"],
    timeline: "2-3 weeks",
  },
  {
    name: "Professional",
    price: "$18k",
    description: "For ambitious startups scaling into real traction.",
    features: ["Full product design", "Frontend + backend", "AI integration", "Launch support"],
    timeline: "4-6 weeks",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For high-stakes platforms and complex delivery needs.",
    features: ["Dedicated roadmap", "Advanced integrations", "Security reviews", "Ongoing product support"],
    timeline: "6+ weeks",
  },
];

const faqs = [
  { question: "How quickly can we start?", answer: "Most engagements begin within a week once scope and goals are aligned." },
  { question: "Do you support ongoing maintenance?", answer: "Yes. We offer post-launch support, iteration sprints, and long-term product partnerships." },
  { question: "Can you integrate AI features?", answer: "Absolutely. We build AI copilots, RAG flows, chat experiences, and automation layers end to end." },
];

const Index = () => {
  return (
    <PageTransition>
      <section className="relative min-h-screen overflow-hidden pt-24 pb-20">
        <ParticlesBackground />
        <GradientBlurs />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <Sparkles size={16} />
                Premium digital products for ambitious teams
              </div>
              <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
                We design and build AI-native products that feel effortless.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                Helping startups, SaaS companies, and global teams launch beautiful, high-performance web applications with modern UI, scalable architecture, and intelligent integrations.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:translate-y-[-2px]"
                >
                  Book discovery call
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="#case-studies"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  View case studies
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "FastAPI",
                  "Python",
                  "OpenAI",
                  "Gemini",
                  "AWS",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0c0c]/80 p-4 shadow-[0_30px_120px_rgba(255,138,0,0.18)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,138,0,0.25),_transparent_45%)]" />
                <div className="relative rounded-[1.5rem] border border-white/10 bg-black/70 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Product command center</p>
                      <p className="text-lg font-semibold text-white">Launch-ready dashboard</p>
                    </div>
                    <div className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">Live</div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">Weekly growth</p>
                        <span className="text-sm font-semibold text-primary">+24.8%</span>
                      </div>
                      <div className="flex h-32 items-end gap-2">
                        {[42, 58, 46, 72, 68, 88, 95].map((height, index) => (
                          <div
                            key={height}
                            className="flex-1 rounded-t-full bg-gradient-to-t from-primary/80 to-orange-300/60"
                            style={{ height: `${height}%`, animationDelay: `${index * 80}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="mb-2 flex items-center gap-2 text-sm text-primary">
                          <Bot size={16} />
                          AI assistant
                        </div>
                        <p className="text-sm text-muted-foreground">Quarterly insights generated in seconds.</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="mb-2 flex items-center gap-2 text-sm text-primary">
                          <ShieldCheck size={16} />
                          Secure by design
                        </div>
                        <p className="text-sm text-muted-foreground">Role-based access, audit trails, and deployment ready.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-[#111]/90 p-4 text-sm text-muted-foreground">
                    <div className="mb-2 flex items-center justify-between">
                      <span>Automations & integrations</span>
                      <span className="text-primary">4 connected systems</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-primary to-orange-300" />
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-primary to-orange-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted-foreground"
          >
            <span className="font-semibold uppercase tracking-[0.3em] text-white">Trusted technologies</span>
            {"React Next.js TypeScript FastAPI Python PostgreSQL Docker Tailwind OpenAI Gemini AWS Azure GCP".split(" ").map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-black/40 px-3 py-1">
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services" className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">Services</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Strategic design and engineering for products that need to win.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7 shadow-[0_20px_80px_rgba(0,0,0,0.25)]"
                >
                  <div className="mb-5 inline-flex rounded-2xl border border-primary/30 bg-primary/10 p-3 text-primary">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="case-studies" className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-primary">Case studies</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Products launched with measurable clarity and momentum.
              </h2>
            </div>
            <a href="#contact" className="text-sm font-medium text-primary">
              Start a similar engagement ↗
            </a>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-[1.5rem] border border-white/10 bg-[#0b0b0b] p-7"
              >
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.3em] text-primary">{study.timeline}</p>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">Mobile + desktop</div>
                </div>
                <h3 className="text-2xl font-semibold text-white">{study.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{study.problem}</p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">Outcome</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{study.outcome}</p>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p className="font-medium text-white">Tech</p>
                  <p className="mt-1">{study.stack}</p>
                </div>
                <div className="mt-6 flex gap-3">
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-medium text-primary">
                    View live <ChevronRight size={16} />
                  </a>
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-foreground">
                    Read case study <ChevronRight size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,138,0,0.12),rgba(255,255,255,0.04))] p-8 lg:p-12">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.35em] text-primary">Process</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A calm, structured path from idea to launch.</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-muted-foreground">We pair strategic thinking with lean execution so momentum stays high without sacrificing quality.</p>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-1/2 hidden h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 lg:block" />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-7">
                {processSteps.map((step, index) => (
                  <div key={step} className="relative rounded-2xl border border-white/10 bg-black/40 p-4 text-center">
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                      {index + 1}
                    </div>
                    <p className="text-sm font-semibold text-white">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-primary">Why work with us</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Premium execution from first click to final deployment.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">We build for clarity, speed, trust, and long-term growth—without turning the experience into a bloated agency process.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <Layers3 size={18} />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">Crafted</span>
                </div>
                <p className="text-lg font-semibold text-white">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">Tech stack</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A modern stack that stays lean and powerful.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {stackGroups.map((group) => (
              <div key={group.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/40 px-3 py-2 text-sm text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-primary">Testimonials</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Trusted by founders who value craft and speed.</h2>
            </div>
            <p className="text-sm leading-7 text-muted-foreground">Our clients stay with us because the work feels premium, the process is calm, and the outcomes are measurable.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
              <motion.blockquote
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7"
              >
                <p className="text-xl leading-8 text-white">“{item.quote}”</p>
                <footer className="mt-6">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-wrap gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:items-center lg:justify-between">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="min-w-[150px]"
              >
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-primary">Pricing</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Flexible engagement models for every stage.</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">From fast MVPs to full-scale platform builds, we tailor the scope around the product goals and time constraints.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {pricingTiers.map((tier) => (
                <div key={tier.name} className={`rounded-[1.5rem] border p-6 ${tier.featured ? "border-primary/40 bg-primary/10" : "border-white/10 bg-white/5"}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                    {tier.featured ? <span className="rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">Most popular</span> : null}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{tier.description}</p>
                  <p className="mt-6 text-3xl font-semibold text-white">{tier.price}</p>
                  <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-muted-foreground">Timeline: {tier.timeline}</p>
                  <a href="#contact" className="mt-6 inline-flex rounded-full border border-primary/30 px-4 py-2 text-sm font-medium text-primary">
                    Get started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Clear answers before your first conversation.</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
                <summary className="cursor-pointer text-lg font-semibold text-white">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="rounded-[2rem] border border-primary/30 bg-[radial-gradient(circle_at_top_left,_rgba(255,138,0,0.22),_transparent_50%)] p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-primary">Contact</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Let&apos;s build something great together.</h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">Book a discovery call and we&apos;ll shape the right product strategy, design system, and delivery plan for your company.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/50 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-primary">Response within 24 hours</p>
                <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                  <a className="block transition hover:text-primary" href={`mailto:${PERSONAL.email}`}>
                    {PERSONAL.email}
                  </a>
                  <a className="block transition hover:text-primary" href={PERSONAL.linkedinUrl}>
                    LinkedIn
                  </a>
                  <a className="block transition hover:text-primary" href={PERSONAL.githubUrl}>
                    GitHub
                  </a>
                </div>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground">
                  Book discovery call <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="container mx-auto flex flex-col gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">{PERSONAL.name}</p>
            <p>{PERSONAL.title}</p>
          </div>
          <div className="flex gap-4">
            <a href="#services" className="transition hover:text-primary">Services</a>
            <a href="#case-studies" className="transition hover:text-primary">Case studies</a>
            <a href="#contact" className="transition hover:text-primary">Contact</a>
          </div>
        </div>
      </footer>
    </PageTransition>
  );
};

export default Index;
