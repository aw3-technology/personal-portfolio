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
];
