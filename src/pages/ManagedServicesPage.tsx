import { Settings, Monitor, Shield, DollarSign, Clock, Users, AlertTriangle, TrendingUp } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { CTASection } from '../components/home/CTASection'
import { Button } from '../components/ui/Button'

const managedServices = [
  {
    icon: Monitor,
    title: 'Infrastructure Monitoring',
    description: '24/7 proactive monitoring of your cloud infrastructure, applications, and voice systems with intelligent alerting and escalation.',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description: 'Dedicated NOC team with defined SLAs for detection, triage, and resolution. Post-incident reviews and root cause analysis included.',
  },
  {
    icon: Shield,
    title: 'Security Operations',
    description: 'Patch management, vulnerability scanning, access reviews, and security incident response as an extension of your team.',
  },
  {
    icon: Settings,
    title: 'Platform Operations',
    description: 'Day-to-day management of cloud platforms, Kubernetes clusters, databases, and voice infrastructure — fully outsourced.',
  },
  {
    icon: DollarSign,
    title: 'Cost Optimization',
    description: 'Continuous FinOps analysis, right-sizing recommendations, reserved capacity planning, and waste elimination.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Tuning',
    description: 'Regular performance reviews, capacity planning, and optimization to ensure your infrastructure scales with your business.',
  },
]

const slaTiers = [
  { tier: 'Essential', uptime: '99.9%', response: '4 hours', coverage: 'Business hours' },
  { tier: 'Professional', uptime: '99.95%', response: '1 hour', coverage: '16x5' },
  { tier: 'Enterprise', uptime: '99.99%', response: '15 minutes', coverage: '24x7x365' },
]

export function ManagedServicesPage() {
  return (
    <>
      <PageHero
        badge="Managed Services"
        title="Your Outsourced"
        titleAccent="Cloud Operations Team"
        description="When internal expertise is limited, Kore Veridian becomes your technical team — operating, monitoring, and optimizing your cloud infrastructure around the clock."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">What We Manage</h2>
            <p className="text-text-secondary">
              From cloud control planes to voice platforms — we take ownership of your operational burden so you can focus on innovation.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managedServices.map((svc) => {
              const Icon = svc.icon
              return (
                <StaggerItem key={svc.title}>
                  <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-veridian/20 transition-all h-full">
                    <Icon className="w-8 h-8 text-veridian mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{svc.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{svc.description}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-bg-secondary/30 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Service Level Options</h2>
            <p className="text-text-secondary">Flexible tiers designed to match your operational requirements and budget.</p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {slaTiers.map((tier) => (
              <StaggerItem key={tier.tier}>
                <div className="p-8 rounded-2xl bg-bg-card border border-border-subtle text-center">
                  <h3 className="text-xl font-bold gradient-text mb-6">{tier.tier}</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold">{tier.uptime}</div>
                      <div className="text-xs text-text-muted uppercase tracking-wider">Uptime SLA</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4 text-veridian" />
                        {tier.response}
                      </div>
                      <div className="text-xs text-text-muted uppercase tracking-wider">Response Time</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold flex items-center justify-center gap-2">
                        <Users className="w-4 h-4 text-veridian" />
                        {tier.coverage}
                      </div>
                      <div className="text-xs text-text-muted uppercase tracking-wider">Coverage</div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 text-center">
        <Button variant="primary" size="lg" href="/contact?type=managed">
          Get a Managed Services Quote
        </Button>
      </section>

      <CTASection />
    </>
  )
}
