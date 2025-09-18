"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_-10%,rgba(250,204,21,0.25),transparent),radial-gradient(800px_400px_at_80%_10%,rgba(234,179,8,0.2),transparent)]" />

      <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36 relative">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-semibold tracking-tight"
        >
          Премиальная бухгалтерия и аудит для бизнеса
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-lg text-white/70 max-w-2xl"
        >
          Идеальное сочетание точности, скорости и конфиденциальности. Мы берём на себя учет, аудит и налоги, чтобы вы концентрировались на росте.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex items-center gap-4"
        >
          <a href="#contacts" className="rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition-colors">
            Бесплатная консультация
          </a>
          <a href="#services" className="rounded-full border border-white/20 px-6 py-3 font-medium text-white/90 hover:bg-white/10 transition-colors">
            Услуги
          </a>
        </motion.div>
      </div>
    </section>
  );
}


