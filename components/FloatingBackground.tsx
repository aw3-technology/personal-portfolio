"use client";

import { Component, useEffect, useState, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { getWebGLReport, installDiagnostics, log } from "@/lib/diagnostics";

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
    // Always logged, including production. A silent catch here is what made the
    // missing hero shapes so hard to spot.
    log.error("3D background failed to render, hiding it:", error);
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

export default function FloatingBackground({ children }: { children: ReactNode }) {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    installDiagnostics();
    setSupported(getWebGLReport().supported);
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
            log.info("3D background renderer created");

            // preventDefault marks the loss as recoverable so three.js can
            // rebuild on webglcontextrestored. Without it a transient loss
            // (GPU reset, driver hiccup) permanently kills the background.
            gl.domElement.addEventListener("webglcontextlost", (event) => {
              event.preventDefault();
              log.warn("WebGL context lost — background paused until restored");
            });
            gl.domElement.addEventListener("webglcontextrestored", () => {
              log.warn("WebGL context restored");
            });
          }}
        >
          {children}
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
