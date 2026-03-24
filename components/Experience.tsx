'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experience } from '@/data/resume'

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  return (
    <section id="experience" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 text-sm font-mono mb-3 tracking-wider uppercase">Career</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
            Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            4+ years driving AI-powered product strategy at EY
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative pl-10 md:pl-14 pb-8 last:pb-0"
            >
              {/* Timeline line */}
              {index < experience.length - 1 && (
                <div className="absolute left-[13px] md:left-[21px] top-8 bottom-0 w-px bg-gradient-to-b from-gray-200 to-gray-100" />
              )}

              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-2 top-2 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                expandedId === job.id
                  ? 'bg-primary-600 border-primary-600 shadow-md shadow-primary-600/30'
                  : 'bg-white border-gray-300'
              }`}>
                <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  expandedId === job.id ? 'bg-white' : 'bg-gray-300'
                }`} />
              </div>

              {/* Card */}
              <motion.div
                className={`bg-white border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  expandedId === job.id
                    ? 'border-primary-200 shadow-lg shadow-primary-600/5'
                    : 'border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300'
                }`}
                onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
              >
                <div className="p-5 md:p-6">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3 mb-1.5 flex-wrap">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-base md:text-lg font-bold text-gray-900">
                            {job.title}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-gray-100 text-gray-400 whitespace-nowrap">
                            {job.duration}
                          </span>
                        </div>
                        {job.designation && (
                          <span className="text-[11px] text-gray-400 italic whitespace-nowrap font-mono">
                            {job.designation}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400">
                        {job.company} <span className="text-gray-300">·</span> {job.location}
                      </p>
                    </div>

                    <motion.div
                      animate={{ rotate: expandedId === job.id ? 180 : 0 }}
                      className="text-gray-300 flex-shrink-0 mt-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Impact badges */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {job.impactHighlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-primary-50 text-primary-600 border border-primary-100"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded details */}
                <AnimatePresence>
                  {expandedId === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-gray-100 pt-4">
                        <ul className="space-y-3">
                          {job.highlights.map((highlight, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.06 }}
                              className="text-sm text-gray-500 leading-relaxed"
                            >
                              <div className="flex gap-2.5">
                                <span className="text-primary-400 mt-0.5 flex-shrink-0 text-xs">&#9656;</span>
                                <div>
                                  {highlight.text}
                                  {highlight.metrics.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mt-2">
                                      {highlight.metrics.map((metric, j) => (
                                        <span
                                          key={j}
                                          className="px-2 py-0.5 rounded text-[11px] bg-green-50 text-green-600 font-mono border border-green-100"
                                        >
                                          {metric}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
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
