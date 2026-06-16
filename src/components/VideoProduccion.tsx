import AnimateOnScroll from "@/components/AnimateOnScroll";
import { videoServicios } from "@/data/services";

export default function VideoProduccion() {
  return (
    <section id="video" className="scroll-mt-14 border-t border-[#2a2a4a] px-4 py-24">
      <AnimateOnScroll>
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-3xl font-bold sm:text-4xl">
          <span data-text="Producción de Video" className="glitch-text neon-title flicker-erratic glow-magenta">
            Producción de Video
          </span>
        </h2>
        <p className="mb-12 text-center text-[#8888aa]">
          Capturamos tu arte en movimiento
        </p>
        <p className="mb-10 text-center text-sm tracking-[0.15em] text-[#ffaa00]">
          MULTICAM &middot; HD &middot; Full HD &middot; 4K &middot; HDR &middot; 44.1K &middot; 48K &middot; 24b &middot; Stereo
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {videoServicios.map((v, i) => (
            <div key={i} className="card-glass card-glow card-fade-up rounded-lg border border-[#2a2a4a] bg-black/30 backdrop-blur-sm p-6">
              <h3 className="mb-3 text-lg font-bold text-[#00ffff]">
                {v.title}
              </h3>
              {v.features ? (
                <ul className="mb-3 space-y-1 text-sm leading-relaxed text-body">
                  {v.features.map((f, j) => (
                    <li key={j}>{"\u2022"} {f}</li>
                  ))}
                </ul>
              ) : (
                <p className="mb-3 text-sm text-body">{v.description}</p>
              )}
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
