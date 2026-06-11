import { salaEnsayo } from "@/data/services";

export default function SalaEnsayo() {
  return (
    <section className="border-y border-[#2a2a4a] px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="glow-magenta mb-4 text-3xl font-bold sm:text-4xl">
          {salaEnsayo.title}
        </h2>
        <p className="mb-6 text-[#8888aa]">
          Espacio amplio, equipado y acogedor para tus ensayos
        </p>
        <div className="inline-block rounded-lg border border-[#ff00ff] bg-[#1a1a2e] px-12 py-6">
          <span className="text-5xl font-black text-[#00ffff]">
            {salaEnsayo.price}
          </span>
          <span className="ml-2 text-lg text-[#8888aa]">
            {salaEnsayo.unit}
          </span>
        </div>
        <p className="mt-4 text-xs text-[#8888aa]">
          Sala climatizada &bull; Equipo incluido &bull; Ambiente acogedor
        </p>
      </div>
    </section>
  );
}
