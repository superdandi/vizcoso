"use client";

import { useState } from "react";

const albums = [
  { id: 1993582687, title: "El Estilo de la Vieja en la Nueva Escuela", artist: "YOU VANNI" },
  { id: 1407978738, title: "Sabio Domingo", artist: "INACID" },
  { id: 2470567565, title: "ARTESUNO", artist: "Artesano" },
  { id: 2782766792, title: "Animales Atacamos Tu Ciudad", artist: "Animales" },
];

function ArrowSVG({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {direction === "left" ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  );
}

export default function Bandcamp() {
  const [current, setCurrent] = useState(0);
  const album = albums[current];

  const prev = () => setCurrent((c) => (c === 0 ? albums.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === albums.length - 1 ? 0 : c + 1));

  return (
    <section id="bandcamp" className="border-y border-[#2a2a4a] px-4 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="glow-magenta mb-2 text-3xl font-bold sm:text-4xl">
          Sello VIZCOSO
        </h2>
        <p className="mb-10 text-[#8888aa]">
          Escucha, descarga y apoya a los artistas en Bandcamp
        </p>

        <div className="mx-auto max-w-[700px] rounded-lg border border-[#2a2a4a]">
          <iframe
            key={album.id}
            style={{ border: 0, width: "100%", height: 680 }}
            src={`https://bandcamp.com/EmbeddedPlayer/album=${album.id}/size=large/bgcol=0a0a0f/linkcol=ff00ff/tracklist=false/transparent=true/`}
            seamless
            title={`${album.title} en Bandcamp`}
          />
        </div>

        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2a2a4a] text-[#8888aa] transition-colors hover:border-[#ff00ff] hover:text-[#ff00ff]"
            aria-label="Anterior"
          >
            <ArrowSVG direction="left" />
          </button>

          <span className="text-sm text-[#c0c0d0]">
            <span className="text-[#ff00ff]">{album.title}</span>
            {" — "}
            <span className="text-[#00ffff]">{album.artist}</span>
          </span>

          <button
            onClick={next}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2a2a4a] text-[#8888aa] transition-colors hover:border-[#ff00ff] hover:text-[#ff00ff]"
            aria-label="Siguiente"
          >
            <ArrowSVG direction="right" />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">
          {albums.map((_, i) => (
            <span
              key={i}
              className={`inline-block h-2 w-2 rounded-full transition-all ${
                i === current ? "bg-[#ff00ff] shadow-[0_0_6px_#ff00ff]" : "bg-[#2a2a4a]"
              }`}
            />
          ))}
        </div>

        <a
          href="https://vizcosoentertainment.bandcamp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-sm text-[#00ffff] transition-colors hover:text-[#ff00ff]"
        >
          Descubre el catálogo musical completo en Bandcamp →
        </a>
      </div>
    </section>
  );
}
