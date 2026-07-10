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
  award?: {
    image: string;
    title: string;
    issuer: string;
    date: string;
    citation: string;
    body?: string;
  };
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
      /** Corner radius. Defaults to "2xl" to match other case-study media. */
      rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
      /** Use object-contain instead of the default object-cover (avoids cropping UI screenshots). */
      fit?: "cover" | "contain";
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
      "Built and scaled 10+ startups across Web3, AI, and fintech. AW3 and founder Will Schulz were formally recognized by the Honorable Fiona Ma, California State Treasurer, and the 1000X Silicon Valley Summit for an innovative approach to supporting and investing in early-stage entrepreneurs. Portfolio includes Baird Augustine, Bitwage, Blocksee, Carnomaly, JustiGuide, Wryter, and Nivana — all still operating.",
    image: "/projects/aw3-banner.png",
    meta: [
      { label: "Role", value: "Founder & CEO" },
      { label: "Founded", value: "2022" },
      { label: "Location", value: "San Francisco, CA" },
      { label: "Scope", value: ["Venture Studio", "Web3", "AI", "Fundraising"] },
      { label: "Links", value: ["aw3.tech — studio", "aw3.xyz — portfolio", "aw3.host — hosting"] },
    ],
    emphasisKeywords: ["AW3", "Web3", "AI", "venture studio", "Proof of Love", "SunScript", "Fiona Ma"],
    award: {
      image: "/projects/aw3-fiona-ma-award.png",
      title: "Certificate of Recognition",
      issuer: "The Honorable Fiona Ma, California State Treasurer · 1000X Silicon Valley Summit",
      date: "September 20, 2024",
      citation:
        "On Behalf of the State of California, I Hereby Award this Certificate of Recognition in Honor of Your Innovative Approach to Supporting and Investing in Early Stage Entrepreneurs.",
      body: "AW3 Technology and founder Will Schulz were formally recognized by California State Treasurer Fiona Ma and the 1000X Silicon Valley Summit for driving cutting-edge innovation and economic activity within the state — specifically for AW3's work supporting and investing in early-stage entrepreneurs.",
    },
    caseStudy: {
      blocks: [],
      layout: [
        {
          type: "stack",
          heading: "An award-winning venture studio",
          blocks: [
            {
              type: "paragraph",
              text: "AW3 (Andromeda Web3) is a San Francisco–based venture studio with a proven track record building, scaling, and financing technology solutions in emerging markets. We didn't re-invent the wheel, we re-imagined it — combining world-class software development, venture consulting, and internal innovation to 3x early-stage Web3 and AI startups' chances of success. Our mission is to help innovative executives build and run great companies, with end-to-end support under one roof.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "The studio advantage",
              text: "3x your startup's chances of success",
            },
            {
              type: "callout",
              tone: "quote",
              text: "Without AW3, my startup would have failed months ago. — Andrew Hannebrink, Founder, Deelz",
            },
          ],
        },
        {
          type: "timeline",
          heading: "How it works",
          steps: [
            {
              title: "Illuminate",
              body: "We define your vision and uncover the market truth that will drive your success — systematic opportunity identification and validation before a line of code is written.",
            },
            {
              title: "Architect",
              body: "We design the roadmap and technology foundation for sustainable growth — scalable architecture, branding, and a fundable narrative from day one.",
            },
            {
              title: "Forge",
              body: "Our in-house team builds and iterates with precision, shipping production-ready MVPs in 1–30 days across AI, Web3, and mobile.",
            },
            {
              title: "Ascend",
              body: "We launch you to market and support your evolution as you scale — go-to-market execution, fundraising support, and capital for select companies.",
            },
          ],
        },
        {
          type: "split",
          heading: "Features",
          content: [
            {
              type: "paragraph",
              text: "Once you start working with AW3, your journey to Andromeda begins. Every engagement runs on the same in-house stack — design, engineering, capital, and growth — so you're never stitching together vendors.",
            },
            {
              type: "list",
              items: [
                "Lightning-fast execution — speed through early-stage deliverables, with MVPs shipped in 1–30 days.",
                "High-quality software — from AI to Web3 to mobile apps, every build meets the highest engineering and design standards.",
                "Flexible pricing — packages and equity arrangements that flex with your stage.",
                "High-converting designs — premium interfaces built with conversion in mind.",
                "Fundraising support — we help clients secure funding and invest in select startups.",
                "Focused on success — your success is our success; we're here to win big together.",
              ],
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Services include",
            },
            {
              type: "list",
              items: [
                "Software design & development",
                "Generative AI",
                "Web3 & blockchain",
                "Mobile apps",
                "Branding & design",
                "Digital marketing",
                "Managed hosting (aw3.host)",
                "Fundraising support",
                "Startup education",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "Benefits",
          blocks: [
            {
              type: "paragraph",
              text: "Say goodbye to the startup world as you know it. The venture studio model consistently delivers above-market outcomes — and the data backs it up. Venture studios have a 62% higher exit rate than accelerators.",
            },
            {
              type: "list",
              items: [
                "Higher success rates — studio-backed companies succeed at 30%+ versus ~10% for traditional startups.",
                "2.5x better returns — average internal rate of return of 53.3% versus 21.3% for traditional venture-backed startups.",
                "3.4x faster to seed — studios reach seed in 10.7 months versus 36 months for traditional startups.",
                "3.6x total value to paid in — venture studios boast a 5.8x TVPI ratio versus 1.6x for traditional venture-backed startups.",
                "De-risked innovation — ideas validated and operational expertise applied before committing major resources.",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "Recent work",
          blocks: [
            {
              type: "paragraph",
              text: "From blockchain protocols and AI-powered platforms to fintech applications, event branding, and full-scale digital marketplaces, AW3 delivers end-to-end across industries — strategy, design, development, marketing, and fundraising.",
            },
            {
              type: "list",
              items: [
                "Baird Augustine — fractional CTO and venture partner to a Silicon Valley neo-investment bank; brand, website, investor campaigns, and the Direct Credit lending platform.",
                "Bitwage — $4MM equity crowdfund, marketing, and 30x ARR growth for a global crypto-payroll platform (acquired by Paystand).",
                "Carnomaly — rebuilt mobile + web for a blockchain automotive marketplace now selling to dealerships.",
                "Blocksee — full React/Node frontend and fundraising support for a Web3 CRM.",
                "JustiGuide — MVP, website, pitch deck, fundraising, and an angel investment in an AI immigration platform; TIME Best Inventions 2025 and TechCrunch Disrupt 2025 pitch-stage winner.",
                "Wryter — end-to-end AI screenwriting platform plus two generative-AI apps on Vue/Python/Node/AWS.",
                "Nivana — patent-pending Proof of Love blockchain consensus (Rust/React/Node).",
              ],
            },
            {
              type: "callout",
              tone: "metric",
              label: "100% in-house · 100% still running",
              text: "54 clients + 30 internal projects",
            },
          ],
        },
        {
          type: "stack",
          heading: "Pricing",
          blocks: [
            {
              type: "paragraph",
              text: "Our plans vary based on stage. Pause or cancel anytime.",
            },
            {
              type: "heading",
              level: 3,
              text: "Inception to pre-seed — Sweat equity",
            },
            {
              type: "paragraph",
              text: "One request at a time. We offer equity compensation and payment plans.",
            },
            {
              type: "list",
              items: [
                "Mentorship & coaching",
                "Product strategy",
                "Branding & design",
                "Industry connections & access to social clubs",
                "Startup education",
                "MVP development",
                "Funding for select companies",
              ],
            },
            {
              type: "heading",
              level: 3,
              text: "Seed to Series A — from $999/mo",
            },
            {
              type: "paragraph",
              text: "Double the requests. Pause or cancel anytime.",
            },
            {
              type: "list",
              items: [
                "Software engineering resources",
                "AI & blockchain development",
                "Fundraising & equity-crowdfunding support",
                "Digital marketing",
                "Data warehousing",
                "Advanced design resources",
                "Funding for select companies",
              ],
            },
            {
              type: "heading",
              level: 3,
              text: "Enterprise Consulting — Custom",
            },
            {
              type: "paragraph",
              text: "We help established businesses realize their software and digital-transformation goals. Refer a friend and earn 5% monthly recurring commissions for each referral.",
            },
          ],
        },
        {
          type: "stack",
          heading: "FAQs",
          blocks: [
            {
              type: "heading",
              level: 3,
              text: "What is a venture studio?",
            },
            {
              type: "paragraph",
              text: "A venture studio systematically builds multiple startups in rapid succession using a repeatable process and shared resources — ideating, validating, and building companies from scratch rather than only investing in existing ones.",
            },
            {
              type: "heading",
              level: 3,
              text: "How is AW3 different from an agency or a VC?",
            },
            {
              type: "paragraph",
              text: "Agencies hand back a deck or a Figma file and dev shops can't help you raise. AW3 does both and more — design, engineering, branding, capital, and go-to-market under one roof, with the team building alongside you from concept to scale.",
            },
            {
              type: "heading",
              level: 3,
              text: "How fast can you ship an MVP?",
            },
            {
              type: "paragraph",
              text: "Most MVPs ship in 1–30 days, with production-ready code from day one and no technical debt accumulation.",
            },
            {
              type: "heading",
              level: 3,
              text: "What stages and industries do you work with?",
            },
            {
              type: "paragraph",
              text: "Primarily inception through Series A, across Web3, AI, fintech, and SaaS.",
            },
            {
              type: "heading",
              level: 3,
              text: "Do you invest?",
            },
            {
              type: "paragraph",
              text: "Yes — AW3 provides funding for select companies and angel-invests alongside its build work, aligning our incentives with your long-term success.",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "kavanah",
    title: "Kavanah",
    category: "AI Product",
    summary:
      "Designed and built Kavanah from scratch — an AI-native project management platform where agents plan sprints, draft PRs, triage incidents, and brief clients. One workspace for projects, delivery, and client work, with web, desktop, and mobile apps kept in sync. Now in private beta, onboarding its first users.",
    role: "Founder & Lead Engineer",
    year: "2026",
    tags: ["AI", "Project Management", "SaaS", "Next.js", "TypeScript"],
    metrics: [
      "Built end-to-end — web, desktop & mobile, in sync",
      "AI agent wired into every feature — 800+ tools, 20+ integrations",
      "Private beta — onboarding first users",
    ],
    image: "/projects/kavanah.png",
    caseStudyImage: "/projects/kavanah-hero.png",
    tagline: "AI-native project management — from idea to shipped",
    gradient: "from-amber-500 via-stone-400/50 to-bg",
    problem:
      "AI gave every team member 10x delivery capacity — but project management tools never caught up. Individual contributors got dramatically faster while teams still ran projects through disconnected tools, status meetings, and spreadsheets that barely talk to each other. Only 31% of projects finish on time, on budget, and on scope. PMs lose hours to the gaps between five apps that almost — but don't quite — talk to each other. The work got faster; the way we manage it didn't.",
    process:
      "I designed and built Kavanah end-to-end — an AI-native project management platform with autonomous agents at the core, not bolted on. One workspace unifies boards, timelines, dev integrations, time tracking, and a branded client portal. I built the full stack across web, a desktop application, and an iOS app, all kept in sync, and wired AI agents through every surface — from sprint planning to PR drafting to client status updates.",
    solution:
      "Kavanah's agents plan sprints from the backlog, draft PRs from ai-eligible tasks, route Sentry and Datadog alerts to code owners, and brief clients automatically. Mark a task ai-eligible and the AI Engineer drafts the PR; drop in a markdown spec and Spec→Tasks turns it into a sequenced plan. Teams can hire scoped 'AI Employees' — named agents with their own permissions and integrations — and assign them work like real teammates. The agent reaches every corner of the product through 800+ tools and 20+ integrations, with persistent memory, runbooks, goal tracking, and a governance layer that decides what it may do on its own. Every commit, PR, deploy, and incident threads back to the task it came from.",
    outcome:
      "Kavanah is built and live at kavanah.ai, now in private beta and onboarding its first users. The product spans six core surfaces — task management, dev integration, AI automations, AI Employees, time tracking, and a client portal — across web, desktop, and mobile, with flat per-seat pricing from $3/seat and AI metered as credits so teams only pay for the agent runs they actually use.",
    meta: [
      { label: "Role", value: "Founder & Lead Engineer" },
      { label: "Year", value: "2026" },
      { label: "Status", value: "Live · Private Beta" },
      { label: "Platform", value: ["Web", "Desktop", "iOS"] },
      { label: "Stack", value: ["Next.js", "TypeScript", "PostgreSQL", "Tauri", "AI Agents"] },
      { label: "Link", value: "kavanah.ai" },
    ],
    emphasisKeywords: [
      "Kavanah",
      "AI-native",
      "AI Engineer",
      "AI Employees",
      "Cursor for project management",
      "Spec → Tasks",
      "agents",
      "one workspace",
    ],
    caseStudy: {
      blocks: [],
      layout: [
        {
          type: "stack",
          heading: "The operating system for AI-powered organizations",
          blocks: [
            {
              type: "paragraph",
              text: "Kavanah is an AI-native project management platform built from the ground up with agents at the core — not bolted on. It unifies projects, delivery, and client work in one workspace: agents plan sprints, draft PRs, triage incidents, and brief clients, taking a team from idea to shipped. I designed and built the entire product, across web, desktop, and mobile.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "Projects · Delivery · Client Work — one workspace",
              text: "AI-native project management, from idea to shipped",
            },
            {
              type: "callout",
              tone: "quote",
              text: "We need Cursor for project management. — the gap Kavanah was built to close",
            },
            {
              type: "image",
              label: "Kavanah — web, desktop & mobile, in sync",
              src: "/projects/kavanah-hero.png",
              alt: "Kavanah dashboard on desktop and mobile showing time tracker, productivity, completed tasks, and AI agent insights",
              aspect: "video",
              rounded: "lg",
              fit: "contain",
            },
          ],
        },
        {
          type: "stack",
          heading: "Why I built it",
          blocks: [
            {
              type: "paragraph",
              text: "AI gave every team member 10x delivery capacity — but management tools never evolved to match. Individual contributors got dramatically faster while teams still ran projects through disconnected tools, status meetings, and spreadsheets. Only 31% of projects finish on time, on budget, and on scope. Kavanah closes that gap by making project management one AI-native workspace, not a stack of tools glued together.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "The problem, in one number",
              text: "Only 31% of projects finish on time, on budget, and on scope",
            },
          ],
        },
        {
          type: "timeline",
          heading: "From idea to shipped",
          steps: [
            {
              title: "Spin up your workspace",
              body: "Create a project, invite your team, and link GitHub, Vercel, Sentry, and the tools you already use — Kavanah's agents start learning your workflow immediately.",
            },
            {
              title: "AI plans your sprint",
              body: "Agents analyze the backlog, break down epics, and draft a sprint plan for your review. Drop in a markdown spec and Spec→Tasks turns it into a sequenced plan.",
            },
            {
              title: "Agents track & triage",
              body: "AI monitors progress, threads PRs and deploys back to tasks, routes Sentry alerts to code owners, and keeps clients in the loop automatically.",
            },
            {
              title: "Ship & reflect",
              body: "Agents draft release notes, standups, and client status updates, surface what slipped, and carry the learnings into the next cycle.",
            },
          ],
        },
        {
          type: "split",
          heading: "Agents that draft the boring work",
          content: [
            {
              type: "paragraph",
              text: "Kavanah's AI isn't a chat box on the side — it's woven through the workflow. Mark a task ai-eligible and the AI Engineer drafts the PR. Turn a markdown spec into a sequenced plan with Spec→Tasks. Wire approval routes, watchers, and triage rules so routine work runs itself — with you in the loop wherever you want.",
            },
            {
              type: "list",
              items: [
                "AI Engineer drafts PRs from ai-eligible tasks — tests passing, diff ready for review.",
                "Spec → Tasks turns a markdown spec into a sequenced, assignable plan.",
                "Approval routes, watchers, and triage rules you fully control.",
                "Automations: triage Sentry alerts to tasks, auto-draft the weekly sprint plan, post standup digests to your team channel.",
              ],
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Hire AI teammates, scoped like real ones",
            },
            {
              type: "list",
              items: [
                "Create named AI Employees for any role — a PM, an account exec, a research analyst.",
                "You set each one's capability scopes, who can work with it, and which integrations it can use.",
                "Grant per-agent access to email, calendar, GitHub, Slack, and more.",
                "Any workspace member can assign it tasks — and it reports back like a teammate.",
              ],
            },
            {
              type: "image",
              label: "The dashboard — time tracking, productivity, and urgent tasks beside the AI agent, its Morning Briefing, and live insights",
              src: "/projects/kavanah-dashboard.png",
              alt: "Kavanah dashboard on a desktop monitor showing time tracker, productivity, completed tasks, urgent tasks, morning briefing, notifications, and the AI Agent chat panel",
              aspect: "4/3",
              rounded: "lg",
              fit: "cover",
            },
          ],
        },
        {
          type: "split",
          flip: true,
          heading: "Tasks linked to the code that ships them",
          content: [
            {
              type: "paragraph",
              text: "Connect GitHub, GitLab, Vercel, Sentry, and Datadog. Kavanah threads commits, PRs, deploys, and incidents back to the task they came from — so anyone can answer \"what shipped, what broke, who owns it\" in one click.",
            },
            {
              type: "list",
              items: [
                "Lineage: task ↔ commit ↔ PR ↔ deploy ↔ incident.",
                "Sentry & Datadog alerts auto-routed to code owners.",
                "Deploy timeline overlaid on your project Gantt.",
              ],
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Every minute accounted for",
            },
            {
              type: "list",
              items: [
                "One-click timer attached to any task.",
                "Automatic time logging and weekly reports.",
                "Billable vs. non-billable hour breakdowns.",
                "Branded client portal with AI-drafted weekly status updates and controlled per-member access.",
              ],
            },
          ],
        },
        {
          type: "split",
          heading: "An AI chief of staff — with guardrails",
          content: [
            {
              type: "paragraph",
              text: "Kavanah's agent isn't a feature — it's a standing operation. It reaches every corner of the product through 800+ tools spanning the platform's ~680 API endpoints, and it runs on its own schedule: a morning briefing in your inbox, goals checked daily, follow-ups chased before they slip.",
            },
            {
              type: "list",
              items: [
                "Persistent memory — decisions, commitments, and preferences carried across every conversation.",
                "A waiting-on ledger that tracks who owes what by when, nudges them, and escalates when nudging stops working.",
                "Runbooks: encode your SOPs as steps the agent executes, pausing at human checkpoints you define.",
                "Goals & OKRs evaluated daily against live workspace data — you're alerted only when a goal starts trending the wrong way.",
                "Drop in a meeting transcript and the agent extracts decisions and action items, assigns owners, and creates the tasks.",
              ],
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Autonomy you can govern",
            },
            {
              type: "list",
              items: [
                "Per-category action policies — allow, allow with a daily budget, require approval, or block — for sends, deletes, payments, and deploys.",
                "Every agent write lands in an action ledger; a weekly report shows admins exactly what the agent did, parked, or undid.",
                "Escalations respect quiet hours — unless it's critical.",
                "Risky actions park for human approval by default; the agent fails closed, not open.",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "One workspace, every surface",
          blocks: [
            {
              type: "paragraph",
              text: "From planning sprints to tracking hours, collaborating with your team, and keeping clients informed — every feature is built to move projects forward, and every surface is in sync across web, desktop, and mobile.",
            },
            {
              type: "list",
              items: [
                "Task management — Kanban, timeline, and Gantt views; custom statuses, tags, priorities, saved filters; undo/redo and bulk edits.",
                "Dev integration — GitHub, GitLab, Vercel, Sentry, and Datadog, with full task-to-incident lineage.",
                "20+ integrations — Jira, ClickUp, Monday.com, Notion, Slack, and the full Google Workspace suite: Gmail, Calendar, Drive, Docs, Sheets, Slides, Forms, Meet, and Chat.",
                "AI Engineer & automations — PR drafting, Spec→Tasks, approval routes, watchers, and triage rules.",
                "AI Employees — scoped, named agents any member can assign work to.",
                "Time tracking — one-click billable timers, weekly reports, billable/non-billable breakdowns.",
                "Client portal — branded, controlled per-member access, milestone tracking, AI-drafted status updates.",
              ],
            },
            {
              type: "callout",
              tone: "metric",
              label: "Built across the full stack",
              text: "Web, desktop & mobile — in sync",
            },
            {
              type: "image",
              label: "The iOS app — the same workspace in your pocket, with live timers and the AI agent one tap away",
              src: "/projects/kavanah-mobile.png",
              alt: "Kavanah iOS app showing the dashboard with a live time tracker, weekly summary, and productivity trend",
              aspect: "square",
              rounded: "lg",
              fit: "cover",
            },
            {
              type: "image",
              label: "Board view — Kanban across Open, In Progress, In Review, and Completed, with AI-eligible tasks threaded to commits",
              src: "/projects/kavanah-board.png",
              alt: "Kavanah board view showing a project's tasks across Open, In Progress, In Review, and Completed columns",
              aspect: "video",
              rounded: "lg",
              fit: "contain",
            },
          ],
        },
        {
          type: "stack",
          heading: "Pricing",
          blocks: [
            {
              type: "paragraph",
              text: "Flat per-seat pricing keeps the base platform cheaper than the big tools — pay only for the people you add. AI is metered separately as credits, so you only pay for the agent runs, chat, and automations you actually use. 30% off annual.",
            },
            {
              type: "heading",
              level: 3,
              text: "Basic — $3 / seat / month",
            },
            {
              type: "list",
              items: [
                "Unlimited seats, billed per member · 100 AI credits per seat / month",
                "Boards, tasks, and timelines",
                "Time tracking, team chat, and email support",
              ],
            },
            {
              type: "heading",
              level: 3,
              text: "Pro — $6 / seat / month",
            },
            {
              type: "list",
              items: [
                "Everything in Basic · 250 AI credits per seat / month",
                "AI planning and triage agents",
                "Client portal · priority support",
              ],
            },
            {
              type: "heading",
              level: 3,
              text: "Enterprise — Custom",
            },
            {
              type: "list",
              items: [
                "Volume per-seat pricing · custom AI credit allowance",
                "Everything in Pro · SSO and advanced permissions",
                "Custom integrations · dedicated account manager",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "FAQs",
          blocks: [
            {
              type: "heading",
              level: 3,
              text: "What makes Kavanah 'AI-native'?",
            },
            {
              type: "paragraph",
              text: "Kavanah was built from the ground up with AI agents at the core — not bolted on. Agents triage tasks, plan sprints, draft PRs from ai-eligible tickets, route approvals, and turn markdown specs into sequenced plans. Project management is one workspace, not a stack of tools glued together.",
            },
            {
              type: "heading",
              level: 3,
              text: "Can I control what the AI automates?",
            },
            {
              type: "paragraph",
              text: "Yes — you wire approval routes, watchers, and triage rules, and decide exactly where the AI acts on its own versus where it waits for a human. You stay in the loop wherever you want to be.",
            },
            {
              type: "heading",
              level: 3,
              text: "Can I create my own AI employees?",
            },
            {
              type: "paragraph",
              text: "Yes. Create named AI Employees for any role, define each one's capability scopes and integration access, and let any workspace member assign them tasks — they report back like a teammate.",
            },
            {
              type: "heading",
              level: 3,
              text: "Is there a desktop and mobile app?",
            },
            {
              type: "paragraph",
              text: "Yes — Kavanah ships as a web app, a desktop application, and an iOS app, all kept in sync, so your workspace travels with you.",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "aw3-host",
    title: "AW3 Host",
    category: "Cloud Infrastructure",
    summary:
      "Designed and built the entire AW3 Host platform — an AI-native, multi-cloud deployment control plane that deploys, monitors, and optimizes services across 20+ cloud providers from a single dashboard, with no vendor lock-in.",
    role: "Founder & Lead Engineer",
    year: "2026",
    tags: ["Cloud Infrastructure", "DevOps", "AI", "Multi-Cloud", "TypeScript"],
    metrics: [
      "20+ cloud platforms, one dashboard",
      "AI-powered cost optimization (Claude)",
      "99.99% uptime SLA",
    ],
    image: "/projects/aw3-host.png",
    tagline: "One platform. Every cloud provider.",
    gradient: "from-sky-500 via-cyan-400/60 to-bg",
    problem:
      "Modern teams run across a sprawl of cloud providers — AWS, GCP, Azure, Vercel, Cloudflare, Fly.io, Kubernetes, GPU clouds — each with its own dashboard, billing, secrets, and deploy mechanics. The result is vendor lock-in, runaway spend, no unified view of health or cost, and no easy way to route each workload to the platform that actually fits it.",
    process:
      "I built AW3 Host end-to-end as a multi-cloud control plane: a unified deployment, routing, secrets, monitoring, and cost layer over 20+ providers, with a Claude-powered assistant for diagnosis and natural-language deploys. The stack spans a TypeScript SDK, full CLI, and REST API, with SSE log streaming, policy gates, and GitOps reconciliation.",
    solution:
      "A single dashboard to deploy anywhere and optimize everything — AI cost optimization, performance-based traffic orchestration, automatic failover, encrypted secrets, geo-routing, and a policy engine — plus deep capabilities for FinOps, compliance, runtime security, and LLM/GPU hosting.",
    outcome:
      "AW3 Host is live in public beta as the hosting arm of AW3 Technology (aw3.host). It integrates 20+ platforms, offers four deploy strategies and six routing modes, and ships a free Starter tier, a $29/mo Pro plan, and custom Enterprise contracts with a 99.99% uptime SLA and SOC 2 readiness.",
    meta: [
      { label: "Role", value: "Founder & Lead Engineer" },
      { label: "Year", value: "2026" },
      { label: "Status", value: "Live · Public Beta" },
      { label: "Stack", value: ["TypeScript", "Next.js", "Node.js", "CLI", "REST API", "Claude"] },
      { label: "Link", value: "aw3.host" },
    ],
    emphasisKeywords: ["AW3 Host", "AW3", "multi-cloud", "AI-native", "Claude", "control plane", "cloud"],
    caseStudy: {
      blocks: [],
      layout: [
        {
          type: "stack",
          heading: "Deploy anywhere. Optimize everything.",
          blocks: [
            {
              type: "paragraph",
              text: "AW3 Host is a multi-cloud deployment control plane. Deploy, monitor, and manage services across 20+ cloud platforms from a single dashboard — without vendor lock-in. Tell AW3 what matters most (speed, cost, or specific capabilities) and its AI automatically deploys and routes your apps to the optimal platforms.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "AI-native hosting orchestration",
              text: "One platform. Every cloud provider.",
            },
            {
              type: "image",
              label: "AW3 Host console — multi-cloud deployment at a glance",
              src: "/projects/aw3-host-dashboard.png",
              alt: "AW3 Host dashboard showing platform health, organizations, projects, and services",
              aspect: "video",
              rounded: "lg",
              fit: "contain",
            },
          ],
        },
        {
          type: "timeline",
          heading: "How it works",
          steps: [
            {
              title: "Connect",
              body: "Link all your hosting platforms — AWS, GCP, Azure, Vercel, Cloudflare, Fly.io, Kubernetes, GPU clouds and more — into one control plane.",
            },
            {
              title: "Set what matters",
              body: "Tell AW3 whether to optimize for performance, cost, or capability. Define policies: region-lock, budget caps, deploy windows, approval gates.",
            },
            {
              title: "Deploy & route",
              body: "Ship with Standard, Blue/Green, or Canary strategies — or just say 'deploy my API to production on AWS.' Traffic is routed to the best target in real time.",
            },
            {
              title: "Monitor & optimize",
              body: "Watch real-time health maps and p50/p95/p99 latency, sync daily cost from every provider, and apply Claude's savings recommendations with one click.",
            },
          ],
        },
        {
          type: "split",
          heading: "Features",
          content: [
            {
              type: "paragraph",
              text: "A unified layer over the entire cloud landscape — built so each workload runs on the platform that fits it best, with security and observability that span every provider.",
            },
            {
              type: "list",
              items: [
                "AI-powered cost optimization — Claude analyzes cross-provider cost and performance to surface cheaper alternatives and idle resources; apply or dismiss each in one click.",
                "Performance orchestration — auto-route traffic to the fastest platform by location, latency, and load, with p50/p95/p99 monitoring per service.",
                "Automatic failover — health checks every 60s; traffic reroutes to healthy alternatives when a platform degrades.",
                "Smart geo-routing — send users to the nearest, fastest platform with real-time best-target resolution.",
                "Unified security — AES-256-GCM encrypted secrets, environment-scoped stores, MFA, SSO/SAML 2.0, and SCIM provisioning.",
                "CLI, SDK & API — full CLI, TypeScript SDK, and REST API, including natural-language deploys via 'aw3 intent'.",
                "Policy engine — region-lock, provider-whitelist, budget-cap, deploy-window, approval-required, test-coverage, and vulnerability-scan policies.",
              ],
            },
            {
              type: "image",
              label: "AI Deployment Agent — suggested actions across security, reliability, and cost",
              src: "/projects/aw3-host-agent.png",
              alt: "AW3 Host AI Deployment Agent surfacing suggested actions",
              aspect: "video",
              rounded: "lg",
              fit: "contain",
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Deployment & traffic",
            },
            {
              type: "list",
              items: [
                "Strategies — Standard, Blue/Green with promote, Canary (5%→100% ramp), instant rollback.",
                "Lifecycle — exponential-backoff retry, live SSE log streaming, secret diff before deploy, approval gates with comments.",
                "Routing modes — Weighted, Blue/Green, Canary ramp, Geo, Failover, and Smart Resolve.",
              ],
            },
            {
              type: "image",
              label: "AW3 Assistant — natural-language infrastructure co-pilot",
              src: "/projects/aw3-host-assistant.png",
              alt: "AW3 Assistant chat co-pilot for deploying and investigating services",
              aspect: "video",
              rounded: "lg",
              fit: "contain",
            },
          ],
        },
        {
          type: "stack",
          heading: "Everything you need to run at scale",
          blocks: [
            {
              type: "list",
              items: [
                "Cost management — daily cost sync from all providers, drill-down by provider/service/environment/region, multi-threshold budget alerts via Slack and PagerDuty.",
                "Health checks & monitoring — HTTP, TCP, and synthetic probes; real-time health maps, uptime history, and latency metrics.",
                "AI assistant & NLP deploys — in-dashboard Claude chat to diagnose deployments, explore the platform, or deploy in natural language.",
                "Access control & teams — Owner/Admin/Member/Viewer roles, MFA, SSO/SAML/OIDC, SCIM, permission matrix, and break-glass access with full audit trail.",
                "Compliance & audit — full audit logging with CSV export, SOC 2 readiness, CIS benchmarks, per-deployment SBOM with vulnerability scanning, data residency, and GDPR support.",
                "Secrets management — environment-scoped stores with AES-256-GCM at rest, in-memory decryption at deploy time, and keys diffed before deployment.",
                "LLM & AI hosting — GPU-backed inference on CoreWeave, RunPod, and Modal with VRAM estimation, A/B endpoints, batch inference, and a HuggingFace model registry.",
                "DORA metrics & GitOps — deployment frequency, lead time, change-failure rate, MTTR; commit-driven reconciliation, drift detection, and Terraform export.",
                "FinOps & spot fleets — spot/preemptible fleet management with interruption handling, egress-aware cost arbitrage, and carbon-aware scheduling.",
                "Runtime security — eBPF runtime protection with Falco-compatible rules, ML anomaly detection, FIPS 140-2 mode, BYOK/KMS, and SigStore/Cosign signing.",
              ],
            },
            {
              type: "callout",
              tone: "metric",
              label: "Built for multi-cloud reality",
              text: "20+ platforms · 4 deploy strategies · 6 routing modes",
            },
            {
              type: "image",
              label: "Service Dependencies — visualize and manage service relationships across the fleet",
              src: "/projects/aw3-host-dependencies.png",
              alt: "AW3 Host service dependency graph across services",
              aspect: "video",
              rounded: "lg",
              fit: "contain",
            },
          ],
        },
        {
          type: "stack",
          heading: "20+ cloud platforms",
          blocks: [
            {
              type: "paragraph",
              text: "Connect all your hosting platforms and let AW3 choose the best one for each workload based on performance, pricing, and capabilities.",
            },
            {
              type: "list",
              items: [
                "Cloud — AWS, Google Cloud, Azure, DigitalOcean, Kubernetes, Hetzner, Linode.",
                "Frontend & edge — Vercel, Netlify, Cloudflare, Fly.io.",
                "Full stack & backend — Railway, Render, Supabase.",
                "GPU — CoreWeave (A100/H100), RunPod, Modal.",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "Pricing",
          blocks: [
            {
              type: "paragraph",
              text: "Start free and scale as you grow — no hidden fees. 1 credit = 1 compute action; credit packs never expire and Pro credits roll over.",
            },
            {
              type: "heading",
              level: 3,
              text: "Starter — Free forever",
            },
            {
              type: "list",
              items: [
                "500 credits included",
                "3 connected platforms · 5 projects",
                "Community support · basic analytics · 7-day log retention",
              ],
            },
            {
              type: "heading",
              level: 3,
              text: "Pro — $29/mo",
            },
            {
              type: "list",
              items: [
                "10,000 credits/month, unused credits roll over",
                "Unlimited platforms & projects",
                "Priority support · advanced analytics · 30-day log retention",
                "Custom domains · team collaboration (5 seats)",
              ],
            },
            {
              type: "heading",
              level: 3,
              text: "Enterprise — Custom",
            },
            {
              type: "list",
              items: [
                "Unlimited credits & team seats",
                "99.99% uptime SLA · dedicated support · 90-day log retention",
                "SSO / SAML · custom contracts · SOC 2 compliant",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "FAQs",
          blocks: [
            {
              type: "heading",
              level: 3,
              text: "What are credits used for?",
            },
            {
              type: "paragraph",
              text: "Credits are consumed based on hosting usage — deployments, bandwidth, and compute time. Different actions consume different amounts; 1 credit equals 1 compute action.",
            },
            {
              type: "heading",
              level: 3,
              text: "Do unused credits expire?",
            },
            {
              type: "paragraph",
              text: "On Pro, unused credits roll over to the next month. Free-tier credits reset monthly. Purchased credit packs never expire.",
            },
            {
              type: "heading",
              level: 3,
              text: "What happens if I run out of credits?",
            },
            {
              type: "paragraph",
              text: "We notify you when you're running low, and you can buy a credit pack or upgrade anytime. Live deployments are never terminated for a low balance.",
            },
          ],
        },
      ],
    },
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
      "Safety-first: human detection with a sub-50ms robot halt",
      "Model-agnostic: 8 vision models, one CLI",
      "Self-hosted — all inference runs locally, data never leaves your network",
    ],
    image: "/projects/openeye.png",
    caseStudyImage: "/projects/openeye-hero.png",
    tagline: "Open-source eyes for the agent era",
    gradient: "from-rose-500 via-sky-400/60 to-bg",
    problem:
      "Robots and autonomous agents need real-time perception — detection, depth, segmentation, scene understanding — but stitching together YOLO, SAM, Depth Anything, and VLMs into a production-grade pipeline is fragmented, brittle, and gated behind heavyweight ML tooling. And as robots enter homes and workplaces, there was no open visual safety layer watching the workspace. There was no Ollama-style developer experience for vision AI.",
    process:
      "Designed OpenEye as a CLI-first perception engine with a single mental model: pull a model, run inference, serve it. Built the runtime in Python on FastAPI/Typer/Pydantic, made it model-agnostic across 8 integrated models — YOLOv8, YOLO26, RF-DETR, Grounding DINO, SAM 2, Depth Anything, SmolVLA, and Qwen2.5-VL — with ONNX/TensorRT runtimes, and shipped a React/TypeScript dashboard with live streams, fleet management, MLOps, and governance. Built at the Nebius.Build SF: OpenClaw + Robotics Hackathon in 2026.",
    solution:
      "A unified open-source toolkit: `openeye pull`, `run`, `serve`, `watch`, `agent`, `fleet`, `mlops`, and `govern` — built around a six-layer pipeline (camera feed → vision → scene understanding → LLM reasoning → action planning → robot execution). A Safety Guardian layer pairs a fast geometric layer (YOLO every frame) with a periodic VLM smart layer and a halt protocol that freezes the robot in under 50ms when a human enters the danger zone. REST + WebSocket APIs, agentic perception loops, browser dashboard, and Unitree G1 robot integration, all from one CLI.",
    outcome:
      "Released publicly under aw3-technology on GitHub (v0.2.0, Apache 2.0) with an interactive demo, MkDocs documentation, and pipx-installable distribution (`pipx install openeye-sh`). Fully self-hosted — every frame is processed locally, so camera data never leaves the network. Positioned as the open-source perception layer for the agent era — designed to slot into any robotics, desktop-agent, or autonomous-agent stack with one command.",
    meta: [
      { label: "Role", value: "Creator & Lead Engineer" },
      { label: "Stack", value: ["Python", "FastAPI", "Typer", "React", "TypeScript", "ONNX", "TensorRT"] },
      { label: "Year", value: "2026" },
      { label: "Scope", value: ["CLI", "Inference Server", "Web Dashboard", "Fleet & MLOps"] },
      { label: "License", value: "Apache 2.0" },
      { label: "Repo", value: "github.com/aw3-technology/openeye.sh" },
    ],
    emphasisKeywords: ["OpenEye", "open-source", "perception", "vision AI", "Ollama", "agentic", "robots", "safety"],
    caseStudy: {
      blocks: [],
      layout: [
        {
          type: "stack",
          heading: "An open-source perception engine",
          blocks: [
            {
              type: "paragraph",
              text: "OpenEye turns raw video into structured world models — the perception layer robots and autonomous agents need to see, understand, and act. It's model-agnostic, self-hosted, and driven entirely from the command line: pull a model, run inference, serve it. Think Ollama, but for vision AI.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "Safety-first",
              text: "Human detection with a sub-50ms robot halt",
            },
          ],
        },
        {
          type: "timeline",
          heading: "Six layers, one pipeline",
          steps: [
            {
              title: "Camera Feed",
              body: "Hardware-agnostic ingestion from USB cameras, RTSP streams, video files, or simulated feeds.",
            },
            {
              title: "Vision Engine",
              body: "YOLO26, Grounding DINO, SAM 2, and RF-DETR detect, segment, and localize every object in frame.",
            },
            {
              title: "Scene Understanding",
              body: "Objects, a spatial map, and flagged hazards assembled into a structured scene graph.",
            },
            {
              title: "LLM Reasoning",
              body: "A VLM — Qwen2.5-VL via OpenRouter or the Nebius Token Factory — interprets context: what changed, what's unsafe, what to do.",
            },
            {
              title: "Action Planner",
              body: "Structured task decomposition turns intent into executable robot actions.",
            },
            {
              title: "Robot Adapter",
              body: "Plans dispatched to the connected controller — Unitree G1, SmolVLA, or simulation.",
            },
          ],
        },
        {
          type: "split",
          heading: "The safety guardian",
          content: [
            {
              type: "paragraph",
              text: "As robots enter homes and workplaces, OpenEye acts as a visual safety layer — monitoring any robot's workspace in real time and intervening before accidents happen.",
            },
            {
              type: "list",
              items: [
                "Fast layer — YOLO runs every frame for pure-geometry checks: is a hand inside the danger zone? A low-latency halt with no LLM overhead.",
                "Smart layer — a VLM analyzes periodically to catch what geometry can't: a knife that wasn't there before, an unstable stack, context-dependent risk.",
                "Halt protocol — on danger, OpenEye freezes the connected robot and resumes only once the workspace is confirmed clear.",
              ],
            },
          ],
          media: [
            {
              type: "callout",
              tone: "metric",
              label: "Detect → halt",
              text: "Under 100ms, end to end",
            },
            {
              type: "image",
              label: "Safety Guardian dashboard — live status, scene graph, and VLM reasoning",
              src: "/projects/openeye-dashboard.png",
              alt: "OpenEye Safety Guardian dashboard showing safety status, live log, scene graph, and action plan",
              aspect: "3/2",
            },
          ],
        },
        {
          type: "stack",
          heading: "Model-agnostic by design",
          blocks: [
            {
              type: "paragraph",
              text: "Swap models, combine pipelines, and extend with custom adapters. Eight models ship integrated out of the box — spanning real-time detection, segmentation, depth, and vision-language reasoning — all behind one unified API with ONNX and TensorRT runtimes.",
            },
            {
              type: "list",
              items: [
                "YOLOv8 & YOLO26 — real-time object detection across 80 COCO classes (Ultralytics).",
                "RF-DETR — an end-to-end detection transformer with no NMS (Roboflow).",
                "Grounding DINO — open-set detection driven by text prompts (IDEA Research).",
                "SAM 2 — zero-shot segment-anything for any object in any image (Meta AI).",
                "Depth Anything — monocular depth estimation at any resolution.",
                "SmolVLA — a compact vision-language-action model for robot control.",
                "Qwen2.5-VL — multimodal reasoning with native visual grounding (Alibaba Qwen).",
              ],
            },
            {
              type: "image",
              label: "Model Registry — browse, benchmark, and manage adapters",
              src: "/projects/openeye-registry.png",
              alt: "OpenEye model registry listing integrated and planned vision models with creators, categories, and adapters",
              aspect: "3/2",
            },
          ],
        },
        {
          type: "stack",
          heading: "A plug-and-play CLI",
          blocks: [
            {
              type: "paragraph",
              text: "Every capability is one command away — like ffmpeg for machine perception.",
            },
            {
              type: "list",
              items: [
                "openeye run — inference on any image with any model, unified JSON out.",
                "openeye watch — a live feed with real-time detection, safety zones, and hazard alerts.",
                "openeye serve — a FastAPI server with REST endpoints, WebSocket streams, and a browser dashboard.",
                "openeye agent — an agentic perceive-reason-act loop with observation memory and VLM reasoning.",
                "openeye fleet — register, monitor, and deploy to edge devices with canary rollouts and OTA updates.",
                "openeye mlops & govern — A/B testing, automated retraining, audit trails, and policy enforcement.",
              ],
            },
            {
              type: "image",
              label: "Agentic Loop — YOLO every frame (<100ms), VLM reasoning every 3s, synthesized into a plan",
              src: "/projects/openeye-agentic-loop.png",
              alt: "OpenEye agentic loop view describing the continuous perception, reasoning, and action cycle",
              aspect: "3/2",
            },
          ],
        },
        {
          type: "split",
          flip: true,
          heading: "Built for the physical world",
          content: [
            {
              type: "paragraph",
              text: "From robot safety to desktop automation, OpenEye gives machines structured visual understanding of the world in front of them.",
            },
            {
              type: "list",
              items: [
                "Robotics — safety-zone enforcement, human-robot coexistence, hazard identification, and scene graphs for planning.",
                "Application debugging — visual regression detection, layout validation, and VLM-powered UI analysis in CI/CD.",
                "Desktop agents — UI element detection and multi-window screen understanding as the eyes of computer-use agents.",
              ],
            },
          ],
          media: [
            {
              type: "image",
              label: "OpenEye",
              src: "/projects/openeye.png",
              alt: "OpenEye logo",
              aspect: "4/3",
            },
            {
              type: "callout",
              tone: "metric",
              label: "Self-hosted",
              text: "All inference runs locally",
            },
          ],
        },
        {
          type: "stack",
          heading: "Open infrastructure, open models",
          blocks: [
            {
              type: "paragraph",
              text: "Your cameras, your hardware, your data. Every frame is processed on-device or on-prem, so camera feeds never leave the network — deploy on laptops, edge devices, or air-gapped servers. Released publicly under aw3-technology on GitHub (v0.2.0, Apache 2.0), pipx-installable, with an interactive demo and MkDocs documentation. Built at the Nebius.Build SF: OpenClaw + Robotics Hackathon in 2026.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "Get started",
              text: "pipx install openeye-sh",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "intown",
    title: "InTown",
    category: "AI",
    summary:
      "Branded, prototyped, and produced the investor and marketing materials for InTown — an AI-native concierge that unlocks exclusive tables, events, and experiences through a natural voice and chat interface. Founded by Sean Stewart, son of Rod Stewart.",
    role: "Technology Lead & Designer",
    year: "2026",
    tags: ["AI", "Branding", "Prototype", "Pitch Deck", "Voice AI"],
    metrics: [
      "Brand, prototype & investor deck delivered",
      "Web + iOS (TestFlight) concierge demo",
      "$500K raise · $6M cap SAFE",
    ],
    image: "/projects/intown-card.webp",
    tagline: "Introducing your new concierge",
    gradient: "from-zinc-400 via-stone-500/60 to-bg",
    problem:
      "Sean Stewart had a sharp vision — an AI concierge that gives everyone VIP-level access to a city — and the relationships across luxury, hospitality, and entertainment to back it. What he needed was the rest of the package an investor expects: a brand worthy of the positioning, a working product to demo, and an investor narrative that frames InTown as a new category rather than another booking app.",
    process:
      "I came on as technology lead and designer to build everything around the idea. I shaped the InTown brand — the winged-key mark, the black-and-serif luxury identity, the \"Introducing your new concierge\" positioning — designed and built the working prototype (web demo plus an iOS app in TestFlight), and produced the sales, marketing, and investor materials, co-presenting the 2026 investor deck alongside Sean.",
    solution:
      "A complete, fundable presentation of InTown: a conversational concierge — \"Cierra\" — that plans, books, and personalizes outings through natural voice and chat; an all-in-one app for discovery, booking, and saved venues; and a brand and pitch that position InTown at the intersection of technology, luxury, and culture, with a clear LA-first go-to-market and multi-stream revenue model.",
    outcome:
      "InTown is live in demo at app.intown.guide with an iOS build in TestFlight, raising a $500K friends-and-family round on a SAFE ($6M cap, targeting Q4 2026) ahead of a $3.5M seed. Sean Stewart, Founder: \"Great platforms don't just aggregate choice. They unlock access.\"",
    meta: [
      { label: "Role", value: "Technology Lead & Designer" },
      { label: "Year", value: "2026" },
      { label: "Founder", value: "Sean Stewart" },
      { label: "Scope", value: ["Branding", "Prototype", "Marketing", "Investor Deck"] },
      { label: "Link", value: "intown.guide" },
    ],
    emphasisKeywords: ["InTown", "AI", "concierge", "Cierra", "voice", "luxury", "access"],
    caseStudy: {
      blocks: [],
      layout: [
        {
          type: "stack",
          heading: "Introducing your new concierge",
          blocks: [
            {
              type: "paragraph",
              text: "InTown is an AI-powered concierge that unlocks exclusive tables, events, and experiences through a natural conversational interface — revolutionizing how people connect with the best of a city through voice and text AI. By combining advanced personalization with insider access, it makes VIP treatment seamless and scalable for every user. I led the brand, prototype, and investor materials end to end.",
            },
            {
              type: "callout",
              tone: "quote",
              text: "Great platforms don't just aggregate choice. They unlock access. — Sean Stewart, Founder",
            },
            {
              type: "image",
              label: "InTown web demo — \"Ready to explore Los Angeles?\"",
              src: "/projects/intown-product.png",
              alt: "InTown app showing a conversational LA trip-planning interface with curated itineraries",
              aspect: "video",
              rounded: "lg",
              fit: "contain",
            },
          ],
        },
        {
          type: "timeline",
          heading: "What I did",
          steps: [
            {
              title: "Branding",
              body: "Built the InTown identity — the winged-key mark, the black-and-serif luxury aesthetic, and the \"Introducing your new concierge\" positioning that frames InTown at the intersection of technology, luxury, and culture.",
            },
            {
              title: "Prototype",
              body: "Designed and built the working product — a web demo at app.intown.guide and an iOS app in TestFlight — where users chat naturally to plan outings, get inspired by curated itineraries, book reservations, and save favorite venues.",
            },
            {
              title: "Marketing materials",
              body: "Produced the sales and marketing surface that carries the brand into market, translating an ambitious lifestyle vision into clear, confident creative.",
            },
            {
              title: "Pitch materials",
              body: "Produced the 2026 investor deck — problem, solution, market, business model, GTM, and the ask — and co-presented it alongside founder Sean Stewart as the company's technology lead.",
            },
          ],
        },
        {
          type: "split",
          heading: "The product",
          content: [
            {
              type: "paragraph",
              text: "Through a sleek mobile app, users chat naturally to plan outings, get inspired by curated itineraries, book exclusive reservations, and save favorite venues — all in one place. From discovering hidden gems to securing VIP access, InTown turns city exploration into a seamless, personalized experience.",
            },
            {
              type: "list",
              items: [
                "Conversational concierge — a natural chat and voice interface that plans, books, and personalizes every outing.",
                "All-in-one platform — discover, book, and manage experiences, hotels, and events seamlessly.",
                "Exclusive access — unlock hidden gems, VIP reservations, and curated itineraries you can't find elsewhere.",
                "Personalized experiences — AI + insider curation, transparent \"why we picked this\" explanations, and smart alternates when plans fall through.",
              ],
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Meet Cierra",
            },
            {
              type: "list",
              items: [
                "Natural conversation — voice + chat interface for planning and booking.",
                "Personalized insight — learns preferences and adapts over time.",
                "Exclusive access — connects to insider venues, events, and perks.",
                "Seamless booking — one command secures reservations, tickets, or curated itineraries.",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "A new category of lifestyle platform",
          blocks: [
            {
              type: "paragraph",
              text: "The local discovery and booking space is fragmented — review platforms, booking apps, and social tools each solve only part of the problem. InTown is positioned as the first AI-native concierge that unifies discovery, booking, and social coordination into a single personalized experience, defensible through an AI personalization engine, local + social network effects, a vendor-integration moat, and a multi-stream revenue model.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "LA-first go-to-market · $120B+ TAM",
              text: "Affiliate + subscriptions + vendor SaaS — not just ads",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "andromeda-project",
    title: "The Andromeda Project",
    category: "Writing & Research",
    summary:
      "Founded and authored The Andromeda Project — a long-running body of essays and research proposing new organizations that operate peacefully and in parallel with the existing world order. 90+ essays across six collections, spanning global governance, relational economics, blockchain consensus, and formal mathematical frameworks. The intellectual origin of AW3 — Andromeda Web3.",
    role: "Founder & Author",
    year: "2021",
    tags: ["Philosophy", "Governance", "Economics", "Research", "Writing"],
    metrics: [
      "90+ essays across six collections",
      "A parallel-society framework for global governance",
      "The origin of AW3 — Andromeda Web3",
    ],
    image: "/projects/andromeda-hero.png",
    caseStudyImage: "/projects/andromeda-hero.png",
    tagline: "A parallel society for a colliding world",
    gradient: "from-fuchsia-600 via-violet-500/60 to-bg",
    problem:
      "The major crises facing our species and our planet — governance, economics, coordination — are usually met with either incremental reform that's too timid to matter or revolutionary rupture that's too destabilizing to survive. There was no rigorous, peaceful framework for building genuinely new institutions without triggering the resistance that destroys them before they take hold.",
    process:
      "I founded The Andromeda Project as a long-running body of writing and research — 90+ essays across six collections proposing the creation of new organizations that operate peacefully and in parallel with the existing world organizational structure. The work spans philosophy and global governance, a relational theory of economics, generational universe theory, blockchain consensus, and, in 2026, research-grade mathematical frameworks rooted in ZFC set theory, measure theory, and information theory.",
    solution:
      "The Andromeda Project proposes a parallel society: new organizations that coexist with — rather than overthrow — existing structures, engineered methodically to create minimal resistance to the status quo. Named for the Andromeda galaxy's projected collision with the Milky Way, it frames a new form of global governance that gradually collides with and assimilates the old — incrementally and evolutionarily, never radically.",
    outcome:
      "The Andromeda Project is live at andromedaproject.com with 90+ published essays across six collections, and is the intellectual origin of AW3 — Andromeda Web3 — the venture studio it gave its name to. The 2026 \"Revelations\" collection extends the original October 2021 essays with formal frameworks, including a boundary-stability theory that unifies physics, cryptography, AI, and Web3 under a single principle.",
    meta: [
      { label: "Role", value: "Founder & Author" },
      { label: "Started", value: "October 2021" },
      { label: "Format", value: "Essays & Research" },
      { label: "Collections", value: "6" },
      { label: "Themes", value: ["Governance", "Economics", "Physics", "Cryptography"] },
      { label: "Link", value: "andromedaproject.com" },
    ],
    emphasisKeywords: [
      "The Andromeda Project",
      "parallel society",
      "Andromeda",
      "global governance",
      "Relational Economics",
      "Proof of Love",
      "boundary stability",
      "AW3",
    ],
    caseStudy: {
      blocks: [],
      layout: [
        {
          type: "stack",
          heading: "A parallel society for a colliding world",
          blocks: [
            {
              type: "paragraph",
              text: "The Andromeda Project is here to propose a solution to the major crises we face as a species and as a planet: the creation of new organizations that operate peacefully and in parallel with the existing world organizational structure. It is a body of essays and research I've written and developed since October 2021 — a single, evolving argument for how genuinely new institutions can be built without tearing down the ones we already have.",
            },
            {
              type: "callout",
              tone: "quote",
              text: "Andromeda is the closest galaxy to the Milky Way, and is projected to one day collide with it — a metaphor for a new form of global governance and its eventual collision and assimilation with the old.",
            },
            {
              type: "image",
              label: "andromedaproject.com — the project's home",
              src: "/projects/andromeda-hero.png",
              alt: "The Andromeda Project homepage — \"Solving global crises through new organizations\"",
              aspect: "video",
              rounded: "lg",
              fit: "contain",
            },
          ],
        },
        {
          type: "timeline",
          heading: "The thesis",
          steps: [
            {
              title: "Parallel, not opposed",
              body: "The proposed organizations operate peacefully and in parallel with the existing world structure — coexisting with it rather than fighting it, so they can grow without being crushed.",
            },
            {
              title: "Reengineer the primitives",
              body: "The solution is more complex than the general populace understands. It requires a reengineering of the primary components of society — not a slogan, but a methodical redesign of how we coordinate.",
            },
            {
              title: "Minimal resistance",
              body: "These disruptive organizations must be executed methodically and with precision, deliberately engineered to create minimal resistance to the status quo they are meant to eventually replace.",
            },
            {
              title: "Incremental and evolutionary",
              body: "The world organization this produces will not be radically different from the existing state. The outcome is incremental and evolutionary — there is no simple or complete solution, only better ones.",
            },
          ],
        },
        {
          type: "stack",
          heading: "Six collections",
          blocks: [
            {
              type: "paragraph",
              text: "The writing is organized into curated collections — each a cohesive journey through related concepts, together moving from political and economic philosophy toward formal, mathematical foundations.",
            },
            {
              type: "list",
              items: [
                "The Andromeda Essays (21) — the founding essays on creating new organizations that operate peacefully and in parallel with the existing world order.",
                "Relational Economics (11) — a framework placing relationships, networks, and relative power at the center of economic analysis, beyond the atomistic individual.",
                "Generational Universe Theory (20) — how the universe was generated and continues to generate itself, examining the creative processes underlying cosmic existence.",
                "Nivana Blockchain (3) — whitepapers on the Nivana blockchain and Proof of Love (PoL) consensus, integrating staking with community-driven contribution for fairer governance.",
                "Randomness as the Ultimate Anti-Pattern (16) — an information-theoretic study of the opposition between cryptography and machine learning, where randomness defines the boundary between security and intelligence.",
                "Revelations for 2026 (21) — formal mathematical frameworks that ground the original 2021 essays in ZFC set theory, measure theory, and information theory.",
              ],
            },
          ],
        },
        {
          type: "split",
          heading: "Revelations for 2026 — the formal turn",
          content: [
            {
              type: "paragraph",
              text: "In 2026 the project turned rigorous. The Revelations collection refines, expands, and formalizes the foundational concepts of the original October 2021 essays — grounding their spiritual and philosophical claims in formal structures. Its centerpiece is boundary stability: the idea that trust is not declared but emerges when boundaries survive contact with the world, unifying physics, cryptography, AI, and Web3 under one principle.",
            },
            {
              type: "list",
              items: [
                "Boundary Stability — a unifying framework treating trust as boundary stability over time, applied from quantum measurement to world governance.",
                "Measurement as boundary formation — a research-grade treatment of the quantum measurement problem, with closed-form toy models and an arrow-of-time theorem.",
                "World governance as a boundary problem — the hardest possible boundary problem: planet-scale, strategic actors, contested information, no final arbiter.",
              ],
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Selected essays",
            },
            {
              type: "list",
              items: [
                "What is a Parallel Society? — a definitive explanation of the concept underpinning the whole project (Chapter 226).",
                "Relational Economics as Boundary Economics — value as relationship; trust as boundary stability over time.",
                "Equilibrium Attention — optimal resource allocation across transformer heads, where every active head returns equal marginal value per unit of compute.",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "Where AW3 came from",
          blocks: [
            {
              type: "paragraph",
              text: "The Andromeda Project is the intellectual origin of my venture studio: AW3 stands for Andromeda Web3. The studio is where the project's ideas about new, parallel organizations meet execution — building and financing the technology that a more relational, more decentralized world order would actually run on.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "One evolving argument, since October 2021",
              text: "90+ essays · 6 collections · andromedaproject.com",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "baird-augustine",
    title: "Baird Augustine",
    category: "Fintech",
    summary:
      "Fractional CTO and venture partner to Baird Augustine, a Silicon Valley neo-investment bank — building the brand, website, and investor materials from day one, and architecting Direct Credit, its custom lending platform.",
    role: "Fractional CTO & Venture Partner",
    year: "2024",
    tags: ["Fintech", "Investment Banking", "Lending", "Branding", "Fundraising"],
    metrics: [
      "$700B+ capital network across the platform",
      "$20B+ dry powder being deployed",
      "Direct Credit lending platform: $100K–$10M+ loans",
    ],
    image: "/projects/baird-augustine.png",
    tagline: "Building the future of finance — from brand to lending platform",
    gradient: "from-emerald-500 via-teal-400/60 to-bg",
    problem:
      "Ryan Baird and Henry Augustine set out to build Baird Augustine as a cross-border neo-investment bank in Silicon Valley — alternative asset management, venture capital, and institutional advisory under the Finance Inc. umbrella. They had the network, the track record, and the mandate; what they didn't have was the technology, brand, and digital infrastructure to present a credible institution to global investors and to actually deploy capital into private markets.",
    process:
      "I joined as fractional CTO and venture partner from the beginning — helping structure the company alongside the founders. I owned the technology and brand surface end to end: defining the Baird Augustine identity, designing and building the website, producing sales and presentation materials, standing up and running email campaigns to prospective investors, and co-hosting institutional roadshow events. In parallel, I architected and built Direct Credit, the firm's custom lending platform.",
    solution:
      "A complete institutional presence and a working lending engine. The brand and website position Baird Augustine as a premiere investment bank; the investor campaigns and events feed a capital network representing over $700B in AUM. Direct Credit is a premium business-lending platform — $100K to $10M+ in term loans, lines of credit, equipment, and real estate financing — with 24-hour preliminary decisions, bank-level encryption, and an integrated AI support assistant.",
    outcome:
      "Baird Augustine is live and operating, recognized by the State of California for investment banking decorum in an award presented by the Honorable Fiona Ma, State Treasurer. Direct Credit is deployed at directcredit.net. Ryan Baird, CEO: \"AW3 has helped us structure Baird Augustine and the holding company Finance Inc. from the beginning. He provides invaluable insight and expertise in technology.\"",
    meta: [
      { label: "Role", value: "Fractional CTO & Venture Partner" },
      { label: "Engaged", value: "2024–present" },
      { label: "Location", value: "Silicon Valley, CA" },
      { label: "Scope", value: ["Brand", "Website", "Investor Materials", "Lending Platform"] },
    ],
    emphasisKeywords: [
      "Direct Credit",
      "neo-investment bank",
      "fractional CTO",
      "Finance Inc.",
      "Asymmetrical Alpha",
      "CAGR Club",
      "lending",
      "AI",
    ],
    caseStudy: {
      blocks: [],
      layout: [
        {
          type: "stack",
          heading: "Silicon Valley's neo-investment bank",
          blocks: [
            {
              type: "paragraph",
              text: "Baird Augustine is a cross-border neo-investment bank based in Silicon Valley, specializing in alternative asset management, venture capital, and institutional advisory — connecting global investors to high-growth opportunities in technology and innovation. The firm is on a mission to transform the world into a radically abundant global society through world-class integrity, investor obsession, and a reverence for innovation. I came on as fractional CTO and venture partner at the founding to build the technology and brand that mission required.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "Capital network",
              text: "$700B+ in AUM · $20B+ dry powder deploying",
            },
            {
              type: "callout",
              tone: "quote",
              text: "AW3 has helped us structure Baird Augustine and the holding company Finance Inc. from the beginning. He provides invaluable insight and expertise in technology. — Ryan Baird, CEO & Co-Founder",
            },
            {
              type: "image",
              label: "Baird Augustine — the brand and website I designed and built",
              src: "/projects/baird-augustine-hero.png",
              alt: "Baird Augustine homepage hero — \"Neo-Investment Bank\" with the Baird Augustine wordmark",
              aspect: "video",
              rounded: "lg",
            },
            {
              type: "image",
              label: "\"Welcome to the Future of Finance\" — mission and shared values",
              src: "/projects/baird-augustine-mission.png",
              alt: "Baird Augustine mission section with Pursuing Excellence and Shared Values",
              aspect: "video",
              rounded: "lg",
            },
            {
              type: "image",
              label: "The Baird Augustine wordmark and identity across the site",
              src: "/projects/baird-augustine-brand.png",
              alt: "Baird Augustine footer with the Baird Augustine serif wordmark",
              aspect: "video",
              rounded: "lg",
            },
          ],
        },
        {
          type: "timeline",
          heading: "From day one, end to end",
          steps: [
            {
              title: "Brand & identity",
              body: "Defined the Baird Augustine brand from scratch — the name, visual language, and the \"Welcome to the Future of Finance\" positioning that frames the firm as the world's most exceptional financial institution, built on partnership, client service, integrity, and quality.",
            },
            {
              title: "Website & digital presence",
              body: "Designed and built the public website and digital surface across Home, About, Services, Portfolio, and Press — a premium institutional presence credible enough to put in front of family offices and global allocators.",
            },
            {
              title: "Sales & presentation materials",
              body: "Produced the sales and presentation collateral the team takes into the room — pitch decks, one-pagers, and roadshow materials that translate the firm's track record into a fundable narrative.",
            },
            {
              title: "Investor campaigns & events",
              body: "Stood up and ran email campaigns to prospective investors, and co-hosted institutional roadshow events — feeding a capital network that now represents over $700B in AUM.",
            },
            {
              title: "Direct Credit lending platform",
              body: "Architected and built Direct Credit, the firm's custom software platform for private-market lending — moving Baird Augustine from advisory into actually deploying capital to borrowers.",
            },
          ],
        },
        {
          type: "split",
          heading: "Direct Credit — the lending platform",
          content: [
            {
              type: "paragraph",
              text: "Direct Credit is a premium business-lending platform built for ambitious, high-growth companies — exclusive financing with competitive rates, flexible terms, and dedicated advisors. I designed and built it as the engine that lets Baird Augustine bridge institutional capital to private-market borrowers, live at directcredit.net.",
            },
            {
              type: "list",
              items: [
                "Loan amounts from $100K to $10M+, sized to the business.",
                "Preliminary decision within 24 hours — speed that matches the deployment cycle.",
                "Bank-level encryption and a streamlined digital application.",
                "Dedicated lending specialists with customizable, cash-flow-aligned repayment.",
                "Integrated AI support assistant in the chat interface.",
              ],
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Built for",
            },
            {
              type: "list",
              items: [
                "Business lines of credit",
                "Term loans",
                "Equipment financing",
                "Real estate loans",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "An integrated ecosystem",
          blocks: [
            {
              type: "paragraph",
              text: "Finance Inc., the top-co, houses a set of business units that integrate under one umbrella — and I led brand identity across them, not just the parent firm. The brand and platform work I built sits inside a broader institutional machine spanning investing, media, and community.",
            },
            {
              type: "list",
              items: [
                "Asymmetrical Alpha — the firm's hedge fund and institutional investing arm; I designed its brand identity (bairdaugustine.com/services/asymmetrical-alpha).",
                "CAGR Club — a private investment club, \"Community Advancing Growth & Returns\"; I designed its crest and full brand identity.",
                "Silicon Valley Economic Forum — flagship institutional investor forum.",
                "Focus on Risk — the firm's podcast.",
              ],
            },
            {
              type: "image",
              label: "CAGR Club — crest and brand identity I designed for the firm's private investment club",
              src: "/projects/cagr-club-brand.png",
              alt: "CAGR Club crest logo with two rearing horses and the tagline Community Advancing Growth & Returns",
              aspect: "video",
              rounded: "lg",
              fit: "contain",
            },
          ],
        },
        {
          type: "split",
          flip: true,
          heading: "Services across the capital stack",
          content: [
            {
              type: "paragraph",
              text: "Baird Augustine commits people, capital, and ideas to help clients grow. The service offering spans the full capital stack — from structuring through fundraising to deployment.",
            },
            {
              type: "list",
              items: [
                "Corporate-Development-as-a-Service™ — vision, structure, and strategic planning.",
                "Due Diligence Certification — institutional-grade diligence for capital partners.",
                "Roadshow Membership — access to the firm's investor events and network.",
              ],
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Premium services",
            },
            {
              type: "list",
              items: [
                "Asset management & custodial",
                "Cross-border banking & international finance",
                "Institutional fundraising & capital solutions",
                "Mergers & acquisitions / corporate finance",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "Recognition",
          blocks: [
            {
              type: "paragraph",
              text: "Baird Augustine was recognized by the State of California for investment banking decorum and its innovative approach to driving liquidity into private opportunities — an award presented by the Honorable Fiona Ma, State Treasurer, in 2024. The firm carries 100+ years of collective experience and a 95% net promoter score, and continues to operate with securities offered through Umergence LLC, member FINRA/SIPC.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "Award · State of California",
              text: "Recognized for investment banking decorum — presented by Treasurer Fiona Ma",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "bitwage",
    title: "Bitwage",
    category: "Fintech",
    summary:
      "Led branding, landing pages, and sales & marketing for a pioneering global crypto-payroll platform — and co-produced the equity crowdfund campaign that brought in $3MM. Engaged from 2022 through Bitwage's acquisition by Paystand in 2025.",
    role: "Advisor & Angel Investor",
    year: "2022",
    tags: ["Fintech", "Crypto", "Payroll", "Fundraising", "Marketing"],
    metrics: [
      "$3MM equity crowdfund co-produced",
      "30X ARR growth across the engagement",
      "$400M+ payroll processed · 90,000+ workers",
      "Acquired by Paystand (2025)",
    ],
    image: "/projects/bitwage.png",
    tagline: "Pay the world — global payroll, paid in crypto",
    gradient: "from-orange-500 via-amber-400/60 to-bg",
    problem:
      "Bitwage had paid out global teams in cryptocurrency and stablecoins since 2014, with a real product and real traction — but needed help unlocking retail and institutional capital, modernizing its public-facing brand and landing pages, and turning a complex multi-product offering into a story investors and customers could grasp quickly.",
    process:
      "From 2022 I worked alongside Jonathan Chester as an advisor and angel investor, owning the brand and growth surface end to end — refreshing the Bitwage brand, rebuilding landing pages, and producing sales and marketing collateral. I also co-produced the company's equity crowdfund campaign, running the creative and mechanics that brought in $3MM.",
    solution:
      "A modernized brand and marketing surface that frames Bitwage's full stack — Global Payroll, W2 Crypto Benefits, and Crypto-Funded Payroll — as one clear offering, paired with a co-produced equity crowdfund campaign that raised $3MM from the community and continued fundraising and growth support.",
    outcome:
      "ARR climbed over 30X across the engagement, the $3MM crowdfund closed successfully, and Bitwage was ultimately acquired by Paystand in 2025. Jonathan Chester, CEO: \"AW3 has played a critical role in our fundraising, website development and sales/marketing execution.\"",
    meta: [
      { label: "Role", value: "Advisor & Angel Investor" },
      { label: "Engaged", value: "2022–2025" },
      { label: "Outcome", value: "Acquired by Paystand (2025)" },
      { label: "Scope", value: ["Branding", "Landing Pages", "Sales & Marketing", "Equity Crowdfund"] },
    ],
    emphasisKeywords: ["Bitwage", "crypto", "stablecoins", "ARR", "equity crowdfund", "Paystand", "acquired"],
    caseStudy: {
      blocks: [],
      layout: [
        {
          type: "stack",
          heading: "Pay the world",
          blocks: [
            {
              type: "paragraph",
              text: "Bitwage makes global payroll easy for teams and freelancers, offering flexible payments in cryptocurrency, stablecoins, or local currency. Founded in 2014, it lets companies pay workers across nearly 200 countries with same-day options — and lets workers choose how they get paid. I came on in 2022 as an advisor and angel investor to lead the brand, landing pages, and sales & marketing, and to co-produce the equity crowdfund campaign that brought in $3MM.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "Trusted by thousands of freelancers & businesses",
              text: "$400M+ payroll processed · 90,000+ registered workers · 4,500+ registered companies",
            },
            {
              type: "callout",
              tone: "quote",
              text: "AW3 has played a critical role in our fundraising, website development and sales/marketing execution. — Jonathan Chester, CEO & Co-Founder",
            },
          ],
        },
        {
          type: "timeline",
          heading: "What I did",
          steps: [
            {
              title: "Branding",
              body: "Refreshed the Bitwage brand and visual language so a complex, multi-product crypto-payroll platform reads as one confident, institutional offering — credible to both retail backers and enterprise buyers.",
            },
            {
              title: "Landing page development",
              body: "Rebuilt the public-facing landing pages around the \"Pay the World\" positioning, structuring the product lineup — Global Payroll, W2 Crypto Benefits, and Crypto-Funded Payroll — into a clear, conversion-focused narrative.",
            },
            {
              title: "Sales & marketing materials",
              body: "Produced the sales and marketing collateral the team takes to market — decks, one-pagers, and campaign creative that translate the platform's reach and track record into a fundable, sellable story.",
            },
            {
              title: "Equity crowdfund — co-produced",
              body: "Co-produced the equity crowdfund campaign end to end, running the creative and mechanics that brought $3MM in from the community to fuel the company's next stage of growth.",
            },
          ],
        },
        {
          type: "split",
          heading: "A full payroll stack",
          content: [
            {
              type: "paragraph",
              text: "Bitwage is more than just payments. The brand and marketing work positions the full platform — flexible global payroll, compliant W2 crypto benefits, and crypto-funded payroll — alongside the invoicing, expense, and accounting automation that make it a complete workforce-management solution.",
            },
            {
              type: "list",
              items: [
                "Global Payroll — timely payments to teams across nearly 200 countries, with same-day options in crypto, stablecoins, or local currency.",
                "W2 Crypto Benefits — easy, compliant W2 that lets employees receive part or all of their wages in cryptocurrency alongside traditional pay.",
                "Crypto-Funded Payroll — fund payroll with crypto while teams receive local currency or crypto, plugged into existing financial tools.",
                "Payroll & Beyond — invoices, expenses, and automated accounting for fully streamlined workforce management.",
              ],
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Pay how you want",
            },
            {
              type: "list",
              items: [
                "Cryptocurrency",
                "Stablecoins",
                "Local currency",
                "Same-day options",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "10 years, zero breaches",
          blocks: [
            {
              type: "paragraph",
              text: "For over ten years, Bitwage has maintained a spotless security record — zero breaches since its inception in 2014 — backed by SOC compliance. That trust is the foundation the brand and crowdfund campaign were built on: a platform safe enough to put a global workforce's pay on top of.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "Security record · since 2014",
              text: "Zero breaches in 10+ years · SOC compliant",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "blocksee",
    title: "Blocksee",
    category: "Web3",
    summary:
      "Designed and built the landing page and the React-based blockchain CRM for Blocksee — a Web3 commerce and analytics platform that pairs the accessibility of Shopify with the transparency of Etherscan. Integrated the frontend directly with Blocksee's on-chain backend, and supported the team through fundraising.",
    role: "Frontend Lead & Fundraising Advisor",
    year: "2024",
    tags: ["Web3", "CRM", "React", "Analytics", "Frontend"],
    metrics: [
      "Landing page + blockchain CRM built in React",
      "Wallet-level analytics across smart contracts & NFTs",
      "Ongoing fundraising support",
    ],
    image: "/projects/blocksee-card.png",
    caseStudyImage: "/projects/blocksee.webp",
    tagline: "See more with Blocksee",
    gradient: "from-purple-500 via-pink-400/60 to-bg",
    problem:
      "The explosion of decentralized technology brought extraordinary potential — and immense complexity. On-chain data is rich but fragmented and unstructured; wallets, smart contracts, and communities live across networks with different standards; and Web3 brands lacked Shopify-grade infrastructure to run commerce, track analytics, and understand customer behavior. Blocksee had a strong thesis to close that gap, but needed a polished public face and a working CRM — on a tight investor timeline.",
    process:
      "I designed and built Blocksee's landing page, then built out the blockchain CRM in React — integrating the interface directly with Blocksee's on-chain backend so brands could organize wallets, track activity, and engage their communities. The work spanned both the marketing surface investors see and the product itself, on a visual language tuned for Web3 users. In parallel, I supported the team through fundraising and investor readiness.",
    solution:
      "A polished, conversion-focused landing page paired with a responsive React blockchain CRM — a wallet-level command center that turns raw on-chain activity into organized contacts, segments, and analytics. The CRM plugs into Blocksee's broader platform: Shopify-style Web3 storefronts, transactional data intelligence, and AI-driven insights, unifying commerce, analytics, and artificial intelligence in one toolkit.",
    outcome:
      "Blocksee is operating in market as a Web3 commerce and analytics platform. Eric Forst, CEO: \"AW3 did an amazing job building out the frontend for our product Blocksee and are now helping us with fundraising. They delivered within budget and on time.\"",
    meta: [
      { label: "Role", value: "Frontend Lead & Fundraising Advisor" },
      { label: "Stack", value: ["React", "Node.js", "Web3 APIs"] },
      { label: "Year", value: "2024" },
      { label: "Scope", value: ["Landing Page", "Blockchain CRM", "Fundraising"] },
      { label: "Founder", value: "Eric Forst" },
      { label: "Link", value: "blocksee.com" },
    ],
    emphasisKeywords: [
      "Blocksee",
      "blockchain CRM",
      "Web3",
      "React",
      "wallet",
      "on-chain",
      "Shopify",
      "Etherscan",
    ],
    caseStudy: {
      blocks: [],
      layout: [
        {
          type: "stack",
          heading: "Shopify + Etherscan = Blocksee",
          blocks: [
            {
              type: "paragraph",
              text: "Blocksee, founded by Eric Forst, is the Web3 commerce and analytics stack for the decentralized economy. It bridges Web3 data intelligence and AI-powered commerce — letting brands, developers, and enterprises sell digital assets, track wallets and smart contracts, and manage AI-driven transactions through one platform. By combining the accessibility of Shopify with the transparency of Etherscan, it gives businesses a new standard in Web3 data infrastructure, analytics, and engagement.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "Web3 commerce, data intelligence & AI — unified",
              text: "See more with Blocksee",
            },
            {
              type: "image",
              label: "The Blocksee dashboard — wallet-level revenue, tokens, and customer analytics",
              src: "/projects/blocksee.webp",
              alt: "Blocksee dashboard showing total revenue, transaction volume, tokens claimed, transaction count, a revenue chart, and a customers breakdown",
              aspect: "video",
              rounded: "lg",
              fit: "contain",
            },
          ],
        },
        {
          type: "split",
          heading: "What I built",
          content: [
            {
              type: "paragraph",
              text: "I owned Blocksee's front-of-house and its CRM. First the landing page — the conversion-focused marketing surface that introduces the platform and carries it into investor demos. Then the blockchain CRM itself, built in React and wired directly into Blocksee's on-chain backend, so the wallet, contract, and community data the platform ingests becomes something a brand can actually browse, segment, and act on.",
            },
            {
              type: "list",
              items: [
                "Landing page — a polished, responsive marketing site tuned to the visual cues Web3 users expect.",
                "Blockchain CRM in React — a wallet-level command center for organizing contacts, tagging communities, and tracking activity.",
                "Backend integration — the React frontend connected directly to Blocksee's on-chain data backend and Web3 APIs.",
                "Fundraising support — investor-ready surfaces and ongoing support through the raise.",
              ],
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Stack & scope",
            },
            {
              type: "list",
              items: [
                "React frontend",
                "Web3 / on-chain data APIs",
                "Wallet & smart-contract analytics",
                "Landing page + product UI",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "Web3 without the blindfold",
          blocks: [
            {
              type: "paragraph",
              text: "For most businesses, Web3 remains an opaque space full of technical barriers and operational uncertainty. Blocksee was built to eliminate those gaps — and the CRM I built is where much of that clarity surfaces.",
            },
            {
              type: "list",
              items: [
                "Fragmented data — on-chain transactions are rich but unstructured, making actionable insight hard to derive.",
                "No unified view — wallets, smart contracts, and community interactions span multiple networks with different standards.",
                "Limited commerce infrastructure — Web3 brands lack Shopify-like tools for payments, analytics, and customer behavior.",
                "AI agents without oversight — as AI-driven transactions grow, businesses need to monitor, verify, and audit agent behavior in real time.",
              ],
            },
          ],
        },
        {
          type: "split",
          flip: true,
          heading: "One platform, four offerings",
          content: [
            {
              type: "paragraph",
              text: "Blocksee combines intuitive front-end tools with powerful on-chain data pipelines, so businesses can manage transactions, analyze wallet behavior, and integrate with AI systems from a single toolkit.",
            },
            {
              type: "list",
              items: [
                "Web3 shopping portals — Shopify-style storefronts that accept fiat or crypto for NFT drops, token sales, and digital memberships.",
                "Transactional data intelligence — smart-contract data turned into behavioral insight: wallet activity, power users, loyalty and retention models.",
                "Community data management — a wallet CRM to organize, tag, and engage members, with NFT minting APIs for personalized rewards.",
                "Data ingestion & integration — stream on-chain data into CRMs, ERPs, and dashboards, and link analytics to AI agents and MCP servers.",
              ],
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Where AI meets Web3",
            },
            {
              type: "list",
              items: [
                "Automate agent transactions — monitor, verify, and record AI activity on-chain.",
                "Adaptive pricing — adjust digital-asset pricing dynamically to real-time wallet demand.",
                "Predict consumer actions — forecast engagement or churn from on-chain patterns.",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "Impact",
          blocks: [
            {
              type: "paragraph",
              text: "Since launch, Blocksee has helped projects across multiple networks streamline analytics, expand revenue, and understand their user base in unprecedented depth.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "Reported by Blocksee clients",
              text: "Up to 40% more community engagement · 30% faster reporting · 100% wallet-level visibility",
            },
            {
              type: "callout",
              tone: "quote",
              text: "AW3 did an amazing job building out the frontend for our product Blocksee and are now helping us with fundraising. They delivered within budget and on time. — Eric Forst, CEO & Founder",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "carnomaly",
    title: "Carnomaly",
    category: "Web3",
    summary:
      "Lead engineer and designer on Carnomaly for two years — a Web3 automotive ecosystem reinventing how vehicles are bought, sold, financed, and owned. Drove design, UI/UX, frontend and backend development, and AI agent integration across the consumer app and the CarrDealer portal, now live and selling to dealerships.",
    role: "Lead Engineer & Designer",
    year: "2024",
    tags: ["Web3", "Automotive", "Blockchain", "React Native", "AI"],
    metrics: [
      "Full-stack across mobile, dealer portal & on-chain",
      "AI agents built and integrated into the product",
      "Live and selling to dealerships",
    ],
    image: "/projects/carnomaly.webp",
    caseStudyImage: "/projects/carnomaly-dealer-portal.png",
    tagline: "Practical blockchain for buying, selling & owning vehicles",
    gradient: "from-cyan-500 via-sky-400/60 to-bg",
    problem:
      "The used-vehicle market runs on friction — opaque history, tedious paperwork, confusing transactions, and a deep trust gap between buyers, sellers, and dealers. Carnomaly's answer was an ambitious Web3 ecosystem — a consumer app, a dealer portal, an on-chain vehicle ledger, DeFi lending, and a utility token — but an earlier dev shop's build had stalled, leaving incomplete code and dealerships waiting on a working product.",
    process:
      "I came on as lead engineer and designer and have driven the product for the last two years — design and UI/UX, frontend and backend development, and the build-out and integration of AI agents across the platform. I re-architected the stalled codebase and shipped a unified experience: the consumer mobile app — VIN scan, condition reports, vehicle NFTs, in-app quotes — and the CarrDealer portal where dealerships browse inventory and bid. I've also helped staff the team as the company has grown.",
    solution:
      "An end-to-end automotive ecosystem rather than a single app. Owners scan a VIN, document condition and damage, mint a vehicle NFT, and request quotes anonymously; certified dealers bid through the CarrDealer portal against richer, tamper-resistant vehicle data. Under the hood it's wired to CarrChain (on-chain vehicle records / DVINs), CarrDefi (auto-lending pools), and the CARR utility token that rewards owners for maintaining and updating their vehicles — all surfaced through a clean, conventional UI, with AI agents woven into the workflows.",
    outcome:
      "Carnomaly is live and selling to dealerships, with the consumer app and dealer portal in production and the CarrChain and token roadmap expanding. Larry Kohlieber, CPTO: \"AW3 did an excellent job re-architecting and completing the Carnomaly product where other dev shops failed. We are now successfully selling to dealerships.\"",
    meta: [
      { label: "Role", value: "Lead Engineer & Designer" },
      { label: "Engaged", value: "2024–present (2+ years)" },
      { label: "Stack", value: ["React Native", "Svelte", "Node.js", "Solidity", "AI Agents"] },
      { label: "Scope", value: ["Design", "Frontend", "Backend", "AI", "UI/UX", "Staffing"] },
      { label: "Founder", value: "Scott Heninger" },
      { label: "Link", value: "carnomaly.io" },
    ],
    emphasisKeywords: [
      "Carnomaly",
      "CarrChain",
      "CarrDealer",
      "CarrDefi",
      "CARR",
      "Web3",
      "AI agents",
      "vehicle NFTs",
      "blockchain",
    ],
    caseStudy: {
      blocks: [],
      layout: [
        {
          type: "stack",
          heading: "Reinventing vehicle ownership on-chain",
          blocks: [
            {
              type: "paragraph",
              text: "Carnomaly is a Web3-infused automotive platform reimagining how vehicles are bought, sold, financed, and maintained. Founded by Scott Heninger after 20+ years in retail automotive, its mission is practical blockchain solutions for buying, selling, and owning vehicles — marrying the traditional auto world with on-chain transparency, tokenized incentives, and decentralized finance. I've led engineering and design on it for the past two years.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "Mission",
              text: "Practical blockchain solutions for buying, selling & owning vehicles",
            },
            {
              type: "image",
              label: "CarrDealer portal — dealers browse inventory and place bids with full vehicle data",
              src: "/projects/carnomaly-dealer-portal.png",
              alt: "Carnomaly CarrDealer portal showing the Buy Bid inventory with vehicle prices, VINs, and specs",
              aspect: "video",
              rounded: "lg",
              fit: "contain",
            },
          ],
        },
        {
          type: "split",
          heading: "What I've built — over two years",
          content: [
            {
              type: "paragraph",
              text: "I came on as lead engineer and designer and have owned the product end to end as it grew. The work spans the whole stack and both sides of the marketplace — the consumer mobile app and the dealer portal — plus the AI agents now woven into the platform's workflows.",
            },
            {
              type: "list",
              items: [
                "Design & UI/UX — the product's visual language and flows across the consumer app and dealer portal.",
                "Frontend — the consumer mobile app and the CarrDealer web portal.",
                "Backend — the services and integrations behind inventory, bidding, and vehicle data.",
                "AI agents — built and integrated AI agents into the product's core workflows.",
                "Team — helped staff and grow the engineering team over the engagement.",
              ],
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Stack & scope",
            },
            {
              type: "list",
              items: [
                "React Native — consumer mobile app",
                "Svelte & web — CarrDealer portal",
                "Node.js — backend services",
                "Solidity — on-chain vehicle records & token",
                "AI agents — workflow automation",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "The Carnomaly app",
          blocks: [
            {
              type: "paragraph",
              text: "The consumer app turns a car into a living digital asset. Owners scan a VIN, record odometer readings, document condition with a guided photo-and-video flow, mint a vehicle-specific NFT, request quotes, and track maintenance — earning CARR tokens for keeping their vehicle's record current. A structured Car Condition Report captures damage location and detail part-by-part, so a vehicle's true state is recorded, not guessed.",
            },
            {
              type: "image",
              label: "Car Condition Report — a four-step guided flow: select a part, view details, add photos & video, set status",
              src: "/projects/carnomaly-condition-flow.png",
              alt: "Carnomaly condition report flow across four phone screens: overview, part selected, photos & videos, part status",
              aspect: "video",
              rounded: "lg",
              fit: "contain",
            },
            {
              type: "image",
              label: "Damage Location — tap any part of the car to attach photos, video, and condition notes",
              src: "/projects/carnomaly-damage-report.png",
              alt: "Carnomaly app damage location screen with a car diagram and tappable points for each panel",
              aspect: "3/2",
              rounded: "lg",
              fit: "contain",
            },
          ],
        },
        {
          type: "timeline",
          heading: "An end-to-end ecosystem",
          steps: [
            {
              title: "Carnomaly App",
              body: "The consumer and owner surface — VIN scan, odometer and photo capture, vehicle NFTs, quote requests, maintenance tracking, and in-app messaging between owner and dealer.",
            },
            {
              title: "CarrChain",
              body: "The blockchain layer holding tamper-resistant vehicle records (DVINs — Digital Vehicle Identification Numbers), pulling history from service, title, accident, and ownership sources.",
            },
            {
              title: "CarrDealer",
              body: "The dealer portal where certified dealers access inventory listed by owners, bid competitively, and trade through a transparent process instead of opaque auctions.",
            },
            {
              title: "CarrDefi",
              body: "A DeFi module for auto-lending — vehicle loans drawn from community liquidity pools rather than traditional banks, for faster approvals and lower friction.",
            },
            {
              title: "CARR Token",
              body: "The native utility token — payment medium, reward engine, and incentive layer. Owners earn CARR for maintaining and updating their vehicle data.",
            },
          ],
        },
        {
          type: "split",
          flip: true,
          heading: "Built for both sides of the deal",
          content: [
            {
              type: "heading",
              level: 3,
              text: "For consumers",
            },
            {
              type: "list",
              items: [
                "Transparency — an immutable vehicle history reduces uncertainty and fraud.",
                "Rewards — earn CARR tokens for maintaining the car and uploading data.",
                "Simplified selling — request a quote and stay anonymous until you choose to engage.",
                "Maintenance & claims — schedule service and record history against the vehicle's on-chain identity.",
              ],
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "For dealers",
            },
            {
              type: "list",
              items: [
                "Broader inventory reach — a network of owner-listed vehicles to bid on competitively.",
                "Data-driven insight — richer CarrChain data to assess condition, mileage, and risk with confidence.",
                "Token-based incentives — participate and subscribe with CARR, cutting middle-man cost versus legacy platforms.",
                "No opaque auctions — a streamlined, transparent bidding process in one portal.",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "Traction & roadmap",
          blocks: [
            {
              type: "paragraph",
              text: "Carnomaly is live and selling to dealerships, with the app and CarrDealer portal in production and staking live. The roadmap scales the network aggressively — thousands of dealers across the US and Europe, full CarrChain launch and DVIN migration, and a long-term vision of one billion vehicles recorded on-chain.",
            },
            {
              type: "callout",
              tone: "quote",
              text: "AW3 did an excellent job re-architecting and completing the Carnomaly product where other dev shops failed. We are now successfully selling to dealerships. — Larry Kohlieber, CPTO",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "justiguide",
    title: "JustiGuide",
    category: "Legal Tech",
    summary:
      "Backed an AI immigration platform from day one as advisor and angel investor — MVP and website development, pitch deck, and fundraising support. JustiGuide was named one of TIME's Best Inventions of 2025 in Legal Technology and won the Policy + Protection pitch stage at TechCrunch Disrupt 2025.",
    role: "Venture Advisor, Builder & Angel Investor",
    year: "2024",
    tags: ["Legal Tech", "AI", "Angel Investment", "Fundraising", "Advisory"],
    metrics: [
      "TIME Best Inventions 2025 — Legal Technology",
      "Won TechCrunch Disrupt 2025 pitch stage",
      "Funded · Marl5G accelerator · first revenues",
    ],
    image: "/projects/justiguide.webp",
    caseStudyImage: "/projects/justiguide-product.png",
    tagline: "Your immigration journey, simplified",
    gradient: "from-violet-500 via-purple-400/60 to-bg",
    problem:
      "For decades, immigration has been one of the most stressful, time-consuming legal experiences in the world — hundreds of pages of paperwork, unclear requirements, and months or years of waiting, where a minor error can derail even a qualified applicant. Lawyers face the same inefficiency: each case can consume 40+ hours of repetitive forms and research. Bisi Obateru had a strong product instinct for fixing this with AI, but needed a brand, a credible presence, a working prototype, and a path to investors and legal partners to hold its own in a complex regulatory domain.",
    process:
      "I worked closely with Bisi from the very beginning — client support and venture advisory, plus an angel investment. The engagement spanned MVP development, website development, the pitch deck, fundraising support, and ongoing advisory, along with the branding and design language and introductions to investors and immigration attorneys. The goal was a brand confident enough to carry the mission and a product real enough to prove it. I continue to support JustiGuide with introductions and ongoing development.",
    solution:
      "JustiGuide pairs proprietary AI with a curated network of 500+ vetted immigration lawyers to deliver a guided, end-to-end experience: Dolores AI™ for legal research, VetMatch™ for intelligent lawyer pairing, and FastTrack Processing™ to compress a 40-hour case into roughly three hours. AI-assisted form filling, real-time compliance checks, multilingual support, and a case-management dashboard turn an overwhelming process into an empowering one — fast answers with full accountability.",
    outcome:
      "JustiGuide won TIME Best Inventions of 2025 in Legal Technology and secured the top spot on the Policy + Protection pitch stage at TechCrunch Disrupt 2025 in San Francisco (October 27–29). The company has raised funding, participated in the Marl5G accelerator, and secured its initial clients and revenues — while the platform has helped 29,895+ users complete immigration cases, onboarded 500+ vetted lawyers, and maintains a 95% application success rate. Bisi Obateru, CEO: \"Will believed in my idea before anyone else did and helped me build a strong brand which gave the vision and idea more confidence and a design language we still use today.\"",
    meta: [
      { label: "Role", value: "Venture Advisor, Builder & Angel Investor" },
      { label: "Type", value: ["Client Support", "Venture Advisory", "Angel Investment"] },
      { label: "Scope", value: ["MVP Development", "Website", "Pitch Deck", "Fundraising", "Advisory"] },
      { label: "Year", value: "2024" },
      { label: "Recognition", value: ["TIME Best Inventions 2025", "TechCrunch Disrupt 2025 Pitch Winner"] },
      { label: "Site", value: "JustiGuide.com" },
    ],
    emphasisKeywords: ["AI", "TIME", "TechCrunch Disrupt", "TechCrunch", "JustiGuide", "Dolores AI", "Marl5G", "immigration"],
    caseStudy: {
      blocks: [],
      layout: [
        {
          type: "stack",
          heading: "From months to hours",
          blocks: [
            {
              type: "paragraph",
              text: "JustiGuide is transforming immigration law with AI. It connects immigrants with vetted lawyers and AI-powered legal tools that simplify every step of the journey — eliminating the stress, confusion, and long wait times traditionally associated with the process. It's not just a legal platform; it's a human-centered innovation built to turn an overwhelming process into an empowering one.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "Recognition",
              text: "TIME Best Inventions of 2025 — Legal Technology",
            },
            {
              type: "image",
              label: "JustiGuide — find your path in 60 seconds",
              src: "/projects/justiguide-product.png",
              alt: "JustiGuide platform on a desktop monitor showing the visa assessment flow, attorney matching, and TIME Best Inventions 2025 badge",
              aspect: "3/2",
              rounded: "lg",
              fit: "cover",
            },
          ],
        },
        {
          type: "split",
          heading: "Built from the first sketch",
          content: [
            {
              type: "paragraph",
              text: "I backed JustiGuide from the very beginning — client support, venture advisory, and an angel investment — wearing several hats as the idea became a recognized company.",
            },
            {
              type: "list",
              items: [
                "MVP development — building the first working version of the platform.",
                "Website development — the public face of the product, built to convert.",
                "Pitch deck — decks and narrative built to win demos and investor meetings.",
                "Fundraising support — introductions to investors and immigration attorneys, and support through the raise.",
                "Brand & design language — the identity and visual system the team still uses today.",
                "Advisory & angel investment — continued capital, introductions, and development as JustiGuide scales.",
              ],
            },
          ],
          media: [
            {
              type: "image",
              label: "Bisi Obateru — Founder & CEO, JustiGuide",
              src: "/projects/justiguide-bisi.jpg",
              alt: "Portrait of Bisi Obateru, founder and CEO of JustiGuide",
              aspect: "square",
              rounded: "lg",
              fit: "cover",
            },
            {
              type: "callout",
              tone: "quote",
              text: "Will believed in my idea before anyone else did and helped me build a strong brand which gave the vision and idea more confidence and a design language we still use today. — Bisi Obateru, CEO",
            },
          ],
        },
        {
          type: "stack",
          heading: "From concept to traction",
          blocks: [
            {
              type: "paragraph",
              text: "JustiGuide has converted early conviction into compounding proof — awards, capital, and revenue in one of the hardest regulatory domains there is.",
            },
            {
              type: "list",
              items: [
                "TIME Best Inventions of 2025 — recognized in the field of Legal Technology.",
                "TechCrunch Disrupt 2025 — secured the top spot on the Policy + Protection pitch stage in San Francisco, October 27–29, 2025.",
                "Raised funding and participated in the Marl5G accelerator.",
                "Secured initial clients and first revenues.",
              ],
            },
            {
              type: "callout",
              tone: "metric",
              label: "Why it matters",
              text: "Identify mission-driven founders early, accelerate them from concept to traction, and catalyze funding readiness in complex regulatory domains.",
            },
          ],
        },
        {
          type: "timeline",
          heading: "AI precision, human expertise",
          steps: [
            {
              title: "Dolores AI™",
              body: "A legal research assistant trained on 1M+ immigration cases in 12 languages — reasoning through case law and regulations with a 99.7% accuracy rate and a 3-second average response, available 24/7.",
            },
            {
              title: "VetMatch™",
              body: "Intelligent lawyer pairing that matches each applicant to the right attorney in minutes via AI compatibility scoring across 500+ verified lawyers — a 95% overall success rate.",
            },
            {
              title: "FastTrack Processing™",
              body: "AI-assisted form filling, real-time compliance checks, and document verification compress a 40-hour case into roughly three hours, with a 100% RFE prevention rate.",
            },
          ],
        },
        {
          type: "stack",
          heading: "Measurable impact",
          blocks: [
            {
              type: "paragraph",
              text: "By blending artificial intelligence with human compassion, JustiGuide is rewriting immigration from a bureaucratic obstacle into a clear, guided journey of possibility — for immigrants and the firms that serve them.",
            },
            {
              type: "list",
              items: [
                "29,895+ users helped complete immigration cases successfully.",
                "500+ vetted lawyers onboarded across North America and beyond.",
                "95% success rate on applications processed through the platform.",
                "93% time reduction per case, with ~50% more case volume per attorney.",
              ],
            },
            {
              type: "callout",
              tone: "metric",
              label: "Also recognized",
              text: "TechCrunch Disrupt 2025 — Policy + Protection pitch stage winner",
            },
          ],
        },
      ],
    },
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
