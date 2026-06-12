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
          <img
            src="https://yt3.googleusercontent.com/hqEmfAGrHDxRmnDekC_6CmoBsSNcFdXvqzMA92Xw5qJr30BLswXNdYKPi3aDv6AsEO69PMvS=s900-c-k-c0x00ffffff-no-rj"
            alt="Vizcoso Entertainment"
            className="mx-auto mb-6 h-24 w-24 rounded-full border-2 border-[#ff00ff] object-cover"
          />

          <h3 className="mb-2 text-xl font-bold text-[#00ffff]">
            Daniel Cobos
          </h3>
          <p className="mb-4 text-sm text-[#ffaa00]">
            Músico, productor y gestor cultural
          </p>
          <p className="mx-auto max-w-2xl leading-relaxed text-[#c0c0d0]">
            Músico, productor y gestor cultural de Talca, Región del Maule. Con
            formación en informática y más de dos décadas de experiencia en
            proyectos interdisciplinarios, fundé Vizcoso Entertainment como un
            espacio donde la música, la tecnología y la narrativa visual
            convergen para crear y potenciar proyectos artísticos. Mi trayectoria
            abarca desde la gestión operativa de instalaciones informáticas hasta
            la producción musical y audiovisual, siempre orientada a fomentar la
            colaboración artística y el impacto cultural en la comunidad.
          </p>
        </div>
      </div>
    </section>
  );
}
