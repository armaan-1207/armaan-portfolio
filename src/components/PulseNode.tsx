import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Shield, Zap, Terminal, Activity } from "lucide-react";

function CyberGlobe3D() {
  const globeGroupRef = useRef<THREE.Group>(null);
  const sphereGridRef = useRef<THREE.LineSegments>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const floorPedestalRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Continuous globe rotation + smooth pointer tilt
    if (globeGroupRef.current) {
      const targetX = state.pointer.y * 0.35;
      const targetY = state.pointer.x * 0.5 + t * 0.22; // continuous spinning around Y axis
      globeGroupRef.current.rotation.x = THREE.MathUtils.lerp(globeGroupRef.current.rotation.x, targetX, 0.05);
      globeGroupRef.current.rotation.y = THREE.MathUtils.lerp(globeGroupRef.current.rotation.y, targetY, 0.05);
    }

    // Rotate inner wireframe lat-long grid
    if (sphereGridRef.current) {
      sphereGridRef.current.rotation.y = t * 0.15;
    }

    // Orbital Communication Rings
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = t * 0.35;
      outerRingRef.current.rotation.x = Math.sin(t * 0.2) * 0.3;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z = -t * 0.45;
    }

    // Rotate Hologram Pedestal Base Rings
    if (floorPedestalRef.current) {
      floorPedestalRef.current.rotation.z = t * 0.25;
    }

    // Rotate particle field
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.05;
    }
  });

  // Particle cloud around the globe
  const particleCount = 220;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 3) {
    const r = 1.5 + Math.random() * 1.6;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i] = r * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i + 2] = r * Math.cos(phi);
  }

  // Create Wireframe Earth / Lat-Long Grid
  const sphereGeo = new THREE.SphereGeometry(1.4, 32, 18);
  const wireframeGeo = new THREE.WireframeGeometry(sphereGeo);

  return (
    <group>
      {/* Central Rotating Cyber Globe */}
      <group ref={globeGroupRef}>
        {/* Outer Lat-Long Wireframe Grid */}
        <lineSegments ref={sphereGridRef} geometry={wireframeGeo}>
          <lineBasicMaterial color="#00ff9d" transparent opacity={0.65} linewidth={1} />
        </lineSegments>

        {/* Inner Glowing Hologram Sphere Core */}
        <mesh>
          <sphereGeometry args={[1.36, 32, 32]} />
          <meshBasicMaterial color="#00d9ff" transparent opacity={0.18} />
        </mesh>

        {/* Tilted Orbital Ring 1 (Cyber Green) */}
        <mesh ref={outerRingRef} rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[1.75, 1.82, 64]} />
          <meshBasicMaterial color="#00ff9d" side={THREE.DoubleSide} transparent opacity={0.7} />
        </mesh>

        {/* Tilted Orbital Ring 2 (Electric Cyan) */}
        <mesh ref={innerRingRef} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
          <ringGeometry args={[1.95, 2.02, 64]} />
          <meshBasicMaterial color="#00d9ff" side={THREE.DoubleSide} transparent opacity={0.6} />
        </mesh>

        {/* Floating Cyber Orbit Particles */}
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          </bufferGeometry>
          <pointsMaterial size={0.04} color="#00d9ff" transparent opacity={0.75} sizeAttenuation />
        </points>
      </group>

      {/* Hologram Pedestal Base Rings (Lying flat on XZ floor plane) */}
      <group position={[0, -1.85, 0]} rotation={[-Math.PI / 2, 0, 0]} ref={floorPedestalRef}>
        <mesh>
          <ringGeometry args={[0.5, 0.6, 64]} />
          <meshBasicMaterial color="#00ff9d" side={THREE.DoubleSide} transparent opacity={0.8} />
        </mesh>
        <mesh>
          <ringGeometry args={[0.8, 1.1, 64]} />
          <meshBasicMaterial color="#00d9ff" side={THREE.DoubleSide} transparent opacity={0.4} />
        </mesh>
        <mesh>
          <ringGeometry args={[1.3, 1.6, 64]} />
          <meshBasicMaterial color="#00ff9d" side={THREE.DoubleSide} transparent opacity={0.25} />
        </mesh>
      </group>
    </group>
  );
}

export function PulseNode() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-[460px] sm:h-[540px] lg:h-[600px] w-full" />;

  return (
    <div className="relative h-[460px] sm:h-[540px] lg:h-[600px] w-full flex items-center justify-center">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0 [mask-image:radial-gradient(circle_at_center,black_65%,transparent_100%)]">
        <Canvas camera={{ position: [0, 0, 6.2], fov: 46 }}>
          <ambientLight intensity={0.6} />
          <CyberGlobe3D />
        </Canvas>
      </div>

      {/* 4 Floating HUD Target Callouts (From Reference Image) */}
      <div className="pointer-events-none relative z-10 h-full w-full max-w-[540px]">
        {/* Top-Left: [ ! ] EXPLOIT */}
        <div className="absolute top-6 left-2 sm:left-4 rounded-lg border border-primary/40 bg-[#070d17]/90 px-3.5 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,157,0.2)]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-primary mb-0.5">
            <Zap size={13} className="animate-pulse" />
            <span>[ ! ] EXPLOIT</span>
          </div>
          <p className="font-mono text-[10px] text-muted-foreground">Find. Exploit. Own.</p>
        </div>

        {/* Bottom-Left: [ * ] ANALYZE */}
        <div className="absolute bottom-16 left-2 sm:left-4 rounded-lg border border-secondary/40 bg-[#070d17]/90 px-3.5 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(0,217,255,0.2)]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-secondary mb-0.5">
            <Terminal size={13} />
            <span>[ * ] ANALYZE</span>
          </div>
          <p className="font-mono text-[10px] text-muted-foreground">Understand Every Byte</p>
        </div>

        {/* Top-Right: [ + ] RECON */}
        <div className="absolute top-10 right-2 sm:right-4 rounded-lg border border-secondary/40 bg-[#070d17]/90 px-3.5 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(0,217,255,0.2)] text-right">
          <div className="flex items-center justify-end gap-2 font-mono text-xs font-bold text-secondary mb-0.5">
            <span>RECON [ + ]</span>
            <Shield size={13} />
          </div>
          <p className="font-mono text-[10px] text-muted-foreground">Scanning Open Ports</p>
        </div>

        {/* Bottom-Right: [ # ] DEFEND */}
        <div className="absolute bottom-20 right-2 sm:right-4 rounded-lg border border-primary/40 bg-[#070d17]/90 px-3.5 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,157,0.2)] text-right">
          <div className="flex items-center justify-end gap-2 font-mono text-xs font-bold text-primary mb-0.5">
            <span>DEFEND [ # ]</span>
            <Activity size={13} />
          </div>
          <p className="font-mono text-[10px] text-muted-foreground">Build Resilience</p>
        </div>
      </div>
    </div>
  );
}
