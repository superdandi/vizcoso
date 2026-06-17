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
import ViewSwitch from "@/components/ViewSwitch";

export default function Home() {
  return (
    <ViewSwitch
      normal={
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
      }
      viewClases={<Clases />}
    />
  );
}
