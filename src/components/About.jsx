import { motion } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Cpu, Layers, Lightbulb, BookOpen, Code } from 'lucide-react'
import { Reveal, RevealWords } from './Reveal'
import { useTilt } from './useTilt'
import { about, education, profile } from '../data/content'

const highlightIcons = [GraduationCap, Cpu, Layers, Lightbulb, BookOpen]

const orbitChips = ['React.js', 'Python', 'AI', 'SQL', 'n8n', 'OpenAI']

export default function About() {
  const tilt = useTilt(8)

  return (
    <section id="about" className="relative section-pad py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-radial-neon opacity-40" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* Left: text */}
        <div>
          <Reveal>
            <div className="kicker mb-4">01 — About</div>
            <h2 className="heading-xl text-[clamp(2rem,5vw,3.4rem)] text-snow">
              <RevealWords text="About Me" />
            </h2>
          </Reveal>

          <div className="mt-7 space-y-4 text-base leading-relaxed text-mist">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {about.highlights.map((h, i) => {
              const Icon = highlightIcons[i % highlightIcons.length]
              return (
                <Reveal key={h.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass group rounded-2xl p-4 transition-colors hover:glass-neon"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-neon/10 text-neon transition-colors group-hover:bg-neon/20">
                        <Icon size={17} />
                      </span>
                      <h3 className="font-display text-sm font-semibold text-snow">{h.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-mist">{h.desc}</p>
                  </motion.div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-7 flex items-center gap-3 rounded-2xl border border-neon/20 bg-neon/5 px-4 py-3">
              <GraduationCap className="text-neon" size={20} />
              <div className="text-sm">
                <span className="font-display font-semibold text-snow">{education.degree}</span>
                <span className="text-mist"> · {education.university} · {education.status}</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: animated profile visual */}
        <Reveal delay={0.15}>
          <motion.div
            ref={tilt.ref}
            onMouseMove={tilt.onMove}
            onMouseLeave={tilt.onLeave}
            style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformStyle: 'preserve-3d' }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <div className="glass glass-neon absolute inset-0 rounded-[2rem]" />

            {/* Rotating rings */}
            <div className="absolute inset-6 rounded-full border border-neon/15 animate-spinSlow" style={{ transform: 'translateZ(20px)' }} />
            <div
              className="absolute inset-12 rounded-full border border-neon/10 animate-spinSlow"
              style={{ animationDirection: 'reverse', transform: 'translateZ(40px)' }}
            />

            {/* Core profile photo */}
            <div className="absolute inset-0 grid place-items-center" style={{ transform: 'translateZ(60px)' }}>
              <div className="relative">
                <div className="absolute -inset-3 rounded-full border border-neon/30 animate-spinSlow" />
                <img
                  src={profile.profilePhoto}
                  alt="Arun Kumar"
                  className="h-44 w-44 rounded-full object-cover border border-neon/50"
                  style={{ boxShadow: '0 0 55px -10px rgba(198,255,0,0.55)' }}
                />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-neon px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-ink">
                  Dev
                </span>
              </div>
            </div>

            {/* Orbiting chips */}
            {orbitChips.map((c, i) => {
              const angle = (i / orbitChips.length) * Math.PI * 2
              const x = Math.cos(angle) * 46
              const y = Math.sin(angle) * 46
              return (
                <motion.span
                  key={c}
                  className="absolute left-1/2 top-1/2 rounded-full border border-white/10 bg-ink/70 px-3 py-1 font-mono text-[11px] text-snow backdrop-blur"
                  style={{ transform: `translate(calc(-50% + ${x}%), calc(-50% + ${y}%)) translateZ(50px)` }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
                >
                  {c}
                </motion.span>
              )
            })}
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
