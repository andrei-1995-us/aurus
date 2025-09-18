"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Phone, Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/about", label: "О компании" },
  { href: "/services", label: "Услуги" },
  { href: "/cases", label: "Кейсы" },
  { href: "/pricing", label: "Тарифы" },
  { href: "/blog", label: "Блог" },
  { href: "/contact", label: "Контакты" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-700 shadow-[0_0_40px_-10px_rgba(234,179,8,0.8)]" />
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Aurum Advisory
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4" />

        <button
          aria-label="Открыть меню"
          className="md:hidden inline-flex p-2 rounded-md border border-white/15"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu size={18} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-background/80 backdrop-blur">
          <div className="px-4 sm:px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/90"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

          </div>
        </div>
      )}
    </header>
  );
}

export default Header;


