'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

interface LinkItem {
  label: string
  href: string
  isPlaceholder?: boolean
  target?: string
}

interface LinkGroup {
  title: string
  items: LinkItem[]
}

const links: LinkGroup[] = [
  {
    title: 'Studio',
    items: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Careers', href: '#careers' },
      { label: 'Blog', href: '#blog' },
    ]
  },
  {
    title: 'Legal',
    items: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
    ]
  },
  {
    title: 'Connect',
    items: [
      { label: 'GitHub', href: '#', isPlaceholder: true },
      { label: 'Twitter / X', href: '#', isPlaceholder: true },
      { label: 'LinkedIn', href: '#', isPlaceholder: true },
      { label: 'Instagram', href: 'https://www.instagram.com/murox.studio/', target: '_blank' },
    ]
  }
]

export default function Footer() {
  const handlePlaceholderClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <div className={styles.inner}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.brandLogo}>
              <Image
                src="/logo.png"
                alt="murox.studio logo"
                width={32}
                height={32}
                style={{ objectFit: 'contain', borderRadius: '4px' }}
              />
              <span className={styles.brandName}>murox.studio</span>
            </div>
            <p className={styles.brandTagline}>
              Powering the next generation of digital experiences with AI-driven design and engineering.
            </p>
            <div className={styles.socialLinks}>
              {/* GitHub */}
              <a
                href="#"
                onClick={handlePlaceholderClick}
                className={styles.socialLink}
                aria-label="GitHub"
                id="footer-github"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="#"
                onClick={handlePlaceholderClick}
                className={styles.socialLink}
                aria-label="Twitter"
                id="footer-twitter"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                onClick={handlePlaceholderClick}
                className={styles.socialLink}
                aria-label="LinkedIn"
                id="footer-linkedin"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/murox.studio/"
                className={styles.socialLink}
                aria-label="Instagram"
                id="footer-instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Groups */}
          {links.map((group) => (
            <div key={group.title} className={styles.linkGroup}>
              <h3 className={styles.linkGroupTitle}>{group.title}</h3>
              <ul className={styles.linkList}>
                {group.items.map((item) => (
                  <li key={item.label}>
                    {item.isPlaceholder ? (
                      <a
                        href="#"
                        onClick={handlePlaceholderClick}
                        id={`footer-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        id={`footer-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                        target={item.target}
                        rel={item.target ? 'noopener noreferrer' : undefined}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2026 <span>murox.studio</span>. All rights reserved.
          </p>
          <div className={styles.status}>
            <div className={styles.statusDot} />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
