"use client";

import MagneticButton from "@/components/ui/MagneticButton";
import { business, links } from "@/lib/data";
import {
  ArrowIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/ui/SocialIcons";
import GhostWatermark from "@/components/ui/GhostWatermark";
import Reveal from "@/components/animation/Reveal";

export default function BookCTA() {
  return (
    <section
      className="relative py-28 md:py-36 overflow-hidden"
      style={{
        background: "var(--color-bg-dark)",
        color: "var(--color-text-light)",
      }}
    >
      <GhostWatermark text="Book Now" opacity={0.05} />

      <div className="container-edge relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal as="div" childStagger className="lg:col-span-7 space-y-6">
            <div className="font-mono-ui text-[11px] tracking-[0.32em] text-[var(--color-accent)]">
              READY WHEN YOU ARE
            </div>
            <h2 className="font-display text-h1 leading-[0.95] tracking-tight">
              Ready for your
              <br />
              <span className="font-editorial italic text-[var(--color-accent)]">
                best cut yet?
              </span>
            </h2>
            <p className="text-body-lg opacity-85 max-w-xl leading-relaxed">
              Walk-ins are always welcome. Booking ahead guarantees your time and
              your barber. Either way — the chair is ready.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <MagneticButton href={links.booking} variant="gold" external>
                Book Online
                <ArrowIcon size={14} />
              </MagneticButton>
              <MagneticButton href={business.phone.href} variant="outline">
                <PhoneIcon size={14} />
                Call Now
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal as="aside" childStagger className="lg:col-span-5 space-y-6">
            <div
              className="p-8 md:p-10"
              style={{
                background: "rgba(245,240,232,0.03)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <ClockIcon className="text-[var(--color-accent)]" />
                <h3 className="font-mono-ui text-[11px] tracking-[0.28em] text-[var(--color-accent)]">
                  HOURS
                </h3>
              </div>
              <ul className="space-y-3">
                {business.hoursSummary.map((h) => (
                  <li
                    key={h.label}
                    className="flex items-center justify-between font-display text-xl"
                  >
                    <span>{h.label}</span>
                    <span className="text-[var(--color-text-light)] opacity-80 font-mono-ui text-sm tracking-wider">
                      {h.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-8 md:p-10"
              style={{
                background: "rgba(245,240,232,0.03)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <MapPinIcon className="text-[var(--color-accent)]" />
                <h3 className="font-mono-ui text-[11px] tracking-[0.28em] text-[var(--color-accent)]">
                  WHERE WE ARE
                </h3>
              </div>
              <p className="font-display text-2xl leading-tight mb-3">
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state}{" "}
                {business.address.zip}
              </p>
              <a
                href={links.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono-ui text-[11px] tracking-[0.22em] text-[var(--color-accent)] hover:gap-3 transition-all"
              >
                GET DIRECTIONS
                <ArrowIcon size={12} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Map embed */}
      <div className="container-edge mt-16">
        <Reveal>
          <div
            className="relative w-full aspect-[16/6] overflow-hidden"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <iframe
              src={links.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="King's Cut location on Google Maps"
              className="absolute inset-0 w-full h-full"
              style={{ filter: "invert(0.92) hue-rotate(180deg) brightness(0.85) contrast(1.1)" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
