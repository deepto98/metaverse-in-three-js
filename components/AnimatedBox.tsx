import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useHelper } from '@react-three/drei';
import { BoxHelper } from 'three';

const AnimatedBox = () => {
    const meshRef = useRef<THREE.Mesh>(null)
  // ---HOOKS---

    useHelper(meshRef,BoxHelper,"blue")

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