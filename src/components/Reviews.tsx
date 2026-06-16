import AnimateOnScroll from "@/components/AnimateOnScroll";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-14 border-t border-[#2a2a4a] px-4 py-24">
      <AnimateOnScroll animation="scale-in">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-3xl font-bold sm:text-4xl">
          <span data-text="Opiniones" className="glitch-text neon-title flicker-erratic glow-cyan">
            Opiniones
          </span>
        </h2>
        <p className="mb-12 text-center text-[#8888aa]">
          Lo que dicen quienes ya han vivido la experiencia VIZCOSO
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="card-glass card-glow card-scale-in flex flex-col rounded-lg border border-[#2a2a4a] bg-black/30 backdrop-blur-sm p-6">
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

              <p className="mb-4 flex-1 text-sm leading-relaxed text-body">
                &ldquo;{r.text}&rdquo;
              </p>

              <div className="border-t border-[#2a2a4a] pt-3">
                <p className="text-sm font-semibold">{r.name}</p>
                <p className="text-xs text-[#8888aa]">{r.date}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[#666]">
          Basado en {reviews.length} opiniones &bull; Promedio: 5.0 ★
        </p>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
