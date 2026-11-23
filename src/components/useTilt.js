import { useRef } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

// 3D tilt hook for cards. Returns props to spread on a motion element.
export function useTilt(max = 12) {
  const ref = useRef(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, { stiffness: 160, damping: 18 })
  const sy = useSpring(py, { stiffness: 160, damping: 18 })
  const rotateX = useTransform(sy, [0, 1], [max, -max])
  const rotateY = useTransform(sx, [0, 1], [-max, max])
  const glareX = useTransform(sx, [0, 1], ['0%', '100%'])
  const glareY = useTransform(sy, [0, 1], ['0%', '100%'])

  function onMove(e) {
    const rect = ref.current.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }
  function onLeave() {
    px.set(0.5)
    py.set(0.5)
  }

  return { ref, rotateX, rotateY, glareX, glareY, onMove, onLeave }
}
