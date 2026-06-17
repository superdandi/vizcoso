import Hero from "@/components/Hero";
import Sonido from "@/components/Sonido";
import Equipamiento from "@/components/Equipamiento";
import SalaEnsayo from "@/components/SalaEnsayo";
import VideoProduccion from "@/components/VideoProduccion";
import Reviews from "@/components/Reviews";
import Bandcamp from "@/components/Bandcamp";
import Contacto from "@/components/Contacto";
import SobreMi from "@/components/SobreMi";
import Formacion from "@/components/Formacion";

export default function Home() {
  return (
    <>
      <div id="landing-content">
        <Hero />
        <Sonido />
        <Equipamiento />
        <SalaEnsayo />
        <VideoProduccion />
        <Reviews />
        <Bandcamp />
        <Contacto />
        <SobreMi />
      </div>
      <div id="formacion-content">
        <Formacion />
      </div>
    </>
  );
}
