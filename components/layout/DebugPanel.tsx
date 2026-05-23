"use client";

import { useEffect, useState } from "react";

export default function DebugPanel() {
  const [topPx, setTopPx] = useState(0);

  useEffect(() => {
    const update = () => setTopPx(Math.round(window.scrollY));
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="font-mono-ui fixed bottom-4 left-4 z-[60] text-[10px] leading-[1.4] text-[var(--color-muted)] pointer-events-none tabular-nums"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <div>FPS: 60</div>
      <div>TOP: {topPx} PX</div>
    </div>
  );
}
