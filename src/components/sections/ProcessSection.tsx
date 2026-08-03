import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS_STEPS } from "@/data/agency";
import SectionHeader from "@/components/ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    const section = sectionRef.current;
    if (!line || !section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 40%",
            scrub: 1,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="section-padding relative">
      <div className="container-wide">
        <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-surface/80 to-[#121212] p-8 lg:p-12">
          <SectionHeader
            label="Process"
            title="A calm, structured path from idea to launch."
            description="We pair strategic thinking with lean execution so momentum stays high without sacrificing quality."
            className="mb-14"
          />

          <div className="relative">
            {/* Animated connecting line */}
            <div className="absolute left-0 right-0 top-8 hidden h-[2px] origin-left bg-white/10 lg:block">
              <div
                ref={lineRef}
                className="h-full w-full origin-left bg-gradient-to-r from-brand-dark via-brand to-brand-light"
                style={{ transform: "scaleX(0)" }}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative text-center"
                >
                  <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-white/[0.08] bg-surface-card transition-colors group-hover:border-brand/40 group-hover:bg-brand/10" />
                    <span className="relative font-display text-lg font-bold text-brand-light">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
