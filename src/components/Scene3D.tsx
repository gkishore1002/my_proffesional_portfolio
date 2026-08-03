import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

function AnimatedSphere() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh scale={1.8}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#f97316"
          roughness={0.2}
          metalness={0.8}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function AnimatedTorus() {
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <mesh scale={1.2} position={[2.5, -1, -1]}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <MeshDistortMaterial
          color="#fb923c"
          roughness={0.3}
          metalness={0.7}
          distort={0.2}
          speed={3}
        />
      </mesh>
    </Float>
  );
}

const Scene3D = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none ${className}`}>
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#f97316" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#fb923c" />
        <AnimatedSphere />
        <AnimatedTorus />
      </Suspense>
    </Canvas>
  </div>
);

export default Scene3D;
