'use client';

import { useEffect } from 'react';

function smootherstep(t: number): number {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

const GLOW_FACTOR = 0.82;

export default function ProximityGlow() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.card-glow');
    if (!cards.length) return;

    let rafId: number;

    function update() {
      const vh = window.innerHeight;
      const vpCenter = vh / 2;
      const maxDist = vh * 0.8;
      const now = Date.now();

      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - vpCenter);
        const rawScroll = Math.max(0, 1 - dist / maxDist);
        const t = Math.max(0.03, Math.pow(smootherstep(rawScroll), 1.6));
        const s = t * GLOW_FACTOR;

        if (card.classList.contains('card-glass-pulse')) {
          const hueSpeed = 0.06 + t * 0.12;
          const hue = (now * hueSpeed + 300) % 360;
          const flicker = (1 - t * 0.3) + Math.sin(now * 0.013) * t * 0.3;
          card.style.boxShadow = `
            0 0 ${10 * s}px hsla(${hue}, 100%, 55%, ${0.15 * s * flicker}),
            inset 0 0 ${8 * s}px hsla(${hue}, 100%, 55%, ${0.04 * s * flicker}),
            0 ${8 * s}px ${35 * s}px hsla(${hue}, 100%, 55%, ${0.2 * s * flicker}),
            0 0 ${25 * s}px hsla(${hue}, 100%, 55%, ${0.1 * s * flicker}),
            0 0 ${50 * t * t}px hsla(${hue}, 100%, 55%, ${0.3 * t * t * flicker})
          `;
        } else {
          card.style.boxShadow = `
            0 0 ${10 * s}px rgba(255, 0, 255, ${0.15 * s}),
            inset 0 0 ${8 * s}px rgba(255, 0, 255, ${0.04 * s}),
            0 ${8 * s}px ${35 * s}px rgba(255, 0, 255, ${0.2 * s}),
            0 0 ${25 * s}px rgba(255, 0, 255, ${0.1 * s})
          `;
        }
      }

      rafId = requestAnimationFrame(update);
    }

    rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
