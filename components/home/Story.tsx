"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GhostWatermark from "@/components/ui/GhostWatermark";
import { links } from "@/lib/data";
import { ArrowIcon } from "@/components/ui/SocialIcons";
import Reveal from "@/components/animation/Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Story() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imgWrapRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imgWrap = imgWrapRef.current;
    const img = imgRef.current;
    if (!section || !imgWrap || !img) return;

    // Parallax — image moves at 0.6x scroll speed (slower than page)
    const parallax = gsap.fromTo(
      img,
      { yPercent: -10 },
      {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // Clip-path wipe reveal
    gsap.set(imgWrap, { clipPath: "inset(0 100% 0 0)" });
    const wipe = gsap.to(imgWrap, {
      clipPath: "inset(0 0% 0 0)",
      duration: 1.4,
      ease: "power4.out",
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      parallax.scrollTrigger?.kill();
      parallax.kill();
      wipe.scrollTrigger?.kill();
      wipe.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background: "var(--color-bg-dark)",
        color: "var(--color-text-light)",
      }}
    >
      <GhostWatermark text="Precision" opacity={0.05} position="left" />

      <div className="container-edge relative grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div
            ref={imgWrapRef}
            className="relative aspect-[4/5] overflow-hidden"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <div ref={imgRef} className="absolute inset-[-10%] will-change-transform">
              <Image
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=2200&q=92"
                alt="Inside the King's Cut barbershop — clean, modern interior on Jamacha Road"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, rgba(10,10,10,0.5) 100%)",
                }}
              />
            </div>
            {/* Corner ornaments */}
            <span
              className="absolute top-3 left-3 w-4 h-4"
              style={{
                borderTop: "1px solid var(--color-accent)",
                borderLeft: "1px solid var(--color-accent)",
              }}
            />
            <span
              className="absolute top-3 right-3 w-4 h-4"
              style={{
                borderTop: "1px solid var(--color-accent)",
                borderRight: "1px solid var(--color-accent)",
              }}
            />
            <span
              className="absolute bottom-3 left-3 w-4 h-4"
              style={{
                borderBottom: "1px solid var(--color-accent)",
                borderLeft: "1px solid var(--color-accent)",
              }}
            />
            <span
              className="absolute bottom-3 right-3 w-4 h-4"
              style={{
                borderBottom: "1px solid var(--color-accent)",
                borderRight: "1px solid var(--color-accent)",
              }}
            />
          </div>
        </div>

        <Reveal as="div" childStagger className="lg:col-span-6 order-1 lg:order-2 space-y-6">
          <div className="font-mono-ui text-[11px] tracking-[0.32em] text-[var(--color-accent)]">
            EST. 2007 · 729 JAMACHA RD
          </div>
          <h2 className="font-display text-h1 leading-[0.95] tracking-tight">
            Eighteen years of
            <br />
            <span className="font-editorial italic text-[var(--color-accent)]">
              precision craft.
            </span>
          </h2>
          <p className="text-body-lg opacity-85 leading-relaxed max-w-xl">
            Maysam opened King&apos;s Cut in 2007 with one quiet promise: every
            chair, every cut, every shave done by hand and done right. Eighteen
            years later, the principle has not moved.
          </p>
          <p className="text-body-lg opacity-85 leading-relaxed max-w-xl">
            Clients drive in from National City for David. Regulars have aged
            with us since their first fade. Kids who got their first cut here
            now bring their own kids. That&apos;s East El Cajon. That&apos;s us.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href={links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold inline-flex items-center gap-2 px-7 py-4 font-mono-ui text-[11px] tracking-[0.22em] uppercase"
            >
              Book Your Cut
              <ArrowIcon size={14} />
            </a>
            <a
              href={links.yelp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-ui text-[11px] tracking-[0.22em] text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors uppercase inline-flex items-center gap-2"
            >
              Read 116 Yelp Reviews
              <ArrowIcon size={12} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
