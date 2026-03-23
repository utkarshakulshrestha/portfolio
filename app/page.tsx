'use client'

import { useState, useEffect } from 'react'
import SplashScreen from '@/components/SplashScreen'
import Background from '@/components/Background'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setShowSplash(false)
    }
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      <div className={`transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <Background />
        <Navigation />

        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </main>
      </div>
    </>
  )
}
