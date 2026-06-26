import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Upload,
  FileText,
  X,
  Link2,
  Globe,
  Phone,
} from 'lucide-react'
import { Button } from '../ui/Button'
import { submitCareerApplication } from '../../lib/api'
import { getJobById } from '../../data/careers'

const MAX_RESUME_BYTES = 2 * 1024 * 1024
const ACCEPTED_RESUME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

interface CareerApplicationFormProps {
  roleId: string
  roleTitle: string
  className?: string
  onCancel?: () => void
}

export function CareerApplicationForm({
  roleId,
  roleTitle,
  className = '',
  onCancel,
}: CareerApplicationFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    coverLetter: '',
    website: '',
  })

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setError(null)
    if (!file) {
      setResumeFile(null)
      return
    }
    if (!ACCEPTED_RESUME_TYPES.includes(file.type)) {
      setError('Please upload a PDF or Word document (.pdf, .doc, .docx).')
      setResumeFile(null)
      return
    }
    if (file.size > MAX_RESUME_BYTES) {
      setError('Resume must be 2 MB or smaller.')
      setResumeFile(null)
      return
    }
    setResumeFile(file)
  }

  const readFileAsBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result as string
        resolve(result.split(',')[1] ?? '')
      }
      reader.onerror = () => reject(new Error('Failed to read resume file'))
      reader.readAsDataURL(file)
    })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!resumeFile) {
      setError('Please attach your resume to submit an application.')
      return
    }

    setSubmitting(true)
    setError(null)

    try {
      const resumeBase64 = await readFileAsBase64(resumeFile)
      await submitCareerApplication({
        ...formData,
        roleId,
        roleTitle,
        resumeFileName: resumeFile.name,
        resumeContentType: resumeFile.type,
        resumeBase64,
      })
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`p-10 rounded-2xl bg-bg-card border border-veridian/20 text-center ${className}`}
      >
        <CheckCircle2 className="w-16 h-16 text-veridian mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Application Submitted</h3>
        <p className="text-text-secondary mb-2">
          Thank you for applying for <span className="text-text-primary font-medium">{roleTitle}</span>.
        </p>
        <p className="text-sm text-text-muted">
          Our talent team will review your application and respond within 5 business days.
        </p>
      </motion.div>
    )
  }

  const job = getJobById(roleId)

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-8 rounded-2xl bg-bg-card border border-veridian/20 space-y-6 ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold mb-1">Apply for this Role</h3>
          <p className="text-sm text-veridian font-medium">{roleTitle}</p>
          {job && (
            <p className="text-xs text-text-muted mt-1">
              {job.department} · {job.location} · {job.type}
            </p>
          )}
        </div>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-white/5 transition-colors"
            aria-label="Close application form"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {error && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-300">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="career-name" className="block text-sm font-medium text-text-secondary mb-2">
            Full Name *
          </label>
          <input
            id="career-name"
            type="text"
            required
            disabled={submitting}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary focus:outline-none focus:border-veridian/50 disabled:opacity-50"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="career-email" className="block text-sm font-medium text-text-secondary mb-2">
            Email *
          </label>
          <input
            id="career-email"
            type="email"
            required
            disabled={submitting}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary focus:outline-none focus:border-veridian/50 disabled:opacity-50"
            placeholder="jane@email.com"
          />
        </div>
        <div>
          <label htmlFor="career-phone" className="block text-sm font-medium text-text-secondary mb-2">
            Phone
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              id="career-phone"
              type="tel"
              disabled={submitting}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary focus:outline-none focus:border-veridian/50 disabled:opacity-50"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>
        <div>
          <label htmlFor="career-linkedin" className="block text-sm font-medium text-text-secondary mb-2">
            LinkedIn Profile *
          </label>
          <div className="relative">
            <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              id="career-linkedin"
              type="url"
              required
              disabled={submitting}
              value={formData.linkedin}
              onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary focus:outline-none focus:border-veridian/50 disabled:opacity-50"
              placeholder="https://linkedin.com/in/you"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="career-portfolio" className="block text-sm font-medium text-text-secondary mb-2">
          Portfolio / GitHub
        </label>
        <div className="relative">
          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            id="career-portfolio"
            type="url"
            disabled={submitting}
            value={formData.portfolio}
            onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary focus:outline-none focus:border-veridian/50 disabled:opacity-50"
            placeholder="https://github.com/you"
          />
        </div>
      </div>

      <div>
        <label htmlFor="career-cover" className="block text-sm font-medium text-text-secondary mb-2">
          Cover Letter *
        </label>
        <textarea
          id="career-cover"
          required
          rows={4}
          disabled={submitting}
          value={formData.coverLetter}
          onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary focus:outline-none focus:border-veridian/50 resize-none disabled:opacity-50"
          placeholder="Tell us why you're a great fit for this role and what excites you about Kore Veridian..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">Resume *</label>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="hidden"
          onChange={handleResumeChange}
          disabled={submitting}
        />
        {resumeFile ? (
          <div className="flex items-center justify-between p-4 rounded-xl bg-bg-primary border border-veridian/30">
            <div className="flex items-center gap-3 min-w-0">
              <FileText className="w-5 h-5 text-veridian flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{resumeFile.name}</p>
                <p className="text-xs text-text-muted">{(resumeFile.size / 1024).toFixed(0)} KB</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setResumeFile(null)
                if (fileInputRef.current) fileInputRef.current.value = ''
              }}
              className="p-2 text-text-muted hover:text-red-400 transition-colors"
              aria-label="Remove resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={submitting}
            className="w-full p-8 rounded-xl border-2 border-dashed border-border-subtle hover:border-veridian/40 bg-bg-primary/50 transition-colors text-center group disabled:opacity-50"
          >
            <Upload className="w-8 h-8 text-text-muted group-hover:text-veridian mx-auto mb-2 transition-colors" />
            <p className="text-sm font-medium text-text-secondary">Upload resume</p>
            <p className="text-xs text-text-muted mt-1">PDF or Word · Max 2 MB</p>
          </button>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button type="submit" variant="primary" size="lg" disabled={submitting} className="sm:flex-1">
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Application
              <Send className="w-4 h-4" />
            </>
          )}
        </Button>
        {onCancel && (
          <Button type="button" variant="ghost" size="lg" onClick={onCancel} disabled={submitting}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  )
}
