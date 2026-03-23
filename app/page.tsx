'use client'

import { useState, useEffect } from 'react'
import SplashScreen from '@/components/SplashScreen'
import AnimatedBackground from '@/components/AnimatedBackground'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Achievements from '@/components/Achievements'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setShowSplash(false)
    }

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    // Update HTML class and localStorage when theme changes
    if (isDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      <div className={`transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <AnimatedBackground />
        <Navigation isDarkMode={isDark} toggleTheme={toggleTheme} />

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
