import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type Props = {
  color?: string;
  /**
   * Background color for standalone preview. Ignored in embedded mode.
   * Pass "transparent" for overlay use.
   */
  background?: string;
  /**
   * "standalone" fills the canvas and centers the logo (for the preview comp).
   * "embedded" renders inline at `size` width with no AbsoluteFill, so it can
   * be positioned by a parent (corner watermark on a scene).
   */
  mode?: "standalone" | "embedded";
  /** Width in px of the rendered logo group when embedded. */
  size?: number;
  /** Suffix for clip-path IDs so multiple instances on the page don't collide. */
  idSuffix?: string;
};

// CR path traced from public/refs/cr.png with potrace.
// Coordinate system: 288 x 288.
const CR_PATH =
  "M 127.376 64.428 C 94.910 71.824, 75.685 98.805, 77.233 134.801 C 78.161 156.399, 85.590 171.813, 100.283 182.629 C 108.844 188.932, 109 188.830, 109 176.967 C 109 168.404, 108.653 166.242, 106.630 162.217 C 100.033 149.091, 98.244 122.756, 102.847 106.545 C 110.759 78.687, 130.183 62.825, 151.300 66.979 C 165.298 69.733, 174.934 79.626, 182.092 98.592 C 184.135 104.004, 185.802 107, 186.770 107 C 188.442 107, 187.713 67.408, 186.008 65.639 C 185.552 65.166, 184.158 65.954, 182.909 67.389 C 180.010 70.724, 178.422 70.672, 167.492 66.882 C 156.633 63.115, 138.111 61.983, 127.376 64.428 M 106.124 101.075 C 105.230 103.640, 105.374 104.595, 106.991 106.825 C 108.057 108.296, 109.385 111.525, 109.940 114 C 111.384 120.429, 111.321 201.398, 109.867 208.201 C 108.486 214.662, 103.986 219.424, 98.308 220.431 C 92.434 221.473, 90.921 222.064, 91.544 223.072 C 92.482 224.589, 151.261 224.283, 150.755 222.764 C 150.528 222.085, 148.354 221.189, 145.923 220.774 C 137.203 219.285, 133.142 213.922, 132.300 202.779 L 131.749 195.500 142.125 195.336 C 149.368 195.222, 154.417 194.565, 158.849 193.160 L 165.198 191.148 168.586 198.479 C 170.448 202.511, 173.691 209.790, 175.790 214.655 L 179.608 223.500 195.396 223.776 C 207.750 223.992, 211.092 223.777, 210.764 222.791 C 210.532 222.097, 208.951 221.131, 207.249 220.643 C 202.159 219.183, 198.571 214.359, 189.502 196.784 L 180.876 180.069 183.359 175.784 C 185.581 171.952, 187.666 165.761, 189.432 157.750 C 190.665 152.159, 187.217 154.740, 185.483 160.707 C 181.646 173.906, 174.929 181.971, 164.419 185.998 C 157.144 188.785, 144.824 189.727, 137.391 188.063 L 132 186.857 132 175.095 C 132 168.626, 132.218 163.115, 132.485 162.848 C 132.752 162.582, 135.683 162.683, 139 163.075 C 146.824 163.997, 150.485 166.809, 157.116 176.990 L 162.275 184.912 165.888 183.413 C 169.856 181.767, 175.758 177.330, 177.362 174.787 C 178.740 172.603, 174.339 166.248, 169.200 163.001 L 165.388 160.592 171.565 158.513 C 193.299 151.199, 200.286 126.657, 185.360 110.056 C 176.163 99.826, 168.219 98, 132.914 98 L 107.196 98 106.124 101.075 M 132 130.361 L 132 160 138.818 160 C 156.883 160, 168.185 150.083, 169.746 132.861 C 171.423 114.368, 160.490 102.347, 140.981 101.235 L 132 100.723 132 130.361";

// Mustache path extracted from public/refs/mustache.svg.
const MUSTACHE_PATH =
  "M189.739,187.097c-2.77586,-1.1829 -5.60984,-2.39057 -8.59225,-2.84865c-3.89939,-0.598923 -8.20411,-0.178814 -11.5226,2.1003c-7.26288,4.98813 -9.35701,18.7544 -18.4266,21.0482c-3.94122,0.996804 -8.018,1.65436 -12.0833,1.65381c-3.11375,-0.000419674 -7.17531,-1.76895 -7.09568,-5.64058c0.0518263,-2.51977 1.15888,-4.93586 2.18161,-7.23933c0.364304,-0.820513 1.15904,-1.39596 1.88619,-1.92247c-1.7929,0.94261 -3.62028,1.90335 -5.13769,3.24516c-3.00126,2.65395 -4.62828,5.90287 -4.04632,10.068c0.916428,6.55898 7.78563,12.5211 14.1043,13.5664c8.45124,1.39805 22.9679,1.98826 32.3478,-0.138273c2.80456,-0.635822 5.52635,-1.73356 8.03729,-3.13533c3.09685,-1.72887 5.89018,-3.9672 8.65796,-6.18505c2.77125,2.12133 5.56279,4.2582 8.61685,5.94716c2.07688,1.14856 4.37777,1.87092 6.66508,2.50405c11.0895,3.0696 26.327,3.56418 37.1188,0.24011c9.63473,-2.96768 12.2903,-10.1945 10.4535,-19.7679c-0.608606,-3.17205 -2.58145,-4.2617 -5.24868,-5.95262c-0.835833,-0.529888 -1.78079,-0.87267 -2.71111,-1.21015c0,0 2.77126,1.97791 3.03185,3.82958c0.240686,1.71025 0.184302,2.65345 0.00351595,3.85357c-0.290775,1.93027 -0.301209,4.26185 -1.72623,5.59594c-2.47543,2.31749 -7.92537,3.06694 -11.3111,2.38072c-6.75962,-1.37007 -10.8243,-8.75711 -15.2181,-12.8242c-4.14822,-3.83977 -8.15979,-7.8986 -12.812,-11.1093c-3.43238,-2.3689 -7.3223,-2.0709 -10.9738,-0.835966c-2.06241,0.697493 -3.99424,1.74705 -5.90729,2.78641";

/**
 * Watermark logo: traced serif CR monogram + classic curling mustache.
 *
 * Animation arc (5s total):
 *   0.00 - 0.30s  fade in
 *   0.10 - 1.80s  CR outline writes on
 *   1.10 - 2.00s  CR fills in (cross-fade outline → fill)
 *   0.30 - 0.90s  Mustache fades in
 *   0.30 - 1.90s  Mustache tips rotate (pivot at inner edge, center fixed)
 *   1.90 - 2.10s  Tips settle to rest
 *   2.00 - 5.00s  Frozen — logo holds, no movement
 *
 * The mustache is split via SVG clip-paths into three bands:
 *   - left tip   (x=0..145)   — translates with bounce
 *   - center     (x=135..265) — never moves (fixed)
 *   - right tip  (x=255..400) — translates with mirrored bounce
 * Bands overlap by ~10px so joins remain invisible.
 */
export const WatermarkLogo: React.FC<Props> = ({
  color = "#1B1B1B",
  background = "transparent",
  mode = "standalone",
  size = 360,
  idSuffix = "default",
}) => {
  // Scale factor: in embedded mode `size` controls the CR width; the
  // mustache is sized proportionally to keep the same look as the standalone
  // preview (which uses width=360 for CR, 440 for mustache).
  const crWidth = size;
  const mustacheWidth = size * (440 / 360);
  const mustacheHeight = size * (170 / 360);
  const mustacheMarginTop = -size * (135 / 360);
  const leftClipId = `mustache-left-tip-${idSuffix}`;
  const centerClipId = `mustache-center-${idSuffix}`;
  const rightClipId = `mustache-right-tip-${idSuffix}`;
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;

  // Master fade-in (no fade-out — logo holds for the rest of the duration)
  const opacity = interpolate(t, [0, 0.3], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // CR write-on
  const writeProgress = interpolate(t, [0.1, 1.8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const STROKE_LEN = 4000;
  const dashOffset = STROKE_LEN * (1 - writeProgress);

  // CR fill cross-fade
  const fillOpacity = interpolate(t, [1.1, 2.0], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const strokeOpacity = interpolate(t, [1.1, 2.0], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Mustache fade-in
  const mustacheOpacity = interpolate(t, [0.3, 0.9], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Tip rotation — active during the assembly, settles to 0 by t=2.0s, frozen after.
  // Each tip pivots around the inner edge where it joins the center band.
  // Small angle (±4°) keeps the seam invisible at the clip boundary.
  const settle = interpolate(t, [1.9, 2.1], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const wave = Math.sin(t * Math.PI * 4);
  const tipAngle = wave * 4 * settle; // degrees; negative = curls upward more
  // Pivot points in viewBox coords (y is the vertical mid-line of the mustache)
  const PIVOT_Y = 200;
  const LEFT_PIVOT_X = 142;
  const RIGHT_PIVOT_X = 258;

  const inner = (
    <div
      style={{
        opacity,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
      }}
    >
      {/* CR monogram — traced from reference */}
      <svg
        width={crWidth}
        height={crWidth}
        viewBox="0 0 288 288"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={CR_PATH}
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={STROKE_LEN}
          strokeDashoffset={dashOffset}
          opacity={strokeOpacity}
        />
        <path
          d={CR_PATH}
          fill={color}
          fillRule="evenodd"
          opacity={fillOpacity}
        />
      </svg>

      {/*
        Mustache split into three clipped bands.
        ViewBox 0..400 wide; bands overlap 10px to hide seams.
      */}
      <svg
        width={mustacheWidth}
        height={mustacheHeight}
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginTop: mustacheMarginTop, opacity: mustacheOpacity }}
      >
        <defs>
          <clipPath id={leftClipId}>
            <rect x={0} y={0} width={145} height={300} />
          </clipPath>
          <clipPath id={centerClipId}>
            <rect x={135} y={0} width={130} height={300} />
          </clipPath>
          <clipPath id={rightClipId}>
            <rect x={255} y={0} width={145} height={300} />
          </clipPath>
        </defs>

        {/* Center band — fixed, never moves */}
        <g clipPath={`url(#${centerClipId})`}>
          <g transform="matrix(2.82719,0,0,2.82719,-340.059,-408.763)">
            <path d={MUSTACHE_PATH} fill={color} />
          </g>
        </g>

        {/* Left tip — rotates around inner edge */}
        <g
          clipPath={`url(#${leftClipId})`}
          transform={`rotate(${-tipAngle} ${LEFT_PIVOT_X} ${PIVOT_Y})`}
        >
          <g transform="matrix(2.82719,0,0,2.82719,-340.059,-408.763)">
            <path d={MUSTACHE_PATH} fill={color} />
          </g>
        </g>

        {/* Right tip — mirrored rotation */}
        <g
          clipPath={`url(#${rightClipId})`}
          transform={`rotate(${tipAngle} ${RIGHT_PIVOT_X} ${PIVOT_Y})`}
        >
          <g transform="matrix(2.82719,0,0,2.82719,-340.059,-408.763)">
            <path d={MUSTACHE_PATH} fill={color} />
          </g>
        </g>
      </svg>
    </div>
  );

  if (mode === "embedded") {
    return inner;
  }

  return (
    <AbsoluteFill
      style={{
        background,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {inner}
    </AbsoluteFill>
  );
};
