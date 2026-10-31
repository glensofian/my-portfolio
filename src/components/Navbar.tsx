"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";

/* ── Nav links config ──────────────────────────────────────── */
const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
] as const;

/* ── Hooks ─────────────────────────────────────────────────── */
function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return scrolled;
}

/* ── Component ─────────────────────────────────────────────── */
export default function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 300ms ease, backdrop-filter 300ms ease, border-color 300ms ease",
        background: scrolled ? "rgba(4, 13, 26, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(90, 140, 220, 0.18)" : "1px solid transparent",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>

        {/* Logo / Name */}
        <Link href="#home" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
            {profile.nickname}
            <span style={{ color: "var(--accent)", marginLeft: 2 }}>.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-secondary)", textDecoration: "none", transition: "color 150ms ease", letterSpacing: "0.02em" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)"; }}
            >
              {link.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="btn-primary" style={{ padding: "0.5rem 1.2rem", fontSize: "0.85rem" }}>
            Hire Me
          </a>
        </nav>

        {/* Hamburger (mobile) — uses Heroicons */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="hamburger-btn"
          onClick={() => setOpen((prev) => !prev)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "none", padding: 6, color: "var(--text-primary)" }}
        >
          {open
            ? <XMarkIcon style={{ width: 26, height: 26 }} aria-hidden />
            : <Bars3Icon style={{ width: 26, height: 26 }} aria-hidden />
          }
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{ background: "rgba(4, 13, 26, 0.97)", backdropFilter: "blur(20px)", borderTop: "1px solid var(--border)", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}
          className="mobile-drawer"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: "1rem", fontWeight: 500, color: "var(--text-secondary)", textDecoration: "none", padding: "0.5rem 0", borderBottom: "1px solid var(--border)" }}
            >
              {link.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="btn-primary" style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}>
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-drawer { display: none !important; }
        }
      `}</style>
    </header>
  );
}
