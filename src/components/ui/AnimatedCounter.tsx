import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

const AnimatedCounter = ({ value, suffix = "", label }: AnimatedCounterProps) => {
  const { ref, count } = useAnimatedCounter(value);

  return (
    <div className="text-center">
      <span
        ref={ref}
        className="font-display text-4xl font-bold text-foreground sm:text-5xl"
      >
        {count}
        {suffix}
      </span>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
