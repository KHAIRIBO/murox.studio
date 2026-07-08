import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
      <Link href="/" className={styles.logo} id="site-logo">
        <div className={styles.logoIcon}>MX</div>
        <span className={styles.logoText}>murox.studio</span>
      </Link>

      <ul className={styles.navLinks}>
        <li><Link href="/" className={styles.active} id="nav-home">Homepage</Link></li>
        <li><Link href="#about" id="nav-about">About</Link></li>
        <li><Link href="#services" id="nav-services">Services</Link></li>
        <li><Link href="#blog" id="nav-blog">Blog</Link></li>
      </ul>

      <Link href="#demo" className={styles.ctaBtn} id="cta-watch-demo">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z"/>
        </svg>
        Watch Demo
      </Link>
    </nav>
  )
}
