import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { Button } from '../components/ui/Button'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { submitContactForm } from '../lib/api'

const inquiryTypes = [
  { value: 'demo', label: 'Request a Demo' },
  { value: 'consulting', label: 'Consulting Inquiry' },
  { value: 'managed', label: 'Managed Services' },
  { value: 'voice', label: 'Voice Services' },
  { value: 'partner', label: 'Partner Program' },
  { value: 'general', label: 'General Inquiry' },
]

export function ContactPage() {
  const [searchParams] = useSearchParams()
  const defaultType = searchParams.get('type') || 'general'
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

  return (
    <>
      <PageHero
        badge="Contact"
        title="Let's Build Something"
        titleAccent="Together"
        description="Whether you're exploring cloud platforms, voice services, or need a managed operations partner — our team is ready to help."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <AnimatedSection className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email', value: 'hello@koreveridian.com' },
                    { icon: Phone, label: 'Phone', value: '+1 (800) 555-0142' },
                    { icon: MapPin, label: 'Headquarters', value: 'United States' },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-veridian/10 border border-veridian/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-veridian" />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted uppercase tracking-wider">{label}</div>
                        <div className="text-sm text-text-primary">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle">
                <h4 className="font-semibold mb-2">Enterprise Sales</h4>
                <p className="text-sm text-text-secondary">
                  For enterprise deployments, custom SLAs, and multi-site rollouts, contact our solutions
                  architecture team directly.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-3" delay={0.2}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 rounded-2xl bg-bg-card border border-veridian/20 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-veridian mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
                  <p className="text-text-secondary">
                    Thank you for reaching out. Our team will respond within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-bg-card border border-border-subtle space-y-6">
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
                  <div className="grid sm:grid-cols-2 gap-6">
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
                      placeholder="Tell us about your project or requirements..."
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
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
