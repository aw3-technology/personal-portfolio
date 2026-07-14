export type Exploration = {
  id: number;
  title: string;
  category: string;
  gradient: string;
  span: string;
  mockup: string;
  image?: string;
};

export const explorations: Exploration[] = [
  {
    id: 1,
    title: "Kavanah — AI Project Management",
    category: "Product Design",
    gradient: "from-amber-500/30 via-stone-500/20 to-transparent",
    span: "md:col-span-2 md:row-span-2",
    mockup: "dashboard",
    image: "/projects/kavanah-hero.png",
  },
  {
    id: 2,
    title: "AW3 Host — Multi-Cloud Console",
    category: "Cloud Infrastructure",
    gradient: "from-sky-500/30 via-cyan-500/20 to-transparent",
    span: "md:col-span-2 md:row-span-2",
    mockup: "dashboard",
    image: "/projects/aw3-host-dashboard.png",
  },
  {
    id: 3,
    title: "Baird Augustine — Neo-Investment Bank",
    category: "Fintech Brand",
    gradient: "from-emerald-500/30 via-teal-500/20 to-transparent",
    span: "md:col-span-2 md:row-span-2",
    mockup: "landing",
    image: "/projects/baird-augustine-hero.png",
  },
  {
    id: 4,
    title: "OpenEye — Safety Guardian",
    category: "Computer Vision",
    gradient: "from-rose-500/30 via-pink-500/20 to-transparent",
    span: "md:col-span-2 md:row-span-2",
    mockup: "dashboard",
    image: "/projects/openeye-dashboard.png",
  },
  {
    id: 5,
    title: "CAGR Club — Brand Identity",
    category: "Branding",
    gradient: "from-amber-500/30 via-orange-500/20 to-transparent",
    span: "md:col-span-2 md:row-span-2",
    mockup: "brand",
    image: "/projects/cagr-club-brand.png",
  },
  {
    id: 6,
    title: "Kavanah — Board View",
    category: "Product Design",
    gradient: "from-fuchsia-500/30 via-purple-500/20 to-transparent",
    span: "md:col-span-2 md:row-span-2",
    mockup: "dashboard",
    image: "/projects/kavanah-board.png",
  },
  {
    id: 7,
    title: "InTown — AI Concierge",
    category: "AI Product",
    gradient: "from-zinc-400/30 via-stone-500/20 to-transparent",
    span: "md:col-span-2 md:row-span-2",
    mockup: "mobile",
    image: "/projects/intown-product.png",
  },
  {
    id: 8,
    title: "JustiGuide — AI Immigration Platform",
    category: "Legal Tech",
    gradient: "from-violet-500/30 via-purple-500/20 to-transparent",
    span: "md:col-span-2 md:row-span-2",
    mockup: "landing",
    image: "/projects/justiguide-product.png",
  },
  {
    id: 9,
    title: "CarrDealer — Dealer Mobile App",
    category: "Web3 Automotive",
    gradient: "from-emerald-500/30 via-teal-500/20 to-transparent",
    span: "md:col-span-2 md:row-span-2",
    mockup: "mobile",
    image: "/projects/carnomaly-carrdealer-app.png",
  },
  {
    id: 10,
    title: "CarrDealer — Service Opportunities",
    category: "Web3 Automotive",
    gradient: "from-teal-500/30 via-emerald-500/20 to-transparent",
    span: "md:col-span-2 md:row-span-2",
    mockup: "mobile",
    image: "/projects/carnomaly-carrdealer-hero.png",
  },
  {
    id: 11,
    title: "CarrGarage — Car Condition Report",
    category: "Web3 Automotive",
    gradient: "from-slate-500/30 via-zinc-500/20 to-transparent",
    span: "md:col-span-2 md:row-span-3",
    mockup: "mobile",
    image: "/projects/carnomaly-carrgarage-promo.png",
  },
];
