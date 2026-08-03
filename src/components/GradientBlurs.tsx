import { motion } from "framer-motion";

const GradientBlurs = () => (
  <>
    <motion.div
      className="gradient-blur w-[400px] h-[400px] bg-primary/30 top-[-10%] left-[-5%]"
      animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="gradient-blur w-[300px] h-[300px] bg-glow-amber/20 bottom-[10%] right-[-5%]"
      animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="gradient-blur w-[200px] h-[200px] bg-primary/15 top-[40%] left-[50%]"
      animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
  </>
);

export default GradientBlurs;
