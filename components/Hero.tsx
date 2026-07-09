'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Hero.module.css'

const pillLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Instagram', href: 'https://www.instagram.com/murox.studio/' },
  { label: 'Support', href: '#footer' },
]

/* ── Development-themed GIFs from Giphy ────────────────────────────
   All are publicly embeddable via Giphy's media CDN.
   Rotates automatically every hour.
   ─────────────────────────────────────────────────────────────────── */
const devGifs = [
  {
    src: 'https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif',
    label: 'Developer in the zone',
  },
  {
    src: 'https://media.giphy.com/media/ZVik7pIo9ZSM6X2BpM/giphy.gif',
    label: 'Typing code fast',
  },
  {
    src: 'https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif',
    label: 'Hacker vibes',
  },
  {
    src: 'https://media.giphy.com/media/RDZo7znAdn2u7sAcWH/giphy.gif',
    label: 'Matrix code',
  },
  {
    src: 'https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif',
    label: 'Night-mode coding',
  },
  {
    src: 'https://media.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif',
    label: 'Fullstack development',
  },
]


const ONE_HOUR_MS = 60 * 60 * 1000

export default function Hero() {
  // Pick an initial index based on current hour so SSR and CSR agree
  const [gifIndex, setGifIndex] = useState<number>(0)

  useEffect(() => {
    // Set initial index based on current hour
    const hour = new Date().getHours()
    setGifIndex(hour % devGifs.length)

    // Rotate to the next GIF every hour
    const interval = setInterval(() => {
      setGifIndex((prev) => (prev + 1) % devGifs.length)
    }, ONE_HOUR_MS)

    return () => clearInterval(interval)
  }, [])

  const currentGif = devGifs[gifIndex]

  return (
    <section className={styles.heroSection} id="hero" aria-label="Hero section">
      {/* Background grid */}
      <div className={styles.gridBg} aria-hidden="true" />

      {/* Animated scan line */}
      <div className={styles.scanLine} aria-hidden="true" />

      {/* Ambient glow orbs */}
      <div className={styles.glowOrbLeft} aria-hidden="true" />
      <div className={styles.glowOrbRight} aria-hidden="true" />

      {/* Inner two-column layout */}
      <div className={styles.heroInner}>

        {/* ── LEFT COLUMN ── */}
        <div className={styles.heroLeft}>

          {/* AI status chip */}
          <div className={styles.aiChip} aria-label="AI system status">
            <span className={styles.aiChipDot} />
            <span className={styles.aiChipText}>AI System Active</span>
          </div>

          {/* Main heading */}
          <div className={styles.titleBlock}>
            <h1 className={styles.titleTop}>MUROX</h1>
            <span className={styles.titleOutline} aria-hidden="true">STUDIO</span>
          </div>

          {/* Description with corner bracket */}
          <div className={styles.descBlock}>
            <div className={styles.bracket} aria-hidden="true" />
            <p className={styles.heroDescription}>
              We deliver cutting-edge digital solutions that power your business
              into the future. Stay sharp. Stay ahead.
            </p>
          </div>

          {/* Quick navigation pills */}
          <nav className={styles.pillNav} aria-label="Quick links">
            {pillLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.pill}
                id={`pill-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <Link href="/contact" className={styles.heroCta} id="hero-cta-start-project">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2a2.94 2.94 0 00-3-3z" />
              <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
            </svg>
            Start a Project
          </Link>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className={styles.heroRight}>
          <div className={styles.gifCard}>
            {/* Cyber corner brackets */}
            <span className={styles.cornerTL} aria-hidden="true" />
            <span className={styles.cornerTR} aria-hidden="true" />
            <span className={styles.cornerBL} aria-hidden="true" />
            <span className={styles.cornerBR} aria-hidden="true" />

            {/* Dev GIF — changes every hour; unoptimized keeps the animation */}
            <Image
              key={currentGif.src}
              src={currentGif.src}
              alt={currentGif.label}
              width={600}
              height={450}
              unoptimized
              className={styles.devGif}
              priority
            />

            {/* Gradient overlay at bottom */}
            <div className={styles.gifOverlay} aria-hidden="true" />

            {/* Floating badge */}
            <div className={styles.floatingBadge}>
              <span className={styles.badgeDot} />
              <span>Live Dev Feed • Updates Hourly</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom scroll hint */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  )
}
