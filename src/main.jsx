import { Canvas } from '@react-three/fiber'
import { createRoot } from 'react-dom/client'
import { OrbitControls } from '@react-three/drei'
import Scene from './scene'
import './App.css'
import { Perf } from 'r3f-perf'

createRoot(document.getElementById('root')).render(
  <Canvas
    shadows 
    camera={{ position: [0, 3, 25], fov: 50 }}
  >
    <ambientLight intensity={1.5} />
    <directionalLight position={[5, 5, 5]} castShadow intensity={1} />
    <Perf />
    {/* <OrbitControls maxPolarAngle={Math.PI / 2} minDistance={0.5} maxDistance={5} /> */}
    <OrbitControls makeDefault />
    <Scene />
  </Canvas>
)
