import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Globe, CheckCircle2, ArrowRight, Presentation } from 'lucide-react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'
import { BrandLogo } from '../components/ui/BrandLogo'
import { ContactForm } from '../components/contact/ContactForm'
import { RotatingWorldMapBackground } from '../components/ui/RotatingWorldMap'
import { demoHighlights } from '../data/company'

export function DemoPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <RotatingWorldMapBackground />

      <div className="relative z-10">
        <section className="pt-16 pb-8 lg:pt-20 lg:pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-veridian bg-veridian/10 rounded-full border border-veridian/25 mb-6"
            >
              <Globe className="w-3.5 h-3.5" />
              Global Platform Demo
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold mb-4"
            >
              Request a <span className="gradient-text">Demo</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary max-w-2xl mx-auto leading-relaxed"
            >
              See how Kore Veridian delivers enterprise cloud, voice, and managed services — engineered for
              scale, security, and global operations.
            </motion.p>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
              <AnimatedSection className="lg:col-span-2 space-y-8">
                <div className="p-8 rounded-2xl glass-panel border border-veridian/15 bg-bg-card/75 backdrop-blur-xl">
                  <Presentation className="w-10 h-10 text-veridian mb-4" />
                  <h2 className="text-xl font-bold mb-4">What You&apos;ll Experience</h2>
                  <ul className="space-y-3">
                    {demoHighlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-veridian flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden lg:flex justify-center">
                  <BrandLogo variant="footer" showTagline />
                </div>
              </AnimatedSection>

              <AnimatedSection className="lg:col-span-3" delay={0.15}>
                <div className="p-8 rounded-2xl glass-panel border border-veridian/15 shadow-2xl shadow-black/40 backdrop-blur-xl bg-bg-card/75">
                  <div className="flex justify-center mb-6 lg:hidden">
                    <BrandLogo variant="header" showTagline={false} />
                  </div>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-1">Schedule Your Demo</h2>
                    <p className="text-sm text-text-secondary">
                      Complete the form and our solutions team will respond within one business day.
                    </p>
                  </div>
                  <ContactForm
                    defaultType="demo"
                    showTypeSelector={false}
                    submitLabel="Request a Demo"
                    messagePlaceholder="Tell us about your organization, current infrastructure, and goals for the demo..."
                    className="!p-0 !border-0 !bg-transparent"
                  />
                  <p className="mt-6 text-center text-xs text-text-muted">
                    Prefer to explore first?{' '}
                    <Link to="/platform" className="text-veridian hover:underline">
                      View the platform
                    </Link>{' '}
                    or{' '}
                    <Link to="/contact/sales" className="text-veridian hover:underline">
                      contact sales
                    </Link>
                    .
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Button variant="outline" href="/solutions">
              Explore Solutions
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
