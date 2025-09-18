import { Phone, BadgeCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 sm:mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 text-sm">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-white/80">
            <BadgeCheck size={16} className="text-emerald-400" />
            Aurum Advisory — бухгалтерия, аудит, налоговый консалтинг
          </div>
          <p className="text-white/60 leading-relaxed">
            Экспертная поддержка бизнеса: ведение учета, аудит, налоговая стратегия и сопровождение проверок.
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-white/70">Навигация</div>
          <div className="grid grid-cols-2 gap-2">
            <a href="/about" className="text-white/80 hover:text-white">О компании</a>
            <a href="/services" className="text-white/80 hover:text-white">Услуги</a>
            <a href="/cases" className="text-white/80 hover:text-white">Кейсы</a>
            <a href="/pricing" className="text-white/80 hover:text-white">Тарифы</a>
            <a href="/blog" className="text-white/80 hover:text-white">Блог</a>
            <a href="/contact" className="text-white/80 hover:text-white">Контакты</a>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-white/70">Контакты</div>
          <a href="tel:+79317092518" className="inline-flex items-center gap-2 text-white">
            <Phone size={16} /> +7 931 709-25-18
          </a>
        </div>

        <div className="space-y-2">
          <div className="text-white/70">Юридическая информация</div>
          <div className="text-white/80">ИП Шаренко Екатерина Юрьевна</div>
          <div className="text-white/60">ОГРНИП: 240402702297</div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-white/50 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Aurum Advisory. Все права защищены.
          </div>
          <div>
            ИП Шаренко Екатерина Юрьевна • ОГРНИП 240402702297 • Тел.: +7 931 709-25-18
          </div>
        </div>
      </div>
    </footer>
  );
}


