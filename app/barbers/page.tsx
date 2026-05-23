import type { Metadata } from "next";
import Image from "next/image";
import { barbers, links } from "@/lib/data";
import Reveal from "@/components/animation/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import GhostWatermark from "@/components/ui/GhostWatermark";
import BookCTA from "@/components/home/BookCTA";
import { ArrowIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Meet The Barbers — Maysam, David, Omar, Manny, Methak",
  description:
    "King's Cut El Cajon barbers — Maysam (owner), David, Omar, Manny, Methak. Eighteen years of experience behind the chair on Jamacha Road.",
  alternates: { canonical: "/barbers" },
  openGraph: {
    title: "Meet The Barbers — King's Cut",
    description:
      "The team behind eighteen years of precision cuts on Jamacha Road.",
    url: "/barbers",
  },
};

export default function BarbersPage() {
  return (
    <>
      <section
        className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden"
        style={{ background: "var(--color-bg-dark)" }}
      >
        <GhostWatermark text="The Team" opacity={0.045} position="left" />
        <div className="container-edge relative">
          <div className="font-mono-ui text-[11px] tracking-[0.32em] text-[var(--color-accent)] mb-6">
            THE CHAIRS · 03 / 05
          </div>
          <SplitHeading
            as="h1"
            text="Meet the team."
            className="font-display text-display text-[var(--color-text-light)] leading-[0.95]"
          />
          <Reveal>
            <p className="mt-8 max-w-2xl text-body-lg opacity-85">
              Five barbers. One standard. Whether you walk in or book, you&apos;re
              in a chair that&apos;s been earning its reputation for nearly two
              decades.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="relative py-20 md:py-28"
        style={{
          background: "var(--color-bg-light)",
          color: "var(--color-text-dark)",
        }}
      >
        <div className="container-edge">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {barbers.map((b, i) => (
              <Reveal key={b.name} delay={i * 0.06}>
                <article className="group relative overflow-hidden card-hover bg-white border border-black/10">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={b.image}
                      alt={b.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 55%, rgba(10,10,10,0.88) 100%)",
                      }}
                    />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="font-mono-ui text-[10px] tracking-[0.28em] text-[var(--color-accent)] mb-2">
                        {b.role}
                      </div>
                      <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-none">
                        {b.name}
                      </h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm opacity-80 leading-relaxed mb-5">
                      {b.bio}
                    </p>
                    <a
                      href={links.booking}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono-ui text-[10px] tracking-[0.22em] text-[var(--color-crimson)] inline-flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      BOOK WITH {b.name.toUpperCase()}
                      <ArrowIcon size={12} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookCTA />
    </>
  );
}
