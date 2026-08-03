import { cn } from "@/lib/utils";
import { PERSONAL } from "@/data/personal";
import DatasphereLogoMark from "@/components/ui/DatasphereLogoMark";

interface BrandLogoProps {
  showIcon?: boolean;
  showText?: boolean;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { mark: 28, text: "text-sm" },
  md: { mark: 34, text: "text-lg" },
  lg: { mark: 44, text: "text-2xl" },
};

const BrandLogo = ({
  showIcon = true,
  showText = true,
  className,
  iconClassName,
  textClassName,
  size = "md",
}: BrandLogoProps) => {
  const sizes = sizeMap[size];

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {showIcon && (
        <span
          className={cn(
            "relative flex shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-[#1A1A1A]/80 p-1 glow-red-sm",
            iconClassName,
          )}
        >
          <DatasphereLogoMark size={sizes.mark} />
        </span>
      )}
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-brand font-bold uppercase tracking-[0.16em] text-foreground",
              sizes.text,
              textClassName,
            )}
          >
            {PERSONAL.brandName}
          </span>
          {size === "lg" && (
            <span className="mt-1 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              Studio
            </span>
          )}
        </span>
      )}
    </span>
  );
};

export default BrandLogo;
