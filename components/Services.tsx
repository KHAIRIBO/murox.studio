import styles from './Services.module.css'

interface ServiceItem {
  id: string
  title: string
  items: string[]
  icon: React.ReactNode
}

const servicesList: ServiceItem[] = [
  {
    id: 'service-web-design',
    title: 'Website Design',
    items: [
      'Modern UI/UX design',
      'Responsive layouts',
      'Landing pages',
      'Corporate websites',
      'E-commerce interfaces'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconColor} aria-hidden="true" width="26" height="26">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l.18-.328a8.261 8.261 0 001.37-3.928l.044-.24a3.75 3.75 0 011.777-2.647l.088-.049a4.806 4.806 0 001.558-2.007L14.9 6.25m-6.72 1.94l.812-.812a1.5 1.5 0 012.12 0l.813.812a1.5 1.5 0 010 2.12l-.812.813a1.5 1.5 0 01-2.12 0l-.813-.812a1.5 1.5 0 010-2.12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    )
  },
  {
    id: 'service-web-dev',
    title: 'Website Development',
    items: [
      'Custom websites',
      'Full-stack development',
      'React, Next.js, PHP, Laravel',
      'Fast, scalable, SEO-friendly',
      'API integrations'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconColor} aria-hidden="true" width="26" height="26">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    )
  },
  {
    id: 'service-hosting',
    title: 'Hosting & Domain',
    items: [
      'Domain registration assistance',
      'Hosting configuration',
      'SSL certificates',
      'Email setup',
      'Website migration'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconColor} aria-hidden="true" width="26" height="26">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    )
  },
  {
    id: 'service-database',
    title: 'Database Engineering',
    items: [
      'Database architecture',
      'MySQL & PostgreSQL',
      'Performance optimization',
      'Data migration',
      'Backup and recovery'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconColor} aria-hidden="true" width="26" height="26">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75" />
      </svg>
    )
  },
  {
    id: 'service-maintenance',
    title: 'Maintenance & Support',
    items: [
      'Regular updates',
      'Bug fixing',
      'Performance monitoring',
      'Content updates',
      '24/7 technical support'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconColor} aria-hidden="true" width="26" height="26">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l-4.2-4.2L2.25 16.5a1.5 1.5 0 002.25 2.25l5.92-5.58zM11.42 15.17L12 10.5H7.5L12 3v4.5h4.5l-5.08 7.67z" />
      </svg>
    )
  },
  {
    id: 'service-security',
    title: 'Security & Testing',
    items: [
      'Security audits',
      'Vulnerability assessment',
      'Penetration testing',
      'Bug & performance testing',
      'SSL & server hardening'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconColor} aria-hidden="true" width="26" height="26">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  },
  {
    id: 'service-repair',
    title: 'Repair & Troubleshoot',
    items: [
      'Fix broken websites',
      'Resolve server errors',
      'Debug backend/frontend code',
      'Restore hacked websites',
      'Recover lost data'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconColor} aria-hidden="true" width="26" height="26">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    )
  },
  {
    id: 'service-optimization',
    title: 'Performance Optimization',
    items: [
      'Improve loading speed',
      'Core Web Vitals tuning',
      'Image optimization',
      'Advanced caching solutions',
      'SEO performance metrics'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconColor} aria-hidden="true" width="26" height="26">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
  {
    id: 'service-seo',
    title: 'SEO & Search Visibility',
    items: [
      'Technical SEO analysis',
      'On-page content optimization',
      'Sitemap generation',
      'Search engine indexing',
      'Google Search Console setup'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconColor} aria-hidden="true" width="26" height="26">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'service-support',
    title: 'Dedicated Client Support',
    items: [
      'Technical assistance',
      'Fast response times',
      'Ongoing consultation',
      'Project monitoring',
      'Long-term maintenance plans'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconColor} aria-hidden="true" width="26" height="26">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.656-5.64 9.039 9.039 0 00-1.902-.007 3 3 0 00-4.57 5.641A8.986 8.986 0 0012 21a8.985 8.985 0 006-2.28zm-8 0a9.094 9.094 0 003.741-.479 3 3 0 00-4.656-5.64 9.039 9.039 0 00-1.902-.007 3 3 0 00-4.57 5.641A8.986 8.986 0 004 21a8.985 8.985 0 006-2.28z" />
      </svg>
    )
  }
]

export default function Services() {
  return (
    <section className={styles.section} id="services" aria-labelledby="services-heading">
      {/* Decorative glows */}
      <div className={styles.ambientGlow1} aria-hidden="true" />
      <div className={styles.ambientGlow2} aria-hidden="true" />

      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>Our Services</span>
          <h2 className={styles.title} id="services-heading">
            What We <span>Deliver</span>
          </h2>
          <p className={styles.subtitle}>
            Building secure, scalable, and high-performance digital solutions.
          </p>
        </header>

        {/* Services grid */}
        <div className={styles.grid}>
          {servicesList.map((service) => (
            <article key={service.id} className={styles.card} id={service.id}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <ul className={styles.list}>
                {service.items.map((item, index) => (
                  <li key={index} className={styles.listItem}>
                    <span className={styles.bullet} aria-hidden="true">▪</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className={styles.footerCta}>
          <a href="#contact" className={styles.ctaButton} id="services-cta-start-project">
            Start Your Project
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
