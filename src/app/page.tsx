import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Equipamiento from "@/components/Equipamiento";
import SalaEnsayo from "@/components/SalaEnsayo";
import Clases from "@/components/Clases";
import VideoProduccion from "@/components/VideoProduccion";
import Reviews from "@/components/Reviews";
import Bandcamp from "@/components/Bandcamp";
import SobreMi from "@/components/SobreMi";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Equipamiento />
        <SalaEnsayo />
        <Clases />
        <VideoProduccion />
        <Reviews />
        <Bandcamp />
        <SobreMi />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
