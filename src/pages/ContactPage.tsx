import { useSearchParams, Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { ContactForm } from '../components/contact/ContactForm'
import { CTASection } from '../components/home/CTASection'
import { contactDepartments } from '../data/support'

export function ContactPage() {
  const [searchParams] = useSearchParams()
  const defaultType = searchParams.get('type') || 'general'

  return (
    <>
      <PageHero
        badge="Contact"
        title="Let's Build Something"
        titleAccent="Together"
        description="Reach the right team for sales, support, partnerships, or general inquiries. We respond to all messages within one business day."
      />

      {/* Department routing */}
      <section className="py-16 border-b border-border-subtle bg-bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2">Contact the Right Team</h2>
            <p className="text-text-secondary">Not sure where to start? Choose a department below.</p>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactDepartments.map((dept) => (
              <StaggerItem key={dept.title}>
                <Link
                  to={dept.href}
                  className="group block p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-veridian/30 transition-all h-full"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-veridian transition-colors">
                    {dept.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-3 leading-relaxed">{dept.description}</p>
                  <div className="text-xs text-text-muted mb-3">{dept.email}</div>
                  <span className="inline-flex items-center gap-1 text-sm text-veridian">
                    Get in touch <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <AnimatedSection className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: Mail,
                      label: 'Email',
                      value: 'contact@koreveridian.ca',
                      href: 'mailto:contact@koreveridian.ca',
                    },
                    {
                      icon: Phone,
                      label: 'Sales & Support',
                      value: '+1 (800) 555-0142',
                      href: 'tel:+18005550142',
                    },
                    { icon: MapPin, label: 'Headquarters', value: 'Canada' },
                    { icon: Clock, label: 'Business Hours', value: 'Mon–Fri, 8am–6pm ET' },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-veridian/10 border border-veridian/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-veridian" />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted uppercase tracking-wider">{label}</div>
                        {href ? (
                          <a href={href} className="text-sm text-text-primary hover:text-veridian transition-colors">
                            {value}
                          </a>
                        ) : (
                          <div className="text-sm text-text-primary">{value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle">
                <h4 className="font-semibold mb-2">Enterprise Sales</h4>
                <p className="text-sm text-text-secondary mb-4">
                  For multi-site deployments, custom SLAs, and dedicated solutions architecture support.
                </p>
                <a href="mailto:contact@koreveridian.ca" className="text-sm text-veridian hover:underline">
                  contact@koreveridian.ca
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-bg-card border border-veridian/20">
                <h4 className="font-semibold mb-2">Existing Customer?</h4>
                <p className="text-sm text-text-secondary mb-3">
                  For technical issues and incidents, visit our dedicated support center for faster resolution.
                </p>
                <Link to="/support" className="inline-flex items-center gap-1 text-sm text-veridian hover:gap-2 transition-all">
                  Go to Support <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-3" delay={0.2}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">Send Us a Message</h3>
                <p className="text-sm text-text-secondary">
                  Fill out the form below and your message will be emailed to our team. You can also reach us directly at{' '}
                  <a href="mailto:contact@koreveridian.ca" className="text-veridian hover:underline">
                    contact@koreveridian.ca
                  </a>
                  .
                </p>
              </div>
              <ContactForm
                defaultType={defaultType}
                messagePlaceholder="How can we help you today?"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
