import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Starfield Particle Nebula ---
function CyberParticles({ count = 1200 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const color1 = new THREE.Color('#a855f7'); // neon purple
    const color2 = new THREE.Color('#e879f9'); // neon magenta
    const color3 = new THREE.Color('#38bdf8'); // cyber cyan

    for (let i = 0; i < count; i++) {
      // Spherical distribution around center
      const r = THREE.MathUtils.randFloat(4, 25);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      // Random color blend
      const mixedColor = new THREE.Color();
      const rand = Math.random();
      if (rand < 0.45) mixedColor.copy(color1);
      else if (rand < 0.8) mixedColor.copy(color2);
      else mixedColor.copy(color3);

      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// --- The Procedural Quantum Core ---
function QuantumCyberCore({ coreGroupRef }) {
  const innerMeshRef = useRef();
  const wireMeshRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.x = t * 0.25;
      innerMeshRef.current.rotation.y = t * 0.35;
      const s = 1 + Math.sin(t * 1.8) * 0.05;
      innerMeshRef.current.scale.set(s, s, s);
    }

    if (wireMeshRef.current) {
      wireMeshRef.current.rotation.x = -t * 0.2;
      wireMeshRef.current.rotation.z = t * 0.3;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.4;
      ring1Ref.current.rotation.y = t * 0.2;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.35;
      ring2Ref.current.rotation.x = t * 0.15;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = -t * 0.5;
      ring3Ref.current.rotation.z = t * 0.25;
    }
  });

  return (
    <group ref={coreGroupRef}>
      {/* Central Holographic Geodesic Core */}
      <mesh ref={innerMeshRef}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial
          color="#3b0764"
          emissive="#9333ea"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Outer Wireframe Shroud */}
      <mesh ref={wireMeshRef}>
        <icosahedronGeometry args={[1.7, 2]} />
        <meshStandardMaterial
          color="#e879f9"
          emissive="#d946ef"
          emissiveIntensity={0.7}
          wireframe
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Orbital Neon Ring 1 - Purple */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.4, 0.025, 16, 100]} />
        <meshBasicMaterial color="#c084fc" />
      </mesh>

      {/* Orbital Neon Ring 2 - Magenta */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.9, 0.02, 16, 120]} />
        <meshBasicMaterial color="#e879f9" />
      </mesh>

      {/* Orbital Cyber Ring 3 - Electric Cyan */}
      <mesh ref={ring3Ref} rotation={[0, Math.PI / 4, Math.PI / 3]}>
        <torusGeometry args={[3.4, 0.018, 16, 140]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>

      {/* Floating Orbital Node Satellites */}
      <mesh position={[2.4, 0, 0]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial color="#e879f9" />
      </mesh>
      <mesh position={[-2.4, 0, 0]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>
      <mesh position={[0, 2.9, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#c084fc" />
      </mesh>
    </group>
  );
}

// --- Scene Controller with Mouse Tracking & Scroll Trigger ---
function SceneController({ coreGroupRef }) {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    // Smooth mouse lerp
    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;

    // Gentle camera sway
    camera.position.x = mouse.current.x * 0.4;
    camera.position.y = mouse.current.y * 0.3;
  });

  useEffect(() => {
    if (!coreGroupRef.current) return;

    const core = coreGroupRef.current;

    // Set initial position for desktop vs mobile
    const isMobile = window.innerWidth < 768;
    core.position.set(isMobile ? 0 : 1.4, 0, 0);

    const ctx = gsap.context(() => {
      // 1. Hero -> About
      ScrollTrigger.create({
        trigger: '#about',
        start: 'top bottom',
        end: 'center center',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          if (!isMobile) {
            core.position.x = gsap.utils.interpolate(1.4, 2.6, progress);
            core.position.y = gsap.utils.interpolate(0, 0.3, progress);
            core.position.z = gsap.utils.interpolate(0, -0.8, progress);
          }
        },
      });

      // 2. About -> Skills
      ScrollTrigger.create({
        trigger: '#skills',
        start: 'top bottom',
        end: 'center center',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          if (!isMobile) {
            core.position.x = gsap.utils.interpolate(2.6, -2.4, progress);
            core.position.y = gsap.utils.interpolate(0.3, -0.2, progress);
            core.scale.setScalar(gsap.utils.interpolate(1.0, 1.25, progress));
          }
        },
      });

      // 3. Skills -> Projects
      ScrollTrigger.create({
        trigger: '#projects',
        start: 'top bottom',
        end: 'center center',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          if (!isMobile) {
            core.position.x = gsap.utils.interpolate(-2.4, 0, progress);
            core.position.y = gsap.utils.interpolate(-0.2, -1.2, progress);
            core.position.z = gsap.utils.interpolate(-0.8, -3.2, progress);
            core.scale.setScalar(gsap.utils.interpolate(1.25, 0.85, progress));
          }
        },
      });

      // 4. Projects -> Experience
      ScrollTrigger.create({
        trigger: '#experience',
        start: 'top bottom',
        end: 'center center',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          if (!isMobile) {
            core.position.x = gsap.utils.interpolate(0, 2.7, progress);
            core.position.y = gsap.utils.interpolate(-1.2, 0.1, progress);
            core.position.z = gsap.utils.interpolate(-3.2, -0.6, progress);
            core.scale.setScalar(gsap.utils.interpolate(0.85, 1.1, progress));
          }
        },
      });

      // 5. Experience -> Publications
      ScrollTrigger.create({
        trigger: '#publications',
        start: 'top bottom',
        end: 'center center',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          if (!isMobile) {
            core.position.x = gsap.utils.interpolate(2.7, -2.5, progress);
            core.position.y = gsap.utils.interpolate(0.1, 0.4, progress);
            core.position.z = gsap.utils.interpolate(-0.6, -0.4, progress);
          }
        },
      });

      // 6. Publications -> Contact
      ScrollTrigger.create({
        trigger: '#contact',
        start: 'top bottom',
        end: 'center center',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          core.position.x = gsap.utils.interpolate(isMobile ? 0 : -2.5, 0, progress);
          core.position.y = gsap.utils.interpolate(0.4, 0.8, progress);
          core.position.z = gsap.utils.interpolate(-0.4, -0.2, progress);
          core.scale.setScalar(gsap.utils.interpolate(1.1, 1.35, progress));
        },
      });
    });

    return () => ctx.revert();
  }, [coreGroupRef]);

  return null;
}

export default function CyberBackground3D() {
  const coreGroupRef = useRef();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.65} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#e879f9" />
        <pointLight position={[-6, -5, -4]} intensity={2.0} color="#38bdf8" />
        <pointLight position={[0, 0, 3]} intensity={1.8} color="#a855f7" />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <QuantumCyberCore coreGroupRef={coreGroupRef} />
        </Float>

        <CyberParticles count={1100} />
        <SceneController coreGroupRef={coreGroupRef} />
      </Canvas>
    </div>
  );
}
