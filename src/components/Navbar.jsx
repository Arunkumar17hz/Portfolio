import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github } from 'lucide-react'
import { navLinks, profile } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.id)
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const go = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] flex justify-center px-4 pt-4 transition-all duration-500 ${
          scrolled ? 'translate-y-0' : 'translate-y-0'
        }`}
      >
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 md:px-6 ${
            scrolled ? 'glass glass-neon' : 'border border-transparent'
          }`}
        >
          {/* Logo */}
          <button onClick={() => go('home')} className="group flex items-center gap-3" aria-label="Home">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-neon/40 bg-neon/5 font-display text-sm font-bold neon-text transition-colors group-hover:bg-neon/15">
              AK
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-wide text-snow sm:block">
              ARUN<span className="text-neon">.</span>KUMAR
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === l.id ? 'text-neon' : 'text-mist hover:text-snow'
                  }`}
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="navActive"
                      className="absolute inset-0 -z-10 rounded-full border border-neon/30 bg-neon/5"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hidden h-9 w-9 place-items-center rounded-full border border-white/10 text-snow transition-colors hover:border-neon/50 hover:text-neon sm:grid"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-snow md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-20 z-[79] md:hidden"
          >
            <div className="glass glass-neon rounded-2xl p-3">
              {navLinks.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                    active === l.id ? 'bg-neon/10 text-neon' : 'text-mist hover:bg-white/5 hover:text-snow'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
