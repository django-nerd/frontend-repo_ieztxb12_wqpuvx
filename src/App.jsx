import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Themes from './components/Themes'
import Reviews from './components/Reviews'
import Author from './components/Author'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f1c] text-white">
      <Hero />
      <About />
      <Themes />
      <Reviews />
      <Author />
      <CTA />
      <footer className="py-12 text-center text-sm text-white/50">© {new Date().getFullYear()} Ноќ без враќање</footer>
    </div>
  )
}

export default App
