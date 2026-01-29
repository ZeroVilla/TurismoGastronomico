// app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import AudioSection from "./components/AudioSection";
import GaleriaSection from "./components/GaleriaSection";
import PlatosSection from "./components/PlatosSection";
import VideoSection from "./components/VideoSection";
import RestaurantesSection from "./components/RestaurantesSection";
import ContactoSection from "./components/ContactoSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <AudioSection />
      <GaleriaSection />
      <PlatosSection />
      <VideoSection />
      <RestaurantesSection />
      <ContactoSection />
      <Footer />
    </>
  );
}
