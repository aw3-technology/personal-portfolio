 "use client";
 
 import { useEffect, useMemo, useRef, useState } from "react";
 import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
 import * as THREE from "three";
 
// Wireframe Sphere
function WireframeSphere({ position, size, speed, color = "#78716c" }: {
  position: [number, number, number];
  size: number;
  speed: number;
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 12, 8]} />
        <meshBasicMaterial 
          color={color}
          wireframe={true}
          transparent={true}
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

// Wireframe Cube
function WireframeCube({ position, size, speed, color = "#a8a29e" }: {
  position: [number, number, number];
  size: number;
  speed: number;
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  return (
    <Float speed={speed * 0.8} rotationIntensity={0.3} floatIntensity={0.7}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshBasicMaterial 
          color={color}
          wireframe={true}
          transparent={true}
          opacity={0.55}
        />
      </mesh>
    </Float>
  );
}

// Wireframe Torus Knot
function WireframeTorusKnot({ position, size, speed, color = "#78716c" }: {
  position: [number, number, number];
  size: number;
  speed: number;
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.7}>
      <mesh ref={meshRef} position={position}>
        <torusKnotGeometry args={[size * 0.5, size * 0.15, 64, 8, 2, 3]} />
        <meshBasicMaterial 
          color={color}
          wireframe={true}
          transparent={true}
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

// Wireframe Torus
function WireframeTorus({ position, size, speed, color = "#a8a29e" }: {
  position: [number, number, number];
  size: number;
  speed: number;
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.12 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08 * speed;
    }
  });

  return (
    <Float speed={speed * 0.9} rotationIntensity={0.35} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[size * 0.6, size * 0.2, 16, 32]} />
        <meshBasicMaterial 
          color={color}
          wireframe={true}
          transparent={true}
          opacity={0.55}
        />
      </mesh>
    </Float>
  );
}

// Wireframe Icosahedron
function WireframeIcosahedron({ position, size, speed, color = "#78716c" }: {
  position: [number, number, number];
  size: number;
  speed: number;
  color?: string;
}) {
   const meshRef = useRef<THREE.Mesh>(null);
   
   useFrame((state) => {
     if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
     }
   });
 
   return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.8}>
       <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[size, 1]} />
        <meshBasicMaterial 
          color={color}
          wireframe={true}
          transparent={true}
          opacity={0.6}
         />
       </mesh>
     </Float>
   );
 }
 
// Wireframe Octahedron
function WireframeOctahedron({ position, size, speed, color = "#a8a29e" }: {
  position: [number, number, number];
   size: number;
   speed: number;
  color?: string;
 }) {
   const meshRef = useRef<THREE.Mesh>(null);
   
   useFrame((state) => {
     if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15 * speed;
     }
   });
 
   return (
    <Float speed={speed * 0.8} rotationIntensity={0.3} floatIntensity={0.7}>
       <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[size, 0]} />
        <meshBasicMaterial 
          color={color}
          wireframe={true}
          transparent={true}
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

// Wireframe Dodecahedron
function WireframeDodecahedron({ position, size, speed, color = "#d6d3d1" }: {
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
    <Float speed={speed * 0.7} rotationIntensity={0.35} floatIntensity={0.9}>
      <mesh ref={meshRef} position={position}>
        <dodecahedronGeometry args={[size, 0]} />
        <meshBasicMaterial 
          color={color}
          wireframe={true}
          transparent={true}
          opacity={0.45}
        />
      </mesh>
    </Float>
  );
}

// Wireframe Tetrahedron
function WireframeTetrahedron({ position, size, speed, color = "#57534e" }: {
  position: [number, number, number];
  size: number;
  speed: number;
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.18 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12 * speed;
    }
  });

  return (
    <Float speed={speed * 0.9} rotationIntensity={0.5} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <tetrahedronGeometry args={[size, 0]} />
        <meshBasicMaterial 
          color={color}
          wireframe={true}
          transparent={true}
          opacity={0.55}
         />
       </mesh>
     </Float>
   );
 }
 
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
      <WireframeCube position={[leftX, 0, -1]} size={1} speed={0.6} />
      <WireframeTetrahedron position={[leftMidX, 1.8, -2]} size={0.45} speed={1.2} color="#a8a29e" />
      <WireframeOctahedron position={[leftLowX, -1.6, -2]} size={0.4} speed={1} color="#78716c" />
      
      {/* Right side */}
      <WireframeCube position={[rightX, 0, -1]} size={1} speed={0.7} />
      <WireframeOctahedron position={[rightMidX, 1.8, -2]} size={0.4} speed={1} color="#78716c" />
      <WireframeTetrahedron position={[rightLowX, -1.6, -2]} size={0.45} speed={1.1} color="#a8a29e" />
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
