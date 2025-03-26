import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";
import * as THREE from 'three'
import { useMemo, useRef } from "react";
import { Physics, RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";


export default function FirstRoom() {
  const sphereGeometry = useMemo(() => new THREE.SphereGeometry(1, 32, 32), []);
  const sphereRef = useRef();

  return (
    <Physics gravity={ [ 0, - 9.08, 0 ] }>

    <group>
      {/* B Wall */}
      <mesh castShadow receiveShadow position={[0, 4, -16]}>
        <meshStandardMaterial
          color="midnightblue"
          emissive={new THREE.Color(0x1e2a47)}
          emissiveIntensity={0.3}
        />
        <Geometry>
          <Base>
            <boxGeometry args={[48, 15, 0.1]} />
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

      {/* L Wall */}
      <mesh position={[-24, 4, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <meshStandardMaterial
          color="indigo"
          emissive={new THREE.Color(0x2a0045)}
          emissiveIntensity={0.3}
        />
        <boxGeometry args={[32, 15, 0.1]} />
      </mesh>

      {/* R Wall */}
      <mesh position={[24, 4, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <meshStandardMaterial
          color="slateblue"
          emissive={new THREE.Color(0x003d00)}
          emissiveIntensity={0.3}
        />
        <boxGeometry args={[32, 15, 0.1]} />
      </mesh>

      {/* Floor */}
      <RigidBody type="fixed">
      <mesh position={[0, -3.5, 0]} receiveShadow>
        <boxGeometry args={[48, 0.3, 32]} />
        <meshStandardMaterial
          color="slategray"
          emissive={new THREE.Color(0x1a2635)}
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.7}
        />
      </mesh>
      </RigidBody>



      <RigidBody colliders="ball" restitution={0.8}>
      <mesh ref={sphereRef} position={[0, 10, 0]} scale={2.5} geometry={sphereGeometry}>
        <meshStandardMaterial
          emissive={new THREE.Color(0xff00ff)}  // Neon Pink
          emissiveIntensity={2}
        />
      </mesh>
      </RigidBody>


        <mesh position={[-4, 8, 0]} scale={2.5} geometry={sphereGeometry}>
          <meshStandardMaterial
            emissive={new THREE.Color(0x00ff00)}  // Neon Green
            emissiveIntensity={2}
          />
        </mesh>
  



      <mesh position={[4, 8, 0]} scale={2.5} geometry={sphereGeometry}>
        <meshStandardMaterial
          emissive={new THREE.Color(0x00ffff)}  // Neon Cyan
          emissiveIntensity={2}
        />
      </mesh>

      <mesh position={[8, 10, 0]} scale={2.5} geometry={sphereGeometry}>
        <meshStandardMaterial
          emissive={new THREE.Color(0xffff00)}  // Neon Yellow
          emissiveIntensity={2}
        />
      </mesh>

      <mesh position={[-8, 12, 0]} scale={2.5} geometry={sphereGeometry}>
        <meshStandardMaterial
          emissive={new THREE.Color(0xff0000)}  // Neon Red
          emissiveIntensity={2}
        />
      </mesh>

    </group>
    </Physics>
    
  );
}
