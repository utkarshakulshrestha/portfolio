'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/resume'

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Projects & Case Studies
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Deep dives into products I've built, led, and shipped
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300">
                {/* Project header */}
                <div className="h-32 md:h-40 relative bg-gray-50 border-b border-gray-200">
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-white text-gray-500 border border-gray-200">
                      0{project.id}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary-600 text-sm mb-3">{project.subtitle}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-green-50 text-green-700 border border-green-200"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded text-xs bg-gray-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 flex items-center gap-2 text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors"
                  >
                    View Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
