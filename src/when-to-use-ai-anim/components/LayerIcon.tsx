import { COLORS } from "../theme";

// Per-layer minimal geometric icons. Designed to read at ~36px in a stack rung.
// Color flows from the parent's rung text color via currentColor.

type Props = {
  layer: string;
  size?: number;
};

export const LayerIcon: React.FC<Props> = ({ layer, size = 36 }) => {
  const stroke = "currentColor";
  const sw = 2;

  switch (layer) {
    case "AI":
      // Sparkle / 4-point star
      return (
        <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
          <path
            d="M18 4 L20.5 15.5 L32 18 L20.5 20.5 L18 32 L15.5 20.5 L4 18 L15.5 15.5 Z"
            fill={COLORS.amber}
            stroke={COLORS.amber}
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "Python":
    case "Programming Languages": {
      // Official Python logo: two interlocking rounded snake shapes.
      // Brand colors (blue #3776AB top, yellow #FFD43B bottom). Drawn in a
      // 128-unit viewBox for clean curves.
      const blue = "#3776AB";
      const yellow = "#FFD43B";
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          {/* Top (blue) snake */}
          <path
            fill={blue}
            d="M62.99 1.05c-5.34.03-10.43.49-14.91 1.28C34.86 4.66 32.46 9.43 32.46 18.21v11.61h31.06v3.94H20.83c-8.84 0-16.59 5.32-19.01 15.42-2.8 11.58-2.92 18.81 0 30.91C3.97 89.18 9.13 95.6 17.97 95.6h10.69V81.65c0-10.05 8.69-18.91 19.01-18.91h30.99c8.45 0 15.21-6.97 15.21-15.46V18.21c0-8.24-6.96-14.43-15.21-15.88-5.22-.91-10.62-1.32-15.97-1.28zM46.18 10.59c3.21 0 5.83 2.66 5.83 5.94 0 3.27-2.62 5.91-5.83 5.91-3.22 0-5.83-2.64-5.83-5.91 0-3.28 2.61-5.94 5.83-5.94z"
          />
          {/* Bottom (yellow) snake */}
          <path
            fill={yellow}
            d="M96.65 33.76V47.3c0 10.49-8.89 19.32-19.01 19.32H46.65c-8.32 0-15.21 7.13-15.21 15.46v28.97c0 8.24 7.17 13.09 15.21 15.46 9.63 2.83 18.86 3.34 30.99 0 7.66-2.21 15.21-6.66 15.21-15.46v-11.61H61.85v-3.94h45.59c8.84 0 12.13-6.16 15.21-15.42 3.18-9.53 3.04-18.69 0-30.91-2.18-8.81-6.36-15.42-15.21-15.42H96.65zM79.84 105.49c3.22 0 5.83 2.64 5.83 5.91 0 3.28-2.61 5.94-5.83 5.94-3.21 0-5.83-2.66-5.83-5.94 0-3.27 2.62-5.91 5.83-5.91z"
          />
        </svg>
      );
    }

    case "Bytecode":
      // Stack of small horizontal bars (like a hex dump)
      return (
        <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
          <rect x="6" y="9" width="10" height="3" fill={stroke} />
          <rect x="18" y="9" width="12" height="3" fill={stroke} />
          <rect x="6" y="16" width="14" height="3" fill={stroke} />
          <rect x="22" y="16" width="8" height="3" fill={stroke} />
          <rect x="6" y="23" width="8" height="3" fill={stroke} />
          <rect x="16" y="23" width="14" height="3" fill={stroke} />
        </svg>
      );

    case "C Interpreter":
      // { ; }
      return (
        <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
          <path
            d="M14 8 C 11 8 11 14 9 14 C 11 14 11 20 11 22 C 11 26 11 28 14 28"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="18" cy="16" r="1.4" fill={stroke} />
          <circle cx="18" cy="22" r="1.4" fill={stroke} />
          <path
            d="M22 8 C 25 8 25 14 27 14 C 25 14 25 20 25 22 C 25 26 25 28 22 28"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      );

    case "Assembly":
      // ASM mnemonic: stylized "M" via three vertical bars
      return (
        <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
          <rect x="7" y="10" width="3" height="16" fill={stroke} />
          <rect x="16.5" y="14" width="3" height="12" fill={stroke} />
          <rect x="26" y="10" width="3" height="16" fill={stroke} />
          <path
            d="M7 10 L17 14 L18 14 L29 10"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      );

    case "Machine Code":
      // 1010 binary
      return (
        <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
          <text
            x="18"
            y="23"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="11"
            fontWeight="700"
            fill={stroke}
            letterSpacing="0.5"
          >
            10110
          </text>
        </svg>
      );

    case "Hardware / Transistors":
      // Chip with pins
      return (
        <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
          <rect
            x="9"
            y="9"
            width="18"
            height="18"
            rx="2"
            stroke={stroke}
            strokeWidth={sw}
            fill="none"
          />
          {/* Pins */}
          <line x1="6" y1="13" x2="9" y2="13" stroke={stroke} strokeWidth={sw} />
          <line x1="6" y1="18" x2="9" y2="18" stroke={stroke} strokeWidth={sw} />
          <line x1="6" y1="23" x2="9" y2="23" stroke={stroke} strokeWidth={sw} />
          <line x1="27" y1="13" x2="30" y2="13" stroke={stroke} strokeWidth={sw} />
          <line x1="27" y1="18" x2="30" y2="18" stroke={stroke} strokeWidth={sw} />
          <line x1="27" y1="23" x2="30" y2="23" stroke={stroke} strokeWidth={sw} />
          {/* Inner detail */}
          <circle cx="18" cy="18" r="3" fill={stroke} opacity="0.5" />
        </svg>
      );

    case "Electrons":
      // Atom / orbit
      return (
        <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
          <ellipse
            cx="18"
            cy="18"
            rx="12"
            ry="5"
            stroke={stroke}
            strokeWidth={sw}
            fill="none"
          />
          <ellipse
            cx="18"
            cy="18"
            rx="12"
            ry="5"
            stroke={stroke}
            strokeWidth={sw}
            fill="none"
            transform="rotate(60 18 18)"
          />
          <ellipse
            cx="18"
            cy="18"
            rx="12"
            ry="5"
            stroke={stroke}
            strokeWidth={sw}
            fill="none"
            transform="rotate(-60 18 18)"
          />
          <circle cx="18" cy="18" r="2" fill={stroke} />
        </svg>
      );

    default:
      return null;
  }
};
