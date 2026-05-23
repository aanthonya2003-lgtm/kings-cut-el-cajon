"use client";

import Image from "next/image";
import Link from "next/link";
import { barbers } from "@/lib/data";
import Reveal from "@/components/animation/Reveal";
import { ArrowIcon } from "@/components/ui/SocialIcons";

export default function BarbersPreview() {
  const featured = barbers.slice(0, 3);
  return (
    <section
      className="relative py-24 md:py-32"
      style={{
        background: "var(--color-bg-light)",
        color: "var(--color-text-dark)",
      }}
    >
      <div className="container-edge">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="font-mono-ui text-[11px] tracking-[0.32em] text-[var(--color-crimson)] mb-4">
                THE CHAIRS
              </div>
              <h2 className="font-display text-h1 tracking-tight">
                Meet your
                <br />
                <span className="font-editorial italic text-[var(--color-crimson)]">
                  barbers.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-body-lg opacity-75">
              Each barber holds the chair to a single standard: precise, patient,
              honest about what your hair will and won&apos;t do.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.1}>
              <article className="group relative overflow-hidden card-hover">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={b.image}
                    alt={b.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.85) 100%)",
                    }}
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="font-mono-ui text-[10px] tracking-[0.28em] text-[var(--color-accent)] mb-2">
                      {b.role}
                    </div>
                    <h3 className="font-display text-4xl md:text-5xl tracking-tight">
                      {b.name}
                    </h3>
                  </div>
                </div>
                <div className="bg-white p-6 border border-t-0 border-black/10">
                  <p className="text-sm leading-relaxed opacity-78">{b.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <Link
              href="/barbers"
              className="inline-flex items-center gap-3 font-mono-ui text-[11px] tracking-[0.22em] uppercase text-[var(--color-crimson)] hover:gap-4 transition-all"
            >
              Meet the full team
              <ArrowIcon size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
