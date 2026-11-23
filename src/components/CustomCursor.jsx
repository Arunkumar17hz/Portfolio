import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.5 })
  const [hover, setHover] = useState(false)
  const [down, setDown] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return
    setEnabled(true)
    document.body.classList.add('custom-cursor-on')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const t = e.target.closest('a, button, input, textarea, [data-cursor="hover"]')
      setHover(!!t)
    }
    const onDown = () => setDown(true)
    const onUp = () => setDown(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    return () => {
      document.body.classList.remove('custom-cursor-on')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      {/* Inner dot */}
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        aria-hidden
      >
        <div
          className="h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon"
          style={{ boxShadow: '0 0 12px #C6FF00' }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        animate={{
          scale: down ? 0.7 : hover ? 1.8 : 1,
          opacity: down ? 0.9 : 0.6,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 18 }}
        aria-hidden
      >
        <div
          className="h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon/70"
          style={{ boxShadow: hover ? '0 0 22px rgba(198,255,0,0.5)' : 'none' }}
        />
      </motion.div>
    </>
  )
}
