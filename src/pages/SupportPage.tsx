import { Link } from 'react-router-dom'
import {
  Headphones,
  Mail,
  Phone,
  AlertTriangle,
  BookOpen,
  Clock,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { ContactForm } from '../components/contact/ContactForm'
import { CTASection } from '../components/home/CTASection'
import { Button } from '../components/ui/Button'
import { supportChannels, supportTiers, supportFaqs } from '../data/support'

const channelIcons = [BookOpen, Mail, Phone, AlertTriangle]

export function SupportPage() {
  return (
    <>
      <PageHero
        badge="Support"
        title="Expert Support When"
        titleAccent="You Need It"
        description="From self-service resources to 24/7 NOC escalation — Kore Veridian support is built for enterprise cloud and voice infrastructure."
      />

      {/* Support channels */}
      <section className="py-20 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Reach Us</h2>
            <p className="text-text-secondary">
              Choose the channel that matches your urgency and support tier.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, i) => {
              const Icon = channelIcons[i]
              return (
                <StaggerItem key={channel.title}>
                  <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle h-full flex flex-col">
                    <Icon className="w-8 h-8 text-veridian mb-4" />
                    <h3 className="font-semibold mb-2">{channel.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-4">
                      {channel.description}
                    </p>
                    <div className="text-xs text-text-muted uppercase tracking-wider mb-1">Availability</div>
                    <div className="text-sm text-veridian font-medium">{channel.availability}</div>
                    {channel.contact && (
                      <div className="text-sm text-text-primary mt-2">{channel.contact}</div>
                    )}
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Support tiers */}
      <section className="py-20 bg-bg-secondary/30 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Support Tiers</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Response times and coverage depend on your service agreement.{' '}
              <Link to="/managed-services" className="text-veridian hover:underline">
                View managed services SLAs
              </Link>
              .
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {supportTiers.map((tier) => (
              <StaggerItem key={tier.name}>
                <div className="p-8 rounded-2xl bg-bg-card border border-border-subtle h-full">
                  <h3 className="text-xl font-bold gradient-text mb-1">{tier.name}</h3>
                  <p className="text-sm text-text-muted mb-6">{tier.audience}</p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-veridian flex-shrink-0" />
                      <div>
                        <div className="text-xs text-text-muted uppercase">Response Time</div>
                        <div className="text-sm font-medium">{tier.response}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Headphones className="w-4 h-4 text-veridian flex-shrink-0" />
                      <div>
                        <div className="text-xs text-text-muted uppercase">Coverage</div>
                        <div className="text-sm font-medium">{tier.coverage}</div>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-veridian flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-b border-border-subtle">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </AnimatedSection>
          <StaggerContainer className="space-y-4">
            {supportFaqs.map((faq) => (
              <StaggerItem key={faq.question}>
                <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatedSection className="mt-10 text-center" delay={0.2}>
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 text-sm text-veridian hover:gap-3 transition-all"
            >
              Browse documentation and guides <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Support ticket form */}
      <section id="ticket" className="py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <AnimatedSection className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Open a Support Request</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Describe your issue and our support team will respond based on your service tier. For
                production-down emergencies, call the escalation line if you have Enterprise coverage.
              </p>
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle space-y-3">
                <h4 className="font-semibold text-sm">Before you submit</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Include your account or tenant ID</li>
                  <li>• Specify affected service (cloud, voice, managed)</li>
                  <li>• Attach error messages or logs if available</li>
                  <li>• Indicate business impact and urgency</li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-3" delay={0.15}>
              <ContactForm
                defaultType="support"
                showTypeSelector={false}
                submitLabel="Submit Support Request"
                messagePlaceholder="Describe the issue, affected environment, steps to reproduce, and business impact..."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-12 bg-bg-secondary/30 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-secondary mb-4">Looking for sales or partnerships instead?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" href="/demo">
              Contact Sales
            </Button>
            <Button variant="ghost" href="/partners">
              Partner Program
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
