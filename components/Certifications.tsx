'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { certifications } from '@/data/resume'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 text-sm font-mono mb-3 tracking-wider uppercase">Credentials</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
            Certifications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-500">
                <div className="relative bg-white border-b border-gray-200 p-6">
                  <div className="flex items-center justify-center">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={400}
                      height={300}
                      className="w-full h-auto max-h-48 object-contain"
                    />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
