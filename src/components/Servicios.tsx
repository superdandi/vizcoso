import AnimateOnScroll from "@/components/AnimateOnScroll";
import { serviciosGrabacion } from "@/data/services";

export default function Servicios() {
  return (
      <section id="servicios" className="scroll-mt-14 border-t border-[#2a2a4a] px-4 py-24">
      <AnimateOnScroll>
        <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-3xl font-bold sm:text-4xl">
          <span data-text="Servicios de Grabación" className="glitch-text neon-title flicker-erratic glow-cyan">
            Servicios de Grabación
          </span>
        </h2>
        <p className="mb-12 text-center text-[#8888aa]">
          Estudio equipado para tu proyecto musical
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviciosGrabacion.map((s, i) => (
            <div key={i} className="card-fade-up rounded-lg border border-[#2a2a4a] bg-black/30 backdrop-blur-sm p-6">
              <h3 className="mb-2 text-lg font-bold text-[#ff00ff]">
                {s.title}
              </h3>
              <p className="mb-3 text-sm text-[#8888aa]">{s.description}</p>
              {s.note && (
                <p className="mb-2 text-xs italic text-[#ffaa00]">{s.note}</p>
              )}
              <p className="text-xl font-bold text-[#00ffff]">{s.price}</p>
            </div>
          ))}
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
