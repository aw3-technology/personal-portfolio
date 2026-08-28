"use client";

import { Component, useEffect, useState, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";

/**
 * Cached so the probe only ever creates one context per page load. Each probe
 * costs a real WebGL context, and browsers cap how many a page may hold (~16 in
 * Chrome) — past the cap the browser drops the oldest, which would be a live
 * background canvas.
 */
let webGLSupport: boolean | undefined;

/**
 * Probes for a usable WebGL2 context — the context three.js actually requests
 * (r182 has no WebGL1 fallback). Returns false when the browser blocks or fails
 * to create one: hardware acceleration off, sandboxed GPU process, driver
 * blocklist, or a headless environment.
 *
 * Deliberately does not call WEBGL_lose_context.loseContext(). Forcing a context
 * loss here can make the browser refuse the renderer's own context request
 * moments later, which is worse than letting the probe context be collected.
 */
function canUseWebGL(): boolean {
  if (webGLSupport !== undefined) return webGLSupport;
  if (typeof window === "undefined") return false;

  try {
    webGLSupport = !!(
      window.WebGL2RenderingContext &&
      document.createElement("canvas").getContext("webgl2")
    );
  } catch {
    webGLSupport = false;
  }

  return webGLSupport;
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
    console.warn("FloatingBackground: renderer unavailable, skipping.", error);
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
          gl={{ antialias: true, alpha: true }}
          onCreated={({ gl }) => {
            // preventDefault marks the loss as recoverable so three.js can
            // rebuild on webglcontextrestored. Without it a transient loss
            // (GPU reset, driver hiccup) permanently kills the background.
            gl.domElement.addEventListener("webglcontextlost", (event) => {
              event.preventDefault();
            });
          }}
        >
          {children}
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
