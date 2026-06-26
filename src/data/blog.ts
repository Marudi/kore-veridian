export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string[]
  author: string
  role: string
  date: string
  category: string
  readTime: string
  featured?: boolean
  tags: string[]
}

export interface ResourceItem {
  id: string
  title: string
  description: string
  type: 'guide' | 'whitepaper' | 'case-study' | 'webinar'
  href: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'cloud-first-transformation-roadmap',
    title: 'The Cloud-First Transformation Roadmap for Enterprise IT',
    excerpt:
      'A practical framework for migrating legacy infrastructure to modern cloud platforms without disrupting business operations.',
    content: [
      'Enterprise cloud transformation is no longer optional — it is a competitive necessity. Yet most organizations struggle not with the technology itself, but with sequencing, risk management, and organizational change.',
      'At Kore Veridian, we recommend a four-phase approach: assess, design, migrate in waves, and operate. Each phase has clear deliverables and exit criteria, ensuring stakeholders maintain confidence throughout the journey.',
      'The assess phase inventories your workloads, maps dependencies, and identifies quick wins versus complex migrations. Not everything needs to move to the cloud immediately — some systems benefit from a hybrid approach during transition.',
      'During design, we architect for your target operating model. Whether you are building a public cloud service, modernizing a private datacenter, or consolidating voice and IT infrastructure, the architecture must align with how your team will actually operate the environment post-migration.',
      'Wave-based migration reduces risk. Start with non-critical workloads, validate your runbooks, then progressively move production systems. Kore Veridian managed services can operate your environment from day one of the first wave, giving your internal team breathing room to focus on strategic initiatives.',
    ],
    author: 'Marcus Reid',
    role: 'Principal Cloud Architect',
    date: '2026-06-18',
    category: 'Cloud Strategy',
    readTime: '8 min',
    featured: true,
    tags: ['cloud migration', 'enterprise', 'strategy'],
  },
  {
    slug: 'ai-inference-at-scale',
    title: 'Deploying AI Inference at Scale on Cloud Infrastructure',
    excerpt:
      'How to architect GPU scheduling, model versioning, and cost controls for production AI workloads.',
    content: [
      'AI inference has moved from experiment to production requirement. Healthcare, financial services, and telecom providers are deploying models for document processing, fraud detection, and customer service automation at scale.',
      'The challenge is not training models — it is operating them reliably. Production AI requires GPU scheduling, auto-scaling based on queue depth, model versioning with rollback capability, and observability that goes beyond simple uptime metrics.',
      'Kore Veridian AI Operations Hub provides a unified control plane for inference workloads. Deploy models as containerized services, route traffic with intelligent load balancing, and monitor latency percentiles alongside traditional infrastructure metrics.',
      'Cost control is critical. GPU resources are expensive, and idle capacity destroys margins. We implement scale-to-zero for batch workloads, reserved capacity for steady-state inference, and spot/preemptible instances where latency SLAs allow.',
      'Security and compliance cannot be afterthoughts. Model inputs may contain PHI or PII — encryption in transit and at rest, audit logging, and data residency controls must be designed into the architecture from the start.',
    ],
    author: 'Dr. Anika Sharma',
    role: 'Head of AI Operations',
    date: '2026-06-10',
    category: 'AI & ML',
    readTime: '10 min',
    featured: true,
    tags: ['AI', 'inference', 'MLOps', 'GPU'],
  },
  {
    slug: 'unified-voice-cloud-platform',
    title: 'Why Unified Voice and Cloud Infrastructure Matters',
    excerpt:
      'Consolidating telephony and cloud under one partner reduces cost, complexity, and operational blind spots.',
    content: [
      'Most enterprises manage voice and cloud infrastructure through separate vendors, internal teams, and budget lines. This fragmentation creates operational blind spots — when a SIP trunk fails during a cloud migration window, who owns the incident?',
      'Kore Veridian voice services aggregation brings PBX hosting, SIP trunking, contact center applications, and cloud infrastructure under a single operational model. One NOC, one escalation path, one partner accountable for your uptime.',
      'Technical integration matters too. Voice applications increasingly depend on cloud services — AI transcription, CRM integrations, and analytics pipelines all run on cloud compute. Hosting both layers together reduces latency, simplifies networking, and enables unified disaster recovery.',
      'Our clients typically see 30–40% reduction in telephony operational costs when consolidating voice platforms, plus improved mean-time-to-resolution for incidents that span both domains.',
      'If you are evaluating voice platform modernization alongside cloud transformation, consider the total cost of coordination between separate vendors — it often exceeds the apparent savings of best-of-breed sourcing.',
    ],
    author: 'David Okoro',
    role: 'VP Voice Services',
    date: '2026-05-28',
    category: 'Voice Services',
    readTime: '6 min',
    featured: true,
    tags: ['voice', 'UC', 'SIP', 'consolidation'],
  },
  {
    slug: 'managed-services-vs-hiring',
    title: 'Managed Services vs. Building an Internal Cloud Team',
    excerpt:
      'A TCO analysis for organizations deciding between outsourced operations and in-house hiring.',
    content: [
      'Building an internal cloud operations team is expensive and slow. Senior SRE engineers command premium salaries, and you need coverage across time zones for 24/7 operations — meaning a team of 6–8 minimum for meaningful redundancy.',
      'Managed services provide immediate access to a bench of experienced engineers who have operated cloud platforms at scale. You pay for outcomes — uptime, response times, cost optimization — rather than headcount.',
      'The hybrid model often works best: retain strategic architecture and product decisions internally, outsource day-to-day operations and incident response. Kore Veridian managed services integrate with your existing team through shared tooling, runbooks, and escalation procedures.',
      'When evaluating providers, look beyond SLAs on paper. Ask about engineer seniority on your account, escalation paths, and whether the provider operates platforms they also consult on — practitioners who understand both the technology and the business model.',
    ],
    author: 'Sarah Chen',
    role: 'Director of Managed Services',
    date: '2026-05-15',
    category: 'Managed Services',
    readTime: '7 min',
    tags: ['managed services', 'TCO', 'operations'],
  },
  {
    slug: 'hipaa-ready-cloud-architecture',
    title: 'Designing HIPAA-Ready Cloud Architecture',
    excerpt:
      'Security controls, audit requirements, and operational practices for healthcare cloud deployments.',
    content: [
      'Healthcare organizations face unique constraints when adopting cloud infrastructure. HIPAA compliance is not a checkbox — it is an ongoing operational discipline that touches architecture, access controls, logging, and vendor management.',
      'Kore Veridian healthcare cloud deployments implement encryption at rest and in transit by default, role-based access with MFA enforcement, comprehensive audit logging with tamper-evident storage, and network segmentation between environments.',
      'Business Associate Agreements are table stakes. We also provide compliance documentation packages for your internal audits, including architecture diagrams, control mappings, and incident response procedures.',
      'Voice services in healthcare add another layer — call recordings, IVR systems handling patient information, and contact center integrations with EHR systems all require the same rigor applied to cloud workloads.',
    ],
    author: 'Elena Vasquez',
    role: 'Healthcare Solutions Lead',
    date: '2026-05-02',
    category: 'Security & Compliance',
    readTime: '9 min',
    tags: ['HIPAA', 'healthcare', 'compliance', 'security'],
  },
  {
    slug: 'kubernetes-for-service-providers',
    title: 'Kubernetes as a Service for Cloud Service Providers',
    excerpt:
      'Multi-tenant K8s architecture patterns for MSPs and CSPs delivering container platforms to customers.',
    content: [
      'Container platforms are a natural extension for cloud service providers already delivering IaaS. Kubernetes as a Service lets you offer managed container orchestration without the operational burden of running clusters per customer.',
      'Multi-tenancy is the hard problem. Namespace isolation, network policies, resource quotas, and billing integration must work together to give customers self-service while preventing cross-tenant access.',
      'Kore Veridian K8s platform includes GitOps deployment pipelines, integrated monitoring, and usage-based billing hooks that feed directly into your existing cloud billing system.',
      'For MSPs transitioning from traditional hosting, K8s provides a modernization path for customer applications without requiring full cloud platform investment upfront.',
    ],
    author: 'James Okonkwo',
    role: 'Platform Engineering Lead',
    date: '2026-04-20',
    category: 'Cloud Platform',
    readTime: '8 min',
    tags: ['kubernetes', 'CSP', 'MSP', 'multi-tenant'],
  },
]

export const resources: ResourceItem[] = [
  {
    id: 'cloud-migration-guide',
    title: 'Enterprise Cloud Migration Guide',
    description: 'Step-by-step playbook for assessing, planning, and executing cloud migration programs.',
    type: 'guide',
    href: '/resources#cloud-migration-guide',
    category: 'Cloud Platform',
  },
  {
    id: 'voice-platform-overview',
    title: 'Voice Platform Technical Overview',
    description: 'Architecture reference for PBX hosting, SIP aggregation, and voice application deployment.',
    type: 'guide',
    href: '/resources#voice-platform-overview',
    category: 'Voice Services',
  },
  {
    id: 'ai-ops-whitepaper',
    title: 'AI Operations at Scale',
    description: 'Whitepaper on production AI inference architecture, GPU scheduling, and cost optimization.',
    type: 'whitepaper',
    href: '/resources#ai-ops-whitepaper',
    category: 'AI & ML',
  },
  {
    id: 'healthcare-case-study',
    title: 'Meridian Health Systems Case Study',
    description: 'How a regional health network modernized datacenter and voice infrastructure with Kore Veridian.',
    type: 'case-study',
    href: '/resources#healthcare-case-study',
    category: 'Case Studies',
  },
  {
    id: 'telecom-case-study',
    title: 'Nexus Telecom Platform Transformation',
    description: '40% telephony cost reduction through voice platform consolidation and cloud integration.',
    type: 'case-study',
    href: '/resources#telecom-case-study',
    category: 'Case Studies',
  },
  {
    id: 'managed-services-sla',
    title: 'Managed Services SLA Framework',
    description: 'Reference guide to uptime guarantees, response times, and escalation procedures.',
    type: 'guide',
    href: '/resources#managed-services-sla',
    category: 'Managed Services',
  },
  {
    id: 'security-compliance',
    title: 'Security & Compliance Controls Matrix',
    description: 'HIPAA, SOC 2, and industry control mappings for Kore Veridian platform deployments.',
    type: 'whitepaper',
    href: '/resources#security-compliance',
    category: 'Security',
  },
  {
    id: 'platform-webinar',
    title: 'Platform Demo: Cloud + Voice Unified',
    description: 'Recorded walkthrough of the Kore Veridian control plane, voice platform, and AI operations hub.',
    type: 'webinar',
    href: '/contact?type=demo',
    category: 'Product',
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getFeaturedPosts(limit = 3): BlogPost[] {
  return blogPosts.filter((post) => post.featured).slice(0, limit)
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const resourceTypeLabels: Record<ResourceItem['type'], string> = {
  guide: 'Guide',
  whitepaper: 'Whitepaper',
  'case-study': 'Case Study',
  webinar: 'Webinar',
}
