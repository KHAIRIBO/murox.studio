'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

const projectTypes = [
  {
    id: 'website-design',
    label: 'Website Design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    id: 'web-development',
    label: 'Web Development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    id: 'pc-build',
    label: 'PC Build / Setup',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    id: 'gaming',
    label: 'Gaming Solution',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="6" y1="12" x2="10" y2="12"/>
        <line x1="8" y1="10" x2="8" y2="14"/>
        <circle cx="15" cy="11" r="1" fill="currentColor"/>
        <circle cx="17" cy="13" r="1" fill="currentColor"/>
        <path d="M6 9a6 6 0 0112 0v6a3 3 0 01-6 0v-1H9v1a3 3 0 01-6 0V9z"/>
      </svg>
    ),
  },
  {
    id: 'maintenance',
    label: 'Maintenance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    id: 'other',
    label: 'Other',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/>
      </svg>
    ),
  },
]

const budgets = [
  { id: 'under-200', label: 'Under $200' },
  { id: '200-500',   label: '$200 – $500' },
  { id: '500-1k',    label: '$500 – $1,000' },
  { id: '1k-3k',     label: '$1,000 – $3,000' },
  { id: '3k-plus',   label: '$3,000+' },
  { id: 'discuss',   label: 'Let\'s Discuss' },
]

const howKnowOptions = [
  'Instagram',
  'Google Search',
  'Friend / Referral',
  'LinkedIn',
  'GitHub',
  'WhatsApp',
  'Other',
]

export default function ContactPage() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedBudget, setSelectedBudget] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const toggleType = (id: string) => {
    setSelectedTypes(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    
    const formData = new FormData(e.currentTarget)
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const howKnow = formData.get('howKnow') as string
    const details = formData.get('details') as string
    const email = formData.get('email') as string
    const whatsapp = formData.get('whatsapp') as string
    const instagram = formData.get('instagram') as string

    if (!firstName || !lastName || !howKnow) {
      setError('Please fill in all required fields.')
      return
    }

    if (!selectedTypes.length) {
      setError('Please select at least one project type.')
      return
    }

    if (!selectedBudget) {
      setError('Please select an estimated budget.')
      return
    }

    if (!email && !whatsapp && !instagram) {
      setError('Please provide at least one contact method (Email, WhatsApp, or Instagram).')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          howKnow,
          projectTypes: selectedTypes,
          budget: selectedBudget,
          details,
          email,
          whatsapp,
          instagram,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err: any) {
      setError(err.message || 'Failed to submit request.')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } finally {
      setLoading(false)
    }
  }


  if (submitted) {
    return (
      <div className={styles.page}>
        <div className={styles.glowTop} aria-hidden="true" />
        <div className="container">
          <div className={styles.successWrapper}>
            <div className={styles.successCard}>
              <div className={styles.successIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h1 className={styles.successTitle}>We Got Your Request!</h1>
              <p className={styles.successText}>
                Thanks for reaching out. Our team at murox.studio will review your project details
                and get back to you within 24 hours via your preferred contact method.
              </p>
              <Link href="/" className={styles.successBackBtn}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: '14px', height: '14px' }}>
                  <path d="M19 12H5M12 5l-7 7 7 7"/>
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.glowTop} aria-hidden="true" />
      <div className={styles.glowBottomLeft} aria-hidden="true" />

      <div className="container">
        {/* Back link */}
        <Link href="/" className={styles.backLink}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>Start Your Project</span>
          <h1 className={styles.title}>
            Tell Us About Your <span>Vision</span>
          </h1>
          <p className={styles.subtitle}>
            Fill in the details below and we&rsquo;ll come back to you with a tailored plan. No commitments, just a conversation.
          </p>
        </header>

        {/* Layout */}
        <div className={styles.layout}>

          {/* ── FORM CARD ── */}
          <form className={styles.formCard} onSubmit={handleSubmit} noValidate>
            {error && (
              <div className={styles.errorBox}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: '20px', height: '20px', flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Name row */}
            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="firstName">
                  First Name <span className={styles.required}>*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className={styles.input}
                  placeholder="e.g. Khair"
                  required
                  autoComplete="given-name"
                />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="lastName">
                  Last Name <span className={styles.required}>*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className={styles.input}
                  placeholder="e.g. Ibrahim"
                  required
                  autoComplete="family-name"
                />
              </div>
            </div>

            {/* How did you know us */}
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="howKnow">
                How did you find us? <span className={styles.required}>*</span>
              </label>
              <select id="howKnow" name="howKnow" className={styles.select} required defaultValue="">
                <option value="" disabled>Select an option…</option>
                {howKnowOptions.map(o => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>

            <div className={styles.divider} />

            {/* Type of project */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                Type of Project <span className={styles.required}>*</span>
              </label>
              <div className={styles.projectTypes}>
                {projectTypes.map(type => (
                  <button
                    key={type.id}
                    type="button"
                    id={`project-type-${type.id}`}
                    className={`${styles.typeCard} ${selectedTypes.includes(type.id) ? styles.typeCardActive : ''}`}
                    onClick={() => toggleType(type.id)}
                    aria-pressed={selectedTypes.includes(type.id)}
                  >
                    {type.icon}
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                Estimated Budget <span className={styles.required}>*</span>
              </label>
              <div className={styles.budgetOptions}>
                {budgets.map(b => (
                  <button
                    key={b.id}
                    type="button"
                    id={`budget-${b.id}`}
                    className={`${styles.budgetBtn} ${selectedBudget === b.id ? styles.budgetBtnActive : ''}`}
                    onClick={() => setSelectedBudget(b.id)}
                    aria-pressed={selectedBudget === b.id}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Project details */}
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="details">
                Project Details
              </label>
              <textarea
                id="details"
                name="details"
                className={styles.textarea}
                placeholder="Tell us more about your project, goals, timeline, or any specific requirements…"
                rows={4}
              />
            </div>

            <div className={styles.divider} />

            {/* Contact info */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                Contact Info <span className={styles.required}>*</span>
              </label>
              <div className={styles.contactRow}>
                {/* Email */}
                <div className={styles.inputWrapper}>
                  <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`${styles.input} ${styles.inputWithIcon}`}
                    placeholder="Email address"
                    autoComplete="email"
                  />
                </div>

                {/* WhatsApp */}
                <div className={styles.inputWrapper}>
                  <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.559 4.12 1.533 5.845L.057 23.169a.5.5 0 00.614.63l5.508-1.441A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.368l-.359-.213-3.717.972.991-3.62-.234-.372A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    className={`${styles.input} ${styles.inputWithIcon}`}
                    placeholder="WhatsApp number"
                    autoComplete="tel"
                  />
                </div>

                {/* Instagram */}
                <div className={styles.inputWrapper}>
                  <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <input
                    id="instagram"
                    name="instagram"
                    type="text"
                    className={`${styles.input} ${styles.inputWithIcon}`}
                    placeholder="@instagram handle"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={styles.submitBtn}
              id="submit-project-request"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ animation: 'spin 1s linear infinite' }}>
                    <path d="M21 12a9 9 0 11-6.219-8.56"/>
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  Send My Project Request
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </>
              )}
            </button>

          </form>

          {/* ── SIDEBAR ── */}
          <aside className={styles.sidebar}>

            {/* Direct contact card */}
            <div className={styles.sideCard}>
              <p className={styles.sideCardTitle}>Reach Us Directly</p>

              <a
                href="https://www.instagram.com/murox.studio/"
                className={styles.contactItem}
                target="_blank"
                rel="noopener noreferrer"
                id="sidebar-instagram"
              >
                <div className={styles.contactIconBox}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.contactItemLabel}>Instagram</div>
                  <div className={styles.contactItemValue}>@murox.studio</div>
                </div>
              </a>

              <a
                href="https://wa.me/message/murox"
                className={styles.contactItem}
                target="_blank"
                rel="noopener noreferrer"
                id="sidebar-whatsapp"
              >
                <div className={styles.contactIconBox}>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.559 4.12 1.533 5.845L.057 23.169a.5.5 0 00.614.63l5.508-1.441A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.368l-.359-.213-3.717.972.991-3.62-.234-.372A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.contactItemLabel}>WhatsApp</div>
                  <div className={styles.contactItemValue}>Message us</div>
                </div>
              </a>

              <a
                href="mailto:hello@murox.studio"
                className={styles.contactItem}
                id="sidebar-email"
              >
                <div className={styles.contactIconBox}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.contactItemLabel}>Email</div>
                  <div className={styles.contactItemValue}>hello@murox.studio</div>
                </div>
              </a>
            </div>

            {/* Why us */}
            <div className={styles.sideCard}>
              <p className={styles.sideCardTitle}>Why murox.studio</p>
              <div className={styles.featureList}>
                {[
                  'Custom-built for your needs',
                  'Response within 24 hours',
                  'Transparent pricing',
                  'Full-stack web expertise',
                  'PC & Gaming solutions',
                  '24/7 ongoing support',
                ].map(f => (
                  <div key={f} className={styles.featureItem}>
                    <div className={styles.featureIcon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Logo badge */}
            <div className={styles.sideCard} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Image src="/logo.png" alt="murox.studio" width={44} height={44} style={{ objectFit: 'contain', borderRadius: '8px' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.08em' }}>murox.studio</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Digital Studio — Est. 2024</div>
              </div>
            </div>

          </aside>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
