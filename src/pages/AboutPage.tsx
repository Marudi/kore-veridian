import { Target, Eye, Heart, Users, ArrowRight } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { CTASection } from '../components/home/CTASection'
import { CareersSection } from '../components/careers/CareersSection'
import { Button } from '../components/ui/Button'

const values = [
  {
    icon: Target,
    title: 'Cloud-First Mindset',
    description: 'Every solution we design starts from a cloud-native perspective — scalable, resilient, and automation-ready.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Clear pricing, honest assessments, and open communication. No vendor lock-in, no hidden complexity.',
  },
  {
    icon: Heart,
    title: 'Partnership',
    description: 'We embed with your team, transfer knowledge, and measure success by your outcomes — not our billable hours.',
  },
  {
    icon: Users,
    title: 'Expertise',
    description: 'Senior engineers on every engagement. Our team has built and operated infrastructure at enterprise scale.',
  },
]

export function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Engineering the Future of"
        titleAccent="Cloud & Voice"
        description="Kore Veridian is a technology company with a modern, cloud and AI-first approach to solutioning, consulting, IT management, and enterprise voice services."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We believe every organization deserves access to enterprise-grade cloud and voice infrastructure
                without the complexity of building it themselves. Kore Veridian bridges that gap — delivering
                platforms, services, and expertise that let you compete at any scale.
              </p>
              <p className="text-text-secondary leading-relaxed">
                From public cloud platforms comparable to industry leaders, to voice services aggregation,
                strategic consulting, and fully managed operations — we are the partner that grows with you.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="p-8 rounded-2xl bg-bg-card border border-border-subtle">
                <img
                  src="/logos/Icon-Only-Color.svg"
                  alt="Kore Veridian"
                  className="w-24 h-24 mx-auto mb-6 opacity-80"
                />
                <blockquote className="text-center text-lg text-text-secondary italic">
                  &ldquo;Engineered cloud. Delivered.&rdquo;
                </blockquote>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-secondary/30 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold">Our Values</h2>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <StaggerItem key={value.title}>
                  <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle text-center h-full">
                    <Icon className="w-8 h-8 text-veridian mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-text-secondary">{value.description}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      <section id="careers" className="py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-6">
              We&apos;re building the next generation of cloud and voice infrastructure. Explore open roles,
              review full job descriptions, and submit your resume directly.
            </p>
            <Button variant="outline" href="/careers">
              View All Open Roles
              <ArrowRight className="w-4 h-4" />
            </Button>
          </AnimatedSection>
          <CareersSection compact />
        </div>
      </section>

      <CTASection />
    </>
  )
}
