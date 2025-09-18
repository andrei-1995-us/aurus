"use client";

import { useEffect, useMemo, useRef } from "react";

export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null);
  const words = useMemo(
    () => [
      "Конфиденциальность",
      "Точность",
      "Скорость",
      "Экспертиза",
      "Premium",
      "Надёжность",
      "Контроль",
      "Аудит",
      "Отчётность",
      "Стратегия",
    ],
    []
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const content = el.querySelector("[data-marquee-content]") as HTMLDivElement;
    if (!content) return;

    let offset = 0;
    let rafId = 0;
    const speed = window.innerWidth < 640 ? 0.35 : 0.5;

    const step = () => {
      offset -= speed;
      if (Math.abs(offset) >= content.scrollWidth / 2) offset = 0;
      content.style.transform = `translateX(${offset}px)`;
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const rows = useMemo(() => {
    // создаём 3 ряда, сдвигая порядок, чтобы рядом не было одинаковых слов
    const makeRow = (shift: number) => (
      <div key={shift} className="flex gap-12 px-6">
        {words.map((_, idx) => {
          const w = words[(idx + shift) % words.length];
          return (
            <span
              key={`${shift}-${w}-${idx}`}
              className="font-semibold text-white/70 uppercase tracking-[0.2em]"
              style={{ WebkitTextStroke: "0.5px rgba(255,255,255,0.25)" }}
            >
              {w}
            </span>
          );
        })}
      </div>
    );
    return [makeRow(0), makeRow(3), makeRow(6)];
  }, [words]);

  return (
    <div ref={ref} className="relative overflow-hidden border-y border-white/10 py-4 sm:py-6">
      <div data-marquee-content className="flex w-max will-change-transform whitespace-nowrap">
        {rows}
      </div>
    </div>
  );
}


