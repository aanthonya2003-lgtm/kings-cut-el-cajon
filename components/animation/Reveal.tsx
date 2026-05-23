"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  y?: number;
  duration?: number;
  delay?: number;
  className?: string;
  stagger?: number;
  start?: string;
  /** When true, children direct elements are individually staggered */
  childStagger?: boolean;
};

export default function Reveal({
  children,
  as: Tag = "div",
  y = 40,
  duration = 0.9,
  delay = 0,
  className = "",
  stagger = 0.08,
  start = "top 85%",
  childStagger = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets: Element[] = childStagger
      ? Array.from(el.children)
      : [el];

    gsap.set(targets, { y, opacity: 0 });

    const tween = gsap.to(targets, {
      y: 0,
      opacity: 1,
      duration,
      ease: "power3.out",
      delay,
      stagger: childStagger ? stagger : 0,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [y, duration, delay, stagger, start, childStagger]);

  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </Tag>
  );
}
