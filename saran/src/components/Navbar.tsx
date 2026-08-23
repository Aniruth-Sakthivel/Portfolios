import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, Mail } from 'lucide-react'
import { personalInfo } from '@/data/resume'
import avatar from '@/assets/avatar.svg'

const NAV = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

interface Props { theme: 'dark'|'light'; onToggle: () => void }

export default function Navbar({ theme, onToggle }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('')
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 60)
    const a = (e: Event) => setActive((e as CustomEvent).detail)
    window.addEventListener('scroll', s)
    window.addEventListener('sectionChange', a)
    return () => { window.removeEventListener('scroll', s); window.removeEventListener('sectionChange', a) }
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0.85rem 1rem',
      }}
    >
      <div
        className="d-flex align-items-center justify-content-between"
        style={{
          width: '100%', maxWidth: 1180, margin: '0 auto', gap: '1rem',
          padding: scrolled ? '0.45rem 0.55rem 0.45rem 1rem' : '0.55rem 0.65rem 0.55rem 1.1rem',
          borderRadius: 99,
          background: 'var(--glass)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid var(--glass-border)',
          boxShadow: scrolled ? 'var(--shadow-card)' : '0 8px 30px rgba(0,0,0,0.16)',
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* Brand — WhatsApp-style circular avatar */}
        <a href="#hero" className="text-decoration-none d-flex align-items-center gap-2">
          <motion.span
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            style={{ position: 'relative', display: 'inline-flex', flexShrink: 0 }}
          >
            <img
              src={avatar}
              alt={personalInfo.name}
              style={{
                width: 40, height: 40, borderRadius: '50%', objectFit: 'cover',
                border: '2px solid var(--glass-border)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.25)',
              }}
            />
            {/* Online status dot, like WhatsApp */}
            <span style={{
              position: 'absolute', bottom: 1, right: 1,
              width: 10, height: 10, borderRadius: '50%',
              background: 'var(--emerald)', border: '2px solid var(--bg)',
            }} />
          </motion.span>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>
            {personalInfo.shortName}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="d-none d-lg-flex list-unstyled mb-0 align-items-center" style={{ gap: '0.15rem' }}>
          {NAV.map(n => {
            const isActive = active === n.href.slice(1)
            return (
              <li key={n.href}>
                <a href={n.href} style={{
                  position: 'relative', display: 'block',
                  padding: '0.45rem 0.85rem', borderRadius: 10,
                  textDecoration: 'none', fontSize: '0.86rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--violet)' : 'var(--muted)',
                  transition: 'color 0.3s',
                }}>
                  {n.label}
                  {isActive && (
                    <motion.span layoutId="nav-dot" style={{
                      position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)',
                      width: 4, height: 4, borderRadius: '50%',
                      background: 'var(--grad-hero)',
                      display: 'block',
                    }} />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right actions */}
        <div className="d-flex align-items-center gap-2">
          <button onClick={onToggle} style={iconBtn} aria-label="toggle theme">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href={`mailto:${personalInfo.email}`} className="btn-hero primary d-none d-lg-flex" style={{ fontSize: '0.82rem', padding: '0.6rem 1.25rem' }}>
            <Mail size={14} /> Hire Me
          </a>
          <button className="d-lg-none" onClick={() => setOpen(o => !o)} style={iconBtn}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', borderTop: '1px solid var(--glass-border)', overflow: 'hidden' }}
          >
            <div className="container py-3 d-flex flex-column gap-1">
              {NAV.map(n => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} style={{
                  padding: '0.7rem 1rem', borderRadius: 10, textDecoration: 'none',
                  color: active === n.href.slice(1) ? 'var(--violet)' : 'var(--text)',
                  fontWeight: active === n.href.slice(1) ? 700 : 500,
                  background: active === n.href.slice(1) ? 'rgba(168,85,247,0.08)' : 'transparent',
                  transition: 'all 0.2s',
                }}>
                  {n.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

const iconBtn: React.CSSProperties = {
  width: 38, height: 38, borderRadius: 10,
  background: 'var(--glass)', border: '1px solid var(--glass-border)',
  backdropFilter: 'blur(12px)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer', color: 'var(--text)', transition: 'all 0.3s',
}
