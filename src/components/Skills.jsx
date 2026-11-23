import { motion } from 'framer-motion'
import { Layout, Server, Bot, Wrench, ArrowUpRight } from 'lucide-react'
import { Reveal, RevealWords } from './Reveal'
import { skills } from '../data/content'

const iconMap = { Layout, Server, Bot, Wrench }

export default function Skills() {
  return (
    <section id="skills" className="relative section-pad py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="kicker mb-4">02 — Skills</div>
          <h2 className="heading-xl text-[clamp(2rem,5vw,3.4rem)] text-snow">
            <RevealWords text="Technical Skills" />
          </h2>
          <p className="mt-4 max-w-xl text-mist">
            A focused toolkit across frontend, backend, AI automation, and modern developer tooling.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Wrench
            return (
              <Reveal key={cat.category} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass group flex h-full flex-col rounded-3xl p-6 transition-colors hover:glass-neon"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-neon/10 text-neon transition-colors group-hover:bg-neon/20">
                      <Icon size={22} />
                    </span>
                    <span className="font-mono text-xs text-mist">{cat.items.length} tools</span>
                  </div>

                  <h3 className="mb-4 font-display text-lg font-semibold text-snow">{cat.category}</h3>

                  <ul className="space-y-2.5">
                    {cat.items.map((s) => (
                      <li key={s} className="flex items-center gap-2.5 text-sm text-mist">
                        <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_8px_#C6FF00]" />
                        {s}
                      </li>
                    ))}
                  </ul>

                  {/* Decorative animated accent (not a proficiency metric) */}
                  <div className="mt-6 h-px w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full w-1/3 bg-neon shadow-[0_0_10px_#C6FF00]"
                      animate={{ x: ['-100%', '300%'] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'linear', delay: i * 0.3 }}
                    />
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
