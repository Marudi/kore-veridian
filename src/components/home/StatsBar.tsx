import { motion } from 'framer-motion'
import { stats } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'

export function StatsBar() {
  return (
    <section className="relative py-16 border-y border-border-subtle bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <motion.div
                  className="text-3xl lg:text-4xl font-bold gradient-text mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: i * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
