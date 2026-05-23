"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitHeading from "@/components/ui/SplitHeading";
import GhostWatermark from "@/components/ui/GhostWatermark";
import MagneticButton from "@/components/ui/MagneticButton";
import { business, links } from "@/lib/data";
import { ArrowIcon, PhoneIcon } from "@/components/ui/SocialIcons";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);
  const ctasRef = useRef<HTMLDivElement | null>(null);
  const metaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      // Ken Burns subtle zoom — loops cinematic
      gsap.fromTo(
        img,
        { scale: 1, autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 1.4,
          ease: "power2.out",
        }
      );
      gsap.to(img, {
        scale: 1.05,
        duration: 8,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    }

    const tl = gsap.timeline({ delay: 0.4 });
    if (subRef.current) {
      tl.fromTo(
        subRef.current,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
        ">-0.1"
      );
    }
    if (ctasRef.current) {
      tl.fromTo(
        ctasRef.current.children,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
        },
        ">-0.2"
      );
    }
    if (metaRef.current) {
      tl.fromTo(
        metaRef.current.children,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.1 },
        ">-0.4"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100dvh", background: "var(--color-bg-dark)" }}
    >
      {/* Background image */}
      <div
        ref={imgRef}
        className="absolute inset-0 will-change-transform"
        style={{ transformOrigin: "center center" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=2800&q=92"
          alt="Barber giving a precision haircut at King's Cut barbershop in El Cajon"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Cinematic gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.35) 40%, rgba(10,10,10,0.85) 100%)",
          }}
        />
        {/* Side vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, transparent 40%, rgba(10,10,10,0.55) 100%)",
          }}
        />
      </div>

      {/* Ghost watermark */}
      <GhostWatermark text="King's Cut" opacity={0.045} />

      {/* Top hairline */}
      <div
        className="absolute top-[88px] md:top-[96px] left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(200,162,39,0.25), transparent)",
        }}
      />

      <div
        className="relative z-10 flex flex-col justify-center container-edge"
        style={{ minHeight: "100dvh", paddingTop: "8rem", paddingBottom: "5rem" }}
      >
        <div ref={metaRef} className="flex flex-col gap-3 mb-7">
          <div
            className="font-mono-ui text-[11px] tracking-[0.32em] text-[var(--color-accent)]"
          >
            EL CAJON · CALIFORNIA · EST. 2007
          </div>
          <div className="flex items-center gap-3">
            <div
              className="h-px w-12"
              style={{ background: "var(--color-accent)" }}
            />
            <span className="font-mono-ui text-[10px] tracking-[0.3em] text-[var(--color-text-light)] opacity-80">
              PREMIER BARBERSHOP
            </span>
          </div>
        </div>

        <SplitHeading
          as="h1"
          text="Your Cut."
          className="font-display text-display text-[var(--color-text-light)]"
          stagger={0.025}
          duration={0.9}
          delay={0.5}
        />
        <SplitHeading
          as="h1"
          text="Your Crown."
          className="font-display font-editorial text-display italic text-[var(--color-accent)] -mt-2 md:-mt-4"
          stagger={0.025}
          duration={0.9}
          delay={0.85}
        />

        <p
          ref={subRef}
          className="mt-8 max-w-xl text-body-lg text-[var(--color-text-light)] opacity-85 leading-relaxed"
        >
          Eighteen years on Jamacha Road. Precision haircuts, traditional shaves,
          and a chair for every age in the heart of East El Cajon.
        </p>

        <div ref={ctasRef} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton
            href={links.booking}
            variant="gold"
            external
            aria-label="Book your appointment online via Fresha"
          >
            Book Online
            <ArrowIcon size={14} />
          </MagneticButton>
          <MagneticButton
            href={business.phone.href}
            variant="outline"
            aria-label={`Call King's Cut at ${business.phone.display}`}
          >
            <PhoneIcon size={14} />
            Call {business.phone.display}
          </MagneticButton>
        </div>

        {/* Bottom hero meta strip */}
        <div className="absolute bottom-8 left-0 right-0 hidden md:block">
          <div className="container-edge flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <div className="font-mono-ui text-[10px] tracking-[0.28em] text-[var(--color-muted)]">
                FRAME · 01 / 08
              </div>
              <div className="font-mono-ui text-[10px] tracking-[0.28em] text-[var(--color-accent)]">
                HERO
              </div>
            </div>
            <a
              href="#services"
              className="group flex flex-col items-center gap-2 font-mono-ui text-[10px] tracking-[0.3em] text-[var(--color-text-light)]"
              aria-label="Scroll to services"
            >
              SCROLL
              <span className="block w-px h-12 bg-[var(--color-text-light)] opacity-50 group-hover:opacity-100 group-hover:bg-[var(--color-accent)] transition-all" />
            </a>
            <div className="text-right">
              <div className="font-mono-ui text-[10px] tracking-[0.28em] text-[var(--color-muted)]">
                YELP · 4.1★ · 116 REVIEWS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
