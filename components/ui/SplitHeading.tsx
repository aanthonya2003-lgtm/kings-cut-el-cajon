"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Lightweight SplitText alternative.
 * Splits text into character spans, then runs a stagger reveal.
 * - Triggered on mount for hero headlines (immediate)
 * - Or via ScrollTrigger when `trigger` is true
 * Reveal is bidirectional via ScrollTrigger when applicable.
 */
export default function SplitHeading({
  as: Tag = "h1",
  text,
  className = "",
  stagger = 0.03,
  duration = 0.9,
  delay = 0.1,
  triggerOnScroll = false,
}: {
  as?: React.ElementType;
  text: string;
  className?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  triggerOnScroll?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = el.querySelectorAll(".split-char");
    if (chars.length === 0) return;

    gsap.set(chars, { yPercent: 110, opacity: 0 });

    if (triggerOnScroll) {
      const tween = gsap.to(chars, {
        yPercent: 0,
        opacity: 1,
        duration,
        ease: "power4.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }

    const tween = gsap.to(chars, {
      yPercent: 0,
      opacity: 1,
      duration,
      ease: "power4.out",
      stagger,
      delay,
    });

    return () => {
      tween.kill();
    };
  }, [stagger, duration, delay, triggerOnScroll, text]);

  // Split by words first, then chars, preserving spaces
  const words = text.split(" ");

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={className}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span
          key={`${word}-${wi}`}
          className="inline-block whitespace-nowrap reveal-mask"
          aria-hidden="true"
          style={{ marginRight: wi < words.length - 1 ? "0.25em" : 0 }}
        >
          {word.split("").map((char, ci) => (
            <span
              key={`${char}-${ci}`}
              className="split-char"
              style={{ display: "inline-block" }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
