import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown, Sparkles, Code2, Bot, Database } from 'lucide-react'
import Magnetic from './Magnetic'
import ErrorBoundary, { hasWebGL } from './ErrorBoundary'
import HeroFallback from './HeroFallback'
import { profile } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

const HeroScene = lazy(() => import('../three/HeroScene'))

const ease = [0.2, 0.8, 0.2, 1]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
}

const panels = [
  { icon: Code2, label: 'React.js', sub: 'Frontend', className: 'left-[4%] top-[24%]', delay: '0s' },
  { icon: Bot, label: 'AI Automation', sub: 'n8n · OpenAI', className: 'right-[6%] top-[18%]', delay: '1.2s' },
  { icon: Database, label: 'Python · SQL', sub: 'Backend', className: 'right-[10%] bottom-[20%]', delay: '0.6s' },
]

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero({ start }) {
  const [play, setPlay] = useState(false)
  const [webgl] = useState(() => hasWebGL())
  const heroRef = useRef(null)
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(40)
  const gx = useSpring(glowX, { stiffness: 60, damping: 20 })
  const gy = useSpring(glowY, { stiffness: 60, damping: 20 })
  const glowBg = useTransform(
    [gx, gy],
    ([x, y]) => `radial-gradient(440px circle at ${x}% ${y}%, rgba(198,255,0,0.16), transparent 60%)`
  )

  useEffect(() => {
    if (start) {
      const t = setTimeout(() => setPlay(true), 250)
      return () => clearTimeout(t)
    }
  }, [start])

  // GSAP scroll-driven parallax: fade + lift the hero as the user scrolls past it.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
        y: -80,
        opacity: 0.35,
        ease: 'none',
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  function onMove(e) {
    const rect = heroRef.current.getBoundingClientRect()
    glowX.set(((e.clientX - rect.left) / rect.width) * 100)
    glowY.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={onMove}
      className="relative flex min-h-screen items-center overflow-hidden section-pad pb-24 pt-32"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-radial-neon" />
      <div className="noise pointer-events-none absolute inset-0 opacity-60" />
      {/* Mouse-following glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: glowBg }}
      />

      {/* 3D Scene (with graceful fallback when WebGL is unavailable) */}
      <div className="pointer-events-none absolute inset-0 z-0 md:left-[38%]">
        {webgl ? (
          <ErrorBoundary fallback={<HeroFallback />}>
            <Suspense fallback={<HeroFallback />}>
              <HeroScene />
            </Suspense>
          </ErrorBoundary>
        ) : (
          <HeroFallback />
        )}
      </div>

      {/* Floating glass panels (desktop) */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        {panels.map((p) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={play ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1 + parseFloat(p.delay), duration: 0.7, ease }}
            className={`glass glass-neon absolute ${p.className} flex items-center gap-3 rounded-2xl px-4 py-3 animate-floaty`}
            style={{ animationDelay: p.delay }}
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-neon/10 text-neon">
              <p.icon size={18} />
            </span>
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold text-snow">{p.label}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-mist">{p.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Foreground content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={play ? 'show' : 'hidden'}
        className="relative z-20 w-full max-w-3xl"
      >
        <motion.div variants={item} className="kicker mb-5 flex items-center gap-2">
          <Sparkles size={14} /> Portfolio · 2026
        </motion.div>

        <motion.h1
          variants={item}
          className="heading-xl text-[clamp(2.6rem,8vw,6.2rem)] text-snow"
        >
          BUILDING
          <br />
          <span className="text-snow">DIGITAL</span>{' '}
          <span className="neon-text">EXPERIENCES.</span>
        </motion.h1>

        <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-1 font-display text-lg font-semibold tracking-wide text-snow md:text-2xl">
          <span className="neon-text">ARUN KUMAR</span>
        </motion.div>

        <motion.ul variants={item} className="mt-3 space-y-1 font-mono text-xs uppercase tracking-[0.25em] text-mist sm:text-sm">
          {profile.titles.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-neon" /> {t}
            </li>
          ))}
        </motion.ul>

        <motion.p variants={item} className="mt-7 max-w-xl text-base leading-relaxed text-mist md:text-lg">
          {profile.heroDesc}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
          <Magnetic>
            <button onClick={() => scrollToId('projects')} className="btn-primary">
              Explore My Work <ArrowDown size={18} />
            </button>
          </Magnetic>
          <Magnetic>
            <a href={profile.resumeUrl} className="btn-ghost" download>
              Download Resume
            </a>
          </Magnetic>
          <Magnetic>
            <button onClick={() => scrollToId('contact')} className="btn-ghost">
              Contact Me
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={play ? { opacity: 1 } : {}}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-mist md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-neon"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
