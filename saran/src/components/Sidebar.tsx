import { Mail, Bookmark, User, Briefcase, MapPin, X } from 'lucide-react'
import { personalInfo } from '@/data/resume'
import profileImg from '@/assets/img/profile-img.jpeg'

interface Props {
  theme: 'dark' | 'light'
  onToggle: () => void
  open: boolean
  onClose: () => void
}

export default function Sidebar({ theme, onToggle, open, onClose }: Props) {
  return (
    <aside className={`app-sidebar ${open ? 'open' : ''}`}>
      <div className="sidebar-inner">

        {/* Close (mobile / tablet only) */}
        <button className="sidebar-close" onClick={onClose} aria-label="Close menu">
          <X size={18} />
        </button>

        {/* Profile */}
        <img
          src={profileImg}
          alt={personalInfo.name}
          className="sidebar-avatar"
        />
        <h2 className="sidebar-name">{personalInfo.name}</h2>
        <p className="sidebar-handle">
          @sarankumar <span style={{ opacity: 0.5 }}>·</span> <MapPin size={12} /> India
        </p>
        <p className="sidebar-role">{personalInfo.title}</p>

        {/* Experience badge */}
        <p className="sidebar-exp-label">2+ Years Experience Includes:</p>
        <span className="sidebar-exp-chip">
          <Briefcase size={12} /> Britto &amp; Associates
        </span>

        {/* Message + bookmark */}
        <div className="sidebar-cta">
          <a href={`mailto:${personalInfo.email}`} className="sidebar-message" onClick={onClose}>
            <Mail size={15} /> Message
          </a>
          <button aria-label="Save" className="sidebar-bookmark">
            <Bookmark size={15} />
          </button>
        </div>

        <div className="sidebar-divider" />

        {/* Nav */}
        <nav className="sidebar-nav">
          <a href="#about" onClick={onClose}><User size={17} /> Profile</a>
          <a href="#projects" onClick={onClose}><Briefcase size={17} /> Portfolio</a>
        </nav>

        <div className="sidebar-divider" />

        {/* Theme toggle */}
        <button onClick={onToggle} className="sidebar-theme">
          {theme === 'dark' ? '☀️  Light mode' : '🌙  Dark mode'}
        </button>
      </div>
    </aside>
  )
}
