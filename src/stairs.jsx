import { Geometry, Base, Subtraction } from "@react-three/csg";
import { Color } from 'three';

export default function Stairs() {
  return (
    <>
      {/* Stairs */}
      <mesh castShadow receiveShadow position={[-63, -8.5, -6]} rotation={[0, Math.PI, 0]}>
        <meshStandardMaterial
          color="slateblue"
          emissive={new Color(0x1b2a3d)}
          emissiveIntensity={0.5}
        />
        <Geometry>
          <Base>
            <boxGeometry args={[6, 10, 20]} />
          </Base>
          {[...Array(10)].map((_, i) => (
            <Subtraction key={i} position={[0, 5 - i + (i * 0.5), -i * 2 + 8]}>
              <boxGeometry args={[8, i + 1, 2]} />
            </Subtraction>
          ))}
        </Geometry>
      </mesh>

      {/* Walls */}
      {/* <mesh position={[-66.2, -3.3, -6]}>
        <boxGeometry args={[0.2, 20.5, 20]} />
        <meshStandardMaterial
          color="slateblue"
          emissive={new Color(0x1b2a3d)}
          emissiveIntensity={0.6}
        />
      </mesh>
      <mesh position={[-59.8, -3.3, -6]}>
        <boxGeometry args={[0.2, 20.5, 20]} />
        <meshStandardMaterial
          color="slateblue"
          emissive={new Color(0x1b2a3d)}
          emissiveIntensity={0.6}
        />
      </mesh> */}
    </>
  );
}
