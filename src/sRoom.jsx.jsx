import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";
import { Color } from 'three';
import { useRef } from 'react';
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";

const WobblyMaterial = shaderMaterial(
  { time: 0 }, // Uniforms
  `
    varying vec2 vUv;
    uniform float time;
    void main() {
      vUv = uv;
      vec3 newPosition = position;
      // Apply a wobbly effect using sine waves
      newPosition.y += sin(position.x * 0.5 + time) * 0.9;  // Wobble effect
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `,
  `
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(0.1, 0.1, 0.2, 1.0);  // Wall color
    }
  `
);

extend({ WobblyMaterial });

export default function SecondRoom() {
  const wallRef = useRef();

  useFrame(({ clock }) => {
    if (wallRef.current) {
      wallRef.current.material.uniforms.time.value = clock.getElapsedTime();
    }
  });

  return (
    <>
      {/* L Wall */}
      <mesh position={[-24, 4, -32]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <meshStandardMaterial
          color="darkslateblue"
          emissive={new Color(0x1e2a47)}
          emissiveIntensity={0.8}
        />
        <Geometry>
          <Base>
            <boxGeometry args={[32, 15, 0.1]} />
          </Base>

          <Subtraction position={[0, -2, 0]}>
            <Geometry>
              <Base position={[0, -2, 0]}>
                <boxGeometry args={[6, 8, 0.2]} />
              </Base>
              <Addition position={[0, 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[3, 3, 0.2, 32]} />
              </Addition>
            </Geometry>
          </Subtraction>
        </Geometry>
      </mesh>

      {/* B Wall (Back Wall) */}
      <mesh position={[0, 4, -48]}>
        <boxGeometry args={[48, 15, 0.1]} />
        <meshStandardMaterial
          color="indigo"
          emissive={new Color(0x260e6b)}
          emissiveIntensity={0.9}
        />
      </mesh>

      {/* R Wall  */}
      <mesh ref={wallRef} position={[24, 4, -32]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[32, 15, 0.1]} />
        <wobblyMaterial />
      </mesh>

      {/* Floor */}
      <mesh position={[0, -3.5, -32]} receiveShadow>
        <boxGeometry args={[48, 0.1, 32]} />
        <meshStandardMaterial
          color="slategray"
          emissive={new Color(0x1a2635)}
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.7}
        />
      </mesh>
    </>
  );
}
