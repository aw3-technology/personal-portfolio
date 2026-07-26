import type { Metadata } from "next";

type ArticleMetadataInput = {
  /** Page <title> — usually suffixed with the site or section name. */
  title: string;
  description?: string;
  /** Open Graph / Twitter headline; defaults to `title`. */
  ogTitle?: string;
  /** Canonical path, e.g. `/work/my-project`. */
  path?: string;
  /** Absolute or root-relative image URL for OG/Twitter cards. */
  image?: string;
  /** ISO date for `article:published_time`. */
  publishedTime?: string;
};

/**
 * Build the shared Open Graph + Twitter metadata for an article-type page
 * (case studies, blog posts). Keeps the slug routes free of boilerplate.
 */
export function buildArticleMetadata({
  title,
  description,
  ogTitle,
  path,
  image,
  publishedTime,
}: ArticleMetadataInput): Metadata {
  const headline = ogTitle ?? title;

  return {
    title,
    description,
    ...(path ? { alternates: { canonical: path } } : {}),
    openGraph: {
      title: headline,
      description,
      ...(path ? { url: path } : {}),
      type: "article",
      ...(publishedTime ? { publishedTime } : {}),
      ...(image ? { images: [{ url: image, alt: headline }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: headline,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
