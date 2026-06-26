import { features, processSteps } from '../../data/content'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../ui/AnimatedSection'
import { GradientOrb } from '../ui/GradientOrb'

export function FeaturesGrid() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-bg-secondary/30">
      <GradientOrb className="top-0 right-0" color="purple" size="md" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-veridian bg-veridian/10 rounded-full border border-veridian/20 mb-4">
            Why Kore Veridian
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Built for <span className="gradient-text">Enterprise Scale</span>
          </h2>
          <p className="text-lg text-text-secondary">
            We combine cloud-native architecture, AI-driven operations, and deep voice expertise into one
            unified platform and services organization.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-veridian/20 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-xl bg-veridian/10 border border-veridian/20 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-veridian" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Process steps */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold">How We Work</h3>
          </div>
        </AnimatedSection>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="relative p-6 rounded-2xl bg-bg-card border border-border-subtle text-center">
                <div className="text-4xl font-bold gradient-text mb-3">{step.step}</div>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-text-secondary">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
