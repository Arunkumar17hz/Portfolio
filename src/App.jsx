import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [ready, setReady] = useState(false)

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main className="relative">
        <Hero start={ready} />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

// Flip `ready` to true right after the loader leaves so the hero entrance
// animation plays in sync with the reveal.
useEffect(() => {
  if (!loading) {
    const id = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(id)
  }
}, [loading])
