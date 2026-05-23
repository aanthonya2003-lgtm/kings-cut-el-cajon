import type { Metadata } from "next";
import Image from "next/image";
import { galleryPhotos, links } from "@/lib/data";
import Reveal from "@/components/animation/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import GhostWatermark from "@/components/ui/GhostWatermark";
import BookCTA from "@/components/home/BookCTA";
import { ArrowIcon, InstagramIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Gallery — Cuts, Shaves & Inside the Shop",
  description:
    "Portfolio of recent cuts, fades, beard trims and the barbershop interior. King's Cut on Jamacha Road, El Cajon CA.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery — King's Cut",
    description:
      "Recent work from the chairs at King's Cut El Cajon.",
    url: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <section
        className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden"
        style={{ background: "var(--color-bg-dark)" }}
      >
        <GhostWatermark text="Gallery" opacity={0.045} />
        <div className="container-edge relative">
          <div className="font-mono-ui text-[11px] tracking-[0.32em] text-[var(--color-accent)] mb-6">
            THE WORK · 04 / 05
          </div>
          <SplitHeading
            as="h1"
            text="Recent Work."
            className="font-display text-display text-[var(--color-text-light)] leading-[0.95]"
          />
          <Reveal>
            <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <p className="max-w-2xl text-body-lg opacity-85">
                A look at the cuts, shaves, and the shop. For the daily feed,
                follow along on Instagram and Facebook.
              </p>
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono-ui text-[11px] tracking-[0.22em] uppercase text-[var(--color-accent)] hover:gap-3 transition-all"
              >
                <InstagramIcon size={14} />
                Daily on Instagram
                <ArrowIcon size={12} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="relative py-20 md:py-28"
        style={{
          background: "var(--color-bg-light)",
        }}
      >
        <div className="container-edge">
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px]"
          >
            {galleryPhotos.map((p, i) => (
              <Reveal
                key={i}
                delay={(i % 4) * 0.06}
                as="figure"
                className={`relative overflow-hidden group ${p.span}`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.85) 100%)",
                  }}
                />
                <figcaption
                  className="absolute bottom-3 left-3 right-3 font-mono-ui text-[10px] tracking-[0.22em] text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {String(i + 1).padStart(2, "0")} · KING&apos;S CUT
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookCTA />
    </>
  );
}
