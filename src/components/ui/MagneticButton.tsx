import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const MagneticButton = ({
  children,
  className = "",
  href,
  onClick,
  variant = "primary",
}: MagneticButtonProps) => {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0, 0)";
  };

  const baseStyles =
    variant === "primary"
      ? "gradient-red text-white glow-red-sm hover:glow-red"
      : "border border-white/10 bg-white/5 text-foreground hover:border-brand/40 hover:bg-white/[0.07]";

  const sharedProps = {
    ref: ref as React.RefObject<HTMLAnchorElement & HTMLButtonElement>,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 ${baseStyles} ${className}`,
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a href={href} {...sharedProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} type="button" {...sharedProps}>
      {children}
    </motion.button>
  );
};

export default MagneticButton;
