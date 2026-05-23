"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Logo";
import { links, navLinks, business } from "@/lib/data";
import { PhoneIcon } from "@/components/ui/SocialIcons";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
        style={{
          background: scrolled
            ? "rgba(10,10,10,0.78)"
            : "linear-gradient(to bottom, rgba(10,10,10,0.55), transparent)",
          backdropFilter: scrolled ? "blur(16px) saturate(140%)" : "blur(4px)",
          WebkitBackdropFilter: scrolled
            ? "blur(16px) saturate(140%)"
            : "blur(4px)",
          borderBottom: scrolled
            ? "1px solid rgba(200, 162, 39, 0.18)"
            : "1px solid transparent",
        }}
      >
        <div className="container-edge flex items-center justify-between py-4 md:py-5">
          <Logo variant="full" tone="gold" />

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative font-mono-ui text-[11px] tracking-[0.22em] uppercase transition-colors"
                  style={{
                    color: active
                      ? "var(--color-accent)"
                      : "var(--color-text-light)",
                  }}
                >
                  {l.label}
                  {active && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ background: "var(--color-accent)" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={business.phone.href}
              className="hidden md:inline-flex items-center gap-2 font-mono-ui text-[11px] tracking-[0.18em] text-[var(--color-text-light)] hover:text-[var(--color-accent)] transition-colors"
            >
              <PhoneIcon size={14} />
              {business.phone.display}
            </a>
            <a
              href={links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center px-5 py-2.5 font-mono-ui text-[11px] tracking-[0.18em] uppercase"
            >
              Book Now
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="lg:hidden inline-flex flex-col items-center justify-center w-10 h-10 ml-1"
            >
              <span
                className={`block w-5 h-px bg-current transition-transform duration-300 ${
                  mobileOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
                style={{ color: "var(--color-text-light)" }}
              />
              <span
                className={`block w-5 h-px bg-current mt-1.5 transition-transform duration-300 ${
                  mobileOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
                style={{ color: "var(--color-text-light)" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: "rgba(10,10,10,0.97)" }}
          >
            <div className="container-edge pt-32 pb-12">
              <nav className="flex flex-col gap-7">
                {navLinks.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={l.href}
                      className="font-display text-5xl tracking-tight"
                      style={{
                        color:
                          pathname === l.href
                            ? "var(--color-accent)"
                            : "var(--color-text-light)",
                      }}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.35 }}
                  className="mt-10 flex flex-col gap-3"
                >
                  <a
                    href={business.phone.href}
                    className="font-mono-ui text-sm text-[var(--color-text-light)] flex items-center gap-2"
                  >
                    <PhoneIcon size={14} />
                    {business.phone.display}
                  </a>
                  <a
                    href={links.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-flex items-center justify-center w-full px-5 py-4 font-mono-ui text-[11px] tracking-[0.18em] uppercase"
                  >
                    Book Online — Fresha
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
