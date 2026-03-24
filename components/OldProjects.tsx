'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { oldProjects } from '@/data/resume'

export default function OldProjects() {
  return (
    <section id="other-projects" className="py-20 md:py-32 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 text-sm font-mono mb-3 tracking-wider uppercase">Technical Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technical projects and open-source contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {oldProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group block"
            >
              <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-500">
                <div className="relative bg-white border-b border-gray-200 p-6">
                  <div className="flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-auto max-h-48 object-contain"
                    />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded text-xs bg-gray-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{project.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-primary-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
