import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import BladeRunnerRain from "@/components/BladeRunnerRain";
import DigitalRain from "@/components/DigitalRain";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="es" className={cn("scroll-smooth", "font-sans", geist.variable, "dark")}>
      <body className="scanline-overlay antialiased">
        {/* Reemplazo: solo BladeRunnerRain — DigitalRain comentado */}
        {/* <DigitalRain /> */}
        <BladeRunnerRain />
        {children}
      </body>
    </html>
  );
}
