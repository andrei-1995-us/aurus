const benefits = [
  {
    title: "Конфиденциальность",
    desc: "Строгие политики и безопасность данных уровня enterprise.",
  },
  {
    title: "Скорость и точность",
    desc: "Автоматизация процессов и многоуровневый контроль качества.",
  },
  {
    title: "Экспертиза",
    desc: "Реальные кейсы аудита и налоговой оптимизации в разных отраслях.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Почему мы</h2>
      <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {benefits.map((b) => (
          <div key={b.title} className="rounded-2xl border border-white/10 p-6">
            <div className="text-lg font-medium">{b.title}</div>
            <div className="mt-2 text-white/70">{b.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


