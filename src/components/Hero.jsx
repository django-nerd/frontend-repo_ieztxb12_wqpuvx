import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Particles from './Particles'

// Colors
const COLORS = {
  rose: '#B06D6C',
  sand: '#9E9182',
  navy: '#0f1524',
  deep: '#272D3D',
}

export default function Hero() {
  const { scrollY } = useScroll()
  const skyY = useTransform(scrollY, [0, 600], [0, -120])
  const mountainsY = useTransform(scrollY, [0, 600], [0, -60])
  const seaY = useTransform(scrollY, [0, 600], [0, -20])

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" style={{background:`linear-gradient(180deg, rgba(176,109,108,0.35) 0%, rgba(158,145,130,0.22) 18%, rgba(39,45,61,0.65) 70%, ${COLORS.navy} 100%)`}}>
      {/* Atmospheric glow */}
      <div className="absolute inset-0" style={{
        background: `radial-gradient(1000px 500px at 30% 25%, rgba(255,180,160,0.35), transparent 60%),
                     radial-gradient(900px 500px at 70% 30%, rgba(255,150,190,0.25), transparent 60%)`
      }} />

      {/* Parallax sky */}
      <motion.div className="absolute inset-0" style={{ y: skyY }}>
        <div className="absolute inset-0" style={{
          background: `linear-gradient(180deg, #F4B6A6 0%, #F0A2B6 20%, #E58FA8 32%, #d27d8e 45%, #9E9182 60%, ${COLORS.deep} 80%, ${COLORS.navy} 100%)`
        }} />
      </motion.div>

      {/* Parallax mountains (silhouettes) */}
      <motion.svg style={{ y: mountainsY }} className="absolute bottom-[28vh] left-0 right-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="mountainGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#2c3347" />
            <stop offset="100%" stopColor="#171d2b" />
          </linearGradient>
        </defs>
        <path d="M0,200 L120,160 L240,200 L360,140 L480,180 L600,120 L720,180 L840,150 L960,200 L1080,160 L1200,200 L1320,170 L1440,200 L1440,320 L0,320 Z" fill="url(#mountainGrad)" opacity="0.95" />
        <path d="M0,220 L120,190 L240,220 L360,170 L480,210 L600,160 L720,210 L840,180 L960,220 L1080,190 L1200,220 L1320,200 L1440,220 L1440,320 L0,320 Z" fill="#121828" opacity="0.9" />
      </motion.svg>

      {/* Perfectly flat calm sea */}
      <motion.div style={{ y: seaY }} className="absolute bottom-0 left-0 right-0 h-[32vh]" aria-hidden>
        <div className="absolute inset-0" style={{
          background: `linear-gradient(180deg, rgba(25,32,50,0.9) 0%, rgba(15,21,36,0.98) 60%, ${COLORS.navy} 100%)`
        }} />
        {/* Thin horizon line to emphasize flatness */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />
      </motion.div>

      {/* Dust particles */}
      <Particles count={90} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-28 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight"
            style={{ color: '#F0EAE6' }}
          >
            Ноќ без враќање
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl max-w-xl"
            style={{ color: 'rgba(240,234,230,0.8)' }}
          >
            Трилер што те носи на рабовите на тишината — таму каде што морето е мирно, но срцето не е. Откриј тајни што не се враќаат назад.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 flex gap-4"
          >
            <a href="#about" className="px-5 py-3 rounded-md font-semibold text-white shadow-lg shadow-[rgba(176,109,108,0.25)]" style={{ background: COLORS.rose }}>Погледни повеќе</a>
            <a href="#cta" className="px-5 py-3 rounded-md font-semibold" style={{ color: COLORS.sand, borderColor: COLORS.sand, borderWidth: 1 }}>Нарачај сега</a>
          </motion.div>
        </div>

        {/* Book cover with soft 3D hover */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          whileHover={{ rotateY: 6, rotateX: -2, y: -6 }}
          className="relative h-[460px] md:h-[520px] w-full flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="relative w-[280px] md:w-[320px] h-[420px] md:h-[480px] rounded-lg overflow-hidden shadow-2xl"
               style={{ background: `linear-gradient(140deg, ${COLORS.deep}, #0c1221)` }}>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 30% 20%, rgba(255,200,190,0.12), transparent 40%)' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6">
                <h3 className="text-3xl font-bold" style={{ color: '#F0EAE6' }}>Ноќ без враќање</h3>
                <p className="mt-3 text-sm" style={{ color: 'rgba(240,234,230,0.75)' }}>Премиум издание</p>
              </div>
            </div>
            {/* Edge highlight */}
            <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)' }} />
          </div>
          {/* Soft ground shadow */}
          <div className="absolute -bottom-6 w-[70%] h-10 rounded-full blur-2xl opacity-60" style={{ background: 'radial-gradient(closest-side, rgba(0,0,0,0.6), transparent 70%)' }} />
        </motion.div>
      </div>
    </section>
  )
}
