import type { Metadata } from "next";
import { business, links } from "@/lib/data";
import Reveal from "@/components/animation/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import GhostWatermark from "@/components/ui/GhostWatermark";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  ArrowIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Book An Appointment — Online or Walk-In",
  description:
    "Book your appointment at King's Cut El Cajon online via Fresha — or walk in any day during business hours. Call (619) 334-6665 for assistance.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book At King's Cut — Online or Walk-In",
    description: "Reserve your chair on Fresha or walk in to 729 Jamacha Rd.",
    url: "/book",
  },
};

export default function BookPage() {
  return (
    <>
      <section
        className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden"
        style={{ background: "var(--color-bg-dark)" }}
      >
        <GhostWatermark text="Reserve" opacity={0.045} position="right" />
        <div className="container-edge relative">
          <div className="font-mono-ui text-[11px] tracking-[0.32em] text-[var(--color-accent)] mb-6">
            BOOKING · 05 / 05
          </div>
          <SplitHeading
            as="h1"
            text="Reserve your chair."
            className="font-display text-display text-[var(--color-text-light)] leading-[0.95]"
          />
          <Reveal>
            <p className="mt-8 max-w-2xl text-body-lg opacity-85">
              Two ways to get cut. Reserve online to guarantee your time and
              your barber, or walk in any day during business hours — we&apos;ll
              find a chair.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="relative py-24 md:py-32"
        style={{
          background: "var(--color-bg-light)",
          color: "var(--color-text-dark)",
        }}
      >
        <div className="container-edge">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Online booking */}
            <Reveal>
              <article
                className="relative p-10 md:p-14 h-full flex flex-col bg-white"
                style={{ border: "1px solid rgba(13,13,13,0.1)" }}
              >
                <div className="font-mono-ui text-[11px] tracking-[0.32em] text-[var(--color-crimson)] mb-4">
                  OPTION 01
                </div>
                <h2 className="font-display text-h2 leading-none mb-5">
                  Book Online.
                </h2>
                <p className="font-editorial text-xl opacity-80 mb-6">
                  Fresha · live calendar · reserve your time
                </p>
                <ul className="text-sm space-y-2 opacity-80 mb-8">
                  <li>· Pick your barber</li>
                  <li>· Choose your service</li>
                  <li>· Confirm in under a minute</li>
                  <li>· Reminders by SMS or email</li>
                </ul>
                <div className="mt-auto">
                  <MagneticButton
                    href={links.booking}
                    variant="gold"
                    external
                    aria-label="Book your appointment online via Fresha"
                  >
                    Open Fresha Booking
                    <ArrowIcon size={14} />
                  </MagneticButton>
                </div>
              </article>
            </Reveal>

            {/* Walk-in / call */}
            <Reveal delay={0.1}>
              <article
                className="relative p-10 md:p-14 h-full flex flex-col"
                style={{
                  background: "var(--color-bg-dark)",
                  color: "var(--color-text-light)",
                }}
              >
                <div className="font-mono-ui text-[11px] tracking-[0.32em] text-[var(--color-accent)] mb-4">
                  OPTION 02
                </div>
                <h2 className="font-display text-h2 leading-none mb-5">
                  Walk in.
                </h2>
                <p className="font-editorial text-xl opacity-85 mb-6">
                  Always welcome · no pressure · find a chair
                </p>

                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="mt-1 text-[var(--color-accent)] shrink-0" />
                    <div>
                      <div className="font-display text-lg leading-tight">
                        {business.address.street}
                      </div>
                      <div className="text-sm opacity-70">
                        {business.address.city}, {business.address.state}{" "}
                        {business.address.zip}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ClockIcon className="mt-1 text-[var(--color-accent)] shrink-0" />
                    <div>
                      {business.hoursSummary.map((h) => (
                        <div key={h.label} className="text-sm">
                          <span className="font-medium">{h.label}:</span>{" "}
                          <span className="opacity-80">{h.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PhoneIcon className="mt-1 text-[var(--color-accent)] shrink-0" />
                    <a
                      href={business.phone.href}
                      className="font-display text-lg hover:text-[var(--color-accent)] transition-colors"
                    >
                      {business.phone.display}
                    </a>
                  </div>
                </div>

                <div className="mt-auto">
                  <MagneticButton
                    href={business.phone.href}
                    variant="outline"
                    aria-label={`Call King's Cut at ${business.phone.display}`}
                  >
                    <PhoneIcon size={14} />
                    Call {business.phone.display}
                  </MagneticButton>
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-14 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Family Friendly",
                  body: "Kids welcome. Patient with first-timers, calm with the regulars.",
                },
                {
                  title: "Accessible",
                  body: "Wheelchair-accessible parking, entrance, and restroom.",
                },
                {
                  title: "Complimentary",
                  body: "Tea & coffee while you wait. Sports on the TVs.",
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className="p-7 bg-white border border-black/10"
                >
                  <div className="font-mono-ui text-[10px] tracking-[0.22em] text-[var(--color-crimson)] mb-3">
                    AT THE SHOP
                  </div>
                  <h3 className="font-display text-2xl mb-2">{b.title}</h3>
                  <p className="text-sm opacity-80">{b.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section
        className="relative pb-24 md:pb-32"
        style={{
          background: "var(--color-bg-light)",
        }}
      >
        <div className="container-edge">
          <Reveal>
            <div
              className="relative w-full aspect-[16/7] overflow-hidden"
              style={{ border: "1px solid rgba(13,13,13,0.15)" }}
            >
              <iframe
                src={links.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="King's Cut location on Google Maps"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
