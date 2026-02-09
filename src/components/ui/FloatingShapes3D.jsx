import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, scale, color, speed, distort, shape }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * speed * 0.2) * 0.3;
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />;
      case 'torusKnot':
        return <torusKnotGeometry args={[0.8, 0.3, 64, 16]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1, 0]} />;
      default:
        return <sphereGeometry args={[1, 32, 32]} />;
    }
  }, [shape]);

  return (
    <Float
      speed={speed}
      rotationIntensity={0.4}
      floatIntensity={0.6}
      floatingRange={[-0.3, 0.3]}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry}
        {distort ? (
          <MeshDistortMaterial
            color={color}
            transparent
            opacity={0.12}
            distort={0.3}
            speed={2}
            roughness={0.4}
          />
        ) : (
          <MeshWobbleMaterial
            color={color}
            transparent
            opacity={0.1}
            factor={0.2}
            speed={1.5}
            roughness={0.5}
          />
        )}
      </mesh>
    </Float>
  );
}

// Deterministic pseudo-random using seed for stable particle positions
function seededRandom(seed) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function Particles({ count = 60 }) {
  const points = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (seededRandom(i * 3) - 0.5) * 20;
      pos[i * 3 + 1] = (seededRandom(i * 3 + 1) - 0.5) * 20;
      pos[i * 3 + 2] = (seededRandom(i * 3 + 2) - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#8b5cf6"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  const shapes = useMemo(() => [
    { position: [-4, 2, -3], scale: 0.8, color: '#8b5cf6', speed: 1.2, distort: true, shape: 'torus' },
    { position: [4, -1, -4], scale: 0.6, color: '#a78bfa', speed: 0.8, distort: false, shape: 'octahedron' },
    { position: [-2, -3, -2], scale: 0.5, color: '#c4b5fd', speed: 1.5, distort: true, shape: 'icosahedron' },
    { position: [3, 3, -5], scale: 0.7, color: '#7c3aed', speed: 1.0, distort: false, shape: 'torusKnot' },
    { position: [0, 0, -6], scale: 1.0, color: '#ddd6fe', speed: 0.6, distort: true, shape: 'dodecahedron' },
    { position: [-5, -1, -4], scale: 0.4, color: '#a78bfa', speed: 1.3, distort: false, shape: 'sphere' },
    { position: [5, 1, -3], scale: 0.5, color: '#8b5cf6', speed: 0.9, distort: true, shape: 'torus' },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} />
      <Particles />
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} />
      ))}
    </>
  );
}

export default function FloatingShapes3D() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      opacity: 0.4,
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
