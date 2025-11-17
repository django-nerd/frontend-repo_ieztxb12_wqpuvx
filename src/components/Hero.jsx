import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Particles from './Particles'

// Palette
const COLORS = {
  rose: '#B06D6C',
  sand: '#9E9182',
  deep: '#272D3D',
  navy: '#0f1524',
}

export default function Hero() {
  const { scrollY } = useScroll()

  // Parallax mapping (sky slowest → foreground fastest)
  const skyY = useTransform(scrollY, [0, 800], [0, -60])
  const glowY = useTransform(scrollY, [0, 800], [0, -90])
  const mountainsY = useTransform(scrollY, [0, 800], [0, -30])
  const waterY = useTransform(scrollY, [0, 800], [0, -10])
  const moonY = useTransform(scrollY, [0, 800], [0, -120])
  const womanY = useTransform(scrollY, [0, 800], [0, -160])

  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden" aria-label="Cinematic hero">
      {/* BACKGROUND SKY (slowest) */}
      <motion.div className="absolute inset-0" style={{ y: skyY }} aria-hidden>
        {/* Realistic dusk gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,186,150,0.95) 0%, rgba(247,160,182,0.92) 18%, rgba(208,125,142,0.85) 34%, rgba(158,145,130,0.58) 56%, rgba(39,45,61,0.78) 78%, #0f1524 100%)',
          }}
        />
      </motion.div>

      {/* SUNSET GLOW (soft radial bloom near horizon) */}
      <motion.div className="absolute inset-0" style={{ y: glowY }} aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(900px 420px at 58% 34%, rgba(255,178,150,0.45), transparent 60%), radial-gradient(700px 360px at 52% 36%, rgba(176,109,108,0.35), transparent 62%)',
            mixBlendMode: 'screen',
          }}
        />
      </motion.div>

      {/* CRESCENT MOON (gently floating) */}
      <motion.div
        className="absolute right-[12%] top-[10%] w-20 h-20 md:w-24 md:h-24"
        style={{ y: moonY }}
        aria-hidden
      >
        <motion.svg
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 0.9, y: [0, -4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          viewBox="0 0 100 100"
          className="w-full h-full"
        >
          <defs>
            <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F6EDE6" stopOpacity="1" />
              <stop offset="100%" stopColor="#F6EDE6" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Glow */}
          <circle cx="50" cy="50" r="40" fill="url(#moonGlow)" opacity="0.45" />
          {/* Crescent */}
          <path
            d="M60,50 A24,24 0 1 1 36,26 A18,24 0 1 0 60,50 Z"
            fill="#F5F2EA"
          />
        </motion.svg>
      </motion.div>

      {/* ULTRA-LOW MOUNTAINS ON HORIZON (very subtle) */}
      <motion.svg
        className="absolute left-0 right-0 w-full"
        style={{ y: mountainsY, bottom: '36vh' }}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,80 L120,74 L260,78 L380,70 L520,76 L660,72 L820,74 L980,70 L1140,76 L1280,72 L1440,78 L1440,120 L0,120 Z"
          fill="rgba(18,24,40,0.45)"
        />
      </motion.svg>

      {/* PERFECTLY FLAT WATER SURFACE + REFLECTION PLANE */}
      <motion.div className="absolute left-0 right-0" style={{ y: waterY, bottom: 0, height: '40vh' }} aria-hidden>
        {/* Water body with subtle vertical gradient and slight specular sheen */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(25,32,50,0.92) 0%, rgba(20,27,44,0.98) 55%, #0f1524 100%)',
          }}
        />
        {/* Thin horizon line to emphasize flatness */}
        <div className="absolute -top-px left-0 right-0 h-[1px] bg-white/35" />

        {/* Soft horizontal highlight on the water as if from sun/moon blend */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-2 w-[60%] h-8 md:h-10 opacity-30 blur-md"
          style={{
            background:
              'radial-gradient(60% 100% at 50% 50%, rgba(255,210,190,0.45), transparent 70%)',
          }}
        />
      </motion.div>

      {/* DUST PARTICLES (very subtle for realism) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <Particles count={50} />
      </div>

      {/* CONTENT GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-28 md:pt-32 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-2 items-end gap-10">
        {/* LEFT: Title and subtitle */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight"
            style={{ color: '#F0EAE6' }}
          >
            Ноќ без враќање
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 text-xl sm:text-2xl font-medium"
            style={{ color: 'rgba(240,234,230,0.82)' }}
          >
            Балканска трилер сензација
          </motion.p>
        </div>

        {/* RIGHT: Woman standing on reflective sea with realistic reflection */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.15 }}
          style={{ y: womanY }}
          className="relative h-[460px] md:h-[520px] w-full flex items-end justify-end"
          aria-label="Woman standing on water"
        >
          {/* Foreground subject (placeholder silhouette blended to feel photographic) */}
          <div className="relative w-[220px] sm:w-[260px] md:w-[300px] h-[420px] md:h-[480px]">
            {/* Subject figure */}
            <div
              className="absolute bottom-[40%] right-2 sm:right-4 md:right-6 w-[56%] aspect-[3/7]"
              style={{
                background:
                  `linear-gradient(180deg, ${COLORS.deep}, #0b1020)`,
                boxShadow: '0 30px 60px rgba(0,0,0,0.45)',
                clipPath: 'polygon(50% 0%, 58% 8%, 62% 16%, 64% 25%, 64% 80%, 60% 90%, 58% 100%, 42% 100%, 40% 90%, 36% 80%, 36% 25%, 38% 16%, 42% 8%)',
                borderRadius: 6,
                filter: 'saturate(0.9) contrast(1.05)',
              }}
            >
              {/* Rim light to simulate sunset edge lighting */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(255,180,150,0.0) 0%, rgba(255,190,170,0.35) 88%, rgba(255,210,190,0.6) 100%)',
                  mixBlendMode: 'screen',
                }}
              />
            </div>

            {/* Reflection of the subject on water */}
            <div
              className="absolute bottom-0 right-2 sm:right-4 md:right-6 w-[56%] aspect-[3/7] origin-top scale-y-[-1]"
              style={{
                background:
                  `linear-gradient(180deg, ${COLORS.deep}, #0b1020)`,
                clipPath: 'polygon(50% 0%, 58% 8%, 62% 16%, 64% 25%, 64% 80%, 60% 90%, 58% 100%, 42% 100%, 40% 90%, 36% 80%, 36% 25%, 38% 16%, 42% 8%)',
                opacity: 0.35,
                filter: 'blur(1px) saturate(0.85)'
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,210,190,0.35) 0%, rgba(255,180,150,0.15) 30%, rgba(255,180,150,0.0) 100%)',
                  mixBlendMode: 'screen',
                  maskImage:
                    'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.0) 100%)',
                  WebkitMaskImage:
                    'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.0) 100%)',
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
