import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";
import { Color } from 'three';

export default function ThirdRoom() {
  return (
    <>
      {/* R Wall */}
      <mesh position={[-39, 4, -32]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <meshStandardMaterial
          color="charcoal"
          emissive={new Color(0x2a2a2a)}
          emissiveIntensity={0.6}
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

      {/* F Wall */}
      <mesh position={[-63, 4, -16]}>
        <meshStandardMaterial
          color="darkslateblue"
          emissive={new Color(0x2f3a5f)}
          emissiveIntensity={0.5}
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

      {/* B Wall */}
      <mesh position={[-63, 4, -48]}>
        <boxGeometry args={[48, 15, 0.1]} />
        <meshStandardMaterial
          color="midnightblue"
          emissive={new Color(0x1a2a3e)}
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* L Wall */}
      <mesh position={[-87, 4, -32]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <meshStandardMaterial
          color="deepblue"
          emissive={new Color(0x1b2d50)}
          emissiveIntensity={0.7}
        />
        <boxGeometry args={[32, 15, 0.1]} />
      </mesh>

      {/* Floor */}
      <mesh position={[-63, -3.5, -32]} receiveShadow>
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
