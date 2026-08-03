import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import MagneticButton from "@/components/ui/MagneticButton";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen overflow-hidden pt-28 pb-20 lg:pt-32">
    <div className="container-wide relative z-10">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-light opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-light" />
            </span>
            <span className="text-xs font-medium tracking-wide text-brand-light">
              Accepting new projects for Q3 2026
            </span>
          </div>

          <h1 className="font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Building Modern{" "}
            <span className="gradient-text">AI-Powered Software</span>{" "}
            That Helps Businesses Scale.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Helping startups and businesses transform ideas into premium digital products through modern UI/UX, scalable engineering, and AI-powered solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton href="#contact" variant="primary">
              Book Discovery Call
              <FiArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#case-studies" variant="secondary">
              <FiPlay className="h-4 w-4" />
              View Case Studies
            </MagneticButton>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 border-t border-white/[0.08] pt-8">
            {[
              { value: "40+", label: "Projects" },
              { value: "98%", label: "Satisfaction" },
              { value: "15+", label: "Countries" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Laptop mockup */}
          <div className="relative mx-auto max-w-lg">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl border border-white/10 bg-[#1A1A1A] p-3 shadow-[0_40px_120px_rgba(139,0,0,0.15)]"
            >
              <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121212]">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-brand/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>
                  <div className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-[10px] text-muted-foreground">
                    app.datasphere.co/dashboard
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-muted-foreground">Revenue Overview</p>
                      <p className="text-lg font-bold text-foreground">$284,590</p>
                    </div>
                    <span className="rounded-full bg-brand/20 px-2 py-0.5 text-[10px] font-medium text-brand-light">
                      +24.8%
                    </span>
                  </div>

                  <div className="mb-4 grid grid-cols-3 gap-2">
                    {[
                      { label: "Users", value: "12.4K" },
                      { label: "MRR", value: "$48K" },
                      { label: "Churn", value: "2.1%" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-lg bg-white/[0.04] p-2">
                        <p className="text-[9px] text-muted-foreground">{item.label}</p>
                        <p className="text-xs font-semibold text-foreground">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex h-20 items-end gap-1">
                    {[35, 52, 41, 68, 55, 78, 85, 72, 92, 88, 95, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-dark to-brand-light"
                        style={{ height: `${h}%`, opacity: 0.4 + (h / 100) * 0.6 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating mobile mockup */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-4 -bottom-6 w-28 rounded-2xl border border-white/10 bg-[#1A1A1A] p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] sm:-right-8 sm:w-32"
            >
              <div className="overflow-hidden rounded-xl bg-[#121212] p-2">
                <div className="mb-2 h-1 w-8 mx-auto rounded-full bg-white/20" />
                <div className="space-y-1.5">
                  <div className="h-8 rounded-md bg-brand/20" />
                  <div className="h-4 rounded bg-white/5" />
                  <div className="h-4 w-3/4 rounded bg-white/5" />
                  <div className="flex gap-1">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="h-6 flex-1 rounded bg-white/[0.04]" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating code snippet */}
            <motion.div
              animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-6 top-8 hidden rounded-xl border border-white/10 bg-[#1A1A1A]/90 p-3 font-mono text-[9px] text-muted-foreground backdrop-blur-xl sm:block"
            >
              <p><span className="text-brand-light">const</span> app = <span className="text-brand">createSaaS</span>({"{"}</p>
              <p className="pl-2">ai: <span className="text-green-400/70">true</span>,</p>
              <p className="pl-2">scale: <span className="text-green-400/70">"infinite"</span></p>
              <p>{"});"}</p>
            </motion.div>

            {/* Floating widget */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -right-2 top-4 hidden rounded-xl border border-brand/20 bg-brand/10 px-3 py-2 backdrop-blur-xl sm:block"
            >
              <p className="text-[10px] font-medium text-brand-light">AI Insights</p>
              <p className="text-[9px] text-muted-foreground">3 anomalies detected</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
