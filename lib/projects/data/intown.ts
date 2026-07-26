import type { Project } from "../types";

export const intown: Project = {
    slug: "intown",
    ownership: "partner",
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
              label: "AI Concierge for Local Discovery & Travel Planning",
              src: "/projects/intown-showcase.png",
              alt: "InTown featured-project showcase — brand mark, positioning, role and tech, and web plus iOS mockups with 10K+ itineraries, 5K+ travelers, and a 4.9 rating",
              aspect: "video",
              rounded: "lg",
              fit: "cover",
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
            {
              type: "image",
              label: "InTown across web and mobile — one concierge, every screen",
              src: "/projects/intown-devices.png",
              alt: "InTown shown on a laptop and iPhone, with crowd-sourced itineraries and an \"Ask anything about LA\" concierge prompt",
              aspect: "video",
              rounded: "lg",
              fit: "cover",
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
          heading: "Inside the app",
          blocks: [
            {
              type: "image",
              label: "iOS app — trip planning, crowd-sourced inspiration, and bookings",
              src: "/projects/intown-mobile.png",
              alt: "Three InTown iPhone screens — a generated 5-day Los Angeles itinerary, the Explore feed of most-loved traveler plans, and the My Bookings list of confirmed trips",
              aspect: "video",
              rounded: "lg",
              fit: "cover",
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
              type: "image",
              label: "2026 investor deck — brand, problem, solution, market, and vision",
              src: "/projects/intown-deck.png",
              alt: "Spread of InTown investor-presentation slides — the \"Introducing your new concierge\" title, The Product, The Problem, The Market, The Solution, Meet Cierra, and The Vision",
              aspect: "video",
              rounded: "lg",
              fit: "cover",
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
};
