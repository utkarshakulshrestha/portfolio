'use client'

import Link from 'next/link'
import Image from 'next/image'
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
          <p className="text-primary-600 text-sm font-mono mb-3 tracking-wider uppercase">Portfolio</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
            Case Studies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Deep dives into products I've built, led, and shipped
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-500">
                {/* Project header with logo */}
                <div className="relative bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 p-8">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/90 text-gray-400 border border-gray-200 backdrop-blur-sm">
                      0{project.id}
                    </span>
                  </div>

                  <div className="flex items-center justify-center pt-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-auto max-h-44 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary-500 text-xs font-mono mb-3 tracking-wide">{project.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-green-50 text-green-700 border border-green-100"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[11px] bg-gray-100 text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors"
                  >
                    View Case Study
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
