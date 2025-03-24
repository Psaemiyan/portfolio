import { Geometry, Base, Subtraction, Addition } from "@react-three/csg";


export default function FourthRoom()
{
    return <>
    {/* B Wall */}
    <mesh position={[-63, -6, 4]}>
        <meshBasicMaterial color='orange' />
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
        <boxGeometry args={[32, 15, 0.1]} />
        <meshStandardMaterial color="yellow" />
    </mesh>

    {/* R Wall */}
    <mesh position={[-39, -6, 20]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[32, 15, 0.1]} />
        <meshStandardMaterial color="blue" />
    </mesh>

    {/* Floor */}
    <mesh position={[-63, -13.5, 20]} receiveShadow>
        <boxGeometry args={[48, 0.1, 32]} />
        <meshStandardMaterial color="lightgray" />
    </mesh>

      
    </>
}