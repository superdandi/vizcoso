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
                Conectada a mi <strong className="text-[#ffaa00]">Mac Mini M4 (2025)</strong> como interfaz USB,
                graba hasta <strong className="text-[#ff00ff]">24 canales simultáneos</strong>{" "}
                (22 entradas + mezcla estéreo) en{" "}
                <strong className="text-[#ff00ff]">WAV 44.1 o 48 kHz / 24-bit</strong>.
                Sus <strong className="text-[#00ffff]">faders de 100 mm (long-throw)</strong> y su amplio layout
                (57 cm de ancho) hacen que mezclar sea cómodo y preciso.
                16 preamplificadores Tascam Ultra-HDDA, EQ de 3 bandas con medio sweepable,
                compresor one-knob y 16 efectos integrados. También puedo operarla independiente
                sin computador, grabando directo a tarjeta SD (hasta 512 GB).
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-[#2a2a4a] bg-[#0a0a0f] p-6 transition-all hover:border-[#ff00ff]/50">
            <h4 className="mb-2 text-lg font-bold text-[#ff00ff]">🎤 Vocal &amp; Instrumento</h4>
            <p className="text-sm leading-relaxed text-[#c0c0d0]">
              <strong>El primer paso.</strong> Ven a grabar tu voz o tu instrumento.
              Contamos con micrófonos <strong className="text-[#00ffff]">Shure SM58</strong> (x3), dinámicos
              y condensadores para voces e instrumentos, además de{" "}
              <strong className="text-[#ffaa00]">cajas directas (DI)</strong> para conectar guitarras,
              bajos y teclados directo a la mesa. Desde una maqueta hasta una producción
              urbana, partimos con un canal y de ahí crecemos.
            </p>
          </div>

          <div className="rounded-lg border border-[#2a2a4a] bg-[#0a0a0f] p-6 transition-all hover:border-[#ff00ff]/50">
            <h4 className="mb-2 text-lg font-bold text-[#ffaa00]">🥁 Batería completa</h4>
            <p className="text-sm leading-relaxed text-[#c0c0d0]">
              <strong>Subimos de nivel.</strong> Microfonear una batería requiere canales,
              y la Model 24 tiene 24. Acá entra el{" "}
              <strong className="text-[#00ffff]">Shure PGADrumKit 7</strong>:{" "}
              1x PGA52 (kick), 3x PGA56 (toms), 1x PGA57 (snare) +{" "}
              <strong className="text-[#ff00ff]">2x PGA81 condensador</strong> como overheads
              (40 Hz – 18 kHz). Cada pieza suena en su propio canal. Por eso invertimos
              en una mesa grande: para que tu batería suene completa, separada y con la
              pegada que merece.
            </p>
          </div>

          <div className="rounded-lg border border-[#2a2a4a] bg-[#0a0a0f] p-6 transition-all hover:border-[#ff00ff]/50">
            <h4 className="mb-2 text-lg font-bold text-[#00ffff]">🎸 Banda completa</h4>
            <p className="text-sm leading-relaxed text-[#c0c0d0]">
              <strong>Todos los instrumentos, todos los canales.</strong> Con la micrófonía
              de voces, la batería microfonada y las DI conectadas, grabamos a la banda
              completa como sesión en vivo. Cada músico, cada instrumento, suena limpio
              y por separado. Listo para mezclar.
            </p>
          </div>

          <div className="rounded-lg border border-[#2a2a4a] bg-[#0a0a0f] p-6 transition-all hover:border-[#ff00ff]/50">
            <h4 className="mb-2 text-lg font-bold text-[#ff00ff]">📡 Banda + Live Streaming</h4>
            <p className="text-sm leading-relaxed text-[#c0c0d0]">
              <strong>El proyecto completo.</strong> Todo lo anterior, pero mientras grabamos
              también transmitimos en vivo. La banda tocando, cada canal capturado, y el
              mundo escuchando en tiempo real. Sesión, grabación y streaming simultáneo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
