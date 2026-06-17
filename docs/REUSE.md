# Reusing the Cyberpunk Effects Kit

Guía paso a paso para incorporar los efectos visuales y sonoros en otro proyecto.

---

## Prerequisitos

- Next.js 15+ (App Router)
- Tailwind CSS v4+ con `@tailwindcss/postcss`
- TypeScript

---

## Instalación rápida

### 1. Copiar archivos

```bash
# Efectos base
cp src/lib/sounds.ts           destino/src/lib/
cp src/hooks/useButtonSounds.ts destino/src/hooks/
cp src/components/SoundEffects.tsx     destino/src/components/
cp src/components/DigitalRain.tsx      destino/src/components/
cp src/components/ProximityGlow.tsx    destino/src/components/
cp src/components/AnimateOnScroll.tsx  destino/src/components/
```

### 2. Copiar CSS

Añadir el contenido de `src/app/globals.css` (secciones marcadas como efectos) a tu `globals.css`. Incluye:

- `@theme` → variables de color y tipografía
- `@layer utilities` → `.glow-magenta`, `.glow-cyan`, `.border-glow`, `.card-cyber`
- `@keyframes` → `glitch-1`, `glitch-2`, `flicker`, `scanline`, `pulse-neon`, `fade-up/left/right/scale-in`, `card-pulse`, `dot-pulse`, `flicker-2`, `camera-flash`
- Clases → `.glitch-text`, `.neon-title`, `.scanline-overlay`, `.animate-*`, `.in-view .card-*`, `.bg-grid`, `.vignette`, `.nav-link`, `.card-glass`, `.card-glass-action`, `.card-glass-pulse`, `.card-glow`, `.flicker-erratic`

### 3. Configurar `layout.tsx`

```tsx
import DigitalRain from "@/components/DigitalRain";
import ProximityGlow from "@/components/ProximityGlow";
import SoundEffects from "@/components/SoundEffects";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body>
        <DigitalRain />
        <ProximityGlow />
        <SoundEffects />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
```

### 4. Configurar `tailwind.config` (opcional)

Si usas Tailwind v3, necesitas mapear las variables del `@theme`:

```js
theme: {
  extend: {
    colors: {
      bg: "#0a0a0f",
      card: "#1a1a2e",
      "neon-magenta": "#ff00ff",
      "neon-cyan": "#00ffff",
      "neon-amber": "#ffaa00",
      body: "#00dd88",
      "text-dim": "#8888aa",
      border: "#2a2a4a",
    },
    fontFamily: {
      sans: ['"Exo 2"', '"Segoe UI"', "system-ui", "sans-serif"],
      heading: ["Rajdhani", "Inter", "sans-serif"],
      mono: ["VT323", '"Courier New"', "monospace"],
    },
  },
}
```

---

## Uso

### Card con efectos

```tsx
<div className="card-glass card-glow card-glass-pulse rounded-lg border border-[#2a2a4a] bg-black/30 backdrop-blur-sm p-6">
  <h3 className="text-lg font-bold text-[#ff00ff]">Título</h3>
  <p className="text-sm text-[#8888aa]">Descripción</p>
</div>
```

### Botón con dot pulsante + sonidos

```tsx
<button className="card-glass card-glass-action card-glow card-glass-pulse rounded border border-[#2a2a4a] bg-black/30 backdrop-blur-sm px-8 py-3 text-sm font-semibold text-[#ff00ff]">
  Click me
</button>
```

### Título con glitch

```tsx
<h2>
  <span data-text="Título" className="glitch-text neon-title flicker-erratic glow-magenta">
    Título
  </span>
</h2>
```

### Sección animada al scroll

```tsx
<AnimateOnScroll animation="fade-up">
  <div className="grid gap-6">
    <div className="card-fade-up">Item 1</div>
    <div className="card-fade-up">Item 2</div>
  </div>
</AnimateOnScroll>
```

---

## Arquitectura de archivos

```
src/
├── lib/
│   ├── sounds.ts              # Síntesis Web Audio
│   └── utils.ts               # Utilidades generales
├── hooks/
│   └── useButtonSounds.ts     # Hook sonidos hover/click
├── components/
│   ├── SoundEffects.tsx        # Wrapper hook sonidos
│   ├── DigitalRain.tsx         # Lluvia digital canvas
│   ├── ProximityGlow.tsx       # Brillo reactivo RAF
│   └── AnimateOnScroll.tsx     # Scroll animations
└── app/
    └── globals.css             # (secciones de efectos)
```

---

## Notas importantes

- **DigitalRain** usa un singleton module-level. El canvas no se recrea entre navegaciones si permanece montado.
- **ProximityGlow** usa `requestAnimationFrame`. Todos los elementos con `.card-glow` son evaluados cada frame.
- **Sonidos** usan `AudioContext` singleton lazy. Se reanuda automáticamente si está `suspended`.
- **`prefers-reduced-motion: reduce`** es respetado por `useButtonSounds` y debe ser manejado análogamente en `ProximityGlow` si se desea.
