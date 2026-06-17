"use client";

import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

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

type RainMode = "scroll" | "fixed" | "auto";

const PAGE_MODE: Record<string, RainMode> = {
  "/": "scroll",
  "/clases": "fixed",
};

let saved: { y: number; speed: number; length: number; chars: string[] }[] | null = null;

const FONT_SIZE = 14;

export default function DigitalRain() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mode: RainMode = PAGE_MODE[pathname] || "auto";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasEl = canvas;
    const c = ctx;
    let animId: number;
    let drops: Drop[] = [];
    let contactTop = 0;

    function updateContactTop() {
      const el = document.getElementById("contacto");
      contactTop = el ? el.offsetTop : document.documentElement.scrollHeight;
    }

    function progress(): number {
      if (mode === "fixed") return 0.5;
      if (mode === "scroll") return Math.min(window.scrollY / Math.max(contactTop, 1), 1);
      const noScroll = document.documentElement.scrollHeight <= window.innerHeight;
      return noScroll ? 0.5 : Math.min(window.scrollY / Math.max(contactTop, 1), 1);
    }

    function initDrops(w: number, h: number) {
      const cols = Math.floor(w / FONT_SIZE);
      if (saved && saved.length === cols) {
        drops = saved.map((d, i) => ({
          x: i * FONT_SIZE,
          y: d.y,
          speed: d.speed,
          length: d.length,
          chars: [...d.chars],
        }));
        saved = null;
        return;
      }
      saved = null;
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
      const p = progress();
      const intensity = p * 0.16;

      const fillAlpha = 0.05 - intensity * 0.015;
      c.fillStyle = `rgba(10, 10, 15, ${fillAlpha})`;
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
          const alphaScale = 0.03 + intensity * 0.97;

          if (j === 0) {
            c.globalAlpha = alphaScale;
            c.fillStyle = "#ffffff";
          } else if (j < 3) {
            const base = 0.6 + 0.2 * (1 - j / 3);
            c.globalAlpha = base * alphaScale;
            c.fillStyle = "#00ff41";
          } else {
            const t = (j - 2) / (drop.length - 2);
            const base = 0.05 + 0.5 * (1 - t);
            c.globalAlpha = base * alphaScale;
            c.fillStyle = "#00ff41";
          }
          c.fillText(char, drop.x, y);
        }

        drop.y += drop.speed * (0.05 + intensity * 0.95);

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
    updateContactTop();
    initDrops(w, h);
    draw(w, h);

    function onResize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvasEl.width = w;
      canvasEl.height = h;
      updateContactTop();
    }

    window.addEventListener("resize", onResize);

    return () => {
      saved = drops.map((d) => ({
        y: d.y,
        speed: d.speed,
        length: d.length,
        chars: d.chars,
      }));
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
