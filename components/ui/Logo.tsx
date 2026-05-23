import Link from "next/link";

type Variant = "full" | "mark" | "wordmark";
type Tone = "gold" | "light" | "dark";

export default function Logo({
  variant = "full",
  tone = "gold",
  className = "",
  href = "/",
}: {
  variant?: Variant;
  tone?: Tone;
  className?: string;
  href?: string | null;
}) {
  const color =
    tone === "gold"
      ? "var(--color-accent)"
      : tone === "light"
      ? "var(--color-text-light)"
      : "var(--color-text-dark)";

  const inner = (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
      style={{ color }}
    >
      {variant !== "wordmark" && (
        <svg
          viewBox="0 0 64 64"
          width="36"
          height="36"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          {/* Crown */}
          <path
            d="M8 22 L18 36 L24 18 L32 38 L40 18 L46 36 L56 22 L52 46 L12 46 Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Crown jewels */}
          <circle cx="8" cy="22" r="2" fill="currentColor" />
          <circle cx="32" cy="14" r="2.2" fill="currentColor" />
          <circle cx="56" cy="22" r="2" fill="currentColor" />
          {/* Base line */}
          <line
            x1="12"
            y1="50"
            x2="52"
            y2="50"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Scissor crossing inside crown */}
          <path
            d="M22 28 L42 38 M22 38 L42 28"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      )}
      {variant !== "mark" && (
        <span
          className="font-display leading-none"
          style={{
            fontSize: variant === "wordmark" ? "1.5rem" : "1.25rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          King&apos;s Cut
        </span>
      )}
    </span>
  );

  if (href === null) return inner;

  return (
    <Link
      href={href}
      aria-label="King's Cut — El Cajon's premier barbershop"
      className="inline-flex"
    >
      {inner}
    </Link>
  );
}
