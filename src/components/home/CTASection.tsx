import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { AnimatedSection } from '../ui/AnimatedSection'
import { GradientOrb } from '../ui/GradientOrb'

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <GradientOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="veridian" size="lg" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <AnimatedSection>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="gradient-text">Infrastructure?</span>
          </h2>
          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
            Whether you need a cloud platform, voice services, strategic consulting, or a fully managed
            operations team — Kore Veridian is ready to deliver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/contact?type=demo">
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" href="/contact">
              Talk to an Expert
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
