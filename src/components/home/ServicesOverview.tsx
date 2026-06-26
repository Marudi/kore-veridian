import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { servicePillars } from '../../data/content'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../ui/AnimatedSection'

export function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-veridian bg-veridian/10 rounded-full border border-veridian/20 mb-4">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Four Pillars of <span className="gradient-text">Modern Infrastructure</span>
          </h2>
          <p className="text-lg text-text-secondary">
            From cloud platforms to voice services, consulting to managed operations — Kore Veridian is your
            end-to-end technology partner.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {servicePillars.map((pillar) => (
            <StaggerItem key={pillar.id}>
              <Link
                to={pillar.href}
                className="group block h-full p-8 rounded-2xl bg-bg-card border border-border-subtle hover:border-veridian/30 transition-all duration-300 hover:shadow-xl hover:shadow-veridian/5 relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-veridian transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">{pillar.description}</p>
                  <ul className="space-y-2 mb-6">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                        <CheckCircle2 className="w-4 h-4 text-veridian flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-veridian group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
