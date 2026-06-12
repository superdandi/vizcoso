"use client";

import { useState, useCallback, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
  type CarouselApi,
} from "@/components/ui/carousel";

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

function OverlayArrows() {
  const { scrollPrev, scrollNext } = useCarousel();

  return (
    <>
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#2a2a4a] bg-[#0a0a0f]/80 text-[#8888aa] backdrop-blur transition-colors hover:border-[#ff00ff] hover:text-[#ff00ff]"
        aria-label="Anterior"
      >
        <ArrowSVG direction="left" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#2a2a4a] bg-[#0a0a0f]/80 text-[#8888aa] backdrop-blur transition-colors hover:border-[#ff00ff] hover:text-[#ff00ff]"
        aria-label="Siguiente"
      >
        <ArrowSVG direction="right" />
      </button>
    </>
  );
}

export default function Bandcamp() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    setCurrent(carouselApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    onSelect(api);
    return () => { api.off("select", onSelect); };
  }, [api, onSelect]);

  return (
    <section id="bandcamp" className="border-y border-[#2a2a4a] px-4 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="glow-magenta mb-2 text-3xl font-bold sm:text-4xl">
          Sello VIZCOSO
        </h2>
        <p className="mb-10 text-[#8888aa]">
          Escucha, descarga y apoya a los artistas en Bandcamp
        </p>

        <Carousel
          opts={{ align: "center" }}
          setApi={setApi}
          className="mx-auto max-w-[820px]"
        >
          <CarouselContent className="ml-0">
            {albums.map((a, i) => (
              <CarouselItem
                key={a.id}
                className={`pl-0 basis-[calc(100%-120px)] transition-all duration-300 ${
                  i !== current
                    ? "pointer-events-none opacity-30 blur-[2px] saturate-0"
                    : ""
                }`}
              >
                <iframe
                  style={{ border: 0, width: "100%", height: 700 }}
                  src={`https://bandcamp.com/EmbeddedPlayer/album=${a.id}/size=large/bgcol=0a0a0f/linkcol=ff00ff/tracklist=true/transparent=true/`}
                  seamless
                  title={`${a.title} en Bandcamp`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <OverlayArrows />
        </Carousel>

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
