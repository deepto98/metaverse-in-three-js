import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Torus, useHelper, Dodecahedron, Capsule, TorusKnot } from '@react-three/drei';
import { BoxHelper } from 'three';


const TestGeometry: React.FC = () => {

  return (
    //Mesh = Material + Geometry */}
    <mesh scale={[0.5, 0.5, 0.5]}>
      {/* * <boxGeometry /> */}
      {/* <coneGeometry />  */}
      {/* <tubeGeometry /> */}
       {/* <latheGeometry /> */}
      {/* <meshStandardMaterial color = {"blue"} wireframe/>  */}
    
      <TorusKnot /> //default shapes from drei

    </mesh>
    // <Torus />
  );
}

export default TestGeometry