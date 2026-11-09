"use client";

import {
  ArrowRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { profile } from "@/data/profile";

function GitHubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem 1.25rem",
        background: "rgba(36, 81, 168, 0.1)",
        border: "1px solid var(--border)",
        borderRadius: "0.75rem",
        textDecoration: "none",
        transition: "all 200ms ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = "rgba(36, 81, 168, 0.2)";
        el.style.borderColor = "var(--border-hover)";
        el.style.transform = "translateX(4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = "rgba(36, 81, 168, 0.1)";
        el.style.borderColor = "var(--border)";
        el.style.transform = "translateX(0)";
      }}
    >
      {/* Icon container */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: "0.5rem", background: "rgba(36, 81, 168, 0.2)", color: "var(--accent)", flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>{label}</p>
        <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 500, marginTop: "0.1rem" }}>{value}</p>
      </div>
    </a>
  );
}

/* Contact Section */
export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="container">

        {/* Section header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p className="section-tag">Contact</p>
          <div className="divider" />
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-subtitle">
            I&apos;m always open to discussing new projects, interesting ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", maxWidth: 720 }}>

          {/* Contact options */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <ContactItem
              icon={<EnvelopeIcon style={{ width: 22, height: 22 }} />}
              label="Email"
              value={profile.email}
              href={`https://mail.google.com/mail/?view=cm&to=${profile.email}`}
            />
            <ContactItem
              icon={<LinkedInIcon />}
              label="LinkedIn"
              value="linkedin.com/in/glensofianpardede"
              href={profile.social.linkedin}
            />
            <ContactItem
              icon={<GitHubIcon />}
              label="GitHub"
              value="github.com/glensofian"
              href={profile.social.github}
            />
          </div>

          {/* CTA card */}
          <div style={{ padding: "2.5rem", background: "linear-gradient(135deg, rgba(18, 45, 94, 0.8), rgba(13, 33, 69, 0.9))", border: "1px solid var(--border-hover)", borderRadius: "1rem", textAlign: "center", boxShadow: "var(--glow-navy)" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
              <EnvelopeIcon style={{ width: 40, height: 40, color: "var(--accent)" }} aria-hidden />
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
              Ready to collaborate?
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Whether you have a project in mind or just want to say hello, my inbox is always open.
            </p>
            <a href={`https://mail.google.com/mail/?view=cm&to=${profile.email}`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-flex", justifyContent: "center" }}>
              Send a Message
              <ArrowRightIcon style={{ width: 16, height: 16 }} aria-hidden />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
