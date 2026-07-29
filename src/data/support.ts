export const supportChannels = [
  {
    title: 'Customer Portal',
    description: 'Submit and track support tickets, view incident history, and access your account documentation.',
    availability: '24/7 self-service',
    action: 'Open a ticket below',
  },
  {
    title: 'Email Support',
    description: 'Non-urgent technical questions, configuration guidance, and account requests.',
    availability: 'Response within 4 business hours',
    contact: 'contact@koreveridian.ca',
  },
  {
    title: 'Phone Support',
    description: 'Priority and enterprise customers can reach our NOC directly for live assistance.',
    availability: '24/7 for Enterprise tier',
    contact: '+1 343-6492707',
  },
  {
    title: 'Emergency Escalation',
    description: 'Production-down incidents for managed services and voice platform customers.',
    availability: '24/7/365 — P1 response in 15 minutes',
    contact: 'contact@koreveridian.ca',
  },
]

export const supportTiers = [
  {
    name: 'Standard',
    audience: 'All customers',
    response: '4 business hours',
    coverage: 'Business hours (Mon–Fri)',
    features: ['Email support', 'Knowledge base access', 'Community resources'],
  },
  {
    name: 'Priority',
    audience: 'Managed services clients',
    response: '1 hour',
    coverage: '16×5 extended hours',
    features: ['Dedicated support queue', 'Phone support', 'Proactive monitoring alerts'],
  },
  {
    name: 'Enterprise',
    audience: 'Enterprise & voice NOC',
    response: '15 minutes (P1)',
    coverage: '24×7×365',
    features: ['Dedicated TAM', 'Emergency escalation line', 'Custom SLA reporting'],
  },
]

export const supportFaqs = [
  {
    question: 'How do I open a support ticket?',
    answer:
      'Use the support form below or email contact@koreveridian.ca with your account ID, environment details, and a description of the issue. Priority and Enterprise customers can also call the support line listed on their service agreement.',
  },
  {
    question: 'What information should I include in a support request?',
    answer:
      'Include your company name, affected service (cloud platform, voice, managed services), environment or tenant ID, steps to reproduce, error messages, and the business impact. For voice issues, include call examples with timestamps and affected DIDs.',
  },
  {
    question: 'Do you offer 24/7 support?',
    answer:
      '24/7 support is included with Enterprise SLAs and managed services agreements at the Professional and Enterprise tiers. Standard support is available during business hours with email response within 4 hours.',
  },
  {
    question: 'Where can I find documentation and guides?',
    answer:
      'Visit our Resources section for deployment guides, whitepapers, and case studies. Full technical documentation and API references are available to active customers — request access through your account manager or the support form.',
  },
  {
    question: 'How are severity levels defined?',
    answer:
      'P1 (Critical): Production service down or major security incident. P2 (High): Significant degradation affecting operations. P3 (Medium): Non-critical issues with workaround available. P4 (Low): General questions and feature requests.',
  },
]

export const partnerTypes = [
  {
    id: 'msp',
    title: 'MSP & CSP Partners',
    description:
      'Managed service providers and cloud service providers reselling Kore Veridian platform services under their brand.',
    benefits: ['White-label portal', 'Multi-tenant billing', 'Partner margin program', 'Sales enablement'],
  },
  {
    id: 'technology',
    title: 'Technology Partners',
    description:
      'Software vendors, integrators, and ISVs building on or integrating with the Kore Veridian platform.',
    benefits: ['API access', 'Co-marketing opportunities', 'Technical certification', 'Joint solution design'],
  },
  {
    id: 'referral',
    title: 'Referral Partners',
    description:
      'Consultants, agencies, and advisors who refer clients for cloud, voice, and managed services engagements.',
    benefits: ['Referral commissions', 'Deal registration', 'Partner portal access', 'No minimum volume'],
  },
  {
    id: 'carrier',
    title: 'Carrier & Telecom Partners',
    description:
      'ISPs, telcos, and voice carriers extending cloud and voice aggregation services to their customer base.',
    benefits: ['SIP interconnect programs', 'Voice platform hosting', 'Revenue sharing', 'NOC integration'],
  },
]

export const partnerBenefits = [
  {
    title: 'Dedicated Partner Manager',
    description: 'A single point of contact for onboarding, deal support, and ongoing program guidance.',
  },
  {
    title: 'Sales & Technical Enablement',
    description: 'Training, demo environments, solution briefs, and certification paths for your team.',
  },
  {
    title: 'Co-Sell Support',
    description: 'Joint customer meetings, proof-of-concept assistance, and proposal support for registered deals.',
  },
  {
    title: 'Marketing Development Funds',
    description: 'Eligible partners receive MDF for campaigns, events, and lead generation activities.',
  },
  {
    title: 'Partner Portal',
    description: 'Deal registration, margin tracking, asset library, and support escalation in one place.',
  },
  {
    title: 'Priority Engineering Access',
    description: 'Direct channel to our solutions architects for complex deployments and custom integrations.',
  },
]

export const partnerProcess = [
  { step: '01', title: 'Apply', description: 'Submit your partner application with company profile and target market.' },
  { step: '02', title: 'Qualify', description: 'Our partnerships team reviews fit, capabilities, and alignment within 5 business days.' },
  { step: '03', title: 'Onboard', description: 'Complete enablement, sign partner agreement, and receive portal credentials.' },
  { step: '04', title: 'Grow', description: 'Register deals, access co-sell resources, and scale with dedicated support.' },
]

export const contactDepartments = [
  {
    title: 'Sales & Solutions',
    description: 'Demos, pricing, enterprise deployments, and custom SLAs.',
    email: 'contact@koreveridian.ca',
    href: '/contact/sales',
  },
  {
    title: 'Technical Support',
    description: 'Platform issues, incidents, and configuration assistance.',
    email: 'contact@koreveridian.ca',
    href: '/support',
  },
  {
    title: 'Partnerships',
    description: 'Partner program, co-sell, and channel opportunities.',
    email: 'contact@koreveridian.ca',
    href: '/partners',
  },
  {
    title: 'General Inquiries',
    description: 'Media, careers, billing, and other questions.',
    email: 'contact@koreveridian.ca',
    href: '/contact/general',
  },
]

export const salesOfferings = [
  {
    title: 'Platform Demo',
    description: 'Live walkthrough of the Kore Veridian cloud control plane, voice platform, and AI operations hub.',
    tags: ['45-min session', 'Solutions architect', 'Custom use cases'],
  },
  {
    title: 'Enterprise Pricing',
    description: 'Volume licensing, multi-site deployments, and custom SLA packages tailored to your organization.',
    tags: ['Transparent pricing', 'Flexible terms', 'Dedicated TAM'],
  },
  {
    title: 'Proof of Concept',
    description: 'Scoped pilot deployments to validate cloud, voice, or managed services fit before full rollout.',
    tags: ['Fixed scope', 'Success criteria', 'Migration path'],
  },
  {
    title: 'Solutions Architecture',
    description: 'Design workshops for hybrid cloud, Kubernetes, voice aggregation, and healthcare-grade compliance.',
    tags: ['Architecture review', 'Compliance mapping', 'Roadmap planning'],
  },
]

export const salesProcess = [
  { step: '01', title: 'Discovery Call', description: 'Understand your infrastructure, goals, and timeline.' },
  { step: '02', title: 'Demo or POC', description: 'Tailored demonstration or scoped proof of concept.' },
  { step: '03', title: 'Proposal', description: 'Transparent pricing, SLAs, and implementation plan.' },
  { step: '04', title: 'Onboarding', description: 'Dedicated team for deployment, training, and go-live support.' },
]

export const generalInquiryTopics = [
  {
    title: 'Media & Press',
    description: 'Interview requests, press kits, and company background for journalists and analysts.',
    icon: 'media',
  },
  {
    title: 'Careers',
    description: 'Open roles, culture, and how to join the Kore Veridian team.',
    icon: 'careers',
    href: '/careers',
  },
  {
    title: 'Billing & Accounts',
    description: 'Invoice questions, payment methods, and account administration.',
    icon: 'billing',
  },
  {
    title: 'Legal & Compliance',
    description: 'Privacy requests, data processing agreements, and regulatory inquiries.',
    icon: 'legal',
  },
  {
    title: 'Feedback',
    description: 'Product suggestions, website feedback, and general comments.',
    icon: 'feedback',
  },
  {
    title: 'Other',
    description: 'Anything that does not fit the categories above — we are happy to help.',
    icon: 'other',
  },
]

export const generalFaqs = [
  {
    question: 'What is your typical response time?',
    answer: 'We respond to all general inquiries within one business day. Urgent billing or account issues are prioritized same-day during business hours (Mon–Fri, 8am–6pm ET).',
  },
  {
    question: 'How do I apply for a job at Kore Veridian?',
    answer: 'Visit our Careers section on the About page for current openings, or send your resume and area of interest through the form below with inquiry type General Inquiry.',
  },
  {
    question: 'Where is Kore Veridian headquartered?',
    answer: 'Kore Veridian is headquartered in Canada and serves clients across North America, Europe, and Asia-Pacific through our global cloud and voice infrastructure.',
  },
]
