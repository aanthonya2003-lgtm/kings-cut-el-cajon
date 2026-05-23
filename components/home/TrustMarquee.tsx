"use client";

import { business } from "@/lib/data";

const items = [
  "Walk-Ins Welcome",
  "18 Years In El Cajon",
  "4.1★ Yelp Rating",
  "Fade · Shave · Beard Trim",
  "Family Barbershop",
  business.phone.display,
  "Royal Precision",
  "Tea & Coffee On The House",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  // Duplicate to make seamless loop
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex whitespace-nowrap ${
          reverse ? "marquee-track-reverse" : "marquee-track"
        }`}
        style={{ width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center px-8 py-6 font-display text-3xl md:text-5xl tracking-tight"
            style={{ color: i % 2 === 0 ? "var(--color-text-light)" : "var(--color-accent)" }}
          >
            {item}
            <span
              className="mx-8 inline-block w-2 h-2 rotate-45"
              style={{ background: "var(--color-accent)" }}
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TrustMarquee() {
  return (
    <section
      aria-label="Trust signals"
      className="relative py-12 md:py-16 border-y"
      style={{
        background: "var(--color-bg-dark)",
        borderColor: "rgba(200,162,39,0.18)",
      }}
    >
      <Row />
    </section>
  );
}
