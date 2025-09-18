"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [contactValue, setContactValue] = useState("");
  const validateContact = (value: string) => {
    const emailRegex = /^(?:[a-zA-Z0-9_'^&+%!-]+(?:\.[a-zA-Z0-9_'^&+%!-]+)*)@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    const phoneDigits = value.replace(/\D/g, "");
    const isPhone = /^(?:7|8)?\d{10}$/.test(phoneDigits) || /^\+\d{10,15}$/.test(value);
    return emailRegex.test(value) || isPhone;
  };
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Контакты</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <div className="text-white/80">Телефон: <a href="tel:+79317092518" className="text-white">+7 931 709-25-18</a></div>
          <div className="text-white/80">E‑mail: <a href="mailto:info@aurumadvisory.ru" className="text-white/90">info@aurumadvisory.ru</a></div>
          <div className="text-white/60">ИП Шаренко Екатерина Юрьевна • ОГРНИП 240402702297</div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const input = (e.currentTarget.querySelector("[data-contact]") as HTMLInputElement) || null;
            if (input && !validateContact(input.value.trim())) {
              input.setCustomValidity("Укажите телефон или e‑mail в корректном формате");
              input.reportValidity();
              return;
            }
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 2500);
          }}
          className="relative rounded-2xl border border-white/10 p-6 space-y-4 bg-white/[0.02] overflow-hidden"
        >
          <input className="w-full rounded-md bg-transparent border border-white/15 px-3 py-2 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Ваше имя" required />
          <input
            data-contact
            className="w-full rounded-md bg-transparent border border-white/15 px-3 py-2 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            placeholder="Телефон или e-mail"
            value={contactValue}
            onChange={(e) => {
              const v = e.target.value.trim();
              setContactValue(e.target.value);
              if (!validateContact(v)) {
                e.currentTarget.setCustomValidity("Укажите телефон или e‑mail в корректном формате");
              } else {
                e.currentTarget.setCustomValidity("");
              }
            }}
            onBlur={(e) => {
              const v = e.currentTarget.value.trim();
              if (!validateContact(v)) {
                e.currentTarget.setCustomValidity("Укажите телефон или e‑mail в корректном формате");
              } else {
                e.currentTarget.setCustomValidity("");
              }
            }}
            required
          />
          <textarea className="w-full min-h-[120px] rounded-md bg-transparent border border-white/15 px-3 py-2 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Опишите задачу" required />
          <button className="rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition-colors w-full sm:w-auto">Отправить</button>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-emerald-500/10 backdrop-blur-sm flex items-center justify-center"
              >
                <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="text-emerald-300 font-medium">
                  Заявка отправлена! Свяжемся с вами в ближайшее время.
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </main>
  );
}


