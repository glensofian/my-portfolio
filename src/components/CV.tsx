"use client";

import {
  ArrowDownTrayIcon,
  EyeIcon,
  DocumentTextIcon,
  CheckBadgeIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { profile } from "@/data/profile";

const CV_PATH = "/CV-Glen-Sofian-Pardede.pdf";

const CV_HIGHLIGHTS = [
  { icon: BriefcaseIcon,   title: "Work Experience", desc: "Internships & freelance roles in software development" },
  { icon: AcademicCapIcon, title: "Education",        desc: "Informatics, Institut Teknologi Del" },
  { icon: CodeBracketIcon, title: "Technical Skills", desc: "Web, Mobile, Backend, AI/ML & DevOps" },
  { icon: CheckBadgeIcon,  title: "Projects",         desc: "8+ real-world applications built end-to-end" },
];


function CVModal({ onClose }: { onClose: () => void }) {
  /* Lock scroll & close on Escape */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="CV Preview"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(4, 13, 26, 0.80)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        animation: "cvFadeIn 200ms ease both",
      }}
    >
      {/* Panel */}
      <div
        style={{
          width: "100%",
          maxWidth: 860,
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          borderRadius: "1.25rem",
          overflow: "hidden",
          border: "1px solid rgba(90, 140, 220, 0.3)",
          boxShadow: "0 0 100px rgba(36, 81, 168, 0.35), 0 24px 80px rgba(0,0,0,0.6)",
          background: "#071427",
          animation: "cvScaleIn 240ms cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        {/* Toolbar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.875rem 1.25rem",
          borderBottom: "1px solid rgba(90,140,220,0.18)",
          background: "rgba(4,13,26,0.9)",
          flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <DocumentTextIcon style={{ width: 18, height: 18, color: "#c8a96e" }} aria-hidden />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", fontWeight: 600, color: "#f0f6ff" }}>
              CV — {profile.name}
            </span>
          </div>
          <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
            <a
              href={CV_PATH}
              download="CV-Glen-Sofian-Pardede.pdf"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.4rem 0.9rem", fontSize: "0.8rem", fontWeight: 600,
                background: "linear-gradient(135deg,#1a3e82,#2451a8)",
                color: "#f0f6ff", border: "1px solid rgba(96,144,223,0.3)",
                borderRadius: "0.45rem", textDecoration: "none",
                transition: "all 150ms ease",
              }}
            >
              <ArrowDownTrayIcon style={{ width: 13, height: 13 }} aria-hidden />
              Download
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup preview"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 32, height: 32,
                background: "rgba(36,81,168,0.12)",
                border: "1px solid rgba(90,140,220,0.2)",
                borderRadius: "0.45rem",
                color: "#9ab8ef",
                cursor: "pointer",
              }}
            >
              <XMarkIcon style={{ width: 16, height: 16 }} aria-hidden />
            </button>
          </div>
        </div>

        {/* PDF viewer */}
        <div style={{ flex: 1, minHeight: 0 }}>
          <iframe
            src={CV_PATH}
            title="CV Glen Sofian Pardede"
            width="100%"
            height="100%"
            style={{ display: "block", border: "none", minHeight: "75vh" }}
          />
        </div>
      </div>

      <style>{`
        @keyframes cvFadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes cvScaleIn { from { opacity:0; transform:scale(0.93) translateY(14px) } to { opacity:1; transform:scale(1) translateY(0) } }
      `}</style>
    </div>,
    document.body
  );
}

/* CV Section */
export default function CV() {
  const [open, setOpen] = useState(false);

  return (
    <section id="cv" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p className="section-tag">Resume</p>
          <div className="divider" />
          <h2 className="section-title">Curriculum Vitae</h2>
          <p className="section-subtitle">
            Lihat ringkasan lengkap pengalaman, pendidikan, dan keahlian saya. Download atau preview langsung di sini.
          </p>
        </div>

        {/* Centered card */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: 640 }}>

            {/* Card */}
            <div style={{
              background: "linear-gradient(135deg, rgba(18,45,94,0.9) 0%, rgba(13,33,69,0.95) 100%)",
              border: "1px solid rgba(90,140,220,0.3)",
              borderRadius: "1.25rem",
              padding: "2rem",
              marginBottom: "2rem",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 0 60px rgba(36,81,168,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}>
              <div aria-hidden style={{ position:"absolute", top:-50, right:-50, width:220, height:220, borderRadius:"50%", background:"radial-gradient(circle,rgba(200,169,110,.12) 0%,transparent 70%)", pointerEvents:"none" }} />
              <div aria-hidden style={{ position:"absolute", bottom:-30, left:-30, width:160, height:160, borderRadius:"50%", background:"radial-gradient(circle,rgba(36,81,168,.15) 0%,transparent 70%)", pointerEvents:"none" }} />

              {/* Header row */}
              <div style={{ display:"flex", alignItems:"center", gap:"1rem", marginBottom:"1.75rem" }}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"center", width:56, height:56, borderRadius:"0.875rem", background:"rgba(200,169,110,0.15)", border:"1px solid rgba(200,169,110,0.3)", color:"var(--accent)", flexShrink:0 }}>
                  <DocumentTextIcon style={{ width:30, height:30 }} aria-hidden />
                </div>
                <div>
                  <p style={{ fontSize:"0.72rem", color:"var(--text-muted)", textTransform:"uppercase", letterSpacing:"0.12em", fontWeight:600 }}>Resume / CV</p>
                  <p style={{ fontSize:"1.1rem", fontWeight:700, color:"var(--text-primary)", marginTop:"0.1rem" }}>{profile.name}</p>
                  <p style={{ fontSize:"0.85rem", color:"var(--accent)", fontWeight:500 }}>{profile.role} — {profile.location}</p>
                </div>
              </div>

              {/* Highlights */}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.75rem", marginBottom:"1.75rem" }}>
                {CV_HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
                  <div key={title} style={{ display:"flex", gap:"0.65rem", alignItems:"flex-start", padding:"0.85rem", borderRadius:"0.75rem", background:"rgba(36,81,168,0.1)", border:"1px solid var(--border)" }}>
                    <Icon style={{ width:16, height:16, color:"var(--accent)", flexShrink:0, marginTop:2 }} aria-hidden />
                    <div>
                      <p style={{ fontSize:"0.78rem", fontWeight:600, color:"var(--text-primary)", lineHeight:1.3 }}>{title}</p>
                      <p style={{ fontSize:"0.7rem", color:"var(--text-muted)", marginTop:"0.2rem", lineHeight:1.4 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div style={{ paddingTop:"1.25rem", borderTop:"1px solid var(--border)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <p style={{ fontSize:"0.72rem", color:"var(--text-muted)" }}>Last updated: Oct 2026</p>
                <span style={{ display:"inline-flex", alignItems:"center", gap:"0.35rem", fontSize:"0.72rem", fontWeight:600, color:"#86efac", background:"rgba(74,222,128,0.12)", border:"1px solid rgba(74,222,128,0.25)", borderRadius:"9999px", padding:"0.25rem 0.7rem" }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:"#4ade80", boxShadow:"0 0 6px #4ade80" }} />
                  Open to Opportunities
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
              <a href={CV_PATH} download="CV-Glen-Sofian-Pardede.pdf" className="btn-primary" style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem" }}>
                <ArrowDownTrayIcon style={{ width:17, height:17 }} aria-hidden />
                Download CV
              </a>
              <button
                type="button"
                className="btn-outline"
                style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", cursor:"pointer" }}
                onClick={() => setOpen(true)}
              >
                <EyeIcon style={{ width:17, height:17 }} aria-hidden />
                Preview CV
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Portal modal */}
      {open && <CVModal onClose={() => setOpen(false)} />}
    </section>
  );
}
