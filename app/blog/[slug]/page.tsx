import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import { getAllPosts, getPostBySlug, formatPostDate } from "@/lib/posts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Not found" };
  return {
    title: `${post.title} — Will Schulz`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: post.cover ? [{ url: post.cover }] : undefined,
    },
  };
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl md:text-4xl text-text leading-[1.15] mt-16 mb-6" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl md:text-3xl text-text leading-[1.2] mt-14 mb-5" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl md:text-2xl text-text leading-[1.25] mt-10 mb-4" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-base md:text-lg text-muted leading-[1.75] mb-6" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-text underline decoration-stroke underline-offset-4 hover:decoration-text transition-colors" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-outside pl-6 mb-6 space-y-2 text-base md:text-lg text-muted leading-[1.75]" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-outside pl-6 mb-6 space-y-2 text-base md:text-lg text-muted leading-[1.75]" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-stroke pl-6 my-8 italic text-text/90" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="px-1.5 py-0.5 rounded bg-stroke/50 text-text text-[0.9em] font-mono" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="my-8 p-5 rounded-xl bg-surface border border-stroke/60 overflow-x-auto text-sm font-mono leading-relaxed" {...props} />
  ),
  hr: () => <hr className="my-12 border-stroke/60" />,
};

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="bg-bg min-h-screen relative z-10">
      <Navbar />

      <article className="pt-36 pb-32 px-6 md:px-10 lg:px-16 max-w-[760px] mx-auto">
        <header className="mb-12 md:mb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted hover:text-text transition-colors mb-8"
          >
            <span aria-hidden>←</span> Back to blog
          </Link>
          <div className="flex items-center gap-3 text-xs text-muted uppercase tracking-[0.2em] mb-6">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            {post.readingTime && (
              <>
                <span className="w-1 h-1 rounded-full bg-stroke" />
                <span>{post.readingTime}</span>
              </>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-text leading-[1.05] mb-6">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-lg md:text-xl text-muted leading-relaxed">{post.description}</p>
          )}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-[0.18em] text-muted border border-stroke/60 rounded-full px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {post.cover && (
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-surface mb-12 md:mb-16">
            <ImageWithSkeleton src={post.cover} alt={post.title} fill className="object-cover" priority />
          </div>
        )}

        <div className="prose-blog">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>

      <Contact />
    </main>
  );
}
