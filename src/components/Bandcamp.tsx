"use client";

import { useState, useCallback, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
  type CarouselApi,
} from "@/components/ui/carousel";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const albums = [
  { id: 1993582687, title: "El Estilo de la Vieja en la Nueva Escuela", artist: "YOU VANNI", artUrl: "https://f4.bcbits.com/img/a3095031764_16.jpg" },
  { id: 1407978738, title: "Sabio Domingo", artist: "INACID", artUrl: "https://f4.bcbits.com/img/a2794208570_16.jpg" },
  { id: 2470567565, title: "ARTESUNO", artist: "Artesano", artUrl: "https://f4.bcbits.com/img/a0539582260_16.jpg" },
  { id: 2782766792, title: "Animales Atacamos Tu Ciudad", artist: "Animales", artUrl: "https://f4.bcbits.com/img/a0992497256_16.jpg" },
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
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

  return (
    <>
      {canScrollPrev && (
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#2a2a4a] bg-[#0a0a0f]/80 text-[#8888aa] backdrop-blur transition-colors hover:border-[#ff00ff] hover:text-[#ff00ff]"
          aria-label="Anterior"
        >
          <ArrowSVG direction="left" />
        </button>
      )}
      {canScrollNext && (
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#2a2a4a] bg-[#0a0a0f]/80 text-[#8888aa] backdrop-blur transition-colors hover:border-[#ff00ff] hover:text-[#ff00ff]"
          aria-label="Siguiente"
        >
          <ArrowSVG direction="right" />
        </button>
      )}
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
    <section id="bandcamp" className="scroll-mt-14 border-t border-[#2a2a4a] px-4 py-24">
      <AnimateOnScroll>
        <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-2 text-3xl font-bold sm:text-4xl">
          <span data-text="Sello VIZCOSO" className="glitch-text neon-title flicker-erratic glow-magenta">
            Sello VIZCOSO
          </span>
        </h2>
        <p className="mb-2 text-[#8888aa]">
          Identidad propia, libertad creativa
        </p>
        <p className="mb-10 text-sm text-[#c0c0d0]">
          Sello musical enfocado en la producción independiente. Distribuimos y promovemos el trabajo de artistas emergentes con identidad propia y libertad creativa.
        </p>
        <p className="mb-10 text-xs text-[#ffaa00] tracking-wide">
          4 &aacute;lbumes lanzados &middot; YOU VANNI &middot; INACID &middot; Artesano &middot; Animales &middot; Producci&oacute;n independiente desde Talca
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
                className={`basis-[calc(100%-90px)] px-[15px] ${
                  i !== current
                    ? "pointer-events-none opacity-30 blur-[2px] saturate-0"
                    : ""
                }`}
              >
                <div className="relative h-[700px]">
                  <iframe
                    className={`absolute inset-0 w-full border-0 ${
                      i !== current ? "pointer-events-none opacity-0" : ""
                    }`}
                    style={{ height: 700 }}
                    src={i === current ? `https://bandcamp.com/EmbeddedPlayer/album=${a.id}/size=large/bgcol=0a0a0f/linkcol=ff00ff/tracklist=true/transparent=true/` : "about:blank"}
                    seamless
                    title={`${a.title} en Bandcamp`}
                  />
                  <img
                    src={a.artUrl}
                    alt={a.title}
                    className={`absolute inset-0 h-full w-full object-cover ${
                      i === current ? "pointer-events-none opacity-0" : ""
                    }`}
                  />
                </div>
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
      </AnimateOnScroll>
    </section>
  );
}
