import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null!);

  const particleCount = 1800;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const cols = new Float32Array(particleCount * 3);

    const green = new THREE.Color("#00ff9d");
    const cyan = new THREE.Color("#00d9ff");
    const darkGreen = new THREE.Color("#005533");

    for (let i = 0; i < particleCount; i++) {
      // Spread across a 3D box space
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;

      // Random color blend (neon green, cyan, dark green)
      const rand = Math.random();
      const chosenColor = rand > 0.5 ? green : rand > 0.15 ? cyan : darkGreen;
      cols[i * 3] = chosenColor.r;
      cols[i * 3 + 1] = chosenColor.g;
      cols[i * 3 + 2] = chosenColor.b;
    }
    return [pos, cols];
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.x += delta * 0.03;
    pointsRef.current.rotation.y += delta * 0.05;

    // Subtle mouse sway
    const mouseX = state.mouse.x * 0.4;
    const mouseY = state.mouse.y * 0.4;
    pointsRef.current.position.x += (mouseX - pointsRef.current.position.x) * 0.05;
    pointsRef.current.position.y += (mouseY - pointsRef.current.position.y) * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={pointsRef} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.045}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.85}
        />
      </Points>
    </group>
  );
}

function MovingGrid() {
  const gridRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (!gridRef.current) return;
    // Move grid texture effect along Z axis
    gridRef.current.position.z = (gridRef.current.position.z + delta * 0.8) % 1;
  });

  return (
    <group ref={gridRef} position={[0, -3.2, 0]} rotation={[-Math.PI / 2.3, 0, 0]}>
      <gridHelper args={[30, 40, "#00ff9d", "rgba(0, 217, 255, 0.15)"]} />
    </group>
  );
}

export function CyberGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        <MovingGrid />
      </Canvas>
    </div>
  );
}
