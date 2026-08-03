import { motion } from "framer-motion";
import { STATISTICS } from "@/data/agency";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const StatisticsSection = () => (
  <section className="section-padding relative">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-white/[0.08] bg-gradient-to-r from-surface/60 via-surface-card/40 to-surface/60 p-10 lg:p-14"
      >
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          {STATISTICS.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default StatisticsSection;
