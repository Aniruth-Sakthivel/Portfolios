import { useState } from 'react'
import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import { personalInfo } from '@/data/resume'
import { Mail, Phone, MapPin, Send, CheckCircle2, Briefcase, ArrowUpRight } from 'lucide-react'

const CONTACTS = [
  { icon: Mail,    label: 'Email',    value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#a855f7', bg: 'rgba(168,85,247,0.1)', border: 'rgba(168,85,247,0.2)' },
  { icon: Phone,   label: 'Phone',    value: personalInfo.phone,  href: `tel:${personalInfo.phone}`,   color: '#06b6d4', bg: 'rgba(6,182,212,0.1)',   border: 'rgba(6,182,212,0.2)'  },
  { icon: MapPin,  label: 'Location', value: 'Rajapalayam, Virudhunagar',href: '#',                    color: '#f59e0b', bg: 'rgba(245,158,11,0.1)',  border: 'rgba(245,158,11,0.2)' },
  { icon: Briefcase,label:'Status',   value: 'Open to Opportunities',    href: '#contact',              color: '#10b981', bg: 'rgba(16,185,129,0.1)',  border: 'rgba(16,185,129,0.2)' },
]

const lbl: React.CSSProperties = {
  display: 'block', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
  letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: '0.4rem',
  fontFamily: 'JetBrains Mono, monospace',
}
const inp: React.CSSProperties = {
  width: '100%', padding: '0.78rem 1rem', borderRadius: 12,
  background: 'var(--bg)', border: '1px solid var(--border)',
  color: 'var(--text)', fontSize: '0.88rem', outline: 'none',
  transition: 'border-color 0.3s, box-shadow 0.3s',
  fontFamily: 'Inter, sans-serif',
}

export default function Contact() {
  const { ref, inView } = useReveal(0.08)
  const [form, setForm]  = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent]  = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="section">
      <div style={{ borderTop: '1px solid var(--glass-border)', marginBottom: '5rem' }} />
      <div className="container" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="section-eyebrow">Let's Connect</div>
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3">
            <h2 className="section-title">
              Get In <span className="grad-text-hero">Touch</span>
            </h2>
            <p className="section-sub" style={{ maxWidth: 460 }}>
              Open to full-time roles, research collaborations, and consulting opportunities.
            </p>
          </div>
        </motion.div>

        <div className="row g-4 align-items-start">

          {/* Left — contacts */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3">
              {CONTACTS.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 10 }}
                  className="glass-card text-decoration-none"
                  style={{ padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <div style={{ width: 46, height: 46, borderRadius: 13, flexShrink: 0, background: c.bg, border: `1px solid ${c.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <c.icon size={18} style={{ color: c.color }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.66rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', margin: 0 }}>
                      {c.label}
                    </p>
                    <p style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text)', margin: '0.15rem 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {c.value}
                    </p>
                  </div>
                  <ArrowUpRight size={14} style={{ color: 'var(--muted)', flexShrink: 0 }} />
                </motion.a>
              ))}

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="glass-card"
                style={{ padding: '1.5rem', background: 'rgba(16,185,129,0.04)', border: '1px solid rgba(16,185,129,0.15)' }}
              >
                <div className="d-flex align-items-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ width: 12, height: 12, borderRadius: '50%', background: '#10b981', flexShrink: 0, boxShadow: '0 0 0 4px rgba(16,185,129,0.2)' }}
                  />
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '0.88rem', color: '#10b981', margin: 0 }}>Currently Available</p>
                    <p style={{ fontSize: '0.76rem', color: 'var(--muted)', margin: '0.2rem 0 0', lineHeight: 1.45 }}>
                      Open to full-time structural engineering roles & research positions
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right — form */}
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card"
              style={{ padding: '2rem' }}
            >
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label style={lbl}>Your Name</label>
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="John Doe" style={inp} />
                  </div>
                  <div className="col-sm-6">
                    <label style={lbl}>Email Address</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" style={inp} />
                  </div>
                  <div className="col-12">
                    <label style={lbl}>Subject</label>
                    <input name="subject" required value={form.subject} onChange={handleChange} placeholder="Project Collaboration / Job Opportunity" style={inp} />
                  </div>
                  <div className="col-12">
                    <label style={lbl}>Message</label>
                    <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project or opportunity..." style={{ ...inp, resize: 'none' }} />
                  </div>
                  <div className="col-12">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="btn-hero primary w-100"
                      style={{ justifyContent: 'center', padding: '0.9rem' }}
                    >
                      {sent
                        ? <><CheckCircle2 size={16} /> Sent — I'll respond shortly!</>
                        : <><Send size={15} /> Send Message</>}
                    </motion.button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
