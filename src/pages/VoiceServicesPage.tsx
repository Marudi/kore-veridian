import { Server, Mic, Radio, Headphones, Phone, Network, Shield, BarChart3 } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { CTASection } from '../components/home/CTASection'
import { Button } from '../components/ui/Button'

const voiceServices = [
  {
    id: 'hosting',
    icon: Server,
    title: 'Telephony Hosting',
    description:
      'Fully managed hosting for FreePBX, Asterisk, 3CX, and custom UC platforms. High-availability clusters, automated backups, and seamless upgrades.',
  },
  {
    id: 'applications',
    icon: Mic,
    title: 'Voice Applications',
    description:
      'Deploy and manage IVR systems, contact center platforms, voice AI assistants, and custom telephony applications with CI/CD pipelines.',
  },
  {
    id: 'sip',
    icon: Radio,
    title: 'SIP Trunking & Aggregation',
    description:
      'Carrier-grade SIP trunk aggregation with intelligent routing, failover, number porting, and multi-carrier redundancy for maximum uptime.',
  },
  {
    id: 'noc',
    icon: Headphones,
    title: '24/7 Voice NOC',
    description:
      'Round-the-clock network operations center monitoring your voice infrastructure. Proactive alerting, incident response, and SLA-backed support.',
  },
]

const voiceCapabilities = [
  { icon: Phone, title: 'Unified Communications', desc: 'Integrate voice, video, messaging, and presence across your organization.' },
  { icon: Network, title: 'Multi-Tenant Platform', desc: 'Host multiple customers on shared infrastructure with full isolation.' },
  { icon: Shield, title: 'Fraud Prevention', desc: 'Real-time call analytics, toll fraud detection, and automated blocking.' },
  { icon: BarChart3, title: 'Usage Analytics', desc: 'Detailed CDR reporting, billing integration, and capacity planning.' },
]

export function VoiceServicesPage() {
  return (
    <>
      <PageHero
        badge="Voice Services"
        title="Enterprise Voice"
        titleAccent="Platform & Aggregation"
        description="Manage, deploy, and host telephony systems and applications at scale. Kore Veridian is your single partner for enterprise voice infrastructure."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {voiceServices.map((svc) => {
              const Icon = svc.icon
              return (
                <StaggerItem key={svc.id}>
                  <div id={svc.id} className="p-8 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent-purple/30 transition-all h-full scroll-mt-24">
                    <div className="w-12 h-12 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-accent-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{svc.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{svc.description}</p>
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
            <h2 className="text-3xl font-bold">Platform Capabilities</h2>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {voiceCapabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <StaggerItem key={cap.title}>
                  <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle text-center h-full">
                    <Icon className="w-8 h-8 text-accent-purple mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">{cap.title}</h4>
                    <p className="text-sm text-text-secondary">{cap.desc}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 text-center">
        <Button variant="primary" size="lg" href="/contact?type=voice">
          Discuss Voice Requirements
        </Button>
      </section>

      <CTASection />
    </>
  )
}
