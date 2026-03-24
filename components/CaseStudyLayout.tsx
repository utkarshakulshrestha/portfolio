'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface CaseStudyLayoutProps {
  title: string
  subtitle: string
  heroImage?: string
  logo?: string
  role: string
  team: string
  timeline: string
  outcome: string
  children: React.ReactNode
}

export default function CaseStudyLayout({
  title,
  subtitle,
  heroImage,
  logo,
  role,
  team,
  timeline,
  outcome,
  children,
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200 py-3">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary-600">
            UK
          </Link>
          <Link
            href="/#projects"
            className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {logo && (
              <div className="mb-8 flex justify-start">
                <Image src={logo} alt={`${title} logo`} width={300} height={200} className="w-auto max-h-32 md:max-h-40 object-contain" />
              </div>
            )}
            <p className="text-primary-600 text-sm font-medium mb-3">{subtitle}</p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>

            {/* Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Role', value: role },
                { label: 'Team', value: team },
                { label: 'Timeline', value: timeline },
                { label: 'Outcome', value: outcome },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-gray-900">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {heroImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden border border-gray-200 bg-white"
            >
              <Image src={heroImage} alt={title} fill className="object-contain p-8" priority />
            </motion.div>
          )}
        </div>
      </header>

      {/* Content */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="container mx-auto px-4 md:px-8 max-w-4xl pb-20"
      >
        <div className="prose prose-gray prose-lg max-w-none
          prose-headings:text-gray-900 prose-headings:font-bold
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
          prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-gray-600 prose-p:leading-relaxed
          prose-li:text-gray-600
          prose-strong:text-gray-900
          prose-table:text-sm
          prose-th:bg-gray-50 prose-th:text-gray-900 prose-th:font-semibold prose-th:px-4 prose-th:py-2
          prose-td:px-4 prose-td:py-2 prose-td:border-b prose-td:border-gray-100
          prose-blockquote:border-primary-500 prose-blockquote:text-gray-600 prose-blockquote:italic
        ">
          {children}
        </div>
      </motion.article>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Projects
          </Link>
        </div>
      </footer>
    </div>
  )
}
