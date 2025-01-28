import { OrbitControls, Text } from "@react-three/drei";

export default function App(){
  return <>
    <OrbitControls makeDefault />
    
    <mesh>
      <boxGeometry/>
      <meshStandardMaterial color={'blue'}/>
    </mesh>

    <Text
      position={[0, 1, 0]}
      fontSize={.2}
      color="navy"
      anchorX="center"
      anchorY="middle"
    >
      Portfolio to be
    </Text>
  </>
}