import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";

export default function Hallway() {
  return (
    <>
      {/* Hallway Walls (box shapes) */}
      <mesh position={[0, 4, -16]} receiveShadow>
        <meshStandardMaterial color="gray" />
        <Geometry>
          <Base>
            <boxGeometry args={[4, 12, 10]} />
          </Base>

          {/* Subtract the arch from the center */}
          <Subtraction position={[0, 0, 0]}>
            <Geometry>
              <Base position={[0, 0, 0]}>
                {/* Large box for hallway structure */}
                <boxGeometry args={[4, 12, 10]} />
              </Base>

              {/* Create the arch using a cylinder */}
              <Addition position={[0, 0, -5]}>
                <cylinderGeometry args={[2, 2, 10, 32, 1, false, 0, Math.PI]} />
              </Addition>
            </Geometry>
          </Subtraction>
        </Geometry>
      </mesh>

      {/* Floor of the Hallway */}
      <mesh position={[0, -2, -16]} receiveShadow>
        <boxGeometry args={[4, 0.1, 10]} />
        <meshStandardMaterial color="darkgray" />
      </mesh>
    </>
  );
}
