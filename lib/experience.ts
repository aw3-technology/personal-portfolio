// Single source of truth for career history. Two curated views live here
// because they serve different surfaces and are intentionally shaped and
// scoped differently:
//   - `experiences`  — compact highlight reel for the homepage Journey section.
//   - `workTimeline` — full, detailed résumé for the about page timeline.

export type Experience = {
  role: string;
  company: string;
  period: string;
};

/** Compact highlight reel rendered by components/Journey.tsx (homepage). */
export const experiences: Experience[] = [
  {
    role: "Founder & CEO",
    company: "AW3 Technology",
    period: "Mar 2020 - Present",
  },
  {
    role: "Co-Host/Producer",
    company: "Silicon Valley Economic Forum (SVEF)",
    period: "Sep 2025 - Present",
  },
  {
    role: "Technology Partner & Advisor",
    company: "Baird Augustine",
    period: "Jan 2024 - Present",
  },
  {
    role: "Venture Partner",
    company: "Deelz",
    period: "Aug 2023 - Present",
  },
  {
    role: "Venture Fellow",
    company: "Newchip Accelerator",
    period: "Jun 2022 - Mar 2023",
  },
  {
    role: "Participant",
    company: "VC Lab",
    period: "Aug 2021 - Dec 2021",
  },
];

export type TimelineEntry = {
  /** Date range, e.g. "Jan 2024 — Present". */
  period: string;
  title: string;
  /** Full italic subtitle line: organization · location · arrangement. */
  org: string;
  description: string;
};

/**
 * Detailed work-experience timeline rendered on the about page. Needs the org
 * subtitle line and a description per entry, so it is a richer superset of the
 * compact `experiences` list above.
 */
export const workTimeline: TimelineEntry[] = [
  {
    period: "Jan 2024 — Present",
    title: "Technology Partner & Advisor",
    org: "Baird Augustine · San Francisco Bay Area · Part-time, Remote",
    description:
      "Partnered with a Silicon Valley-based neo-investment bank to advise on technology-related initiatives across deal flow, diligence, and product strategy.",
  },
  {
    period: "Aug 2023 — Present",
    title: "Chief Deals Officer",
    org: "Deelz · San Francisco Bay Area · Part-time, Remote",
    description:
      "Leading a project incubated by AW3 Technology to develop an application that helps users find deals on used cars efficiently.",
  },
  {
    period: "Mar 2020 — Present",
    title: "Galactic Ambassador",
    org: "AW3 Technology · San Francisco Bay Area · Full-time",
    description:
      "Founder of an award-winning venture studio using web3, AI, and distributed computing to tackle global challenges. Helped many companies build products from scratch, generate revenue, and raise millions of dollars. Inventor of Proof of Love blockchain consensus (patent pending).",
  },
  {
    period: "Jun 2022 — Mar 2023",
    title: "Venture Fellow",
    org: "Newchip Accelerator · San Francisco Bay Area · Part-time",
    description:
      "Participated in an accelerator program focused on venture funding and startup scaling.",
  },
  {
    period: "Aug 2021 — Dec 2021",
    title: "Cohort Participant",
    org: "VC Lab · Part-time",
    description:
      "Completed a 5-month program on the fundamentals of starting and operating a venture capital fund.",
  },
  {
    period: "Aug 2018 — Apr 2020",
    title: "Co-Founder",
    org: "Learna Inc. · Greater Los Angeles Area",
    description:
      "Co-founded a SaaS platform for building and administering online courses, enabling educational organizations to scale online learning experiences.",
  },
  {
    period: "2018",
    title: "Startup School Participant",
    org: "Y Combinator (Startup School) · Remote",
    description:
      "Completed Y Combinator's Startup School — YC's program for early-stage founders on building, launching, and growing a startup.",
  },
  {
    period: "Jan 2017 — Jun 2018",
    title: "Co-Founder",
    org: "We Stand Up",
    description:
      "Established a 501(c)(4) nonprofit aimed at generating social and political awareness among millennials through web-based and social media content.",
  },
  {
    period: "Jul 2016 — Dec 2016",
    title: "Software Consultant",
    org: "Kunai · Oakland, CA",
    description:
      "Worked on financial technology projects, including a significant engagement for American Express.",
  },
  {
    period: "Oct 2015 — Apr 2016",
    title: "Software Engineer",
    org: "Gap (through Insight Global) · San Francisco, CA",
    description:
      "Contributed to Gap's in-house Agile team on point-of-sale systems, implementing and testing web and mobile POS solutions.",
  },
  {
    period: "May 2014 — Oct 2015",
    title: "Business Intelligence Consultant / Software Engineer",
    org: "Saama Technologies, Inc. · San Jose, CA",
    description:
      "Managed business intelligence and software engineering projects for clients including Cisco, Unilever, and Genentech.",
  },
  {
    period: "Dec 2013 — May 2014",
    title: "Business Intelligence Training",
    org: "Saama Technologies, Inc. · Pune Area, India",
    description:
      "Completed six months of intensive training in business intelligence.",
  },
];
