"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import WireframeShape from "./WireframeShape";

function Scene({ compact }: { compact: boolean }) {
  const spread = compact ? 0.6 : 1;
  const leftX = -4.5 * spread;
  const rightX = 4.5 * spread;
  const leftMidX = -3 * spread;
  const rightMidX = 3 * spread;
  const leftLowX = -3.2 * spread;
  const rightLowX = 3.2 * spread;

  return (
    <>
      {/* Left side */}
      <WireframeShape
        geometry="box"
        position={[leftX, 0, -1]}
        size={1}
        speed={0.6}
        color="#a8a29e"
        opacity={0.55}
        rotationAxes={{ x: 0.1, y: 0.15 }}
        floatSpeedMul={0.8}
      />
      <WireframeShape
        geometry="tetrahedron"
        position={[leftMidX, 1.8, -2]}
        size={0.45}
        speed={1.2}
        color="#a8a29e"
        opacity={0.55}
        rotationAxes={{ x: 0.18, y: 0.12 }}
        floatSpeedMul={0.9}
        rotationIntensity={0.5}
        floatIntensity={0.6}
      />
      <WireframeShape
        geometry="octahedron"
        position={[leftLowX, -1.6, -2]}
        size={0.4}
        speed={1}
        color="#78716c"
        opacity={0.5}
        rotationAxes={{ x: 0.1, z: 0.15 }}
        floatSpeedMul={0.8}
      />

      {/* Right side */}
      <WireframeShape
        geometry="box"
        position={[rightX, 0, -1]}
        size={1}
        speed={0.7}
        color="#a8a29e"
        opacity={0.55}
        rotationAxes={{ x: 0.1, y: 0.15 }}
        floatSpeedMul={0.8}
      />
      <WireframeShape
        geometry="octahedron"
        position={[rightMidX, 1.8, -2]}
        size={0.4}
        speed={1}
        color="#78716c"
        opacity={0.5}
        rotationAxes={{ x: 0.1, z: 0.15 }}
        floatSpeedMul={0.8}
      />
      <WireframeShape
        geometry="tetrahedron"
        position={[rightLowX, -1.6, -2]}
        size={0.45}
        speed={1.1}
        color="#a8a29e"
        opacity={0.55}
        rotationAxes={{ x: 0.18, y: 0.12 }}
        floatSpeedMul={0.9}
        rotationIntensity={0.5}
        floatIntensity={0.6}
      />
    </>
  );
}

export default function FloatingObjects() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsCompact(media.matches);
    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene compact={isCompact} />
      </Canvas>
    </div>
  );
}
