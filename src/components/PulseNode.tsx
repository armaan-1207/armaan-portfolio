import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GyroCoreSphere() {
  const masterGroupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const innerSolidRef = useRef<THREE.Mesh>(null);
  const gyroRing1Ref = useRef<THREE.Mesh>(null);
  const gyroRing2Ref = useRef<THREE.Mesh>(null);
  const gyroRing3Ref = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // 1. Differential Parallax Mouse Pointer Tracking
    if (masterGroupRef.current) {
      const targetX = state.pointer.y * 0.48;
      const targetY = state.pointer.x * 0.65;
      masterGroupRef.current.rotation.x = THREE.MathUtils.lerp(masterGroupRef.current.rotation.x, targetX, 0.06);
      masterGroupRef.current.rotation.y = THREE.MathUtils.lerp(masterGroupRef.current.rotation.y, targetY, 0.06);
    }

    // 2. Breathing Energy Core Surge & Multi-Axis Core Rotation
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.35;
      coreRef.current.rotation.x = t * 0.22;
      const pulse = 1 + Math.sin(t * 2.4) * 0.065 + Math.cos(t * 4.8) * 0.025;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }
    if (innerSolidRef.current) {
      innerSolidRef.current.rotation.y = -t * 0.45;
      innerSolidRef.current.rotation.z = t * 0.15;
      const innerPulse = 1 + Math.cos(t * 3.1) * 0.05;
      innerSolidRef.current.scale.set(innerPulse, innerPulse, innerPulse);
    }

    // 3. Multi-Axis Orbital Gyroscope Rings
    if (gyroRing1Ref.current) {
      gyroRing1Ref.current.rotation.z = t * 0.45;
      gyroRing1Ref.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.8) * 0.35;
      gyroRing1Ref.current.rotation.y = Math.cos(t * 0.6) * 0.25;
    }
    if (gyroRing2Ref.current) {
      gyroRing2Ref.current.rotation.z = -t * 0.55;
      gyroRing2Ref.current.rotation.y = -Math.PI / 4 + Math.cos(t * 0.9) * 0.35;
      gyroRing2Ref.current.rotation.x = Math.sin(t * 0.7) * 0.3;
    }
    if (gyroRing3Ref.current) {
      gyroRing3Ref.current.rotation.x = t * 0.6;
      gyroRing3Ref.current.rotation.y = Math.PI / 2 + Math.sin(t * 1.1) * 0.25;
      gyroRing3Ref.current.rotation.z = -t * 0.35;
    }

    // 4. Oscillating Data Stream Particles
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.08;
      particlesRef.current.rotation.z = Math.sin(t * 0.3) * 0.1;
      const particlePositions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlePositions.length; i += 3) {
        const origR = 1.4 + ((i / 3) % 18) * 0.08;
        const wave = Math.sin(t * 1.8 + i) * 0.045;
        const currentR = Math.sqrt(
          particlePositions[i] * particlePositions[i] +
          particlePositions[i + 1] * particlePositions[i + 1] +
          particlePositions[i + 2] * particlePositions[i + 2]
        );
        if (currentR > 0.1) {
          const factor = (origR + wave) / currentR;
          particlePositions[i] *= factor;
          particlePositions[i + 1] *= factor;
          particlePositions[i + 2] *= factor;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  // Generate multi-colored cyber particles around the gyroscope
  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 3) {
    const r = 1.45 + Math.random() * 1.65;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i] = r * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i + 2] = r * Math.cos(phi);
  }

  return (
    <group ref={masterGroupRef}>
      {/* Central Cyber Wireframe Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.25, 2]} />
        <meshBasicMaterial color="#00ff9d" wireframe transparent opacity={0.88} />
      </mesh>

      {/* Inner Glowing Solid Core */}
      <mesh ref={innerSolidRef}>
        <sphereGeometry args={[0.72, 32, 32]} />
        <meshBasicMaterial color="#00d9ff" wireframe={false} transparent opacity={0.38} />
      </mesh>

      {/* Gyroscope Ring 1 (Cyber Green) */}
      <mesh ref={gyroRing1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.55, 0.012, 16, 100]} />
        <meshBasicMaterial color="#00ff9d" transparent opacity={0.85} />
      </mesh>

      {/* Gyroscope Ring 2 (Electric Cyan) */}
      <mesh ref={gyroRing2Ref} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[1.78, 0.015, 16, 100]} />
        <meshBasicMaterial color="#00d9ff" transparent opacity={0.8} />
      </mesh>

      {/* Gyroscope Ring 3 (Cyber Violet) */}
      <mesh ref={gyroRing3Ref} rotation={[0, Math.PI / 2, Math.PI / 4]}>
        <torusGeometry args={[2.02, 0.01, 16, 100]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.7} />
      </mesh>

      {/* Surrounding Oscillating Data Particle Cloud */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.042} color="#00d9ff" transparent opacity={0.8} sizeAttenuation />
      </points>
    </group>
  );
}

export function PulseNode() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-[400px] sm:h-[480px] lg:h-[540px] w-full" />;

  return (
    <div className="relative h-[400px] sm:h-[480px] lg:h-[540px] w-full [mask-image:radial-gradient(circle_at_center,black_62%,transparent_100%)]">
      <Canvas camera={{ position: [0, 0, 6.4], fov: 46 }}>
        <ambientLight intensity={0.65} />
        <GyroCoreSphere />
      </Canvas>
    </div>
  );
}
