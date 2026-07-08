import Image from 'next/image'
import styles from './Hero.module.css'

const pillLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Careers', href: '#careers' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Github', href: 'https://github.com/KHAIRIBO/murox.studio' },
  { label: 'Support', href: '#support' },
]

export default function Hero() {
  return (
    <section className={styles.heroSection} id="hero" aria-label="Hero section">
      {/* Animated scan line */}
      <div className={styles.scanLine} aria-hidden="true" />

      {/* Ambient glow behind robot */}
      <div className={styles.glowOrb} aria-hidden="true" />

      {/* Giant background text */}
      <div className={styles.heroTextWrapper} aria-hidden="true">
        <span className={styles.heroTextTop}>MUROX</span>
        <span className={styles.heroTextBottom}>STUDIO</span>
      </div>

      {/* AI status chip */}
      <div className={styles.aiChip} aria-label="AI system status">
        <div className={styles.aiChipDot} />
        <span className={styles.aiChipText}>AI System Active</span>
      </div>

      {/* Hero Robot Image */}
      <div className={styles.robotWrapper}>
        <Image
          src="/hero-robot.png"
          alt="Futuristic cyberpunk AI robot representing murox.studio technology"
          width={640}
          height={780}
          priority
          quality={90}
        />
      </div>

      {/* Bottom HUD */}
      <div className={styles.heroBottom}>
        <div className={styles.cornerBracket}>
          <div className={styles.bracket} aria-hidden="true" />
          <p className={styles.heroDescription}>
            We deliver cutting-edge digital solutions that power your business
            into the future. Stay sharp. Stay ahead.
          </p>
        </div>

        {/* Pill navigation */}
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
      </div>
    </section>
  )
}
