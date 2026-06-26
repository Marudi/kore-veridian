import type { LucideIcon } from 'lucide-react'
import {
  Cloud,
  Server,
  Shield,
  Cpu,
  Database,
  Layers,
  Phone,
  Headphones,
  Radio,
  Mic,
  Briefcase,
  Users,
  Lightbulb,
  BarChart3,
  Settings,
  Globe,
  Building2,
  Network,
  HardDrive,
  Bot,
  Zap,
  Lock,
  RefreshCw,
  LifeBuoy,
  Handshake,
  Link2,
  ShieldCheck,
} from 'lucide-react'

export interface NavItem {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

export interface NavColumn {
  label: string
  items: NavItem[]
}

export interface NavMenu {
  label: string
  href?: string
  columns?: NavColumn[]
}

export const topLinks = [
  { label: 'Support', href: '/support' },
  { label: 'Partner with Us', href: '/partners' },
  { label: 'Contact Us', href: '/contact' },
]

export const mainNavigation: NavMenu[] = [
  {
    label: 'Platform',
    columns: [
      {
        label: 'Core Platform',
        items: [
          {
            title: 'Cloud Control Plane',
            description: 'Unified orchestration for multi-cloud infrastructure and workloads.',
            href: '/platform#control-plane',
            icon: Cloud,
          },
          {
            title: 'AI Operations Hub',
            description: 'Deploy, monitor, and scale AI inference and ML pipelines.',
            href: '/platform#ai-ops',
            icon: Bot,
          },
          {
            title: 'Voice Platform',
            description: 'End-to-end telephony hosting, deployment, and management.',
            href: '/voice-services',
            icon: Phone,
          },
          {
            title: 'Automation Engine',
            description: 'Policy-driven automation for provisioning and lifecycle management.',
            href: '/platform#automation',
            icon: Zap,
          },
        ],
      },
      {
        label: 'Infrastructure',
        items: [
          {
            title: 'Kubernetes as a Service',
            description: 'Managed container orchestration at enterprise scale.',
            href: '/solutions#kubernetes',
            icon: Layers,
          },
          {
            title: 'Object Storage',
            description: 'S3-compatible storage with enterprise durability.',
            href: '/solutions#storage',
            icon: Database,
          },
          {
            title: 'Edge Computing',
            description: 'Low-latency infrastructure deployed at the edge.',
            href: '/solutions#edge',
            icon: Globe,
          },
          {
            title: 'Disaster Recovery',
            description: 'Business continuity with automated failover and backup.',
            href: '/solutions#dr',
            icon: RefreshCw,
          },
        ],
      },
    ],
  },
  {
    label: 'Services',
    columns: [
      {
        label: 'Professional Services',
        items: [
          {
            title: 'Cloud Consulting',
            description: 'Strategic guidance for cloud transformation and modernization.',
            href: '/consulting',
            icon: Lightbulb,
          },
          {
            title: 'Managed Services',
            description: 'Dedicated technical teams for your cloud infrastructure.',
            href: '/managed-services',
            icon: Settings,
          },
          {
            title: 'Implementation',
            description: 'End-to-end deployment of cloud and voice platforms.',
            href: '/consulting#implementation',
            icon: Briefcase,
          },
          {
            title: 'Security & Compliance',
            description: 'Healthcare-grade security frameworks and audit readiness.',
            href: '/consulting#security',
            icon: Lock,
          },
        ],
      },
      {
        label: 'Voice Services',
        items: [
          {
            title: 'Telephony Hosting',
            description: 'Managed hosting for PBX, SIP, and UC platforms.',
            href: '/voice-services#hosting',
            icon: Server,
          },
          {
            title: 'Voice Applications',
            description: 'Deploy and manage IVR, contact center, and voice AI apps.',
            href: '/voice-services#applications',
            icon: Mic,
          },
          {
            title: 'SIP Trunking',
            description: 'Carrier-grade SIP aggregation and routing.',
            href: '/voice-services#sip',
            icon: Radio,
          },
          {
            title: '24/7 Voice NOC',
            description: 'Round-the-clock monitoring and incident response.',
            href: '/voice-services#noc',
            icon: Headphones,
          },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    columns: [
      {
        label: 'Key Solutions',
        items: [
          {
            title: 'Public Cloud as a Service',
            description: 'Deliver public cloud with full control and monetization.',
            href: '/solutions#public-cloud',
            icon: Cloud,
          },
          {
            title: 'Private Cloud as a Service',
            description: 'Secure private cloud environments for enterprises.',
            href: '/solutions#private-cloud',
            icon: Shield,
          },
          {
            title: 'VMware Alternative',
            description: 'Open-source infrastructure without licensing overhead.',
            href: '/solutions#vmware',
            icon: Cpu,
          },
          {
            title: 'B2B Cloud Business',
            description: 'Billing, resellers, subscriptions, and chargeback built-in.',
            href: '/solutions#b2b',
            icon: BarChart3,
          },
          {
            title: 'Blockchain Layering',
            description: 'Multi-layer ledger integration for audit trails and trusted workloads.',
            href: '/solutions#blockchain',
            icon: Link2,
          },
        ],
      },
      {
        label: 'Cloud Services',
        items: [
          {
            title: 'Cloud Security Guardrails',
            description: 'Policy-driven controls, zero-trust, and continuous compliance enforcement.',
            href: '/solutions#security-guardrails',
            icon: ShieldCheck,
          },
          {
            title: 'Business Continuity & DR',
            description: 'Backup, disaster recovery, and cloud storage services.',
            href: '/solutions#dr',
            icon: RefreshCw,
          },
          {
            title: 'Kubernetes as a Service',
            description: 'Container orchestration delivered at scale.',
            href: '/solutions#kubernetes',
            icon: Layers,
          },
          {
            title: 'AI Inference',
            description: 'Deploy AI workloads and inference models at scale.',
            href: '/solutions#ai',
            icon: Bot,
          },
          {
            title: 'Object Storage',
            description: 'Durable S3-compatible object storage platform.',
            href: '/solutions#storage',
            icon: HardDrive,
          },
        ],
      },
      {
        label: 'Industry Solutions',
        items: [
          {
            title: 'Healthcare & Life Sciences',
            description: 'HIPAA-ready cloud and voice infrastructure.',
            href: '/solutions#healthcare',
            icon: Shield,
          },
          {
            title: 'MSP & CSP Providers',
            description: 'Scalable infrastructure for managed service providers.',
            href: '/solutions#msp',
            icon: Network,
          },
          {
            title: 'Enterprise IT',
            description: 'Modernize legacy infrastructure with cloud-first strategy.',
            href: '/solutions#enterprise',
            icon: Building2,
          },
          {
            title: 'Telecom & ISPs',
            description: 'Monetize infrastructure with cloud and voice services.',
            href: '/solutions#telecom',
            icon: Phone,
          },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    columns: [
      {
        label: 'Learn',
        items: [
          {
            title: 'Documentation',
            description: 'Technical guides, API references, and deployment docs.',
            href: '/resources',
            icon: Database,
          },
          {
            title: 'Case Studies',
            description: 'Real-world success stories from our clients.',
            href: '/resources#healthcare-case-study',
            icon: BarChart3,
          },
          {
            title: 'Blog & Insights',
            description: 'Cloud, AI, and voice industry perspectives.',
            href: '/blog',
            icon: Lightbulb,
          },
        ],
      },
      {
        label: 'Company',
        items: [
          {
            title: 'About Kore Veridian',
            description: 'Our mission, team, and cloud-first philosophy.',
            href: '/about',
            icon: Users,
          },
          {
            title: 'Company Overview',
            description: 'Global presence, mission, and company hub.',
            href: '/company',
            icon: Building2,
          },
          {
            title: 'Careers',
            description: 'Join our team of cloud and voice innovators.',
            href: '/careers',
            icon: Briefcase,
          },
          {
            title: 'Support Center',
            description: 'Technical support, SLAs, and ticket submission.',
            href: '/support',
            icon: LifeBuoy,
          },
          {
            title: 'Partner Program',
            description: 'Join our MSP, technology, and carrier partner ecosystem.',
            href: '/partners',
            icon: Handshake,
          },
          {
            title: 'Contact',
            description: 'Sales, general inquiries, and demo requests.',
            href: '/contact',
            icon: Headphones,
          },
        ],
      },
    ],
  },
  {
    label: 'Company',
    columns: [
      {
        label: 'Who We Are',
        items: [
          {
            title: 'Company Overview',
            description: 'Mission, global presence, and what we stand for.',
            href: '/company',
            icon: Building2,
          },
          {
            title: 'About Kore Veridian',
            description: 'Our story, values, and cloud-first philosophy.',
            href: '/about',
            icon: Users,
          },
          {
            title: 'Careers',
            description: 'Join our team of cloud and voice innovators.',
            href: '/careers',
            icon: Briefcase,
          },
        ],
      },
      {
        label: 'Connect',
        items: [
          {
            title: 'Request a Demo',
            description: 'See the platform in a live guided session.',
            href: '/demo',
            icon: Zap,
          },
          {
            title: 'Contact',
            description: 'Sales, support, and general inquiries.',
            href: '/contact',
            icon: Headphones,
          },
          {
            title: 'Support Center',
            description: 'Technical support, SLAs, and tickets.',
            href: '/support',
            icon: LifeBuoy,
          },
          {
            title: 'Partner Program',
            description: 'MSP, technology, and carrier partnerships.',
            href: '/partners',
            icon: Handshake,
          },
        ],
      },
    ],
  },
]

export const footerNavigation = {
  platform: [
    { label: 'Cloud Control Plane', href: '/platform' },
    { label: 'AI Operations Hub', href: '/platform#ai-ops' },
    { label: 'Voice Platform', href: '/voice-services' },
    { label: 'Automation Engine', href: '/platform#automation' },
  ],
  services: [
    { label: 'Consulting', href: '/consulting' },
    { label: 'Managed Services', href: '/managed-services' },
    { label: 'Voice Services', href: '/voice-services' },
    { label: 'Implementation', href: '/consulting#implementation' },
  ],
  solutions: [
    { label: 'Public Cloud', href: '/solutions#public-cloud' },
    { label: 'Private Cloud', href: '/solutions#private-cloud' },
    { label: 'Blockchain Layering', href: '/solutions#blockchain' },
    { label: 'Security Guardrails', href: '/solutions#security-guardrails' },
    { label: 'Kubernetes', href: '/solutions#kubernetes' },
    { label: 'AI Inference', href: '/solutions#ai' },
  ],
  company: [
    { label: 'Company', href: '/company' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Resources', href: '/resources' },
    { label: 'Support', href: '/support' },
    { label: 'Partners', href: '/partners' },
    { label: 'Contact', href: '/contact' },
  ],
}
