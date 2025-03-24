import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";
import { Color } from 'three';

export default function Hallway() {
  return (
    <>
      {/* Hallway Walls */}
      <mesh position={[-31.5, 4, -32]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <meshStandardMaterial
          color="slateblue"
          emissive={new Color(0x1b2a3d)}
          emissiveIntensity={0.6}
        />
        <Geometry>
          <Base>
            <boxGeometry args={[6, 15, 15]} />
          </Base>
          <Subtraction position={[0, -2, 0]}>
            <Geometry>
              <Base position={[0, -2, 0]}>
                <boxGeometry args={[5.95, 8, 30]} />
              </Base>
              <Addition position={[0, 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[3, 3, 30, 32]} />
              </Addition>
            </Geometry>
          </Subtraction>
        </Geometry>
      </mesh>

      {/* Hallway Floor */}
      <mesh position={[-31.5, -3.5, -32]} rotation={[Math.PI / 2, Math.PI, 0]} receiveShadow>
        <meshStandardMaterial
          color="darkslategray"
          emissive={new Color(0x101b24)}
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
        <boxGeometry args={[15, 5.98, 0.1]} />
      </mesh>
    </>
  );
}
