import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FlowGrid } from './GradientOrb'
import { HERO_VIDEOS } from '../../config/media'

const VIDEO_SRC = HERO_VIDEOS.rotatingEarth

export function RotatingWorldMapBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const play = () => {
      video.play().catch(() => {
        /* autoplay may be blocked until user interaction */
      })
    }

    video.addEventListener('canplay', play)
    play()

    return () => video.removeEventListener('canplay', play)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#060a10]" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-[#060a10] via-[#0a1219] to-[#0a0f14]" />

      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoReady ? 'opacity-50' : 'opacity-0'
        }`}
        style={{
          filter: 'saturate(0.85) contrast(1.15) brightness(0.75) hue-rotate(145deg)',
        }}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={() => setVideoReady(true)}
        poster=""
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-veridian/20 blur-[140px]"
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-purple/12 blur-[120px]"
        animate={{ opacity: [0.12, 0.28, 0.12], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <FlowGrid />

      {/* Teal tint overlay — matches Kore Veridian wireframe aesthetic */}
      <div
        className="absolute inset-0 mix-blend-color"
        style={{ backgroundColor: 'rgba(20, 184, 150, 0.18)' }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 via-bg-primary/40 to-bg-primary/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/60 via-transparent to-bg-primary/60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, transparent 0%, rgba(6, 10, 16, 0.85) 100%)',
        }}
      />

      <div className="world-map-scanline absolute inset-0 pointer-events-none opacity-[0.04]" />
    </div>
  )
}
