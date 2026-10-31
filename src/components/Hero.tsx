"use client";

import Image from "next/image";
import {
  ArrowRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { profile } from "@/data/profile";

/* ── GitHub icon (not in Heroicons, keep as brand SVG) ─────── */
function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

/* ── LinkedIn icon (brand SVG) ─────────────────────────────── */
function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ── Social link button ────────────────────────────────────── */
function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "rgba(36, 81, 168, 0.15)",
        border: "1px solid var(--border)",
        color: "var(--text-secondary)",
        textDecoration: "none",
        transition: "all 200ms ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = "rgba(36, 81, 168, 0.35)";
        el.style.borderColor = "var(--navy-400)";
        el.style.color = "var(--text-primary)";
        el.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = "rgba(36, 81, 168, 0.15)";
        el.style.borderColor = "var(--border)";
        el.style.color = "var(--text-secondary)";
        el.style.transform = "translateY(0)";
      }}
    >
      {children}
    </a>
  );
}

/* ── Availability badge ────────────────────────────────────── */
function AvailabilityBadge() {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 1rem", background: "rgba(36, 81, 168, 0.12)", border: "1px solid rgba(96, 144, 223, 0.25)", borderRadius: "9999px" }}>
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80", animation: "pulse 2s infinite" }} />
      <span style={{ fontSize: "0.8rem", color: "var(--navy-200)", fontWeight: 500 }}>{profile.availability}</span>
      <style>{`@keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.5} }`}</style>
    </div>
  );
}

/* ── Profile photo (right column) ─────────────────────────── */
function ProfilePhoto() {
  return (
    <div
      className="animate-fade-in delay-300"
      style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", flexShrink: 0 }}
    >
      {/* Decorative outer ring */}
      <div aria-hidden style={{ position: "absolute", inset: -16, borderRadius: "50%", border: "1px solid rgba(96, 144, 223, 0.2)", animation: "spin-slow 18s linear infinite" }} />
      {/* Decorative dashed ring */}
      <div aria-hidden style={{ position: "absolute", inset: -32, borderRadius: "50%", border: "1px dashed rgba(200, 169, 110, 0.15)", animation: "spin-slow 28s linear infinite reverse" }} />

      {/* Photo frame */}
      <div style={{ position: "relative", width: 340, height: 340, borderRadius: "50%", overflow: "hidden", border: "3px solid rgba(96, 144, 223, 0.35)", boxShadow: "0 0 60px rgba(36, 81, 168, 0.4), 0 0 120px rgba(36, 81, 168, 0.15)" }}>
        <Image
          src="/images/Glen.png"
          alt={`Photo of ${profile.name}`}
          fill
          sizes="340px"
          style={{ objectFit: "cover", objectPosition: "center 45%" }}
          priority
        />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(7,20,39,0.45) 100%)" }} />
      </div>

      {/* Accent dot — top right */}
      <div aria-hidden style={{ position: "absolute", top: 12, right: 12, width: 16, height: 16, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 18px var(--accent)" }} />

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

/* ── Hero Section ──────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="home"
      className="dot-grid"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: "80px" }}
    >
      {/* Background glow orbs */}
      <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "15%", left: "-10%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(36,81,168,0.25) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,169,110,0.1) 0%, transparent 70%)", filter: "blur(40px)" }} />
      </div>

      <div
        className="container"
        style={{ position: "relative", zIndex: 1, paddingBlock: "4rem", display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "center" }}
      >
        {/* ── Left: Text content ──────────────────────────── */}
        <div>
          <div className="animate-fade-in-up" style={{ marginBottom: "1.75rem" }}>
            <AvailabilityBadge />
          </div>

          {/* Greeting + Name */}
          <div className="animate-fade-in-up delay-100" style={{ marginBottom: "1rem" }}>
            <p style={{ fontSize: "1rem", color: "var(--accent)", fontWeight: 500, marginBottom: "0.5rem", letterSpacing: "0.05em" }}>
              Hi, I&rsquo;m
            </p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 4.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "var(--text-primary)" }}>
              {profile.name}
            </h1>
          </div>

          {/* Role */}
          <div className="animate-fade-in-up delay-200" style={{ marginBottom: "1.5rem" }}>
            <p className="gradient-text" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 2.5vw, 1.75rem)", fontWeight: 500, fontStyle: "italic" }}>
              {profile.headline}
            </p>
          </div>

          {/* Short bio */}
          <p className="animate-fade-in-up delay-300" style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: 520, marginBottom: "2.5rem" }}>
            {profile.about}
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up delay-400" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRightIcon style={{ width: 16, height: 16 }} aria-hidden />
            </a>
            <a href={`mailto:${profile.email}`} className="btn-outline">
              <EnvelopeIcon style={{ width: 16, height: 16 }} aria-hidden />
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div className="animate-fade-in-up delay-500" style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginRight: "0.25rem" }}>Find me on</span>
            <SocialLink href={profile.social.github} label="GitHub profile">
              <GitHubIcon size={18} />
            </SocialLink>
            <SocialLink href={profile.social.linkedin} label="LinkedIn profile">
              <LinkedInIcon size={18} />
            </SocialLink>
            <SocialLink href={`mailto:${profile.email}`} label="Send email">
              <EnvelopeIcon style={{ width: 18, height: 18 }} aria-hidden />
            </SocialLink>
          </div>
        </div>

        {/* ── Right: Profile photo ─────────────────────── */}
        <ProfilePhoto />
      </div>

      {/* Scroll indicator */}
      <div aria-hidden style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", animation: "float 2.5s ease-in-out infinite" }}>
        <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>SCROLL</span>
        <ChevronDownIcon style={{ width: 18, height: 18, color: "var(--navy-400)" }} aria-hidden />
      </div>

      {/* Responsive: stack photo below text on mobile */}
      <style>{`
        @media (max-width: 768px) {
          #home .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          #home .container > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          #home .container > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
