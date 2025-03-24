import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';


export default function Observer() {
    const userRef = useRef();
    let time = 0;
    useFrame(() => {
        if (userRef.current) {
            time += 0.02;
            userRef.current.position.y = Math.sin(time) * 0.2; 
        }
    });
    return (
        <group>
            <mesh ref={userRef} position={[0, 1.5, 0]}>
                <sphereGeometry args={[0.15, 32, 32]} />
                <meshStandardMaterial emissive={new THREE.Color(0x33bbff)} emissiveIntensity={3} />
            </mesh>
        </group>
    );
}
