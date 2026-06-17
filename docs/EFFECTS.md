# Cyberpunk Effects Kit

Sistema de efectos visuales y sonoros reutilizable, desarrollado para [vizcoso.cl](https://superdandi.github.io/vizcoso). Diseñado para integrarse en cualquier proyecto Next.js + Tailwind CSS v4.

---

## 1. Digital Rain (`src/components/DigitalRain.tsx`)

Lluvia digital estilo *Matrix* con caracteres katakana + ASCII. Se ejecuta en un `<canvas>` de capa fija.

### Arquitectura

Variables globales (singleton module-level):
- `canvas`, `ctx`, `drops[]`, `animId`, `running`, `currentPath`
- `PAGE_FIXED`: mapa de rutas a progreso fijo (sin scroll vertical)

### API

| Función | Descripción |
|---|---|
| `start(canvas, path)` | Inicia el loop RAF. Inicializa drops si es primera vez. |
| `stop()` | Cancela RAF y limpia referencias. |
| `progress()` | Calcula intensidad 0–1: scroll en landing, fijo en otras rutas. |
| `updateContactTop()` | Recalcula la posición de `#contacto` como tope de scroll. |

### Comportamiento

- La intensidad se escala con el progreso del scroll en landing (0 → Hero, 1 → Contacto).
- En rutas sin scroll (ej. `/?view=formacion`), retorna `0.5` (auto-detected).
- Las gotas se regeneran al salir de pantalla.
- `resize` event recalcula dimensiones y posiciones.

### Reutilización

```tsx
import DigitalRain from "@/components/DigitalRain";

// En el layout:
<DigitalRain />
```

---

## 2. ProximityGlow (`src/components/ProximityGlow.tsx`)

Sistema de brillo reactivo a la proximidad del viewport. Un RAF loop monitorea todos los elementos con clase `.card-glow` y modula su `box-shadow` según la distancia al centro vertical de la pantalla.

### Efectos

| Clase CSS | Comportamiento |
|---|---|
| `.card-glow` | Brillo magenta estático proporcional a la cercanía. |
| `.card-glass-pulse` | Brillo frecuencia-modulado (0.3–4 Hz). `envelope = s + pow(halfWave, 8) * 1.5 * t²`. Incluye *shock ring* (`pow(halfWave, 14) * t³`). |

### Algoritmo

1. Calcula `smootherstep(t)` para suavizar la distancia.
2. `rawScroll = max(0, 1 - dist / (vh * 0.8))`, luego `t = max(0.03, pow(smootherstep(rawScroll), 1.6))`, `s = t * 0.82`.
3. Rama pulso: usa `sin(now * freq * π * 2)` con `freq = 0.3 + t * 3.7`.

### Reutilización

```tsx
import ProximityGlow from "@/components/ProximityGlow";

// En el layout:
<ProximityGlow />
```

Requiere que los elementos destino tengan las clases CSS documentadas abajo.

---

## 3. Sound Synthesis (`src/lib/sounds.ts`)

Sonidos sintéticos generados en tiempo real con Web Audio API. Sin archivos de audio externos.

### `burst(freq, freqEnd, dur, gain, noiseDur, noiseGain)`

Helper que genera dos capas simultáneas:

| Capa | Generación |
|---|---|
| Oscilador | Onda cuadrada, frecuencia `freq` → `freqEnd` (opcional). |
| Ruido | Buffer blanco de `noiseDur` segundos. |
| Volumen | Decaimiento exponencial a `0.001`. |

### Sonidos exportados

| Función | Uso | Square | Noise |
|---|---|---|---|
| `playHoverEnter()` | mouseenter | 200Hz, 50ms, gain 0.1 | 30ms, gain 0.06 |
| `playHoverLeave()` | mouseleave | 250→100Hz, 40ms, gain 0.06 | 20ms, gain 0.04 |
| `playClick()` | click | 120Hz, 80ms, gain 0.15 | 50ms, gain 0.1 |

### `AudioContext` singleton

Creado lazy en primera llamada. Si está `suspended` (politica de autoplay del browser), se llama `.resume()` automáticamente.

### Reutilización

```ts
import { playHoverEnter, playHoverLeave, playClick } from "@/lib/sounds";

element.addEventListener("mouseenter", playHoverEnter);
element.addEventListener("mouseleave", playHoverLeave);
element.addEventListener("click", playClick);
```

---

## 4. useButtonSounds (`src/hooks/useButtonSounds.ts`)

Hook que attach los sonidos a un selector CSS. Respeta `prefers-reduced-motion: reduce`.

```tsx
import useButtonSounds from "@/hooks/useButtonSounds";

useButtonSounds(".card-glass-action, .card-glass-pulse, footer a, nav button");
```

### SoundEffects wrapper (`src/components/SoundEffects.tsx`)

```tsx
export default function SoundEffects() {
  useButtonSounds(".card-glass-action, .card-glass-pulse, footer a, nav button");
  return null;
}
```

---

## 5. AnimateOnScroll (`src/components/AnimateOnScroll.tsx`)

Wrapper que dispara animaciones CSS al entrar al viewport via `IntersectionObserver`.

### Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `children` | `ReactNode` | — | Contenido a animar |
| `className` | `string` | `""` | Clases adicionales |
| `animation` | `"fade-up" \| "fade-left" \| "fade-right" \| "scale-in"` | `"fade-up"` | Tipo de animación |

### Comportamiento

- Cuando el elemento cruza `threshold: 0.1`, añade clase `in-view` y las animaciones hijas se activan.
- Los hijos con `card-fade-up`, `card-fade-left`, `card-fade-right`, `card-scale-in` se animan con delays escalonados.

### Reutilización

```tsx
<AnimateOnScroll animation="fade-up">
  <div className="card-fade-up">Item 1</div>
  <div className="card-fade-up">Item 2</div>
</AnimateOnScroll>
```

---

## 6. CSS Effects (`src/app/globals.css`)

### Clases utilitarias

| Clase | Efecto |
|---|---|
| `.glow-magenta` | Text-shadow magenta 3-capas |
| `.glow-cyan` | Text-shadow cyan 3-capas |
| `.glow-magenta-intense` | Text-shadow magenta 4-capas (más brillo) |
| `.glow-cyan-intense` | Text-shadow cyan 4-capas |
| `.border-glow` | Box-shadow magenta |

### Card system

| Clase | Descripción |
|---|---|
| `.card-glass` | Base: `position: relative`, scanline overlay (`::before`), dot verde (`::after`). |
| `.card-glass-action` | Dot pulsante (`dot-pulse` 2s) — reemplaza al static de `.card-glass::after`. |
| `.card-glass-pulse` | Animación `card-pulse` 4s (glow rosa en bordes). |
| `.card-glow` | Transición para ProximityGlow RAF. |
| `.card-fade-up` / `.card-scale-in` / `.card-fade-left` / `.card-fade-right` | Animaciones escalonadas (12 hijos). |

### Glitch text

```html
<span data-text="Texto" class="glitch-text neon-title flicker-erratic">
  Texto
</span>
```

| Clase | Efecto |
|---|---|
| `.glitch-text` | Pseudo-elementos cyan/magenta con `clip-path` glitch. |
| `.neon-title` | `pulse-neon` (3s) + `flicker` (5s). |
| `.flicker-erratic` | `flicker-2` (12s) — parpadeo errático. |

### Scanline overlay

```html
<div class="scanline-overlay"></div>
```

Línea horizontal magenta que barre la pantalla verticalmente en 6s.

### Grid background

```html
<div class="bg-grid"></div>
```

Cuadrícula magenta 50×50px semi-transparente.

### Efecto vignette

```html
<div class="vignette"></div>
```

Sombra interior negra (`inset 0 0 150px rgba(0,0,0,0.75)`).

### Camera flash

```html
<div class="in-view"><!-- flash efímero al hacer scroll --></div>
```

---

## Variables de Tema (`@theme` en CSS)

| Variable | Valor | Uso |
|---|---|---|
| `--color-bg` | `#0a0a0f` | Fondo general |
| `--color-card` | `#1a1a2e` | Fondo de cards |
| `--color-neon-magenta` | `#ff00ff` | Acento magenta |
| `--color-neon-cyan` | `#00ffff` | Acento cyan |
| `--color-neon-amber` | `#ffaa00` | Acento ámbar |
| `--color-body` | `#00dd88` | Color de texto body |
| `--color-text-dim` | `#8888aa` | Texto secundario |
| `--color-border` | `#2a2a4a` | Bordes |

---

## Dependencias

| Paquete | Versión | Uso |
|---|---|---|
| `next` | ^15.2.0 | Framework |
| `react` / `react-dom` | ^19.0.0 | UI |
| `tailwindcss` | ^4.1.0 | Estilos |
| `@tailwindcss/postcss` | ^4.1.0 | PostCSS plugin |
| `tw-animate-css` | ^1.4.0 | Animaciones Tailwind |
| `embla-carousel-react` | ^8.6.0 | Carrusel Bandcamp |
| `shadcn` | ^4.11.0 | Componentes base |

---

## Licencia

MIT — libre para usar, modificar y distribuir.
