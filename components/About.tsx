'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { personalInfo, skills, education } from '@/data/resume'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            About Me
          </h2>
        </motion.div>

        {/* Image + Bio row */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden ring-2 ring-gray-200 shadow-lg">
              <Image
                src="/images/about/img2.jpg"
                alt="About Utkarsha"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 px-5 py-2.5 rounded-xl text-sm font-medium text-primary-600 hover:bg-primary-50 hover:border-primary-300 transition-all"
              >
                LinkedIn →
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="bg-white border border-gray-200 px-5 py-2.5 rounded-xl text-sm font-medium text-primary-600 hover:bg-primary-50 hover:border-primary-300 transition-all"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="inline-block">
              <span className="bg-primary-50 border border-primary-200 px-5 py-2.5 rounded-full text-sm font-medium text-gray-700">
                <span className="text-green-500 mr-2">●</span>
                {personalInfo.seeking}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Skills + Education row */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              What I Bring
            </h3>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-xl text-sm font-medium bg-gray-50 text-gray-700 border border-gray-200 hover:border-primary-400 hover:bg-primary-50 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </span>
              Education
            </h3>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 relative overflow-hidden group"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-600" />

                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-900">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      {edu.duration}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm mb-3">
                    {edu.school}
                    {edu.gpa && <span className="text-green-600 ml-2">• GPA: {edu.gpa}</span>}
                  </p>

                  {edu.details && (
                    <ul className="space-y-1">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="text-gray-500 text-xs flex items-start gap-2">
                          <span className="text-primary-500 mt-1">▸</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
