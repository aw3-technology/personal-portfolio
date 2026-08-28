"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-display italic text-text/10 mb-4">
          Oops
        </h1>
        <h2 className="text-2xl md:text-3xl text-text mb-4">
          Something went <span className="font-display italic">wrong</span>
        </h2>
        <p className="text-muted text-sm md:text-base mb-8 max-w-md mx-auto">
          An unexpected error occurred while loading this page. Try again, or head
          back home.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-text text-bg text-sm rounded-full hover:scale-105 transition-transform"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 4v6h-6M1 20v-6h6" />
              <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
            </svg>
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-text/15 text-text text-sm rounded-full hover:scale-105 transition-transform"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
