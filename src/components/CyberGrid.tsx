import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function CyberWave() {
  const pointsRef = useRef<THREE.Points>(null!);
  
  // Grid dimensions
  const width = 80;
  const depth = 80;
  const count = width * depth;
  const sep = 0.5;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    
    const colorA = new THREE.Color("#00ff9d");
    const colorB = new THREE.Color("#00d9ff");

    let i = 0;
    for (let ix = 0; ix < width; ix++) {
      for (let iz = 0; iz < depth; iz++) {
        // x, y, z
        pos[i * 3] = ix * sep - (width * sep) / 2;
        pos[i * 3 + 1] = 0;
        pos[i * 3 + 2] = iz * sep - (depth * sep) / 2;

        // Create a gradient based on position
        const mixRatio = (ix / width + iz / depth) / 2;
        const c = colorA.clone().lerp(colorB, mixRatio);
        
        cols[i * 3] = c.r;
        cols[i * 3 + 1] = c.g;
        cols[i * 3 + 2] = c.b;
        
        i++;
      }
    }
    return [pos, cols];
  }, [count, width, depth]);

  useFrame((state) => {
    if (!pointsRef.current || !pointsRef.current.geometry || !pointsRef.current.geometry.attributes.position) return;
    const time = state.clock.getElapsedTime();
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

    let i = 0;
    for (let ix = 0; ix < width; ix++) {
      for (let iz = 0; iz < depth; iz++) {
        // Sine wave math
        const x = ix * sep - (width * sep) / 2;
        const z = iz * sep - (depth * sep) / 2;
        
        // Complex wave effect
        const y = 
          Math.sin(ix * 0.2 + time) * 1.5 + 
          Math.cos(iz * 0.2 + time) * 1.5 +
          Math.sin((ix + iz) * 0.1 - time * 0.5) * 1;
          
        positions[i * 3 + 1] = y - 5; // offset downwards
        i++;
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Slight rotation based on mouse
    const mouseX = state.mouse.x * 0.2;
    const mouseY = state.mouse.y * 0.2;
    pointsRef.current.rotation.x += (mouseY - pointsRef.current.rotation.x) * 0.05;
    pointsRef.current.rotation.y += (mouseX - pointsRef.current.rotation.y) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          args={[positions, 3]}
          count={count} 
          array={positions} 
          itemSize={3} 
        />
        <bufferAttribute 
          attach="attributes-color" 
          args={[colors, 3]}
          count={count} 
          array={colors} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.12} 
        vertexColors 
        transparent 
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export function CyberGrid() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 5, 20], fov: 60 }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <CyberWave />
      </Canvas>
    </div>
  );
}
