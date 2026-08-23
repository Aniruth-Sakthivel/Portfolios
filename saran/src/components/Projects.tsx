import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import { projects } from '@/data/resume'
import { ArrowUpRight, CheckCircle2, Calendar, Images, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'

// Auto-load every screenshot in assets/img/project-img.
// Name files `project-01*.png`, `project-02*.png`, … to attach them to a
// project (by its id). Add as many shots per project as you like.
const modules = import.meta.glob('../assets/img/project-img/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const ALL = Object.keys(modules).sort().map(path => ({
  src: modules[path],
  file: path.split('/').pop() ?? '',
}))

function shotsFor(id: number): string[] {
  const a = String(id)
  const b = `0${id}`
  return ALL.filter(({ file }) => {
    const m = file.toLowerCase().match(/project[-_]?(\d+)/)
    return m ? (m[1] === a || m[1] === b) : false
  }).map(s => s.src)
}

// Fallback illustrated cover when a project has no screenshots yet.
const COVERS = [
  { grad: 'linear-gradient(150deg,#1d4ed8 0%,#3b82f6 55%,#60a5fa 100%)', glow: 'rgba(37,99,235,0.28)', emoji: '🔬', accent: '#1d4ed8' },
  { grad: 'linear-gradient(150deg,#0e7490 0%,#06b6d4 55%,#22d3ee 100%)', glow: 'rgba(6,182,212,0.28)',  emoji: '⚡', accent: '#0891b2' },
  { grad: 'linear-gradient(150deg,#4338ca 0%,#6366f1 55%,#818cf8 100%)', glow: 'rgba(99,102,241,0.28)', emoji: '🌿', accent: '#4f46e5' },
]

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

export default function Projects() {
  const { ref, inView } = useReveal(0.05)
  const [active, setActive] = useState<number | null>(null)

  // Lightbox: which project + which shot.
  const [box, setBox] = useState<{ shots: string[]; i: number } | null>(null)

  const boxGo = useCallback((step: number) => {
    setBox(prev => (prev ? { ...prev, i: (prev.i + step + prev.shots.length) % prev.shots.length } : prev))
  }, [])

  useEffect(() => {
    if (!box) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setBox(null)
      if (e.key === 'ArrowRight') boxGo(1)
      if (e.key === 'ArrowLeft') boxGo(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [box, boxGo])

  return (
    <section id="projects" className="section">
      <div style={{ borderTop: '1px solid var(--glass-border)', marginBottom: '5rem' }} />

      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="section-eyebrow">Research &amp; Projects</div>
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3">
            <h2 className="section-title">
              Selected <span className="grad-text-ocean">Work</span>
            </h2>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--muted)' }}>
              {projects.length} projects · tap a shot to zoom
            </p>
          </div>
        </motion.div>

        {/* Project card grid */}
        <motion.div
          variants={container} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="row g-4"
        >
          {projects.map((proj, i) => {
            const cover = COVERS[i % COVERS.length]
            const shots = shotsFor(proj.id)
            const isOpen = active === proj.id
            return (
              <div key={proj.id} className="col-lg-4 col-md-6">
                <motion.article
                  variants={card}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                  className="project-card glass-card"
                >
                  {/* Cover — screenshot if available, else illustration */}
                  {shots.length > 0 ? (
                    <button
                      className="project-cover project-cover--shot"
                      onClick={() => setBox({ shots, i: 0 })}
                      aria-label={`View ${proj.title} screenshots`}
                    >
                      <img src={shots[0]} alt={proj.title} />
                      <span className="project-shade" />
                      <span className="project-num">{String(i + 1).padStart(2, '0')}</span>
                      {shots.length > 1 && (
                        <span className="project-shots"><Images size={12} /> {shots.length}</span>
                      )}
                      <span className="project-zoom"><ZoomIn size={16} /></span>
                    </button>
                  ) : (
                    <div className="project-cover" style={{ background: cover.grad }}>
                      <span className="project-cover-blob b1" />
                      <span className="project-cover-blob b2" />
                      <span className="project-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="project-emoji" style={{ boxShadow: `0 12px 30px ${cover.glow}` }}>{cover.emoji}</span>
                      <span className="project-year"><Calendar size={11} /> {proj.period}</span>
                    </div>
                  )}

                  {/* Body */}
                  <div className="project-body">
                    <span className="project-badge" style={{ color: cover.accent, background: `${cover.accent}14`, borderColor: `${cover.accent}33` }}>
                      {proj.category}
                    </span>
                    <h3 className="project-title">{proj.title}</h3>
                    <p className="project-desc">{proj.description}</p>

                    {/* Thumbnail strip */}
                    {shots.length > 1 && (
                      <div className="project-thumbs">
                        {shots.slice(0, 4).map((s, si) => (
                          <button key={s} onClick={() => setBox({ shots, i: si })} aria-label={`Screenshot ${si + 1}`}>
                            <img src={s} alt="" />
                          </button>
                        ))}
                      </div>
                    )}

                    <div className="project-tech">
                      {proj.technologies.slice(0, 4).map(t => (
                        <span key={t} className="tech-pill" style={{ fontSize: '0.66rem' }}>{t}</span>
                      ))}
                      {proj.technologies.length > 4 && (
                        <span className="tech-pill" style={{ fontSize: '0.66rem' }}>+{proj.technologies.length - 4}</span>
                      )}
                    </div>

                    {/* Expandable achievements */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <ul className="project-achievements">
                            {proj.achievements.map((a, ai) => (
                              <li key={ai}>
                                <CheckCircle2 size={13} style={{ color: cover.accent, flexShrink: 0, marginTop: '0.15rem' }} />
                                <span>{a}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      className="project-toggle"
                      style={{ color: cover.accent }}
                      onClick={() => setActive(isOpen ? null : proj.id)}
                    >
                      {isOpen ? 'Hide details' : 'View case study'}
                      <motion.span animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }} style={{ display: 'inline-flex' }}>
                        <ArrowUpRight size={15} />
                      </motion.span>
                    </button>
                  </div>
                </motion.article>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {box && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setBox(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 10000,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(5,12,28,0.85)', backdropFilter: 'blur(14px)', padding: '1.5rem',
            }}
          >
            <button onClick={() => setBox(null)} aria-label="Close" style={{ ...lbBtn, top: 20, right: 20 }}><X size={20} /></button>

            <div style={{ position: 'fixed', top: 26, left: 26, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
              {box.i + 1} / {box.shots.length}
            </div>

            {box.shots.length > 1 && (
              <>
                <button onClick={e => { e.stopPropagation(); boxGo(-1) }} aria-label="Previous" style={{ ...lbBtn, left: 20 }}><ChevronLeft size={24} /></button>
                <button onClick={e => { e.stopPropagation(); boxGo(1) }} aria-label="Next" style={{ ...lbBtn, right: 20 }}><ChevronRight size={24} /></button>
              </>
            )}

            <motion.img
              key={box.i}
              src={box.shots[box.i]}
              alt="Project screenshot"
              initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              style={{ maxWidth: '92vw', maxHeight: '86vh', objectFit: 'contain', borderRadius: 14, boxShadow: '0 30px 80px rgba(0,0,0,0.6)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

const lbBtn: React.CSSProperties = {
  position: 'fixed', top: '50%', transform: 'translateY(-50%)',
  width: 46, height: 46, borderRadius: '50%',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.2)', color: '#fff', cursor: 'pointer', zIndex: 10001,
}
