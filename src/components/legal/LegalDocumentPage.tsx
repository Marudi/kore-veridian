import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUp,
  CalendarDays,
  Check,
  Clock3,
  FileCheck2,
  LockKeyhole,
  Mail,
  Printer,
  Scale,
  ShieldCheck,
} from 'lucide-react'
import type { LegalDocument } from '../../data/legalDocuments'
import { legalDocuments } from '../../data/legalDocuments'
import { cn } from '../../lib/utils'
import { FlowGrid, GradientOrb } from '../ui/GradientOrb'

interface LegalDocumentPageProps {
  document: LegalDocument
}

const iconBySlug = {
  privacy: LockKeyhole,
  terms: Scale,
  security: ShieldCheck,
}

const relatedCopy = {
  privacy: 'How we manage personal information.',
  terms: 'Rules for using our public website.',
  security: 'How we approach trust and security.',
}

export function LegalDocumentPage({ document }: LegalDocumentPageProps) {
  const [activeSection, setActiveSection] = useState(document.sections[0]?.id ?? '')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const reduceMotion = useReducedMotion()
  const DocumentIcon = iconBySlug[document.slug]

  const relatedDocuments = useMemo(
    () => Object.values(legalDocuments).filter((item) => item.slug !== document.slug),
    [document.slug],
  )

  useEffect(() => {
    const previousTitle = globalThis.document.title
    const descriptionMeta = globalThis.document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = descriptionMeta?.content

    globalThis.document.title = `${document.title} ${document.titleAccent} | Kore Veridian`
    if (descriptionMeta) descriptionMeta.content = document.description

    const scrollToLocation = () => {
      const targetId = window.location.hash.slice(1)
      const target = targetId ? globalThis.document.getElementById(targetId) : null

      if (target) {
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
    }

    const frame = window.requestAnimationFrame(scrollToLocation)
    // Browsers may apply their own restoration after the first paint on a direct
    // hash URL. Repeating once keeps shared and bookmarked section links reliable.
    const restorationTimer = window.setTimeout(scrollToLocation, 120)
    window.addEventListener('hashchange', scrollToLocation)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(restorationTimer)
      window.removeEventListener('hashchange', scrollToLocation)
      globalThis.document.title = previousTitle
      if (descriptionMeta && previousDescription !== undefined) descriptionMeta.content = previousDescription
    }
  }, [document.description, document.title, document.titleAccent, reduceMotion])

  useEffect(() => {
    const onScroll = () => {
      const scrollable = globalThis.document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0
      const sectionOffset = 160
      let currentSection = document.sections[0]?.id ?? ''

      for (const section of document.sections) {
        const element = globalThis.document.getElementById(section.id)
        if (!element || element.getBoundingClientRect().top > sectionOffset) break
        currentSection = section.id
      }

      setScrollProgress(progress)
      setShowBackToTop(window.scrollY > 720)
      setActiveSection(currentSection)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [document.sections])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <div className="legal-document-page relative overflow-clip">
      <div
        className="legal-screen-only fixed left-0 top-0 z-[80] h-1 bg-gradient-to-r from-veridian via-accent-blue to-accent-purple transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <section className="relative overflow-hidden border-b border-border-subtle py-16 lg:py-24">
        <FlowGrid />
        <GradientOrb className="-right-28 -top-24 opacity-60" color="veridian" size="lg" />
        <GradientOrb className="-bottom-32 left-1/4 opacity-35" color="purple" size="md" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-veridian/25 bg-veridian/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-veridian"
          >
            <DocumentIcon className="h-3.5 w-3.5" />
            {document.badge}
          </motion.div>

          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              >
                {document.title} <span className="gradient-text">{document.titleAccent}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="mt-6 max-w-3xl text-lg leading-8 text-text-secondary"
              >
                {document.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="glass-panel rounded-2xl p-5 shadow-2xl shadow-black/20"
            >
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-text-muted">
                    <CalendarDays className="h-3.5 w-3.5 text-veridian" />
                    Effective
                  </span>
                  <p className="mt-1.5 font-medium text-text-primary">{document.effectiveDate}</p>
                </div>
                <div>
                  <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-text-muted">
                    <Clock3 className="h-3.5 w-3.5 text-veridian" />
                    Reading time
                  </span>
                  <p className="mt-1.5 font-medium text-text-primary">{document.readingTime}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => window.print()}
                className="legal-screen-only mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border-subtle bg-white/5 px-4 py-2.5 text-sm text-text-secondary transition-colors hover:border-veridian/30 hover:text-veridian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-veridian/50"
              >
                <Printer className="h-4 w-4" />
                Print or save as PDF
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {document.highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="rounded-xl border border-border-subtle bg-bg-card/60 px-4 py-3 backdrop-blur-sm"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                  {highlight.label}
                </p>
                <p className="mt-1 text-sm font-medium text-text-primary">{highlight.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="legal-screen-only border-b border-border-subtle bg-bg-secondary/70 lg:hidden">
        <nav
          aria-label={`${document.title} ${document.titleAccent} sections`}
          className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-4 sm:px-6"
        >
          {document.sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                'whitespace-nowrap rounded-full border px-3 py-1.5 text-xs transition-colors',
                activeSection === section.id
                  ? 'border-veridian/40 bg-veridian/10 text-veridian'
                  : 'border-border-subtle text-text-muted hover:text-text-primary',
              )}
            >
              {index + 1}. {section.title}
            </a>
          ))}
        </nav>
      </div>

      <section className="relative py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-veridian/[0.035] via-transparent to-accent-purple/[0.025]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16 lg:px-8">
          <aside className="legal-screen-only hidden lg:block">
            <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-border-subtle bg-bg-secondary/80 p-5 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-2 border-b border-border-subtle pb-4">
                <FileCheck2 className="h-4 w-4 text-veridian" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-text-primary">
                  In this document
                </span>
              </div>
              <nav aria-label={`${document.title} ${document.titleAccent} table of contents`}>
                <ol className="space-y-1">
                  {document.sections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        aria-current={activeSection === section.id ? 'location' : undefined}
                        className={cn(
                          'group flex gap-3 rounded-lg px-3 py-2 text-sm leading-5 transition-all',
                          activeSection === section.id
                            ? 'bg-veridian/10 text-veridian'
                            : 'text-text-muted hover:bg-white/[0.035] hover:text-text-primary',
                        )}
                      >
                        <span className="w-5 flex-shrink-0 font-mono text-[11px] opacity-70">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span>{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          <article className="min-w-0">
            <div className="mb-10 rounded-2xl border border-veridian/20 bg-gradient-to-br from-veridian/10 to-accent-blue/5 p-6 sm:p-8">
              <p className="text-lg font-medium leading-8 text-text-primary">{document.introduction}</p>
              <p className="mt-4 text-sm leading-7 text-text-secondary">{document.notice}</p>
            </div>

            <div className="space-y-6">
              {document.sections.map((section, index) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="legal-document-section scroll-mt-32 rounded-2xl border border-border-subtle bg-bg-card/45 p-6 transition-colors hover:border-white/[0.13] sm:p-8"
                >
                  <header className="mb-5 flex items-start gap-4">
                    <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-veridian/20 bg-veridian/10 font-mono text-xs font-semibold text-veridian">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">
                      {section.title}
                    </h2>
                  </header>

                  <div className="space-y-4 pl-0 text-[15px] leading-7 text-text-secondary sm:pl-[52px]">
                    {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

                    {section.bullets && (
                      <ul className="space-y-3">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span className="mt-1.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-veridian/10">
                              <Check className="h-2.5 w-2.5 text-veridian" />
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.subsections?.map((subsection) => (
                      <div key={subsection.title} className="pt-2">
                        <h3 className="mb-3 text-base font-semibold text-text-primary">{subsection.title}</h3>
                        <div className="space-y-3">
                          {subsection.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                          {subsection.bullets && (
                            <ul className="space-y-3">
                              {subsection.bullets.map((bullet) => (
                                <li key={bullet} className="flex items-start gap-3">
                                  <span className="mt-1.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-veridian/10">
                                    <Check className="h-2.5 w-2.5 text-veridian" />
                                  </span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    ))}

                    {section.callout && (
                      <div className="rounded-xl border border-amber-400/20 bg-amber-400/[0.06] p-4 text-sm leading-6 text-amber-100/80">
                        {section.callout}
                      </div>
                    )}

                    {section.closingParagraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </motion.section>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-border-subtle bg-bg-secondary/80 p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-veridian">
                    Questions or requests
                  </p>
                  <h2 className="mt-2 text-xl font-semibold">Talk with the Kore Veridian team</h2>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-text-secondary">
                    Use our general contact channel for privacy, legal, security, or assurance inquiries.
                  </p>
                </div>
                <Link
                  to="/contact/general"
                  className="legal-screen-only inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-xl bg-veridian px-5 py-3 text-sm font-semibold text-bg-primary shadow-lg shadow-veridian/20 transition-all hover:bg-veridian-light hover:shadow-veridian/30"
                >
                  <Mail className="h-4 w-4" />
                  Contact us
                </Link>
              </div>
            </div>

            <div className="legal-screen-only mt-12">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
                Related documents
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedDocuments.map((related) => {
                  const RelatedIcon = iconBySlug[related.slug]
                  return (
                    <Link
                      key={related.slug}
                      to={`/${related.slug}`}
                      className="group rounded-2xl border border-border-subtle bg-bg-card/50 p-5 transition-all hover:-translate-y-0.5 hover:border-veridian/25 hover:bg-bg-card"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <RelatedIcon className="h-5 w-5 text-veridian" />
                        <ArrowRight className="h-4 w-4 text-text-muted transition-transform group-hover:translate-x-1 group-hover:text-veridian" />
                      </div>
                      <h3 className="mt-6 font-semibold">
                        {related.title} {related.titleAccent}
                      </h3>
                      <p className="mt-2 text-sm text-text-muted">{relatedCopy[related.slug]}</p>
                    </Link>
                  )
                })}
              </div>
            </div>

            <p className="mt-10 text-center text-xs text-text-muted">
              Last updated {document.lastUpdated} · Canonical version at koreveridian.ca/{document.slug}
            </p>
          </article>
        </div>
      </section>

      <motion.button
        type="button"
        onClick={scrollToTop}
        initial={false}
        animate={{ opacity: showBackToTop ? 1 : 0, y: showBackToTop ? 0 : 12 }}
        className={cn(
          'legal-screen-only fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-veridian/30 bg-bg-elevated/95 text-veridian shadow-xl shadow-black/30 backdrop-blur-md transition-colors hover:bg-veridian hover:text-bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-veridian/50',
          !showBackToTop && 'pointer-events-none',
        )}
        aria-label="Back to top"
      >
        <ArrowUp className="h-4 w-4" />
      </motion.button>
    </div>
  )
}
