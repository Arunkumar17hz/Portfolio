import { motion, useTransform } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, ListChecks } from 'lucide-react'
import { Reveal, RevealWords } from './Reveal'
import { useTilt } from './useTilt'
import { projects } from '../data/content'

function ProjectCard({ project }) {
  const tilt = useTilt(10)
  const glare = useTransform(
    [tilt.glareX, tilt.glareY],
    ([x, y]) => `radial-gradient(380px circle at ${x} ${y}, rgba(198,255,0,0.15), transparent 60%)`
  )

  return (
    <Reveal>
      <motion.article
        ref={tilt.ref}
        onMouseMove={tilt.onMove}
        onMouseLeave={tilt.onLeave}
        style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformStyle: 'preserve-3d' }}
        className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-charcoal/60 backdrop-blur transition-colors duration-500 hover:border-neon/40"
      >
        {/* Glare */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glare }}
        />

        {/* Image */}
        <div className="relative h-56 overflow-hidden" style={{ transform: 'translateZ(30px)' }}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
          <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl border border-neon/30 bg-ink/70 font-display text-sm font-bold neon-text">
            {project.id}
          </span>
        </div>

        {/* Body */}
        <div className="p-6" style={{ transform: 'translateZ(40px)' }}>
          <h3 className="font-display text-xl font-semibold text-snow">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-mist">{project.short}</p>

          {/* Features */}
          <ul className="mt-4 grid gap-1.5">
            {project.features.slice(0, 4).map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs text-mist">
                <ListChecks size={14} className="mt-0.5 shrink-0 text-neon" />
                {f}
              </li>
            ))}
          </ul>

          {/* Tech badges */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-mist"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn-primary !px-4 !py-2.5 text-sm"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost !px-4 !py-2.5 text-sm"
            >
              <Github size={15} /> GitHub
            </a>
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative section-pad py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-radial-neon opacity-30" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="kicker mb-4">03 — Projects</div>
          <h2 className="heading-xl text-[clamp(2rem,5vw,3.4rem)] text-snow">
            <RevealWords text="Featured Projects" />
          </h2>
          <p className="mt-4 max-w-xl text-mist">
            A selection of work spanning AI automation, responsive web development, and creative
            digital experiences.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
