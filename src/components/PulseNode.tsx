import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function PulseSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Mouse interactive tilt (lerp toward pointer position)
    if (groupRef.current) {
      const targetX = state.pointer.y * 0.6;
      const targetY = state.pointer.x * 0.8;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
    }

    // Continuous base rotation for core
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.35;
      coreRef.current.rotation.x = t * 0.2;
    }
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y = -t * 0.45;
    }

    // Expand radial rings far outwards into open space
    const maxScale = 3.6;
    if (ring1Ref.current && ring1Ref.current.material) {
      const s1 = (t * 0.9) % maxScale;
      ring1Ref.current.scale.set(s1, s1, s1);
      (ring1Ref.current.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.85 * (1 - s1 / maxScale));
    }

    if (ring2Ref.current && ring2Ref.current.material) {
      const s2 = (t * 0.9 + 1.2) % maxScale;
      ring2Ref.current.scale.set(s2, s2, s2);
      (ring2Ref.current.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.85 * (1 - s2 / maxScale));
    }

    if (ring3Ref.current && ring3Ref.current.material) {
      const s3 = (t * 0.9 + 2.4) % maxScale;
      ring3Ref.current.scale.set(s3, s3, s3);
      (ring3Ref.current.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.85 * (1 - s3 / maxScale));
    }

    // Rotate outer holographic particle cloud
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.08;
      particlesRef.current.rotation.z = t * 0.05;
    }
  });

  // Generate random cyber particles surrounding the core
  const particleCount = 180;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 3) {
    const r = 1.8 + Math.random() * 2.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i] = r * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i + 2] = r * Math.cos(phi);
  }

  return (
    <group ref={groupRef}>
      {/* Central Cyber Wireframe Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.35, 2]} />
        <meshBasicMaterial color="#00ff9d" wireframe transparent opacity={0.9} />
      </mesh>

      {/* Inner Glowing Solid Cyber Sphere */}
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshBasicMaterial color="#00d9ff" wireframe={false} transparent opacity={0.4} />
      </mesh>

      {/* Expanding Pulse Ring 1 (Primary Green) */}
      <mesh ref={ring1Ref}>
        <ringGeometry args={[1.2, 1.26, 64]} />
        <meshBasicMaterial color="#00ff9d" side={THREE.DoubleSide} transparent opacity={0.8} />
      </mesh>

      {/* Expanding Pulse Ring 2 (Cyan) */}
      <mesh ref={ring2Ref}>
        <ringGeometry args={[1.2, 1.26, 64]} />
        <meshBasicMaterial color="#00d9ff" side={THREE.DoubleSide} transparent opacity={0.8} />
      </mesh>

      {/* Expanding Pulse Ring 3 (Primary Green) */}
      <mesh ref={ring3Ref}>
        <ringGeometry args={[1.2, 1.26, 64]} />
        <meshBasicMaterial color="#00ff9d" side={THREE.DoubleSide} transparent opacity={0.8} />
      </mesh>

      {/* Outer Holographic Particle Field */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.045} color="#00ff9d" transparent opacity={0.65} sizeAttenuation />
      </points>
    </group>
  );
}

export function PulseNode() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-[420px] sm:h-[500px] lg:h-[580px] w-full" />;

  return (
    <div className="relative h-[420px] sm:h-[500px] lg:h-[580px] w-full overflow-visible">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 50 }} className="!overflow-visible">
        <ambientLight intensity={0.6} />
        <PulseSphere />
      </Canvas>
    </div>
  );
}
