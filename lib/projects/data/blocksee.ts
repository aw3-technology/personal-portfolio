import type { Project } from "../types";

export const blocksee: Project = {
    slug: "blocksee",
    ownership: "client",
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
          heading: "The blockchain CRM",
          blocks: [
            {
              type: "paragraph",
              text: "The CRM is where raw on-chain activity becomes a workspace a brand can run. A project-based command center pairs communications, tutorials, and KPI dashboards with a token gallery, wallet lists, and funnel analytics — turning wallets, contracts, and NFTs into contacts, segments, and revenue you can actually act on.",
            },
            {
              type: "image",
              label: "The CRM dashboard — projects, communications, and a KPI overview across all projects",
              src: "/projects/blocksee-dashboard.jpg",
              alt: "Blocksee CRM dashboard with a projects list, a communications inbox and live chat, tutorials, and a KPI overview charting number of bids, floor price, and total sales",
              aspect: "4/3",
              rounded: "lg",
              fit: "contain",
            },
            {
              type: "image",
              label: "Token gallery & wallet analytics — active lists, funnel status, and lifetime spend",
              src: "/projects/blocksee-tokens.jpg",
              alt: "Blocksee CRM token view showing an NFT gallery of 50 tokens, active wallet lists, a funnel-status gauge of total bids, and a lifetime-spend breakdown across PFPs, digital art, and sports",
              aspect: "square",
              rounded: "lg",
              fit: "contain",
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
};
