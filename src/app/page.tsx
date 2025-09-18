import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Contacts from "@/components/sections/Contacts";
import Marquee from "@/components/Marquee";
import TiltCard from "@/components/TiltCard";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Персональный куратор 24/7",
            desc: "Связь в защищённых каналах, SLA по реакции и качеству.",
          },
          {
            title: "Конфиденциальность класса A",
            desc: "NDA, разграничение доступа, аудит логов и резервирование.",
          },
          {
            title: "Pro‑аналитика и отчётность",
            desc: "Дашборды, управленческий P&L/CF и оповещения по KPI.",
          },
        ].map((f) => (
          <TiltCard key={f.title}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-lg font-medium">{f.title}</div>
              <div className="mt-2 text-white/70">{f.desc}</div>
            </div>
          </TiltCard>
        ))}
      </div>
      <Services />
      <Benefits />
      <Testimonials />
      <CTA />
      <Contacts />
    </main>
  );
}
