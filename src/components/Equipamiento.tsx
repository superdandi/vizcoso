export default function Equipamiento() {
  return (
    <section id="equipamiento" className="border-y border-[#2a2a4a] px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="glow-magenta mb-2 text-center text-3xl font-bold sm:text-4xl">
          Equipamiento de Grabación
        </h2>
        <p className="mb-12 text-center text-[#8888aa]">
          Tecnología profesional para tu proyecto
        </p>

        <div className="card-cyber mb-10 rounded-lg p-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-[#ff00ff] bg-[#1a1a2e]">
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
              <p className="mt-1 text-sm leading-relaxed text-[#c0c0d0]">
                Grabamos usando la interfaz USB de la <strong className="text-[#00ffff]">Tascam Model 24</strong>{" "}
                conectada a un <strong className="text-[#ffaa00]">Mac Mini M4</strong>, capturando hasta{" "}
                <strong className="text-[#ff00ff]">24 canales simultáneos</strong>{" "}
                (22 entradas + mezcla estéreo) en{" "}
                <strong className="text-[#ff00ff]">WAV 44.1 o 48 kHz / 24-bit</strong>.
                Sus <strong className="text-[#00ffff]">faders de 100 mm (long-throw)</strong> y su amplio layout
                (57 cm) hacen que mezclar sea cómodo y preciso. 16 preamplificadores Ultra-HDDA,
                EQ sweepable, compresor one-knob y 16 efectos. Además contamos con un{" "}
                <strong className="text-[#ffaa00]">Lexicon MX200</strong> (multiefectos) y un{" "}
                <strong className="text-[#ffaa00]">DBX 166XS</strong> (compresor analógico de 2 canales).
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-[#2a2a4a] bg-[#0a0a0f] p-6 transition-all hover:border-[#ff00ff]/50">
            <h4 className="mb-2 text-lg font-bold text-[#ff00ff]">🎤 Vocal &amp; Instrumento</h4>
            <p className="text-sm leading-relaxed text-[#c0c0d0]">
              Graba tu voz o instrumento con micrófonos <strong className="text-[#00ffff]">Shure SM58</strong>,
              dinámicos y condensadores, más <strong className="text-[#ffaa00]">cajas DI</strong> para guitarra,
              bajo o teclado directo a la mesa. Ideal para maquetas y producción urbana.
            </p>
          </div>

          <div className="rounded-lg border border-[#2a2a4a] bg-[#0a0a0f] p-6 transition-all hover:border-[#ff00ff]/50">
            <h4 className="mb-2 text-lg font-bold text-[#ffaa00]">🥁 Batería completa</h4>
            <p className="text-sm leading-relaxed text-[#c0c0d0]">
              Microfonía profesional con <strong className="text-[#00ffff]">Shure PGADrumKit 7</strong>:{" "}
              PGA52 (kick), PGA56×3 (toms), PGA57 (snare) y{" "}
              <strong className="text-[#ff00ff]">PGA81×2</strong> overheads condensador (40 Hz – 18 kHz).
              Cada pieza en su propio canal, gracias a los 24 de la Model 24.
            </p>
          </div>

          <div className="rounded-lg border border-[#2a2a4a] bg-[#0a0a0f] p-6 transition-all hover:border-[#ff00ff]/50">
            <h4 className="mb-2 text-lg font-bold text-[#00ffff]">🎸 Banda completa</h4>
            <p className="text-sm leading-relaxed text-[#c0c0d0]">
              Voces, batería microfonada y DI conectadas simultáneamente. La banda completa
              grabada como sesión en vivo, cada instrumento separado y limpio.
            </p>
          </div>

          <div className="rounded-lg border border-[#2a2a4a] bg-[#0a0a0f] p-6 transition-all hover:border-[#ff00ff]/50">
            <h4 className="mb-2 text-lg font-bold text-[#ff00ff]">📡 Banda + Live Streaming</h4>
            <p className="text-sm leading-relaxed text-[#c0c0d0]">
              Todo lo anterior mientras transmitimos en vivo. La banda tocando, cada canal
              capturado y el mundo escuchando en tiempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
