import { Link } from 'react-router-dom'
import {
  Presentation,
  DollarSign,
  FlaskConical,
  DraftingCompass,
  CheckCircle2,
  Mail,
  Phone,
  ArrowRight,
} from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { ContactForm } from '../components/contact/ContactForm'
import { CTASection } from '../components/home/CTASection'
import { Button } from '../components/ui/Button'
import { salesOfferings, salesProcess } from '../data/support'

const offeringIcons = [Presentation, DollarSign, FlaskConical, DraftingCompass]

export function SalesContactPage() {
  return (
    <>
      <PageHero
        badge="Sales & Solutions"
        title="Let's Design Your"
        titleAccent="Cloud Strategy"
        description="Request a demo, explore enterprise pricing, or engage our solutions architects for cloud, voice, and managed services deployments."
      />

      <section className="py-20 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Can Help</h2>
            <p className="text-text-secondary">
              From first conversation to production deployment — our sales and solutions team guides every step.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {salesOfferings.map((offering, i) => {
              const Icon = offeringIcons[i]
              return (
                <StaggerItem key={offering.title}>
                  <div className="p-8 rounded-2xl bg-bg-card border border-border-subtle hover:border-veridian/20 transition-all h-full">
                    <Icon className="w-8 h-8 text-veridian mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{offering.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">{offering.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {offering.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-veridian/10 border border-veridian/20 text-veridian"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-bg-secondary/30 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Sales Process</h2>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {salesProcess.map((step) => (
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

      <section className="py-20 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2">Why Teams Choose Kore Veridian</h2>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              'Dedicated solutions architect on every enterprise engagement',
              'Transparent pricing with no hidden platform fees',
              'Cloud, voice, and managed services under one partner',
            ].map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-bg-card border border-border-subtle">
                  <CheckCircle2 className="w-5 h-5 text-veridian flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-text-secondary leading-relaxed">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="contact-form" className="py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <AnimatedSection className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Talk to Sales</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Complete the form and a member of our solutions team will reach out within one business day to
                  schedule your demo or discovery call.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-veridian" />
                    <a href="mailto:contact@koreveridian.ca" className="text-text-primary hover:text-veridian">
                      contact@koreveridian.ca
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-veridian" />
                    <a href="tel:+18005550142" className="text-text-primary hover:text-veridian">
                      +1 (800) 555-0142
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle">
                <h4 className="font-semibold mb-2">Not ready for a call?</h4>
                <p className="text-sm text-text-secondary mb-4">
                  Explore our platform capabilities and service lines first.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" href="/platform">
                    Cloud Platform
                  </Button>
                  <Button variant="ghost" size="sm" href="/solutions">
                    Solutions
                  </Button>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-sm text-veridian hover:gap-2 transition-all"
              >
                View all contact options <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-3" delay={0.15}>
              <ContactForm
                defaultType="demo"
                showTypeSelector={false}
                submitLabel="Request a Demo"
                messagePlaceholder="Tell us about your organization, current infrastructure, and what you are looking to achieve..."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
