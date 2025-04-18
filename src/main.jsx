import { Canvas } from '@react-three/fiber'
import { createRoot } from 'react-dom/client'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import './App.css'

import FirstRoom from './fRoom'
import SecondRoom from './sRoom.jsx'
import Hallway from './hallway'
import ThirdRoom from './tRoom.jsx'
import Stairs from './stairs.jsx'
import FourthRoom from './foRoom.jsx'
import Observer from './observer.jsx'


createRoot(document.getElementById('root')).render(
  <Canvas
    shadows 
    camera={{ position: [0, 0, 0] }}
  >
    <ambientLight intensity={.5} />
    <Perf />
    <OrbitControls enablePan={true} />
    {/* <FirstRoom /> */}
    <SecondRoom />
    <Hallway />
    <ThirdRoom />
    <Stairs />
    <FourthRoom />
    {/* <Observer /> */}
  </Canvas>
)
