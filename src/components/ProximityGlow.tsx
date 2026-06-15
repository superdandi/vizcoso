'use client';

import { useEffect, useRef } from 'react';

function smootherstep(t: number): number {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

const GLOW_FACTOR = 0.82;
const MOUSE_RADIUS = 150;
const MOUSE_FACTOR = 1.2;

export default function ProximityGlow() {
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.card-glow');
    if (!cards.length) return;

    let rafId: number;

    function onMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }

    function onMouseLeave() {
      mouseRef.current = null;
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    function update() {
      const vh = window.innerHeight;
      const vpCenter = vh / 2;
      const maxDist = vh * 0.8;
      const mouse = mouseRef.current;

      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - vpCenter);
        const rawScroll = Math.max(0, 1 - dist / maxDist);
        const scrollT = Math.pow(smootherstep(rawScroll), 1.6);

        let mouseT = 0;
        if (mouse) {
          const cardCX = rect.left + rect.width / 2;
          const cardCY = rect.top + rect.height / 2;
          const distMouse = Math.hypot(mouse.x - cardCX, mouse.y - cardCY);
          const rawMouse = Math.max(0, 1 - distMouse / MOUSE_RADIUS);
          mouseT = Math.pow(smootherstep(rawMouse), 1.6) * MOUSE_FACTOR;
        }

        const t = Math.max(0.03, Math.max(scrollT, mouseT));

        card.style.boxShadow = `
          0 0 ${10 * t * GLOW_FACTOR}px rgba(255, 0, 255, ${0.15 * t * GLOW_FACTOR}),
          inset 0 0 ${8 * t * GLOW_FACTOR}px rgba(255, 0, 255, ${0.04 * t * GLOW_FACTOR}),
          0 ${8 * t * GLOW_FACTOR}px ${35 * t * GLOW_FACTOR}px rgba(255, 0, 255, ${0.2 * t * GLOW_FACTOR}),
          0 0 ${25 * t * GLOW_FACTOR}px rgba(255, 0, 255, ${0.1 * t * GLOW_FACTOR})
        `;
      }

      rafId = requestAnimationFrame(update);
    }

    rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return null;
}
