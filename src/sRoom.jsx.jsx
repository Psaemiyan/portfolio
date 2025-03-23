import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";

export default function SecondRoom() {
  return (
    <>

      {/* Side Wall*/}
      <mesh position={[-24, 4, -32]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
            <meshBasicMaterial color='green' />
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


        {/* B Wall */}
        <mesh position={[0, 4, -48]}>
            <boxGeometry args={[48, 15, 0.1]} />
            <meshStandardMaterial color='pink' />
        </mesh>

        {/* R Wall */}
      <mesh position={[24, 4, -32]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[32, 15, 0.1]} />
        <meshStandardMaterial color="yellow" />
      </mesh>


        {/* Floor */}
      <mesh position={[0, -3.5, -32]} receiveShadow>
        <boxGeometry args={[48, 0.1, 32]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
    </>
  );
}
