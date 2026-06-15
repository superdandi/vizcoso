'use client';

import { useEffect } from 'react';

function smootherstep(t: number): number {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

const FULL_GLOW = `
  0 0 10px rgba(255, 0, 255, 0.15),
  inset 0 0 8px rgba(255, 0, 255, 0.04),
  0 8px 35px rgba(255, 0, 255, 0.2),
  0 0 25px rgba(255, 0, 255, 0.1)
`;

export default function ProximityGlow() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.card-glow');
    if (!cards.length) return;

    let rafId: number;

    function update() {
      const vh = window.innerHeight;
      const vpCenter = vh / 2;
      const maxDist = vh * 0.8;

      for (const card of cards) {
        if (card.dataset.glowHover) continue;

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - vpCenter);
        const raw = Math.max(0, 1 - dist / maxDist);
        const t = Math.max(0.03, smootherstep(raw));

        card.style.boxShadow = `
          0 0 ${10 * t}px rgba(255, 0, 255, ${0.15 * t}),
          inset 0 0 ${8 * t}px rgba(255, 0, 255, ${0.04 * t}),
          0 ${8 * t}px ${35 * t}px rgba(255, 0, 255, ${0.2 * t}),
          0 0 ${25 * t}px rgba(255, 0, 255, ${0.1 * t})
        `;
      }

      rafId = requestAnimationFrame(update);
    }

    function onEnter(this: HTMLElement) {
      this.dataset.glowHover = 'true';
      this.style.transition = 'box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      this.style.boxShadow = FULL_GLOW;
    }

    function onLeave(this: HTMLElement) {
      delete this.dataset.glowHover;
      this.style.transition = 'box-shadow 0.3s ease';
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
