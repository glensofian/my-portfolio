"use client";

import { profile } from "@/data/profile";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--navy-950)",
        borderTop: "1px solid var(--border)",
        padding: "2.5rem 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
            textAlign: "center",
          }}
        >
          {/* Logo */}
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            {profile.nickname}
            <span style={{ color: "var(--accent)" }}>.</span>
          </p>

          {/* Copyright */}
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
            &copy; {CURRENT_YEAR} {profile.name}. Built with Next.js &amp; TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}
