import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Torus, useHelper, Dodecahedron, Capsule, TorusKnot } from '@react-three/drei';
import { BoxHelper } from 'three';


const TexturedSphere: React.FC = () => {

  return (
    <>
      <mesh scale={[0.5, 0.5, 0.5]} position={[-1, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>

      <mesh scale={[0.5, 0.5, 0.5]} position={[0, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>

      <mesh scale={[0.5, 0.5, 0.5]} position={[1, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>
    </>


  );
}

export default TexturedSphere