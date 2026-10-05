
"use client";
import { useEffect } from "react";

export default function GlowEffect() {
  useEffect(() => {
    const isHoverable = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isHoverable) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(".glow-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty("--mouse-x", x + "px");
        (card as HTMLElement).style.setProperty("--mouse-y", y + "px");
      });
    };

    let ticking = false;
    const scrollListener = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleMouseMove(e);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", scrollListener);
    return () => window.removeEventListener("mousemove", scrollListener);
  }, []);

  return null;
}
