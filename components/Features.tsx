import styles from './Features.module.css'

const features = [
  {
    id: 'feat-ai-design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
      </svg>
    ),
    iconClass: 'iconYellow',
    tag: 'AI-Powered',
    title: 'AI-Driven Design',
    desc: 'Harness the power of generative AI to craft pixel-perfect digital experiences that adapt, evolve, and engage users at a deeper level.',
    link: 'Explore AI Tools',
  },
  {
    id: 'feat-digital-security',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
      </svg>
    ),
    iconClass: 'iconCyan',
    tag: 'Security',
    title: 'Zero-Trust Security',
    desc: 'Protect every endpoint with military-grade encryption and zero-trust architecture — your data, your rules, your fortress.',
    link: 'Learn Security',
  },
  {
    id: 'feat-performance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
      </svg>
    ),
    iconClass: 'iconOrange',
    tag: 'Performance',
    title: 'Blazing Performance',
    desc: 'Edge-optimized infrastructure with sub-50ms response times. We deploy globally so your product feels instant, anywhere on earth.',
    link: 'View Benchmarks',
  },
]

export default function Features() {
  return (
    <section className={styles.section} id="services" aria-labelledby="features-heading">
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>What We Do</span>
          <h2 className={styles.title} id="features-heading">
            Built for the <span>Future</span>
          </h2>
          <p className={styles.subtitle}>
            We combine AI innovation with world-class engineering to deliver products that define tomorrow.
          </p>
        </header>

        <div className={styles.grid}>
          {features.map((f) => (
            <article key={f.id} className={styles.card} id={f.id}>
              <span className={styles.cardTag}>{f.tag}</span>
              <div className={`${styles.cardIconWrapper} ${styles[f.iconClass]}`}>
                {f.icon}
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
              <div className={styles.cardDivider} />
              <div className={styles.cardFooter}>
                {f.link}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
