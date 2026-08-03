import { motion } from "framer-motion";
import { TECH_STACK } from "@/data/agency";
import SectionHeader from "@/components/ui/SectionHeader";

const TechStackSection = () => (
  <section id="technologies" className="section-padding relative">
    <div className="container-wide">
      <SectionHeader
        label="Technologies"
        title="A modern stack that stays lean and powerful."
        description="We choose tools that deliver speed, reliability, and long-term maintainability — not hype."
        className="mb-16"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {TECH_STACK.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group rounded-2xl border border-white/[0.08] bg-surface-card/40 p-6 transition-all duration-300 hover:border-brand/25 hover:shadow-[0_16px_48px_rgba(139,0,0,0.08)]"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand-light">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover:border-brand/15 group-hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default TechStackSection;
