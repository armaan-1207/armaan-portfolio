import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function PulseSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Rotate core sphere
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.4;
      meshRef.current.rotation.x = t * 0.2;
    }

    // Expand radial rings
    if (ring1Ref.current && ring1Ref.current.material) {
      const s1 = (t * 0.8) % 2.5;
      ring1Ref.current.scale.set(s1, s1, s1);
      (ring1Ref.current.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 1 - s1 / 2.5);
    }

    if (ring2Ref.current && ring2Ref.current.material) {
      const s2 = (t * 0.8 + 0.8) % 2.5;
      ring2Ref.current.scale.set(s2, s2, s2);
      (ring2Ref.current.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 1 - s2 / 2.5);
    }

    if (ring3Ref.current && ring3Ref.current.material) {
      const s3 = (t * 0.8 + 1.6) % 2.5;
      ring3Ref.current.scale.set(s3, s3, s3);
      (ring3Ref.current.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 1 - s3 / 2.5);
    }
  });

  return (
    <group>
      {/* Central 3D Core Sphere */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.3, 2]} />
        <meshBasicMaterial color="#00ff9d" wireframe transparent opacity={0.85} />
      </mesh>

      {/* Inner glowing solid sphere */}
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial color="#00d9ff" transparent opacity={0.35} />
      </mesh>

      {/* Expanding Pulse Ring 1 */}
      <mesh ref={ring1Ref}>
        <ringGeometry args={[1.2, 1.25, 64]} />
        <meshBasicMaterial color="#00ff9d" side={THREE.DoubleSide} transparent opacity={0.8} />
      </mesh>

      {/* Expanding Pulse Ring 2 */}
      <mesh ref={ring2Ref}>
        <ringGeometry args={[1.2, 1.25, 64]} />
        <meshBasicMaterial color="#00d9ff" side={THREE.DoubleSide} transparent opacity={0.8} />
      </mesh>

      {/* Expanding Pulse Ring 3 */}
      <mesh ref={ring3Ref}>
        <ringGeometry args={[1.2, 1.25, 64]} />
        <meshBasicMaterial color="#00ff9d" side={THREE.DoubleSide} transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

export function PulseNode() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-[380px] w-full sm:h-[450px] lg:h-[500px]" />;

  return (
    <div className="h-[380px] w-full sm:h-[450px] lg:h-[500px]">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <PulseSphere />
      </Canvas>
    </div>
  );
}
