import AnimateOnScroll from "@/components/AnimateOnScroll";
import { videoServicios } from "@/data/services";

export default function VideoProduccion() {
  return (
    <section id="video" className="border-t border-[#2a2a4a] bg-grid px-4 py-24">
      <AnimateOnScroll>
      <div className="mx-auto max-w-6xl">
        <h2 className="glow-magenta mb-2 text-center text-3xl font-bold sm:text-4xl">
          Producción de Video
        </h2>
        <p className="mb-12 text-center text-[#8888aa]">
          Capturamos tu arte en movimiento
        </p>
        <p className="mb-10 text-center text-sm tracking-[0.15em] text-[#ffaa00]">
          MULTICAM &middot; HD &middot; Full HD &middot; 4K &middot; HDR &middot; 44.1K &middot; 48K &middot; 24b &middot; Stereo
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {videoServicios.map((v, i) => (
            <div key={i} className="card-cyber card-fade-up rounded-lg p-6 transition-all">
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
      </AnimateOnScroll>
    </section>
  );
}
