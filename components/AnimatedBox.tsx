import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { useHelper } from '@react-three/drei';
import { BoxHelper } from 'three';

type Props = {
  isTesting: boolean
}

const AnimatedBox: React.FC<Props> = ({ isTesting }) => {
  const meshRef = useRef<THREE.Mesh>(null)

  // ---HOOKS---
  { isTesting ? useHelper(meshRef, BoxHelper, "blue") : null; }

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime()
    }
  });

  return (
    <mesh visible={true} ref={meshRef} scale={[0.5, 0.5, 0.5]}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}

export default AnimatedBox