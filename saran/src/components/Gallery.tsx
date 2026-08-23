import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import { ChevronLeft, ChevronRight, GalleryHorizontalEnd } from 'lucide-react'

// Auto-load every image dropped into assets/img/project-img.
const modules = import.meta.glob('../assets/img/project-img/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const IMAGES = Object.keys(modules).sort().map((path, i) => ({
  src: modules[path],
  title: `Showcase ${String(i + 1).padStart(2, '0')}`,
}))

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.96 }),
}

export default function Gallery() {
  const { ref, inView } = useReveal(0.12)
  const count = IMAGES.length
  const [[index, dir], setState] = useState<[number, number]>([0, 0])
  const [paused, setPaused] = useState(false)

  const go = useCallback((step: number) => {
    setState(([i]) => [(i + step + count) % count, step])
  }, [count])

  const jump = (to: number) => setState(([i]) => [to, to > i ? 1 : -1])

  // Auto-advance (pauses on hover / when off-screen).
  useEffect(() => {
    if (paused || !inView || count <= 1) return
    const id = setInterval(() => go(1), 4200)
    return () => clearInterval(id)
  }, [paused, inView, count, go])

  if (count === 0) return null

  const active = IMAGES[index]

  return (
    <section id="gallery" className="section">
      <div style={{ borderTop: '1px solid var(--glass-border)', marginBottom: '5rem' }} />

      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center"
          style={{ marginBottom: '2.75rem' }}
        >
          <div className="section-eyebrow justify-content-center">Gallery</div>
          <h2 className="section-title">
            Project <span className="grad-text-ocean">Showcase</span>
          </h2>
          <p className="section-sub mx-auto mt-3" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <GalleryHorizontalEnd size={14} /> Swipe through the visuals.
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="slider-stage">
            <AnimatePresence custom={dir} initial={false} mode="popLayout">
              <motion.div
                key={index}
                className="slider-slide"
                custom={dir}
                variants={variants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) go(1)
                  else if (info.offset.x > 80) go(-1)
                }}
              >
                <img src={active.src} alt={active.title} draggable={false} />
                <span className="slider-caption">{active.title}</span>
              </motion.div>
            </AnimatePresence>

            {count > 1 && (
              <>
                <button className="slider-arrow left" onClick={() => go(-1)} aria-label="Previous"><ChevronLeft size={22} /></button>
                <button className="slider-arrow right" onClick={() => go(1)} aria-label="Next"><ChevronRight size={22} /></button>
              </>
            )}

            <span className="slider-counter">{index + 1} / {count}</span>
          </div>

          {/* Dots */}
          {count > 1 && (
            <div className="slider-dots">
              {IMAGES.map((_, i) => (
                <button
                  key={i}
                  className={`slider-dot ${i === index ? 'active' : ''}`}
                  onClick={() => jump(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
