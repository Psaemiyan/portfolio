import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";
import * as THREE from 'three'
import { Physics, RigidBody } from "@react-three/rapier";
import { useState, useRef } from "react";


export default function FirstRoom() {

  const [targetHit, setTargetHit] = useState(false);
  const ballRef = useRef();
  const targetRef = useRef();

  const launchBall = () => {
    if (ballRef.current) {
      console.log('clicked')
    }
  };

  const checkCollision = () => {
    if (ballRef.current && targetRef.current) {
      const ballPosition = ballRef.current.translation();
      const targetPosition = targetRef.current.translation();

      if (ballPosition.distanceTo(targetPosition) < 2) {
        setTargetHit(true);
      }
    }
  };

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


       {/* Target (Ball to hit) */}
       <RigidBody type="fixed" ref={targetRef}>
          <mesh position={[0, -2, -10]} receiveShadow>
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial
              color="yellow"
              emissive={new THREE.Color(0xffff00)}
              emissiveIntensity={1}
            />
          </mesh>
        </RigidBody>

        {/* Launchable Ball */}
        <RigidBody ref={ballRef} colliders="ball" restitution={0.8}>
          <mesh
            position={[0, -2, 0]} 
            onClick={launchBall} 
            receiveShadow
            castShadow
          >
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
              color="red"
              emissive={new THREE.Color(0xff0000)}
              emissiveIntensity={1.5}
            />
          </mesh>
        </RigidBody>

      {checkCollision()}

      {/* Display success message if the target is hit */}
      {targetHit && <textGeometry args={["Target Hit!", { font: 'Arial', size: 1, height: 0.1 }]} />}

    </group>
    </Physics>
    
  );
}
