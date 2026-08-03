import { motion } from "framer-motion";

const GradientBlurs = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <motion.div
      className="gradient-blur h-[500px] w-[500px] bg-brand-dark/25 -left-[10%] -top-[15%]"
      animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="gradient-blur h-[400px] w-[400px] bg-brand/15 -right-[8%] bottom-[5%]"
      animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="gradient-blur h-[300px] w-[300px] bg-brand-light/10 top-[45%] left-[40%]"
      animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default GradientBlurs;
