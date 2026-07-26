// A continuously-scrolling wall of white brand logos. Rendered on a fixed dark
// band so the white marks stay legible in both light and dark themes.

type Logo = { name: string; src: string };

const logos: Logo[] = [
  { name: "AW3 Technology", src: "/logos/aw3.png" },
  { name: "UC Santa Barbara", src: "/logos/ucsb.png" },
  { name: "Learna", src: "/logos/learna.png" },
  { name: "Gap", src: "/logos/gap.png" },
  { name: "Cisco", src: "/logos/cisco.png" },
  { name: "Genentech", src: "/logos/genentech.png" },
  { name: "Saama Technologies", src: "/logos/saama.png" },
];

// Duplicated so the marquee can loop seamlessly at translateX(-50%).
const track = [...logos, ...logos];

export default function LogoMarquee() {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e0e12] py-8 md:py-10"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="group flex w-max items-center gap-12 md:gap-20 px-7 md:px-12 animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {track.map((logo, index) => (
          // Each logo sits in an equal-size slot so square and ultra-wide marks
          // share the same visual footprint instead of scaling by aspect ratio.
          <div
            key={`${logo.name}-${index}`}
            className="flex h-8 w-28 md:h-10 md:w-36 shrink-0 items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.name}
              aria-hidden={index >= logos.length}
              loading="lazy"
              decoding="async"
              className="max-h-full max-w-full w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
