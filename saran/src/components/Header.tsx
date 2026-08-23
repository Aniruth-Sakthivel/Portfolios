import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '@/data/resume'
import avatar from '@/assets/memoji.png'

const NAV = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#contact' },
]

const EASE = [0.16, 1, 0.3, 1] as const

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setOpen(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app-header">
      <motion.nav
        className="app-header-pill"
        initial={false}
        animate={{
          paddingLeft: open ? 8 : 6,
          paddingRight: open ? 10 : 6,
        }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <a href="#hero" className="app-header-brand">
          <img src={avatar} alt={personalInfo.name} />
          <span>{personalInfo.shortName.toUpperCase()}</span>
        </a>

        <motion.div
          className="app-header-links"
          initial={false}
          animate={open ? 'open' : 'closed'}
          variants={{
            open: { width: 'auto', opacity: 1, marginLeft: 14 },
            closed: { width: 0, opacity: 0, marginLeft: 0 },
          }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          {NAV.map(n => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </motion.div>
      </motion.nav>
    </div>
  )
}
