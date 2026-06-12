import AnimateOnScroll from "@/components/AnimateOnScroll";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  return (
    <section id="reviews" className="border-t border-[#2a2a4a] px-4 py-24">
      <AnimateOnScroll>
      <div className="mx-auto max-w-6xl">
        <h2 className="glow-cyan mb-2 text-center text-3xl font-bold sm:text-4xl">
          Opiniones
        </h2>
        <p className="mb-12 text-center text-[#8888aa]">
          Lo que dicen quienes ya han vivido la experiencia VIZCOSO
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="card-cyber flex flex-col rounded-lg p-6">
              <div className="mb-3 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span
                    key={j}
                    className={`text-sm ${
                      j < r.rating ? "text-[#ffaa00]" : "text-[#3a3a5a]"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-[#c0c0d0]">
                &ldquo;{r.text}&rdquo;
              </p>

              <div className="border-t border-[#2a2a4a] pt-3">
                <p className="text-sm font-semibold">{r.name}</p>
                <p className="text-xs text-[#8888aa]">{r.date}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[#8888aa]">
          Basado en 15 opiniones en Google &mdash; Calificación promedio: 5.0 ★
        </p>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
