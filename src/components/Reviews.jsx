import React from 'react'
import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Р. Марков',
    quote: 'Напнато, тивко и разорно. Атмосфера што не се заборава.'
  },
  {
    name: 'А. Стојановска',
    quote: 'Совршена тишина над морето, а бури внатре. Премиум трилер.'
  },
  {
    name: 'Литера Портал',
    quote: 'Кинематографски стил и раскошни емоции. Неиспуштливо.'
  },
]

export default function Reviews() {
  return (
    <section className="relative py-24 md:py-28 bg-[#0f1524]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F0EAE6]">Рецензии</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, idx) => (
            <motion.blockquote
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative rounded-xl p-6 md:p-7 bg-gradient-to-b from-[#182037] to-[#121a2b] border border-white/10"
            >
              <p className="text-[#F0EAE6]">“{r.quote}”</p>
              <footer className="mt-4 text-sm text-[#b7b1ac]">— {r.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
