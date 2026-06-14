"use client";

import { useRef, useEffect } from "react";

const KATAKANA = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const ASCII = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]|&^%$#@!";

function randomChar(): string {
  const all = KATAKANA + ASCII;
  return all[Math.floor(Math.random() * all.length)];
}

interface Drop {
  x: number;
  y: number;
  speed: number;
  length: number;
  chars: string[];
}

const FONT_SIZE = 14;

export default function DigitalRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasEl = canvas;
    const c = ctx;
    let animId: number;
    let drops: Drop[] = [];

    function initDrops(w: number, h: number) {
      const cols = Math.floor(w / FONT_SIZE);
      drops = Array.from({ length: cols }, (_, i) => {
        const len = 8 + Math.floor(Math.random() * 9);
        return {
          x: i * FONT_SIZE,
          y: Math.random() * h * -1,
          speed: 2 + Math.random() * 4,
          length: len,
          chars: Array.from({ length: len }, () => randomChar()),
        };
      });
    }

    function draw(w: number, h: number) {
      c.fillStyle = "rgba(10, 10, 15, 0.035)";
      c.fillRect(0, 0, w, h);

      c.font = `${FONT_SIZE}px "Courier New", monospace`;
      c.textAlign = "left";

      for (const drop of drops) {
        for (let j = 0; j < drop.length; j++) {
          const y = drop.y - j * FONT_SIZE;
          if (y < -FONT_SIZE || y > h + FONT_SIZE) continue;

          if (j > 0 && Math.random() < 0.04) {
            drop.chars[j] = randomChar();
          }

          const char = drop.chars[j];

          if (j === 0) {
            c.globalAlpha = 1;
            c.fillStyle = "#ffffff";
          } else if (j < 3) {
            c.globalAlpha = 0.6 + 0.2 * (1 - j / 3);
            c.fillStyle = "#00ff41";
          } else {
            const t = (j - 2) / (drop.length - 2);
            c.globalAlpha = 0.05 + 0.5 * (1 - t);
            c.fillStyle = "#00ff41";
          }
          c.fillText(char, drop.x, y);
        }

        drop.y += drop.speed;

        if (drop.y > h + drop.length * FONT_SIZE) {
          drop.y = -drop.length * FONT_SIZE;
          const newLen = 8 + Math.floor(Math.random() * 9);
          drop.length = newLen;
          drop.chars = Array.from({ length: newLen }, () => randomChar());
          drop.speed = 2 + Math.random() * 4;
        }
      }

      c.globalAlpha = 1;
      animId = requestAnimationFrame(() => draw(w, h));
    }

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvasEl.width = w;
    canvasEl.height = h;
    initDrops(w, h);
    draw(w, h);

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;

    function onResize() {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const newW = window.innerWidth;
        const newH = window.innerHeight;
        if (newW === w && newH === h) return;
        w = newW;
        h = newH;
        canvasEl.width = w;
        canvasEl.height = h;
        initDrops(w, h);
      }, 250);
    }

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
