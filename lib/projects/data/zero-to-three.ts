import type { Project } from "../types";

export const zeroToThree: Project = {
    slug: "zero-to-three",
    ownership: "own",
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
};
