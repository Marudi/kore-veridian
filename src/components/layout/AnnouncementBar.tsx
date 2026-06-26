import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function AnnouncementBar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-50 bg-gradient-to-r from-accent-purple/20 via-veridian/15 to-accent-blue/20 border-b border-border-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/platform"
          className="flex items-center justify-center gap-2 py-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors group"
        >
          <span className="hidden sm:inline">
            Now offering AI-powered cloud operations and enterprise voice platform services.
          </span>
          <span className="sm:hidden">AI cloud & voice platform now available.</span>
          <span className="text-veridian font-medium group-hover:underline underline-offset-4">
            Explore the platform
          </span>
          <ArrowRight className="w-4 h-4 text-veridian group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}
