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

const PAGE_FIXED: Record<string, number> = {
  "/formacion": 0.65,
};

const FONT_SIZE = 14;

let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let drops: Drop[] = [];
let animId = 0;
let running = false;
let currentPath: string = "/";
let contactTop = 0;
let w = 0;
let h = 0;

function updateContactTop() {
  const el = document.getElementById("contacto");
  contactTop = el ? el.offsetTop : document.documentElement.scrollHeight;
}

function progress(): number {
  const fixed = PAGE_FIXED[currentPath];
  if (fixed !== undefined) return fixed;
  const noScroll = document.documentElement.scrollHeight <= window.innerHeight;
  return noScroll ? 0.5 : Math.min(window.scrollY / Math.max(contactTop, 1), 1);
}

function initDrops() {
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

function draw() {
  if (!ctx) return;

  const p = progress();
  const intensity = p * 0.16;

  const fillAlpha = 0.05 - intensity * 0.015;
  ctx.fillStyle = `rgba(10, 10, 15, ${fillAlpha})`;
  ctx.fillRect(0, 0, w, h);

  ctx.font = `${FONT_SIZE}px "Courier New", monospace`;
  ctx.textAlign = "left";

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
        ctx.globalAlpha = alphaScale;
        ctx.fillStyle = "#ffffff";
      } else if (j < 3) {
        const base = 0.6 + 0.2 * (1 - j / 3);
        ctx.globalAlpha = base * alphaScale;
        ctx.fillStyle = "#00ff41";
      } else {
        const t = (j - 2) / (drop.length - 2);
        const base = 0.05 + 0.5 * (1 - t);
        ctx.globalAlpha = base * alphaScale;
        ctx.fillStyle = "#00ff41";
      }
      ctx.fillText(char, drop.x, y);
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

  ctx.globalAlpha = 1;
  animId = requestAnimationFrame(draw);
}

function start(el: HTMLCanvasElement, path: string) {
  canvas = el;
  ctx = el.getContext("2d");
  currentPath = path;

  w = window.innerWidth;
  h = window.innerHeight;
  el.width = w;
  el.height = h;

  updateContactTop();

  if (drops.length === 0) {
    initDrops();
  }

  if (!running) {
    running = true;
    draw();
  }
}

function stop() {
  running = false;
  cancelAnimationFrame(animId);
  canvas = null;
  ctx = null;
}

function onResize() {
  w = window.innerWidth;
  h = window.innerHeight;
  if (canvas) {
    canvas.width = w;
    canvas.height = h;
  }
  updateContactTop();
}

export default function DigitalRain() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;

    start(el, pathname);
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
    };
  }, [pathname]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
