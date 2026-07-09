import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080808',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://murox.studio'),
  title: 'murox.studio — Custom PC Setups, Web & Game Solutions',
  description: 'At murox.studio, we are web and design web developers providing premium website creation, custom PC setups, and gaming solutions help.',
  keywords: ['murox', 'murox studio', 'web developer', 'web designer', 'PC setup', 'gaming solutions', 'PC help'],
  authors: [{ name: 'murox.studio' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'murox.studio — Custom PC Setups, Web & Game Solutions',
    description: 'We are web and design web developers providing website creation, custom PC setups, and gaming solutions help.',
    type: 'website',
    url: 'https://murox.studio',
    siteName: 'murox.studio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'murox.studio logo',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'murox.studio — Custom PC Setups, Web & Game Solutions',
    description: 'Premium website creation, custom PC setups, and gaming solutions.',
    images: ['/og-image.png'],
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
