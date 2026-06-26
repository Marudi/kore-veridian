import { motion } from 'framer-motion'
import { GradientOrb, FlowGrid } from './GradientOrb'
import { VideoHeroBackground } from './VideoHeroBackground'
import { PAGE_HERO_VIDEO, PAGE_HERO_VIDEO_VARIANT } from '../../config/media'

interface PageHeroProps {
  badge?: string
  title: string
  titleAccent?: string
  description: string
  /** Pass `false` to use the static gradient background instead of video */
  videoSrc?: string | false
  videoVariant?: 'light' | 'dark'
}

export function PageHero({
  badge,
  title,
  titleAccent,
  description,
  videoSrc = PAGE_HERO_VIDEO,
  videoVariant = PAGE_HERO_VIDEO_VARIANT,
}: PageHeroProps) {
  const resolvedVideoSrc = videoSrc === false ? undefined : videoSrc

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden border-b border-border-subtle">
      {resolvedVideoSrc ? (
        <VideoHeroBackground src={resolvedVideoSrc} variant={videoVariant} />
      ) : (
        <>
          <FlowGrid />
          <GradientOrb className="top-0 right-0" color="veridian" size="md" />
          <GradientOrb className="bottom-0 left-0" color="purple" size="sm" />
        </>
      )}
      {resolvedVideoSrc && (
        <>
          <GradientOrb className="top-0 right-0 opacity-40" color="veridian" size="md" />
          <GradientOrb className="bottom-0 left-0 opacity-30" color="purple" size="sm" />
        </>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
