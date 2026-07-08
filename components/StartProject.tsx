import styles from './StartProject.module.css'

export default function StartProject() {
  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-heading">
      {/* Decorative glows */}
      <div className={styles.glowLeft} aria-hidden="true" />
      <div className={styles.glowRight} aria-hidden="true" />

      {/* Large BG text */}
      <div className={styles.bgText} aria-hidden="true">START</div>

      <div className="container">
        <div className={styles.inner}>

          {/* Eyebrow */}
          <span className={styles.eyebrow}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            Ready When You Are
          </span>

          {/* Heading */}
          <h2 className={styles.heading} id="contact-heading">
            Let&rsquo;s Build Something
            <span>Amazing Together</span>
          </h2>

          {/* Sub text */}
          <p className={styles.subtext}>
            Whether it&rsquo;s a brand-new website, a custom PC build, or a gaming solution —
            we&rsquo;re here to make it happen. Tell us about your project and let&rsquo;s get started.
          </p>

          {/* CTA Buttons */}
          <div className={styles.actions}>
            <a
              href="/contact"
              className={styles.btnPrimary}
              id="contact-start-project-btn"
            >
              Start Your Project
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="#about"
              className={styles.btnSecondary}
              id="contact-learn-more-btn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
              Learn More About Us
            </a>
          </div>

          {/* Info pills */}
          <div className={styles.infoPills}>
            <span className={styles.pill}>
              <span className={styles.pillDot} />
              Fast Turnaround
            </span>
            <span className={styles.pill}>
              <span className={styles.pillDot} />
              Custom Solutions
            </span>
            <span className={styles.pill}>
              <span className={styles.pillDot} />
              24/7 Support
            </span>
            <span className={styles.pill}>
              <span className={styles.pillDot} />
              Competitive Pricing
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
