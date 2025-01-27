import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Environment } from '@react-three/drei'
import './Home.css'

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="royalblue" />
      </mesh>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} />
    </>
  )
}

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Hi, I'm [Your Name]</h1>
        <p>A [Your Profession] passionate about creating amazing digital experiences.</p>
        <div className="home-3d-scene">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <Scene />
              <OrbitControls />
              <Environment preset="sunset" />
            </Suspense>
          </Canvas>
        </div>
        <div className="home-cta">
          <a href="/projects" className="btn btn-primary">View My Projects</a>
          <a href="/contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </div>
  )
}

export default Home
