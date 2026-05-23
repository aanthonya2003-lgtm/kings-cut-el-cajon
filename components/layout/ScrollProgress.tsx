"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setPct(Math.min(100, Math.max(0, progress)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="font-mono-ui fixed top-4 right-4 z-[60] text-[11px] text-[var(--color-accent)] tabular-nums pointer-events-none"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <span className="opacity-60">SCROLL</span>{" "}
      <span className="font-medium">{pct.toFixed(0).padStart(3, "0")}%</span>
    </div>
  );
}
