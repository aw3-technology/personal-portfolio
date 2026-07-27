export type Ownership = "own" | "partner" | "client";

export const ownershipLabels: Record<Ownership, string> = {
  own: "Own venture",
  partner: "Venture partner",
  client: "Client work",
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  /**
   * How Will is involved: a venture he founded and built himself ("own"); a
   * venture-studio partner where the studio holds equity and plays an integral,
   * ongoing role ("partner"); or an engagement delivered for an outside company
   * ("client"). Surfaced as a badge on project cards and in the case-study hero.
   */
  ownership: Ownership;
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
      /** Who said it — rendered under a quote callout with an optional headshot. */
      attribution?: {
        name: string;
        role?: string;
        image?: string;
      };
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
      aspect?: "video" | "4/3" | "3/2" | "square" | "3/4";
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
