import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="scroll-mt-14 border-t border-[#2a2a4a] px-4 py-24">
      <AnimateOnScroll>
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-3xl font-bold sm:text-4xl">
          <span data-text="Sobre Mí" className="glitch-text neon-title flicker-erratic glow-cyan">
            Sobre Mí
          </span>
        </h2>
        <p className="mb-10 text-center text-[#8888aa]">
          Detrás de VIZCOSO
        </p>

        <div className="card-glass card-glow rounded-lg border border-[#2a2a4a] bg-black/30 backdrop-blur-sm p-8 text-center">
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
          <p className="mx-auto max-w-2xl text-justify text-xs leading-relaxed text-body">
            Con formación en informática y múltiples talleres creativos y de
            gestión cultural, y más de dos décadas de experiencia en proyectos
            interdisciplinarios, fundé Vizcoso Entertainment como un espacio
            donde la música y la tecnología convergen para crear y potenciar
            proyectos artísticos. Mi trayectoria abarca desde la producción
            musical y audiovisual hasta la gestión de instalaciones informáticas,
            siempre orientada a fomentar la colaboración artística y el impacto
            cultural en la comunidad.
          </p>
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
