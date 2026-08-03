import { motion } from "framer-motion";
import { SERVICES } from "@/data/agency";
import SectionHeader from "@/components/ui/SectionHeader";

const ServicesSection = () => (
  <section id="services" className="section-padding relative">
    <div className="container-wide">
      <SectionHeader
        label="Services"
        title="Strategic design and engineering for products that win."
        description="From concept to deployment, we deliver end-to-end solutions that drive measurable business outcomes."
        className="mb-16"
      />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-card/50 p-6 transition-all duration-300 hover:border-brand/30 hover:shadow-[0_20px_60px_rgba(139,0,0,0.12)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 inline-flex rounded-xl border border-brand/20 bg-brand/10 p-3 text-brand-light transition-colors group-hover:bg-brand/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesSection;
