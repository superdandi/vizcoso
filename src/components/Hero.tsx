export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,0,255,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(0,255,255,0.1) 0%, transparent 50%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 vignette" />

      <div className="relative z-10 text-center">
<p className="mb-2 font-mono text-sm tracking-[0.3em] text-[#8888aa]">
    PRODUCCIÓN MUSICAL & AUDIOVISUAL • GESTIÓN CULTURAL
</p>

        <h1 className="relative">
          <span
            data-text="VIZCOSO"
            className="glitch-text neon-title inline-block text-6xl font-black tracking-wider sm:text-8xl md:text-9xl"
          >
            VIZCOSO
          </span>
        </h1>

        <div className="mt-3 flex flex-col items-center gap-1">
          <span className="glitch-text text-xs tracking-[0.3em] text-[#ffaa00]" data-text="★★★★★">★★★★★</span>
          <span className="glitch-text font-mono text-xs text-[#ffaa00]" data-text="5.0">5.0</span>
        </div>

        <p className="mt-4 max-w-xl font-mono text-sm uppercase tracking-[0.2em] text-[#8888aa]">
          Estudio de grabaci&oacute;n &bull; Salas de ensayo &bull; Formaci&oacute;n musical
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#sonido"
            className="card-glass card-glass-action card-glow card-glass-pulse rounded border border-[#2a2a4a] bg-black/30 backdrop-blur-sm px-8 py-2 text-sm font-semibold text-[#ff00ff] transition-all hover:border-[#ff00ff]/50"
          >
            Ver Sonido
          </a>
          <a
            href="#contacto"
            className="card-glass card-glass-action card-glow card-glass-pulse rounded border border-[#2a2a4a] bg-black/30 backdrop-blur-sm px-8 py-2 text-sm font-semibold text-[#00ffff] transition-all hover:border-[#ff00ff]/50"
          >
            Agenda tu sesi&oacute;n
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff00ff"
          strokeWidth="2"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
