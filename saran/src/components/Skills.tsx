import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import { technicalSkills } from '@/data/resume'
import { Building2, Ruler, Monitor, Code2 } from 'lucide-react'

const ICONS = [Building2, Ruler, Monitor, Code2]
const GRADIENTS = [
  'linear-gradient(135deg,#a855f7,#6366f1)',
  'linear-gradient(135deg,#06b6d4,#3b82f6)',
  'linear-gradient(135deg,#f59e0b,#f97316)',
  'linear-gradient(135deg,#10b981,#06b6d4)',
]
const GLOWS = ['rgba(168,85,247,0.28)', 'rgba(6,182,212,0.28)', 'rgba(245,158,11,0.28)', 'rgba(16,185,129,0.28)']

const PILL_COLORS = [
  'rgba(168,85,247', 'rgba(6,182,212',  'rgba(244,63,94',  'rgba(16,185,129',
  'rgba(245,158,11', 'rgba(99,102,241', 'rgba(249,115,22', 'rgba(59,130,246',
  'rgba(236,72,153', 'rgba(168,85,247',
]

export default function Skills() {
  const { ref, inView } = useReveal(0.06)

  return (
    <section id="skills" className="section" style={{ background: 'var(--surface)' }}>
      <div style={{ borderTop: '1px solid var(--glass-border)', marginBottom: '5rem' }} />
      <div className="container" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center"
          style={{ marginBottom: '4rem' }}
        >
          <div className="section-eyebrow justify-content-center">Toolbox</div>
          <h2 className="section-title">
            Technical <span className="grad-text-ocean">Skills</span>
          </h2>
          <p className="section-sub mx-auto mt-3">
            A comprehensive toolkit of structural engineering software and analytical methods.
          </p>
        </motion.div>

        {/* 2×2 skill category cards */}
        <div className="row g-4">
          {technicalSkills.map((cat, ci) => {
            const Icon = ICONS[ci]
            return (
              <div key={cat.category} className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, y: 36 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="glass-card"
                  style={{ padding: '2rem', height: '100%' }}
                >
                  {/* Category header */}
                  <div className="d-flex align-items-center gap-3" style={{ marginBottom: '1.75rem' }}>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        width: 52, height: 52, borderRadius: 16,
                        background: GRADIENTS[ci],
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: `0 8px 20px ${GLOWS[ci]}`, flexShrink: 0,
                      }}
                    >
                      <Icon size={22} color="#fff" />
                    </motion.div>
                    <div>
                      <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1rem', margin: 0, color: 'var(--text)' }}>
                        {cat.category}
                      </h4>
                      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: 'var(--muted)', margin: '0.2rem 0 0' }}>
                        {cat.skills.length} skills
                      </p>
                    </div>
                  </div>

                  {/* Skill bars */}
                  <div className="d-flex flex-column gap-4">
                    {cat.skills.map((skill, si) => (
                      <div key={skill.name}>
                        <div className="d-flex justify-content-between mb-2">
                          <span style={{ fontSize: '0.84rem', fontWeight: 500, color: 'var(--text)' }}>
                            {skill.name}
                          </span>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ delay: ci * 0.1 + si * 0.08 + 0.5 }}
                            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--muted)' }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div style={{ height: 5, borderRadius: 99, background: 'var(--border)', overflow: 'hidden' }}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1.1, delay: ci * 0.1 + si * 0.07, ease: [0.16, 1, 0.3, 1] }}
                            style={{ height: '100%', borderRadius: 99, background: GRADIENTS[ci], position: 'relative', overflow: 'hidden' }}
                          >
                            {/* Shimmer sweep */}
                            <motion.div
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{ duration: 1.5, delay: ci * 0.1 + si * 0.07 + 1, ease: 'easeInOut' }}
                              style={{
                                position: 'absolute', inset: 0,
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)',
                              }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* Software pill cloud */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
          style={{ marginTop: '4rem' }}
        >
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>
            All Software Proficiencies
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {['ABAQUS', 'ETABS', 'STAAD.Pro', 'AutoCAD 2D/3D', 'REVIT', 'SketchUp', 'MS Excel', 'MATLAB', 'C Programming', 'MS Office'].map((s, i) => (
              <motion.span
                key={s}
                className="tech-pill"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.55 + i * 0.04 }}
                whileHover={{ scale: 1.1, y: -3 }}
                style={{
                  background: `${PILL_COLORS[i % 10]},0.08)`,
                  borderColor: `${PILL_COLORS[i % 10]},0.22)`,
                  color: `${PILL_COLORS[i % 10]},1)`,
                }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
