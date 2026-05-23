"use client";

import { useRef, useEffect, type ReactNode, type AnchorHTMLAttributes } from "react";
import { gsap } from "gsap";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "gold" | "outline";
  strength?: number;
  href: string;
  external?: boolean;
};

export default function MagneticButton({
  children,
  variant = "gold",
  strength = 0.4,
  href,
  external = false,
  className = "",
  ...rest
}: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Touch / coarse pointer: skip magnetic (per mandate)
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;

    let bounds: DOMRect | null = null;

    const onEnter = () => {
      bounds = el.getBoundingClientRect();
    };

    const onMove = (e: MouseEvent) => {
      if (!bounds) bounds = el.getBoundingClientRect();
      const x = e.clientX - bounds.left - bounds.width / 2;
      const y = e.clientY - bounds.top - bounds.height / 2;
      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const onLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.5)",
      });
      bounds = null;
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-4 font-mono-ui text-[12px] tracking-[0.18em] uppercase will-change-transform";
  const styleClass =
    variant === "gold" ? "btn-gold rounded-none" : "btn-outline-gold rounded-none";

  return (
    <a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${styleClass} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
