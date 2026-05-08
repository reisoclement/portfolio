import { COLORS } from "../theme";

const baseProps = {
  width: 36,
  height: 36,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: COLORS.gold,
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconChess: React.FC = () => (
  // King: cross on top, rounded crown, body, base
  <svg {...baseProps}>
    <path d="M12 2.5v3.5" />
    <path d="M10.5 4h3" />
    <path d="M9 9c0-1.5 1.5-3 3-3s3 1.5 3 3c0 1.2-.6 2-1.4 2.6L14 13H10l-.6-1.4C8.6 11 8 10.2 8 9z" />
    <path d="M9.5 13h5l-.5 5h-4z" />
    <path d="M7.5 20h9" />
    <path d="M7.5 18h9" />
  </svg>
);

export const IconBee: React.FC = () => (
  // Bee body with wings on top and antennae
  <svg {...baseProps}>
    <path d="M11 3l-1.5-1M13 3l1.5-1" />
    <ellipse cx="9" cy="9" rx="3.5" ry="2.5" />
    <ellipse cx="15" cy="9" rx="3.5" ry="2.5" />
    <ellipse cx="12" cy="14" rx="4.5" ry="6" />
    <path d="M7.7 12.5h8.6" />
    <path d="M8.2 16h7.6" />
    <path d="M9.5 19.5h5" />
  </svg>
);

export const IconSnowboard: React.FC = () => (
  // Snowflake: 6-axis star with small barbs at each tip
  <svg {...baseProps}>
    <path d="M12 2.5v19" />
    <path d="M3.8 7.25l16.4 9.5" />
    <path d="M3.8 16.75l16.4-9.5" />
    <path d="M12 5l-1.5-1.5M12 5l1.5-1.5" />
    <path d="M12 19l-1.5 1.5M12 19l1.5 1.5" />
    <path d="M5.5 8.25l-2-.5M5.5 8.25l-.5-2" />
    <path d="M18.5 15.75l2 .5M18.5 15.75l.5 2" />
    <path d="M5.5 15.75l-2 .5M5.5 15.75l-.5 2" />
    <path d="M18.5 8.25l2-.5M18.5 8.25l.5-2" />
  </svg>
);

export const IconVolley: React.FC = () => (
  // Volleyball: viewed from a pole. Six panels — three seams curving from the
  // top-left pole, three curving from the bottom-right pole, all sweeping
  // across the ball. This is the signature volleyball geometry.
  <svg {...baseProps}>
    <circle cx="12" cy="12" r="9" />
    {/* three seams sweeping from upper-left pole down to opposite side */}
    <path d="M5 6c2 4 6 6 11 6.5" />
    <path d="M3.5 11c3 1.5 7 1 11 4" />
    <path d="M5 17c1-4 4-7 8.5-8" />
  </svg>
);

export const IconBike: React.FC = () => (
  // Bicycle: two wheels + frame
  <svg {...baseProps}>
    <circle cx="6" cy="17" r="3.5" />
    <circle cx="18" cy="17" r="3.5" />
    <path d="M6 17l4-7h6" />
    <path d="M10 10l3 7" />
    <path d="M16 10l2 7" />
    <path d="M14.5 7h2" />
  </svg>
);

export const IconMotor: React.FC = () => (
  // Motorbike helmet: full-face helmet silhouette with visor opening + chin guard
  <svg {...baseProps}>
    {/* helmet outer shell */}
    <path d="M4 13a8 8 0 0116 0v5a1 1 0 01-1 1h-2v-2H7v2H5a1 1 0 01-1-1z" />
    {/* visor opening */}
    <path d="M7 11.5h10v3H7z" />
    {/* chin guard ridge */}
    <path d="M7 16.5h10" />
  </svg>
);

export const IconFitness: React.FC = () => (
  // Dumbbell
  <svg {...baseProps}>
    <rect x="2.5" y="9" width="2.5" height="6" rx="0.5" />
    <rect x="19" y="9" width="2.5" height="6" rx="0.5" />
    <rect x="5" y="10.5" width="2" height="3" rx="0.5" />
    <rect x="17" y="10.5" width="2" height="3" rx="0.5" />
    <path d="M7 12h10" />
  </svg>
);

export const IconGlider: React.FC = () => (
  // Glider plane: body silhouette with long wings
  <svg {...baseProps}>
    <path d="M12 5v9" />
    <path d="M3 11.5l9-1.5 9 1.5" />
    <path d="M9.5 16.5l2.5-2.5 2.5 2.5" />
    <ellipse cx="12" cy="14" rx="1" ry="1.4" />
  </svg>
);

export const IconCode: React.FC = () => (
  // Curly braces with slash
  <svg {...baseProps}>
    <path d="M9 4c-2 0-3 1-3 3v3c0 1-.5 2-2 2 1.5 0 2 1 2 2v3c0 2 1 3 3 3" />
    <path d="M15 4c2 0 3 1 3 3v3c0 1 .5 2 2 2-1.5 0-2 1-2 2v3c0 2-1 3-3 3" />
    <path d="M14 7l-4 10" />
  </svg>
);
