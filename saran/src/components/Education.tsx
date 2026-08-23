import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";
import { education, certifications } from "@/data/resume";
import {
  GraduationCap,
  Award,
  Building2,
  Calendar,
  Star,
  Clock,
} from "lucide-react";

const EDU_GRAD = [
  "linear-gradient(135deg,#a855f7,#6366f1)",
  "linear-gradient(135deg,#06b6d4,#3b82f6)",
  "linear-gradient(135deg,#10b981,#06b6d4)",
  "linear-gradient(135deg,#f59e0b,#f97316)",
];
const CERT_C = [
  { c: "#10b981", bg: "rgba(16,185,129,0.1)", b: "rgba(16,185,129,0.2)" },
  { c: "#6366f1", bg: "rgba(99,102,241,0.1)", b: "rgba(99,102,241,0.2)" },
  { c: "#f59e0b", bg: "rgba(245,158,11,0.1)", b: "rgba(245,158,11,0.2)" },
  { c: "#06b6d4", bg: "rgba(6,182,212,0.1)", b: "rgba(6,182,212,0.2)" },
  { c: "#f43f5e", bg: "rgba(244,63,94,0.1)", b: "rgba(244,63,94,0.2)" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeL = {
  hidden: { opacity: 0, x: -22 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};
const fadeR = {
  hidden: { opacity: 0, x: 22 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Education() {
  const { ref, inView } = useReveal(0.05);

  return (
    <section
      id="education"
      className="section"
      style={{ background: "var(--surface) " }}
    >
      <div
        style={{
          borderTop: "1px solid var(--glass-border)",
          marginBottom: "5rem",
        }}
      />
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: "4rem" }}
        >
          <div className="section-eyebrow">Academic Background</div>
          <h2 className="section-title">
            Education & <span className="grad-text-forest">Certifications</span>
          </h2>
        </motion.div>

        <div className="row g-5">
          {/* ── Education ── */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="d-flex align-items-center gap-2"
              style={{ marginBottom: "1.75rem" }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  background: "linear-gradient(135deg,#a855f7,#6366f1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 6px 16px rgba(168,85,247,0.3)",
                }}
              >
                <GraduationCap size={17} color="#fff" />
              </div>
              <h5
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                Academic Qualifications
              </h5>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="d-flex flex-column gap-3"
            >
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree + edu.year}
                  variants={fadeL}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="glass-card"
                  style={{ padding: "1.25rem 1.5rem" }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 14,
                        flexShrink: 0,
                        background: EDU_GRAD[i],
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "Space Grotesk, sans-serif",
                        fontWeight: 900,
                        fontSize: "0.78rem",
                        color: "#fff",
                        letterSpacing: "0.04em",
                        boxShadow: `0 6px 16px rgba(${i === 0 ? "168,85,247" : i === 1 ? "6,182,212" : i === 2 ? "16,185,129" : "245,158,11"},0.3)`,
                      }}
                    >
                      {edu.degree}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h6
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontWeight: 700,
                          fontSize: "0.88rem",
                          margin: 0,
                          color: "var(--text)",
                        }}
                      >
                        {edu.field}
                      </h6>
                      <p
                        style={{
                          fontSize: "0.74rem",
                          color: "var(--muted)",
                          margin: "0.2rem 0 0.5rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem",
                        }}
                      >
                        <Building2 size={10} /> {edu.institution}
                      </p>
                      <div className="d-flex gap-2 flex-wrap">
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.3rem",
                            padding: "0.18rem 0.6rem",
                            borderRadius: 99,
                            fontSize: "0.66rem",
                            fontFamily: "JetBrains Mono, monospace",
                            background: "var(--glass)",
                            border: "1px solid var(--glass-border)",
                            color: "var(--muted)",
                          }}
                        >
                          <Calendar size={9} /> {edu.year}
                        </span>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.3rem",
                            padding: "0.18rem 0.6rem",
                            borderRadius: 99,
                            fontSize: "0.66rem",
                            fontFamily: "JetBrains Mono, monospace",
                            background: EDU_GRAD[i],
                            color: "#fff",
                            fontWeight: 700,
                          }}
                        >
                          <Star size={9} /> {edu.cgpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Certifications ── */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="d-flex align-items-center gap-2"
              style={{ marginBottom: "1.75rem" }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  background: "linear-gradient(135deg,#f59e0b,#f97316)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 6px 16px rgba(245,158,11,0.3)",
                }}
              >
                <Award size={17} color="#fff" />
              </div>
              <h5
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                Certifications & Courses
              </h5>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="d-flex flex-column gap-3"
            >
              {certifications.map((cert, i) => {
                const c = CERT_C[i];
                return (
                  <motion.div
                    key={cert.title}
                    variants={fadeR}
                    whileHover={{ x: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="glass-card"
                    style={{ padding: "1.25rem 1.5rem" }}
                  >
                    <div className="d-flex gap-3 align-items-start">
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          flexShrink: 0,
                          background: c.bg,
                          border: `1px solid ${c.b}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Award size={18} style={{ color: c.c }} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h6
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            fontWeight: 700,
                            fontSize: "0.83rem",
                            color: "var(--text)",
                            lineHeight: 1.45,
                            margin: "0 0 0.25rem",
                          }}
                        >
                          {cert.title}
                        </h6>
                        <p
                          style={{
                            fontSize: "0.72rem",
                            color: "var(--muted)",
                            margin: "0 0 0.6rem",
                            lineHeight: 1.4,
                          }}
                        >
                          {cert.issuer}
                        </p>
                        <div className="d-flex gap-2 flex-wrap">
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.3rem",
                              padding: "0.18rem 0.6rem",
                              borderRadius: 99,
                              fontSize: "0.65rem",
                              fontFamily: "JetBrains Mono, monospace",
                              background: "var(--glass)",
                              border: "1px solid var(--glass-border)",
                              color: "var(--muted)",
                            }}
                          >
                            <Clock size={9} /> {cert.duration}
                          </span>
                          {cert.grade && (
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.3rem",
                                padding: "0.18rem 0.6rem",
                                borderRadius: 99,
                                fontSize: "0.65rem",
                                fontWeight: 700,
                                background: c.bg,
                                border: `1px solid ${c.b}`,
                                color: c.c,
                              }}
                            >
                              <Star size={9} /> {cert.grade}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
