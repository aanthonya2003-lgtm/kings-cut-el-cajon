"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Stat = {
  value: number;
  suffix: string;
  label: string;
  decimal?: number;
};

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const counters = section.querySelectorAll<HTMLElement>(".stat-count");
    const tweens: gsap.core.Tween[] = [];

    counters.forEach((el) => {
      const target = parseFloat(el.dataset.target || "0");
      const decimals = parseInt(el.dataset.decimals || "0");
      const obj = { val: 0 };

      const tween = gsap.to(obj, {
        val: target,
        duration: 2.2,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = obj.val.toFixed(decimals);
        },
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          // BIDIRECTIONAL — counter plays AND reverses on scroll back
          toggleActions: "play none none reverse",
          onLeaveBack: () => {
            obj.val = 0;
            el.textContent = "0";
          },
        },
      });
      tweens.push(tween);
    });

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28"
      style={{
        background: "var(--color-bg-light)",
        color: "var(--color-text-dark)",
      }}
    >
      <div className="container-edge">
        <div className="text-center mb-12">
          <div className="font-mono-ui text-[11px] tracking-[0.32em] text-[var(--color-crimson)] mb-4">
            BY THE NUMBERS
          </div>
          <h2 className="font-display text-h2 tracking-tight max-w-3xl mx-auto">
            <span className="font-editorial italic text-[var(--color-crimson)]">
              East El Cajon
            </span>{" "}
            trusts the chair.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 gap-x-4 border-t border-b border-black/15">
          {stats.map((s: Stat, i) => (
            <div
              key={i}
              className={`py-10 md:py-14 px-4 text-center ${
                i < stats.length - 1
                  ? "md:border-r border-black/15"
                  : ""
              } ${
                i % 2 === 0 ? "border-r md:border-r border-black/15" : ""
              }`}
            >
              <div className="font-display text-6xl md:text-7xl lg:text-8xl leading-none mb-3 tracking-tight">
                <span
                  className="stat-count"
                  data-target={s.value}
                  data-decimals={s.decimal || 0}
                >
                  0
                </span>
                <span className="text-[var(--color-crimson)]">{s.suffix}</span>
              </div>
              <div className="font-mono-ui text-[11px] tracking-[0.22em] text-[var(--color-text-dark)] opacity-70">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-editorial text-2xl text-[var(--color-text-dark)] opacity-80">
            Every number above is earned, never bought.
          </p>
        </div>
      </div>
    </section>
  );
}
