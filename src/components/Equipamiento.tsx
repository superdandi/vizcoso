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

        <div className="card-cyber rounded-lg p-8">
          <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-[#ff00ff] bg-[#1a1a2e]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                <circle cx="12" cy="12" r="3" />
                <circle cx="19" cy="5" r="1" fill="#ff00ff" stroke="none" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#00ffff]">
                Mesa Tascam Model 24
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-[#c0c0d0]">
                Grabación y tracking multipista de hasta <strong className="text-[#ff00ff]">24 canales</strong>{" "}
                (22 entradas + mezcla estéreo). Ideal para capturar sesiones completas
                con la máxima calidad.
              </p>
            </div>
          </div>

          <div className="mb-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-[#2a2a4a] bg-[#0a0a0f] p-5">
              <h4 className="mb-2 font-bold text-[#ff00ff]">🎤 Microfonía</h4>
              <p className="text-sm leading-relaxed text-[#c0c0d0]">
                Set completo de micrófonos para grabar voces e instrumentos.
                Equipo versátil para cualquier estilo musical.
              </p>
            </div>

            <div className="rounded-lg border border-[#2a2a4a] bg-[#0a0a0f] p-5">
              <h4 className="mb-2 font-bold text-[#ffaa00]">🥁 Baterías</h4>
              <p className="text-sm leading-relaxed text-[#c0c0d0]">
                Set especial de micrófonos para grabación profesional de baterías.
                Una de las razones principales por las que incorporamos la mesa
                de 24 canales.
              </p>
            </div>

            <div className="rounded-lg border border-[#2a2a4a] bg-[#0a0a0f] p-5">
              <h4 className="mb-2 font-bold text-[#00ffff]">🎸 Bandas en vivo</h4>
              <p className="text-sm leading-relaxed text-[#c0c0d0]">
                Capacidad para grabar bandas completas en simultáneo,
                capturando la energía del directo con calidad de estudio.
              </p>
            </div>

            <div className="rounded-lg border border-[#2a2a4a] bg-[#0a0a0f] p-5">
              <h4 className="mb-2 font-bold text-[#ff00ff]">📡 Live streaming</h4>
              <p className="text-sm leading-relaxed text-[#c0c0d0]">
                Transmisión en vivo de tus sesiones de grabación y ensayos.
                Comparte tu proceso creativo con el mundo en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
