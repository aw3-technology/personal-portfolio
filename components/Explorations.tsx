"use client";

import GalleryGrid from "./GalleryGrid";
import { explorations } from "@/lib/explorations";
import SectionHeader from "./ui/SectionHeader";

// Show an even number of items on the landing page; the rest live on /gallery.
const evenCount = explorations.length - (explorations.length % 2);
const featured = explorations.slice(0, evenCount);

export default function Explorations() {
  return (
    <section
      id="explorations"
      className="relative bg-bg py-16 md:py-24"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <SectionHeader
          label="Selected work"
          title={<span className="font-display italic">Gallery</span>}
        />

        <GalleryGrid items={featured} allHref="/gallery" />

      </div>
    </section>
  );
}
