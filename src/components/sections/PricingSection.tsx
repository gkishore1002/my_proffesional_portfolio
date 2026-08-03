import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { PRICING_TIERS } from "@/data/agency";
import SectionHeader from "@/components/ui/SectionHeader";
import MagneticButton from "@/components/ui/MagneticButton";

const PricingSection = () => (
  <section id="pricing" className="section-padding relative">
    <div className="container-wide">
      <SectionHeader
        label="Pricing"
        title="Flexible engagement models for every stage."
        description="From fast MVPs to full-scale platform builds, we tailor scope around your product goals and timeline."
        align="center"
        className="mb-16"
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {PRICING_TIERS.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 ${
              tier.featured
                ? "border-brand/40 bg-gradient-to-b from-brand/10 to-surface-card/60 shadow-[0_24px_80px_rgba(139,0,0,0.15)]"
                : "border-white/[0.08] bg-surface-card/40 hover:border-brand/20"
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-red px-4 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
            )}

            <div>
              <h3 className="font-display text-xl font-bold text-foreground">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
            </div>

            <div className="my-8">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{tier.period}</p>
              <p className="mt-1 font-display text-4xl font-bold text-foreground">{tier.price}</p>
            </div>

            <ul className="mb-8 flex-1 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
                  {feature}
                </li>
              ))}
            </ul>

            <MagneticButton
              href="#contact"
              variant={tier.featured ? "primary" : "secondary"}
              className="w-full justify-center"
            >
              {tier.cta}
            </MagneticButton>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
