import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Float } from '@react-three/drei'
import './About.css'

function AnimatedCube() {
  const meshRef = useRef()

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5
    meshRef.current.rotation.y += delta * 0.3
  })

  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Float>
  )
}

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-bio">
          <div className="about-3d-scene">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <AnimatedCube />
                <OrbitControls />
                <Environment preset="city" />
              </Suspense>
            </Canvas>
          </div>
          <div className="about-text">
            <img src="/path/to/your/profile-pic.jpg" alt="Your Name" className="profile-pic" />
            <p>
              Hello! I'm [Your Name], a [Your Profession] with a passion for [Your Interests].
              I have experience in [Key Technologies/Skills] and love creating innovative solutions.
            </p>
          </div>
        </div>
        <div className="about-details">
          <h3>Background</h3>
          <p>Detailed information about your professional journey, education, and key achievements.</p>
        </div>
      </div>
    </div>
  )
}

export default About
