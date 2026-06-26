import { Link } from 'react-router-dom'
import { FileText, BookOpen, BarChart3, Video, Download, ArrowRight } from 'lucide-react'
import { resources, resourceTypeLabels } from '../data/blog'
import { PageHero } from '../components/ui/PageHero'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'
import { CTASection } from '../components/home/CTASection'

const typeIcons = {
  guide: BookOpen,
  whitepaper: FileText,
  'case-study': BarChart3,
  webinar: Video,
}

const categories = [...new Set(resources.map((r) => r.category))]

export function ResourcesPage() {
  return (
    <>
      <PageHero
        badge="Resources"
        title="Guides, Whitepapers &"
        titleAccent="Case Studies"
        description="Technical documentation, industry research, and customer success stories to support your cloud, AI, and voice initiatives."
      />

      <section className="py-16 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-text-secondary">
              Explore our resource library or{' '}
              <Link to="/blog" className="text-veridian hover:underline">
                read the latest insights on our blog
              </Link>
              .
            </p>
          </AnimatedSection>

          {categories.map((category) => (
            <div key={category} className="mb-16 last:mb-0">
              <AnimatedSection className="mb-8">
                <h2 className="text-2xl font-bold">{category}</h2>
              </AnimatedSection>
              <StaggerContainer className="grid md:grid-cols-2 gap-6">
                {resources
                  .filter((r) => r.category === category)
                  .map((resource) => {
                    const Icon = typeIcons[resource.type]
                    return (
                      <StaggerItem key={resource.id}>
                        <div
                          id={resource.id}
                          className="p-8 rounded-2xl bg-bg-card border border-border-subtle hover:border-veridian/20 transition-all h-full scroll-mt-24"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-veridian/10 border border-veridian/20 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-veridian" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-xs font-medium text-veridian uppercase tracking-wider">
                                {resourceTypeLabels[resource.type]}
                              </span>
                              <h3 className="text-lg font-semibold mt-1 mb-2">{resource.title}</h3>
                              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                {resource.description}
                              </p>
                              {resource.type === 'webinar' ? (
                                <Link
                                  to={resource.href}
                                  className="inline-flex items-center gap-1 text-sm font-medium text-veridian hover:gap-2 transition-all"
                                >
                                  Request access <ArrowRight className="w-4 h-4" />
                                </Link>
                              ) : (
                                <Link
                                  to="/contact?type=general"
                                  className="inline-flex items-center gap-1 text-sm font-medium text-veridian hover:gap-2 transition-all"
                                >
                                  <Download className="w-4 h-4" />
                                  Request download
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </StaggerItem>
                    )
                  })}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-bg-secondary/30 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-4">Need Technical Documentation?</h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Platform documentation, API references, and deployment guides are available to customers and
              partners. Contact us for access.
            </p>
            <Button variant="primary" href="/contact">
              Request Documentation Access
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  )
}
