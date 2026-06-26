import { partners } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'

export function LogoCloud() {
  return (
    <section className="py-16 border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm text-text-muted uppercase tracking-wider font-medium">
            Built on proven open-source and cloud-native technologies
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-lg font-semibold text-text-muted/50 hover:text-text-muted transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
