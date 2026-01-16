"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Wireframe Torus (donut)
function WireframeTorus({ position, size, speed, color = "#a8a29e" }: {
  position: [number, number, number];
  size: number;
  speed: number;
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08 * speed;
    }
  });

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[size, size * 0.35, 12, 24]} />
        <meshBasicMaterial 
          color={color}
          wireframe={true}
          transparent={true}
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

// Wireframe Octahedron (diamond)
function WireframeOctahedron({ position, size, speed, color = "#78716c" }: {
  position: [number, number, number];
  size: number;
  speed: number;
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12 * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.08 * speed;
    }
  });

  return (
    <Float speed={speed * 0.6} rotationIntensity={0.25} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[size, 0]} />
        <meshBasicMaterial 
          color={color}
          wireframe={true}
          transparent={true}
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      {/* Top left - torus (moved inward to avoid clipping) */}
      <WireframeTorus position={[-3.5, 2, -3]} size={0.9} speed={0.5} />
      
      {/* Bottom right - octahedron (moved inward to avoid clipping) */}
      <WireframeOctahedron position={[4, -0.5, -2]} size={0.7} speed={0.6} />
    </>
  );
}

export default function FloatingObjectsContact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
