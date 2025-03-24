import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import observerFragmentShader from './shaders/observer/fragment.glsl';
import observerVertexShader from './shaders/observer/vertex.glsl';

export default function Observer() {
    const observerRef = useRef();

    const vertices = new Float32Array([
        // x, y, z for each vertex
        -0.5,  0.5, 0,  // Top-left
         0.5,  0.5, 0,  // Top-right
        -0.5, -0.5, 0,  // Bottom-left
         0.5, -0.5, 0,  // Bottom-right
    ]);

    const uvs = new Float32Array([
        0, 1,  // Top-left
        1, 1,  // Top-right
        0, 0,  // Bottom-left
        1, 0,  // Bottom-right
    ]);

    const indices = new Uint16Array([0, 1, 2, 2, 1, 3]);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2)); 
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));

    return (
      <mesh geometry={geometry}>
        <shaderMaterial
          ref={observerRef}
          vertexShader={observerVertexShader}
          fragmentShader={observerFragmentShader}
          blending={THREE.AdditiveBlending}  
          side={THREE.DoubleSide}          
          transparent={true}                
        />
      </mesh>
    );
}
