import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import Tilt from '@/components/ui/Tilt'
import { Building2, Cpu, Activity, Lightbulb, Mail, Phone, MapPin, Briefcase } from 'lucide-react'

const highlights = [
  { icon: Building2, label: 'Structural Design',    desc: 'RCC & Steel structures per IS codes',          color: '#a855f7', bg: 'rgba(168,85,247,0.1)' },
  { icon: Cpu,       label: 'FEA Analysis',         desc: 'ABAQUS-driven finite element simulations',      color: '#06b6d4', bg: 'rgba(6,182,212,0.1)'  },
  { icon: Activity,  label: 'Seismic Analysis',     desc: 'IS 1893 seismic & wind load compliance',        color: '#f43f5e', bg: 'rgba(244,63,94,0.1)'  },
  { icon: Lightbulb, label: 'Smart Infrastructure', desc: 'Self-sensing composite research',               color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
]

const info = [
  { icon: MapPin,    text: 'Rajapalayam, Virudhunagar, Tamil Nadu', color: '#f59e0b' },
  { icon: Mail,      text: 'saran666dr@mail.com',                   color: '#a855f7' },
  { icon: Phone,     text: '8610455902',                             color: '#06b6d4' },
  { icon: Briefcase, text: 'Open to Opportunities',                  color: '#10b981', highlight: true },
]

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const fadeLeft  = { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16,1,0.3,1] } } }
const fadeRight = { hidden: { opacity: 0, x:  30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16,1,0.3,1] } } }
const fadeUp    = { hidden: { opacity: 0, y: 24, scale: 0.97 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.16,1,0.3,1] } } }

export default function About() {
  const { ref, inView } = useReveal()

  return (
    <section id="about" className="section">
      {/* Section divider */}
      <div style={{ borderTop: '1px solid var(--glass-border)', marginBottom: '5rem' }} />

      <div className="container" ref={ref}>
        <div className="row align-items-start g-5">

          {/* ── Left: Story ── */}
          <div className="col-lg-6">
            <motion.div
              variants={container} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            >
              <motion.div variants={fadeLeft} className="section-eyebrow">Who I Am</motion.div>

              <motion.h2 variants={fadeLeft} className="section-title" style={{ marginBottom: '1.5rem' }}>
                Building structures<br />
                <span className="grad-text-hero">that stand the test of time.</span>
              </motion.h2>

              <motion.p variants={fadeLeft} style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
                I started in civil engineering because I was fascinated by how structures carry load quietly
                — every beam, column, and joint working together without the user ever noticing.
                That obsession led me to pursue my ME in Structural Engineering, graduating with a <strong style={{ color: 'var(--text)' }}>CGPA of 8.1</strong>.
              </motion.p>

              <motion.p variants={fadeLeft} style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '2rem' }}>
                Today I combine <strong style={{ color: 'var(--text)' }}>finite element analysis</strong>, seismic design, and
                smart material research to engineer solutions that are both safe and sustainable.
                Currently creating detailed 2D/3D drawings at <strong style={{ color: 'var(--text)' }}>Britto & Associates</strong>,
                while staying rooted in research on self-sensing composites.
              </motion.p>

              {/* Info chips */}
              <motion.div variants={fadeLeft} className="d-flex flex-wrap gap-2">
                {info.map(item => (
                  <div key={item.text} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.5rem 1rem', borderRadius: 99,
                    background: 'var(--glass)', backdropFilter: 'blur(12px)',
                    border: '1px solid var(--glass-border)',
                    fontSize: '0.8rem',
                    color: item.highlight ? item.color : 'var(--muted)',
                    fontWeight: item.highlight ? 700 : 400,
                  }}>
                    <item.icon size={12} style={{ color: item.color, flexShrink: 0 }} />
                    {item.text}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* ── Right: Highlight cards ── */}
          <div className="col-lg-6">
            <motion.div
              variants={container} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="row g-3"
            >
              {highlights.map((h) => (
                <div key={h.label} className="col-sm-6">
                  <motion.div variants={fadeRight} style={{ height: '100%' }}>
                    <Tilt
                      max={10}
                      lift={28}
                      className="glass-card"
                      style={{ padding: '1.75rem', height: '100%', display: 'block' }}
                    >
                      <div className="tilt-layer">
                        <div
                          style={{
                            width: 50, height: 50, borderRadius: 14,
                            background: h.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                            marginBottom: '1rem',
                            boxShadow: `0 8px 20px ${h.bg}`,
                          }}
                        >
                          <h.icon size={22} style={{ color: h.color }} />
                        </div>
                        <h5 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem', color: 'var(--text)' }}>
                          {h.label}
                        </h5>
                        <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: 0, lineHeight: 1.65 }}>
                          {h.desc}
                        </p>
                        <div style={{ width: 28, height: 2, borderRadius: 99, background: h.color, marginTop: '1rem', opacity: 0.7 }} />
                      </div>
                    </Tilt>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
