import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  cover?: string;
  readingTime?: string;
  draft?: boolean;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function readPostFile(filename: string): Post {
  const slug = filename.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    content,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : undefined,
    cover: data.cover ? String(data.cover) : undefined,
    readingTime: data.readingTime ? String(data.readingTime) : estimateReadingTime(content),
    draft: Boolean(data.draft ?? false),
  };
}

function estimateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));
  return files
    .map(readPostFile)
    .filter((post) => !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function getPostBySlug(slug: string): Post | null {
  const mdx = path.join(BLOG_DIR, `${slug}.mdx`);
  const md = path.join(BLOG_DIR, `${slug}.md`);
  const filename = fs.existsSync(mdx) ? `${slug}.mdx` : fs.existsSync(md) ? `${slug}.md` : null;
  if (!filename) return null;
  const post = readPostFile(filename);
  if (post.draft) return null;
  return post;
}

export function formatPostDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
