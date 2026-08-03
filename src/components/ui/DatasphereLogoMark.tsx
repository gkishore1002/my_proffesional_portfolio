import { cn } from "@/lib/utils";

interface DatasphereLogoMarkProps {
  className?: string;
  size?: number;
}

const DatasphereLogoMark = ({ className, size = 32 }: DatasphereLogoMarkProps) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("shrink-0", className)}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ds-core" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C62828" />
        <stop offset="1" stopColor="#8B0000" />
      </linearGradient>
      <linearGradient id="ds-orbit" x1="0" y1="24" x2="48" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#B22222" stopOpacity="0.9" />
        <stop offset="1" stopColor="#8B0000" stopOpacity="0.4" />
      </linearGradient>
      <radialGradient id="ds-glow" cx="24" cy="24" r="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C62828" stopOpacity="0.35" />
        <stop offset="1" stopColor="#8B0000" stopOpacity="0" />
      </radialGradient>
    </defs>

    <circle cx="24" cy="24" r="22" fill="url(#ds-glow)" />

    <ellipse
      cx="24"
      cy="24"
      rx="18"
      ry="7"
      stroke="url(#ds-orbit)"
      strokeWidth="1.2"
      transform="rotate(-28 24 24)"
      opacity="0.85"
    />
    <ellipse
      cx="24"
      cy="24"
      rx="18"
      ry="7"
      stroke="url(#ds-orbit)"
      strokeWidth="1.2"
      transform="rotate(32 24 24)"
      opacity="0.65"
    />
    <ellipse
      cx="24"
      cy="24"
      rx="7"
      ry="18"
      stroke="url(#ds-orbit)"
      strokeWidth="1"
      transform="rotate(12 24 24)"
      opacity="0.5"
    />

    <circle cx="24" cy="24" r="9" stroke="rgba(245,245,245,0.15)" strokeWidth="0.8" />
    <circle cx="24" cy="24" r="5.5" fill="url(#ds-core)" />
    <circle cx="22.5" cy="22.5" r="1.8" fill="rgba(255,255,255,0.45)" />

    <circle cx="38" cy="18" r="2" fill="#C62828" />
    <circle cx="12" cy="30" r="1.6" fill="#B22222" opacity="0.9" />
    <circle cx="30" cy="36" r="1.4" fill="#F5F5F5" opacity="0.75" />
    <circle cx="16" cy="14" r="1.2" fill="#C62828" opacity="0.8" />

    <path
      d="M38 18 L30 22 M12 30 L18 26 M30 36 L26 28"
      stroke="rgba(178,34,34,0.35)"
      strokeWidth="0.7"
      strokeLinecap="round"
    />
  </svg>
);

export default DatasphereLogoMark;
