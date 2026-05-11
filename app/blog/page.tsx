import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import { getAllPosts, formatPostDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Will Schulz",
  description: "Essays and notes on building companies, software, and ideas at the edge of Web3 and AI.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-bg min-h-screen relative z-10">
      <Navbar />

      <section className="pt-36 pb-8 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <span className="eyebrow-label inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-stroke" />
            Writing
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-text leading-[1.03] mb-6">
            The <span className="font-display italic">blog</span>
          </h1>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
            Notes on building companies, software, and ideas at the intersection of Web3 and AI.
          </p>
        </div>
      </section>

      <section className="pb-32 px-6 md:px-10 lg:px-16 max-w-[1100px] mx-auto">
        {posts.length === 0 ? (
          <div className="text-center text-muted py-24">
            <p>No posts yet — check back soon.</p>
          </div>
        ) : (
          <ul className="grid gap-6 md:gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-stroke/50 bg-surface/60 hover:bg-surface transition-colors duration-300 overflow-hidden focus-ring"
                >
                  {post.cover && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface">
                      <ImageWithSkeleton
                        src={post.cover}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  )}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 text-xs text-muted uppercase tracking-[0.18em] mb-4">
                      <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                      {post.readingTime && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-stroke" />
                          <span>{post.readingTime}</span>
                        </>
                      )}
                    </div>
                    <h2 className="text-2xl md:text-3xl text-text leading-[1.15] mb-3 group-hover:text-text">
                      {post.title}
                    </h2>
                    <p className="text-sm md:text-base text-muted leading-relaxed mb-5">
                      {post.description}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
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
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <Contact />
    </main>
  );
}
