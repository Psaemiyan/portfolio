import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";
import { Color } from 'three';

export default function FourthRoom() {
  return (
    <>
      {/* B Wall */}
      <mesh position={[-63, -6, 4]}>
        <meshStandardMaterial
          color="darkslategray"
          emissive={new Color(0x2f3b3d)}
          emissiveIntensity={0.6}
        />
        <Geometry>
          <Base>
            <boxGeometry args={[48, 15, 0.1]} />
          </Base>
          <Subtraction position={[0, -3, 0]}>
            <boxGeometry args={[6, 12, 0.2]} />
          </Subtraction>
        </Geometry>
      </mesh>

      {/* L Wall */}
      <mesh position={[-87, -6, 20]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <meshStandardMaterial
          color="slateblue"
          emissive={new Color(0x1b2a3d)}
          emissiveIntensity={0.5}
        />
        <boxGeometry args={[32, 15, 0.1]} />
      </mesh>

      {/* R Wall */}
      <mesh position={[-39, -6, 20]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <meshStandardMaterial
          color="midnightblue"
          emissive={new Color(0x0a1f3b)}
          emissiveIntensity={0.5}
        />
        <boxGeometry args={[32, 15, 0.1]} />
      </mesh>

      {/* Floor */}
      <mesh position={[-63, -13.5, 20]} receiveShadow>
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
