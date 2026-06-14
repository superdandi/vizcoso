import AnimateOnScroll from "@/components/AnimateOnScroll";
import { salaEnsayo } from "@/data/services";

const ParkingIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M9 7v10" />
    <path d="M9 7h4a3 3 0 0 1 0 6H9" />
  </svg>
);
const DoorIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="1" />
    <circle cx="16" cy="12" r="1.5" />
  </svg>
);
const WifiIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7" />
    <path d="M6 12l6-5 6 5" />
    <path d="M9 15l3-3 3 3" />
    <circle cx="12" cy="18" r="1.5" />
  </svg>
);
const AcIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="7" />
    <path d="M12 5v14M5 12h14" />
    <path d="M7.5 7.5l9 9M16.5 7.5l-9 9" />
  </svg>
);
const TvIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="19" x2="12" y2="21" />
  </svg>
);
const KitchenIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="14" width="18" height="4" rx="1" />
    <circle cx="8" cy="10" r="3" />
    <circle cx="16" cy="10" r="3" />
  </svg>
);
const BathIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="4" r="2" />
    <line x1="12" y1="6" x2="12" y2="16" />
    <path d="M8 14q4 6 8 0" />
  </svg>
);
const WaterIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l6 11a6 6 0 1 1-12 0z" />
  </svg>
);
const CoffeeIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="5" width="14" height="13" rx="2" />
    <path d="M16 8h1.5a2.5 2.5 0 0 1 0 5H16" />
    <path d="M8 2v2M12 2v2M16 2v2" />
  </svg>
);

const amenities = [
  { icon: <ParkingIcon />, label: "Estacionamiento privado" },
  { icon: <DoorIcon />, label: "Lobby" },
  { icon: <WifiIcon />, label: "WIFI" },
  { icon: <AcIcon />, label: "AA" },
  { icon: <TvIcon />, label: "SMART TV" },
  { icon: <KitchenIcon />, label: "Cocina" },
  { icon: <BathIcon />, label: "Baño privado" },
  { icon: <WaterIcon />, label: "Agua" },
  { icon: <CoffeeIcon />, label: "Café & Té" },
];

export default function SalaEnsayo() {
  return (
    <section className="border-t border-[#2a2a4a] bg-grid px-4 py-20">
      <AnimateOnScroll>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          <span data-text={salaEnsayo.title} className="glitch-text neon-title flicker-erratic glow-magenta">
            {salaEnsayo.title}
          </span>
        </h2>
        <p className="mb-6 text-[#8888aa]">
          Espacio amplio, equipado y acogedor para tus ensayos
        </p>
        <div className="inline-block rounded-lg border border-[#ff00ff] bg-black/30 backdrop-blur-sm px-12 py-6">
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
                className="card-scale-in flex flex-col items-center gap-1 rounded-lg border border-[#2a2a4a] bg-black/30 backdrop-blur-sm px-2 py-3"
              >
                <span className="flex items-center justify-center text-[#00ffff]">{a.icon}</span>
                <span className="text-xs text-[#8888aa]">{a.label}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs text-[#555]">
          Climatizado &bull; Equipo incluido &bull; Ambiente acogedor
        </p>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
