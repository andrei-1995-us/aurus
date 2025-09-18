"use client";

const services = [
  {
    title: "Комплексный бухгалтерский аутсорсинг",
    bullets: [
      "Первичная документация, банк-клиент, касса, зарплата",
      "Отчётность и взаимодействие с ФНС/фондами",
      "Внедрение ЭДО, согласование регламентов",
    ],
  },
  {
    title: "Аудит и подготовка к аудиту",
    bullets: [
      "Инициативный/обязательный аудит",
      "Проверка разделов отчётности и учётной политики",
      "Анализ рисков и рекомендации",
    ],
  },
  {
    title: "Налоговый консалтинг",
    bullets: [
      "Оптимизация налогообложения",
      "Трансфертное ценообразование",
      "Сопровождение камеральных/выездных проверок",
    ],
  },
];

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Услуги</h1>
      <div className="mt-10 space-y-4">
        {services.map((s, idx) => {
          const isOpen = open === idx;
          return (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.03]">
              <button
                onClick={() => setOpen(isOpen ? null : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between"
              >
                <span className="text-lg font-medium">{s.title}</span>
                <span className="text-white/50">{isOpen ? "–" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <ul className="space-y-2 text-white/70 list-disc pl-5">
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </main>
  );
}


