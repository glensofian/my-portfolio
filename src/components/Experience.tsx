"use client";

import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  CogIcon,
  CircleStackIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { experiences, type Experience } from "@/data/experiences";
import { skillCategories } from "@/data/skills";
import type { ComponentType } from "react";

/* Heroicon component */
const ICON_MAP: Record<string, ComponentType<{ style?: React.CSSProperties; "aria-hidden"?: boolean }>> = {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  CogIcon,
  CircleStackIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
};

/* Type badge color map */
const TYPE_COLORS: Record<Experience["type"], { bg: string; color: string }> = {
  "Full-time":    { bg: "rgba(36, 81, 168, 0.3)",   color: "var(--navy-200)" },
  "Internship":   { bg: "rgba(200, 169, 110, 0.2)", color: "var(--accent-light)" },
  "Part-time":    { bg: "rgba(36, 81, 168, 0.2)",   color: "var(--navy-200)" },
  "Organization": { bg: "rgba(74, 222, 128, 0.15)", color: "#86efac" },
  "Freelance":    { bg: "rgba(167, 139, 250, 0.2)", color: "#c4b5fd" },
};

/* Experience card */
function ExperienceCard({ exp }: { exp: Experience }) {
  const typeStyle = TYPE_COLORS[exp.type];
  return (
    <article className="card" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap" }}>
        <div>
          <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
            {exp.role}
          </h3>
          <p style={{ fontSize: "0.9rem", color: "var(--accent)", fontWeight: 500 }}>{exp.company}</p>
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
            {exp.location} &middot; {exp.startDate} — {exp.current ? "Present" : exp.endDate}
          </p>
        </div>
        <span style={{ padding: "0.25rem 0.7rem", borderRadius: "9999px", fontSize: "0.72rem", fontWeight: 600, background: typeStyle.bg, color: typeStyle.color, border: `1px solid ${typeStyle.bg}`, whiteSpace: "nowrap" }}>
          {exp.type}
        </span>
      </div>

      {/* Description */}
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
        {exp.description}
      </p>

      {/* Responsibilities */}
      <ul style={{ paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        {exp.responsibilities.map((r, i) => (
          <li key={i} style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{r}</li>
        ))}
      </ul>

      {/* Tech badges */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.25rem" }}>
        {exp.technologies.map((tech) => (
          <span key={tech} className="badge">
            <CodeBracketIcon style={{ width: 11, height: 11 }} aria-hidden />
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

/* Skill category card */
function SkillCard({ category, iconName, skills }: { category: string; iconName: string; skills: string[] }) {
  const IconComponent = ICON_MAP[iconName];
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
        {IconComponent && (
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: "0.4rem", background: "rgba(36, 81, 168, 0.2)", color: "var(--accent)", flexShrink: 0 }}>
            <IconComponent style={{ width: 16, height: 16 }} aria-hidden />
          </span>
        )}
        <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>{category}</h3>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
        {skills.map((skill) => (
          <span key={skill} className="badge">{skill}</span>
        ))}
      </div>
    </div>
  );
}

/* Experience & Skills Section */
export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="container">

        {/* Section header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p className="section-tag">Journey</p>
          <div className="divider" />
          <h2 className="section-title">Experience &amp; Skills</h2>
          <p className="section-subtitle">
            A timeline of my professional path and the technologies I have worked with.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }}>

          {/* Experiences */}
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>
              Work Experience
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {experiences.map((exp) => (
                <ExperienceCard key={exp.id} exp={exp} />
              ))}
            </div>
          </div>

          {/* Skills — centered grid */}
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.5rem", textAlign: "center" }}>
              Technical Skills
            </h3>
            {/* Centering wrapper: inner grid is inline-grid so it shrinks to content and can be centered */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="skills-grid">
                {skillCategories.map((cat) => (
                  <SkillCard key={cat.category} {...cat} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(260px, 340px));
          gap: 1rem;
          width: 100%;
          max-width: 720px;
        }
        @media (min-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(3, minmax(220px, 300px));
            max-width: 980px;
          }
        }
        @media (max-width: 600px) {
          .skills-grid {
            grid-template-columns: 1fr;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
