
import { Canvas } from '@react-three/fiber'
import { NextPage } from 'next'


const Home: NextPage=()=> {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
};
export default Home;
