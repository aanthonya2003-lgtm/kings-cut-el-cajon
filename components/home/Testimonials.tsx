"use client";

import { testimonials } from "@/lib/data";
import { StarIcon, YelpIcon } from "@/components/ui/SocialIcons";
import Reveal from "@/components/animation/Reveal";

function Card({
  quote,
  source,
  barber,
  rating,
}: (typeof testimonials)[number]) {
  return (
    <article
      className="shrink-0 w-[300px] md:w-[420px] mx-3 md:mx-4 p-7 md:p-9 flex flex-col gap-5"
      style={{
        background: "rgba(245, 240, 232, 0.03)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div className="flex items-center gap-2 text-[var(--color-accent)]">
        {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} size={14} />
        ))}
      </div>
      <p className="font-editorial italic text-lg md:text-xl leading-relaxed text-[var(--color-text-light)]">
        “{quote}”
      </p>
      <div className="mt-auto pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
        <div>
          <div className="font-mono-ui text-[10px] tracking-[0.22em] text-[var(--color-accent)]">
            {source}
          </div>
          {barber && (
            <div className="text-xs text-[var(--color-muted)] mt-1">
              On {barber}
            </div>
          )}
        </div>
        <YelpIcon size={20} className="text-[var(--color-crimson)]" />
      </div>
    </article>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];
  const reversed = [...testimonials].reverse();
  const doubledRev = [...reversed, ...reversed];

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "var(--color-bg-dark)",
        color: "var(--color-text-light)",
      }}
    >
      <div className="container-edge mb-12 md:mb-16">
        <Reveal>
          <div className="text-center">
            <div className="font-mono-ui text-[11px] tracking-[0.32em] text-[var(--color-accent)] mb-4">
              VOICES FROM THE CHAIR
            </div>
            <h2 className="font-display text-h2 tracking-tight">
              Sixteen years of regulars,
              <br />
              <span className="font-editorial italic text-[var(--color-accent)]">
                116 Yelp reviews.
              </span>
            </h2>
          </div>
        </Reveal>
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10"
          style={{
            background:
              "linear-gradient(90deg, var(--color-bg-dark) 0%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10"
          style={{
            background:
              "linear-gradient(270deg, var(--color-bg-dark) 0%, transparent 100%)",
          }}
        />

        <div className="overflow-hidden">
          <div
            className="flex marquee-track"
            style={{ width: "max-content" }}
          >
            {doubled.map((t, i) => (
              <Card key={`row1-${i}`} {...t} />
            ))}
          </div>
        </div>

        <div className="overflow-hidden mt-5">
          <div
            className="flex marquee-track-reverse"
            style={{ width: "max-content" }}
          >
            {doubledRev.map((t, i) => (
              <Card key={`row2-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>

      <div className="container-edge mt-14 text-center">
        <a
          href="https://www.yelp.com/biz/kings-cut-el-cajon"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-ui text-[11px] tracking-[0.22em] uppercase text-[var(--color-accent)] hover:text-[var(--color-accent-soft)] inline-flex items-center gap-2"
        >
          Read all reviews on Yelp →
        </a>
      </div>
    </section>
  );
}
