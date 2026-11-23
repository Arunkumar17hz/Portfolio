import { motion } from 'framer-motion'

const ease = [0.2, 0.8, 0.2, 1]

// Word-by-word / line reveal for headings
export function RevealWords({ text, className = '', delay = 0, as = 'span', stagger = 0.045 }) {
  const words = String(text).split(' ')
  const Tag = motion[as] || motion.span
  return (
    <Tag className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom leading-[1.05]">
          <motion.span
            className="inline-block"
            initial={{ y: '115%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.85, delay: delay + i * stagger, ease }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

// Generic block reveal (fade + rise) on scroll into view
export function Reveal({ children, className = '', delay = 0, y = 36, once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-12%' }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.08, ease } }),
}
