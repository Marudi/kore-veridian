import { Lightbulb, Cloud, Bot, Lock, Briefcase, Users, ArrowRightLeft, ClipboardCheck } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { CTASection } from '../components/home/CTASection'
import { Button } from '../components/ui/Button'

const consultingAreas = [
  {
    id: 'cloud-strategy',
    icon: Cloud,
    title: 'Cloud Strategy & Migration',
    description:
      'Assess your current state, define a cloud roadmap, and execute phased migrations with minimal disruption. Hybrid, multi-cloud, and cloud-native strategies.',
  },
  {
    id: 'ai-strategy',
    icon: Bot,
    title: 'AI Readiness & Strategy',
    description:
      'Evaluate AI opportunities, design inference architectures, and build MLOps pipelines. From proof-of-concept to production-scale AI deployments.',
  },
  {
    id: 'security',
    icon: Lock,
    title: 'Security & Compliance',
    description:
      'HIPAA, SOC 2, and industry-specific compliance frameworks. Security architecture reviews, penetration testing coordination, and audit preparation.',
  },
  {
    id: 'implementation',
    icon: Briefcase,
    title: 'Implementation Services',
    description:
      'Hands-on deployment of cloud platforms, voice systems, and integrations. Our engineers embed with your team through go-live and stabilization.',
  },
]

const consultingProcess = [
  { icon: ClipboardCheck, title: 'Assessment', desc: 'Deep-dive into your infrastructure, applications, and business goals.' },
  { icon: Lightbulb, title: 'Strategy', desc: 'Architecture blueprints, roadmaps, and ROI models tailored to your organization.' },
  { icon: ArrowRightLeft, title: 'Execution', desc: 'Phased implementation with milestone tracking and transparent reporting.' },
  { icon: Users, title: 'Knowledge Transfer', desc: 'Documentation, training, and handoff so your team can operate independently.' },
]

export function ConsultingPage() {
  return (
    <>
      <PageHero
        badge="Consulting"
        title="Strategic Technology"
        titleAccent="Consulting"
        description="Cloud transformation, AI readiness, and architecture design from practitioners who have built and operated enterprise infrastructure at scale."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {consultingAreas.map((area) => {
              const Icon = area.icon
              return (
                <StaggerItem key={area.id}>
                  <div id={area.id} className="p-8 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent-blue/30 transition-all h-full scroll-mt-24">
                    <div className="w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-accent-blue" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{area.description}</p>
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
            <h2 className="text-3xl font-bold">Our Consulting Approach</h2>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingProcess.map((step) => {
              const Icon = step.icon
              return (
                <StaggerItem key={step.title}>
                  <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle text-center h-full">
                    <Icon className="w-8 h-8 text-accent-blue mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-text-secondary">{step.desc}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 text-center">
        <Button variant="primary" size="lg" href="/contact?type=consulting">
          Start a Consulting Engagement
        </Button>
      </section>

      <CTASection />
    </>
  )
}
