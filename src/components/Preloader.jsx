import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let n = 0
    const id = setInterval(() => {
      n += Math.floor(Math.random() * 9) + 4
      if (n >= 100) {
        n = 100
        clearInterval(id)
        setTimeout(() => {
          setHidden(true)
          setTimeout(onComplete, 700)
        }, 450)
      }
      setCount(n)
    }, 85)
    return () => clearInterval(id)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ink noise"
      initial={{ opacity: 1 }}
      animate={{ opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      style={{ pointerEvents: hidden ? 'none' : 'auto' }}
    >
      {/* Glow backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-radial-neon opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="kicker mb-6">PORTFOLIO LOADING</div>

        {/* Monogram */}
        <div className="relative mb-8 grid h-28 w-28 place-items-center">
          <div className="absolute inset-0 rounded-2xl border border-neon/30 animate-spinSlow" />
          <div className="absolute inset-2 rounded-xl border border-neon/20" />
          <span className="heading-xl text-5xl neon-text">AK</span>
        </div>

        <div className="font-display text-7xl font-bold tracking-tight text-snow md:text-8xl">
          {count}
          <span className="text-2xl text-neon">%</span>
        </div>

        <div className="mt-8 h-[3px] w-64 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full bg-neon shadow-[0_0_12px_#C6FF00]"
            animate={{ width: `${count}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>
        <div className="mt-4 font-mono text-xs text-mist">ARUN KUMAR · FULL-STACK DEVELOPER</div>
      </motion.div>
    </motion.div>
  )
}
