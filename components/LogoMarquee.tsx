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
      <div className="group flex w-max items-center gap-14 md:gap-24 px-7 md:px-12 animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {track.map((logo, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`${logo.name}-${index}`}
            src={logo.src}
            alt={logo.name}
            aria-hidden={index >= logos.length}
            loading="lazy"
            decoding="async"
            className="h-7 md:h-9 w-auto shrink-0 object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  );
}
