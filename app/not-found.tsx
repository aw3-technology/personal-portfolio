import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-display italic text-text/10 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl text-text mb-4">
          Page not <span className="font-display italic">found</span>
        </h2>
        <p className="text-muted text-sm md:text-base mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-text text-bg text-sm rounded-full hover:scale-105 transition-transform"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
