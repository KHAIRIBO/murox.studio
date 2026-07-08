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
  openGraph: {
    title: 'murox.studio — Custom PC Setups, Web & Game Solutions',
    description: 'We are web and design web developers providing website creation, custom PC setups, and gaming solutions help.',
    type: 'website',
    url: 'https://murox.studio',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'murox.studio logo',
      }
    ]
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
