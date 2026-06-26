import { motion } from 'framer-motion'
import { GradientOrb, FlowGrid } from './GradientOrb'

interface PageHeroProps {
  badge?: string
  title: string
  titleAccent?: string
  description: string
}

export function PageHero({ badge, title, titleAccent, description }: PageHeroProps) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden border-b border-border-subtle">
      <FlowGrid />
      <GradientOrb className="top-0 right-0" color="veridian" size="md" />
      <GradientOrb className="bottom-0 left-0" color="purple" size="sm" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-veridian bg-veridian/10 rounded-full border border-veridian/20 mb-6"
          >
            {badge}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-6xl font-bold mb-6 max-w-4xl"
        >
          {title}{' '}
          {titleAccent && <span className="gradient-text">{titleAccent}</span>}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-text-secondary max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
