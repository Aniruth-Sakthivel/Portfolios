import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import { experience } from '@/data/resume'
import { Building2, Calendar, CheckCircle2, Radio, MapPin } from 'lucide-react'

const GRAD   = ['linear-gradient(135deg,#a855f7,#6366f1)', 'linear-gradient(135deg,#06b6d4,#3b82f6)', 'linear-gradient(135deg,#f59e0b,#f97316)']
const ACCENT = ['#a855f7', '#06b6d4', '#f59e0b']
const GLOW   = ['rgba(168,85,247,0.28)', 'rgba(6,182,212,0.28)', 'rgba(245,158,11,0.28)']

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }
const item = {
  hidden:  { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Experience() {
  const { ref, inView } = useReveal(0.06)

  return (
    <section id="experience" className="section">
      <div style={{ borderTop: '1px solid var(--glass-border)', marginBottom: '5rem' }} />
      <div className="container" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="section-eyebrow">Career Path</div>
          <h2 className="section-title">
            Work <span className="grad-text-warm">Experience</span>
          </h2>
          <p className="section-sub mt-3">
            Hands-on exposure across smart city infrastructure, structural design, and ongoing professional practice.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Gradient track */}
          <div style={{
            position: 'absolute', left: 15, top: 24, bottom: 0, width: 2,
            background: 'linear-gradient(180deg,#a855f7,#06b6d4,#f59e0b)',
            borderRadius: 99, opacity: 0.18, zIndex: 0,
          }} />

          <motion.div
            variants={container} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="d-flex flex-column gap-4"
          >
            {experience.map((exp, i) => (
              <motion.div key={exp.company} variants={item} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>

                {/* Dot */}
                <div style={{ flexShrink: 0, width: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '1.6rem', zIndex: 1 }}>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    style={{
                      width: 32, height: 32, borderRadius: '50%',
                      background: GRAD[i],
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: `0 0 0 5px ${GLOW[i]}`,
                    }}
                  >
                    {exp.current ? <Radio size={13} color="#fff" /> : <CheckCircle2 size={13} color="#fff" />}
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 8, scale: 1.005 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="glass-card flex-grow-1"
                  style={{ padding: '1.75rem' }}
                >
                  {/* Colored top bar */}
                  <div style={{ width: 48, height: 3, borderRadius: 99, background: GRAD[i], marginBottom: '1.25rem' }} />

                  <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-3">
                    <div>
                      <div className="d-flex align-items-center flex-wrap gap-2 mb-1">
                        <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text)', margin: 0 }}>
                          {exp.role}
                        </h4>
                        {exp.current && (
                          <span style={{ padding: '0.18rem 0.65rem', borderRadius: 99, fontSize: '0.68rem', fontWeight: 700, background: 'rgba(16,185,129,0.12)', color: '#10b981', border: '1px solid rgba(16,185,129,0.25)' }}>
                            Current
                          </span>
                        )}
                        <span style={{ padding: '0.18rem 0.65rem', borderRadius: 99, fontSize: '0.68rem', fontWeight: 600, background: 'var(--glass)', color: 'var(--muted)', border: '1px solid var(--glass-border)' }}>
                          {exp.type}
                        </span>
                      </div>
                      <div className="d-flex flex-wrap gap-3">
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
                          <Building2 size={12} style={{ color: ACCENT[i] }} /> {exp.company}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
                          <MapPin size={12} /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                      fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--muted)',
                      background: 'var(--glass)', border: '1px solid var(--glass-border)',
                      borderRadius: 10, padding: '0.4rem 0.85rem', whiteSpace: 'nowrap',
                    }}>
                      <Calendar size={11} /> {exp.period}
                    </div>
                  </div>

                  {/* Points */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {exp.points.map((p, pi) => (
                      <motion.li
                        key={pi}
                        initial={{ opacity: 0, x: -8 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.15 + pi * 0.08 + 0.3 }}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.86rem', color: 'var(--muted)', lineHeight: 1.65 }}
                      >
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: ACCENT[i], flexShrink: 0, marginTop: '0.55rem' }} />
                        {p}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
