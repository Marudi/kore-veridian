import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '../ui/Button'
import { submitContactForm } from '../../lib/api'

export const inquiryTypes = [
  { value: 'demo', label: 'Request a Demo' },
  { value: 'consulting', label: 'Consulting Inquiry' },
  { value: 'managed', label: 'Managed Services' },
  { value: 'voice', label: 'Voice Services' },
  { value: 'partner', label: 'Partner Program' },
  { value: 'support', label: 'Technical Support' },
  { value: 'general', label: 'General Inquiry' },
]

interface ContactFormProps {
  defaultType?: string
  messagePlaceholder?: string
  submitLabel?: string
  showTypeSelector?: boolean
  className?: string
}

export function ContactForm({
  defaultType = 'general',
  messagePlaceholder = 'Tell us about your project or requirements...',
  submitLabel = 'Send Message',
  showTypeSelector = true,
  className = '',
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: defaultType,
    message: '',
    website: '',
  })

  useEffect(() => {
    setFormData((prev) => ({ ...prev, type: defaultType }))
  }, [defaultType])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      await submitContactForm(formData)
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
        className={`p-12 rounded-2xl bg-bg-card border border-veridian/20 text-center ${className}`}
      >
        <CheckCircle2 className="w-16 h-16 text-veridian mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
        <p className="text-text-secondary">
          Thank you for reaching out. Our team will respond within one business day.
        </p>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-8 rounded-2xl bg-bg-card border border-border-subtle space-y-6 ${className}`}
    >
      {error && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-300">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            required
            disabled={submitting}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-veridian/50 transition-colors disabled:opacity-50"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
            Work Email *
          </label>
          <input
            id="email"
            type="email"
            required
            disabled={submitting}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-veridian/50 transition-colors disabled:opacity-50"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className={showTypeSelector ? 'grid sm:grid-cols-2 gap-6' : ''}>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-2">
            Company
          </label>
          <input
            id="company"
            type="text"
            disabled={submitting}
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-veridian/50 transition-colors disabled:opacity-50"
            placeholder="Acme Corp"
          />
        </div>
        {showTypeSelector && (
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-text-secondary mb-2">
              Inquiry Type
            </label>
            <select
              id="type"
              disabled={submitting}
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary focus:outline-none focus:border-veridian/50 transition-colors disabled:opacity-50"
            >
              {inquiryTypes.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          disabled={submitting}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-veridian/50 transition-colors resize-none disabled:opacity-50"
          placeholder={messagePlaceholder}
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            {submitLabel}
            <Send className="w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  )
}
