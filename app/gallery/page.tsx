import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import GalleryGrid from "@/components/GalleryGrid";
import { explorations } from "@/lib/explorations";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A complete gallery of selected product design, brand, and interface work.",
};

export default function GalleryPage() {
  return (
    <main className="bg-bg min-h-screen relative z-10">
      <Navbar />

      <section className="pt-36 pb-20 md:pb-28 px-6 md:px-10 lg:px-16 max-w-content mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="eyebrow-label inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-stroke" />
            Selected work
            <span className="w-8 h-px bg-stroke" />
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-text leading-[1.1]">
            The full <span className="font-display italic">gallery</span>
          </h1>
        </div>

        <GalleryGrid items={explorations} />
      </section>
    </main>
  );
}
