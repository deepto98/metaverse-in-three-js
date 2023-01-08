import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei';
import { BoxHelper } from 'three';


const TexturedSphere: React.FC = () => {
  /* Online Textures : Textures.com, Polyhaven
   Textures are maps that have to be applied to materials. I used:
   https://polyhaven.com/a/brick_floor_003
  */

  //Import Textures
  const map = useTexture("./textures/brick_floor_003_diffuse_1k.png");
  const displacementMap = useTexture("./textures/brick_floor_003_displacement_1k.png");
  const normalMap = useTexture("./textures/brick_floor_003_nor_gl_1k.png");
  const roughnessMap = useTexture("./textures/brick_floor_003_rough_1k.png");

  return (
    <>

      <mesh scale={[0.5, 0.5, 0.5]} position={[-1, 0, 0]}>
        <sphereGeometry />
        <meshToonMaterial  />
      </mesh>

      <mesh scale={[0.5, 0.5, 0.5]} position={[0, 0, 0]}>
        <sphereGeometry args={[1,100,100]} />
        <meshStandardMaterial
          // wireframe
          map={map}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementMap={displacementMap}//tries to disperse the geometry,
          //displacementMap alone looks crazy, so the segments have to be 
          //increased in sphereGeometry, now its normal, but too big.
          //Has to be scaled down with displacementScale
          displacementScale={0.15}
          // displacementBias={-10} // gives a crazy feel
        />
      </mesh>

      <mesh scale={[0.5, 0.5, 0.5]} position={[1, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial
          // wireframe
          map={map} />
      </mesh>
    </>


  );
}

export default TexturedSphere