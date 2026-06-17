import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Equipamiento from "@/components/Equipamiento";
import SalaEnsayo from "@/components/SalaEnsayo";
import VideoProduccion from "@/components/VideoProduccion";
import Reviews from "@/components/Reviews";
import Bandcamp from "@/components/Bandcamp";
import SobreMi from "@/components/SobreMi";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicios />
      <Equipamiento />
      <SalaEnsayo />
      <VideoProduccion />
      <Reviews />
      <Bandcamp />
      <SobreMi />
      <Contacto />
    </>
  );
}
