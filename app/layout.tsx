import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Utkarsha Kulshrestha | Product Manager',
  description: 'Product Manager | MBA @ CMU Tepper | 4+ years building AI products at EY. Seeking PM internships Summer 2026.',
  keywords: ['Product Manager', 'AI', 'MBA', 'CMU Tepper', 'EY', 'Portfolio'],
  authors: [{ name: 'Utkarsha Kulshrestha' }],
  openGraph: {
    title: 'Utkarsha Kulshrestha | Product Manager',
    description: 'Product Manager | MBA @ CMU Tepper | 4+ years building AI products at EY',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utkarsha Kulshrestha | Product Manager',
    description: 'Product Manager | MBA @ CMU Tepper | 4+ years building AI products at EY',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
