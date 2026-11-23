import { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'
import { gsap } from 'gsap'
import * as THREE from 'three'

// Distorted neon blob with a wireframe shell
function Blob() {
  const group = useRef()
  useFrame((_, delta) => {
    if (!group.current) return
    group.current.rotation.x += delta * 0.12
    group.current.rotation.y += delta * 0.18
  })
  return (
    <Float speed={1.3} rotationIntensity={0.5} floatIntensity={1.1}>
      <group ref={group}>
        <mesh>
          <icosahedronGeometry args={[1.5, 16]} />
          <MeshDistortMaterial
            color="#C6FF00"
            emissive="#1c2900"
            emissiveIntensity={0.55}
            roughness={0.22}
            metalness={0.55}
            distort={0.38}
            speed={1.8}
          />
        </mesh>
        {/* Wireframe shell */}
        <mesh scale={1.55}>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshBasicMaterial color="#C6FF00" wireframe transparent opacity={0.16} />
        </mesh>
        {/* Inner core glow */}
        <mesh scale={0.55}>
          <icosahedronGeometry args={[1.5, 4]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.12} />
        </mesh>
      </group>
    </Float>
  )
}

// Orbiting rings
function Rings() {
  const ref = useRef()
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.z += delta * 0.1
    ref.current.rotation.x = Math.PI / 3
  })
  return (
    <group ref={ref} scale={2.7}>
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[1, 0.012, 12, 120]} />
        <meshBasicMaterial color="#C6FF00" transparent opacity={0.4} />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.25, 0.01, 12, 120]} />
        <meshBasicMaterial color="#C6FF00" transparent opacity={0.25} />
      </mesh>
      <mesh rotation={[0, Math.PI / 4, Math.PI / 6]}>
        <torusGeometry args={[1.5, 0.008, 12, 120]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.18} />
      </mesh>
    </group>
  )
}

// Floating particle field
function Particles() {
  const ref = useRef()
  const [pos] = useState(() => {
    const count = 480
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.random() * 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  })
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.025
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={480} array={pos} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#C6FF00" size={0.035} transparent opacity={0.55} sizeAttenuation />
    </points>
  )
}

// Mouse-driven parallax rig
function Rig({ children }) {
  const group = useRef()
  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      if (group.current) {
        gsap.to(group.current.rotation, { x: y * 0.28, y: x * 0.4, duration: 1.1, ease: 'power2.out' })
        gsap.to(group.current.position, { x: x * 0.4, y: -y * 0.3, duration: 1.1, ease: 'power2.out' })
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
  return <group ref={group}>{children}</group>
}

export default function HeroScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 6], fov: 45 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[4, 4, 5]} intensity={40} color="#C6FF00" />
        <pointLight position={[-6, -3, 2]} intensity={18} color="#ffffff" />
        <Stars radius={60} depth={35} count={1400} factor={3.2} saturation={0} fade speed={0.6} />
        <Rig>
          <Blob />
          <Rings />
          <Particles />
        </Rig>
      </Suspense>
    </Canvas>
  )
}
