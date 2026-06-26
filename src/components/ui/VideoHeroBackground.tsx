import { useEffect, useRef, useState } from 'react'
import { FlowGrid } from './GradientOrb'

interface VideoHeroBackgroundProps {
  src: string
  variant?: 'light' | 'dark'
}

export function VideoHeroBackground({ src, variant = 'light' }: VideoHeroBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const play = () => video.play().catch(() => {})
    video.addEventListener('canplay', play)
    play()
    return () => video.removeEventListener('canplay', play)
  }, [])

  const isLight = variant === 'light'

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          ready ? (isLight ? 'opacity-[0.22]' : 'opacity-50') : 'opacity-0'
        }`}
        style={{
          filter: isLight
            ? 'saturate(0.6) brightness(1.4) contrast(0.9) hue-rotate(160deg)'
            : 'saturate(0.85) contrast(1.15) brightness(0.75) hue-rotate(145deg)',
          mixBlendMode: isLight ? 'screen' : 'normal',
        }}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={() => setReady(true)}
      >
        <source src={src} type="video/mp4" />
      </video>

      {isLight && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(20, 184, 150, 0.06)' }}
        />
      )}

      <FlowGrid />

      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/92 via-bg-primary/78 to-bg-primary/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/70 via-transparent to-bg-primary/70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 45%, rgba(6, 10, 16, 0.55) 0%, rgba(6, 10, 16, 0.92) 100%)',
        }}
      />
    </div>
  )
}
