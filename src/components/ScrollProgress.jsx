import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left bg-neon"
      aria-hidden
    >
      <div className="h-full w-full shadow-[0_0_14px_#C6FF00]" />
    </motion.div>
  )
}
