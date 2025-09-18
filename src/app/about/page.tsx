"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <motion.h1 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-semibold tracking-tight">О компании</motion.h1>
      <div className="mt-6 prose prose-invert prose-amber max-w-none">
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
          Aurum Advisory — бутиковая команда в сфере бухгалтерского учета, аудита и налогового консалтинга. Мы работаем в формате
          закрытого сервиса с повышенными требованиями к конфиденциальности, скорости реакции и качеству предоставляемых решений.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          Наш подход строится на глубоком погружении в бизнес-процессы клиентов и персональной ответственности старших экспертов
          за каждый проект. Мы не просто закрываем задачи — мы создаём управленческую прозрачность и снижаем финансовые риски.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
          Основные компетенции включают ведение учёта, построение отчётности по РСБУ и управленческих стандартов, подготовку к аудиту,
          аудит по 44‑ФЗ/223‑ФЗ, налоговое планирование и сопровождение проверок.
        </motion.p>
      </div>
    </main>
  );
}


