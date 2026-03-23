'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { achievements, topImpacts } from '@/data/resume'

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition for product leadership and measurable impact
          </p>
        </motion.div>

        {/* Animated Counters - Top Impact Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
        >
          <CounterCard value="$4.5M+" label="Client Savings Delivered" />
          <CounterCard value="9,000+" label="Workflows Shipped" />
          <CounterCard value="50,000" label="Superstar Selection Pool" />
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: '0 0 60px rgba(102, 126, 234, 0.3)',
              }}
              className="glass rounded-2xl p-6 relative overflow-hidden group tilt-card"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/10 group-hover:to-accent-500/10 transition-all duration-500" />

              {/* Trophy icon */}
              <div className="relative mb-4">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                  }}
                >
                  <AchievementIcon type={achievement.icon} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {/* Type badge */}
                <div className="mt-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      achievement.type === 'award'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-green-500/20 text-green-400'
                    }`}
                  >
                    {achievement.type === 'award' ? '🏆 Award' : '📊 Metric'}
                  </span>
                </div>
              </div>

              {/* Spotlight effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CounterCard({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (!isInView) return

    // Extract number from value
    const numericMatch = value.match(/[\d,]+/)
    if (!numericMatch) {
      setDisplayValue(value)
      return
    }

    const numericValue = parseInt(numericMatch[0].replace(/,/g, ''))
    const prefix = value.substring(0, value.indexOf(numericMatch[0]))
    const suffix = value.substring(value.indexOf(numericMatch[0]) + numericMatch[0].length)

    // Animate counter
    const duration = 2000
    const steps = 60
    const increment = numericValue / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        current = numericValue
        clearInterval(timer)
      }
      setDisplayValue(`${prefix}${Math.floor(current).toLocaleString()}${suffix}`)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      className="glass rounded-2xl p-6 text-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, type: 'spring' }}
        className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2"
      >
        {displayValue}
      </motion.div>
      <p className="text-gray-400 text-sm">{label}</p>
    </motion.div>
  )
}

function AchievementIcon({ type }: { type: string }) {
  const iconClass = 'w-8 h-8 text-primary-400'

  switch (type) {
    case 'trophy':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path d="M5 3v4M3 5h4M6 17v4M4 19h4M17 3v4M19 5h-4M18 17v4M20 19h-4" />
          <path d="M12 2L9 9l-6-1 4 5-2 7 7-4 7 4-2-7 4-5-6 1-3-7z" fill="currentColor" />
        </svg>
      )
    case 'medal':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    case 'star':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    case 'chart':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    case 'rocket':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      )
    default:
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
  }
}
