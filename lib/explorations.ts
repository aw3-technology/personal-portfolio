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
    title: "Dashboard Concept",
    category: "UI Design",
    gradient: "from-violet-500/30 via-indigo-500/20 to-transparent",
    span: "md:col-span-2 md:row-span-2",
    mockup: "dashboard",
    image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=1600&h=900&fit=crop",
  },
  {
    id: 2,
    title: "Mobile Banking",
    category: "App Design",
    gradient: "from-rose-500/30 via-pink-500/20 to-transparent",
    span: "md:col-span-2 md:row-span-2",
    mockup: "mobile",
    image: "https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?w=1600&h=900&fit=crop",
  },
  {
    id: 3,
    title: "E-commerce",
    category: "Web Design",
    gradient: "from-emerald-500/30 via-teal-500/20 to-transparent",
    span: "md:col-span-2 md:row-span-2",
    mockup: "ecommerce",
    image: "https://images.unsplash.com/photo-1636955840493-f43a02bfa064?w=1600&h=900&fit=crop",
  },
  {
    id: 4,
    title: "Brand Identity",
    category: "Branding",
    gradient: "from-amber-500/30 via-orange-500/20 to-transparent",
    span: "md:col-span-2 md:row-span-2",
    mockup: "brand",
    image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=1600&h=900&fit=crop",
  },
  {
    id: 5,
    title: "SaaS Landing",
    category: "Web Design",
    gradient: "from-cyan-500/30 via-blue-500/20 to-transparent",
    span: "md:col-span-2 md:row-span-2",
    mockup: "landing",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&h=900&fit=crop",
  },
  {
    id: 6,
    title: "Fintech App",
    category: "App Design",
    gradient: "from-fuchsia-500/30 via-purple-500/20 to-transparent",
    span: "md:col-span-2 md:row-span-2",
    mockup: "fintech",
    image: "https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?w=1600&h=900&fit=crop",
  },
];
