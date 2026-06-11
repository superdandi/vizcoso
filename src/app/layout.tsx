import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIZCOSO Entertainment — Estudio Musical & Producción",
  description:
    "Estudio de grabación, sala de ensayo, clases de música y producción audiovisual en Talca, Chile. Cultural Management & AV PRODUCTION.",
  icons: { icon: "/vizcoso/favicon.ico" },
  openGraph: {
    title: "VIZCOSO Entertainment",
    description:
      "Estudio de grabación, sala de ensayo, clases de música y producción audiovisual.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="scanline-overlay antialiased">{children}</body>
    </html>
  );
}
