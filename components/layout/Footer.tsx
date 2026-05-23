import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { business, links, navLinks } from "@/lib/data";
import {
  FacebookIcon,
  InstagramIcon,
  YelpIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer
      className="relative pt-24 pb-10"
      style={{
        background: "var(--color-bg-dark)",
        color: "var(--color-text-light)",
      }}
    >
      <div className="divider-gold mb-20" />
      <div className="container-edge">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-4">
            <Logo variant="full" tone="gold" href={null} />
            <p
              className="font-editorial text-2xl mt-6 mb-4"
              style={{ color: "var(--color-text-light)" }}
            >
              {business.tagline}
            </p>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--color-muted)" }}
            >
              El Cajon&apos;s premier barbershop since 2007. Precision cuts,
              traditional shaves, and a chair for every age.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-mono-ui text-[11px] tracking-[0.22em] text-[var(--color-accent)] mb-5">
              Visit
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-1 shrink-0 opacity-70" />
                <a
                  href={links.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.state}{" "}
                  {business.address.zip}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="opacity-70" />
                <a
                  href={business.phone.href}
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  {business.phone.display}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-mono-ui text-[11px] tracking-[0.22em] text-[var(--color-accent)] mb-5">
              Hours
            </h4>
            <ul className="space-y-2 text-sm">
              {business.hoursSummary.map((h) => (
                <li key={h.label} className="flex items-start gap-3">
                  <ClockIcon className="mt-0.5 opacity-70" size={14} />
                  <div>
                    <div className="font-medium">{h.label}</div>
                    <div className="text-[var(--color-muted)]">{h.value}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-mono-ui text-[11px] tracking-[0.22em] text-[var(--color-accent)] mb-5">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={links.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  Book on Fresha →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-gold mb-8" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <a
              href={links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="King's Cut on Facebook"
              className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="King's Cut on Instagram"
              className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={links.yelp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="King's Cut on Yelp"
              className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              <YelpIcon size={18} />
            </a>
          </div>

          <div
            className="font-mono-ui text-[10px] tracking-[0.2em] text-[var(--color-muted)] text-center md:text-right"
          >
            © 2025 King&apos;s Cut · {business.address.full} · Family owned ·
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
