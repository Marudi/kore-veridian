import {
  Cloud,
  Shield,
  Cpu,
  BarChart3,
  RefreshCw,
  Layers,
  Bot,
  HardDrive,
  Globe,
  Building2,
  Network,
  Phone,
  Link2,
  ShieldCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { CTASection } from '../components/home/CTASection'

interface Solution {
  id: string
  icon: LucideIcon
  title: string
  description: string
  category: string
}

const solutions: Solution[] = [
  {
    id: 'public-cloud',
    category: 'Key Solutions',
    icon: Cloud,
    title: 'Public Cloud as a Service',
    description: 'Deliver public cloud services with full infrastructure control, self-service portals, and built-in monetization capabilities for your customers.',
  },
  {
    id: 'private-cloud',
    category: 'Key Solutions',
    icon: Shield,
    title: 'Private Cloud as a Service',
    description: 'Build secure, isolated private cloud environments for enterprises with dedicated resources and compliance-ready controls.',
  },
  {
    id: 'vmware',
    category: 'Key Solutions',
    icon: Cpu,
    title: 'VMware Alternative',
    description: 'Escape escalating VMware licensing costs with open-source CloudStack infrastructure — fully managed and migration-supported.',
  },
  {
    id: 'b2b',
    category: 'Key Solutions',
    icon: BarChart3,
    title: 'B2B Cloud Business',
    description: 'Built-in billing, reseller management, subscription models, and chargeback — everything you need to run a cloud business.',
  },
  {
    id: 'blockchain',
    category: 'Key Solutions',
    icon: Link2,
    title: 'Blockchain Layering',
    description:
      'Integrate distributed ledger layers across your cloud stack — from immutable audit trails and provenance tracking to smart-contract orchestration and cross-chain interoperability, without sacrificing performance or operational control.',
  },
  {
    id: 'security-guardrails',
    category: 'Cloud Services',
    icon: ShieldCheck,
    title: 'Cloud Security Guardrails',
    description:
      'Robust, policy-driven security guardrails embedded at every layer — zero-trust networking, identity-aware access, encryption by default, continuous compliance scanning, and automated remediation aligned with SOC 2, HIPAA, and ISO 27001 frameworks.',
  },
  {
    id: 'dr',
    category: 'Cloud Services',
    icon: RefreshCw,
    title: 'Business Continuity & DR',
    description: 'Automated backup, disaster recovery orchestration, and cloud storage services with RPO/RTO guarantees.',
  },
  {
    id: 'kubernetes',
    category: 'Cloud Services',
    icon: Layers,
    title: 'Kubernetes as a Service',
    description: 'Fully managed container orchestration with GitOps, auto-scaling, service mesh, and enterprise-grade security.',
  },
  {
    id: 'ai',
    category: 'Cloud Services',
    icon: Bot,
    title: 'AI Inference',
    description: 'Deploy AI workloads and inference models at scale with GPU scheduling, model versioning, and cost optimization.',
  },
  {
    id: 'storage',
    category: 'Cloud Services',
    icon: HardDrive,
    title: 'Object Storage',
    description: 'S3-compatible object storage backed by Ceph durability with multi-region replication and lifecycle policies.',
  },
  {
    id: 'edge',
    category: 'Cloud Services',
    icon: Globe,
    title: 'Edge Computing',
    description: 'Deploy low-latency infrastructure at the edge for real-time applications, IoT, and content delivery.',
  },
  {
    id: 'healthcare',
    category: 'Industry',
    icon: Shield,
    title: 'Healthcare & Life Sciences',
    description: 'HIPAA-ready cloud and voice infrastructure with BAA support, audit logging, and healthcare compliance frameworks.',
  },
  {
    id: 'msp',
    category: 'Industry',
    icon: Network,
    title: 'MSP & CSP Providers',
    description: 'White-label cloud platform with multi-tenancy, billing, and reseller tools built for managed service providers.',
  },
  {
    id: 'enterprise',
    category: 'Industry',
    icon: Building2,
    title: 'Enterprise IT',
    description: 'Modernize legacy datacenters with cloud-first strategy, hybrid connectivity, and phased migration programs.',
  },
  {
    id: 'telecom',
    category: 'Industry',
    icon: Phone,
    title: 'Telecom & ISPs',
    description: 'Monetize your network infrastructure with cloud and voice services — turn connectivity into recurring revenue.',
  },
]

export function SolutionsPage() {
  const categories = ['Key Solutions', 'Cloud Services', 'Industry']

  return (
    <>
      <PageHero
        badge="Solutions"
        title="Solutions for Every"
        titleAccent="Cloud Challenge"
        description="From public cloud platforms to blockchain-integrated workloads and enterprise security guardrails — Kore Veridian delivers turnkey solutions that accelerate your time to market."
      />

      {categories.map((category) => (
        <section key={category} className="py-16 even:bg-bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-10">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-veridian bg-veridian/10 rounded-full border border-veridian/20">
                {category}
              </span>
            </AnimatedSection>
            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {solutions
                .filter((s) => s.category === category)
                .map((solution) => {
                  const Icon = solution.icon
                  return (
                    <StaggerItem key={solution.id}>
                      <div
                        id={solution.id}
                        className="p-8 rounded-2xl bg-bg-card border border-border-subtle hover:border-veridian/20 transition-all h-full scroll-mt-24"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-veridian" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed">{solution.description}</p>
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  )
                })}
            </StaggerContainer>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  )
}
