"use client";

import {
  MapPinIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { profile } from "@/data/profile";

/* ── Icon map for info grid ────────────────────────────────── */
const INFO_ITEMS = [
  { icon: MapPinIcon,       label: "Location", value: profile.location },
  { icon: BriefcaseIcon,    label: "Role",     value: profile.role },
  { icon: EnvelopeIcon,     label: "Email",    value: profile.email },
  { icon: RocketLaunchIcon, label: "Status",   value: profile.availability },
] as const;

/* ── Stat card ─────────────────────────────────────────────── */
function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: "center", padding: "1.25rem 1rem", background: "rgba(36, 81, 168, 0.12)", border: "1px solid var(--border)", borderRadius: "0.75rem" }}>
      <p style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>{value}</p>
      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.35rem" }}>{label}</p>
    </div>
  );
}

/* ── About Section ─────────────────────────────────────────── */
export default function About() {
  return (
    <section id="about" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "center" }}>

          {/* Text content */}
          <div style={{ maxWidth: 680 }}>
            <p className="section-tag">About Me</p>
            <div className="divider" />
            <h2 className="section-title">
              Crafting elegant solutions with{" "}
              <span className="gradient-text">clean code</span>
            </h2>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, fontSize: "1rem", marginBottom: "1.25rem" }}>
              {profile.about}
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, fontSize: "1rem", marginBottom: "2rem" }}>
              I believe in building products that are not only functional but also maintainable and delightful to use. My approach combines a strong engineering foundation with an eye for design and user experience.
            </p>

            {/* Info grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
              {INFO_ITEMS.map(({ icon: Icon, label, value }) => (
                <div key={label} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <Icon style={{ width: 18, height: 18, color: "var(--accent)", marginTop: 2, flexShrink: 0 }} aria-hidden />
                  <div>
                    <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>{label}</p>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 500 }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                View GitHub
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
            <StatCard value="8+" label="Projects Built" />
            <StatCard value="3+"  label="Tech Stacks" />
            <StatCard value="2+"  label="Years Learning" />
          </div>

        </div>
      </div>
    </section>
  );
}
