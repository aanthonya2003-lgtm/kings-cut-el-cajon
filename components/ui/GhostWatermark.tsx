export default function GhostWatermark({
  text,
  className = "",
  opacity = 0.05,
  position = "center",
}: {
  text: string;
  className?: string;
  opacity?: number;
  position?: "center" | "left" | "right";
}) {
  const justify =
    position === "center"
      ? "justify-center"
      : position === "left"
      ? "justify-start"
      : "justify-end";
  return (
    <div
      className={`pointer-events-none select-none absolute inset-0 flex items-center ${justify} overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <span
        className="font-display whitespace-nowrap leading-none"
        style={{
          fontSize: "clamp(120px, 22vw, 320px)",
          letterSpacing: "0.18em",
          opacity,
          color: "var(--color-accent)",
          textTransform: "uppercase",
        }}
      >
        {text}
      </span>
    </div>
  );
}
