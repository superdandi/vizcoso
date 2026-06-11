export default function Bandcamp() {
  return (
    <section
      id="bandcamp"
      className="border-y border-[#2a2a4a] px-4 py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="glow-magenta mb-2 text-3xl font-bold sm:text-4xl">
          Sello VIZCOSO
        </h2>
        <p className="mb-10 text-[#8888aa]">
          Descubre el catálogo musical en Bandcamp
        </p>

        <div className="mx-auto max-w-[700px] overflow-hidden rounded-lg border border-[#2a2a4a]">
          <iframe
            style={{ border: 0, width: "100%", height: 470 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=1993582687/size=large/bgcol=0a0a0f/linkcol=ff00ff/tracklist=true/transparent=true/"
            seamless
            title="VIZCOSO en Bandcamp"
          />
        </div>

        <a
          href="https://vizcosoentertainment.bandcamp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-sm text-[#00ffff] transition-colors hover:text-[#ff00ff]"
        >
          Ver catálogo completo →
        </a>
      </div>
    </section>
  );
}
