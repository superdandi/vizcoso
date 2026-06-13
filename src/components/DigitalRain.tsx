"use client";

import { useRef, useEffect } from "react";

const KATAKANA = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const ASCII = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]|&^%$#@!";

function randomChar(): string {
  const all = KATAKANA + ASCII;
  return all[Math.floor(Math.random() * all.length)];
}

function randomChars(n: number): string[] {
  return Array.from({ length: n }, () => randomChar());
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
      drops = Array.from({ length: cols }, (_, i) => ({
        x: i * FONT_SIZE,
        y: Math.random() * h * -1,
        speed: 1.5 + Math.random() * 4,
        length: 1 + Math.floor(Math.random() * 3),
        chars: randomChars(30),
      }));
    }

    function draw(w: number, h: number) {
      c.fillStyle = "rgba(10, 10, 15, 0.1)";
      c.fillRect(0, 0, w, h);

      c.font = `${FONT_SIZE}px "Courier New", monospace`;
      c.textAlign = "left";

      for (const drop of drops) {
        for (let j = 0; j < drop.length; j++) {
          const y = drop.y - j * FONT_SIZE;
          if (y < -FONT_SIZE || y > h + FONT_SIZE) continue;

          const char = drop.chars[(Math.floor(y / FONT_SIZE) + j) % drop.chars.length];
          const t = j / drop.length;

          c.globalAlpha = 0.95 * (1 - t * 0.8);
          c.fillStyle = "#33ff33";
          c.fillText(char, drop.x, y);
        }

        drop.y += drop.speed;

        if (drop.y > h + drop.length * FONT_SIZE) {
          drop.y = -drop.length * FONT_SIZE;
          drop.chars = randomChars(30);
          drop.speed = 1.5 + Math.random() * 4;
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

    function onResize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvasEl.width = w;
      canvasEl.height = h;
      initDrops(w, h);
    }

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
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
