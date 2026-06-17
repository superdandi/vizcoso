"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const sections = [
  { id: "sonido", label: "Sonido" },
  { id: "equipamiento", label: "Equipamiento" },
  { id: "sala-ensayo", label: "Sala de Ensayo" },
  { id: "video", label: "Video" },
  { id: "clases", label: "Clases" },
  { id: "reviews", label: "Opiniones" },
  { id: "bandcamp", label: "Sello" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isLanding = pathname === "/";
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [clasesMode, setClasesMode] = useState(false);

  useEffect(() => {
    setClasesMode(window.location.search.includes("view=clases"));
    if (window.location.search.includes("view=clases"))
      document.body.classList.add("clases-mode");
  }, []);

  useEffect(() => {
    if (clasesMode) {
      document.body.classList.add("clases-mode");
    } else {
      document.body.classList.remove("clases-mode");
    }
  }, [clasesMode]);

  useEffect(() => {
    if (!isLanding || clasesMode) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-80px 0px -50% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isLanding, clasesMode]);

  const scrollTo = (id: string) => {
    setOpen(false);

    if (id === "clases") {
      if (!clasesMode) {
        setActiveSection("clases");
        setClasesMode(true);
        history.replaceState(null, "", "/?view=clases");
        window.scrollTo(0, 0);
      }
      return;
    }

    if (clasesMode) {
      setActiveSection(id);
      setClasesMode(false);
      history.replaceState(null, "", "/#" + id);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }

    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#2a2a4a] bg-[#0a0a0f]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button
          onClick={() => {
            setOpen(false);
            if (clasesMode) {
              setClasesMode(false);
              history.replaceState(null, "", "/");
            }
            setActiveSection("");
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="glow-magenta text-lg font-bold tracking-widest"
        >
          VIZCOSO
        </button>

        <div className="hidden gap-6 md:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              data-text={s.label}
              className={`transition-all duration-300 ${
                activeSection === s.id
                  ? "glow-magenta text-white"
                  : "text-sm text-[#8888aa] nav-link"
              }`}
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
        <div className="border-t border-[#2a2a4a] bg-black/30 backdrop-blur-sm px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                data-text={s.label}
                className={`text-left transition-all duration-300 ${
                  activeSection === s.id
                    ? "glow-magenta text-white"
                    : "text-sm text-[#8888aa] nav-link"
                }`}
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
