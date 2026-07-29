export interface LegalSubsection {
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

export interface LegalSection {
  id: string
  title: string
  paragraphs?: string[]
  bullets?: string[]
  subsections?: LegalSubsection[]
  callout?: string
  closingParagraphs?: string[]
}

export interface LegalHighlight {
  label: string
  value: string
}

export interface LegalDocument {
  slug: 'privacy' | 'terms' | 'security'
  badge: string
  title: string
  titleAccent: string
  description: string
  effectiveDate: string
  lastUpdated: string
  readingTime: string
  introduction: string
  notice: string
  highlights: LegalHighlight[]
  sections: LegalSection[]
}

const publicationDate = 'July 29, 2026'

export const privacyPolicy: LegalDocument = {
  slug: 'privacy',
  badge: 'Legal & Privacy',
  title: 'Privacy',
  titleAccent: 'Policy',
  description:
    'A clear account of how Kore Veridian collects, uses, discloses, safeguards, and manages personal information.',
  effectiveDate: publicationDate,
  lastUpdated: publicationDate,
  readingTime: '12 minute read',
  introduction:
    'Kore Veridian respects privacy and is committed to handling personal information responsibly, transparently, and in accordance with applicable Canadian privacy law.',
  notice:
    'This Policy applies to koreveridian.ca, our public forms and portals, recruitment interactions, and other direct communications with Kore Veridian. Customer services may also be governed by a contract, data processing addendum, or service-specific notice. Where those documents impose stronger protections, those protections will apply.',
  highlights: [
    { label: 'Collection', value: 'Purpose-limited' },
    { label: 'Use', value: 'Transparent' },
    { label: 'Protection', value: 'Risk-based' },
    { label: 'Control', value: 'Access & correction' },
  ],
  sections: [
    {
      id: 'scope',
      title: 'Scope and accountability',
      paragraphs: [
        'This Privacy Policy describes the practices of Kore Veridian (“Kore Veridian,” “we,” “us,” or “our”) in relation to personal information under our control. “Personal information” means information about an identifiable individual, whether recorded alone or combined with other information.',
        'Kore Veridian is accountable for personal information under its control, including information processed by service providers on our behalf. Responsibility for privacy compliance is assigned within the organization, and privacy questions or challenges may be directed to the contact identified at the end of this Policy.',
      ],
    },
    {
      id: 'information-we-collect',
      title: 'Personal information we collect',
      subsections: [
        {
          title: 'Information you provide',
          bullets: [
            'Contact and business information, such as your name, work email address, telephone number, company, role, and inquiry type.',
            'Communications and support content, including the information you include in messages, requests, tickets, demonstrations, or other correspondence.',
            'Recruitment information, including employment history, résumé or curriculum vitae, cover letter, LinkedIn or portfolio links, and information you choose to provide during the hiring process.',
            'Portal and account information, such as an email address, authentication credentials, session information, and account preferences.',
            'Commercial and relationship information associated with a prospect, customer, partner, supplier, or other business contact.',
          ],
        },
        {
          title: 'Information collected through technology',
          bullets: [
            'Device and network information, such as IP address, browser type, operating system, approximate location derived from network information, and device identifiers.',
            'Usage and diagnostic information, such as pages viewed, links selected, referring pages, request timestamps, performance data, and security events.',
            'Cookies, local storage, session tokens, and similar technologies required to operate, secure, remember, and understand use of the website and portals.',
          ],
        },
        {
          title: 'Information from other sources',
          paragraphs: [
            'We may receive business contact information from your organization, authorized representatives, referral partners, publicly available professional sources, service providers, or counterparties involved in an existing or proposed business relationship.',
          ],
        },
      ],
      callout:
        'Please do not submit patient records, protected health information, government identifiers, payment-card data, passwords, or other highly sensitive information through a general website form unless Kore Veridian has expressly authorized a secure channel for that purpose.',
    },
    {
      id: 'purposes',
      title: 'Why we collect and use information',
      bullets: [
        'Respond to inquiries, arrange demonstrations, provide support, and manage customer, partner, supplier, and professional relationships.',
        'Evaluate job applications, communicate with candidates, and administer recruitment activities.',
        'Create, authenticate, secure, and administer portal or service access.',
        'Operate, maintain, personalize, troubleshoot, and improve our website, services, communications, and business processes.',
        'Protect the confidentiality, integrity, and availability of systems and information; prevent fraud, abuse, and security incidents; and enforce applicable terms.',
        'Meet legal, regulatory, contractual, accounting, audit, insurance, and record-keeping requirements.',
        'Send service communications and, where permitted and appropriately consented to, relevant commercial communications.',
        'Establish, exercise, or defend legal rights and manage transactions or organizational changes.',
      ],
      paragraphs: [
        'We identify the purposes for collection at or before the time personal information is collected. If we wish to use information for a materially new purpose, we will obtain additional consent where required by law.',
      ],
    },
    {
      id: 'consent',
      title: 'Consent and lawful handling',
      paragraphs: [
        'Depending on the circumstances, consent may be express or implied and may be provided by you or by an authorized representative. We seek consent that is meaningful in light of the sensitivity of the information, your reasonable expectations, and the consequences of collection, use, or disclosure.',
        'You may withdraw consent, subject to reasonable notice and any legal or contractual restrictions. Withdrawal may limit our ability to provide a requested service, process an application, maintain an account, or continue a relationship. We will explain material consequences when they are not apparent.',
        'Applicable law may permit or require us to collect, use, or disclose personal information without consent, including for fraud prevention, investigations, emergencies, debt collection, legal proceedings, or compliance with lawful authority.',
      ],
    },
    {
      id: 'sharing',
      title: 'How information may be disclosed',
      paragraphs: [
        'We do not sell or rent lists of personal information collected through this website. We may disclose information only as reasonably necessary for the purposes described in this Policy, including to:',
      ],
      bullets: [
        'Cloud hosting, content delivery, security, analytics, communications, email, recruitment, support, and other service providers acting on our behalf.',
        'Affiliates, professional advisers, auditors, insurers, financial institutions, and business counterparties where appropriate to a legitimate relationship or transaction.',
        'Your organization, authorized users, or representatives where the information relates to an organizational account or business relationship.',
        'Law enforcement, regulators, courts, government authorities, or other persons when required or permitted by law or necessary to protect rights, safety, systems, or property.',
        'A prospective or completed purchaser, investor, successor, or other counterparty in connection with financing, reorganization, merger, sale, or transfer of all or part of a business or its assets, subject to appropriate safeguards.',
      ],
      closingParagraphs: [
        'Service providers are expected to protect information and use it only for authorized purposes. The precise providers and processing locations may change as our services evolve.',
      ],
    },
    {
      id: 'international-processing',
      title: 'Processing outside your jurisdiction',
      paragraphs: [
        'Kore Veridian is headquartered in Canada and may use service providers or infrastructure in Canada, the United States, and other jurisdictions. Personal information processed outside your province, territory, or country may be subject to the laws of the jurisdiction where it is processed and may be accessible to courts, law enforcement, or national security authorities in accordance with those laws.',
        'We assess service-provider arrangements and apply contractual, organizational, and technical measures appropriate to the sensitivity of the information and the nature of the processing.',
      ],
    },
    {
      id: 'retention',
      title: 'Retention and disposal',
      paragraphs: [
        'We retain personal information only for as long as reasonably necessary to fulfil the identified purposes, meet legal or contractual requirements, resolve disputes, enforce agreements, maintain appropriate business and security records, and support legitimate operational needs.',
        'Retention periods vary according to the type and sensitivity of information, the relationship involved, applicable limitation periods, and legal or regulatory obligations. When information is no longer required, we delete, anonymize, or securely dispose of it using measures appropriate to the medium and sensitivity.',
        'Backups and system logs may retain residual copies for a limited period until they are overwritten or deleted through ordinary retention cycles.',
      ],
    },
    {
      id: 'safeguards',
      title: 'Safeguards and incident response',
      paragraphs: [
        'We use administrative, technical, contractual, and physical safeguards that are intended to be proportionate to the sensitivity, amount, format, location, and use of personal information. These measures may include access controls, authentication, encryption, secure configuration, monitoring, backup, personnel practices, supplier controls, and incident-response procedures.',
        'No internet transmission, storage platform, or security measure is infallible. If a breach of security safeguards occurs, we will investigate, contain, document, and respond in accordance with applicable law. Where required, we will notify affected individuals and report to the appropriate privacy regulator as soon as feasible.',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies, sessions, and analytics',
      paragraphs: [
        'The website and portals may use cookies and similar technologies to maintain secure sessions, remember preferences, prevent abuse, measure reliability and performance, and understand how public pages are used. Some technologies are necessary for requested functionality and cannot be disabled without affecting the service.',
        'You can use browser settings to block or delete cookies. Doing so may prevent login, session, preference, or other website features from functioning correctly. We do not respond to every browser “Do Not Track” signal because there is no single consistently implemented standard; we will honour legally required preference signals where applicable.',
      ],
    },
    {
      id: 'communications',
      title: 'Commercial communications',
      paragraphs: [
        'Where we send commercial electronic messages, we do so on the basis of consent or another lawful permission. Messages will identify the sender and include a working unsubscribe mechanism where required. You may withdraw consent to marketing communications at any time; service, security, transactional, and legally required communications may continue.',
      ],
    },
    {
      id: 'rights',
      title: 'Your privacy choices and rights',
      paragraphs: [
        'Subject to applicable law and appropriate identity verification, you may request access to personal information under our control, ask how it has been used or disclosed, and request correction of information that is inaccurate or incomplete.',
      ],
      bullets: [
        'Request access to, or correction of, your personal information.',
        'Withdraw consent where processing is based on consent.',
        'Ask questions about retention, service providers, or processing outside Canada.',
        'Request deletion or de-identification where required by law or where we no longer have a lawful reason to retain the information.',
        'Challenge our compliance with this Policy or applicable privacy law.',
      ],
      closingParagraphs: [
        'We may need to verify your identity and authority before acting on a request. Access may be limited where disclosure would reveal another person’s information, confidential commercial information, legally privileged material, or information that applicable law permits or requires us to withhold. We will explain any lawful limitation.',
      ],
    },
    {
      id: 'children',
      title: 'Children and minors',
      paragraphs: [
        'Our business-to-business website and services are not directed to children under 13, and we do not knowingly collect their personal information through the public website. If you believe a child has provided personal information without appropriate authorization, please contact us so that we can assess and address the matter.',
      ],
    },
    {
      id: 'third-parties',
      title: 'Third-party websites and services',
      paragraphs: [
        'The website may link to services operated by others. Their privacy practices are governed by their own notices and are not controlled by this Policy. Review the privacy information of a third party before providing information or using its service.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes to this Policy',
      paragraphs: [
        'We may revise this Policy to reflect changes in law, technology, services, or business practices. The “Last updated” date identifies the current version. Material changes will be presented through a reasonable notice mechanism appropriate to the circumstances. Continued use after an updated Policy becomes effective is subject to applicable consent requirements and non-waivable rights.',
      ],
    },
    {
      id: 'contact',
      title: 'Privacy contact and complaints',
      paragraphs: [
        'Send privacy questions, access or correction requests, consent withdrawals, or complaints to contact@koreveridian.ca with the subject line “Privacy Inquiry.” You may also use our general contact page.',
        'We will review privacy concerns fairly and respond within a reasonable period. If you are not satisfied, you may have the right to contact the Office of the Privacy Commissioner of Canada or the applicable provincial or territorial privacy regulator.',
      ],
    },
  ],
}

export const termsOfService: LegalDocument = {
  slug: 'terms',
  badge: 'Website Terms',
  title: 'Terms of',
  titleAccent: 'Service',
  description:
    'The rules that govern access to koreveridian.ca, its public portals, content, forms, and related online features.',
  effectiveDate: publicationDate,
  lastUpdated: publicationDate,
  readingTime: '11 minute read',
  introduction:
    'These Terms of Service form a binding agreement between you and Kore Veridian regarding your access to and use of this website.',
  notice:
    'These Terms govern the public website and related online features. Paid, managed, professional, cloud, voice, or platform services are governed by the applicable proposal, order form, master services agreement, service schedule, acceptable use policy, data processing addendum, or other executed agreement. If there is a conflict, the executed agreement controls for the contracted service.',
  highlights: [
    { label: 'Applies to', value: 'Website use' },
    { label: 'Contracted services', value: 'Separate terms' },
    { label: 'Content', value: 'Protected' },
    { label: 'Governing law', value: 'Ontario, Canada' },
  ],
  sections: [
    {
      id: 'acceptance',
      title: 'Acceptance of these Terms',
      paragraphs: [
        'By accessing or using koreveridian.ca, a Kore Veridian portal, or a feature that links to these Terms (collectively, the “Site”), you acknowledge that you have read, understood, and agreed to these Terms and our Privacy Policy. If you do not agree, do not use the Site.',
        'If you use the Site on behalf of a company, public body, or other organization, you represent that you have authority to bind that organization. In that case, “you” includes both you and the organization.',
      ],
    },
    {
      id: 'eligibility',
      title: 'Eligibility and authority',
      paragraphs: [
        'You must be legally capable of entering into a binding agreement and, in any event, at least the age of majority in your place of residence. The Site is intended principally for business and professional audiences, not for use by children.',
      ],
    },
    {
      id: 'site-purpose',
      title: 'Purpose of the Site',
      paragraphs: [
        'The Site provides general information about Kore Veridian, its capabilities, services, opportunities, resources, and ways to contact or work with us. Site content is provided for informational and evaluation purposes and is not a binding offer, service commitment, architecture specification, warranty, legal opinion, financial advice, or professional advice.',
        'Descriptions of features, availability, service levels, security controls, regions, pricing, roadmaps, certifications, integrations, or outcomes are illustrative unless expressly confirmed in an executed agreement. We may change Site content without notice.',
      ],
    },
    {
      id: 'permitted-use',
      title: 'Permitted use',
      paragraphs: [
        'Kore Veridian grants you a limited, revocable, non-exclusive, non-transferable right to access and use the Site for lawful internal business, informational, recruitment, support, or evaluation purposes in accordance with these Terms.',
      ],
    },
    {
      id: 'prohibited-use',
      title: 'Prohibited conduct',
      bullets: [
        'Use the Site unlawfully, fraudulently, deceptively, or in a manner that infringes another person’s rights.',
        'Attempt to gain unauthorized access to an account, system, network, data, or non-public feature.',
        'Probe, scan, test, bypass, disable, or interfere with security, authentication, rate limiting, monitoring, or access controls without prior written authorization.',
        'Introduce malware, destructive code, automated abuse, denial-of-service traffic, or content intended to disrupt or compromise the Site.',
        'Scrape, crawl, harvest, copy, frame, mirror, or index the Site at a scale or in a manner that burdens the service, circumvents controls, or violates applicable law.',
        'Impersonate another person, misrepresent authority or affiliation, submit false information, or use another person’s credentials.',
        'Reverse engineer, decompile, disassemble, or attempt to derive source code except to the limited extent a prohibition is not permitted by law.',
        'Use Site content, names, marks, or materials to train or operate a competing commercial service without written permission.',
      ],
    },
    {
      id: 'accounts',
      title: 'Accounts, credentials, and access',
      paragraphs: [
        'Where access credentials are issued, you are responsible for maintaining their confidentiality, using reasonable security measures, and promptly notifying us of suspected compromise or unauthorized use. Credentials are personal to the authorized user and may not be shared unless an applicable agreement expressly permits it.',
        'We may suspend or restrict access when reasonably necessary to protect users, systems, information, legal compliance, or contractual rights. Portal access does not itself create an entitlement to any product, feature, support level, or service.',
      ],
    },
    {
      id: 'submissions',
      title: 'Forms, communications, and submissions',
      paragraphs: [
        'You are responsible for the accuracy, lawfulness, and appropriateness of information you submit. Do not send confidential, regulated, export-controlled, patient, payment-card, authentication, or other highly sensitive information through a general form unless Kore Veridian has authorized a secure channel.',
        'You represent that you have the rights and permissions necessary to provide submitted information and for us to use it to respond, evaluate, deliver the requested interaction, protect our systems, and administer the relationship. Personal information is handled under our Privacy Policy.',
      ],
    },
    {
      id: 'feedback',
      title: 'Feedback and suggestions',
      paragraphs: [
        'If you voluntarily provide ideas, suggestions, or feedback about the Site or our services, you grant Kore Veridian a worldwide, perpetual, irrevocable, royalty-free right to use, reproduce, adapt, disclose, and commercialize that feedback without restriction or compensation. This does not transfer ownership of your pre-existing confidential information or intellectual property.',
      ],
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual property',
      paragraphs: [
        'The Site and its design, software, text, graphics, logos, icons, audiovisual material, compilations, and other content are owned by or licensed to Kore Veridian and are protected by intellectual-property and unfair-competition laws. All rights not expressly granted are reserved.',
        'Kore Veridian names, logos, product names, and branding may be trademarks or trade names. No licence to use a mark is granted by access to the Site. You may make a reasonable number of copies of public materials for internal evaluation, provided notices remain intact and the materials are not modified or used misleadingly.',
      ],
    },
    {
      id: 'third-parties',
      title: 'Third-party services and links',
      paragraphs: [
        'The Site may reference or link to third-party products, websites, platforms, documentation, or services. Links are provided for convenience and do not imply endorsement, control, or responsibility. Third-party services are governed by their own terms, privacy notices, availability, and security practices.',
      ],
    },
    {
      id: 'availability',
      title: 'Availability and changes',
      paragraphs: [
        'We may maintain, modify, suspend, withdraw, or discontinue any part of the Site at any time. We do not promise that the Site will be uninterrupted, error-free, secure, complete, current, or compatible with every device or environment. Scheduled and unscheduled maintenance, network conditions, third-party services, security events, and circumstances beyond our control may affect availability.',
      ],
    },
    {
      id: 'disclaimers',
      title: 'Disclaimers',
      paragraphs: [
        'TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SITE AND ITS CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT REPRESENTATIONS, WARRANTIES, OR CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR COLLATERAL, INCLUDING WARRANTIES OF ACCURACY, COMPLETENESS, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, OR THAT THE SITE WILL BE SECURE OR ERROR-FREE.',
        'Nothing in these Terms excludes a representation, warranty, condition, remedy, or right that cannot lawfully be excluded or limited. Contracted services remain subject to the warranties and commitments expressly stated in the applicable executed agreement.',
      ],
    },
    {
      id: 'liability',
      title: 'Limitation of liability',
      paragraphs: [
        'TO THE MAXIMUM EXTENT PERMITTED BY LAW, KORE VERIDIAN AND ITS AFFILIATES, PERSONNEL, LICENSORS, AND SERVICE PROVIDERS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL LOSS, OR FOR LOSS OF PROFITS, REVENUE, BUSINESS, OPPORTUNITY, GOODWILL, DATA, OR USE, ARISING FROM OR RELATED TO THE SITE, EVEN IF ADVISED OF THE POSSIBILITY.',
        'TO THE MAXIMUM EXTENT PERMITTED BY LAW, THEIR AGGREGATE LIABILITY FOR CLAIMS ARISING SOLELY FROM YOUR USE OF THE PUBLIC SITE WILL NOT EXCEED CAD $100. THIS LIMIT DOES NOT APPLY TO LIABILITY THAT CANNOT LAWFULLY BE LIMITED. LIABILITY RELATING TO A CONTRACTED SERVICE IS GOVERNED BY THE APPLICABLE EXECUTED AGREEMENT.',
      ],
    },
    {
      id: 'indemnity',
      title: 'Indemnity',
      paragraphs: [
        'To the extent permitted by law, you will defend, indemnify, and hold harmless Kore Veridian and its affiliates, personnel, and service providers from third-party claims, losses, and reasonable costs arising from your unlawful use of the Site, material breach of these Terms, infringement of another person’s rights, or information you submit. This obligation does not apply to the extent a claim results from Kore Veridian’s own unlawful conduct.',
      ],
    },
    {
      id: 'suspension',
      title: 'Suspension and termination',
      paragraphs: [
        'We may suspend or terminate access to the Site immediately where we reasonably believe use is unlawful, insecure, abusive, harmful, or inconsistent with these Terms. Provisions that by their nature should survive will survive, including provisions concerning intellectual property, feedback, disclaimers, liability, indemnity, and dispute terms.',
      ],
    },
    {
      id: 'governing-law',
      title: 'Governing law and disputes',
      paragraphs: [
        'These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable there, without regard to conflict-of-laws principles. Subject to rights that cannot be waived, the courts located in Ontario will have exclusive jurisdiction over disputes arising from the Site.',
        'Before commencing a formal proceeding, each party should provide written notice of the dispute and make reasonable good-faith efforts to resolve it. Nothing prevents either party from seeking urgent injunctive relief or pursuing a claim in a forum required by applicable consumer law.',
      ],
    },
    {
      id: 'general',
      title: 'General provisions',
      paragraphs: [
        'If a provision is held unenforceable, it will be enforced to the greatest lawful extent and the remaining provisions will continue. A waiver must be express and does not waive a later breach. You may not assign these Terms without our written consent; we may assign them in connection with a reorganization, financing, merger, sale, or transfer of business.',
        'These Terms, together with the Privacy Policy and any additional terms expressly presented for a Site feature, are the entire agreement concerning the public Site. Headings are for convenience only. The English version controls to the extent permitted by law if a translation differs.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes to these Terms',
      paragraphs: [
        'We may update these Terms to reflect changes in law, the Site, or our practices. The “Last updated” date identifies the current version. Material changes will be communicated through a reasonable notice mechanism. By continuing to use the Site after revised Terms become effective, you agree to the revised Terms, subject to non-waivable rights.',
      ],
    },
    {
      id: 'contact',
      title: 'Contact',
      paragraphs: [
        'Questions about these Terms may be sent to contact@koreveridian.ca with the subject line “Terms of Service,” or submitted through our general contact page.',
      ],
    },
  ],
}

export const securityOverview: LegalDocument = {
  slug: 'security',
  badge: 'Trust Center',
  title: 'Security at',
  titleAccent: 'Kore Veridian',
  description:
    'Our security principles, control domains, shared-responsibility model, and process for reporting a potential vulnerability.',
  effectiveDate: publicationDate,
  lastUpdated: publicationDate,
  readingTime: '9 minute read',
  introduction:
    'Kore Veridian approaches security as an ongoing, risk-based discipline spanning people, process, technology, suppliers, and customer collaboration.',
  notice:
    'This page is a public overview, not a certification, audit report, warranty, service-level commitment, or representation that every control applies identically to every service. Specific controls, assurance materials, regulatory commitments, data locations, and customer responsibilities are defined through service documentation and executed agreements.',
  highlights: [
    { label: 'Protect', value: 'Layered controls' },
    { label: 'Detect', value: 'Risk visibility' },
    { label: 'Respond', value: 'Coordinated action' },
    { label: 'Recover', value: 'Resilient design' },
  ],
  sections: [
    {
      id: 'principles',
      title: 'Security principles',
      bullets: [
        'Risk-based decisions: controls are selected and reviewed according to information sensitivity, threat, architecture, legal obligations, and customer context.',
        'Least privilege: access should be limited to authorized people, services, and purposes for only as long as required.',
        'Defence in depth: preventive, detective, responsive, and recovery measures should work together so that no single safeguard is treated as infallible.',
        'Secure by design: security and privacy considerations should be incorporated into architecture, delivery, operations, and change management.',
        'Shared responsibility: Kore Veridian, customers, cloud providers, carriers, and other suppliers each retain responsibilities that must be understood and coordinated.',
        'Continuous improvement: security practices evolve in response to incidents, testing, telemetry, technology, business change, and the threat environment.',
      ],
    },
    {
      id: 'governance',
      title: 'Governance and risk management',
      paragraphs: [
        'Our security approach is intended to establish ownership, define acceptable risk, identify critical systems and information, manage exceptions, and support accountable decision-making. The formality and evidence associated with a control depends on the service and contractual scope.',
      ],
      bullets: [
        'Security roles, escalation paths, policies, and operating procedures appropriate to the service.',
        'Risk assessment for material systems, suppliers, architectural changes, and customer requirements.',
        'Personnel confidentiality obligations and security awareness appropriate to role and access.',
        'Documented exceptions, corrective actions, and review of material security events.',
      ],
    },
    {
      id: 'identity',
      title: 'Identity and access protection',
      paragraphs: [
        'Access controls are designed to reduce unauthorized access and limit the impact of credential compromise. Depending on the service, measures may include:',
      ],
      bullets: [
        'Unique identities, role-based authorization, least-privilege access, and separation of sensitive duties.',
        'Strong authentication and additional verification for privileged or higher-risk access.',
        'Credential and secret-management practices intended to avoid exposure in source code, logs, or public channels.',
        'Joiner, mover, and leaver processes, periodic access review, session controls, and prompt revocation where appropriate.',
      ],
    },
    {
      id: 'data-protection',
      title: 'Data protection',
      paragraphs: [
        'Controls for customer and business information are selected according to sensitivity, processing purpose, contractual terms, and architecture. These may include encryption in transit, encryption at rest where appropriate, tenant or environment separation, retention controls, secure disposal, protected backups, and restrictions on copying or export.',
        'Customers should use approved secure channels and avoid placing secrets or regulated data in general inquiries, support messages, or other locations not designated for that information.',
      ],
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure and network security',
      bullets: [
        'Secure configuration and change control for infrastructure, applications, network services, and cloud resources.',
        'Segmentation, traffic controls, rate limiting, abuse prevention, and protected administrative paths where appropriate.',
        'Patch, dependency, and vulnerability-management processes prioritized by exposure and risk.',
        'Resilient hosting, backup, and recovery patterns aligned with the service’s availability and recovery requirements.',
        'Supplier and cloud-service controls that account for the shared-responsibility model.',
      ],
    },
    {
      id: 'development',
      title: 'Secure delivery and change management',
      paragraphs: [
        'Software and infrastructure changes should move through controlled design, review, testing, deployment, and rollback processes proportionate to risk. Relevant practices may include peer review, automated quality and security checks, environment separation, dependency review, protected configuration, release evidence, and post-deployment verification.',
        'Security findings are evaluated according to exploitability, exposure, business impact, affected information, and available mitigations. Remediation priority and timing depend on that assessment and any applicable contractual commitment.',
      ],
    },
    {
      id: 'monitoring',
      title: 'Logging, monitoring, and detection',
      paragraphs: [
        'Systems may generate operational, authentication, administrative, application, network, and security events to support reliability, investigations, abuse prevention, and threat detection. Access to logs should be limited, retention should be proportionate, and sensitive information should not be logged unnecessarily.',
        'Monitoring coverage varies by service and deployment. A public description of monitoring does not disclose confidential detection logic, thresholds, system topology, or other information that could weaken security.',
      ],
    },
    {
      id: 'incident-response',
      title: 'Incident response',
      paragraphs: [
        'Our incident-response approach is intended to support preparation, identification, triage, containment, eradication, recovery, communication, evidence preservation, and lessons learned. Material events are escalated according to their potential effect on confidentiality, integrity, availability, safety, customers, and legal obligations.',
        'Where an incident involves personal information, we assess sensitivity and the probability of misuse and meet applicable record-keeping, reporting, and notification obligations. Customer notifications and cooperation are governed by applicable law and executed agreements.',
      ],
    },
    {
      id: 'resilience',
      title: 'Resilience and recovery',
      paragraphs: [
        'Resilience is addressed through service-appropriate architecture, backup and restore practices, dependency planning, operational procedures, and recovery testing. Recovery objectives, redundancy, maintenance windows, and service levels are commitments only when stated in an executed agreement.',
      ],
      callout:
        'No system can be guaranteed completely secure or continuously available. Security reduces risk; it does not eliminate all threat, human error, supplier failure, or residual risk.',
    },
    {
      id: 'suppliers',
      title: 'Suppliers and subprocessors',
      paragraphs: [
        'We rely on cloud, network, communications, security, professional, and other providers. Supplier review is proportionate to access, criticality, data sensitivity, concentration risk, and substitutability. Contractual and technical controls are used where appropriate, but each provider remains responsible for its own systems and obligations.',
      ],
    },
    {
      id: 'customer-responsibilities',
      title: 'Customer responsibilities',
      bullets: [
        'Protect user accounts, credentials, API keys, endpoints, devices, and networks under your control.',
        'Assign least-privilege roles, promptly remove obsolete access, and use available authentication safeguards.',
        'Configure services according to documentation and your risk, compliance, retention, and data-residency requirements.',
        'Classify information and use only approved channels for sensitive, regulated, or confidential data.',
        'Maintain supported software, review alerts, preserve appropriate backups, and notify Kore Veridian promptly of suspected compromise.',
        'Meet obligations that apply to your content, users, jurisdictions, and use of the service.',
      ],
    },
    {
      id: 'assurance',
      title: 'Compliance and assurance',
      paragraphs: [
        'We may design services with reference to recognized security, privacy, cloud, or industry frameworks where relevant. A reference to SOC 2, ISO 27001, HIPAA, PIPEDA, PCI DSS, CIS Controls, NIST guidance, or another framework describes an alignment objective or customer requirement unless Kore Veridian expressly states a current certification, attestation, or legal status in writing.',
        'Available assurance information depends on the service, stage of the relationship, confidentiality requirements, and executed agreements. Prospective and existing customers may request relevant security documentation through our contact channel.',
      ],
    },
    {
      id: 'reporting',
      title: 'Report a potential vulnerability',
      paragraphs: [
        'If you believe you have identified a security vulnerability affecting a Kore Veridian-owned public system, email contact@koreveridian.ca with the subject line “Security Report.” Include the affected host or service, a clear description, reproducible steps, potential impact, and a secure way to contact you.',
      ],
      bullets: [
        'Do not include secrets, personal information, customer data, or exploit payloads in an initial email; we can arrange a safer exchange if needed.',
        'Do not access, retain, alter, destroy, or disclose data that is not your own.',
        'Do not use denial-of-service, social engineering, phishing, physical testing, persistence, automated high-volume scanning, or activity that could disrupt service.',
        'Do not test a customer environment or third-party system without that owner’s express written authorization.',
        'Stop testing and report promptly if you encounter sensitive data or evidence of active compromise.',
      ],
      closingParagraphs: [
        'Kore Veridian does not operate a public bug-bounty program unless one is separately announced in writing. Submission does not create a right to payment, authorization to conduct intrusive testing, or permission to disclose a finding. We will assess credible reports and coordinate next steps at our discretion and in accordance with applicable obligations.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes and contact',
      paragraphs: [
        'Security practices evolve. We may update this overview as services, controls, suppliers, threats, laws, or assurance activities change. Security and assurance questions may be submitted through our general contact page or sent to contact@koreveridian.ca.',
      ],
    },
  ],
}

export const legalDocuments = {
  privacy: privacyPolicy,
  terms: termsOfService,
  security: securityOverview,
} as const
