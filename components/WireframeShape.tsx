"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export type WireframeGeometry =
  | "sphere"
  | "box"
  | "torusKnot"
  | "torus"
  | "icosahedron"
  | "octahedron"
  | "dodecahedron"
  | "tetrahedron";

type RotationAxes = { x?: number; y?: number; z?: number };

type WireframeShapeProps = {
  geometry: WireframeGeometry;
  position: [number, number, number];
  size: number;
  speed: number;
  color?: string;
  opacity?: number;
  rotationAxes?: RotationAxes;
  floatSpeedMul?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  geometryArgs?: number[];
};

function ShapeGeometry({
  geometry,
  size,
  args,
}: {
  geometry: WireframeGeometry;
  size: number;
  args?: number[];
}) {
  switch (geometry) {
    case "sphere":
      return <sphereGeometry args={(args as [number, number, number]) ?? [size, 12, 8]} />;
    case "box":
      return <boxGeometry args={(args as [number, number, number]) ?? [size, size, size]} />;
    case "torusKnot":
      return (
        <torusKnotGeometry
          args={
            (args as [number, number, number, number, number, number]) ??
            [size * 0.5, size * 0.15, 64, 8, 2, 3]
          }
        />
      );
    case "torus":
      return (
        <torusGeometry
          args={
            (args as [number, number, number, number]) ??
            [size * 0.6, size * 0.2, 16, 32]
          }
        />
      );
    case "icosahedron":
      return <icosahedronGeometry args={(args as [number, number]) ?? [size, 1]} />;
    case "octahedron":
      return <octahedronGeometry args={(args as [number, number]) ?? [size, 0]} />;
    case "dodecahedron":
      return <dodecahedronGeometry args={(args as [number, number]) ?? [size, 0]} />;
    case "tetrahedron":
      return <tetrahedronGeometry args={(args as [number, number]) ?? [size, 0]} />;
  }
}

export default function WireframeShape({
  geometry,
  position,
  size,
  speed,
  color = "#78716c",
  opacity = 0.5,
  rotationAxes,
  floatSpeedMul = 1,
  rotationIntensity = 0.3,
  floatIntensity = 0.7,
  geometryArgs,
}: WireframeShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh || !rotationAxes) return;
    const t = state.clock.elapsedTime * speed;
    if (rotationAxes.x !== undefined) mesh.rotation.x = t * rotationAxes.x;
    if (rotationAxes.y !== undefined) mesh.rotation.y = t * rotationAxes.y;
    if (rotationAxes.z !== undefined) mesh.rotation.z = t * rotationAxes.z;
  });

  return (
    <Float
      speed={speed * floatSpeedMul}
      rotationIntensity={rotationIntensity}
      floatIntensity={floatIntensity}
    >
      <mesh ref={meshRef} position={position}>
        <ShapeGeometry geometry={geometry} size={size} args={geometryArgs} />
        <meshBasicMaterial color={color} wireframe transparent opacity={opacity} />
      </mesh>
    </Float>
  );
}
