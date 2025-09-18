"use client";

type Post = { title: string; excerpt: string; content: string };

const posts: Post[] = [
  {
    title: "Как подготовиться к аудиту: чек‑лист",
    excerpt: "5 шагов для снижения рисков и ускорения процесса аудита.",
    content:
      "1) Актуализируйте учетную политику. 2) Проведите инвентаризацию МПЗ и ОС. 3) Сверьте расчёты с контрагентами и бюджетом. 4) Подготовьте регистры и первичные документы. 5) Назначьте ответственных и соберите пояснения по ключевым участкам.",
  },
  {
    title: "ЭДО для бизнеса: быстрое внедрение",
    excerpt: "Что учесть при переходе и как не потерять скорость процессов.",
    content:
      "Выберите провайдера ЭДО, опишите маршруты согласования, подготовьте форматы первичных документов, обучите сотрудников и настройте контроль полноты. Пилот с ключевыми контрагентами — за 2 недели.",
  },
  {
    title: "Налоговое планирование‑2025",
    excerpt: "Ключевые изменения и практические рекомендации.",
    content:
      "Оцените влияние изменений НК на вашу модель, пересмотрите бенчмарки по ТЦО, актуализируйте договорную базу и мониторинг льгот. Заложите сценарный анализ в бюджет‑2025.",
  },
];

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Блог</h1>
      <div className="mt-10 columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {posts.map((p, idx) => {
          const isOpen = openIndex === idx;
          return (
            <article key={p.title} className="mb-6 break-inside-avoid rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
              <h2 className="text-lg font-medium">{p.title}</h2>
              <p className="mt-2 text-white/70">{p.excerpt}</p>
              <button
                className="mt-4 inline-flex text-amber-300"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                {isOpen ? "Скрыть" : "Читать →"}
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-white/80"
                  >
                    {p.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </main>
  );
}


