import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import Journey from "@/components/Explorations";
import Explorations from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main-content" className="bg-bg min-h-screen">
      <Hero />
      <SelectedWorks />
      <Journey />
      <Explorations />
      <Contact />
    </main>
  );
}