export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,0,255,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(0,255,255,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 text-center">
        <p className="mb-2 text-sm tracking-[0.3em] text-[#8888aa]">
            GESTIÓN CULTURAL &bull; PRODUCCIÓN MUSICAL &amp; AUDIOVISUAL
        </p>

        <h1 className="relative">
          <span
            data-text="VIZCOSO"
            className="glitch-text neon-title inline-block text-6xl font-black tracking-wider sm:text-8xl md:text-9xl"
          >
            VIZCOSO
          </span>
        </h1>

        <p className="mt-4 max-w-xl text-lg text-[#8888aa]">
          Estudio de grabación &bull; Sala de ensayo &bull; Clases musicales
          &bull; Producción audiovisual
        </p>

        <p className="mt-1 text-sm text-[#ffaa00]">Talca, Chile</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#servicios"
            className="rounded border border-[#ff00ff] px-6 py-2 text-sm font-semibold text-[#ff00ff] transition-all hover:bg-[#ff00ff] hover:text-black"
          >
            Ver servicios
          </a>
          <a
            href="#contacto"
            className="rounded border border-[#00ffff] px-6 py-2 text-sm font-semibold text-[#00ffff] transition-all hover:bg-[#00ffff] hover:text-black"
          >
            Contáctame
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
