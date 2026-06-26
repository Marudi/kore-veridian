import {
  Handshake,
  TrendingUp,
  Users,
  Globe,
  Award,
  ArrowRight,
} from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { ContactForm } from '../components/contact/ContactForm'
import { CTASection } from '../components/home/CTASection'
import { partnerTypes, partnerBenefits, partnerProcess } from '../data/support'

export function PartnerPage() {
  return (
    <>
      <PageHero
        badge="Partner Program"
        title="Grow With"
        titleAccent="Kore Veridian"
        description="Join our partner ecosystem to resell cloud platform services, voice infrastructure, and managed operations — with the enablement and margins to build a scalable business."
      />

      {/* Partner types */}
      <section className="py-20 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Partner Tracks</h2>
            <p className="text-text-secondary">
              Whether you resell, integrate, refer, or interconnect — there is a program designed for your model.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {partnerTypes.map((type) => (
              <StaggerItem key={type.id}>
                <div
                  id={type.id}
                  className="p-8 rounded-2xl bg-bg-card border border-border-subtle hover:border-veridian/20 transition-all h-full scroll-mt-24"
                >
                  <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.benefits.map((b) => (
                      <span
                        key={b}
                        className="px-3 py-1 text-xs rounded-full bg-veridian/10 border border-veridian/20 text-veridian"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-bg-secondary/30 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partner Benefits</h2>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerBenefits.map((benefit, i) => {
              const icons = [Handshake, TrendingUp, Users, Award, Globe, ArrowRight]
              const Icon = icons[i]
              return (
                <StaggerItem key={benefit.title}>
                  <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle h-full">
                    <Icon className="w-8 h-8 text-veridian mb-4" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{benefit.description}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Become a Partner</h2>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerProcess.map((step) => (
              <StaggerItem key={step.step}>
                <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle text-center h-full">
                  <div className="text-3xl font-bold gradient-text mb-3">{step.step}</div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-text-secondary">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats / social proof */}
      <section className="py-16 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { value: '50+', label: 'Active Partners' },
              { value: '12', label: 'Countries Served' },
              { value: '30%', label: 'Average Partner Margin' },
            ].map((stat) => (
              <AnimatedSection key={stat.label}>
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <AnimatedSection className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Apply to the Partner Program</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Tell us about your company, target market, and partnership goals. Our partnerships team
                will review your application and respond within 5 business days.
              </p>
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle">
                <h4 className="font-semibold mb-3">Ideal partner profile</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• MSP, CSP, integrator, or telecom provider</li>
                  <li>• Existing customer base in cloud or voice</li>
                  <li>• Technical team for deployment and support</li>
                  <li>• Commitment to co-selling and customer success</li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-3" delay={0.15}>
              <ContactForm
                defaultType="partner"
                showTypeSelector={false}
                submitLabel="Submit Partner Application"
                messagePlaceholder="Tell us about your company, services, target market, geographic coverage, and why you want to partner with Kore Veridian..."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
