"use client";

import { Component, useEffect, useState, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";

/**
 * Probes for a usable WebGL context. Returns false when the browser blocks or
 * fails to create one (hardware acceleration off, sandboxed GPU process,
 * driver blocklist, headless/low-power environments).
 */
function canUseWebGL(): boolean {
  if (typeof window === "undefined") return false;
  if (typeof WebGLRenderingContext === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");

    if (!gl) return false;

    // Release the probe context immediately so it doesn't count against the
    // browser's per-page context limit.
    const lose = (gl as WebGLRenderingContext).getExtension("WEBGL_lose_context");
    lose?.loseContext();

    return true;
  } catch {
    return false;
  }
}

/**
 * Contains any renderer failure to this subtree. Without it, a throw from
 * Canvas unmounts the entire React root and Next.js renders its generic
 * "Application error" screen instead of the page.
 */
class CanvasErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    if (process.env.NODE_ENV === "development") {
      console.warn("FloatingBackground: WebGL unavailable, skipping.", error);
    }
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

export default function FloatingBackground({ children }: { children: ReactNode }) {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported(canUseWebGL());
  }, []);

  if (!supported) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false }}
          onCreated={({ gl }) => {
            // A context lost after creation (GPU reset, tab backgrounded on a
            // constrained device) would otherwise throw on the next frame.
            gl.domElement.addEventListener("webglcontextlost", (event) => {
              event.preventDefault();
              setSupported(false);
            });
          }}
        >
          {children}
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
