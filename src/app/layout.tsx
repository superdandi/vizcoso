import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import DigitalRain from "@/components/DigitalRain";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "VIZCOSO Entertainment — Estudio Musical & Producción",
  description:
    "Estudio de grabación, salas de ensayo y formación musical en Talca, Chile. Gestión Cultural & Producción Musical y Audiovisual.",
  icons: { icon: "/vizcoso/favicon.png" },
  other: { "theme-color": "#0a0a0f" },
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
    <html lang="es" className={cn("scroll-smooth", "font-sans", geist.variable, "dark")}>
      <body className="scanline-overlay antialiased">
        <DigitalRain />
        {children}
      </body>
    </html>
  );
}
