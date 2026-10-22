"use client";

interface BrandStampProps {
  className?: string;
  variant?: "glass-dark" | "glass-light" | "solid-white" | "solid-dark";
  size?: number;
}

export default function BrandStamp({
  className = "",
  variant = "solid-white",
  size = 112,
}: BrandStampProps) {
  // Color presets for maximum visibility and luxury aesthetic
  const isDark = variant === "glass-dark" || variant === "solid-dark";

  const discBg =
    variant === "solid-white"
      ? "fill-white"
      : variant === "glass-light"
      ? "fill-white/95"
      : variant === "glass-dark"
      ? "fill-[#090A0C]/90"
      : "fill-[#090A0C]";

  const outerRingStroke = isDark ? "#38E1EC" : "#0B2FC7";
  const innerRingStroke = isDark ? "rgba(255,255,255,0.25)" : "rgba(9,10,12,0.15)";
  const textColor = isDark ? "#FFFFFF" : "#090A0C";
  const accentColor = isDark ? "#38E1EC" : "#0B2FC7";
  const bannerBg = isDark ? "#0B2FC7" : "#090A0C";
  const bannerTextColor = "#FFFFFF";

  return (
    <div
      className={`relative rounded-full flex-shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        className="overflow-visible drop-shadow-md"
      >
        <defs>
          {/* Top arc path for curved text */}
          <path
            id="stampTopArc"
            d="M 24,100 A 76,76 0 1,1 176,100"
            fill="none"
          />
          {/* Bottom arc path for curved text */}
          <path
            id="stampBottomArc"
            d="M 176,100 A 76,76 0 1,1 24,100"
            fill="none"
          />
        </defs>

        {/* Circular background plate */}
        <circle cx="100" cy="100" r="96" className={discBg} />

        {/* Outer decorative ring */}
        <circle
          cx="100"
          cy="100"
          r="93"
          fill="none"
          stroke={outerRingStroke}
          strokeWidth="2"
        />

        {/* Secondary inner ring */}
        <circle
          cx="100"
          cy="100"
          r="86"
          fill="none"
          stroke={innerRingStroke}
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        {/* Top curved text: AQUELIS • SWIMMING POOLS */}
        <text
          fill={textColor}
          fontSize="11.5"
          fontWeight="700"
          letterSpacing="2.8"
        >
          <textPath
            href="#stampTopArc"
            startOffset="50%"
            textAnchor="middle"
          >
            AQUELIS • SWIMMING POOLS
          </textPath>
        </text>

        {/* Bottom curved text: LUXURY ESTATES • EST. 1999 */}
        <text
          fill={textColor}
          fontSize="10"
          fontWeight="700"
          letterSpacing="2.6"
        >
          <textPath
            href="#stampBottomArc"
            startOffset="50%"
            textAnchor="middle"
          >
            LUXURY ESTATES • EST. 1999
          </textPath>
        </text>

        {/* Decorative inner circular guideline */}
        <circle
          cx="100"
          cy="100"
          r="62"
          fill="none"
          stroke={innerRingStroke}
          strokeWidth="1.2"
        />

        {/* Center Banner Box */}
        <rect
          x="32"
          y="84"
          width="136"
          height="32"
          rx="6"
          fill={bannerBg}
        />

        {/* Center Brand Name */}
        <text
          x="100"
          y="105"
          textAnchor="middle"
          fill={bannerTextColor}
          fontSize="17"
          fontWeight="800"
          letterSpacing="3.5"
          fontFamily="var(--font-sans), sans-serif"
        >
          AQUELIS
        </text>

        {/* Side Star Accents */}
        <polygon
          points="100,68 102.5,73.5 108,74.2 104,78 105,83.5 100,80.5 95,83.5 96,78 92,74.2 97.5,73.5"
          fill={accentColor}
        />
        <polygon
          points="100,120 102,124 106,124.5 103,127.5 103.8,131.5 100,129.2 96.2,131.5 97,127.5 94,124.5 98,124"
          fill={accentColor}
        />
      </svg>
    </div>
  );
}
