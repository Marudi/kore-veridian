import {
  Cloud,
  Bot,
  Phone,
  Zap,
  Layers,
  Database,
  Globe,
  RefreshCw,
  Shield,
  Settings,
} from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { CTASection } from '../components/home/CTASection'
import { Button } from '../components/ui/Button'

const platformModules = [
  {
    id: 'control-plane',
    icon: Cloud,
    title: 'Cloud Control Plane',
    description:
      'Unified orchestration layer for provisioning, monitoring, and managing multi-cloud and on-premise infrastructure. Self-service portals, role-based access, and automated lifecycle management.',
  },
  {
    id: 'ai-ops',
    icon: Bot,
    title: 'AI Operations Hub',
    description:
      'Deploy, scale, and monitor AI inference workloads. Model registry, GPU scheduling, auto-scaling, and observability built for production ML pipelines.',
  },
  {
    id: 'voice',
    icon: Phone,
    title: 'Voice Platform',
    description:
      'Carrier-grade telephony hosting and application deployment. PBX, SIP trunking, contact center, and voice AI — all managed from a single control plane.',
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Automation Engine',
    description:
      'Policy-driven infrastructure automation. Terraform integration, event-driven workflows, and compliance-as-code for repeatable, auditable deployments.',
  },
]

const infraServices = [
  { id: 'kubernetes', icon: Layers, title: 'Kubernetes', desc: 'Managed K8s clusters with auto-scaling and GitOps.' },
  { id: 'storage', icon: Database, title: 'Object Storage', desc: 'S3-compatible storage with multi-region replication.' },
  { id: 'edge', icon: Globe, title: 'Edge Computing', desc: 'Deploy workloads at 50+ edge locations worldwide.' },
  { id: 'dr', icon: RefreshCw, title: 'Disaster Recovery', desc: 'Automated backup, failover, and business continuity.' },
  { id: 'security', icon: Shield, title: 'Security Layer', desc: 'Zero-trust networking, WAF, and encryption everywhere.' },
  { id: 'monitoring', icon: Settings, title: 'Observability', desc: 'Full-stack monitoring, logging, and alerting platform.' },
]

export function PlatformPage() {
  return (
    <>
      <PageHero
        badge="Platform"
        title="The Kore Veridian"
        titleAccent="Unified Platform"
        description="One control plane for cloud infrastructure, AI operations, voice services, and automation — engineered for service providers and enterprises alike."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {platformModules.map((mod) => {
              const Icon = mod.icon
              return (
                <StaggerItem key={mod.id}>
                  <div id={mod.id} className="p-8 rounded-2xl bg-bg-card border border-border-subtle hover:border-veridian/20 transition-all h-full scroll-mt-24">
                    <div className="w-12 h-12 rounded-xl bg-veridian/10 border border-veridian/20 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-veridian" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{mod.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{mod.description}</p>
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
            <h2 className="text-3xl font-bold">Infrastructure Services</h2>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {infraServices.map((svc) => {
              const Icon = svc.icon
              return (
                <StaggerItem key={svc.id}>
                  <div id={svc.id} className="p-6 rounded-2xl bg-bg-card border border-border-subtle scroll-mt-24">
                    <Icon className="w-8 h-8 text-veridian mb-4" />
                    <h4 className="font-semibold mb-2">{svc.title}</h4>
                    <p className="text-sm text-text-secondary">{svc.desc}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 text-center">
        <Button variant="primary" size="lg" href="/demo">
          Request Platform Demo
        </Button>
      </section>

      <CTASection />
    </>
  )
}
