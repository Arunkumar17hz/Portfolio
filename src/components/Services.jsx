import { motion } from 'framer-motion'
import { Globe, Code2, Workflow, Check } from 'lucide-react'
import { Reveal, RevealWords } from './Reveal'
import { services } from '../data/content'

const iconMap = { Globe, Code2, Workflow }

export default function Services() {
  return (
    <section id="services" className="relative section-pad py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="kicker mb-4">04 — Services</div>
          <h2 className="heading-xl text-[clamp(2rem,5vw,3.4rem)] text-snow">
            <RevealWords text="What I Do" />
          </h2>
          <p className="mt-4 max-w-xl text-mist">
            Practical, end-to-end solutions — from polished websites to intelligent automation
            systems.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Code2
            return (
              <Reveal key={s.id} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-charcoal/50 p-7 transition-colors duration-500 hover:border-neon/40"
                >
                  {/* glow corner */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-neon/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="mb-6 flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border border-neon/30 bg-neon/10 text-neon transition-colors group-hover:bg-neon/20">
                      <Icon size={26} />
                    </span>
                    <span className="font-display text-3xl font-bold text-white/10">{s.id}</span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-snow">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{s.desc}</p>

                  <ul className="mt-5 space-y-2.5">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-mist">
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-neon/15 text-neon">
                          <Check size={11} />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
