import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
      <Link href="/" className={styles.logo} id="site-logo">
        <Image
          src="/logo.png"
          alt="murox.studio logo"
          width={40}
          height={40}
          className={styles.logoImg}
          priority
        />
        <span className={styles.logoText}>murox.studio</span>
      </Link>

      <ul className={styles.navLinks}>
        <li><Link href="/" className={styles.active} id="nav-home">Homepage</Link></li>
        <li><Link href="#about" id="nav-about">About</Link></li>
        <li><Link href="#services" id="nav-services">Services</Link></li>
        <li><Link href="#blog" id="nav-blog">Blog</Link></li>
      </ul>

      <Link href="/contact" className={styles.ctaBtn} id="cta-start-project">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2a2.94 2.94 0 00-3-3z"/>
          <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M15 12v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
        </svg>
        Start Project
      </Link>
    </nav>
  )
}
