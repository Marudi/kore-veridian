import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-veridian bg-veridian/10 rounded-full border border-veridian/20 mb-4">
            Client Success
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={testimonial.author} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full p-8 rounded-2xl bg-bg-card border border-border-subtle hover:border-veridian/20 transition-all duration-300 flex flex-col"
              >
                <Quote className="w-8 h-8 text-veridian/40 mb-4" />
                <p className="text-text-secondary leading-relaxed flex-1 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-text-primary">{testimonial.author}</div>
                  <div className="text-sm text-text-muted">{testimonial.role}</div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
