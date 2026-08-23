import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/global.scss'

import { useTheme } from '@/hooks/useTheme'
import { useActiveSection } from '@/hooks/useReveal'

import Cursor from '@/components/Cursor'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Gallery from '@/components/Gallery'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react'

const SECTIONS = ['hero','about','skills','experience','projects','education','contact']

export default function App() {
  const { theme, toggle } = useTheme()
  useActiveSection(SECTIONS)

  const [menuOpen, setMenuOpen] = useState(false)

  // Lock body scroll while the off-canvas menu is open; close on Escape.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Animated background orbs */}
      <div className="bg-canvas">
        <div className="orb o1" />
        <div className="orb o2" />
        <div className="orb o3" />
        <div className="orb o4" />
      </div>

      <Cursor />

      {/* Mobile / tablet menu toggle */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
        aria-expanded={menuOpen}
      >
        <Menu size={20} />
      </button>

      {/* Off-canvas backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="sidebar-backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Profile sidebar — fixed on desktop, off-canvas on mobile/tablet.
          Kept outside .app-shell so its z-index isn't trapped by that
          stacking context (otherwise the backdrop would cover it). */}
      <Sidebar theme={theme} onToggle={toggle} open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="app-shell container-fluid p-0">
        {/* Scrolling content */}
        <div className="app-content">
          <Header />
          <main style={{ position: 'relative', zIndex: 2 }}>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Gallery />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}
