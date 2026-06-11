export default function SobreMi() {
  return (
    <section id="sobre-mi" className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="glow-cyan mb-2 text-center text-3xl font-bold sm:text-4xl">
          Sobre Mí
        </h2>
        <p className="mb-10 text-center text-[#8888aa]">
          Detrás de VIZCOSO
        </p>

        <div className="card-cyber rounded-lg p-8 text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#ff00ff] bg-[#1a1a2e]">
            <span className="glow-magenta text-3xl font-black">V</span>
          </div>

          <h3 className="mb-2 text-xl font-bold text-[#00ffff]">
            Daniel Cobos
          </h3>
          <p className="mb-2 text-sm text-[#ffaa00]">
            Cyber Dandi &mdash; Músico &amp; Productor
          </p>
          <p className="mx-auto max-w-2xl leading-relaxed text-[#c0c0d0]">
            VIZCOSO Entertainment nace de la pasión por la música, la creación y
            el arte en todas sus formas. Un espacio en Talca donde artistas,
            bandas y creadores encuentran un lugar para dar vida a sus proyectos.
            Desde la grabación multipista hasta la producción audiovisual, cada
            servicio está pensado para potenciar tu talento en un ambiente
            acogedor y profesional.
          </p>
        </div>
      </div>
    </section>
  );
}
