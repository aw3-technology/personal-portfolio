import type { Project } from "../types";

export const wryterAiScreenwriter: Project = {
    slug: "wryter-ai-screenwriter",
    ownership: "client",
    title: "Wryter / AI Screenwriter",
    category: "AI",
    summary:
      "Developed Wryter Inc.'s AI screenwriting application and enhanced its frontend experience — a full buildout in Vue, Python, and NodeJS with AI woven through the writing flow, plus two additional generative-AI apps that expanded the product suite. Demos landed both paying clients and investors.",
    role: "Lead Engineer & Architect",
    year: "2024–Present",
    tags: ["AI", "Generative AI", "Vue", "Python", "AWS"],
    metrics: [
      "3 production apps shipped — prototype to scale",
      "Full buildout in Vue, Python & NodeJS with AI integration",
      "Demos landed paying clients and investors",
    ],
    image: "/projects/wryter-inc.png",
    caseStudyImage: "/projects/wryter-inc.png",
    tagline: "Professional-grade screenwriting, powered by AI",
    gradient: "from-blue-500 via-indigo-400/60 to-bg",
    problem:
      "Wryter Inc. had an early prototype for an AI screenwriting tool and a vision for a broader generative-AI suite for creators — but no production system, no scalable architecture, and a need to demo to both investors and paying users.",
    process:
      "I developed Wryter's AI screenwriting application and enhanced its frontend experience — a full web-application buildout in Vue, Python, and NodeJS with AI integration woven into the writing flow itself. Then I built two additional generative-AI apps from scratch to expand Wryter's product suite, establishing a strong cross-product technical foundation that enabled continued feature growth.",
    solution:
      "Deployed the initial prototype into production on an AWS, Mongo, Python, and Node stack, then built two more applications from scratch to broaden the suite and share a common technical foundation across products. AI Screenwriter (AIScreenwriter.io) gives writers a full toolkit — an AI Rewrite Assistant, scene and segment controls, coverage reports, and image, music, and video tools — to take an idea from first draft to finished screenplay.",
    outcome:
      "Demos landed both paying clients and investors. The engagement showcases the ability to build cutting-edge generative-AI applications from prototype to scale — and completely from scratch. Liam McMullan, Founder & CTO of Wryter Inc.: \"AW3 goes far above and beyond any other company of it's kind. I have worked with them on many different apps, websites and projects and I have been consistently impressed — they have completed ahead of schedule and under budget.\"",
    meta: [
      { label: "Role", value: "Lead Engineer & Architect" },
      { label: "Type", value: "Develop AI screenwriting application and enhance frontend experience, plus additional apps" },
      { label: "Scope", value: ["Web Application Development", "Full buildout in Vue, Python & NodeJS", "AI Integration"] },
      { label: "Stack", value: ["Vue", "Python", "Node.js", "AWS", "MongoDB"] },
      { label: "Year", value: "2024–Present" },
      { label: "Site", value: "AIScreenwriter.io" },
    ],
    emphasisKeywords: ["AI", "Wryter", "AI Screenwriter", "Vue", "Python", "Node", "AWS", "generative AI"],
    caseStudy: {
      blocks: [],
      layout: [
        {
          type: "stack",
          heading: "Professional-grade screenwriting, powered by AI",
          blocks: [
            {
              type: "paragraph",
              text: "Wryter Inc. (AIScreenwriter.io) is an AI-driven platform that empowers creators with advanced screenwriting and storytelling tools, making professional-level writing accessible to everyone. It helps writers, studios, and independent creators accelerate the creative process and bring stories to life. I developed the AI screenwriting application and enhanced its frontend experience, then built two more generative-AI apps to expand the suite.",
            },
            {
              type: "callout",
              tone: "quote",
              text: "AW3 goes far above and beyond any other company of it's kind. I have worked with them on many different apps, websites and projects and I have been consistently impressed — they have completed ahead of schedule and under budget.",
              attribution: {
                name: "Liam McMullan",
                role: "Founder & CTO, Wryter Inc.",
                image: "/projects/liam-mcmullan.jpg",
              },
            },
            {
              type: "image",
              label: "AI Screenwriter — the AI Rewrite Assistant, scene and segment controls, and model selection",
              src: "/projects/wryter-product.png",
              alt: "The AI Screenwriter web app open on a laptop, showing a screenplay in the AI Rewrite Assistant with scene and segment controls, a prompt painter, model selection, and screenplay actions",
              aspect: "video",
              rounded: "lg",
              fit: "cover",
            },
          ],
        },
        {
          type: "split",
          heading: "What I did",
          content: [
            {
              type: "paragraph",
              text: "The engagement was a full web-application buildout: develop the AI screenwriting application and enhance the frontend experience, with AI integration woven through the writing flow — and additional apps around it.",
            },
            {
              type: "list",
              items: [
                "Web application development — the AI screenwriting product, front to back.",
                "Full buildout in Vue, Python, and NodeJS.",
                "AI integration woven into the screenwriting flow itself.",
                "Frontend experience enhancement across the product.",
              ],
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Achievements",
            },
            {
              type: "list",
              items: [
                "Successfully deployed the initial prototype into production on an AWS, Mongo, Python, and Node stack.",
                "Built 2 additional applications from scratch to expand Wryter's product suite, establishing a strong cross-product technical foundation for continued feature growth.",
                "Presented demos that landed both paying clients and investors.",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "The investment presentation",
          blocks: [
            {
              type: "paragraph",
              text: "I also produced the AI Screenwriter investment presentation — the story that carries the product into rooms with investors: the \"Your Story Begins Now\" positioning, the screenwriting challenges it solves, the voice-first assistant \"Imogen,\" the product and technology, and the business model.",
            },
            {
              type: "image",
              label: "AI Screenwriter investment presentation — introduction, problem, solution, product, and business model",
              src: "/projects/wryter-presentation.png",
              alt: "Spread of the AIScreenwriter.io investment-presentation slides — \"Your Story Begins Now\" intro, an executive summary on empowering screenwriters with AI, screenplay-writing challenges, the Imogen AI assistant, product and technology, and the subscription business model",
              aspect: "3/2",
              rounded: "lg",
              fit: "cover",
            },
          ],
        },
        {
          type: "stack",
          heading: "Why it matters",
          blocks: [
            {
              type: "paragraph",
              text: "The Wryter Inc. project showcases the ability to build cutting-edge generative-AI applications from prototype to scale — as well as completely from scratch.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "Prototype to scale · built from scratch",
              text: "Cutting-edge generative AI, shipped to production",
            },
          ],
        },
        {
          type: "stack",
          heading: "About Wryter Inc.",
          blocks: [
            {
              type: "paragraph",
              text: "Wryter Inc. believes words are more than tools — they are the building blocks of imagination, emotion, and human connection. Its mission is to redefine creative writing and content generation through artificial intelligence, empowering individuals and organizations to create with greater speed, depth, and originality than ever before. Standing at the intersection of art and algorithm, Wryter develops technologies that enhance — not replace — the creative process.",
            },
            {
              type: "callout",
              tone: "quote",
              text: "AI should amplify the creative voice, not dilute it. — the belief Wryter Inc. was founded on",
            },
            {
              type: "paragraph",
              text: "The vision is a future where creativity and technology coexist harmoniously — where human inspiration and machine intelligence collaborate to expand the boundaries of storytelling. The mission is to push the limits of language technology and deliver best-in-class solutions for modern creators: whether drafting a novel, generating brand copy, or building immersive narratives, the goal is to make the creative process faster, smarter, and more inspiring.",
            },
          ],
        },
        {
          type: "split",
          heading: "Innovation at the core",
          content: [
            {
              type: "paragraph",
              text: "Innovation drives everything Wryter does. Its R&D team works at the frontier of natural language processing, generative AI, and deep-learning models, crafting systems that understand context, emotion, tone, and narrative intent. The algorithms don't just predict the next word — they anticipate human meaning, from character development to emotional resonance, stylistic variation, and thematic cohesion, trained to think like a writer and assist like a creative partner.",
            },
            {
              type: "paragraph",
              text: "Where many AI tools mimic language, Wryter's proprietary models are designed to understand narrative intention — the subtleties of tone, pacing, and voice that make human writing timeless. Continuous training on diverse literary and linguistic data gives them a deep contextual intelligence, serving both artistic creators and corporate innovators and bridging creativity and computation.",
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Why Wryter Inc.",
            },
            {
              type: "list",
              items: [
                "Innovation — leading with imagination, continually exploring new frontiers in AI and creativity.",
                "Technology — proprietary language models that redefine what's possible in natural language generation.",
                "Writing — every product honors the craft, ensuring technology serves creativity, not the other way around.",
                "A creative companion — tools designed to think with you, learn from you, and grow alongside your journey.",
              ],
            },
          ],
        },
        {
          type: "stack",
          heading: "Wryter Studio — the flagship suite",
          blocks: [
            {
              type: "paragraph",
              text: "Wryter Studio is a comprehensive environment for writers of all kinds — novelists, screenwriters, journalists, marketers, educators, and creators — integrating intelligent drafting, editing, and brainstorming powered by cutting-edge generative models. With story arcs, tone modulation, metaphor generation, and narrative-rhythm analysis, it works like an AI co-author that understands your style, adapts to your voice, and enhances your originality while leaving you in full creative control.",
            },
            {
              type: "paragraph",
              text: "Creativity should be accessible to all, so the platforms are intuitive and inclusive — welcoming beginners and professionals alike, guiding users with real-time feedback on clarity, coherence, and style while preserving each writer's unique voice. From an aspiring author drafting a first novel to a marketing team running multi-channel content pipelines, Wryter offers scalable solutions for every creative journey.",
            },
            {
              type: "callout",
              tone: "metric",
              label: "The future of words",
              text: "Where imagination meets intelligence — writing smarter, faster, and more beautifully",
            },
          ],
        },
      ],
    },
};
