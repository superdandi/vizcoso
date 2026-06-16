import type { Metadata } from "next";
import "./globals.css";
import { Inter, Rajdhani, VT323 } from "next/font/google";
import { cn } from "@/lib/utils";
import DigitalRain from "@/components/DigitalRain";
import ProximityGlow from "@/components/ProximityGlow";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});
const rajdhani = Rajdhani({subsets:['latin'],weight:['300','400','500','600','700'],variable:'--font-heading'});
const vt323 = VT323({subsets:['latin'],weight:'400',variable:'--font-mono'});

export const metadata: Metadata = {
  title: "VIZCOSO Entertainment — Estudio Musical & Producción",
  description:
    "Estudio de grabación, salas de ensayo y formación musical en Talca, Chile. Producción Musical & Audiovisual • Gestión Cultural.",
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
    <html lang="es" className={cn("scroll-smooth", "font-sans", inter.variable, rajdhani.variable, vt323.variable, "dark")}>
      <body className="scanline-overlay antialiased">
        <DigitalRain />
        <ProximityGlow />
        {children}
      </body>
    </html>
  );
}
