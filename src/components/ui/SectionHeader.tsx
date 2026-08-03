import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeader = ({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
  >
    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">{label}</p>
    <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">{description}</p>
    )}
  </motion.div>
);

export default SectionHeader;
