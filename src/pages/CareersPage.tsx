import { PageHero } from '../components/ui/PageHero'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { CareersSection } from '../components/careers/CareersSection'
import { CTASection } from '../components/home/CTASection'

export function CareersPage() {
  return (
    <>
      <PageHero
        badge="Careers"
        title="Build the Future of"
        titleAccent="Cloud & Voice"
        description="Join a remote-first team engineering enterprise cloud platforms, voice infrastructure, and AI-powered operations for clients worldwide."
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-text-secondary">
              Click <span className="text-veridian font-medium">View Details</span> for the full job description
              or <span className="text-veridian font-medium">Apply Now</span> to submit your resume and cover letter.
            </p>
          </AnimatedSection>
          <CareersSection />
        </div>
      </section>

      <CTASection />
    </>
  )
}
