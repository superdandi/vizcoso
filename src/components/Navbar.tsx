"use client";

import { useState } from "react";

const sections = [
  { id: "servicios", label: "Servicios" },
  { id: "clases", label: "Clases" },
  { id: "video", label: "Video" },
  { id: "reviews", label: "Reviews" },
  { id: "bandcamp", label: "Sello" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#2a2a4a] bg-[#0a0a0f]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button
          onClick={() => scrollTo("hero")}
          className="glow-magenta text-lg font-bold tracking-widest"
        >
          VIZCOSO
        </button>

        <div className="hidden gap-6 md:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="text-sm text-[#8888aa] transition-colors hover:text-[#00ffff]"
            >
              {s.label}
            </button>
          ))}
        </div>

        <button
          className="text-[#00ffff] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? "✕" : "≡"}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#2a2a4a] bg-[#0a0a0f] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-left text-sm text-[#8888aa] transition-colors hover:text-[#00ffff]"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
