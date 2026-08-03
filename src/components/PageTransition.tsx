import { motion } from "framer-motion";
import { ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.98 }}
    animate={{
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    }}
    exit={{
      opacity: 0,
      y: -30,
      scale: 0.98,
      transition: { duration: 0.4, ease: "easeIn" },
    }}
    className="min-h-screen"
  >
    {children}
  </motion.div>
);

export default PageTransition;
