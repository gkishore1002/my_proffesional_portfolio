import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import GradientBlurs from "@/components/GradientBlurs";

const articles = [
  {
    title: "Building premium SaaS experiences with a design-first system",
    excerpt: "How to turn product ambition into a disciplined experience that feels effortless and trustworthy.",
    date: "Mar 2026",
    readTime: "8 min",
  },
  {
    title: "Designing AI products that users actually trust",
    excerpt: "The product principles behind helpful copilots, clear feedback loops, and confident interactions.",
    date: "Feb 2026",
    readTime: "6 min",
  },
  {
    title: "Scaling modern web apps without losing craft",
    excerpt: "Practical ways to grow architecture, performance, and team clarity without sacrificing quality.",
    date: "Jan 2026",
    readTime: "10 min",
  },
];

const Articles = () => (
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
            Insights <span className="gradient-text">& Strategy</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Perspectives on product strategy, intelligent experiences, and building modern software with intention.
          </p>
        </motion.div>

        <div className="space-y-4 max-w-3xl">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href="#"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ x: 8, scale: 1.01 }}
              className="glass rounded-xl p-6 flex items-center gap-6 group block"
            >
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {article.readTime}
                  </span>
                </div>
              </div>
              <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" size={20} />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </PageTransition>
);

export default Articles;
