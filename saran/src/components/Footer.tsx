import { motion } from 'framer-motion'
import { Mail, ExternalLink, Phone, ArrowUp } from 'lucide-react'
import { personalInfo } from '@/data/resume'
import Tilt from '@/components/ui/Tilt'
import memoji from '@/assets/memoji.png'

const SOCIALS = [
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  { icon: ExternalLink, href: '#', label: 'LinkedIn' },
  { icon: Phone, href: `tel:${personalInfo.phone}`, label: 'Phone' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* clouds */}
      <span className="footer-cloud f1" />
      <span className="footer-cloud f2" />
      <span className="footer-cloud f3" />

      <div className="footer-inner">
        {/* Headline + avatar */}
        <div className="footer-top">
          <h2 className="footer-headline">
            <span className="footer-script">let's build</span><br />
            incredible structures together.
          </h2>

          <div className="footer-figure">
            <Tilt max={12} lift={20} className="footer-figure-tilt">
              <img src={memoji} alt={personalInfo.name} />
            </Tilt>
          </div>
        </div>

        {/* Contact columns */}
        <div className="footer-contact">
          <div className="footer-col">
            <p className="footer-label">Email</p>
            <a href={`mailto:${personalInfo.email}`} className="footer-email">{personalInfo.email}</a>
          </div>
          <div className="footer-col">
            <p className="footer-label">Social</p>
            <div className="footer-socials">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}><Icon size={16} /></a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-rule" />

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} {personalInfo.name}</p>
          <motion.button
            whileHover={{ y: -3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="footer-top-btn"
            aria-label="Back to top"
          >
            <ArrowUp size={16} /> Back to top
          </motion.button>
        </div>
      </div>

      {/* Giant faded wordmark */}
      <div className="footer-wordmark" aria-hidden="true">{personalInfo.shortName.toUpperCase()}</div>
    </footer>
  )
}
