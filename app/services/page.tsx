import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { servicesFull, services, business, links } from "@/lib/data";
import Reveal from "@/components/animation/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import GhostWatermark from "@/components/ui/GhostWatermark";
import BookCTA from "@/components/home/BookCTA";
import { ArrowIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Services & Pricing — Cuts, Shaves, Beard Trims",
  description:
    "Full King's Cut services menu: men's haircuts, kids haircuts, senior cuts, beard trims, straight razor shaves, head shaves, waxing, threading and facials. Verified service offerings.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services & Pricing — King's Cut El Cajon",
    description:
      "Cuts, shaves, beard sculpting, waxing and more. Walk-ins welcome, booking online via Fresha.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section
        className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden"
        style={{ background: "var(--color-bg-dark)" }}
      >
        <GhostWatermark text="Services" opacity={0.045} position="right" />
        <div className="container-edge relative">
          <div className="font-mono-ui text-[11px] tracking-[0.32em] text-[var(--color-accent)] mb-6">
            THE FULL MENU · 02 / 05
          </div>
          <SplitHeading
            as="h1"
            text="Services & Craft."
            className="font-display text-display text-[var(--color-text-light)] leading-[0.95]"
            stagger={0.025}
          />
          <Reveal>
            <p className="mt-8 max-w-2xl text-body-lg opacity-85">
              From classic men&apos;s haircuts to traditional straight-razor shaves
              — every service hand-done. Prices anchor at fair, never inflated.
              Call ahead for current rates or book directly on Fresha.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured services grid */}
      <section
        className="relative py-20 md:py-28"
        style={{
          background: "var(--color-bg-light)",
          color: "var(--color-text-dark)",
        }}
      >
        <div className="container-edge">
          <Reveal>
            <div className="font-mono-ui text-[11px] tracking-[0.32em] text-[var(--color-crimson)] mb-4">
              SIGNATURE SERVICES
            </div>
            <h2 className="font-display text-h2 mb-12 max-w-2xl leading-tight">
              Six chairs.{" "}
              <span className="font-editorial italic text-[var(--color-crimson)]">
                One standard.
              </span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.06}>
                <article
                  className="group relative overflow-hidden card-hover"
                  style={{
                    border: "1px solid rgba(13,13,13,0.08)",
                    background: "white",
                  }}
                >
                  <div className="relative aspect-[5/6] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.8) 100%)",
                      }}
                    />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <h3 className="font-display text-3xl md:text-4xl leading-none">
                        {s.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <p className="text-sm opacity-80 leading-relaxed">
                      {s.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-black/10">
                      <span className="font-mono-ui text-[10px] tracking-[0.22em] opacity-70">
                        {s.startingPrice}
                      </span>
                      <a
                        href={links.booking}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono-ui text-[10px] tracking-[0.22em] text-[var(--color-crimson)] inline-flex items-center gap-2"
                      >
                        BOOK
                        <ArrowIcon size={12} />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full menu by category */}
      <section
        className="relative py-24 md:py-32"
        style={{
          background: "var(--color-bg-dark)",
          color: "var(--color-text-light)",
        }}
      >
        <GhostWatermark text="Menu" opacity={0.04} position="left" />
        <div className="container-edge relative">
          <Reveal>
            <div className="text-center mb-14">
              <div className="font-mono-ui text-[11px] tracking-[0.32em] text-[var(--color-accent)] mb-4">
                THE FULL LIST
              </div>
              <h2 className="font-display text-h2 tracking-tight">
                Everything we do at the chair.
              </h2>
              <p className="mt-4 opacity-70 max-w-xl mx-auto">
                Prices vary by chair, length, and add-ons.
                <br />
                Confirm exact pricing in-shop or by phone.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-10">
            {servicesFull.map((cat, i) => (
              <Reveal key={cat.category} delay={i * 0.08}>
                <div
                  className="p-8 md:p-10 h-full"
                  style={{
                    background: "rgba(245,240,232,0.02)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <h3 className="font-display text-3xl mb-2 text-[var(--color-accent)]">
                    {cat.category}
                  </h3>
                  <div
                    className="h-px w-12 mb-7"
                    style={{ background: "var(--color-accent)" }}
                  />
                  <ul className="space-y-5">
                    {cat.items.map((item) => (
                      <li
                        key={item.name}
                        className="pb-5 border-b border-[var(--color-border)] last:border-0 last:pb-0"
                      >
                        <div className="flex items-baseline justify-between gap-3 mb-1">
                          <span className="font-display text-xl">
                            {item.name}
                          </span>
                          <span className="font-mono-ui text-[10px] tracking-[0.18em] text-[var(--color-accent)] whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-sm opacity-65">{item.note}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 text-center">
              <p className="font-editorial italic text-xl opacity-80 mb-6">
                Honest prices. No surprises at the counter.
              </p>
              <Link
                href="/book"
                className="btn-gold inline-flex items-center gap-2 px-7 py-4 font-mono-ui text-[11px] tracking-[0.22em] uppercase"
              >
                Reserve A Chair
                <ArrowIcon size={14} />
              </Link>
              <p className="mt-5 text-sm opacity-60">
                Or call{" "}
                <a
                  href={business.phone.href}
                  className="text-[var(--color-accent)] hover:underline"
                >
                  {business.phone.display}
                </a>{" "}
                with any questions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <BookCTA />
    </>
  );
}
