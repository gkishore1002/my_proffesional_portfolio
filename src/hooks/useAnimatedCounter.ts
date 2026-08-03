import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface UseAnimatedCounterOptions {
  duration?: number;
  start?: number;
}

export const useAnimatedCounter = (
  end: number,
  options: UseAnimatedCounterOptions = {},
) => {
  const { duration = 2000, start = 0 } = options;
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(start + (end - start) * eased));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isInView, end, start, duration]);

  return { ref, count };
};
