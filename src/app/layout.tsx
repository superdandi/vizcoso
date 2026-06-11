import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIZCOSO Entertainment — Estudio Musical & Producción",
  description:
    "Estudio de grabación, salas de ensayo y formación musical en Talca, Chile. Gestión Cultural & Producción Musical y Audiovisual.",
  icons: { icon: "/vizcoso/favicon.ico" },
  openGraph: {
    title: "VIZCOSO Entertainment",
    description:
      "Estudio de grabación, salas de ensayo y formación musical en Talca, Chile.",
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
