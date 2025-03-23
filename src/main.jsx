import { Canvas } from '@react-three/fiber'
import { createRoot } from 'react-dom/client'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import './App.css'

import FirstRoom from './fRoom'
import SecondRoom from './sRoom.jsx'
import Hallway from './hallway'
import ThirdRoom from './tRoom.jsx'

createRoot(document.getElementById('root')).render(
  <Canvas
    shadows 
    camera={{ position: [0, 3, 25], fov: 50 }}
  >
    <ambientLight intensity={1.5} />
    <directionalLight position={[5, 5, 5]} castShadow intensity={1} />
    <Perf />
    <OrbitControls enablePan={true} />
    <FirstRoom />
    <SecondRoom />
    <Hallway />
    <ThirdRoom />
  </Canvas>
)
