import { motion } from 'framer-motion'

interface GradientOrbProps {
  className?: string
  color?: 'veridian' | 'purple' | 'blue'
  size?: 'sm' | 'md' | 'lg'
}

const colorMap = {
  veridian: 'bg-veridian/30',
  purple: 'bg-accent-purple/25',
  blue: 'bg-accent-blue/25',
}

const sizeMap = {
  sm: 'w-64 h-64',
  md: 'w-96 h-96',
  lg: 'w-[600px] h-[600px]',
}

export function GradientOrb({ className = '', color = 'veridian', size = 'md' }: GradientOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[120px] pointer-events-none ${colorMap[color]} ${sizeMap[size]} ${className}`}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export function FlowGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}

export function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-veridian/40"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{ y: [0, -100, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
