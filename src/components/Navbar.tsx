"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";

/* Nav links config */
const NAV_LINKS = [
  { label: "About",      href: "#about",      section: "about" },
  { label: "Experience", href: "#experience", section: "experience" },
  { label: "Projects",   href: "#projects",   section: "projects" },
  { label: "CV",         href: "#cv",         section: "cv" },
  { label: "Contact",    href: "#contact",    section: "contact" },
] as const;

/* Scroll hook — fade on scroll-down, show on scroll-up / stop */
function useNavVisibility() {
  const [opacity, setOpacity]   = useState(1);
  const [atTop,   setAtTop]     = useState(true);
  const lastY      = useRef(0);
  const stopTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setAtTop(y < 20);

      if (y < 60) {
        // Near top — always fully visible
        setOpacity(1);
      } else if (y > lastY.current) {
        // Scrolling DOWN → fade out
        setOpacity(0.5);
      } else {
        // Scrolling UP → immediately show
        setOpacity(0.5);
      }

      lastY.current = y;

      if (stopTimer.current) clearTimeout(stopTimer.current);
      stopTimer.current = setTimeout(() => {
        // Scroll has stopped → bring navbar back
        setOpacity(1);
      }, 400);
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
      if (stopTimer.current) clearTimeout(stopTimer.current);
    };
  }, []);

  return { opacity, atTop };
}

/* Active section hook (IntersectionObserver) */
function useActiveSection(sections: readonly string[]) {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    };

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(handleIntersect, {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      });
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return active;
}

/* Component */
export default function Navbar() {
  const { opacity, atTop } = useNavVisibility();
  const [open, setOpen]     = useState(false);
  const allSections = ["home", ...NAV_LINKS.map((l) => l.section)] as const;
  const activeSection = useActiveSection(allSections);

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
        opacity,
        transition:
          "opacity 300ms cubic-bezier(0.4,0,0.2,1), border-color 300ms ease",
        background: "rgba(4, 13, 26, 0.88)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: atTop
          ? "1px solid transparent"
          : "1px solid rgba(90, 140, 220, 0.18)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo / Name */}
        <Link href="#home" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            {profile.nickname}
            <span style={{ color: "var(--accent)", marginLeft: 2 }}>.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary navigation"
          style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.section;
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 150ms ease, background 150ms ease",
                  letterSpacing: "0.02em",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "0.5rem",
                  position: "relative",
                  background: isActive
                    ? "rgba(58, 107, 201, 0.15)"
                    : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--text-secondary)";
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 2,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "55%",
                      height: 2,
                      background: "var(--accent)",
                      borderRadius: 2,
                      boxShadow: "0 0 8px var(--accent)",
                    }}
                  />
                )}
              </a>
            );
          })}
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${profile.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "0.5rem 1.2rem", fontSize: "0.85rem", marginLeft: "0.75rem" }}
          >
            Hire Me
          </a>
        </nav>

        {/* Hamburger (mobile) */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="hamburger-btn"
          onClick={() => setOpen((prev) => !prev)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            padding: 6,
            color: "var(--text-primary)",
          }}
        >
          {open ? (
            <XMarkIcon style={{ width: 26, height: 26 }} aria-hidden />
          ) : (
            <Bars3Icon style={{ width: 26, height: 26 }} aria-hidden />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            background: "rgba(4, 13, 26, 0.97)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid var(--border)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
          className="mobile-drawer"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.section;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  textDecoration: "none",
                  padding: "0.6rem 0.75rem",
                  borderRadius: "0.5rem",
                  borderBottom: "1px solid var(--border)",
                  background: isActive
                    ? "rgba(58, 107, 201, 0.12)"
                    : "transparent",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                {isActive && (
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      boxShadow: "0 0 6px var(--accent)",
                    }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${profile.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
          >
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav    { display: none !important; }
          .hamburger-btn  { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-drawer  { display: none !important; }
        }
      `}</style>
    </header>
  );
}
