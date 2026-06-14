"use client";

import { useRef, useEffect } from "react";

interface Raindrop {
  x: number;
  y: number;
  speed: number;
  length: number;
  opacity: number;
  width: number;
  colorIndex: number;
}

const COLORS = ["#88ddff", "#77ccff", "#99eeff", "#aaddff", "#bbeeff"];

export default function BladeRunnerRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasEl = canvas;
    const c = ctx;
    let animId: number;
    let drops: Raindrop[] = [];
    const DENSITY = 0.35;

    function initDrops(w: number, h: number) {
      const count = Math.floor(w * DENSITY);
      drops = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h * -1 - 50,
        speed: 1 + Math.random() * 2.5,
        length: 15 + Math.random() * 35,
        opacity: 0.06 + Math.random() * 0.2,
        width: 0.5 + Math.random() * 1.5,
        colorIndex: Math.floor(Math.random() * COLORS.length),
      }));
    }

    function draw(w: number, h: number) {
      c.fillStyle = "rgba(10, 10, 15, 0.06)";
      c.fillRect(0, 0, w, h);

      const glow = c.createRadialGradient(w / 2, h + 50, 0, w / 2, h + 50, h * 0.6);
      glow.addColorStop(0, "rgba(255, 0, 255, 0.02)");
      glow.addColorStop(0.4, "rgba(0, 255, 255, 0.015)");
      glow.addColorStop(1, "rgba(10, 10, 15, 0)");
      c.fillStyle = glow;
      c.fillRect(0, 0, w, h);

      for (const drop of drops) {
        c.globalAlpha = drop.opacity;
        c.strokeStyle = COLORS[drop.colorIndex];
        c.lineWidth = drop.width;
        c.beginPath();
        c.moveTo(drop.x, drop.y);
        c.lineTo(drop.x + 1.5, drop.y + drop.length);
        c.stroke();

        drop.y += drop.speed;
        if (drop.y > h + drop.length) {
          drop.y = -drop.length;
          drop.x = Math.random() * w;
          drop.speed = 1 + Math.random() * 2.5;
          drop.length = 15 + Math.random() * 35;
          drop.opacity = 0.06 + Math.random() * 0.2;
          drop.colorIndex = Math.floor(Math.random() * COLORS.length);
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
