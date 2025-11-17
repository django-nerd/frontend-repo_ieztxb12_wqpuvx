import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 md:py-28 bg-[#0f1524]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-[#F0EAE6]"
        >
          Подготвени за ноќ без враќање?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-[#cfc9c4]"
        >
          Нарачајте го вашето премиум издание сега.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#" className="px-6 py-3 rounded-md font-semibold text-white shadow-lg" style={{ background: '#B06D6C' }}>Нарачај сега</a>
          <div className="px-6 py-3 rounded-md font-semibold" style={{ color: '#9E9182' }}>Погледни извадок</div>
        </motion.div>
      </div>
    </section>
  )
}
