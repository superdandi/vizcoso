export default function Footer() {
  return (
    <footer className="px-4 py-12">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center gap-6">
          <a
            href="https://youtube.com/@vizcoso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8888aa] transition-colors hover:text-[#ff00ff]"
            aria-label="YouTube"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

          <a
            href="https://vizcosoentertainment.bandcamp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8888aa] transition-colors hover:text-[#ff00ff]"
            aria-label="Bandcamp"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" />
            </svg>
          </a>

          <a
            href="https://twitch.tv/vizcoso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8888aa] transition-colors hover:text-[#ff00ff]"
            aria-label="Twitch"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.428l-3 3v-3H6.857V1.714h13.714z" />
            </svg>
          </a>

          <a
            href="https://instagram.com/vizcosoentertainment"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8888aa] transition-colors hover:text-[#ff00ff]"
            aria-label="Instagram"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>

        <a
          href="https://maps.google.com?q=Vizcoso+Entertainment+Talca"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-flex items-center gap-2 text-sm text-[#8888aa] transition-colors hover:text-[#00ffff]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 8 16 8 16s8-10.75 8-16c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
          </svg>
          Ver en Google Maps
        </a>

        <p className="text-xs text-[#555]">
          &copy; {new Date().getFullYear()} VIZCOSO Entertainment &mdash; Talca,
          Chile
        </p>
        <p className="mt-1 text-xs text-[#444]">
          Cultural Management &bull; AV PRODUCTION
        </p>
      </div>
    </footer>
  );
}
