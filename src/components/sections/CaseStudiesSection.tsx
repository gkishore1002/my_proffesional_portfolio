import { motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";
import { CASE_STUDIES } from "@/data/agency";
import SectionHeader from "@/components/ui/SectionHeader";
import MagneticButton from "@/components/ui/MagneticButton";

const CaseStudiesSection = () => (
  <section id="case-studies" className="section-padding relative">
    <div className="container-wide">
      <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          label="Case Studies"
          title="Products launched with measurable clarity and momentum."
          description="Real projects. Real outcomes. See how we help businesses transform ideas into premium digital products."
        />
        <MagneticButton href="#contact" variant="secondary" className="shrink-0 self-start lg:self-auto">
          Start a Similar Project
          <FiArrowUpRight className="h-4 w-4" />
        </MagneticButton>
      </div>

      <div className="space-y-8">
        {CASE_STUDIES.map((study, index) => (
          <motion.article
            key={study.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-surface/80"
          >
            <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
                <img
                  src={study.image}
                  alt={study.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#1A1A1A]/80" />

                {/* Device previews overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  <div className="flex-1 rounded-lg border border-white/10 bg-black/60 p-2 backdrop-blur-md">
                    <p className="mb-1 text-[9px] uppercase tracking-wider text-muted-foreground">Desktop</p>
                    <div className="h-12 rounded bg-white/5" />
                  </div>
                  <div className="w-16 rounded-lg border border-white/10 bg-black/60 p-2 backdrop-blur-md">
                    <p className="mb-1 text-[9px] uppercase tracking-wider text-muted-foreground">Mobile</p>
                    <div className="h-12 rounded bg-white/5" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 lg:p-10 lg:[direction:ltr]">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-brand/15 px-3 py-1 text-xs font-medium text-brand-light">
                    {study.timeline}
                  </span>
                  {study.featured && (
                    <span className="rounded-full border border-brand/30 px-3 py-1 text-xs font-medium text-brand">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground lg:text-3xl">{study.title}</h3>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">Challenge</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">Solution</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{study.solution}</p>
                  </div>
                  <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-light">Business Impact</p>
                    <p className="mt-1 text-sm font-medium text-foreground">{study.impact}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      className="inline-flex items-center gap-2 rounded-full border border-brand/30 px-5 py-2.5 text-sm font-medium text-brand-light transition hover:bg-brand/10"
                    >
                      <FiExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  {study.githubUrl && (
                    <a
                      href={study.githubUrl}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-white/5"
                    >
                      <FiGithub className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-white/5"
                  >
                    Read Case Study
                    <FiArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;
