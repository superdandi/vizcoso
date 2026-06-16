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
          const freq = 0.3 + t * 3.7;
          const rawPulse = Math.sin(now * 0.001 * freq * Math.PI * 2);
          const halfWave = Math.max(0, rawPulse);
          const sharpPulse = Math.pow(halfWave, 8);
          const shockRing = Math.pow(halfWave, 14);
          const pulseBoost = sharpPulse * 1.5 * t * t;
          const envelope = s + pulseBoost;
          const haloWave = Math.max(0, Math.sin((now * 0.001 * freq * Math.PI * 2) + 0.3));
          const haloPulse = Math.pow(haloWave, 8);
          card.style.boxShadow = `
            0 0 ${10 * envelope}px rgba(255, 0, 255, ${0.15 * envelope}),
            inset 0 0 ${8 * envelope}px rgba(255, 0, 255, ${0.04 * envelope}),
            0 ${8 * envelope}px ${35 * envelope}px rgba(255, 0, 255, ${0.2 * envelope}),
            0 0 ${25 * envelope}px rgba(255, 0, 255, ${0.1 * envelope}),
            0 0 ${50 * t * t * haloPulse}px rgba(255, 0, 255, ${0.3 * t * t * haloPulse}),
            0 0 ${80 * t * t * t * shockRing}px rgba(255, 0, 255, ${0.15 * t * t * t * shockRing})
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
