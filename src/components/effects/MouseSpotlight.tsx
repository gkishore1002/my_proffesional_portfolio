import { useMousePosition } from "@/hooks/useMousePosition";

const MouseSpotlight = () => {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(139, 0, 0, 0.06), transparent 40%)`,
      }}
      aria-hidden="true"
    />
  );
};

export default MouseSpotlight;
