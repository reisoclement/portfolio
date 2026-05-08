type Country = "FR" | "RO" | "PL";

const FLAGS: Record<
  Country,
  { kind: "vertical" | "horizontal"; stripes: string[] }
> = {
  // France: vertical blue / white / red
  FR: { kind: "vertical", stripes: ["#0055A4", "#FFFFFF", "#EF4135"] },
  // Romania: vertical blue / yellow / red
  RO: { kind: "vertical", stripes: ["#002B7F", "#FCD116", "#CE1126"] },
  // Poland: horizontal white / red
  PL: { kind: "horizontal", stripes: ["#FFFFFF", "#DC143C"] },
};

export const Flag: React.FC<{ country: Country; height?: number }> = ({
  country,
  height = 44,
}) => {
  const flag = FLAGS[country];
  const width = Math.round(height * 1.5);
  const stripeCount = flag.stripes.length;

  return (
    <div
      style={{
        width,
        height,
        display: "flex",
        flexDirection: flag.kind === "vertical" ? "row" : "column",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.35)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {flag.stripes.map((color, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            background: color,
            // small inner separator on light/light stripes (Poland) for definition
            borderRight:
              flag.kind === "vertical" && i < stripeCount - 1 && color === "#FFFFFF"
                ? "1px solid rgba(0,0,0,0.04)"
                : undefined,
          }}
        />
      ))}
    </div>
  );
};
