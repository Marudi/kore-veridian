import { Link } from 'react-router-dom'
import { Globe, ArrowRight, MapPin } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { CTASection } from '../components/home/CTASection'
import { Button } from '../components/ui/Button'
import { companyHighlights, globalPresence, companyStats, companyNavLinks } from '../data/company'
import { companyTagline } from '../data/content'

export function CompanyPage() {
  return (
    <>
      <PageHero
        badge="Company"
        title="Built for Global"
        titleAccent="Cloud & Voice"
        description={`${companyTagline} Kore Veridian is a technology company delivering enterprise cloud platforms, voice services, consulting, and managed operations worldwide.`}
      />

      <section className="py-20 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyStats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="overview" className="py-20 border-b border-border-subtle scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Kore Veridian</h2>
            <p className="text-text-secondary">
              We help organizations compete at enterprise scale without building infrastructure from scratch.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {companyHighlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="p-8 rounded-2xl bg-bg-card border border-border-subtle hover:border-veridian/20 transition-all h-full">
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="global" className="py-20 bg-bg-secondary/30 border-b border-border-subtle scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <Globe className="w-10 h-10 text-veridian mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Global Presence</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Headquartered in Canada with infrastructure and partners across major cloud and telecom markets.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalPresence.map((region) => (
              <StaggerItem key={region.region}>
                <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle text-center h-full">
                  <MapPin className="w-5 h-5 text-veridian mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{region.region}</h4>
                  <p className="text-sm text-text-secondary">{region.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="values" className="py-20 border-b border-border-subtle scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Every organization deserves access to enterprise-grade cloud and voice infrastructure without
                the complexity of building it themselves. Kore Veridian bridges that gap.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                From public cloud platforms to voice aggregation, strategic consulting, and fully managed
                operations — we are the partner that grows with you.
              </p>
              <Button variant="primary" href="/about">
                Read Our Full Story
                <ArrowRight className="w-4 h-4" />
              </Button>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="p-8 rounded-2xl bg-bg-card border border-veridian/20 text-center">
                <img
                  src="/logos/Icon-Only-Color.svg"
                  alt=""
                  className="w-20 h-20 mx-auto mb-6 opacity-90"
                />
                <blockquote className="text-lg text-text-secondary italic mb-4">
                  &ldquo;Engineered cloud. Delivered.&rdquo;
                </blockquote>
                <p className="text-sm text-text-muted">Kore Veridian — Canada</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Kore Veridian</h2>
            <p className="text-text-secondary">Navigate to the area that best fits your needs.</p>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyNavLinks.map((link) => (
              <StaggerItem key={link.title}>
                <Link
                  to={link.href}
                  className="group block p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-veridian/30 transition-all h-full"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-veridian transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">{link.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-veridian">
                    Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  )
}
