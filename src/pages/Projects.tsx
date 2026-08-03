import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import GradientBlurs from "@/components/GradientBlurs";

const projects = [
  {
    title: "School ERP Platform",
    description: "A premium administrative experience for admissions, attendance, and insights.",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  },
  {
    title: "AI Student Analytics",
    description: "An executive dashboard that turns raw education data into action-ready intelligence.",
    tags: ["Next.js", "OpenAI", "Python", "Docker"],
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80",
  },
  {
    title: "Healthcare Operations Dashboard",
    description: "A secure, high-clarity view of scheduling, incidents, and operational KPIs.",
    tags: ["React", "Azure", "FastAPI", "Redis"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
  },
];

const Projects = () => (
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
            Case <span className="gradient-text">Studies</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            A curated set of product launches where design, engineering, and AI came together to create measurable momentum.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur flex items-center justify-center text-primary"
                  >
                    <Github size={18} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur flex items-center justify-center text-primary"
                  >
                    <ExternalLink size={18} />
                  </motion.button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </PageTransition>
);

export default Projects;
