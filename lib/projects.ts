export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  role: string;
  year: string;
  tags: string[];
  metrics: string[];
  image?: string;
  caseStudyImage?: string;
  tagline?: string;
  gradient: string;
  problem: string;
  process: string;
  solution: string;
  outcome: string;
  meta?: { label: string; value: string | string[] }[];
  caseStudy?: {
    blocks: CaseStudyBlock[];
    layout?: CaseStudyLayout[];
  };
};

export type CaseStudyBlock =
  | {
      type: "heading";
      text: string;
      level?: 2 | 3;
      eyebrow?: string;
    }
  | {
      type: "callout";
      text: string;
      tone?: "quote" | "metric";
      label?: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "image";
      label: string;
      src?: string;
      alt?: string;
      aspect?: "video" | "4/3" | "3/2" | "square";
    };

export type CaseStudyLayout =
  | {
      type: "split";
      heading?: string;
      content: CaseStudyBlock[];
      media?: CaseStudyBlock[];
      flip?: boolean;
    }
  | { type: "grid"; heading?: string; items: CaseStudyBlock[] }
  | { type: "timeline"; heading?: string; steps: { title: string; body: string }[] }
  | { type: "stack"; heading?: string; blocks: CaseStudyBlock[] };

export const projects: Project[] = [
  {
    slug: "rezi-ai",
    title: "REZI.AI Landing Page",
    category: "Landing Page",
    summary:
      "Designed a clean, conversion-first landing page for REZI.AI, an AI music experience for fast calm.",
    role: "Product Designer",
    year: "2025",
    tags: ["Landing Page", "UI Design", "Wellness", "AI"],
    metrics: ["2-day delivery", "3 iterations", "Client approved"],
    image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=1600&h=900&fit=crop",
    caseStudyImage: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=1600&h=900&fit=crop",
    tagline: "Turn a few words into instant calm",
    gradient: "from-sky-500 via-blue-400/60 to-bg",
    problem:
      "REZI.AI needed a landing page that explains the product in seconds, feels calming without cliches, and nudges visitors into early access.",
    process:
      "Rapid wireframes, tight feedback loops, and focused typography and spacing passes to keep the narrative simple across devices.",
    solution:
      "A minimal, white-first layout with soft blue accents, a single core CTA, and a clear three-step flow that positions AI-generated music apart from meditation.",
    outcome:
      "Approved in three iterations and ready for build, with a clearer story and more premium tone."
    ,
  },
  {
    slug: "orbit-analytics",
    title: "Orbit Analytics",
    category: "B2B SaaS Product",
    summary: "Redesigned an analytics suite to turn dense data into a confident, executive-grade narrative.",
    role: "Lead Product Designer",
    year: "2024",
    tags: ["UX Strategy", "Data Visualization", "Design Systems"],
    tagline: "Transform data into executive-grade narratives",
    metrics: ["+32% activation lift", "-18% time-to-insight", "3 enterprise expansions"],
    image: "https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?w=1600&h=900&fit=crop",
    gradient: "from-violet-500 via-fuchsia-400/60 via-indigo-500/60 to-bg",
    problem:
      "Founders and RevOps teams struggled to explain performance to stakeholders, with dashboards that felt noisy and hard to trust.",
    process:
      "Mapped decision journeys with stakeholders, rebuilt the information architecture, and prototyped editorial-style dashboards with progressive disclosure.",
    solution:
      "Introduced narrative analytics, executive summaries, and an adaptive layout that highlights the most critical KPIs first.",
    outcome:
      "Adoption climbed across enterprise accounts and onboarding time dropped, making the platform feel purposeful and premium."
  },
  {
    slug: "lumen-billing",
    title: "Lumen Billing",
    category: "Fintech Platform",
    summary: "Designed a billing command center that reframed finance operations as a strategic product surface.",
    role: "Senior UI/UX Designer",
    year: "2023",
    tags: ["Product Strategy", "Motion", "SaaS"],
    tagline: "Finance operations as a strategic surface",
    metrics: ["-40% support tickets", "+21% paid conversion", "NPS +12"],
    image: "https://images.unsplash.com/photo-1636955840493-f43a02bfa064?w=1600&h=900&fit=crop",
    gradient: "from-emerald-500 via-emerald-300/60 via-teal-500/60 to-bg",
    problem:
      "Scaling SaaS teams struggled with fragmented billing workflows and inconsistent payment visibility.",
    process:
      "Conducted workflow audits, unified key flows into a single command center, and validated motion cues for confidence.",
    solution:
      "Built a modular interface with guided states, proactive alerts, and clear payment narratives.",
    outcome:
      "Support load dropped while leadership cited the new billing experience as a sales differentiator."
  },
  {
    slug: "atlas-onboarding",
    title: "Atlas Onboarding",
    category: "Product-Led Growth",
    summary: "Crafted a high-conversion onboarding experience with a premium, guided narrative.",
    role: "Product Designer",
    year: "2022",
    tags: ["Growth", "Onboarding", "Prototyping"],
    tagline: "High-conversion guided onboarding flow",
    metrics: ["+28% completion", "+19% activation", "Time-to-value -35%"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&h=900&fit=crop",
    gradient: "from-amber-500 via-amber-300/60 via-orange-500/60 to-bg",
    problem:
      "New users dropped off early due to unclear value and scattered setup flows.",
    process:
      "Mapped activation milestones, built onboarding storyboards, and tested progressive profiling with users.",
    solution:
      "Delivered a guided, contextual onboarding system with precise microcopy and milestone feedback.",
    outcome:
      "Activation improved dramatically, and users reported stronger confidence in the product within minutes."
  },
  {
    slug: "nova-design-system",
    title: "Nova Design System",
    category: "Design Infrastructure",
    summary: "Built a scalable design system that unified product experience across multiple teams and platforms.",
    role: "Design Systems Lead",
    year: "2023",
    tags: ["Design Systems", "Component Library", "Documentation"],
    tagline: "Unified design infrastructure at scale",
    metrics: ["+45% dev velocity", "100+ components", "3 product teams"],
    image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=1600&h=900&fit=crop",
    gradient: "from-rose-500 via-rose-300/60 via-pink-500/60 to-bg",
    problem:
      "Multiple product teams were building inconsistent interfaces, leading to fragmented user experience and duplicated effort.",
    process:
      "Audited existing patterns, established design tokens, and built a component library with clear documentation and governance.",
    solution:
      "Created a comprehensive design system with Figma libraries, React components, and interactive documentation.",
    outcome:
      "Development velocity increased significantly while maintaining consistent brand experience across all products."
  },
  {
    slug: "stellar-ecommerce",
    title: "Stellar E-commerce",
    category: "Landing Page",
    summary: "Designed a high-converting product landing page for a premium headphone brand with 3D visuals.",
    role: "UI Designer",
    year: "2024",
    tags: ["E-commerce", "3D Design", "Conversion"],
    tagline: "Premium audio experience landing",
    metrics: ["+41% conversion", "4.8s avg. session", "23% add-to-cart"],
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=1600&h=1200&fit=crop",
    gradient: "from-slate-500 via-gray-400/60 to-bg",
    problem:
      "Launch campaign needed a product page that matched the premium positioning and drove pre-orders.",
    process:
      "Created interactive 3D product renders, designed scroll-triggered animations, and optimized for mobile conversions.",
    solution:
      "Built an immersive landing experience with hero 3D model, feature reveals, and trust-building testimonials.",
    outcome:
      "Pre-order campaign exceeded targets by 140% with exceptional engagement metrics."
  },
  {
    slug: "quantum-crm",
    title: "Quantum CRM",
    category: "B2B SaaS Product",
    summary: "Redesigned contact management and pipeline views for a next-gen CRM targeting enterprise sales teams.",
    role: "Lead Product Designer",
    year: "2024",
    tags: ["Enterprise", "CRM", "Workflow Design"],
    tagline: "Enterprise-grade contact management",
    metrics: ["-26% time-per-task", "+34% daily actives", "NPS +18"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop",
    gradient: "from-cyan-500 via-blue-400/60 to-bg",
    problem:
      "Sales teams were frustrated with clunky workflows and poor visibility into deal pipeline health.",
    process:
      "Conducted user interviews with 20+ sales professionals, mapped task flows, and prototyped smart automation.",
    solution:
      "Delivered streamlined contact cards, kanban pipeline views, and AI-powered deal scoring.",
    outcome:
      "Enterprise clients reported faster deal cycles and higher team adoption across departments."
  },
  {
    slug: "zenith-wallet",
    title: "Zenith Crypto Wallet",
    category: "Fintech Platform",
    summary: "Designed a secure, user-friendly crypto wallet app that makes DeFi accessible to mainstream users.",
    role: "Senior Product Designer",
    year: "2023",
    tags: ["Web3", "Mobile App", "Security"],
    tagline: "DeFi made accessible and secure",
    metrics: ["50K+ downloads", "4.7 App Store", "-62% drop-off"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&h=1200&fit=crop",
    gradient: "from-purple-500 via-violet-400/60 to-bg",
    problem:
      "Crypto wallets intimidated non-technical users with complex jargon and confusing transaction flows.",
    process:
      "Simplified onboarding with progressive education, designed guided recovery flows, and tested with crypto-curious users.",
    solution:
      "Built an approachable mobile wallet with plain-language explanations, biometric security, and one-tap swaps.",
    outcome:
      "Reached 50K downloads in 3 months with strong retention and positive app store feedback."
  },
  {
    slug: "pulse-health",
    title: "Pulse Health Dashboard",
    category: "Product-Led Growth",
    summary: "Created a personal health tracking dashboard with gamified wellness goals and insights.",
    role: "Product Designer",
    year: "2024",
    tags: ["Health Tech", "Gamification", "Mobile First"],
    tagline: "Gamified wellness tracking",
    metrics: ["+52% 7-day retention", "3.2 sessions/day", "+44% goal completion"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&h=1200&fit=crop",
    gradient: "from-green-500 via-emerald-400/60 to-bg",
    problem:
      "Users felt overwhelmed by health data and lacked motivation to maintain tracking habits.",
    process:
      "Designed streak mechanics, progress visualizations, and social accountability features with behavioral science principles.",
    solution:
      "Launched a beautiful dashboard with daily challenges, achievement badges, and personalized health insights.",
    outcome:
      "User retention doubled and engagement metrics exceeded industry benchmarks significantly."
  },
  {
    slug: "vertex-marketplace",
    title: "Vertex Creative Marketplace",
    category: "Landing Page",
    summary: "Designed a conversion-optimized homepage for a digital assets marketplace targeting creators.",
    role: "UI/UX Designer",
    year: "2023",
    tags: ["Marketplace", "Creator Economy", "Conversion"],
    tagline: "Where creators buy and sell",
    metrics: ["+38% sign-ups", "5.1min avg. visit", "+27% seller applications"],
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1600&h=900&fit=crop",
    gradient: "from-orange-500 via-amber-400/60 to-bg",
    problem:
      "New marketplace needed a homepage that built trust, showcased quality assets, and drove both buyers and sellers.",
    process:
      "Designed featured collections, social proof elements, and dual CTAs for buyers and sellers.",
    solution:
      "Created a vibrant, gallery-style homepage with trending items, creator spotlights, and clear value propositions.",
    outcome:
      "Launch exceeded traffic goals and achieved healthy buyer-to-seller ratio within first month."
  },
  {
    slug: "forge-collaboration",
    title: "Forge Team Collaboration",
    category: "B2B SaaS Product",
    summary: "Redesigned real-time collaboration features for a project management platform used by 200+ teams.",
    role: "Staff Product Designer",
    year: "2023",
    tags: ["Collaboration", "Real-time", "Enterprise"],
    tagline: "Real-time team collaboration hub",
    metrics: ["+29% team adoption", "-31% meeting time", "95% satisfaction"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop",
    gradient: "from-indigo-500 via-blue-400/60 to-bg",
    problem:
      "Teams struggled with fragmented communication across multiple tools and missed context.",
    process:
      "Mapped collaboration patterns, designed threaded discussions, and built live presence indicators.",
    solution:
      "Introduced contextual comments, @mentions, real-time cursors, and notification intelligence.",
    outcome:
      "Teams reduced meetings and reported smoother async collaboration with better context retention."
  },
  {
    slug: "prism-investments",
    title: "Prism Investment Platform",
    category: "Fintech Platform",
    summary: "Designed an investment portfolio management interface that simplifies complex financial data.",
    role: "Senior UI Designer",
    year: "2024",
    tags: ["Investing", "Data Viz", "Fintech"],
    tagline: "Portfolio management simplified",
    metrics: ["+$2.4M AUM", "+36% deposits", "4.6 rating"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&h=900&fit=crop",
    gradient: "from-teal-500 via-cyan-400/60 to-bg",
    problem:
      "Retail investors felt intimidated by traditional investment platforms with overwhelming data.",
    process:
      "Simplified portfolio views, designed educational tooltips, and created guided investment flows.",
    solution:
      "Built an intuitive dashboard with clear performance metrics, risk indicators, and smart recommendations.",
    outcome:
      "Assets under management grew rapidly while maintaining high user satisfaction scores."
  }
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
