"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/data";
import { ArrowIcon } from "@/components/ui/SocialIcons";
import Reveal from "@/components/animation/Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesGrid() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll(".service-card");
    const tweens: gsap.core.Tween[] = [];

    cards.forEach((card, i) => {
      const img = card.querySelector(".service-card-img") as HTMLElement | null;

      // Clip-path reveal of card content
      gsap.set(card, { y: 60, opacity: 0 });
      const tween1 = gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: i * 0.08,
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
      tweens.push(tween1);

      // Clip-path wipe on the image
      if (img) {
        gsap.set(img, { clipPath: "inset(0 100% 0 0)" });
        const tween2 = gsap.to(img, {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power3.out",
          delay: i * 0.08 + 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
        tweens.push(tween2);
      }
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
      id="services"
      className="relative py-24 md:py-32"
      style={{
        background: "var(--color-bg-light)",
        color: "var(--color-text-dark)",
      }}
    >
      <div className="container-edge">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-20">
            <div>
              <div className="font-mono-ui text-[11px] tracking-[0.32em] text-[var(--color-crimson)] mb-4">
                THE SERVICES
              </div>
              <h2 className="font-display text-h1 tracking-tight">
                Cuts, shaves, and the
                <br />
                <span className="font-editorial text-[var(--color-crimson)]">
                  full chair experience.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-body-lg opacity-75">
              From fades and beard sculpting to traditional straight-razor shaves —
              every service is hand-done, never rushed.
            </p>
          </div>
        </Reveal>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7"
        >
          {services.map((service, i) => (
            <article
              key={service.id}
              className="service-card group relative overflow-hidden bg-white card-hover float-idle"
              style={{
                border: "1px solid rgba(13,13,13,0.08)",
                animationDelay: `${i * 0.4}s`,
              }}
            >
              <Link
                href="/services"
                className="block"
                aria-label={`Learn more about ${service.name}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className="service-card-img absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-1000 ease-[var(--ease-out-expo)] group-hover:scale-110"
                    />
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.85) 100%)",
                    }}
                  />
                  <div className="absolute top-5 left-5 font-mono-ui text-[10px] tracking-[0.28em] text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="font-display text-3xl md:text-4xl leading-none mb-1">
                      {service.name}
                    </h3>
                    <p
                      className="font-mono-ui text-[10px] tracking-[0.22em] opacity-80"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {service.short}
                    </p>
                  </div>
                </div>
                <div className="p-7 flex flex-col gap-4">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-dark)", opacity: 0.78 }}
                  >
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-black/10">
                    <span className="font-mono-ui text-[10px] tracking-[0.22em] opacity-70">
                      {service.startingPrice}
                    </span>
                    <span className="inline-flex items-center gap-2 font-mono-ui text-[10px] tracking-[0.22em] text-[var(--color-crimson)] group-hover:gap-3 transition-all">
                      DETAILS
                      <ArrowIcon size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 md:mt-16 flex flex-col md:flex-row items-center justify-between gap-5 pt-10 border-t border-black/10">
            <p className="font-editorial text-2xl text-[var(--color-text-dark)]">
              See the full service menu and pricing notes.
            </p>
            <Link
              href="/services"
              className="btn-gold inline-flex items-center gap-2 px-7 py-4 font-mono-ui text-[11px] tracking-[0.22em] uppercase"
            >
              All Services
              <ArrowIcon size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
