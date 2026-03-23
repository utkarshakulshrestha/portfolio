'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setIsVisible(false)
      onComplete()
      return
    }

    const duration = 1500
    const interval = 20
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + increment
      })
    }, interval)

    const hideTimer = setTimeout(() => {
      setIsVisible(false)
      onComplete()
    }, 1800)

    return () => {
      clearInterval(timer)
      clearTimeout(hideTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
          {/* Profile image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-6"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-gray-100 shadow-md">
              <Image
                src="/images/about/img1.png"
                alt="Utkarsha Kulshrestha"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-xl md:text-2xl font-semibold text-gray-900 mb-1"
          >
            Utkarsha Kulshrestha
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="text-sm text-gray-500 mb-8"
          >
            Product Manager
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '160px' }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="relative h-0.5 bg-gray-100 rounded-full overflow-hidden"
            style={{ width: '160px' }}
          >
            <motion.div
              className="h-full rounded-full bg-primary-600"
              style={{ width: `${progress}%` }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
