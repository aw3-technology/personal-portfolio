import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import WorkCarousel from "@/components/WorkCarousel";
import Journey from "@/components/Journey";
import Explorations from "@/components/Explorations";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main-content" className="bg-bg min-h-screen">
      <Hero />
      <SelectedWorks />
      <WorkCarousel />
      <Journey />
      <Explorations />
      <Contact />
    </main>
  );
}