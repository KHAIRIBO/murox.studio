import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'murox.studio — Next-Gen Digital Studio',
  description: 'murox.studio provides cutting-edge digital solutions powered by AI and modern technology. Build smarter, faster, and better.',
  keywords: ['murox', 'studio', 'digital', 'AI', 'technology', 'cyberpunk', 'design'],
  authors: [{ name: 'murox.studio' }],
  openGraph: {
    title: 'murox.studio — Next-Gen Digital Studio',
    description: 'Cutting-edge digital solutions powered by AI and modern technology.',
    type: 'website',
    url: 'https://murox.studio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
