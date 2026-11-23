import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { navLinks, profile } from '../data/content'

export default function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/10 section-pad py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <div className="font-display text-lg font-bold text-snow">
            ARUN<span className="neon-text">.</span>KUMAR
          </div>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-mist">
            Full-Stack · Software · AI Automation
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-4">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-sm text-mist transition-colors hover:text-neon"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-snow transition-colors hover:border-neon/50 hover:text-neon"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-snow transition-colors hover:border-neon/50 hover:text-neon"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-snow transition-colors hover:border-neon/50 hover:text-neon"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-center text-xs text-mist/70 md:flex-row md:text-left">
        <span>© {new Date().getFullYear()} Arun Kumar. All rights reserved.</span>
        <span className="font-mono">
          Built with React · Vite · Three.js · Framer Motion · GSAP
        </span>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-[60] grid h-11 w-11 place-items-center rounded-full border border-neon/30 bg-ink/80 text-neon backdrop-blur transition-colors hover:bg-neon hover:text-ink"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  )
}
