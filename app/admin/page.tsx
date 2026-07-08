'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

interface ProjectRequest {
  id: string
  created_at: string
  first_name: string
  last_name: string
  how_know_us: string
  project_types: string[]
  budget: string
  details: string
  email: string
  whatsapp: string
  instagram: string
  status: 'new' | 'contacted' | 'in_progress' | 'completed' | 'rejected'
}

export default function AdminDashboardPage() {
  const [requests, setRequests] = useState<ProjectRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [selectedRequest, setSelectedRequest] = useState<ProjectRequest | null>(null)
  const [updatingId, setUpdatingId] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const router = useRouter()

  const fetchRequests = async () => {
    try {
      const res = await fetch('/api/admin/requests')
      if (res.status === 401) {
        router.push('/admin/login')
        return
      }
      if (!res.ok) {
        throw new Error('Failed to load requests')
      }
      const data = await res.json()
      setRequests(data.requests || [])
    } catch (err: any) {
      setError(err.message || 'An error occurred while loading requests.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRequests()
  }, [])

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (err) {
      console.error('Logout error:', err)
    }
  }

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id)
    try {
      const res = await fetch(`/api/admin/requests/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      if (res.status === 401) {
        router.push('/admin/login')
        return
      }
      if (!res.ok) {
        throw new Error('Failed to update status')
      }
      
      // Update local state
      setRequests(prev =>
        prev.map(r => (r.id === id ? { ...r, status: newStatus as any } : r))
      )
      
      // Update selected modal if open
      if (selectedRequest && selectedRequest.id === id) {
        setSelectedRequest(prev => prev ? { ...prev, status: newStatus as any } : null)
      }
    } catch (err: any) {
      alert(err.message || 'Error updating status')
    } finally {
      setUpdatingId(null)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this request permanently?')) {
      return
    }
    setDeletingId(id)
    try {
      const res = await fetch(`/api/admin/requests/${id}`, {
        method: 'DELETE',
      })
      if (res.status === 401) {
        router.push('/admin/login')
        return
      }
      if (!res.ok) {
        throw new Error('Failed to delete request')
      }

      setRequests(prev => prev.filter(r => r.id !== id))
      if (selectedRequest && selectedRequest.id === id) {
        setSelectedRequest(null)
      }
    } catch (err: any) {
      alert(err.message || 'Error deleting request')
    } finally {
      setDeletingId(null)
    }
  }

  // Stats calculation
  const totalCount = requests.length
  const newCount = requests.filter(r => r.status === 'new').length
  const contactedCount = requests.filter(r => r.status === 'contacted').length
  const inProgressCount = requests.filter(r => r.status === 'in_progress').length
  const completedCount = requests.filter(r => r.status === 'completed').length

  // Filtered requests
  const filteredRequests = requests.filter(r => {
    const matchesStatus = statusFilter === 'all' || r.status === statusFilter
    const clientName = `${r.first_name} ${r.last_name}`.toLowerCase()
    const searchString = search.toLowerCase()
    const matchesSearch =
      clientName.includes(searchString) ||
      r.email.toLowerCase().includes(searchString) ||
      r.whatsapp.toLowerCase().includes(searchString) ||
      r.instagram.toLowerCase().includes(searchString) ||
      r.details.toLowerCase().includes(searchString)

    return matchesStatus && matchesSearch
  })

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingPulse}>
          <Image src="/logo.png" alt="murox.studio" width={70} height={70} />
          <div className={styles.loadingText}>Initializing admin session...</div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.dashboard}>
      {/* Glow effects */}
      <div className={styles.glowTop} aria-hidden="true" />
      <div className={styles.glowSide} aria-hidden="true" />

      {/* Header bar */}
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <Image src="/logo.png" alt="murox logo" width={40} height={40} />
          <div>
            <div className={styles.headerTitle}>murox.studio</div>
            <div className={styles.headerSubtitle}>Admin Control Panel</div>
          </div>
        </div>
        
        <div className={styles.headerActions}>
          <Link href="/" className={styles.viewSiteBtn}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            View Site
          </Link>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Logout
          </button>
        </div>
      </header>

      <main className={styles.mainContent}>
        {/* Stats Grid */}
        <section className={styles.statsGrid}>
          <div className={`${styles.statCard} ${styles.statTotal}`}>
            <div className={styles.statLabel}>Total Requests</div>
            <div className={styles.statValue}>{totalCount}</div>
          </div>
          <div className={`${styles.statCard} ${styles.statNew}`}>
            <div className={styles.statLabel}>New Inquiries</div>
            <div className={styles.statValue}>{newCount}</div>
          </div>
          <div className={`${styles.statCard} ${styles.statContacted}`}>
            <div className={styles.statLabel}>Contacted</div>
            <div className={styles.statValue}>{contactedCount}</div>
          </div>
          <div className={`${styles.statCard} ${styles.statProgress}`}>
            <div className={styles.statLabel}>In Progress</div>
            <div className={styles.statValue}>{inProgressCount}</div>
          </div>
          <div className={`${styles.statCard} ${styles.statCompleted}`}>
            <div className={styles.statLabel}>Completed</div>
            <div className={styles.statValue}>{completedCount}</div>
          </div>
        </section>

        {/* Filter controls */}
        <section className={styles.controlsRow}>
          <div className={styles.searchWrapper}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.searchIcon}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search by client name, email, details, or handles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filterWrapper}>
            <label htmlFor="statusFilter">Status:</label>
            <select
              id="statusFilter"
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </section>

        {/* Request Grid/Table */}
        {error && <div className={styles.errorAlert}>{error}</div>}

        {filteredRequests.length === 0 ? (
          <div className={styles.emptyState}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="9" x2="15" y2="9" />
              <line x1="9" y1="13" x2="15" y2="13" />
              <line x1="9" y1="17" x2="13" y2="17" />
            </svg>
            <p>No project requests found</p>
          </div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Project Types</th>
                  <th>Budget</th>
                  <th>Status</th>
                  <th>Submitted</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map(req => (
                  <tr key={req.id} className={req.status === 'new' ? styles.newRow : ''}>
                    <td>
                      <div className={styles.clientName}>
                        {req.first_name} {req.last_name}
                      </div>
                      <div className={styles.clientMeta}>
                        Found via {req.how_know_us}
                      </div>
                    </td>
                    <td>
                      <div className={styles.typesList}>
                        {req.project_types.map(t => (
                          <span key={t} className={styles.typeBadge}>
                            {t.replace('-', ' ')}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td>
                      <span className={styles.budgetValue}>
                        {req.budget.replace('-', ' ')}
                      </span>
                    </td>
                    <td>
                      <select
                        value={req.status}
                        onChange={e => handleStatusChange(req.id, e.target.value)}
                        disabled={updatingId === req.id}
                        className={`${styles.statusDropdown} ${styles[`status_${req.status}`]}`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </td>
                    <td>
                      <span className={styles.timeValue}>{formatDate(req.created_at)}</span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div className={styles.rowActions}>
                        <button
                          onClick={() => setSelectedRequest(req)}
                          className={styles.viewBtn}
                          title="View Details"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(req.id)}
                          className={styles.deleteBtn}
                          disabled={deletingId === req.id}
                          title="Delete Request"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* Detail Modal */}
      {selectedRequest && (
        <div className={styles.modalOverlay} onClick={() => setSelectedRequest(null)}>
          <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <h2 className={styles.modalTitle}>
                  {selectedRequest.first_name} {selectedRequest.last_name}
                </h2>
                <p className={styles.modalSubtitle}>Submitted on {formatDate(selectedRequest.created_at)}</p>
              </div>
              <button className={styles.closeModalBtn} onClick={() => setSelectedRequest(null)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalSection}>
                <div className={styles.modalLabel}>Project Types</div>
                <div className={styles.modalPills}>
                  {selectedRequest.project_types.map(t => (
                    <span key={t} className={styles.modalPill}>
                      {t.replace('-', ' ')}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.modalRow}>
                <div>
                  <div className={styles.modalLabel}>Budget</div>
                  <div className={styles.modalValue}>{selectedRequest.budget.replace('-', ' ')}</div>
                </div>
                <div>
                  <div className={styles.modalLabel}>Referral Source</div>
                  <div className={styles.modalValue}>{selectedRequest.how_know_us}</div>
                </div>
                <div>
                  <div className={styles.modalLabel}>Status</div>
                  <select
                    value={selectedRequest.status}
                    onChange={e => handleStatusChange(selectedRequest.id, e.target.value)}
                    disabled={updatingId === selectedRequest.id}
                    className={`${styles.statusDropdown} ${styles[`status_${selectedRequest.status}`]}`}
                    style={{ margin: 0 }}
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
              </div>

              <div className={styles.modalSection}>
                <div className={styles.modalLabel}>Project Description</div>
                <div className={styles.modalDescription}>
                  {selectedRequest.details || <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>No description provided.</span>}
                </div>
              </div>

              <div className={styles.modalSection}>
                <div className={styles.modalLabel}>Contact Methods</div>
                <div className={styles.contactMethodsGrid}>
                  {selectedRequest.email && (
                    <a
                      href={`mailto:${selectedRequest.email}?subject=Regarding your request with murox.studio`}
                      className={styles.contactLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={styles.contactIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      </div>
                      <div>
                        <div className={styles.contactLabel}>Email</div>
                        <div className={styles.contactValue}>{selectedRequest.email}</div>
                      </div>
                    </a>
                  )}

                  {selectedRequest.whatsapp && (
                    <a
                      href={`https://wa.me/${selectedRequest.whatsapp.replace(/\D/g, '')}`}
                      className={styles.contactLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={styles.contactIcon} style={{ background: 'rgba(37, 211, 102, 0.15)', color: '#25d366' }}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.559 4.12 1.533 5.845L.057 23.169a.5.5 0 00.614.63l5.508-1.441A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.368l-.359-.213-3.717.972.991-3.62-.234-.372A9.818 9.818 0 1112 21.818z"/>
                        </svg>
                      </div>
                      <div>
                        <div className={styles.contactLabel}>WhatsApp</div>
                        <div className={styles.contactValue}>{selectedRequest.whatsapp}</div>
                      </div>
                    </a>
                  )}

                  {selectedRequest.instagram && (
                    <a
                      href={`https://instagram.com/${selectedRequest.instagram.replace('@', '')}`}
                      className={styles.contactLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={styles.contactIcon} style={{ background: 'rgba(225, 48, 108, 0.15)', color: '#e1306c' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                      </div>
                      <div>
                        <div className={styles.contactLabel}>Instagram</div>
                        <div className={styles.contactValue}>{selectedRequest.instagram}</div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                className={styles.modalDeleteBtn}
                onClick={() => handleDelete(selectedRequest.id)}
                disabled={deletingId === selectedRequest.id}
              >
                Delete Inquire
              </button>
              <button className={styles.modalCloseBtn} onClick={() => setSelectedRequest(null)}>
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
