import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    title: 'Вина и простување',
    text: 'Тежината на неизговореното и моќта на прошката.'
  },
  {
    title: 'Тишина и вистина',
    text: 'Тивките места каде што вистината се слуша најгласно.'
  },
  {
    title: 'Избори без повраток',
    text: 'Одлуки што не можат да се вратат назад.'
  }
]

export default function Themes() {
  return (
    <section className="relative py-24 md:py-28 bg-[#0e1422]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F0EAE6]">Емоционални теми</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative rounded-xl p-6 md:p-7 bg-gradient-to-b from-[#1a2134] to-[#121a2b] border border-white/10 overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#B06D6C]/20 blur-3xl" />
              <h3 className="text-xl font-semibold text-[#F0EAE6]">{it.title}</h3>
              <p className="mt-3 text-[#cfc9c4]">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
