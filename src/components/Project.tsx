"use client";

import {
  ArrowRightIcon,
  EnvelopeIcon,
  CodeBracketSquareIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { profile } from "@/data/profile";

/* ── Link button helper ────────────────────────────────────── */
function ProjectLink({ href, label }: { href: string; label: string }) {
  const isDisabled = !href || href === "-" || href === "Not Open Source";

  if (isDisabled) {
    return (
      <span
        title={href === "Not Open Source" ? "Not open source" : "Not available"}
        style={{ fontSize: "0.78rem", color: "var(--text-muted)", padding: "0.3rem 0.7rem", border: "1px solid var(--border)", borderRadius: "0.4rem", cursor: "not-allowed", opacity: 0.4 }}
      >
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.3rem",
        fontSize: "0.78rem",
        color: "var(--navy-200)",
        padding: "0.3rem 0.7rem",
        border: "1px solid var(--border)",
        borderRadius: "0.4rem",
        textDecoration: "none",
        transition: "all 150ms ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = "rgba(36,81,168,0.2)";
        el.style.borderColor = "var(--navy-400)";
        el.style.color = "var(--text-primary)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = "transparent";
        el.style.borderColor = "var(--border)";
        el.style.color = "var(--navy-200)";
      }}
    >
      <ArrowTopRightOnSquareIcon style={{ width: 11, height: 11 }} aria-hidden />
      {label}
    </a>
  );
}

/* Project card */
import Image from "next/image";
import { useState } from "react";
import { projects, type Project } from "@/data/project";

/* All unique categories */
const ALL_CATEGORIES = ["All", ...Array.from(new Set(projects.map((p) => p.category)))] as const;

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card" style={{ display: "flex", flexDirection: "column", gap: "1rem", overflow: "hidden", padding: 0 }}>

      {/* Thumbnail */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "var(--navy-900)", overflow: "hidden" }}>
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", transition: "transform 400ms ease" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CodeBracketSquareIcon style={{ width: 48, height: 48, color: "var(--navy-600)", opacity: 0.4 }} aria-hidden />
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "1.25rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
        <div>
          <p style={{ fontSize: "0.72rem", color: "var(--accent)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
            {project.category}
          </p>
          <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3 }}>
            {project.name}
          </h3>
        </div>

        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.65, flex: 1 }}>
          {project.description || "A project I worked on — details coming soon."}
        </p>

        {/* Tech badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {project.technologies.map((tech) => (
            <span key={tech} className="badge" style={{ fontSize: "0.7rem" }}>{tech}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.25rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border)" }}>
          <ProjectLink href={project.github}    label="GitHub" />
          <ProjectLink href={project.prototype} label="Prototype" />
          <ProjectLink href={project.demo}      label="Demo" />
        </div>
      </div>
    </article>
  );
}

/* Projects Section */
export default function Project() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <p className="section-tag">Portfolio</p>
          <div className="divider" />
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of things I&apos;ve built — from AI-powered apps to full-stack platforms.
          </p>
        </div>

        {/* Category filter */}
        <div role="tablist" aria-label="Filter projects by category" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
          {ALL_CATEGORIES.map((cat) => {
            const active = cat === activeCategory;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={active}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "0.4rem 1rem",
                  borderRadius: "9999px",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  border: "1px solid",
                  borderColor: active ? "var(--navy-400)" : "var(--border)",
                  background: active ? "rgba(36, 81, 168, 0.3)" : "transparent",
                  color: active ? "var(--text-primary)" : "var(--text-muted)",
                  transition: "all 150ms ease",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
