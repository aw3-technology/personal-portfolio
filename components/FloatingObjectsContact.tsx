"use client";

import WireframeShape from "./WireframeShape";
import FloatingBackground from "./FloatingBackground";

function Scene() {
  return (
    <>
      {/* Top left - torus */}
      <WireframeShape
        geometry="torus"
        position={[-3.5, 2, -3]}
        size={0.9}
        speed={0.5}
        color="#a8a29e"
        opacity={0.3}
        rotationAxes={{ x: 0.1, y: 0.08 }}
        floatSpeedMul={0.5}
        rotationIntensity={0.2}
        floatIntensity={0.4}
        geometryArgs={[0.9, 0.9 * 0.35, 12, 24]}
      />

      {/* Bottom right - octahedron */}
      <WireframeShape
        geometry="octahedron"
        position={[4, -0.5, -2]}
        size={0.7}
        speed={0.6}
        color="#78716c"
        opacity={0.35}
        rotationAxes={{ y: 0.12, z: 0.08 }}
        floatSpeedMul={0.6}
        rotationIntensity={0.25}
        floatIntensity={0.5}
      />
    </>
  );
}

export default function FloatingObjectsContact() {
  return (
    <FloatingBackground>
      <Scene />
    </FloatingBackground>
  );
}
