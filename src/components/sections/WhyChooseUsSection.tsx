import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { WHY_CHOOSE_US } from "@/data/agency";
import SectionHeader from "@/components/ui/SectionHeader";

const WhyChooseUsSection = () => (
  <section className="section-padding relative">
    <div className="container-wide">
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeader
          label="Why Choose Us"
          title="Premium execution from first click to final deployment."
          description="We build for clarity, speed, trust, and long-term growth — without turning the experience into a bloated agency process."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-white/[0.08] bg-surface-card/40 p-6 transition-all duration-300 hover:border-brand/20 hover:bg-surface-card/60"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand-light transition-colors group-hover:bg-brand/20">
                <FiCheck className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
