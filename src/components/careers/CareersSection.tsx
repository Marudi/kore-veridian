import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  Briefcase,
  Clock,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'
import { CareerApplicationForm } from './CareerApplicationForm'
import { jobListings, careerBenefits, type JobListing } from '../../data/careers'

function JobDetailPanel({ job }: { job: JobListing }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <div className="pt-6 mt-6 border-t border-border-subtle space-y-6">
        <p className="text-sm text-text-secondary leading-relaxed">{job.summary}</p>

        <div>
          <h5 className="text-xs font-semibold uppercase tracking-wider text-veridian mb-3">
            Responsibilities
          </h5>
          <ul className="space-y-2">
            {job.responsibilities.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-veridian flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-semibold uppercase tracking-wider text-veridian mb-3">
            Requirements
          </h5>
          <ul className="space-y-2">
            {job.requirements.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-veridian mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {job.niceToHave.length > 0 && (
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
              Nice to Have
            </h5>
            <ul className="space-y-2">
              {job.niceToHave.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                  <span className="mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  )
}

interface CareersSectionProps {
  showBenefits?: boolean
  compact?: boolean
}

export function CareersSection({ showBenefits = true, compact = false }: CareersSectionProps) {
  const [searchParams] = useSearchParams()
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [applyingId, setApplyingId] = useState<string | null>(null)

  useEffect(() => {
    const roleParam = searchParams.get('role')
    if (roleParam && jobListings.some((j) => j.id === roleParam)) {
      setExpandedId(roleParam)
      setApplyingId(roleParam)
      setTimeout(() => {
        document.getElementById('careers-apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
    }
  }, [searchParams])

  const applyingJob = applyingId ? jobListings.find((j) => j.id === applyingId) : null

  const handleApply = (jobId: string) => {
    setApplyingId(jobId)
    setExpandedId(jobId)
    setTimeout(() => {
      document.getElementById('careers-apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  return (
    <>
      {showBenefits && (
        <AnimatedSection className="mb-12">
          <div className="p-8 rounded-2xl bg-veridian/5 border border-veridian/20">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-veridian" />
              <h3 className="font-semibold">Why Work at Kore Veridian</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {careerBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-2 text-sm text-text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-veridian flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      <StaggerContainer className={`grid gap-4 ${compact ? 'max-w-3xl mx-auto' : ''}`}>
        {jobListings.map((job) => {
          const isExpanded = expandedId === job.id
          return (
            <StaggerItem key={job.id}>
              <article
                id={job.id}
                className={`rounded-2xl bg-bg-card border transition-all scroll-mt-28 ${
                  isExpanded ? 'border-veridian/30 shadow-lg shadow-veridian/5' : 'border-border-subtle hover:border-veridian/20'
                }`}
              >
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-muted">
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5" />
                          {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {job.type}
                        </span>
                      </div>
                      {!isExpanded && (
                        <p className="text-sm text-text-secondary mt-3 line-clamp-2">{job.summary}</p>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 flex-shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setExpandedId(isExpanded ? null : job.id)}
                      >
                        {isExpanded ? 'Hide Details' : 'View Details'}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </Button>
                      <Button variant="primary" size="sm" onClick={() => handleApply(job.id)}>
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <AnimatePresence>{isExpanded && <JobDetailPanel job={job} />}</AnimatePresence>
                </div>
              </article>
            </StaggerItem>
          )
        })}
      </StaggerContainer>

      <div id="careers-apply" className="scroll-mt-28 mt-16">
        <AnimatePresence mode="wait">
          {applyingJob ? (
            <motion.div
              key={applyingJob.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <CareerApplicationForm
                roleId={applyingJob.id}
                roleTitle={applyingJob.title}
                onCancel={() => setApplyingId(null)}
              />
            </motion.div>
          ) : (
            <motion.div
              key="prompt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8 rounded-2xl bg-bg-card border border-border-subtle border-dashed text-center"
            >
              <p className="text-text-secondary mb-2">
                Select <span className="text-veridian font-medium">Apply Now</span> on a role above to
                submit your resume and cover letter.
              </p>
              <p className="text-xs text-text-muted">
                Questions? Email{' '}
                <a href="mailto:contact@koreveridian.ca" className="text-veridian hover:underline">
                  contact@koreveridian.ca
                </a>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
