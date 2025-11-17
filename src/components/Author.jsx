import React from 'react'
import { motion } from 'framer-motion'

export default function Author() {
  return (
    <section className="relative py-24 md:py-28 bg-[#0e1422]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(176,109,108,0.18), rgba(39,45,61,0.2))' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#F0EAE6]/80">Автор</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="md:col-span-7"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0EAE6]">За авторот</h2>
          <p className="mt-6 text-[#cfc9c4] leading-relaxed">Пишувач кој ја истражува тишината меѓу зборовите и сенките меѓу луѓето. Неговите трилери се минималистички, кинематографски и длабоко емотивни.</p>
        </motion.div>
      </div>
    </section>
  )
}
