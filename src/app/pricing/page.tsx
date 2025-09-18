"use client";

import { useMemo, useState } from "react";

const tiers = [
  {
    name: "Base",
    priceMonthly: 25000,
    priceYearly: 25000 * 12 * 0.9,
    features: ["Учёт и отчётность", "Зарплата до 10 сотрудников", "Поддержка в чате"],
  },
  {
    name: "Pro",
    priceMonthly: 55000,
    priceYearly: 55000 * 12 * 0.9,
    features: ["Всё из Base", "Аудит квартальной отчётности", "Консалтинг 4 ч/мес"],
  },
  {
    name: "Enterprise",
    priceMonthly: null,
    priceYearly: null,
    features: ["Индивидуальные KPI", "Выделенная команда", "SLA 24/7"],
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"Месяц" | "Год">("Месяц");
  const label = billing === "Месяц" ? "/мес" : "/год";
  const prices = useMemo(
    () =>
      tiers.map((t) => {
        if (t.priceMonthly === null) return "по запросу";
        const value = billing === "Месяц" ? t.priceMonthly : t.priceYearly;
        return new Intl.NumberFormat("ru-RU").format(Math.round(value as number)) + ` ₽${label}`;
      }),
    [billing]
  );
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Тарифы</h1>
      <div className="mt-6 inline-flex items-center gap-2 border border-white/15 rounded-full p-1">
        <button onClick={() => setBilling("Месяц")} className={`px-4 py-1 rounded-full text-sm ${billing === "Месяц" ? "bg-white text-black" : "text-white/80"}`}>Месяц</button>
        <button onClick={() => setBilling("Год")} className={`px-4 py-1 rounded-full text-sm ${billing === "Год" ? "bg-white text-black" : "text-white/80"}`}>Год −10%</button>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((t, i) => (
          <div key={t.name} className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
            <div className="text-lg font-medium">{t.name}</div>
            <div className="mt-2 text-amber-300 font-semibold">{prices[i]}</div>
            <ul className="mt-3 space-y-2 text-white/70 list-disc pl-5">
              {t.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a href="/contact" className="mt-6 inline-flex rounded-full bg-white text-black px-5 py-2 font-medium hover:bg-white/90 transition-colors">Запросить предложение</a>
          </div>
        ))}
      </div>
    </main>
  );
}


