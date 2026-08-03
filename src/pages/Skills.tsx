import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import PageTransition from "@/components/PageTransition";
import GradientBlurs from "@/components/GradientBlurs";

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 94 },
  { name: "Next.js", level: 92 },
  { name: "Tailwind CSS", level: 93 },
  { name: "FastAPI", level: 90 },
  { name: "Python", level: 88 },
  { name: "PostgreSQL", level: 86 },
  { name: "Docker", level: 84 },
  { name: "OpenAI / Gemini", level: 90 },
  { name: "AWS / Azure / GCP", level: 82 },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-foreground">{name}</span>
        <motion.span
          className="text-primary font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-3 rounded-full bg-secondary overflow-hidden">
        <motion.div
          className="h-full rounded-full gradient-orange"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => (
  <PageTransition>
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <GradientBlurs />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Core <span className="gradient-text">Capabilities</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            A modern toolkit built for premium product design, engineering execution, and AI-enabled growth.
          </p>
        </motion.div>

        <div className="max-w-2xl">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </div>
  </PageTransition>
);

export default Skills;
