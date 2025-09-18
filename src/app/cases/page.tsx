"use client";

type Case = { title: string; result: string; tag: string };

const cases: Case[] = [
  {
    title: "Производство: восстановление учета и снижение налоговой нагрузки",
    result: "Срок — 6 недель. Снижение совокупной нагрузки на 14%, устранение ошибок в МПЗ.",
    tag: "Производство",
  },
  {
    title: "Производство: оптимизация складского учёта и себестоимости",
    result: "Срок — 5 недель. Сокращение незавершёнки на 22%, повышение точности расчёта себестоимости.",
    tag: "Производство",
  },
  {
    title: "Производство: управленческая отчётность и бюджетирование",
    result: "Срок — 7 недель. Внедрены P&L/CF по цехам, цикл закрытия месяца сокращён на 4 дня.",
    tag: "Производство",
  },
  {
    title: "E‑commerce: переход на ЭДО и ускорение закрытия месяца",
    result: "Срок — 4 недели. Закрытие месяца с 10 дней до 3 дней, контроль остатков.",
    tag: "E‑commerce",
  },
  {
    title: "E‑commerce: автоматизация возвратов и сверок маркетплейсов",
    result: "Срок — 3 недели. Снижение ручных операций на 70%, прозрачные акты и взаиморасчёты.",
    tag: "E‑commerce",
  },
  {
    title: "E‑commerce: НДС по агентским схемам и 54‑ФЗ",
    result: "Срок — 2 недели. Корректная настройка чеков, снижены риски претензий от ФНС.",
    tag: "E‑commerce",
  },
  {
    title: "Dev‑аутсорс: аудит договоров и TЦО",
    result: "Срок — 3 недели. Снижение рисков до уровня низких по карте рисков.",
    tag: "IT",
  },
  {
    title: "IT: реорганизация договорной базы и распределение выручки",
    result: "Срок — 4 недели. Прозрачная модель выручки и расходов, корректное признание выручки (IFRS 15 концепция).",
    tag: "IT",
  },
  {
    title: "IT: экспорт услуг и НДС 0%",
    result: "Срок — 3 недели. Подтверждены нулевые ставки НДС, подготовлены комплект документов.",
    tag: "IT",
  },
];

import { useMemo, useState } from "react";

export default function CasesPage() {
  const [filter, setFilter] = useState<string>("Все");
  const tags = ["Все", ...Array.from(new Set(cases.map((c) => c.tag)))];
  const filtered = useMemo(
    () => (filter === "Все" ? cases : cases.filter((c) => c.tag === filter)),
    [filter]
  );
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Кейсы</h1>
      <div className="mt-6 -mx-6 px-6 flex gap-2 overflow-x-auto whitespace-nowrap">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`rounded-full px-4 py-2 text-sm border ${
              filter === t ? "bg-white text-black border-white" : "border-white/20 text-white/80 hover:bg-white/10"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {filtered.map((c) => (
          <div key={c.title} className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
            <div className="text-lg font-medium">{c.title}</div>
            <div className="mt-2 text-white/70">{c.result}</div>
            <div className="mt-3 text-white/50 text-xs">{c.tag}</div>
          </div>
        ))}
      </div>
    </main>
  );
}


