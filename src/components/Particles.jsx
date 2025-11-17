import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

// Floating dust particles for cinematic atmosphere
export default function Particles({ count = 60, className = '' }) {
  const particles = useMemo(() => (
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 6,
      duration: 6 + Math.random() * 8,
      opacity: 0.2 + Math.random() * 0.4,
    }))
  ), [count])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {particles.map(p => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.5)]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            filter: 'blur(0.5px)'
          }}
          animate={{
            y: [0, -10, 0],
            x: [0, 5, -3, 0],
            opacity: [p.opacity * 0.7, p.opacity, p.opacity * 0.7],
          }}
          transition={{
            repeat: Infinity,
            ease: 'easeInOut',
            duration: p.duration,
            delay: p.delay,
          }}
        />
      ))}
    </div>
  )
}
