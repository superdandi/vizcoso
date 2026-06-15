import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Equipamiento() {
  return (
    <section id="equipamiento" className="scroll-mt-14 border-t border-[#2a2a4a] px-4 py-24">
      <AnimateOnScroll animation="scale-in">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-3xl font-bold sm:text-4xl">
          <span data-text="Equipamiento de Grabación" className="glitch-text neon-title flicker-erratic glow-magenta">
            Equipamiento de Grabación
          </span>
        </h2>
        <p className="mb-12 text-center text-[#8888aa]">
          24 pistas para tu sonido
        </p>

        <div className="card-glass card-glow mb-10 rounded-lg border border-[#2a2a4a] bg-black/30 backdrop-blur-sm p-8">
          <p className="mb-4 text-center text-sm font-semibold tracking-wide text-[#ffaa00] sm:text-left">
            Grabaci&oacute;n multipista profesional para bandas completas
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-[#ff00ff] bg-black/30 backdrop-blur-sm">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                <circle cx="12" cy="12" r="3" />
                <circle cx="19" cy="5" r="1" fill="#ff00ff" stroke="none" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#00ffff]">
                Tascam Model 24
              </h3>
              <ul className="mt-2 space-y-1 text-sm leading-relaxed text-[#c0c0d0]">
                <li>{"\u2022"} Interfaz USB Tascam Model 24 → Mac Mini M4</li>
                <li>{"\u2022"} 24 canales — 44.1/48 kHz, 24-bit</li>
                <li>{"\u2022"} Lexicon MX200 (multiefectos externo)</li>
                <li>{"\u2022"} DBX 166XS (compresor analógico 2 canales)</li>
                <li>{"\u2022"} Monitoreo directo desde la consola (pre-DAW, latencia cero)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="card-glass card-glow card-fade-up rounded-lg border border-[#2a2a4a] bg-black/30 backdrop-blur-sm p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#8888aa]">
              Voces e instrumentos con sonido profesional
            </p>
            <h4 className="mb-2 flex items-center gap-1.5 text-lg font-bold text-[#ff00ff]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="2" width="6" height="12" rx="3" />
                <path d="M5 13a7 7 0 0 0 14 0" />
                <line x1="12" y1="20" x2="12" y2="22" />
                <line x1="8" y1="22" x2="16" y2="22" />
              </svg>
              Vocal &amp; Instrumento
            </h4>
            <ul className="space-y-1 text-sm leading-relaxed text-[#c0c0d0]">
              <li>{"\u2022"} Shure SM58 ×3, PG58, Shure 8700 (dinámicos)</li>
              <li>{"\u2022"} t.bone Nova Black (condensador vocal)</li>
              <li>{"\u2022"} Cajas DI: Samson MD1, Samson MDA1, Arctic DB-02</li>
              <li>{"\u2022"} Audífonos: AudioTechnica ATH-M20X ×2, SKP RF 30 Studio</li>
            </ul>
          </div>

          <div className="card-glass card-glow card-fade-up rounded-lg border border-[#2a2a4a] bg-black/30 backdrop-blur-sm p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#8888aa]">
              Bater&iacute;as con micr&oacute;fonos dedicados
            </p>
            <h4 className="mb-2 flex items-center gap-1.5 text-lg font-bold text-[#ffaa00]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="7" rx="8" ry="4" />
                <path d="M4 7v8c0 2.2 3.6 4 8 4s8-1.8 8-4V7" />
                <line x1="12" y1="19" x2="12" y2="22" />
                <line x1="9" y1="22" x2="15" y2="22" />
              </svg>
              Batería completa
            </h4>
            <ul className="space-y-1 text-sm leading-relaxed text-[#c0c0d0]">
              <li>{"\u2022"} Shure PGADrumKit 7 completo</li>
              <li>{"\u2022"} PGA52 (kick), PGA57 (snare)</li>
              <li>{"\u2022"} PGA56×3 (toms)</li>
              <li>{"\u2022"} PGA81×2 overheads condensador (40 Hz – 18 kHz)</li>
            </ul>
          </div>

          <div className="card-glass card-glow card-fade-up rounded-lg border border-[#2a2a4a] bg-black/30 backdrop-blur-sm p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#8888aa]">
              Hasta 24 canales simult&aacute;neos para tu banda
            </p>
            <h4 className="mb-2 flex items-center gap-1.5 text-lg font-bold text-[#00ffff]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v15" />
                <ellipse cx="12" cy="18" rx="4" ry="4" />
                <line x1="9" y1="7" x2="15" y2="7" />
                <circle cx="12" cy="6" r="1" />
              </svg>
              Banda completa
            </h4>
            <ul className="space-y-1 text-sm leading-relaxed text-[#c0c0d0]">
              <li>{"\u2022"} Tascam Model 24 — 24 canales simultáneos</li>
              <li>{"\u2022"} Shure PGADrumKit 7 (kick, snare, toms, OH)</li>
              <li>{"\u2022"} Shure SM58 ×3 + Nova Black + condensadores para voces</li>
              <li>{"\u2022"} Cajas DI: Samson MD1, Samson MDA1, Arctic DB-02</li>
            </ul>
          </div>

          <div className="card-glass card-glow card-fade-up rounded-lg border border-[#2a2a4a] bg-black/30 backdrop-blur-sm p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#8888aa]">
              Streaming en vivo con calidad broadcast
            </p>
            <h4 className="mb-2 flex items-center gap-1.5 text-lg font-bold text-[#ff00ff]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 15a10 10 0 0 1 20 0" />
                <path d="M5 15a7 7 0 0 1 14 0" />
                <path d="M8 15a4 4 0 0 1 8 0" />
                <circle cx="12" cy="15" r="1.5" />
              </svg>
              Banda + Live Streaming
            </h4>
            <ul className="space-y-1 text-sm leading-relaxed text-[#c0c0d0]">
              <li>{"\u2022"} Tascam Model 24 vía USB al Mac Mini M4</li>
              <li>{"\u2022"} Fibra óptica simétrica — 940 Mbps (Fibra Gamer)</li>
              <li>{"\u2022"} Streaming multicanal en tiempo real</li>
            </ul>
          </div>
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
