import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { MapPin, ChevronRight } from 'lucide-react'
import { personalInfo } from '@/data/resume'
import Tilt from '@/components/ui/Tilt'
import memoji from '@/assets/memoji.png'

const firstName = personalInfo.name.replace(/^[A-Z.]+\s*/, '').split(' ')[0] || personalInfo.shortName

export default function Hero() {
  const root = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-greet', { y: 18, opacity: 0, duration: 0.55 })
        .from('.hero-word', { yPercent: 120, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power4.out' }, '-=0.25')
        .from('.hero-sub', { y: 18, opacity: 0, duration: 0.55 }, '-=0.45')
        .from('.hero-figure', { x: 50, opacity: 0, duration: 0.9 }, '-=0.7')
        .from('.hero-foot', { y: 14, opacity: 0, duration: 0.5, stagger: 0.12 }, '-=0.4')

      // Gentle continuous float on the avatar.
      gsap.to('.hero-figure', { y: -16, duration: 3, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: 1.1 })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={root} className="hero-section">
      <div className="hero-banner">
        {/* Soft clouds */}
        <div className="hero-cloud c1" />
        <div className="hero-cloud c2" />
        <div className="hero-cloud c3" />

        <div className="hero-body">
          {/* Greeting */}
          <div className="hero-greet">
            <span style={{ marginRight: '0.4rem' }}>👋</span> Hey, I'm <strong>{firstName}</strong>
          </div>

          {/* Headline + 3D engineer avatar */}
          <div className="hero-headline-row">
            <div className="hero-headline">
              <h1>
                <span className="hero-line">
                  <span className="hero-word hero-word--display">structural</span>
                </span>
                <span className="hero-line">
                  <span className="hero-word hero-word--script">engineer</span>
                </span>
              </h1>

              <p className="hero-sub">
                Building safe &amp; sustainable structures @{' '}
                <span className="hero-sub-brand">
                  <BrandGlyph /> Britto &amp; Associates
                </span>
              </p>
            </div>

            <div className="hero-figure d-none d-md-block">
              <Tilt max={14} lift={26} className="hero-figure-tilt">
                <span className="hero-figure-glow" />
                <img className="hero-portrait" src={memoji} alt={`${personalInfo.name} — avatar`} />
              </Tilt>
            </div>
          </div>

          {/* Footer row */}
          <div className="hero-foot-row">
            <div className="hero-foot">
              BASED IN <MapPin size={13} /> TAMIL NADU, IN
            </div>
            <div className="hero-foot">
              DESIGN <ChevronRight size={13} /> BUILD
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Small inline brand glyph used in the subtitle chip.
function BrandGlyph() {
  return (
    <span style={{
      width: 18, height: 18, borderRadius: 5, background: '#fff',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '0.6rem', color: '#1d4ed8', fontWeight: 900,
    }}>B</span>
  )
}
