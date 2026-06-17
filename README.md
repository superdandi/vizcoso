# VIZCOSO Entertainment — Sitio Web

Landing page cyberpunk para **Vizcoso Entertainment**, estudio de grabación y productora independiente en Talca, Chile.

[https://superdandi.github.io/vizcoso](https://superdandi.github.io/vizcoso)

---

## Stack

- **Next.js 15** (App Router, `output: "export"`)
- **Tailwind CSS v4** + shadcn/ui
- **GitHub Pages** (deploy via GitHub Actions)
- **Web Audio API** (sonidos sintéticos, sin archivos externos)
- **Canvas API** (lluvia digital Matrix)
- **requestAnimationFrame** (ProximityGlow)
- **IntersectionObserver** (scroll animations)

## Estructura

```
src/
├── app/
│   ├── globals.css        # Tema, efectos, animaciones
│   ├── layout.tsx         # Root layout (Navbar, Footer, efectos)
│   ├── page.tsx           # Landing + vista Formación (condicional CSS)
│   └── formacion/
│       └── page.tsx       # Redirect a /?view=formacion
├── components/
│   ├── AnimateOnScroll.tsx
│   ├── Bandcamp.tsx
│   ├── Contacto.tsx
│   ├── DigitalRain.tsx
│   ├── Equipamiento.tsx
│   ├── Footer.tsx
│   ├── Formacion.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ProximityGlow.tsx
│   ├── Reviews.tsx
│   ├── SalaEnsayo.tsx
│   ├── SobreMi.tsx
│   ├── Sonido.tsx
│   ├── SoundEffects.tsx
│   ├── VideoProduccion.tsx
│   └── ui/
├── hooks/
│   └── useButtonSounds.ts
├── lib/
│   ├── sounds.ts
│   └── utils.ts
└── data/
    └── services.ts        # Precios y servicios
```

## Secciones

| Sección | Componente | Descripción |
|---|---|---|
| Hero | `Hero.tsx` | Portada con CTA |
| Sonido | `Sonido.tsx` | Producción Musical |
| Equipamiento | `Equipamiento.tsx` | Tascam Model 24 + gear |
| Ensayo | `SalaEnsayo.tsx` | Sala de ensayo |
| Video | `VideoProduccion.tsx` | Producción Audiovisual |
| Opiniones | `Reviews.tsx` | Testimonios |
| Sello | `Bandcamp.tsx` | Catálogo musical (carrusel) |
| Contacto | `Contacto.tsx` | WhatsApp + redes |
| Sobre Mí | `SobreMi.tsx` | Quiénes somos |
| Formación | `Formacion.tsx` | Clases musicales (vista condicional) |

## Efectos Reutilizables

Este proyecto incluye un kit de efectos cyberpunk listos para usar en otros proyectos:

- **DigitalRain** — Lluvia digital Matrix en Canvas
- **ProximityGlow** — Brillo reactivo a la posición del scroll (RAF)
- **Sound Synthesis** — Sonidos hover/click con Web Audio API
- **AnimateOnScroll** — Animaciones con IntersectionObserver
- **CSS Effects** — Glitch, neon, scanlines, card-glass, dot pulsante

Ver [docs/EFFECTS.md](docs/EFFECTS.md) para documentación completa del sistema de efectos.  
Ver [docs/REUSE.md](docs/REUSE.md) para guía de integración en otros proyectos.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Static export → /out
```

## Deploy

Automatico via GitHub Actions en push a `main`. Publicado en:

```
https://superdandi.github.io/vizcoso/
```

## Contacto

- WhatsApp: [+569 8286 4145](https://wa.me/56982864145)
- Email: vizcosoe@gmail.com
- Instagram: [@vizcosoentertainment](https://instagram.com/vizcosoentertainment)
- Bandcamp: [vizcosoentertainment.bandcamp.com](https://vizcosoentertainment.bandcamp.com)

## Licencia

MIT
