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
  /**
   * Words/phrases inside this project's case-study text that should render
   * in the display italic font. Only applied when the project also has
   * `caseStudy.blocks` or `caseStudy.layout`. List longer/more-specific
   * entries first ("AI music" before "AI") — matching is left-to-right.
   */
  emphasisKeywords?: string[];
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
    slug: "aw3-technology",
    title: "AW3 Technology",
    category: "Venture Studio",
    summary:
      "Founded and built a San Francisco–based venture studio that combines software development, venture consulting, and internal innovation to 3x early-stage Web3 and AI startups' chances of success.",
    role: "Founder & CEO",
    year: "2022",
    tags: ["Venture Studio", "Web3", "AI", "Software Development", "Fundraising"],
    metrics: [
      "Award from Fiona Ma, CA State Treasurer",
      "10+ startups built and scaled",
      "MVPs delivered in 1–30 days",
    ],
    tagline: "3x your startup's chances of success",
    gradient: "from-violet-600 via-purple-500/60 to-bg",
    problem:
      "Early-stage founders in Web3 and AI face the same gauntlet — ship a credible MVP, tell a story investors actually fund, and stand up a real go-to-market — usually with months of runway and no in-house engineering or design depth. Most agencies hand back a deck or a Figma file; most dev shops can't help with fundraising. The gap kills companies that should have made it.",
    process:
      "I designed AW3 as a single roof for the full venture stack — software design and development, branding, digital marketing, generative AI, Web3 protocols, mobile, and fundraising support. I run client engagements personally from concept through scale, leaning on a tight network of engineers, designers, and operators built over a decade in the Bay Area.",
    solution:
      "AW3 operates as a venture studio: a curated set of pre-seed and seed founders each cycle, MVPs shipped in 1–30 days, and continued involvement through capital formation. The studio also incubates internal ventures — Proof of Love (patent-pending consensus), SunScript, and others — so the team is building, not just consulting.",
    outcome:
      "Built and scaled 10+ startups across Web3, AI, and fintech; received an innovation award from Fiona Ma, California State Treasurer, at the 1000X Summit in Santa Clara; portfolio includes Baird Augustine, Bitwage, Blocksee, Carnomaly, JustiGuide, Wryter, and Nivana — all still operating.",
    image: "/projects/aw3-technology.png",
    meta: [
      { label: "Role", value: "Founder & CEO" },
      { label: "Founded", value: "2022" },
      { label: "Location", value: "San Francisco, CA" },
      { label: "Scope", value: ["Venture Studio", "Web3", "AI", "Fundraising"] },
    ],
    emphasisKeywords: ["AW3", "Web3", "AI", "venture studio", "Proof of Love", "SunScript", "Fiona Ma"],
  },
  {
    slug: "openeye",
    title: "OpenEye",
    category: "Open Source",
    summary:
      "Open-source, CLI-first perception engine that turns raw video into structured world models for robots and autonomous agents — like Ollama, but for vision AI.",
    role: "Creator & Lead Engineer",
    year: "2026",
    tags: ["Open Source", "AI", "Computer Vision", "Robotics", "Python"],
    metrics: [
      "Pull, run, and serve vision models from the terminal",
      "Object detection, depth, segmentation, VLM reasoning",
      "REST + WebSocket API with React dashboard",
    ],
    image: "/projects/openeye.png",
    tagline: "Open-source eyes for the agent era",
    gradient: "from-rose-500 via-sky-400/60 to-bg",
    problem:
      "Robots and autonomous agents need real-time perception — detection, depth, segmentation, scene understanding — but stitching together YOLO, SAM, Depth Anything, and VLMs into a production-grade pipeline is fragmented, brittle, and gated behind heavyweight ML tooling. There was no Ollama-style developer experience for vision AI.",
    process:
      "Designed OpenEye as a CLI-first perception engine with a single mental model: pull a model, run inference, serve it. Built the runtime in Python on FastAPI/Typer/Pydantic, integrated Ultralytics, Grounding DINO, SAM2, Depth Anything V2, and VLM providers, and shipped a React/TypeScript dashboard with live streams, fleet management, MLOps, and governance.",
    solution:
      "A unified open-source toolkit: `openeye pull`, `openeye run`, `openeye serve`, `openeye watch` — with safety monitoring, agentic perception loops, edge-device fleet management, model registry, policy enforcement, and audit logging. REST + WebSocket APIs, browser dashboard, and Unitree G1 robot integration all from one CLI.",
    outcome:
      "Released publicly under aw3-technology on GitHub with an interactive demo, MkDocs documentation, and pipx-installable distribution. Positioned as the open-source perception layer for the agent era — designed to slot into any robotics or autonomous-agent stack with one command.",
    meta: [
      { label: "Role", value: "Creator & Lead Engineer" },
      { label: "Stack", value: ["Python", "FastAPI", "Typer", "React", "TypeScript", "ONNX", "TensorRT"] },
      { label: "Year", value: "2026" },
      { label: "Scope", value: ["CLI", "Inference Server", "Web Dashboard", "Fleet & MLOps"] },
      { label: "Repo", value: "github.com/aw3-technology/openeye.sh" },
    ],
    emphasisKeywords: ["OpenEye", "open-source", "perception", "vision AI", "Ollama", "agentic", "robots"],
  },
  {
    slug: "baird-augustine",
    title: "Baird Augustine",
    category: "Fintech",
    summary:
      "Architected and built Lendya, an AI-powered lending MVP for a neo-investment bank serving 33 family offices deploying over $20BN in 2025.",
    role: "Technology Partner & Advisor",
    year: "2024",
    tags: ["Fintech", "AI", "Lending", "TypeScript", "Supabase"],
    metrics: ["Full MVP shipped from scratch", "33 family offices in network", "$20BN+ deployment scope"],
    image: "/projects/baird-augustine.png",
    tagline: "AI-powered lending for Silicon Valley's neo-investment bank",
    gradient: "from-emerald-500 via-teal-400/60 to-bg",
    problem:
      "Baird Augustine, an award-winning neo-investment bank specializing in equity fundraising, M&A, and private market lending, needed an AI-powered lending platform — Lendya — to bridge institutional capital with private market borrowers. It had to be fast enough to capture the 2025 deployment cycle and trustworthy enough for family-office scrutiny.",
    process:
      "As Baird Augustine's technology partner since the holding company was formed, I led architecture and full-cycle MVP development on Lendya — branding, UI design, backend, AI integration. Built on TypeScript, Supabase, and Plaid, with modules for borrower evaluation, risk scoring, and secure loan approvals.",
    solution:
      "Shipped an AI-powered lending dashboard with lender and borrower roles, multi-user access, smart credit insights, and rapid iteration cycles. AI assistants are integrated directly into the lending workflow rather than bolted on after the fact.",
    outcome:
      "Lendya is live and supporting Baird Augustine's lending operations. Ryan Baird, CEO: \"AW3 has helped us structure Baird Augustine and the holding company Finance Inc. from the beginning. He provides invaluable insight and expertise in technology.\"",
    meta: [
      { label: "Role", value: "Technology Partner & Advisor" },
      { label: "Stack", value: ["TypeScript", "Supabase", "Plaid"] },
      { label: "Year", value: "2024" },
      { label: "Scope", value: ["AI Lending", "MVP", "Branding", "UI"] },
    ],
    emphasisKeywords: ["AI", "Lendya", "TypeScript", "Supabase", "Plaid"],
  },
  {
    slug: "bitwage",
    title: "Bitwage",
    category: "Fintech",
    summary:
      "Supported a $4MM equity crowdfunding round and ongoing fundraising for a pioneering global crypto-payroll platform processing $400M+ for 90,000 workers across 200 countries.",
    role: "Advisor & Angel Investor",
    year: "2021",
    tags: ["Fintech", "Crypto", "Payroll", "Fundraising", "Marketing"],
    metrics: ["$4MM equity crowdfund raised", "30X ARR since 2021", "$400M+ payroll processed", "Acquired by Paystand"],
    image: "/projects/bitwage.png",
    tagline: "Global payroll, paid in crypto",
    gradient: "from-orange-500 via-amber-400/60 to-bg",
    problem:
      "Bitwage had a working product paying out global teams in cryptocurrencies and stablecoins since 2014, but needed help unlocking institutional and retail capital, modernizing its public-facing surface, and accelerating ARR growth.",
    process:
      "Since 2021 I've worked alongside Jonathan Chester as an advisor, angel investor, and execution partner — running the equity crowdfund mechanics, rebuilding landing pages, producing sales and marketing collateral, and supporting fundraising strategy.",
    solution:
      "Supported a successful $4MM equity crowdfunding seed round, modernized the marketing surface, and stayed continuously involved in fundraising and growth strategy.",
    outcome:
      "ARR climbed over 30X across the engagement, and Bitwage was ultimately acquired by Paystand. Jonathan Chester, CEO: \"AW3 has played a critical role in our fundraising, website development and sales/marketing execution.\"",
    meta: [
      { label: "Role", value: "Advisor & Angel Investor" },
      { label: "Engaged", value: "2021–present" },
      { label: "Outcome", value: "Acquired by Paystand" },
      { label: "Scope", value: ["Fundraising", "Marketing", "Web"] },
    ],
    emphasisKeywords: ["Bitwage", "crypto", "ARR", "equity crowdfunding", "Paystand", "acquired"],
  },
  {
    slug: "blocksee",
    title: "Blocksee",
    category: "Web3",
    summary:
      "Built the full frontend and landing page for a Web3 CRM platform helping blockchain projects manage relationships, track engagement, and grow on-chain communities.",
    role: "Frontend Lead & Fundraising Advisor",
    year: "2024",
    tags: ["Web3", "CRM", "React", "Node.js", "Frontend"],
    metrics: ["Full frontend shipped in React/Node", "Web3 CRM live in market", "Ongoing fundraising support"],
    tagline: "CRM for the decentralized economy",
    gradient: "from-indigo-500 via-blue-400/60 to-bg",
    problem:
      "Blocksee had a strong product hypothesis — a CRM tuned for blockchain projects to manage relationships, track on-chain engagement, and grow communities — but no frontend, no landing page, and a tight investor timeline.",
    process:
      "I built the complete frontend user interface and landing page from scratch in React and Node.js, designed for blockchain workflows and the visual cues Web3 users expect. In parallel, I supported the team through fundraising and investor readiness.",
    solution:
      "Shipped a responsive, scalable frontend optimized for Web3 workflows, with a marketing surface ready for investor demos. Established a high-performance interface architecture capable of evolving with the product.",
    outcome:
      "Blocksee is operating in market as a Web3 CRM. Eric Forst, CEO: \"AW3 did an amazing job building out the frontend for our product Blocksee and are now helping us with fundraising. They delivered within budget and on time.\"",
    meta: [
      { label: "Role", value: "Frontend Lead & Fundraising Advisor" },
      { label: "Stack", value: ["React", "Node.js"] },
      { label: "Year", value: "2024" },
      { label: "Scope", value: ["Frontend", "Landing Page", "Fundraising"] },
    ],
    emphasisKeywords: ["Web3", "CRM", "React", "Node.js"],
  },
  {
    slug: "carnomaly",
    title: "Carnomaly",
    category: "Web3",
    summary:
      "Rebuilt and shipped the full mobile and web apps for a blockchain-powered automotive platform after another dev shop's effort stalled — now selling to dealerships.",
    role: "Lead Engineer",
    year: "2024",
    tags: ["Web3", "Blockchain", "React Native", "Svelte", "Smart Contracts"],
    metrics: [
      "Mobile + web shipped end-to-end",
      "Re-architected stalled prior build",
      "Selling to dealerships in production",
    ],
    tagline: "Blockchain-powered car buying, end to end",
    gradient: "from-cyan-500 via-sky-400/60 to-bg",
    problem:
      "Carnomaly's blockchain platform for transparent car buying and selling had been started by a previous dev shop and stalled — incomplete code, no path to a unified mobile/web experience, and dealerships waiting on a working product.",
    process:
      "I came in to re-architect and complete the product. Built mobile and web apps using React Native and Svelte for a unified cross-platform experience, and integrated blockchain features for secure transactions, verifiable vehicle histories, and digital asset management.",
    solution:
      "Delivered a responsive, user-friendly Web3 CRM optimized for blockchain workflows — dealership portals connecting buyers and sellers in one application suite, with on-chain transaction integrity surfaced through a clean, conventional UI.",
    outcome:
      "Carnomaly is live and selling to dealerships. Larry Kohlieber, CPTO: \"AW3 did an excellent job re-architecting and completing the Carnomaly product where other dev shops failed. We are now successfully selling to dealerships.\"",
    meta: [
      { label: "Role", value: "Lead Engineer" },
      { label: "Stack", value: ["React Native", "Svelte", "Ethereum smart contracts"] },
      { label: "Year", value: "2024" },
      { label: "Scope", value: ["Mobile", "Web", "Blockchain Integration"] },
    ],
    emphasisKeywords: ["React Native", "Svelte", "Web3", "blockchain"],
  },
  {
    slug: "justiguide",
    title: "JustiGuide",
    category: "Legal Tech",
    summary:
      "Branded, built, and angel-invested in an AI immigration platform that won Time's Best Inventions of 2025 and took the top spot at TechCrunch SF's Policy + Protection pitch stage.",
    role: "Brand Lead, Advisor & Angel Investor",
    year: "2024",
    tags: ["Legal Tech", "AI", "Branding", "Fundraising", "Advisory"],
    metrics: [
      "Time Best Inventions 2025 (Legal Tech)",
      "TechCrunch SF Policy + Protection — top spot",
      "Marl5G accelerator participant",
    ],
    tagline: "Immigration, made simple — powered by AI",
    gradient: "from-violet-500 via-purple-400/60 to-bg",
    problem:
      "Bisi Obateru had a strong product instinct around AI-powered immigration support but needed a brand identity, a credible web presence, and a fundraising path that would let JustiGuide hold its own in front of investors in a complex regulatory domain.",
    process:
      "I worked closely with Bisi from the earliest days as advisor and angel investor — leading branding, website development, pitch deck creation, and fundraising strategy. The goal was a design language confident enough to carry the mission and clear enough to win demos.",
    solution:
      "Built the brand and web presence around \"Immigration Made Simple. Powered by AI.\" Supported the team through fundraising, accelerator participation, and customer acquisition.",
    outcome:
      "JustiGuide won Time magazine's Best Inventions of 2025 in Legal Technology and took the top spot at TechCrunch SF's Policy + Protection pitch stage (Oct 27–29, 2025). They've raised funding, joined the Marl5G accelerator, and secured paying clients. Bisi Obateru, CEO: \"Will believed in my idea before anyone else was and helped me build a strong brand which gave the vision and idea more confidence and design language we still use today.\"",
    meta: [
      { label: "Role", value: "Brand Lead, Advisor & Angel Investor" },
      { label: "Scope", value: ["Branding", "Web", "Pitch Deck", "Fundraising"] },
      { label: "Year", value: "2024" },
    ],
    emphasisKeywords: ["AI", "Time", "TechCrunch", "JustiGuide"],
  },
  {
    slug: "zero-to-three",
    title: "Zero to Three",
    category: "Open Source",
    summary:
      "Wrote and released Zero to Three, an open-source book on taking startups from idea (zero) through MVP, fundraising, and scale (three) — drawn from a decade of building ventures at AW3.",
    role: "Author",
    year: "2024",
    tags: ["Open Source", "Writing", "Startups", "Venture Studio"],
    metrics: ["Open-sourced on GitHub", "Distilled from 10+ shipped startups", "Free for founders"],
    image: "/projects/zero-to-three.png",
    caseStudyImage: "/projects/zero-to-three.png",
    tagline: "From idea to scale, in the open",
    gradient: "from-blue-600 via-sky-500/60 to-bg",
    problem:
      "Most early-stage founders learn the path from idea to funded startup the expensive way — through advisors, accelerators, or trial and error. The playbook exists in fragments across blog posts and paywalled programs, but rarely in one place written from the perspective of someone who has actually shipped MVPs and raised capital alongside founders.",
    process:
      "I distilled a decade of AW3 engagements — MVPs shipped in 1–30 days, fundraising rounds supported, brands built — into a structured book covering the stages zero (idea), one (MVP), two (traction), and three (scale). Released on GitHub under an open license so any founder can read, fork, and adapt it.",
    solution:
      "Zero to Three is a publicly available, version-controlled book documenting the venture studio playbook: how to validate an idea, ship a credible MVP, tell a fundable story, and grow into a real company. Hosted openly at github.com/aw3-technology/zero-to-three.",
    outcome:
      "The book is live on GitHub as an open resource for founders, and continues to be expanded as new lessons emerge from AW3 engagements.",
    meta: [
      { label: "Role", value: "Author" },
      { label: "Year", value: "2024" },
      { label: "License", value: "Open Source" },
      { label: "Repo", value: "github.com/aw3-technology/zero-to-three" },
    ],
    emphasisKeywords: ["Zero to Three", "open-source", "MVP", "venture studio"],
  },
  {
    slug: "wryter-ai-screenwriter",
    title: "Wryter / AI Screenwriter",
    category: "AI",
    summary:
      "Designed and built an AI-driven screenwriting platform end-to-end, plus two additional generative AI applications around it — all shipped to production on Vue, Python, Node, and AWS.",
    role: "Lead Engineer & Architect",
    year: "2024",
    tags: ["AI", "Generative AI", "Vue", "Python", "AWS"],
    metrics: ["3 production apps shipped", "Paying clients + investors landed", "Deployed on AWS / Mongo / Python / Node"],
    tagline: "Professional-grade screenwriting, powered by AI",
    gradient: "from-blue-500 via-indigo-400/60 to-bg",
    problem:
      "Wryter Inc. had an early prototype for an AI screenwriting tool and a vision for a broader generative-AI suite for creators — but no production system, no scalable architecture, and a need to demo to both investors and paying users.",
    process:
      "I led full-stack development — Vue on the frontend, Python and Node on the backend, AI integration woven into the screenwriting flow itself. Then built two additional generative-AI apps from scratch to expand Wryter's product suite, all sharing a common technical foundation.",
    solution:
      "Deployed the initial prototype into production on AWS, Mongo, Python, and Node. Built two additional applications from scratch to expand the product suite and establish a strong cross-product technical foundation enabling continued feature growth.",
    outcome:
      "Demos landed both paying clients and investors. Liam McMullan, Founder & CTO: \"AW3 goes far above and beyond any other company of its kind. I have worked with them on many different apps, websites and projects and I have been consistently impressed — they have completed ahead of schedule and under budget.\"",
    meta: [
      { label: "Role", value: "Lead Engineer & Architect" },
      { label: "Stack", value: ["Vue", "Python", "Node.js", "AWS", "MongoDB"] },
      { label: "Year", value: "2024" },
      { label: "Scope", value: ["Full-stack AI", "Production Infra", "3 Apps"] },
    ],
    emphasisKeywords: ["AI", "Vue", "Python", "Node", "AWS", "generative AI"],
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
