"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
      easing: (t: number) => 1 - Math.pow(1 - t, 2),
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return children;
}



