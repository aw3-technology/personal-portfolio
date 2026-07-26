import type { Project } from "../types";

export const carnomaly: Project = {
    slug: "carnomaly",
    ownership: "partner",
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
            {
              type: "image",
              label: "CarrGarage — the guided walk-around: eight capture points, photo or video, nothing missed",
              src: "/projects/carnomaly-carrgarage-promo.png",
              alt: "CarrGarage by Carnomaly promotional render — the Car Condition Report screen on a phone in a garage",
              aspect: "square",
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
          type: "grid",
          heading: "CarrDealer, on the lot",
          items: [
            {
              type: "image",
              label: "CarrDealer home — service opportunities at a glance: scans, offers, pending, and not requested",
              src: "/projects/carnomaly-carrdealer-hero.png",
              alt: "CarrDealer by Carnomaly mobile home screen showing service opportunity counts and an Add Service Vehicle button",
              aspect: "square",
              rounded: "lg",
              fit: "contain",
            },
            {
              type: "image",
              label: "Vehicle details — check-in, signature capture, and live high bid on a listed vehicle",
              src: "/projects/carnomaly-carrdealer-app.png",
              alt: "Two phones showing the CarrDealer home screen and a vehicle details screen with a $29,700 high bid",
              aspect: "square",
              rounded: "lg",
              fit: "contain",
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
};
