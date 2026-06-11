import { serviciosGrabacion } from "@/data/services";

export default function Servicios() {
  return (
    <section id="servicios" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="glow-cyan mb-2 text-center text-3xl font-bold sm:text-4xl">
          Servicios de Grabación
        </h2>
        <p className="mb-12 text-center text-[#8888aa]">
          Estudio profesional equipado para tu proyecto musical
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviciosGrabacion.map((s, i) => (
            <div key={i} className="card-cyber rounded-lg p-6 transition-all">
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
    </section>
  );
}
