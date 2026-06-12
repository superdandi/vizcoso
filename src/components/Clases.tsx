import AnimateOnScroll from "@/components/AnimateOnScroll";
import { clasesMusica } from "@/data/services";

export default function Clases() {
  return (
    <section id="clases" className="border-t border-[#2a2a4a] bg-grid px-4 py-24">
      <AnimateOnScroll animation="fade-left">
      <div className="mx-auto max-w-4xl">
        <h2 className="glow-cyan mb-2 text-center text-3xl font-bold sm:text-4xl">
          Formación Musical
        </h2>
        <p className="mb-12 text-center text-[#8888aa]">
          Clases presenciales personalizadas para todos los niveles
        </p>

        <div className="overflow-hidden rounded-lg border border-[#2a2a4a]">
          {clasesMusica.map((c, i) => (
            <div
              key={i}
              className={`card-fade-left flex items-center justify-between px-6 py-4 ${
                i % 2 === 0 ? "bg-[#1a1a2e]" : "bg-[#16163a]"
              }`}
            >
              <span className="font-medium">{c.name}</span>
              <span className="font-bold text-[#ff00ff]">{c.price}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-[#8888aa]">
          Valor por hora &bull; Clases presenciales en Talca
        </p>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
