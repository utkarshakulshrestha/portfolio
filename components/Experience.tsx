'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experience } from '@/data/resume'

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  return (
    <section id="experience" className="py-20 md:py-32">
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
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            4+ years driving AI-powered product strategy at EY
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 hidden md:block" />

          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-8 md:mb-12 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`hidden md:block absolute top-6 w-4 h-4 rounded-full bg-primary-500 glow-effect-sm ${
                  index % 2 === 0 ? 'right-0 translate-x-[calc(50%+0.5px)]' : 'left-0 -translate-x-[calc(50%+0.5px)]'
                }`}
              />

              {/* Card */}
              <motion.div
                className={`glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  expandedId === job.id ? 'glow-effect' : 'hover:glow-effect-sm'
                } ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
                whileHover={{ scale: 1.02 }}
                layout
              >
                {/* Card Header */}
                <div className="p-6">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    {/* Duration Badge */}
                    <span className="text-xs font-mono text-primary-400 mb-2">{job.duration}</span>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-display font-bold text-white mb-1">
                      {job.title}
                    </h3>

                    {/* Company & Location */}
                    <p className="text-gray-400">
                      {job.company} <span className="text-primary-400">•</span> {job.location}
                    </p>

                    {/* Impact Highlights */}
                    <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {job.impactHighlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-300 metric-badge"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Expand indicator */}
                    <motion.div
                      animate={{ rotate: expandedId === job.id ? 180 : 0 }}
                      className="mt-4 text-gray-500"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedId === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 pb-6 border-t border-white/10 pt-4 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                        <ul className="space-y-4">
                          {job.highlights.map((highlight, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-gray-300 text-sm leading-relaxed"
                            >
                              <span className="text-primary-400 mr-2">▸</span>
                              {highlight.text}
                              {highlight.metrics.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {highlight.metrics.map((metric, j) => (
                                    <span
                                      key={j}
                                      className="px-2 py-0.5 rounded text-xs bg-accent-500/20 text-accent-400 font-mono"
                                    >
                                      {metric}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
