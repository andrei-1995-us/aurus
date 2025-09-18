import { ShieldCheck, FileSpreadsheet, Scale } from "lucide-react";

const services = [
  {
    icon: FileSpreadsheet,
    title: "Бухгалтерский учет",
    desc: "Полный аутсорсинг: первичка, отчётность, зарплата, ЭДО.",
  },
  {
    icon: ShieldCheck,
    title: "Аудит",
    desc: "Инициативный и обязательный аудит: прозрачность и надёжность цифр.",
  },
  {
    icon: Scale,
    title: "Налоговый консалтинг",
    desc: "Оптимизация налогообложения, сопровождение проверок, стратегия.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Услуги</h2>
      <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors">
            <s.icon className="text-amber-300" />
            <div className="mt-4 text-lg font-medium">{s.title}</div>
            <div className="mt-2 text-white/70">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


