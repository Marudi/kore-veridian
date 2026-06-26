export interface JobListing {
  id: string
  title: string
  department: string
  location: string
  type: string
  summary: string
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
}

export const careerBenefits = [
  'Remote-first culture with flexible hours',
  'Competitive salary and performance bonuses',
  'Health and wellness benefits',
  'Professional development budget',
  'Latest cloud and voice tooling',
  'Direct impact on enterprise platform architecture',
]

export const jobListings: JobListing[] = [
  {
    id: 'senior-cloud-architect',
    title: 'Senior Cloud Architect',
    department: 'Engineering',
    location: 'Remote — Canada & US',
    type: 'Full-time',
    summary:
      'Lead the design and delivery of multi-cloud and private cloud architectures for enterprise clients. You will shape platform standards, guide migrations, and mentor engineering teams on cloud-native best practices.',
    responsibilities: [
      'Design scalable cloud architectures across public, private, and hybrid environments',
      'Lead client discovery workshops, architecture reviews, and proof-of-concept deployments',
      'Define Kore Veridian platform standards for security, automation, and observability',
      'Collaborate with sales and solutions teams on enterprise proposals and SOWs',
      'Mentor cloud engineers and contribute to internal reference architectures',
    ],
    requirements: [
      '8+ years in cloud infrastructure, platform engineering, or solutions architecture',
      'Deep experience with Kubernetes, OpenStack, CloudStack, or equivalent orchestration',
      'Strong understanding of networking, IAM, and compliance (SOC 2, HIPAA awareness)',
      'Excellent client-facing communication and documentation skills',
    ],
    niceToHave: [
      'Terraform / Pulumi infrastructure-as-code at scale',
      'Experience building or operating a cloud service provider platform',
      'Cloud certifications (AWS, Azure, GCP, CKA)',
    ],
  },
  {
    id: 'voice-platform-engineer',
    title: 'Voice Platform Engineer',
    department: 'Voice Services',
    location: 'Remote — North America',
    type: 'Full-time',
    summary:
      'Build and operate carrier-grade voice infrastructure — SIP trunking, PBX hosting, contact center platforms, and voice AI integrations on the Kore Veridian voice aggregation stack.',
    responsibilities: [
      'Deploy and maintain SIP interconnects, SBCs, and voice application servers',
      'Troubleshoot call routing, codec, and QoS issues across multi-tenant environments',
      'Automate provisioning for DIDs, trunks, and tenant voice services',
      'Participate in 24/7 NOC rotation for voice platform incidents',
      'Integrate voice platforms with cloud control plane and billing systems',
    ],
    requirements: [
      '5+ years in VoIP, telecom, or unified communications engineering',
      'Hands-on experience with Asterisk, FreeSWITCH, Kamailio, or commercial SBC platforms',
      'Solid understanding of SIP, RTP, TLS, and DNS (SRV/NAPTR) for voice',
      'Scripting ability (Python, Bash, or similar) for automation',
    ],
    niceToHave: [
      'Contact center platform experience (Genesys, Twilio, or custom)',
      'Experience with healthcare or regulated voice environments',
      'Knowledge of WebRTC and voice AI pipeline integration',
    ],
  },
  {
    id: 'devops-sre-engineer',
    title: 'DevOps / SRE Engineer',
    department: 'Managed Services',
    location: 'Remote — Global',
    type: 'Full-time',
    summary:
      'Keep client cloud and voice environments running at enterprise SLA standards. You will own monitoring, incident response, automation, and continuous improvement for managed services customers.',
    responsibilities: [
      'Operate and monitor multi-tenant cloud and voice infrastructure 24/7',
      'Respond to P1–P4 incidents, perform root cause analysis, and document runbooks',
      'Implement patching, backup verification, and disaster recovery testing',
      'Build automation for provisioning, scaling, and remediation workflows',
      'Collaborate with client teams on change management and capacity planning',
    ],
    requirements: [
      '4+ years in DevOps, SRE, or managed infrastructure roles',
      'Experience with Prometheus, Grafana, ELK, or equivalent observability stacks',
      'Proficiency in CI/CD pipelines and configuration management',
      'Strong troubleshooting skills across Linux, networking, and cloud APIs',
    ],
    niceToHave: [
      'On-call experience in a managed services or NOC environment',
      'Kubernetes cluster administration and GitOps (Argo CD, Flux)',
      'ITIL or similar service management familiarity',
    ],
  },
  {
    id: 'solutions-consultant',
    title: 'Solutions Consultant',
    department: 'Consulting',
    location: 'Remote — Canada',
    type: 'Full-time',
    summary:
      'Partner with enterprise clients from discovery through delivery — assessing cloud readiness, designing transformation roadmaps, and ensuring successful Kore Veridian implementations.',
    responsibilities: [
      'Conduct cloud and voice readiness assessments for prospective clients',
      'Develop migration roadmaps, TCO models, and executive-level presentations',
      'Support sales with technical discovery, demos, and proposal development',
      'Facilitate workshops on cloud strategy, security guardrails, and AI operations',
      'Transition projects to delivery teams with clear scope and success criteria',
    ],
    requirements: [
      '6+ years in IT consulting, pre-sales engineering, or technical account management',
      'Broad knowledge of cloud platforms, voice services, and managed operations',
      'Strong presentation and stakeholder management skills',
      'Ability to translate business requirements into technical solutions',
    ],
    niceToHave: [
      'Experience in healthcare, telecom, or MSP verticals',
      'Familiarity with blockchain layering and distributed ledger use cases',
      'MBA or equivalent business acumen',
    ],
  },
  {
    id: 'cloud-security-engineer',
    title: 'Cloud Security Engineer',
    department: 'Engineering',
    location: 'Remote — Canada & US',
    type: 'Full-time',
    summary:
      'Implement and enforce robust cloud security guardrails across the Kore Veridian platform — zero-trust policies, compliance automation, and continuous security monitoring.',
    responsibilities: [
      'Design and deploy security guardrails for multi-tenant cloud environments',
      'Implement IAM policies, encryption standards, and network segmentation',
      'Automate compliance scanning and remediation (SOC 2, HIPAA, ISO 27001)',
      'Conduct security reviews for new platform features and client deployments',
      'Respond to security incidents and contribute to audit documentation',
    ],
    requirements: [
      '5+ years in cloud security, security engineering, or GRC roles',
      'Experience with CSPM, SIEM, and identity management in cloud environments',
      'Knowledge of encryption, secrets management, and secure SDLC practices',
      'Understanding of healthcare and enterprise compliance frameworks',
    ],
    niceToHave: [
      'CISSP, CCSP, or equivalent security certifications',
      'Experience with blockchain security and audit trail architecture',
      'Hands-on penetration testing or red team background',
    ],
  },
  {
    id: 'technical-account-manager',
    title: 'Technical Account Manager',
    department: 'Customer Success',
    location: 'Remote — North America',
    type: 'Full-time',
    summary:
      'Serve as the primary technical advocate for enterprise accounts — ensuring adoption, satisfaction, and expansion across cloud, voice, and managed services.',
    responsibilities: [
      'Own the technical relationship for assigned enterprise accounts',
      'Conduct quarterly business reviews and success planning sessions',
      'Coordinate between client stakeholders and Kore Veridian engineering teams',
      'Identify expansion opportunities and feed product feedback to platform teams',
      'Ensure SLA adherence and escalate issues through proper support channels',
    ],
    requirements: [
      '5+ years in technical account management, customer success, or client engineering',
      'Background in cloud, telecom, or managed services environments',
      'Strong relationship-building and project coordination skills',
      'Ability to manage multiple enterprise accounts simultaneously',
    ],
    niceToHave: [
      'Prior experience as a solutions architect or support engineer',
      'Familiarity with ITSM tools and enterprise procurement processes',
    ],
  },
]

export function getJobById(id: string): JobListing | undefined {
  return jobListings.find((job) => job.id === id)
}
