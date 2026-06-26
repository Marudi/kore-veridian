import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { heroContent } from '../../data/content'
import { Button } from '../ui/Button'
import { GradientOrb, FlowGrid, FloatingParticles } from '../ui/GradientOrb'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <FlowGrid />
      <FloatingParticles />
      <GradientOrb className="top-20 -left-32" color="veridian" size="lg" />
      <GradientOrb className="bottom-20 -right-32" color="purple" size="lg" />
      <GradientOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="blue" size="md" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-veridian/10 border border-veridian/20 text-veridian text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            {heroContent.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            {heroContent.headline}{' '}
            <span className="gradient-text">{heroContent.headlineAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-2xl mb-10"
          >
            {heroContent.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary" size="lg" href="/contact?type=demo">
              {heroContent.primaryCta}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" href="/solutions">
              {heroContent.secondaryCta}
            </Button>
          </motion.div>
        </div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 w-[480px]"
        >
          <div className="relative">
            <div className="glass-panel rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="text-xs text-text-muted ml-2">kore-veridian platform</span>
              </div>
              {[
                { label: 'Cloud Nodes', value: '128 active', color: 'bg-veridian' },
                { label: 'Voice Channels', value: '2,450 live', color: 'bg-accent-purple' },
                { label: 'AI Inferences', value: '18.2K/min', color: 'bg-accent-blue' },
                { label: 'Uptime', value: '99.997%', color: 'bg-veridian' },
              ].map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.15 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-bg-primary/50 border border-border-subtle"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${metric.color} animate-pulse-glow`} />
                    <span className="text-sm text-text-secondary">{metric.label}</span>
                  </div>
                  <span className="text-sm font-mono font-medium text-text-primary">{metric.value}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 glass-panel rounded-xl px-4 py-3 shadow-xl"
            >
              <div className="text-xs text-text-muted">AI Ops Status</div>
              <div className="text-sm font-semibold text-veridian">All Systems Optimal</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flow-line" />
    </section>
  )
}
