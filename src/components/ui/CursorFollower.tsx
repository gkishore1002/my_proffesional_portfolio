import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, label, [data-cursor="pointer"]';

const CursorFollower = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const ringX = useSpring(cursorX, { stiffness: 120, damping: 18, mass: 0.6 });
  const ringY = useSpring(cursorY, { stiffness: 120, damping: 18, mass: 0.6 });
  const trailX = useSpring(cursorX, { stiffness: 50, damping: 20, mass: 0.8 });
  const trailY = useSpring(cursorY, { stiffness: 50, damping: 20, mass: 0.8 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isTouchDevice) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor");

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(Boolean(target.closest(INTERACTIVE_SELECTOR)));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[200] mix-blend-screen"
        style={{ x: trailX, y: trailY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible ? (hovering ? 0.55 : 0.35) : 0,
          scale: hovering ? 1.8 : 1,
        }}
        transition={{ duration: 0.25 }}
      >
        <div className="h-16 w-16 rounded-full bg-brand/20 blur-xl" />
      </motion.div>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[201]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.85 : hovering ? 1.45 : 1,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      >
        <div
          className={`relative flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300 ${
            hovering
              ? "border-brand-light bg-brand/15"
              : "border-brand/50 bg-brand/5"
          }`}
        >
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-brand-light shadow-[0_0_12px_rgba(198,40,40,0.8)]"
            animate={{ scale: hovering ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="absolute h-2 w-2 rounded-full border border-brand-light"
            animate={{ scale: hovering ? 1 : 0, opacity: hovering ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </motion.div>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[202]"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0, scale: clicking ? 0.6 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="h-1 w-1 rounded-full bg-white shadow-[0_0_8px_rgba(245,245,245,0.9)]" />
      </motion.div>
    </>
  );
};

export default CursorFollower;
