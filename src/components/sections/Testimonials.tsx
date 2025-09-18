const testimonials = [
  {
    name: "Алексей, производственная компания",
    quote:
      "В течение 10 дней провели аудит, нашли неточности и снизили налоговую нагрузку. Сотрудничество продолжаем второй год.",
  },
  {
    name: "Мария, e-commerce",
    quote:
      "Полный аутсорсинг учета: отчётность всегда вовремя, с проверками спокойны. Отдельное спасибо за консультации по 54-ФЗ.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Отзывы</h2>
      <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {testimonials.map((t) => (
          <figure key={t.name} className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
            <blockquote className="text-white/80">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-white/60">{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}


