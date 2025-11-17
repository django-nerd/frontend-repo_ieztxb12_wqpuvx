import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-28 bg-[#0f1524]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0EAE6]">За книгата</h2>
          <p className="mt-6 text-[#cfc9c4] leading-relaxed">
            Во град потонат во тишина, една исчезната ноќ ја менува судбината на сите. „Ноќ без враќање“ е психолошки трилер што истражува вина, љубов и сенките на вистината. На секоја страница — избор без повраток.
          </p>
          <div className="mt-6 text-sm text-[#b7b1ac]">
            Премиум искуство со емоционална визуелизација и длабока атмосфера.
          </div>
        </motion.div>

        {/* Soft illustrations */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative h-[320px] md:h-[360px]"
        >
          <div className="absolute inset-0 rounded-xl"
               style={{ background: 'radial-gradient(600px 260px at 20% 30%, rgba(176,109,108,0.22), transparent 60%), radial-gradient(600px 260px at 80% 60%, rgba(158,145,130,0.18), transparent 60%)' }} />
          <div className="absolute inset-[10%] rounded-xl border border-white/10" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))', boxShadow: '0 10px 40px rgba(0,0,0,0.35), inset 0 0 80px rgba(255,200,180,0.06)' }} />
          <div className="absolute left-[12%] top-[18%] w-20 h-20 rounded-full bg-[#B06D6C]/30 blur-xl" />
          <div className="absolute right-[12%] bottom-[16%] w-24 h-24 rounded-full bg-[#9E9182]/25 blur-xl" />
        </motion.div>
      </div>
    </section>
  )
}
