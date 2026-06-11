import { videoServicios } from "@/data/services";

export default function VideoProduccion() {
  return (
    <section id="video" className="border-y border-[#2a2a4a] px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="glow-magenta mb-2 text-center text-3xl font-bold sm:text-4xl">
          Producción de Video
        </h2>
        <p className="mb-12 text-center text-[#8888aa]">
          Capturamos tu arte en movimiento
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {videoServicios.map((v, i) => (
            <div key={i} className="card-cyber rounded-lg p-6 transition-all">
              <h3 className="mb-3 text-lg font-bold text-[#00ffff]">
                {v.title}
              </h3>
              {v.note && (
                <p className="mb-2 text-xs italic text-[#ffaa00]">{v.note}</p>
              )}
              <p className="text-xl font-bold text-[#ff00ff]">{v.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
