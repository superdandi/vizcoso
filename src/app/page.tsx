import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Equipamiento from "@/components/Equipamiento";
import SalaEnsayo from "@/components/SalaEnsayo";
import VideoProduccion from "@/components/VideoProduccion";
import Reviews from "@/components/Reviews";
import Bandcamp from "@/components/Bandcamp";
import SobreMi from "@/components/SobreMi";
import Contacto from "@/components/Contacto";
import Clases from "@/components/Clases";

export default function Home() {
  return (
    <>
      <div id="landing-content">
        <Hero />
        <Servicios />
        <Equipamiento />
        <SalaEnsayo />
        <VideoProduccion />
        <Reviews />
        <Bandcamp />
        <SobreMi />
        <Contacto />
      </div>
      <div id="clases-content">
        <Clases />
      </div>
    </>
  );
}
