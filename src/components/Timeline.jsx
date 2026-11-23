import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Target } from 'lucide-react'
import { Reveal, RevealWords } from './Reveal'
import { timeline } from '../data/content'

const tagIcons = { Education: GraduationCap, Status: Briefcase, Focus: Target }

export default function Timeline() {
  return (
    <section id="timeline" className="relative section-pad py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-radial-neon opacity-30" />

      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="kicker mb-4">05 — Journey</div>
          <h2 className="heading-xl text-[clamp(2rem,5vw,3.4rem)] text-snow">
            <RevealWords text="Experience & Education" />
          </h2>
        </Reveal>

        <div className="relative mt-14">
          {/* Center line */}
          <div className="absolute bottom-0 left-5 top-2 w-px bg-gradient-to-b from-neon/0 via-neon/40 to-neon/0 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {timeline.map((t, i) => {
              const Icon = tagIcons[t.tag] || Briefcase
              const left = i % 2 === 0
              return (
                <div key={t.title} className="relative md:grid md:grid-cols-2 md:gap-12">
                  {/* Node */}
                  <span className="absolute left-5 top-3 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center md:left-1/2">
                    <span className="absolute h-4 w-4 animate-pulseGlow rounded-full bg-neon shadow-[0_0_14px_#C6FF00]" />
                    <span className="h-2 w-2 rounded-full bg-ink ring-2 ring-neon" />
                  </span>

                  <Reveal
                    delay={i * 0.1}
                    className={`pl-14 md:pl-0 ${left ? 'md:col-start-1 md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}
                  >
                    <div className="glass rounded-2xl p-5 transition-colors hover:glass-neon">
                      <div
                        className={`mb-2 flex items-center gap-2 ${left ? 'md:justify-end' : ''}`}
                      >
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-neon/10 text-neon">
                          <Icon size={16} />
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-widest text-neon">
                          {t.year}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-snow">{t.title}</h3>
                      <p className="text-sm text-mist">{t.org}</p>
                      <p className="mt-2 text-sm leading-relaxed text-mist">{t.desc}</p>
                    </div>
                  </Reveal>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
