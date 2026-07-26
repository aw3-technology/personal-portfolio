import type { Project } from "../types";

export const wryterAiScreenwriter: Project = {
    slug: "wryter-ai-screenwriter",
    ownership: "client",
    title: "Wryter / AI Screenwriter",
    category: "AI",
    summary:
      "Developed Wryter Inc.'s AI screenwriting application and enhanced its frontend experience — a full buildout in Vue, Python, and NodeJS with AI woven through the writing flow, plus two additional generative-AI apps that expanded the product suite. Demos landed both paying clients and investors.",
    role: "Lead Engineer & Architect",
    year: "2024",
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
      { label: "Year", value: "2024" },
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
              text: "AW3 goes far above and beyond any other company of it's kind. I have worked with them on many different apps, websites and projects and I have been consistently impressed — they have completed ahead of schedule and under budget. — Liam McMullan, Founder & CTO of Wryter Inc.",
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
          type: "split",
          heading: "About Wryter Inc.",
          content: [
            {
              type: "paragraph",
              text: "Wryter Inc. is on a mission to revolutionize creative writing and content generation through AI — building technologies that enhance, not replace, the creative process. Its founding belief is that artificial intelligence should amplify the creative voice, empowering storytellers, brands, and thinkers to bring ideas to life with greater speed, depth, and originality.",
            },
            {
              type: "paragraph",
              text: "Its flagship suite, Wryter Studio, is a full environment for novelists, screenwriters, journalists, marketers, and educators — intelligent drafting, editing, and brainstorming with story arcs, tone modulation, metaphor generation, and narrative-rhythm analysis. The proprietary models are built to grasp tone, pacing, and voice, generating original, emotionally resonant work while keeping the writer in full creative control.",
            },
          ],
          media: [
            {
              type: "heading",
              level: 3,
              text: "Where creativity meets intelligence",
            },
            {
              type: "list",
              items: [
                "Innovation — leading with imagination at the frontier of NLP and generative AI.",
                "Technology — proprietary language models that understand context, emotion, and narrative intent.",
                "Writing — every product honors the craft, so technology serves creativity rather than the reverse.",
                "A creative partner — tools designed to think with you, learn from you, and grow with your work.",
              ],
            },
          ],
        },
      ],
    },
};
