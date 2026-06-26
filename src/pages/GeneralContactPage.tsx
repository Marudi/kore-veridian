import { Link } from 'react-router-dom'
import {
  Newspaper,
  Briefcase,
  CreditCard,
  Scale,
  MessageSquare,
  HelpCircle,
  Mail,
  MapPin,
  ArrowRight,
} from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { ContactForm } from '../components/contact/ContactForm'
import { CTASection } from '../components/home/CTASection'
import { generalInquiryTopics, generalFaqs } from '../data/support'

const topicIcons: Record<string, typeof Mail> = {
  media: Newspaper,
  careers: Briefcase,
  billing: CreditCard,
  legal: Scale,
  feedback: MessageSquare,
  other: HelpCircle,
}

export function GeneralContactPage() {
  return (
    <>
      <PageHero
        badge="General Inquiries"
        title="We're Here to"
        titleAccent="Help"
        description="Media requests, careers, billing questions, legal inquiries, and everything else — reach the right team at Kore Veridian."
      />

      <section className="py-20 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">What Can We Help With?</h2>
            <p className="text-text-secondary">
              Select a topic below or use the form to send us a message — all inquiries route to our team.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalInquiryTopics.map((topic) => {
              const Icon = topicIcons[topic.icon] ?? HelpCircle
              const content = (
                <>
                  <Icon className="w-8 h-8 text-veridian mb-4" />
                  <h3 className="font-semibold mb-2">{topic.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{topic.description}</p>
                  {'href' in topic && topic.href && (
                    <span className="inline-flex items-center gap-1 text-sm text-veridian mt-4">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  )}
                </>
              )

              return (
                <StaggerItem key={topic.title}>
                  {'href' in topic && topic.href ? (
                    <Link
                      to={topic.href}
                      className="group block p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-veridian/30 transition-all h-full"
                    >
                      {content}
                    </Link>
                  ) : (
                    <a
                      href="#contact-form"
                      className="group block p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-veridian/30 transition-all h-full"
                    >
                      {content}
                    </a>
                  )}
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-bg-secondary/30 border-b border-border-subtle">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </AnimatedSection>
          <StaggerContainer className="space-y-4">
            {generalFaqs.map((faq) => (
              <StaggerItem key={faq.question}>
                <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="contact-form" className="py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <AnimatedSection className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Fill out the form and your message will be emailed to our team at{' '}
                  <a href="mailto:contact@koreveridian.ca" className="text-veridian hover:underline">
                    contact@koreveridian.ca
                  </a>
                  . We respond within one business day.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-veridian" />
                    <span className="text-text-primary">contact@koreveridian.ca</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-veridian" />
                    <span className="text-text-primary">Canada</span>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle">
                <h4 className="font-semibold mb-2">Looking for sales or support?</h4>
                <p className="text-sm text-text-secondary mb-4">
                  For demos, pricing, or technical issues, visit our dedicated pages for faster routing.
                </p>
                <div className="flex flex-col gap-2">
                  <Link to="/contact/sales" className="text-sm text-veridian hover:underline">
                    Sales & Solutions →
                  </Link>
                  <Link to="/support" className="text-sm text-veridian hover:underline">
                    Technical Support →
                  </Link>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-sm text-veridian hover:gap-2 transition-all"
              >
                View all contact options <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-3" delay={0.15}>
              <ContactForm
                defaultType="general"
                showTypeSelector={false}
                submitLabel="Send Message"
                messagePlaceholder="How can we help you? Include any relevant details about your inquiry..."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
