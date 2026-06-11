import { salaEnsayo } from "@/data/services";

const amenities = [
  { icon: "🅿️", label: "Estacionamiento privado" },
  { icon: "🚪", label: "Lobby" },
  { icon: "📶", label: "WIFI" },
  { icon: "❄️", label: "AA" },
  { icon: "📺", label: "SMART TV" },
  { icon: "🍳", label: "Cocina" },
  { icon: "🚿", label: "Baño privado" },
  { icon: "💧", label: "Agua" },
  { icon: "☕", label: "Café & Té" },
];

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

        <div className="mt-10">
          <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#ffaa00]">
            Amenidades
          </h3>
          <div className="mx-auto grid max-w-2xl grid-cols-3 gap-3 sm:gap-4">
            {amenities.map((a) => (
              <div
                key={a.label}
                className="flex flex-col items-center gap-1 rounded-lg border border-[#2a2a4a] bg-[#0a0a0f]/50 px-2 py-3 transition-colors hover:border-[#ff00ff]/50"
              >
                <span className="text-xl">{a.icon}</span>
                <span className="text-xs text-[#8888aa]">{a.label}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs text-[#555]">
          Climatizado &bull; Equipo incluido &bull; Ambiente acogedor
        </p>
      </div>
    </section>
  );
}
