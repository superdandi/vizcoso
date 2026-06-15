'use client';

import { useEffect } from 'react';

export default function ProximityGlow() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.card-glow');
    if (!cards.length) return;

    let rafId: number;

    function update() {
      const vh = window.innerHeight;
      const vpCenter = vh / 2;
      const maxDist = vh * 0.5;

      for (const card of cards) {
        if (card.dataset.glowHover) continue;

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - vpCenter);
        const t = Math.max(0.03, Math.min(1, 1 - dist / maxDist));

        card.style.boxShadow = `
          0 0 ${5 * t}px rgba(255, 0, 255, ${0.08 * t}),
          inset 0 0 ${5 * t}px rgba(255, 0, 255, ${0.02 * t}),
          0 ${6 * t}px ${25 * t}px rgba(255, 0, 255, ${0.12 * t}),
          0 0 ${15 * t}px rgba(255, 0, 255, ${0.05 * t})
        `;
      }

      rafId = requestAnimationFrame(update);
    }

    function onEnter(this: HTMLElement) {
      this.dataset.glowHover = 'true';
      this.style.boxShadow = `
        0 0 5px rgba(255, 0, 255, 0.08),
        inset 0 0 5px rgba(255, 0, 255, 0.02),
        0 6px 25px rgba(255, 0, 255, 0.12),
        0 0 15px rgba(255, 0, 255, 0.05)
      `;
    }

    function onLeave(this: HTMLElement) {
      delete this.dataset.glowHover;
    }

    cards.forEach((c) => {
      c.addEventListener('mouseenter', onEnter);
      c.addEventListener('mouseleave', onLeave);
    });

    rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);
      cards.forEach((c) => {
        c.removeEventListener('mouseenter', onEnter);
        c.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return null;
}
